/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/** paginationSchema */
export interface Def0 {
  /** @default 10 */
  take?: 5 | 10 | 25;
  /** @pattern ^[0-9a-fA-F]{24}$ */
  from?: string;
}

/** paramIdSchema */
export interface Def1 {
  /** @pattern ^[0-9a-fA-F]{24}$ */
  id: string;
}

/** messageResponseSchema */
export interface Def2 {
  message?: string;
}

/** categorySchema */
export type Def3 = {
  id?: string;
  name?: string;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: null | string;
  products?: Def4[];
};

/** productSchema */
export interface Def4 {
  id?: string;
  name?: string;
  price?: number;
  published?: boolean;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: null | string;
  category?: Def3;
}
