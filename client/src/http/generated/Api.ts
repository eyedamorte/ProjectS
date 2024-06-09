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

import { Def2, Def3, Def4 } from './data-contracts';
import { HttpClient, RequestParams } from './http-client';

export class Api<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description List all categories, paginated using a cursor paginator.
   *
   * @tags categories
   * @name V1CategoriesList
   * @request GET:/api/v1/categories/
   */
  v1CategoriesList = (
    query?: {
      /** @default 10 */
      take?: 5 | 10 | 25;
      /** @pattern ^[0-9a-fA-F]{24}$ */
      from?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      {
        results?: Def3[];
      },
      Def2
    >({
      path: `/api/v1/categories/`,
      method: 'GET',
      query: query,
      format: 'json',
      ...params,
    });
  /**
   * @description Creates a new Category
   *
   * @tags categories
   * @name V1CategoriesCreate
   * @request POST:/api/v1/categories/
   */
  v1CategoriesCreate = (
    body: {
      name: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<Def3, Def2>({
      path: `/api/v1/categories/`,
      method: 'POST',
      body: body,
      format: 'json',
      ...params,
    });
  /**
   * @description Get a single category)
   *
   * @tags categories
   * @name V1CategoriesDetail
   * @request GET:/api/v1/categories/{id}
   */
  v1CategoriesDetail = (id: string, params: RequestParams = {}) =>
    this.request<Def3, Def2>({
      path: `/api/v1/categories/${id}`,
      method: 'GET',
      format: 'json',
      ...params,
    });
  /**
   * @description Removes an especific cateory from the collection
   *
   * @tags categories
   * @name V1CategoriesDelete
   * @request DELETE:/api/v1/categories/{id}
   */
  v1CategoriesDelete = (id: string, params: RequestParams = {}) =>
    this.request<Def2, Def2>({
      path: `/api/v1/categories/${id}`,
      method: 'DELETE',
      format: 'json',
      ...params,
    });
  /**
   * @description Updates a Category
   *
   * @tags categories
   * @name V1CategoriesUpdate
   * @request PUT:/api/v1/categories/{id}
   */
  v1CategoriesUpdate = (
    id: string,
    body: {
      name: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<Def3, Def2>({
      path: `/api/v1/categories/${id}`,
      method: 'PUT',
      body: body,
      format: 'json',
      ...params,
    });
  /**
   * @description List all products, paginated using a cursor paginator.
   *
   * @tags products
   * @name V1ProductsList
   * @request GET:/api/v1/products/
   */
  v1ProductsList = (
    query?: {
      /** @default 10 */
      take?: 5 | 10 | 25;
      /** @pattern ^[0-9a-fA-F]{24}$ */
      from?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      {
        results?: Def4[];
      },
      Def2
    >({
      path: `/api/v1/products/`,
      method: 'GET',
      query: query,
      format: 'json',
      ...params,
    });
  /**
   * @description Creates a new Product
   *
   * @tags products
   * @name V1ProductsCreate
   * @request POST:/api/v1/products/
   */
  v1ProductsCreate = (
    body: {
      name: string;
      price: number;
      /** @default true */
      published?: boolean;
      /** @pattern ^[0-9a-fA-F]{24}$ */
      categoryId: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<Def4, Def2>({
      path: `/api/v1/products/`,
      method: 'POST',
      body: body,
      format: 'json',
      ...params,
    });
  /**
   * @description Get a single product and its category)
   *
   * @tags products
   * @name V1ProductsDetail
   * @request GET:/api/v1/products/{id}
   */
  v1ProductsDetail = (id: string, params: RequestParams = {}) =>
    this.request<Def4, Def2>({
      path: `/api/v1/products/${id}`,
      method: 'GET',
      format: 'json',
      ...params,
    });
  /**
   * @description Removes an especific product from the collection
   *
   * @tags products
   * @name V1ProductsDelete
   * @request DELETE:/api/v1/products/{id}
   */
  v1ProductsDelete = (id: string, params: RequestParams = {}) =>
    this.request<Def2, Def2>({
      path: `/api/v1/products/${id}`,
      method: 'DELETE',
      format: 'json',
      ...params,
    });
  /**
   * @description Updates a Product
   *
   * @tags products
   * @name V1ProductsUpdate
   * @request PUT:/api/v1/products/{id}
   */
  v1ProductsUpdate = (
    id: string,
    body: {
      name: string;
      price: number;
      /** @default true */
      published?: boolean;
      /** @pattern ^[0-9a-fA-F]{24}$ */
      categoryId: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<Def4, Def2>({
      path: `/api/v1/products/${id}`,
      method: 'PUT',
      body: body,
      format: 'json',
      ...params,
    });
}
