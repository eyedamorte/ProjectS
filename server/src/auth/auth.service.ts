import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { UsersService } from 'src/users/users.service';

import { PasswordService } from './password.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private passwordServide: PasswordService,
    private jwtService: JwtService,
  ) {}

  async signUp(email: string, password: string) {
    const user = await this.usersService.findByEmail(email);

    if (user) {
      throw new BadRequestException({ type: 'email-exists' });
    }

    const salt = this.passwordServide.getSalt();
    const hash = this.passwordServide.getHash(password, salt);

    const newUser = await this.usersService.create(email, hash, salt);

    const accessToken = await this.jwtService.signAsync({ id: newUser.id, email: newUser.email });

    return { accessToken };
  }

  async signIn(email: string, password: string) {
    const user = await this.usersService.findByEmail(email);

    if (!user) {
      throw new UnauthorizedException();
    }

    const hash = this.passwordServide.getHash(password, user.salt);

    if (hash !== user.hash) {
      throw new UnauthorizedException();
    }

    const accessToken = await this.jwtService.signAsync({ id: user.id, email: user.email });

    return { accessToken };
  }
}
