/**
 * Miscellaneous shared classes go here.
 */

import HttpStatusCodes from '@src/constants/HttpStatusCodes';

/**
 * Error with status code and message
 */
export class RouteError extends Error {
  public status: HttpStatusCodes;

  public constructor(status: HttpStatusCodes, message: string) {
    super(message);
    this.status = status;
  }

  static badRequest(message: string) {
    return new RouteError(HttpStatusCodes.BAD_REQUEST, message);
  }

  static internal(message: string) {
    return new RouteError(HttpStatusCodes.INTERNAL_SERVER_ERROR, message);
  }

  static forbidden(message: string) {
    return new RouteError(HttpStatusCodes.FORBIDDEN, message);
  }

  static unauthorized(message: string) {
    return new RouteError(HttpStatusCodes.UNAUTHORIZED, message);
  }
}
