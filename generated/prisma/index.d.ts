
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model users_ref
 * 
 */
export type users_ref = $Result.DefaultSelection<Prisma.$users_refPayload>
/**
 * Model family_ref
 * 
 */
export type family_ref = $Result.DefaultSelection<Prisma.$family_refPayload>
/**
 * Model participants
 * 
 */
export type participants = $Result.DefaultSelection<Prisma.$participantsPayload>
/**
 * Model transactions
 * 
 */
export type transactions = $Result.DefaultSelection<Prisma.$transactionsPayload>
/**
 * Model master_category
 * 
 */
export type master_category = $Result.DefaultSelection<Prisma.$master_categoryPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users_ref`: Exposes CRUD operations for the **users_ref** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users_refs
    * const users_refs = await prisma.users_ref.findMany()
    * ```
    */
  get users_ref(): Prisma.users_refDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.family_ref`: Exposes CRUD operations for the **family_ref** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Family_refs
    * const family_refs = await prisma.family_ref.findMany()
    * ```
    */
  get family_ref(): Prisma.family_refDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.participants`: Exposes CRUD operations for the **participants** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Participants
    * const participants = await prisma.participants.findMany()
    * ```
    */
  get participants(): Prisma.participantsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transactions`: Exposes CRUD operations for the **transactions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transactions.findMany()
    * ```
    */
  get transactions(): Prisma.transactionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.master_category`: Exposes CRUD operations for the **master_category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Master_categories
    * const master_categories = await prisma.master_category.findMany()
    * ```
    */
  get master_category(): Prisma.master_categoryDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    users: 'users',
    users_ref: 'users_ref',
    family_ref: 'family_ref',
    participants: 'participants',
    transactions: 'transactions',
    master_category: 'master_category'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "users" | "users_ref" | "family_ref" | "participants" | "transactions" | "master_category"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      users_ref: {
        payload: Prisma.$users_refPayload<ExtArgs>
        fields: Prisma.users_refFieldRefs
        operations: {
          findUnique: {
            args: Prisma.users_refFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$users_refPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.users_refFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$users_refPayload>
          }
          findFirst: {
            args: Prisma.users_refFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$users_refPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.users_refFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$users_refPayload>
          }
          findMany: {
            args: Prisma.users_refFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$users_refPayload>[]
          }
          create: {
            args: Prisma.users_refCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$users_refPayload>
          }
          createMany: {
            args: Prisma.users_refCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.users_refDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$users_refPayload>
          }
          update: {
            args: Prisma.users_refUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$users_refPayload>
          }
          deleteMany: {
            args: Prisma.users_refDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.users_refUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.users_refUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$users_refPayload>
          }
          aggregate: {
            args: Prisma.Users_refAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers_ref>
          }
          groupBy: {
            args: Prisma.users_refGroupByArgs<ExtArgs>
            result: $Utils.Optional<Users_refGroupByOutputType>[]
          }
          count: {
            args: Prisma.users_refCountArgs<ExtArgs>
            result: $Utils.Optional<Users_refCountAggregateOutputType> | number
          }
        }
      }
      family_ref: {
        payload: Prisma.$family_refPayload<ExtArgs>
        fields: Prisma.family_refFieldRefs
        operations: {
          findUnique: {
            args: Prisma.family_refFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$family_refPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.family_refFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$family_refPayload>
          }
          findFirst: {
            args: Prisma.family_refFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$family_refPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.family_refFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$family_refPayload>
          }
          findMany: {
            args: Prisma.family_refFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$family_refPayload>[]
          }
          create: {
            args: Prisma.family_refCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$family_refPayload>
          }
          createMany: {
            args: Prisma.family_refCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.family_refDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$family_refPayload>
          }
          update: {
            args: Prisma.family_refUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$family_refPayload>
          }
          deleteMany: {
            args: Prisma.family_refDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.family_refUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.family_refUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$family_refPayload>
          }
          aggregate: {
            args: Prisma.Family_refAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFamily_ref>
          }
          groupBy: {
            args: Prisma.family_refGroupByArgs<ExtArgs>
            result: $Utils.Optional<Family_refGroupByOutputType>[]
          }
          count: {
            args: Prisma.family_refCountArgs<ExtArgs>
            result: $Utils.Optional<Family_refCountAggregateOutputType> | number
          }
        }
      }
      participants: {
        payload: Prisma.$participantsPayload<ExtArgs>
        fields: Prisma.participantsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.participantsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$participantsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.participantsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$participantsPayload>
          }
          findFirst: {
            args: Prisma.participantsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$participantsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.participantsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$participantsPayload>
          }
          findMany: {
            args: Prisma.participantsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$participantsPayload>[]
          }
          create: {
            args: Prisma.participantsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$participantsPayload>
          }
          createMany: {
            args: Prisma.participantsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.participantsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$participantsPayload>
          }
          update: {
            args: Prisma.participantsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$participantsPayload>
          }
          deleteMany: {
            args: Prisma.participantsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.participantsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.participantsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$participantsPayload>
          }
          aggregate: {
            args: Prisma.ParticipantsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParticipants>
          }
          groupBy: {
            args: Prisma.participantsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParticipantsGroupByOutputType>[]
          }
          count: {
            args: Prisma.participantsCountArgs<ExtArgs>
            result: $Utils.Optional<ParticipantsCountAggregateOutputType> | number
          }
        }
      }
      transactions: {
        payload: Prisma.$transactionsPayload<ExtArgs>
        fields: Prisma.transactionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.transactionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.transactionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload>
          }
          findFirst: {
            args: Prisma.transactionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.transactionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload>
          }
          findMany: {
            args: Prisma.transactionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload>[]
          }
          create: {
            args: Prisma.transactionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload>
          }
          createMany: {
            args: Prisma.transactionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.transactionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload>
          }
          update: {
            args: Prisma.transactionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload>
          }
          deleteMany: {
            args: Prisma.transactionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.transactionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.transactionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload>
          }
          aggregate: {
            args: Prisma.TransactionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransactions>
          }
          groupBy: {
            args: Prisma.transactionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.transactionsCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionsCountAggregateOutputType> | number
          }
        }
      }
      master_category: {
        payload: Prisma.$master_categoryPayload<ExtArgs>
        fields: Prisma.master_categoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.master_categoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$master_categoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.master_categoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$master_categoryPayload>
          }
          findFirst: {
            args: Prisma.master_categoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$master_categoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.master_categoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$master_categoryPayload>
          }
          findMany: {
            args: Prisma.master_categoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$master_categoryPayload>[]
          }
          create: {
            args: Prisma.master_categoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$master_categoryPayload>
          }
          createMany: {
            args: Prisma.master_categoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.master_categoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$master_categoryPayload>
          }
          update: {
            args: Prisma.master_categoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$master_categoryPayload>
          }
          deleteMany: {
            args: Prisma.master_categoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.master_categoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.master_categoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$master_categoryPayload>
          }
          aggregate: {
            args: Prisma.Master_categoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMaster_category>
          }
          groupBy: {
            args: Prisma.master_categoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<Master_categoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.master_categoryCountArgs<ExtArgs>
            result: $Utils.Optional<Master_categoryCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    users?: usersOmit
    users_ref?: users_refOmit
    family_ref?: family_refOmit
    participants?: participantsOmit
    transactions?: transactionsOmit
    master_category?: master_categoryOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type Users_refCountOutputType
   */

  export type Users_refCountOutputType = {
    family_ref: number
  }

  export type Users_refCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    family_ref?: boolean | Users_refCountOutputTypeCountFamily_refArgs
  }

  // Custom InputTypes
  /**
   * Users_refCountOutputType without action
   */
  export type Users_refCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users_refCountOutputType
     */
    select?: Users_refCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Users_refCountOutputType without action
   */
  export type Users_refCountOutputTypeCountFamily_refArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: family_refWhereInput
  }


  /**
   * Count Type TransactionsCountOutputType
   */

  export type TransactionsCountOutputType = {
    participants: number
  }

  export type TransactionsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participants?: boolean | TransactionsCountOutputTypeCountParticipantsArgs
  }

  // Custom InputTypes
  /**
   * TransactionsCountOutputType without action
   */
  export type TransactionsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionsCountOutputType
     */
    select?: TransactionsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TransactionsCountOutputType without action
   */
  export type TransactionsCountOutputTypeCountParticipantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: participantsWhereInput
  }


  /**
   * Count Type Master_categoryCountOutputType
   */

  export type Master_categoryCountOutputType = {
    participants: number
  }

  export type Master_categoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participants?: boolean | Master_categoryCountOutputTypeCountParticipantsArgs
  }

  // Custom InputTypes
  /**
   * Master_categoryCountOutputType without action
   */
  export type Master_categoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Master_categoryCountOutputType
     */
    select?: Master_categoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Master_categoryCountOutputType without action
   */
  export type Master_categoryCountOutputTypeCountParticipantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: participantsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
    status: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
    status: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    name: string | null
    username: string | null
    password: string | null
    role: string | null
    status: number | null
    users_refId: string | null
    transactionId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    name: string | null
    username: string | null
    password: string | null
    role: string | null
    status: number | null
    users_refId: string | null
    transactionId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    name: number
    username: number
    password: number
    role: number
    status: number
    users_refId: number
    transactionId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
    status?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
    status?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    name?: true
    username?: true
    password?: true
    role?: true
    status?: true
    users_refId?: true
    transactionId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    name?: true
    username?: true
    password?: true
    role?: true
    status?: true
    users_refId?: true
    transactionId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    name?: true
    username?: true
    password?: true
    role?: true
    status?: true
    users_refId?: true
    transactionId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    name: string
    username: string
    password: string
    role: string
    status: number
    users_refId: string | null
    transactionId: string | null
    createdAt: Date
    updatedAt: Date
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    users_refId?: boolean
    transactionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    users_ref?: boolean | users$users_refArgs<ExtArgs>
    transactions?: boolean | users$transactionsArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>



  export type usersSelectScalar = {
    id?: boolean
    name?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    users_refId?: boolean
    transactionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "username" | "password" | "role" | "status" | "users_refId" | "transactionId" | "createdAt" | "updatedAt", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users_ref?: boolean | users$users_refArgs<ExtArgs>
    transactions?: boolean | users$transactionsArgs<ExtArgs>
  }

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      users_ref: Prisma.$users_refPayload<ExtArgs> | null
      transactions: Prisma.$transactionsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      username: string
      password: string
      role: string
      status: number
      users_refId: string | null
      transactionId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users_ref<T extends users$users_refArgs<ExtArgs> = {}>(args?: Subset<T, users$users_refArgs<ExtArgs>>): Prisma__users_refClient<$Result.GetResult<Prisma.$users_refPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    transactions<T extends users$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, users$transactionsArgs<ExtArgs>>): Prisma__transactionsClient<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'Int'>
    readonly name: FieldRef<"users", 'String'>
    readonly username: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly role: FieldRef<"users", 'String'>
    readonly status: FieldRef<"users", 'Int'>
    readonly users_refId: FieldRef<"users", 'String'>
    readonly transactionId: FieldRef<"users", 'String'>
    readonly createdAt: FieldRef<"users", 'DateTime'>
    readonly updatedAt: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.users_ref
   */
  export type users$users_refArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users_ref
     */
    select?: users_refSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users_ref
     */
    omit?: users_refOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: users_refInclude<ExtArgs> | null
    where?: users_refWhereInput
  }

  /**
   * users.transactions
   */
  export type users$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null
    where?: transactionsWhereInput
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Model users_ref
   */

  export type AggregateUsers_ref = {
    _count: Users_refCountAggregateOutputType | null
    _avg: Users_refAvgAggregateOutputType | null
    _sum: Users_refSumAggregateOutputType | null
    _min: Users_refMinAggregateOutputType | null
    _max: Users_refMaxAggregateOutputType | null
  }

  export type Users_refAvgAggregateOutputType = {
    weight: number | null
    height: number | null
  }

  export type Users_refSumAggregateOutputType = {
    weight: number | null
    height: number | null
  }

  export type Users_refMinAggregateOutputType = {
    EKTP: string | null
    type: string | null
    name: string | null
    birthplace: string | null
    birthdate: Date | null
    address: string | null
    subdistrict: string | null
    district: string | null
    city: string | null
    phone: string | null
    email: string | null
    gender: string | null
    weight: number | null
    height: number | null
    bloodType: string | null
    religion: string | null
    struct: string | null
  }

  export type Users_refMaxAggregateOutputType = {
    EKTP: string | null
    type: string | null
    name: string | null
    birthplace: string | null
    birthdate: Date | null
    address: string | null
    subdistrict: string | null
    district: string | null
    city: string | null
    phone: string | null
    email: string | null
    gender: string | null
    weight: number | null
    height: number | null
    bloodType: string | null
    religion: string | null
    struct: string | null
  }

  export type Users_refCountAggregateOutputType = {
    EKTP: number
    type: number
    name: number
    birthplace: number
    birthdate: number
    address: number
    subdistrict: number
    district: number
    city: number
    phone: number
    email: number
    gender: number
    weight: number
    height: number
    bloodType: number
    religion: number
    struct: number
    _all: number
  }


  export type Users_refAvgAggregateInputType = {
    weight?: true
    height?: true
  }

  export type Users_refSumAggregateInputType = {
    weight?: true
    height?: true
  }

  export type Users_refMinAggregateInputType = {
    EKTP?: true
    type?: true
    name?: true
    birthplace?: true
    birthdate?: true
    address?: true
    subdistrict?: true
    district?: true
    city?: true
    phone?: true
    email?: true
    gender?: true
    weight?: true
    height?: true
    bloodType?: true
    religion?: true
    struct?: true
  }

  export type Users_refMaxAggregateInputType = {
    EKTP?: true
    type?: true
    name?: true
    birthplace?: true
    birthdate?: true
    address?: true
    subdistrict?: true
    district?: true
    city?: true
    phone?: true
    email?: true
    gender?: true
    weight?: true
    height?: true
    bloodType?: true
    religion?: true
    struct?: true
  }

  export type Users_refCountAggregateInputType = {
    EKTP?: true
    type?: true
    name?: true
    birthplace?: true
    birthdate?: true
    address?: true
    subdistrict?: true
    district?: true
    city?: true
    phone?: true
    email?: true
    gender?: true
    weight?: true
    height?: true
    bloodType?: true
    religion?: true
    struct?: true
    _all?: true
  }

  export type Users_refAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users_ref to aggregate.
     */
    where?: users_refWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users_refs to fetch.
     */
    orderBy?: users_refOrderByWithRelationInput | users_refOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: users_refWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users_refs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users_refs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users_refs
    **/
    _count?: true | Users_refCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Users_refAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Users_refSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Users_refMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Users_refMaxAggregateInputType
  }

  export type GetUsers_refAggregateType<T extends Users_refAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers_ref]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers_ref[P]>
      : GetScalarType<T[P], AggregateUsers_ref[P]>
  }




  export type users_refGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: users_refWhereInput
    orderBy?: users_refOrderByWithAggregationInput | users_refOrderByWithAggregationInput[]
    by: Users_refScalarFieldEnum[] | Users_refScalarFieldEnum
    having?: users_refScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Users_refCountAggregateInputType | true
    _avg?: Users_refAvgAggregateInputType
    _sum?: Users_refSumAggregateInputType
    _min?: Users_refMinAggregateInputType
    _max?: Users_refMaxAggregateInputType
  }

  export type Users_refGroupByOutputType = {
    EKTP: string
    type: string
    name: string
    birthplace: string | null
    birthdate: Date | null
    address: string | null
    subdistrict: string | null
    district: string | null
    city: string | null
    phone: string | null
    email: string | null
    gender: string | null
    weight: number | null
    height: number | null
    bloodType: string | null
    religion: string | null
    struct: string | null
    _count: Users_refCountAggregateOutputType | null
    _avg: Users_refAvgAggregateOutputType | null
    _sum: Users_refSumAggregateOutputType | null
    _min: Users_refMinAggregateOutputType | null
    _max: Users_refMaxAggregateOutputType | null
  }

  type GetUsers_refGroupByPayload<T extends users_refGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Users_refGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Users_refGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Users_refGroupByOutputType[P]>
            : GetScalarType<T[P], Users_refGroupByOutputType[P]>
        }
      >
    >


  export type users_refSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    EKTP?: boolean
    type?: boolean
    name?: boolean
    birthplace?: boolean
    birthdate?: boolean
    address?: boolean
    subdistrict?: boolean
    district?: boolean
    city?: boolean
    phone?: boolean
    email?: boolean
    gender?: boolean
    weight?: boolean
    height?: boolean
    bloodType?: boolean
    religion?: boolean
    struct?: boolean
    family_ref?: boolean | users_ref$family_refArgs<ExtArgs>
    users?: boolean | users_ref$usersArgs<ExtArgs>
    _count?: boolean | Users_refCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users_ref"]>



  export type users_refSelectScalar = {
    EKTP?: boolean
    type?: boolean
    name?: boolean
    birthplace?: boolean
    birthdate?: boolean
    address?: boolean
    subdistrict?: boolean
    district?: boolean
    city?: boolean
    phone?: boolean
    email?: boolean
    gender?: boolean
    weight?: boolean
    height?: boolean
    bloodType?: boolean
    religion?: boolean
    struct?: boolean
  }

  export type users_refOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"EKTP" | "type" | "name" | "birthplace" | "birthdate" | "address" | "subdistrict" | "district" | "city" | "phone" | "email" | "gender" | "weight" | "height" | "bloodType" | "religion" | "struct", ExtArgs["result"]["users_ref"]>
  export type users_refInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    family_ref?: boolean | users_ref$family_refArgs<ExtArgs>
    users?: boolean | users_ref$usersArgs<ExtArgs>
    _count?: boolean | Users_refCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $users_refPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users_ref"
    objects: {
      family_ref: Prisma.$family_refPayload<ExtArgs>[]
      users: Prisma.$usersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      EKTP: string
      type: string
      name: string
      birthplace: string | null
      birthdate: Date | null
      address: string | null
      subdistrict: string | null
      district: string | null
      city: string | null
      phone: string | null
      email: string | null
      gender: string | null
      weight: number | null
      height: number | null
      bloodType: string | null
      religion: string | null
      struct: string | null
    }, ExtArgs["result"]["users_ref"]>
    composites: {}
  }

  type users_refGetPayload<S extends boolean | null | undefined | users_refDefaultArgs> = $Result.GetResult<Prisma.$users_refPayload, S>

  type users_refCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<users_refFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Users_refCountAggregateInputType | true
    }

  export interface users_refDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users_ref'], meta: { name: 'users_ref' } }
    /**
     * Find zero or one Users_ref that matches the filter.
     * @param {users_refFindUniqueArgs} args - Arguments to find a Users_ref
     * @example
     * // Get one Users_ref
     * const users_ref = await prisma.users_ref.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends users_refFindUniqueArgs>(args: SelectSubset<T, users_refFindUniqueArgs<ExtArgs>>): Prisma__users_refClient<$Result.GetResult<Prisma.$users_refPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users_ref that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {users_refFindUniqueOrThrowArgs} args - Arguments to find a Users_ref
     * @example
     * // Get one Users_ref
     * const users_ref = await prisma.users_ref.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends users_refFindUniqueOrThrowArgs>(args: SelectSubset<T, users_refFindUniqueOrThrowArgs<ExtArgs>>): Prisma__users_refClient<$Result.GetResult<Prisma.$users_refPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users_ref that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {users_refFindFirstArgs} args - Arguments to find a Users_ref
     * @example
     * // Get one Users_ref
     * const users_ref = await prisma.users_ref.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends users_refFindFirstArgs>(args?: SelectSubset<T, users_refFindFirstArgs<ExtArgs>>): Prisma__users_refClient<$Result.GetResult<Prisma.$users_refPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users_ref that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {users_refFindFirstOrThrowArgs} args - Arguments to find a Users_ref
     * @example
     * // Get one Users_ref
     * const users_ref = await prisma.users_ref.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends users_refFindFirstOrThrowArgs>(args?: SelectSubset<T, users_refFindFirstOrThrowArgs<ExtArgs>>): Prisma__users_refClient<$Result.GetResult<Prisma.$users_refPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users_refs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {users_refFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users_refs
     * const users_refs = await prisma.users_ref.findMany()
     * 
     * // Get first 10 Users_refs
     * const users_refs = await prisma.users_ref.findMany({ take: 10 })
     * 
     * // Only select the `EKTP`
     * const users_refWithEKTPOnly = await prisma.users_ref.findMany({ select: { EKTP: true } })
     * 
     */
    findMany<T extends users_refFindManyArgs>(args?: SelectSubset<T, users_refFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$users_refPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users_ref.
     * @param {users_refCreateArgs} args - Arguments to create a Users_ref.
     * @example
     * // Create one Users_ref
     * const Users_ref = await prisma.users_ref.create({
     *   data: {
     *     // ... data to create a Users_ref
     *   }
     * })
     * 
     */
    create<T extends users_refCreateArgs>(args: SelectSubset<T, users_refCreateArgs<ExtArgs>>): Prisma__users_refClient<$Result.GetResult<Prisma.$users_refPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users_refs.
     * @param {users_refCreateManyArgs} args - Arguments to create many Users_refs.
     * @example
     * // Create many Users_refs
     * const users_ref = await prisma.users_ref.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends users_refCreateManyArgs>(args?: SelectSubset<T, users_refCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users_ref.
     * @param {users_refDeleteArgs} args - Arguments to delete one Users_ref.
     * @example
     * // Delete one Users_ref
     * const Users_ref = await prisma.users_ref.delete({
     *   where: {
     *     // ... filter to delete one Users_ref
     *   }
     * })
     * 
     */
    delete<T extends users_refDeleteArgs>(args: SelectSubset<T, users_refDeleteArgs<ExtArgs>>): Prisma__users_refClient<$Result.GetResult<Prisma.$users_refPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users_ref.
     * @param {users_refUpdateArgs} args - Arguments to update one Users_ref.
     * @example
     * // Update one Users_ref
     * const users_ref = await prisma.users_ref.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends users_refUpdateArgs>(args: SelectSubset<T, users_refUpdateArgs<ExtArgs>>): Prisma__users_refClient<$Result.GetResult<Prisma.$users_refPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users_refs.
     * @param {users_refDeleteManyArgs} args - Arguments to filter Users_refs to delete.
     * @example
     * // Delete a few Users_refs
     * const { count } = await prisma.users_ref.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends users_refDeleteManyArgs>(args?: SelectSubset<T, users_refDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users_refs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {users_refUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users_refs
     * const users_ref = await prisma.users_ref.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends users_refUpdateManyArgs>(args: SelectSubset<T, users_refUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users_ref.
     * @param {users_refUpsertArgs} args - Arguments to update or create a Users_ref.
     * @example
     * // Update or create a Users_ref
     * const users_ref = await prisma.users_ref.upsert({
     *   create: {
     *     // ... data to create a Users_ref
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users_ref we want to update
     *   }
     * })
     */
    upsert<T extends users_refUpsertArgs>(args: SelectSubset<T, users_refUpsertArgs<ExtArgs>>): Prisma__users_refClient<$Result.GetResult<Prisma.$users_refPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users_refs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {users_refCountArgs} args - Arguments to filter Users_refs to count.
     * @example
     * // Count the number of Users_refs
     * const count = await prisma.users_ref.count({
     *   where: {
     *     // ... the filter for the Users_refs we want to count
     *   }
     * })
    **/
    count<T extends users_refCountArgs>(
      args?: Subset<T, users_refCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Users_refCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users_ref.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Users_refAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Users_refAggregateArgs>(args: Subset<T, Users_refAggregateArgs>): Prisma.PrismaPromise<GetUsers_refAggregateType<T>>

    /**
     * Group by Users_ref.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {users_refGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends users_refGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: users_refGroupByArgs['orderBy'] }
        : { orderBy?: users_refGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, users_refGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsers_refGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users_ref model
   */
  readonly fields: users_refFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users_ref.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__users_refClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    family_ref<T extends users_ref$family_refArgs<ExtArgs> = {}>(args?: Subset<T, users_ref$family_refArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$family_refPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends users_ref$usersArgs<ExtArgs> = {}>(args?: Subset<T, users_ref$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users_ref model
   */
  interface users_refFieldRefs {
    readonly EKTP: FieldRef<"users_ref", 'String'>
    readonly type: FieldRef<"users_ref", 'String'>
    readonly name: FieldRef<"users_ref", 'String'>
    readonly birthplace: FieldRef<"users_ref", 'String'>
    readonly birthdate: FieldRef<"users_ref", 'DateTime'>
    readonly address: FieldRef<"users_ref", 'String'>
    readonly subdistrict: FieldRef<"users_ref", 'String'>
    readonly district: FieldRef<"users_ref", 'String'>
    readonly city: FieldRef<"users_ref", 'String'>
    readonly phone: FieldRef<"users_ref", 'String'>
    readonly email: FieldRef<"users_ref", 'String'>
    readonly gender: FieldRef<"users_ref", 'String'>
    readonly weight: FieldRef<"users_ref", 'Int'>
    readonly height: FieldRef<"users_ref", 'Int'>
    readonly bloodType: FieldRef<"users_ref", 'String'>
    readonly religion: FieldRef<"users_ref", 'String'>
    readonly struct: FieldRef<"users_ref", 'String'>
  }
    

  // Custom InputTypes
  /**
   * users_ref findUnique
   */
  export type users_refFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users_ref
     */
    select?: users_refSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users_ref
     */
    omit?: users_refOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: users_refInclude<ExtArgs> | null
    /**
     * Filter, which users_ref to fetch.
     */
    where: users_refWhereUniqueInput
  }

  /**
   * users_ref findUniqueOrThrow
   */
  export type users_refFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users_ref
     */
    select?: users_refSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users_ref
     */
    omit?: users_refOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: users_refInclude<ExtArgs> | null
    /**
     * Filter, which users_ref to fetch.
     */
    where: users_refWhereUniqueInput
  }

  /**
   * users_ref findFirst
   */
  export type users_refFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users_ref
     */
    select?: users_refSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users_ref
     */
    omit?: users_refOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: users_refInclude<ExtArgs> | null
    /**
     * Filter, which users_ref to fetch.
     */
    where?: users_refWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users_refs to fetch.
     */
    orderBy?: users_refOrderByWithRelationInput | users_refOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users_refs.
     */
    cursor?: users_refWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users_refs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users_refs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users_refs.
     */
    distinct?: Users_refScalarFieldEnum | Users_refScalarFieldEnum[]
  }

  /**
   * users_ref findFirstOrThrow
   */
  export type users_refFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users_ref
     */
    select?: users_refSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users_ref
     */
    omit?: users_refOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: users_refInclude<ExtArgs> | null
    /**
     * Filter, which users_ref to fetch.
     */
    where?: users_refWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users_refs to fetch.
     */
    orderBy?: users_refOrderByWithRelationInput | users_refOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users_refs.
     */
    cursor?: users_refWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users_refs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users_refs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users_refs.
     */
    distinct?: Users_refScalarFieldEnum | Users_refScalarFieldEnum[]
  }

  /**
   * users_ref findMany
   */
  export type users_refFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users_ref
     */
    select?: users_refSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users_ref
     */
    omit?: users_refOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: users_refInclude<ExtArgs> | null
    /**
     * Filter, which users_refs to fetch.
     */
    where?: users_refWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users_refs to fetch.
     */
    orderBy?: users_refOrderByWithRelationInput | users_refOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users_refs.
     */
    cursor?: users_refWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users_refs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users_refs.
     */
    skip?: number
    distinct?: Users_refScalarFieldEnum | Users_refScalarFieldEnum[]
  }

  /**
   * users_ref create
   */
  export type users_refCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users_ref
     */
    select?: users_refSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users_ref
     */
    omit?: users_refOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: users_refInclude<ExtArgs> | null
    /**
     * The data needed to create a users_ref.
     */
    data: XOR<users_refCreateInput, users_refUncheckedCreateInput>
  }

  /**
   * users_ref createMany
   */
  export type users_refCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users_refs.
     */
    data: users_refCreateManyInput | users_refCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users_ref update
   */
  export type users_refUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users_ref
     */
    select?: users_refSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users_ref
     */
    omit?: users_refOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: users_refInclude<ExtArgs> | null
    /**
     * The data needed to update a users_ref.
     */
    data: XOR<users_refUpdateInput, users_refUncheckedUpdateInput>
    /**
     * Choose, which users_ref to update.
     */
    where: users_refWhereUniqueInput
  }

  /**
   * users_ref updateMany
   */
  export type users_refUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users_refs.
     */
    data: XOR<users_refUpdateManyMutationInput, users_refUncheckedUpdateManyInput>
    /**
     * Filter which users_refs to update
     */
    where?: users_refWhereInput
    /**
     * Limit how many users_refs to update.
     */
    limit?: number
  }

  /**
   * users_ref upsert
   */
  export type users_refUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users_ref
     */
    select?: users_refSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users_ref
     */
    omit?: users_refOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: users_refInclude<ExtArgs> | null
    /**
     * The filter to search for the users_ref to update in case it exists.
     */
    where: users_refWhereUniqueInput
    /**
     * In case the users_ref found by the `where` argument doesn't exist, create a new users_ref with this data.
     */
    create: XOR<users_refCreateInput, users_refUncheckedCreateInput>
    /**
     * In case the users_ref was found with the provided `where` argument, update it with this data.
     */
    update: XOR<users_refUpdateInput, users_refUncheckedUpdateInput>
  }

  /**
   * users_ref delete
   */
  export type users_refDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users_ref
     */
    select?: users_refSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users_ref
     */
    omit?: users_refOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: users_refInclude<ExtArgs> | null
    /**
     * Filter which users_ref to delete.
     */
    where: users_refWhereUniqueInput
  }

  /**
   * users_ref deleteMany
   */
  export type users_refDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users_refs to delete
     */
    where?: users_refWhereInput
    /**
     * Limit how many users_refs to delete.
     */
    limit?: number
  }

  /**
   * users_ref.family_ref
   */
  export type users_ref$family_refArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the family_ref
     */
    select?: family_refSelect<ExtArgs> | null
    /**
     * Omit specific fields from the family_ref
     */
    omit?: family_refOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: family_refInclude<ExtArgs> | null
    where?: family_refWhereInput
    orderBy?: family_refOrderByWithRelationInput | family_refOrderByWithRelationInput[]
    cursor?: family_refWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Family_refScalarFieldEnum | Family_refScalarFieldEnum[]
  }

  /**
   * users_ref.users
   */
  export type users_ref$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * users_ref without action
   */
  export type users_refDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users_ref
     */
    select?: users_refSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users_ref
     */
    omit?: users_refOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: users_refInclude<ExtArgs> | null
  }


  /**
   * Model family_ref
   */

  export type AggregateFamily_ref = {
    _count: Family_refCountAggregateOutputType | null
    _avg: Family_refAvgAggregateOutputType | null
    _sum: Family_refSumAggregateOutputType | null
    _min: Family_refMinAggregateOutputType | null
    _max: Family_refMaxAggregateOutputType | null
  }

  export type Family_refAvgAggregateOutputType = {
    id: number | null
  }

  export type Family_refSumAggregateOutputType = {
    id: number | null
  }

  export type Family_refMinAggregateOutputType = {
    id: number | null
    users_refKtp: string | null
    name: string | null
    EKTP: string | null
    type: string | null
    relation: string | null
    birthplace: string | null
    birthdate: Date | null
    address: string | null
    subdistrict: string | null
    district: string | null
    city: string | null
    phone: string | null
    email: string | null
  }

  export type Family_refMaxAggregateOutputType = {
    id: number | null
    users_refKtp: string | null
    name: string | null
    EKTP: string | null
    type: string | null
    relation: string | null
    birthplace: string | null
    birthdate: Date | null
    address: string | null
    subdistrict: string | null
    district: string | null
    city: string | null
    phone: string | null
    email: string | null
  }

  export type Family_refCountAggregateOutputType = {
    id: number
    users_refKtp: number
    name: number
    EKTP: number
    type: number
    relation: number
    birthplace: number
    birthdate: number
    address: number
    subdistrict: number
    district: number
    city: number
    phone: number
    email: number
    _all: number
  }


  export type Family_refAvgAggregateInputType = {
    id?: true
  }

  export type Family_refSumAggregateInputType = {
    id?: true
  }

  export type Family_refMinAggregateInputType = {
    id?: true
    users_refKtp?: true
    name?: true
    EKTP?: true
    type?: true
    relation?: true
    birthplace?: true
    birthdate?: true
    address?: true
    subdistrict?: true
    district?: true
    city?: true
    phone?: true
    email?: true
  }

  export type Family_refMaxAggregateInputType = {
    id?: true
    users_refKtp?: true
    name?: true
    EKTP?: true
    type?: true
    relation?: true
    birthplace?: true
    birthdate?: true
    address?: true
    subdistrict?: true
    district?: true
    city?: true
    phone?: true
    email?: true
  }

  export type Family_refCountAggregateInputType = {
    id?: true
    users_refKtp?: true
    name?: true
    EKTP?: true
    type?: true
    relation?: true
    birthplace?: true
    birthdate?: true
    address?: true
    subdistrict?: true
    district?: true
    city?: true
    phone?: true
    email?: true
    _all?: true
  }

  export type Family_refAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which family_ref to aggregate.
     */
    where?: family_refWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of family_refs to fetch.
     */
    orderBy?: family_refOrderByWithRelationInput | family_refOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: family_refWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` family_refs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` family_refs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned family_refs
    **/
    _count?: true | Family_refCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Family_refAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Family_refSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Family_refMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Family_refMaxAggregateInputType
  }

  export type GetFamily_refAggregateType<T extends Family_refAggregateArgs> = {
        [P in keyof T & keyof AggregateFamily_ref]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFamily_ref[P]>
      : GetScalarType<T[P], AggregateFamily_ref[P]>
  }




  export type family_refGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: family_refWhereInput
    orderBy?: family_refOrderByWithAggregationInput | family_refOrderByWithAggregationInput[]
    by: Family_refScalarFieldEnum[] | Family_refScalarFieldEnum
    having?: family_refScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Family_refCountAggregateInputType | true
    _avg?: Family_refAvgAggregateInputType
    _sum?: Family_refSumAggregateInputType
    _min?: Family_refMinAggregateInputType
    _max?: Family_refMaxAggregateInputType
  }

  export type Family_refGroupByOutputType = {
    id: number
    users_refKtp: string
    name: string
    EKTP: string | null
    type: string
    relation: string
    birthplace: string | null
    birthdate: Date | null
    address: string | null
    subdistrict: string | null
    district: string | null
    city: string | null
    phone: string | null
    email: string
    _count: Family_refCountAggregateOutputType | null
    _avg: Family_refAvgAggregateOutputType | null
    _sum: Family_refSumAggregateOutputType | null
    _min: Family_refMinAggregateOutputType | null
    _max: Family_refMaxAggregateOutputType | null
  }

  type GetFamily_refGroupByPayload<T extends family_refGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Family_refGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Family_refGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Family_refGroupByOutputType[P]>
            : GetScalarType<T[P], Family_refGroupByOutputType[P]>
        }
      >
    >


  export type family_refSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    users_refKtp?: boolean
    name?: boolean
    EKTP?: boolean
    type?: boolean
    relation?: boolean
    birthplace?: boolean
    birthdate?: boolean
    address?: boolean
    subdistrict?: boolean
    district?: boolean
    city?: boolean
    phone?: boolean
    email?: boolean
    users_ref?: boolean | family_ref$users_refArgs<ExtArgs>
  }, ExtArgs["result"]["family_ref"]>



  export type family_refSelectScalar = {
    id?: boolean
    users_refKtp?: boolean
    name?: boolean
    EKTP?: boolean
    type?: boolean
    relation?: boolean
    birthplace?: boolean
    birthdate?: boolean
    address?: boolean
    subdistrict?: boolean
    district?: boolean
    city?: boolean
    phone?: boolean
    email?: boolean
  }

  export type family_refOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "users_refKtp" | "name" | "EKTP" | "type" | "relation" | "birthplace" | "birthdate" | "address" | "subdistrict" | "district" | "city" | "phone" | "email", ExtArgs["result"]["family_ref"]>
  export type family_refInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users_ref?: boolean | family_ref$users_refArgs<ExtArgs>
  }

  export type $family_refPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "family_ref"
    objects: {
      users_ref: Prisma.$users_refPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      users_refKtp: string
      name: string
      EKTP: string | null
      type: string
      relation: string
      birthplace: string | null
      birthdate: Date | null
      address: string | null
      subdistrict: string | null
      district: string | null
      city: string | null
      phone: string | null
      email: string
    }, ExtArgs["result"]["family_ref"]>
    composites: {}
  }

  type family_refGetPayload<S extends boolean | null | undefined | family_refDefaultArgs> = $Result.GetResult<Prisma.$family_refPayload, S>

  type family_refCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<family_refFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Family_refCountAggregateInputType | true
    }

  export interface family_refDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['family_ref'], meta: { name: 'family_ref' } }
    /**
     * Find zero or one Family_ref that matches the filter.
     * @param {family_refFindUniqueArgs} args - Arguments to find a Family_ref
     * @example
     * // Get one Family_ref
     * const family_ref = await prisma.family_ref.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends family_refFindUniqueArgs>(args: SelectSubset<T, family_refFindUniqueArgs<ExtArgs>>): Prisma__family_refClient<$Result.GetResult<Prisma.$family_refPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Family_ref that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {family_refFindUniqueOrThrowArgs} args - Arguments to find a Family_ref
     * @example
     * // Get one Family_ref
     * const family_ref = await prisma.family_ref.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends family_refFindUniqueOrThrowArgs>(args: SelectSubset<T, family_refFindUniqueOrThrowArgs<ExtArgs>>): Prisma__family_refClient<$Result.GetResult<Prisma.$family_refPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Family_ref that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {family_refFindFirstArgs} args - Arguments to find a Family_ref
     * @example
     * // Get one Family_ref
     * const family_ref = await prisma.family_ref.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends family_refFindFirstArgs>(args?: SelectSubset<T, family_refFindFirstArgs<ExtArgs>>): Prisma__family_refClient<$Result.GetResult<Prisma.$family_refPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Family_ref that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {family_refFindFirstOrThrowArgs} args - Arguments to find a Family_ref
     * @example
     * // Get one Family_ref
     * const family_ref = await prisma.family_ref.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends family_refFindFirstOrThrowArgs>(args?: SelectSubset<T, family_refFindFirstOrThrowArgs<ExtArgs>>): Prisma__family_refClient<$Result.GetResult<Prisma.$family_refPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Family_refs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {family_refFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Family_refs
     * const family_refs = await prisma.family_ref.findMany()
     * 
     * // Get first 10 Family_refs
     * const family_refs = await prisma.family_ref.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const family_refWithIdOnly = await prisma.family_ref.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends family_refFindManyArgs>(args?: SelectSubset<T, family_refFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$family_refPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Family_ref.
     * @param {family_refCreateArgs} args - Arguments to create a Family_ref.
     * @example
     * // Create one Family_ref
     * const Family_ref = await prisma.family_ref.create({
     *   data: {
     *     // ... data to create a Family_ref
     *   }
     * })
     * 
     */
    create<T extends family_refCreateArgs>(args: SelectSubset<T, family_refCreateArgs<ExtArgs>>): Prisma__family_refClient<$Result.GetResult<Prisma.$family_refPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Family_refs.
     * @param {family_refCreateManyArgs} args - Arguments to create many Family_refs.
     * @example
     * // Create many Family_refs
     * const family_ref = await prisma.family_ref.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends family_refCreateManyArgs>(args?: SelectSubset<T, family_refCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Family_ref.
     * @param {family_refDeleteArgs} args - Arguments to delete one Family_ref.
     * @example
     * // Delete one Family_ref
     * const Family_ref = await prisma.family_ref.delete({
     *   where: {
     *     // ... filter to delete one Family_ref
     *   }
     * })
     * 
     */
    delete<T extends family_refDeleteArgs>(args: SelectSubset<T, family_refDeleteArgs<ExtArgs>>): Prisma__family_refClient<$Result.GetResult<Prisma.$family_refPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Family_ref.
     * @param {family_refUpdateArgs} args - Arguments to update one Family_ref.
     * @example
     * // Update one Family_ref
     * const family_ref = await prisma.family_ref.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends family_refUpdateArgs>(args: SelectSubset<T, family_refUpdateArgs<ExtArgs>>): Prisma__family_refClient<$Result.GetResult<Prisma.$family_refPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Family_refs.
     * @param {family_refDeleteManyArgs} args - Arguments to filter Family_refs to delete.
     * @example
     * // Delete a few Family_refs
     * const { count } = await prisma.family_ref.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends family_refDeleteManyArgs>(args?: SelectSubset<T, family_refDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Family_refs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {family_refUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Family_refs
     * const family_ref = await prisma.family_ref.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends family_refUpdateManyArgs>(args: SelectSubset<T, family_refUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Family_ref.
     * @param {family_refUpsertArgs} args - Arguments to update or create a Family_ref.
     * @example
     * // Update or create a Family_ref
     * const family_ref = await prisma.family_ref.upsert({
     *   create: {
     *     // ... data to create a Family_ref
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Family_ref we want to update
     *   }
     * })
     */
    upsert<T extends family_refUpsertArgs>(args: SelectSubset<T, family_refUpsertArgs<ExtArgs>>): Prisma__family_refClient<$Result.GetResult<Prisma.$family_refPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Family_refs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {family_refCountArgs} args - Arguments to filter Family_refs to count.
     * @example
     * // Count the number of Family_refs
     * const count = await prisma.family_ref.count({
     *   where: {
     *     // ... the filter for the Family_refs we want to count
     *   }
     * })
    **/
    count<T extends family_refCountArgs>(
      args?: Subset<T, family_refCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Family_refCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Family_ref.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Family_refAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Family_refAggregateArgs>(args: Subset<T, Family_refAggregateArgs>): Prisma.PrismaPromise<GetFamily_refAggregateType<T>>

    /**
     * Group by Family_ref.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {family_refGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends family_refGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: family_refGroupByArgs['orderBy'] }
        : { orderBy?: family_refGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, family_refGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFamily_refGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the family_ref model
   */
  readonly fields: family_refFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for family_ref.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__family_refClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users_ref<T extends family_ref$users_refArgs<ExtArgs> = {}>(args?: Subset<T, family_ref$users_refArgs<ExtArgs>>): Prisma__users_refClient<$Result.GetResult<Prisma.$users_refPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the family_ref model
   */
  interface family_refFieldRefs {
    readonly id: FieldRef<"family_ref", 'Int'>
    readonly users_refKtp: FieldRef<"family_ref", 'String'>
    readonly name: FieldRef<"family_ref", 'String'>
    readonly EKTP: FieldRef<"family_ref", 'String'>
    readonly type: FieldRef<"family_ref", 'String'>
    readonly relation: FieldRef<"family_ref", 'String'>
    readonly birthplace: FieldRef<"family_ref", 'String'>
    readonly birthdate: FieldRef<"family_ref", 'DateTime'>
    readonly address: FieldRef<"family_ref", 'String'>
    readonly subdistrict: FieldRef<"family_ref", 'String'>
    readonly district: FieldRef<"family_ref", 'String'>
    readonly city: FieldRef<"family_ref", 'String'>
    readonly phone: FieldRef<"family_ref", 'String'>
    readonly email: FieldRef<"family_ref", 'String'>
  }
    

  // Custom InputTypes
  /**
   * family_ref findUnique
   */
  export type family_refFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the family_ref
     */
    select?: family_refSelect<ExtArgs> | null
    /**
     * Omit specific fields from the family_ref
     */
    omit?: family_refOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: family_refInclude<ExtArgs> | null
    /**
     * Filter, which family_ref to fetch.
     */
    where: family_refWhereUniqueInput
  }

  /**
   * family_ref findUniqueOrThrow
   */
  export type family_refFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the family_ref
     */
    select?: family_refSelect<ExtArgs> | null
    /**
     * Omit specific fields from the family_ref
     */
    omit?: family_refOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: family_refInclude<ExtArgs> | null
    /**
     * Filter, which family_ref to fetch.
     */
    where: family_refWhereUniqueInput
  }

  /**
   * family_ref findFirst
   */
  export type family_refFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the family_ref
     */
    select?: family_refSelect<ExtArgs> | null
    /**
     * Omit specific fields from the family_ref
     */
    omit?: family_refOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: family_refInclude<ExtArgs> | null
    /**
     * Filter, which family_ref to fetch.
     */
    where?: family_refWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of family_refs to fetch.
     */
    orderBy?: family_refOrderByWithRelationInput | family_refOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for family_refs.
     */
    cursor?: family_refWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` family_refs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` family_refs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of family_refs.
     */
    distinct?: Family_refScalarFieldEnum | Family_refScalarFieldEnum[]
  }

  /**
   * family_ref findFirstOrThrow
   */
  export type family_refFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the family_ref
     */
    select?: family_refSelect<ExtArgs> | null
    /**
     * Omit specific fields from the family_ref
     */
    omit?: family_refOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: family_refInclude<ExtArgs> | null
    /**
     * Filter, which family_ref to fetch.
     */
    where?: family_refWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of family_refs to fetch.
     */
    orderBy?: family_refOrderByWithRelationInput | family_refOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for family_refs.
     */
    cursor?: family_refWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` family_refs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` family_refs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of family_refs.
     */
    distinct?: Family_refScalarFieldEnum | Family_refScalarFieldEnum[]
  }

  /**
   * family_ref findMany
   */
  export type family_refFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the family_ref
     */
    select?: family_refSelect<ExtArgs> | null
    /**
     * Omit specific fields from the family_ref
     */
    omit?: family_refOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: family_refInclude<ExtArgs> | null
    /**
     * Filter, which family_refs to fetch.
     */
    where?: family_refWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of family_refs to fetch.
     */
    orderBy?: family_refOrderByWithRelationInput | family_refOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing family_refs.
     */
    cursor?: family_refWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` family_refs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` family_refs.
     */
    skip?: number
    distinct?: Family_refScalarFieldEnum | Family_refScalarFieldEnum[]
  }

  /**
   * family_ref create
   */
  export type family_refCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the family_ref
     */
    select?: family_refSelect<ExtArgs> | null
    /**
     * Omit specific fields from the family_ref
     */
    omit?: family_refOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: family_refInclude<ExtArgs> | null
    /**
     * The data needed to create a family_ref.
     */
    data: XOR<family_refCreateInput, family_refUncheckedCreateInput>
  }

  /**
   * family_ref createMany
   */
  export type family_refCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many family_refs.
     */
    data: family_refCreateManyInput | family_refCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * family_ref update
   */
  export type family_refUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the family_ref
     */
    select?: family_refSelect<ExtArgs> | null
    /**
     * Omit specific fields from the family_ref
     */
    omit?: family_refOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: family_refInclude<ExtArgs> | null
    /**
     * The data needed to update a family_ref.
     */
    data: XOR<family_refUpdateInput, family_refUncheckedUpdateInput>
    /**
     * Choose, which family_ref to update.
     */
    where: family_refWhereUniqueInput
  }

  /**
   * family_ref updateMany
   */
  export type family_refUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update family_refs.
     */
    data: XOR<family_refUpdateManyMutationInput, family_refUncheckedUpdateManyInput>
    /**
     * Filter which family_refs to update
     */
    where?: family_refWhereInput
    /**
     * Limit how many family_refs to update.
     */
    limit?: number
  }

  /**
   * family_ref upsert
   */
  export type family_refUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the family_ref
     */
    select?: family_refSelect<ExtArgs> | null
    /**
     * Omit specific fields from the family_ref
     */
    omit?: family_refOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: family_refInclude<ExtArgs> | null
    /**
     * The filter to search for the family_ref to update in case it exists.
     */
    where: family_refWhereUniqueInput
    /**
     * In case the family_ref found by the `where` argument doesn't exist, create a new family_ref with this data.
     */
    create: XOR<family_refCreateInput, family_refUncheckedCreateInput>
    /**
     * In case the family_ref was found with the provided `where` argument, update it with this data.
     */
    update: XOR<family_refUpdateInput, family_refUncheckedUpdateInput>
  }

  /**
   * family_ref delete
   */
  export type family_refDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the family_ref
     */
    select?: family_refSelect<ExtArgs> | null
    /**
     * Omit specific fields from the family_ref
     */
    omit?: family_refOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: family_refInclude<ExtArgs> | null
    /**
     * Filter which family_ref to delete.
     */
    where: family_refWhereUniqueInput
  }

  /**
   * family_ref deleteMany
   */
  export type family_refDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which family_refs to delete
     */
    where?: family_refWhereInput
    /**
     * Limit how many family_refs to delete.
     */
    limit?: number
  }

  /**
   * family_ref.users_ref
   */
  export type family_ref$users_refArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users_ref
     */
    select?: users_refSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users_ref
     */
    omit?: users_refOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: users_refInclude<ExtArgs> | null
    where?: users_refWhereInput
  }

  /**
   * family_ref without action
   */
  export type family_refDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the family_ref
     */
    select?: family_refSelect<ExtArgs> | null
    /**
     * Omit specific fields from the family_ref
     */
    omit?: family_refOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: family_refInclude<ExtArgs> | null
  }


  /**
   * Model participants
   */

  export type AggregateParticipants = {
    _count: ParticipantsCountAggregateOutputType | null
    _avg: ParticipantsAvgAggregateOutputType | null
    _sum: ParticipantsSumAggregateOutputType | null
    _min: ParticipantsMinAggregateOutputType | null
    _max: ParticipantsMaxAggregateOutputType | null
  }

  export type ParticipantsAvgAggregateOutputType = {
    id: number | null
    master_categoryId: number | null
  }

  export type ParticipantsSumAggregateOutputType = {
    id: number | null
    master_categoryId: number | null
  }

  export type ParticipantsMinAggregateOutputType = {
    id: number | null
    fname: string | null
    lname: string | null
    bibname: string | null
    email: string | null
    identityId: string | null
    birthplace: string | null
    birthdate: Date | null
    phone: string | null
    address: string | null
    zipcode: string | null
    country: string | null
    city: string | null
    bloodType: string | null
    size: string | null
    master_categoryId: number | null
    transactionsId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ParticipantsMaxAggregateOutputType = {
    id: number | null
    fname: string | null
    lname: string | null
    bibname: string | null
    email: string | null
    identityId: string | null
    birthplace: string | null
    birthdate: Date | null
    phone: string | null
    address: string | null
    zipcode: string | null
    country: string | null
    city: string | null
    bloodType: string | null
    size: string | null
    master_categoryId: number | null
    transactionsId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ParticipantsCountAggregateOutputType = {
    id: number
    fname: number
    lname: number
    bibname: number
    email: number
    identityId: number
    birthplace: number
    birthdate: number
    phone: number
    address: number
    zipcode: number
    country: number
    city: number
    bloodType: number
    size: number
    master_categoryId: number
    transactionsId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ParticipantsAvgAggregateInputType = {
    id?: true
    master_categoryId?: true
  }

  export type ParticipantsSumAggregateInputType = {
    id?: true
    master_categoryId?: true
  }

  export type ParticipantsMinAggregateInputType = {
    id?: true
    fname?: true
    lname?: true
    bibname?: true
    email?: true
    identityId?: true
    birthplace?: true
    birthdate?: true
    phone?: true
    address?: true
    zipcode?: true
    country?: true
    city?: true
    bloodType?: true
    size?: true
    master_categoryId?: true
    transactionsId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ParticipantsMaxAggregateInputType = {
    id?: true
    fname?: true
    lname?: true
    bibname?: true
    email?: true
    identityId?: true
    birthplace?: true
    birthdate?: true
    phone?: true
    address?: true
    zipcode?: true
    country?: true
    city?: true
    bloodType?: true
    size?: true
    master_categoryId?: true
    transactionsId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ParticipantsCountAggregateInputType = {
    id?: true
    fname?: true
    lname?: true
    bibname?: true
    email?: true
    identityId?: true
    birthplace?: true
    birthdate?: true
    phone?: true
    address?: true
    zipcode?: true
    country?: true
    city?: true
    bloodType?: true
    size?: true
    master_categoryId?: true
    transactionsId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ParticipantsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which participants to aggregate.
     */
    where?: participantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of participants to fetch.
     */
    orderBy?: participantsOrderByWithRelationInput | participantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: participantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` participants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` participants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned participants
    **/
    _count?: true | ParticipantsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ParticipantsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ParticipantsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParticipantsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParticipantsMaxAggregateInputType
  }

  export type GetParticipantsAggregateType<T extends ParticipantsAggregateArgs> = {
        [P in keyof T & keyof AggregateParticipants]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParticipants[P]>
      : GetScalarType<T[P], AggregateParticipants[P]>
  }




  export type participantsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: participantsWhereInput
    orderBy?: participantsOrderByWithAggregationInput | participantsOrderByWithAggregationInput[]
    by: ParticipantsScalarFieldEnum[] | ParticipantsScalarFieldEnum
    having?: participantsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParticipantsCountAggregateInputType | true
    _avg?: ParticipantsAvgAggregateInputType
    _sum?: ParticipantsSumAggregateInputType
    _min?: ParticipantsMinAggregateInputType
    _max?: ParticipantsMaxAggregateInputType
  }

  export type ParticipantsGroupByOutputType = {
    id: number
    fname: string
    lname: string
    bibname: string
    email: string
    identityId: string
    birthplace: string
    birthdate: Date
    phone: string
    address: string
    zipcode: string
    country: string
    city: string
    bloodType: string
    size: string | null
    master_categoryId: number | null
    transactionsId: string | null
    createdAt: Date
    updatedAt: Date
    _count: ParticipantsCountAggregateOutputType | null
    _avg: ParticipantsAvgAggregateOutputType | null
    _sum: ParticipantsSumAggregateOutputType | null
    _min: ParticipantsMinAggregateOutputType | null
    _max: ParticipantsMaxAggregateOutputType | null
  }

  type GetParticipantsGroupByPayload<T extends participantsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParticipantsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParticipantsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParticipantsGroupByOutputType[P]>
            : GetScalarType<T[P], ParticipantsGroupByOutputType[P]>
        }
      >
    >


  export type participantsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fname?: boolean
    lname?: boolean
    bibname?: boolean
    email?: boolean
    identityId?: boolean
    birthplace?: boolean
    birthdate?: boolean
    phone?: boolean
    address?: boolean
    zipcode?: boolean
    country?: boolean
    city?: boolean
    bloodType?: boolean
    size?: boolean
    master_categoryId?: boolean
    transactionsId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    transactions?: boolean | participants$transactionsArgs<ExtArgs>
    master_category?: boolean | participants$master_categoryArgs<ExtArgs>
  }, ExtArgs["result"]["participants"]>



  export type participantsSelectScalar = {
    id?: boolean
    fname?: boolean
    lname?: boolean
    bibname?: boolean
    email?: boolean
    identityId?: boolean
    birthplace?: boolean
    birthdate?: boolean
    phone?: boolean
    address?: boolean
    zipcode?: boolean
    country?: boolean
    city?: boolean
    bloodType?: boolean
    size?: boolean
    master_categoryId?: boolean
    transactionsId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type participantsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fname" | "lname" | "bibname" | "email" | "identityId" | "birthplace" | "birthdate" | "phone" | "address" | "zipcode" | "country" | "city" | "bloodType" | "size" | "master_categoryId" | "transactionsId" | "createdAt" | "updatedAt", ExtArgs["result"]["participants"]>
  export type participantsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | participants$transactionsArgs<ExtArgs>
    master_category?: boolean | participants$master_categoryArgs<ExtArgs>
  }

  export type $participantsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "participants"
    objects: {
      transactions: Prisma.$transactionsPayload<ExtArgs> | null
      master_category: Prisma.$master_categoryPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fname: string
      lname: string
      bibname: string
      email: string
      identityId: string
      birthplace: string
      birthdate: Date
      phone: string
      address: string
      zipcode: string
      country: string
      city: string
      bloodType: string
      size: string | null
      master_categoryId: number | null
      transactionsId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["participants"]>
    composites: {}
  }

  type participantsGetPayload<S extends boolean | null | undefined | participantsDefaultArgs> = $Result.GetResult<Prisma.$participantsPayload, S>

  type participantsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<participantsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ParticipantsCountAggregateInputType | true
    }

  export interface participantsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['participants'], meta: { name: 'participants' } }
    /**
     * Find zero or one Participants that matches the filter.
     * @param {participantsFindUniqueArgs} args - Arguments to find a Participants
     * @example
     * // Get one Participants
     * const participants = await prisma.participants.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends participantsFindUniqueArgs>(args: SelectSubset<T, participantsFindUniqueArgs<ExtArgs>>): Prisma__participantsClient<$Result.GetResult<Prisma.$participantsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Participants that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {participantsFindUniqueOrThrowArgs} args - Arguments to find a Participants
     * @example
     * // Get one Participants
     * const participants = await prisma.participants.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends participantsFindUniqueOrThrowArgs>(args: SelectSubset<T, participantsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__participantsClient<$Result.GetResult<Prisma.$participantsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Participants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {participantsFindFirstArgs} args - Arguments to find a Participants
     * @example
     * // Get one Participants
     * const participants = await prisma.participants.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends participantsFindFirstArgs>(args?: SelectSubset<T, participantsFindFirstArgs<ExtArgs>>): Prisma__participantsClient<$Result.GetResult<Prisma.$participantsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Participants that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {participantsFindFirstOrThrowArgs} args - Arguments to find a Participants
     * @example
     * // Get one Participants
     * const participants = await prisma.participants.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends participantsFindFirstOrThrowArgs>(args?: SelectSubset<T, participantsFindFirstOrThrowArgs<ExtArgs>>): Prisma__participantsClient<$Result.GetResult<Prisma.$participantsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Participants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {participantsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Participants
     * const participants = await prisma.participants.findMany()
     * 
     * // Get first 10 Participants
     * const participants = await prisma.participants.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const participantsWithIdOnly = await prisma.participants.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends participantsFindManyArgs>(args?: SelectSubset<T, participantsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$participantsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Participants.
     * @param {participantsCreateArgs} args - Arguments to create a Participants.
     * @example
     * // Create one Participants
     * const Participants = await prisma.participants.create({
     *   data: {
     *     // ... data to create a Participants
     *   }
     * })
     * 
     */
    create<T extends participantsCreateArgs>(args: SelectSubset<T, participantsCreateArgs<ExtArgs>>): Prisma__participantsClient<$Result.GetResult<Prisma.$participantsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Participants.
     * @param {participantsCreateManyArgs} args - Arguments to create many Participants.
     * @example
     * // Create many Participants
     * const participants = await prisma.participants.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends participantsCreateManyArgs>(args?: SelectSubset<T, participantsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Participants.
     * @param {participantsDeleteArgs} args - Arguments to delete one Participants.
     * @example
     * // Delete one Participants
     * const Participants = await prisma.participants.delete({
     *   where: {
     *     // ... filter to delete one Participants
     *   }
     * })
     * 
     */
    delete<T extends participantsDeleteArgs>(args: SelectSubset<T, participantsDeleteArgs<ExtArgs>>): Prisma__participantsClient<$Result.GetResult<Prisma.$participantsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Participants.
     * @param {participantsUpdateArgs} args - Arguments to update one Participants.
     * @example
     * // Update one Participants
     * const participants = await prisma.participants.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends participantsUpdateArgs>(args: SelectSubset<T, participantsUpdateArgs<ExtArgs>>): Prisma__participantsClient<$Result.GetResult<Prisma.$participantsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Participants.
     * @param {participantsDeleteManyArgs} args - Arguments to filter Participants to delete.
     * @example
     * // Delete a few Participants
     * const { count } = await prisma.participants.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends participantsDeleteManyArgs>(args?: SelectSubset<T, participantsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Participants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {participantsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Participants
     * const participants = await prisma.participants.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends participantsUpdateManyArgs>(args: SelectSubset<T, participantsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Participants.
     * @param {participantsUpsertArgs} args - Arguments to update or create a Participants.
     * @example
     * // Update or create a Participants
     * const participants = await prisma.participants.upsert({
     *   create: {
     *     // ... data to create a Participants
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Participants we want to update
     *   }
     * })
     */
    upsert<T extends participantsUpsertArgs>(args: SelectSubset<T, participantsUpsertArgs<ExtArgs>>): Prisma__participantsClient<$Result.GetResult<Prisma.$participantsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Participants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {participantsCountArgs} args - Arguments to filter Participants to count.
     * @example
     * // Count the number of Participants
     * const count = await prisma.participants.count({
     *   where: {
     *     // ... the filter for the Participants we want to count
     *   }
     * })
    **/
    count<T extends participantsCountArgs>(
      args?: Subset<T, participantsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParticipantsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Participants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ParticipantsAggregateArgs>(args: Subset<T, ParticipantsAggregateArgs>): Prisma.PrismaPromise<GetParticipantsAggregateType<T>>

    /**
     * Group by Participants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {participantsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends participantsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: participantsGroupByArgs['orderBy'] }
        : { orderBy?: participantsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, participantsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParticipantsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the participants model
   */
  readonly fields: participantsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for participants.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__participantsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    transactions<T extends participants$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, participants$transactionsArgs<ExtArgs>>): Prisma__transactionsClient<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    master_category<T extends participants$master_categoryArgs<ExtArgs> = {}>(args?: Subset<T, participants$master_categoryArgs<ExtArgs>>): Prisma__master_categoryClient<$Result.GetResult<Prisma.$master_categoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the participants model
   */
  interface participantsFieldRefs {
    readonly id: FieldRef<"participants", 'Int'>
    readonly fname: FieldRef<"participants", 'String'>
    readonly lname: FieldRef<"participants", 'String'>
    readonly bibname: FieldRef<"participants", 'String'>
    readonly email: FieldRef<"participants", 'String'>
    readonly identityId: FieldRef<"participants", 'String'>
    readonly birthplace: FieldRef<"participants", 'String'>
    readonly birthdate: FieldRef<"participants", 'DateTime'>
    readonly phone: FieldRef<"participants", 'String'>
    readonly address: FieldRef<"participants", 'String'>
    readonly zipcode: FieldRef<"participants", 'String'>
    readonly country: FieldRef<"participants", 'String'>
    readonly city: FieldRef<"participants", 'String'>
    readonly bloodType: FieldRef<"participants", 'String'>
    readonly size: FieldRef<"participants", 'String'>
    readonly master_categoryId: FieldRef<"participants", 'Int'>
    readonly transactionsId: FieldRef<"participants", 'String'>
    readonly createdAt: FieldRef<"participants", 'DateTime'>
    readonly updatedAt: FieldRef<"participants", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * participants findUnique
   */
  export type participantsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the participants
     */
    select?: participantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the participants
     */
    omit?: participantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: participantsInclude<ExtArgs> | null
    /**
     * Filter, which participants to fetch.
     */
    where: participantsWhereUniqueInput
  }

  /**
   * participants findUniqueOrThrow
   */
  export type participantsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the participants
     */
    select?: participantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the participants
     */
    omit?: participantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: participantsInclude<ExtArgs> | null
    /**
     * Filter, which participants to fetch.
     */
    where: participantsWhereUniqueInput
  }

  /**
   * participants findFirst
   */
  export type participantsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the participants
     */
    select?: participantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the participants
     */
    omit?: participantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: participantsInclude<ExtArgs> | null
    /**
     * Filter, which participants to fetch.
     */
    where?: participantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of participants to fetch.
     */
    orderBy?: participantsOrderByWithRelationInput | participantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for participants.
     */
    cursor?: participantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` participants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` participants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of participants.
     */
    distinct?: ParticipantsScalarFieldEnum | ParticipantsScalarFieldEnum[]
  }

  /**
   * participants findFirstOrThrow
   */
  export type participantsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the participants
     */
    select?: participantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the participants
     */
    omit?: participantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: participantsInclude<ExtArgs> | null
    /**
     * Filter, which participants to fetch.
     */
    where?: participantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of participants to fetch.
     */
    orderBy?: participantsOrderByWithRelationInput | participantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for participants.
     */
    cursor?: participantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` participants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` participants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of participants.
     */
    distinct?: ParticipantsScalarFieldEnum | ParticipantsScalarFieldEnum[]
  }

  /**
   * participants findMany
   */
  export type participantsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the participants
     */
    select?: participantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the participants
     */
    omit?: participantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: participantsInclude<ExtArgs> | null
    /**
     * Filter, which participants to fetch.
     */
    where?: participantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of participants to fetch.
     */
    orderBy?: participantsOrderByWithRelationInput | participantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing participants.
     */
    cursor?: participantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` participants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` participants.
     */
    skip?: number
    distinct?: ParticipantsScalarFieldEnum | ParticipantsScalarFieldEnum[]
  }

  /**
   * participants create
   */
  export type participantsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the participants
     */
    select?: participantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the participants
     */
    omit?: participantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: participantsInclude<ExtArgs> | null
    /**
     * The data needed to create a participants.
     */
    data: XOR<participantsCreateInput, participantsUncheckedCreateInput>
  }

  /**
   * participants createMany
   */
  export type participantsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many participants.
     */
    data: participantsCreateManyInput | participantsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * participants update
   */
  export type participantsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the participants
     */
    select?: participantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the participants
     */
    omit?: participantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: participantsInclude<ExtArgs> | null
    /**
     * The data needed to update a participants.
     */
    data: XOR<participantsUpdateInput, participantsUncheckedUpdateInput>
    /**
     * Choose, which participants to update.
     */
    where: participantsWhereUniqueInput
  }

  /**
   * participants updateMany
   */
  export type participantsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update participants.
     */
    data: XOR<participantsUpdateManyMutationInput, participantsUncheckedUpdateManyInput>
    /**
     * Filter which participants to update
     */
    where?: participantsWhereInput
    /**
     * Limit how many participants to update.
     */
    limit?: number
  }

  /**
   * participants upsert
   */
  export type participantsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the participants
     */
    select?: participantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the participants
     */
    omit?: participantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: participantsInclude<ExtArgs> | null
    /**
     * The filter to search for the participants to update in case it exists.
     */
    where: participantsWhereUniqueInput
    /**
     * In case the participants found by the `where` argument doesn't exist, create a new participants with this data.
     */
    create: XOR<participantsCreateInput, participantsUncheckedCreateInput>
    /**
     * In case the participants was found with the provided `where` argument, update it with this data.
     */
    update: XOR<participantsUpdateInput, participantsUncheckedUpdateInput>
  }

  /**
   * participants delete
   */
  export type participantsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the participants
     */
    select?: participantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the participants
     */
    omit?: participantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: participantsInclude<ExtArgs> | null
    /**
     * Filter which participants to delete.
     */
    where: participantsWhereUniqueInput
  }

  /**
   * participants deleteMany
   */
  export type participantsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which participants to delete
     */
    where?: participantsWhereInput
    /**
     * Limit how many participants to delete.
     */
    limit?: number
  }

  /**
   * participants.transactions
   */
  export type participants$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null
    where?: transactionsWhereInput
  }

  /**
   * participants.master_category
   */
  export type participants$master_categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the master_category
     */
    select?: master_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the master_category
     */
    omit?: master_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: master_categoryInclude<ExtArgs> | null
    where?: master_categoryWhereInput
  }

  /**
   * participants without action
   */
  export type participantsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the participants
     */
    select?: participantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the participants
     */
    omit?: participantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: participantsInclude<ExtArgs> | null
  }


  /**
   * Model transactions
   */

  export type AggregateTransactions = {
    _count: TransactionsCountAggregateOutputType | null
    _avg: TransactionsAvgAggregateOutputType | null
    _sum: TransactionsSumAggregateOutputType | null
    _min: TransactionsMinAggregateOutputType | null
    _max: TransactionsMaxAggregateOutputType | null
  }

  export type TransactionsAvgAggregateOutputType = {
    total: number | null
    status: number | null
  }

  export type TransactionsSumAggregateOutputType = {
    total: number | null
    status: number | null
  }

  export type TransactionsMinAggregateOutputType = {
    id: string | null
    pt: string | null
    divisi: string | null
    emergencyName: string | null
    emergencyPhone: string | null
    transferProof: string | null
    total: number | null
    status: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TransactionsMaxAggregateOutputType = {
    id: string | null
    pt: string | null
    divisi: string | null
    emergencyName: string | null
    emergencyPhone: string | null
    transferProof: string | null
    total: number | null
    status: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TransactionsCountAggregateOutputType = {
    id: number
    pt: number
    divisi: number
    emergencyName: number
    emergencyPhone: number
    transferProof: number
    total: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TransactionsAvgAggregateInputType = {
    total?: true
    status?: true
  }

  export type TransactionsSumAggregateInputType = {
    total?: true
    status?: true
  }

  export type TransactionsMinAggregateInputType = {
    id?: true
    pt?: true
    divisi?: true
    emergencyName?: true
    emergencyPhone?: true
    transferProof?: true
    total?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TransactionsMaxAggregateInputType = {
    id?: true
    pt?: true
    divisi?: true
    emergencyName?: true
    emergencyPhone?: true
    transferProof?: true
    total?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TransactionsCountAggregateInputType = {
    id?: true
    pt?: true
    divisi?: true
    emergencyName?: true
    emergencyPhone?: true
    transferProof?: true
    total?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TransactionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which transactions to aggregate.
     */
    where?: transactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transactions to fetch.
     */
    orderBy?: transactionsOrderByWithRelationInput | transactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: transactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned transactions
    **/
    _count?: true | TransactionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionsMaxAggregateInputType
  }

  export type GetTransactionsAggregateType<T extends TransactionsAggregateArgs> = {
        [P in keyof T & keyof AggregateTransactions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransactions[P]>
      : GetScalarType<T[P], AggregateTransactions[P]>
  }




  export type transactionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transactionsWhereInput
    orderBy?: transactionsOrderByWithAggregationInput | transactionsOrderByWithAggregationInput[]
    by: TransactionsScalarFieldEnum[] | TransactionsScalarFieldEnum
    having?: transactionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionsCountAggregateInputType | true
    _avg?: TransactionsAvgAggregateInputType
    _sum?: TransactionsSumAggregateInputType
    _min?: TransactionsMinAggregateInputType
    _max?: TransactionsMaxAggregateInputType
  }

  export type TransactionsGroupByOutputType = {
    id: string
    pt: string
    divisi: string
    emergencyName: string
    emergencyPhone: string
    transferProof: string | null
    total: number
    status: number
    createdAt: Date
    updatedAt: Date
    _count: TransactionsCountAggregateOutputType | null
    _avg: TransactionsAvgAggregateOutputType | null
    _sum: TransactionsSumAggregateOutputType | null
    _min: TransactionsMinAggregateOutputType | null
    _max: TransactionsMaxAggregateOutputType | null
  }

  type GetTransactionsGroupByPayload<T extends transactionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionsGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionsGroupByOutputType[P]>
        }
      >
    >


  export type transactionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pt?: boolean
    divisi?: boolean
    emergencyName?: boolean
    emergencyPhone?: boolean
    transferProof?: boolean
    total?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    users?: boolean | transactions$usersArgs<ExtArgs>
    participants?: boolean | transactions$participantsArgs<ExtArgs>
    _count?: boolean | TransactionsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transactions"]>



  export type transactionsSelectScalar = {
    id?: boolean
    pt?: boolean
    divisi?: boolean
    emergencyName?: boolean
    emergencyPhone?: boolean
    transferProof?: boolean
    total?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type transactionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pt" | "divisi" | "emergencyName" | "emergencyPhone" | "transferProof" | "total" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["transactions"]>
  export type transactionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | transactions$usersArgs<ExtArgs>
    participants?: boolean | transactions$participantsArgs<ExtArgs>
    _count?: boolean | TransactionsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $transactionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "transactions"
    objects: {
      users: Prisma.$usersPayload<ExtArgs> | null
      participants: Prisma.$participantsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      pt: string
      divisi: string
      emergencyName: string
      emergencyPhone: string
      transferProof: string | null
      total: number
      status: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["transactions"]>
    composites: {}
  }

  type transactionsGetPayload<S extends boolean | null | undefined | transactionsDefaultArgs> = $Result.GetResult<Prisma.$transactionsPayload, S>

  type transactionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<transactionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionsCountAggregateInputType | true
    }

  export interface transactionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['transactions'], meta: { name: 'transactions' } }
    /**
     * Find zero or one Transactions that matches the filter.
     * @param {transactionsFindUniqueArgs} args - Arguments to find a Transactions
     * @example
     * // Get one Transactions
     * const transactions = await prisma.transactions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends transactionsFindUniqueArgs>(args: SelectSubset<T, transactionsFindUniqueArgs<ExtArgs>>): Prisma__transactionsClient<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transactions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {transactionsFindUniqueOrThrowArgs} args - Arguments to find a Transactions
     * @example
     * // Get one Transactions
     * const transactions = await prisma.transactions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends transactionsFindUniqueOrThrowArgs>(args: SelectSubset<T, transactionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__transactionsClient<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionsFindFirstArgs} args - Arguments to find a Transactions
     * @example
     * // Get one Transactions
     * const transactions = await prisma.transactions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends transactionsFindFirstArgs>(args?: SelectSubset<T, transactionsFindFirstArgs<ExtArgs>>): Prisma__transactionsClient<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transactions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionsFindFirstOrThrowArgs} args - Arguments to find a Transactions
     * @example
     * // Get one Transactions
     * const transactions = await prisma.transactions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends transactionsFindFirstOrThrowArgs>(args?: SelectSubset<T, transactionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__transactionsClient<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transactions.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transactions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionsWithIdOnly = await prisma.transactions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends transactionsFindManyArgs>(args?: SelectSubset<T, transactionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transactions.
     * @param {transactionsCreateArgs} args - Arguments to create a Transactions.
     * @example
     * // Create one Transactions
     * const Transactions = await prisma.transactions.create({
     *   data: {
     *     // ... data to create a Transactions
     *   }
     * })
     * 
     */
    create<T extends transactionsCreateArgs>(args: SelectSubset<T, transactionsCreateArgs<ExtArgs>>): Prisma__transactionsClient<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transactions.
     * @param {transactionsCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transactions = await prisma.transactions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends transactionsCreateManyArgs>(args?: SelectSubset<T, transactionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Transactions.
     * @param {transactionsDeleteArgs} args - Arguments to delete one Transactions.
     * @example
     * // Delete one Transactions
     * const Transactions = await prisma.transactions.delete({
     *   where: {
     *     // ... filter to delete one Transactions
     *   }
     * })
     * 
     */
    delete<T extends transactionsDeleteArgs>(args: SelectSubset<T, transactionsDeleteArgs<ExtArgs>>): Prisma__transactionsClient<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transactions.
     * @param {transactionsUpdateArgs} args - Arguments to update one Transactions.
     * @example
     * // Update one Transactions
     * const transactions = await prisma.transactions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends transactionsUpdateArgs>(args: SelectSubset<T, transactionsUpdateArgs<ExtArgs>>): Prisma__transactionsClient<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transactions.
     * @param {transactionsDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transactions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends transactionsDeleteManyArgs>(args?: SelectSubset<T, transactionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transactions = await prisma.transactions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends transactionsUpdateManyArgs>(args: SelectSubset<T, transactionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Transactions.
     * @param {transactionsUpsertArgs} args - Arguments to update or create a Transactions.
     * @example
     * // Update or create a Transactions
     * const transactions = await prisma.transactions.upsert({
     *   create: {
     *     // ... data to create a Transactions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transactions we want to update
     *   }
     * })
     */
    upsert<T extends transactionsUpsertArgs>(args: SelectSubset<T, transactionsUpsertArgs<ExtArgs>>): Prisma__transactionsClient<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionsCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transactions.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends transactionsCountArgs>(
      args?: Subset<T, transactionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TransactionsAggregateArgs>(args: Subset<T, TransactionsAggregateArgs>): Prisma.PrismaPromise<GetTransactionsAggregateType<T>>

    /**
     * Group by Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends transactionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: transactionsGroupByArgs['orderBy'] }
        : { orderBy?: transactionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, transactionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the transactions model
   */
  readonly fields: transactionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for transactions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__transactionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends transactions$usersArgs<ExtArgs> = {}>(args?: Subset<T, transactions$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    participants<T extends transactions$participantsArgs<ExtArgs> = {}>(args?: Subset<T, transactions$participantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$participantsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the transactions model
   */
  interface transactionsFieldRefs {
    readonly id: FieldRef<"transactions", 'String'>
    readonly pt: FieldRef<"transactions", 'String'>
    readonly divisi: FieldRef<"transactions", 'String'>
    readonly emergencyName: FieldRef<"transactions", 'String'>
    readonly emergencyPhone: FieldRef<"transactions", 'String'>
    readonly transferProof: FieldRef<"transactions", 'String'>
    readonly total: FieldRef<"transactions", 'Int'>
    readonly status: FieldRef<"transactions", 'Int'>
    readonly createdAt: FieldRef<"transactions", 'DateTime'>
    readonly updatedAt: FieldRef<"transactions", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * transactions findUnique
   */
  export type transactionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null
    /**
     * Filter, which transactions to fetch.
     */
    where: transactionsWhereUniqueInput
  }

  /**
   * transactions findUniqueOrThrow
   */
  export type transactionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null
    /**
     * Filter, which transactions to fetch.
     */
    where: transactionsWhereUniqueInput
  }

  /**
   * transactions findFirst
   */
  export type transactionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null
    /**
     * Filter, which transactions to fetch.
     */
    where?: transactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transactions to fetch.
     */
    orderBy?: transactionsOrderByWithRelationInput | transactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for transactions.
     */
    cursor?: transactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of transactions.
     */
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * transactions findFirstOrThrow
   */
  export type transactionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null
    /**
     * Filter, which transactions to fetch.
     */
    where?: transactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transactions to fetch.
     */
    orderBy?: transactionsOrderByWithRelationInput | transactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for transactions.
     */
    cursor?: transactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of transactions.
     */
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * transactions findMany
   */
  export type transactionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null
    /**
     * Filter, which transactions to fetch.
     */
    where?: transactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transactions to fetch.
     */
    orderBy?: transactionsOrderByWithRelationInput | transactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing transactions.
     */
    cursor?: transactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transactions.
     */
    skip?: number
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * transactions create
   */
  export type transactionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null
    /**
     * The data needed to create a transactions.
     */
    data: XOR<transactionsCreateInput, transactionsUncheckedCreateInput>
  }

  /**
   * transactions createMany
   */
  export type transactionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many transactions.
     */
    data: transactionsCreateManyInput | transactionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * transactions update
   */
  export type transactionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null
    /**
     * The data needed to update a transactions.
     */
    data: XOR<transactionsUpdateInput, transactionsUncheckedUpdateInput>
    /**
     * Choose, which transactions to update.
     */
    where: transactionsWhereUniqueInput
  }

  /**
   * transactions updateMany
   */
  export type transactionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update transactions.
     */
    data: XOR<transactionsUpdateManyMutationInput, transactionsUncheckedUpdateManyInput>
    /**
     * Filter which transactions to update
     */
    where?: transactionsWhereInput
    /**
     * Limit how many transactions to update.
     */
    limit?: number
  }

  /**
   * transactions upsert
   */
  export type transactionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null
    /**
     * The filter to search for the transactions to update in case it exists.
     */
    where: transactionsWhereUniqueInput
    /**
     * In case the transactions found by the `where` argument doesn't exist, create a new transactions with this data.
     */
    create: XOR<transactionsCreateInput, transactionsUncheckedCreateInput>
    /**
     * In case the transactions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<transactionsUpdateInput, transactionsUncheckedUpdateInput>
  }

  /**
   * transactions delete
   */
  export type transactionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null
    /**
     * Filter which transactions to delete.
     */
    where: transactionsWhereUniqueInput
  }

  /**
   * transactions deleteMany
   */
  export type transactionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which transactions to delete
     */
    where?: transactionsWhereInput
    /**
     * Limit how many transactions to delete.
     */
    limit?: number
  }

  /**
   * transactions.users
   */
  export type transactions$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * transactions.participants
   */
  export type transactions$participantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the participants
     */
    select?: participantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the participants
     */
    omit?: participantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: participantsInclude<ExtArgs> | null
    where?: participantsWhereInput
    orderBy?: participantsOrderByWithRelationInput | participantsOrderByWithRelationInput[]
    cursor?: participantsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParticipantsScalarFieldEnum | ParticipantsScalarFieldEnum[]
  }

  /**
   * transactions without action
   */
  export type transactionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null
  }


  /**
   * Model master_category
   */

  export type AggregateMaster_category = {
    _count: Master_categoryCountAggregateOutputType | null
    _avg: Master_categoryAvgAggregateOutputType | null
    _sum: Master_categorySumAggregateOutputType | null
    _min: Master_categoryMinAggregateOutputType | null
    _max: Master_categoryMaxAggregateOutputType | null
  }

  export type Master_categoryAvgAggregateOutputType = {
    id: number | null
    price: number | null
  }

  export type Master_categorySumAggregateOutputType = {
    id: number | null
    price: number | null
  }

  export type Master_categoryMinAggregateOutputType = {
    id: number | null
    name: string | null
    type: string | null
    price: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Master_categoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    type: string | null
    price: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Master_categoryCountAggregateOutputType = {
    id: number
    name: number
    type: number
    price: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type Master_categoryAvgAggregateInputType = {
    id?: true
    price?: true
  }

  export type Master_categorySumAggregateInputType = {
    id?: true
    price?: true
  }

  export type Master_categoryMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    price?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Master_categoryMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    price?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Master_categoryCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    price?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type Master_categoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which master_category to aggregate.
     */
    where?: master_categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of master_categories to fetch.
     */
    orderBy?: master_categoryOrderByWithRelationInput | master_categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: master_categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` master_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` master_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned master_categories
    **/
    _count?: true | Master_categoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Master_categoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Master_categorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Master_categoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Master_categoryMaxAggregateInputType
  }

  export type GetMaster_categoryAggregateType<T extends Master_categoryAggregateArgs> = {
        [P in keyof T & keyof AggregateMaster_category]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMaster_category[P]>
      : GetScalarType<T[P], AggregateMaster_category[P]>
  }




  export type master_categoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: master_categoryWhereInput
    orderBy?: master_categoryOrderByWithAggregationInput | master_categoryOrderByWithAggregationInput[]
    by: Master_categoryScalarFieldEnum[] | Master_categoryScalarFieldEnum
    having?: master_categoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Master_categoryCountAggregateInputType | true
    _avg?: Master_categoryAvgAggregateInputType
    _sum?: Master_categorySumAggregateInputType
    _min?: Master_categoryMinAggregateInputType
    _max?: Master_categoryMaxAggregateInputType
  }

  export type Master_categoryGroupByOutputType = {
    id: number
    name: string
    type: string
    price: number
    createdAt: Date
    updatedAt: Date
    _count: Master_categoryCountAggregateOutputType | null
    _avg: Master_categoryAvgAggregateOutputType | null
    _sum: Master_categorySumAggregateOutputType | null
    _min: Master_categoryMinAggregateOutputType | null
    _max: Master_categoryMaxAggregateOutputType | null
  }

  type GetMaster_categoryGroupByPayload<T extends master_categoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Master_categoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Master_categoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Master_categoryGroupByOutputType[P]>
            : GetScalarType<T[P], Master_categoryGroupByOutputType[P]>
        }
      >
    >


  export type master_categorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    participants?: boolean | master_category$participantsArgs<ExtArgs>
    _count?: boolean | Master_categoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["master_category"]>



  export type master_categorySelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type master_categoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "type" | "price" | "createdAt" | "updatedAt", ExtArgs["result"]["master_category"]>
  export type master_categoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participants?: boolean | master_category$participantsArgs<ExtArgs>
    _count?: boolean | Master_categoryCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $master_categoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "master_category"
    objects: {
      participants: Prisma.$participantsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      type: string
      price: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["master_category"]>
    composites: {}
  }

  type master_categoryGetPayload<S extends boolean | null | undefined | master_categoryDefaultArgs> = $Result.GetResult<Prisma.$master_categoryPayload, S>

  type master_categoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<master_categoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Master_categoryCountAggregateInputType | true
    }

  export interface master_categoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['master_category'], meta: { name: 'master_category' } }
    /**
     * Find zero or one Master_category that matches the filter.
     * @param {master_categoryFindUniqueArgs} args - Arguments to find a Master_category
     * @example
     * // Get one Master_category
     * const master_category = await prisma.master_category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends master_categoryFindUniqueArgs>(args: SelectSubset<T, master_categoryFindUniqueArgs<ExtArgs>>): Prisma__master_categoryClient<$Result.GetResult<Prisma.$master_categoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Master_category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {master_categoryFindUniqueOrThrowArgs} args - Arguments to find a Master_category
     * @example
     * // Get one Master_category
     * const master_category = await prisma.master_category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends master_categoryFindUniqueOrThrowArgs>(args: SelectSubset<T, master_categoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__master_categoryClient<$Result.GetResult<Prisma.$master_categoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Master_category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {master_categoryFindFirstArgs} args - Arguments to find a Master_category
     * @example
     * // Get one Master_category
     * const master_category = await prisma.master_category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends master_categoryFindFirstArgs>(args?: SelectSubset<T, master_categoryFindFirstArgs<ExtArgs>>): Prisma__master_categoryClient<$Result.GetResult<Prisma.$master_categoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Master_category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {master_categoryFindFirstOrThrowArgs} args - Arguments to find a Master_category
     * @example
     * // Get one Master_category
     * const master_category = await prisma.master_category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends master_categoryFindFirstOrThrowArgs>(args?: SelectSubset<T, master_categoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__master_categoryClient<$Result.GetResult<Prisma.$master_categoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Master_categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {master_categoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Master_categories
     * const master_categories = await prisma.master_category.findMany()
     * 
     * // Get first 10 Master_categories
     * const master_categories = await prisma.master_category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const master_categoryWithIdOnly = await prisma.master_category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends master_categoryFindManyArgs>(args?: SelectSubset<T, master_categoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$master_categoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Master_category.
     * @param {master_categoryCreateArgs} args - Arguments to create a Master_category.
     * @example
     * // Create one Master_category
     * const Master_category = await prisma.master_category.create({
     *   data: {
     *     // ... data to create a Master_category
     *   }
     * })
     * 
     */
    create<T extends master_categoryCreateArgs>(args: SelectSubset<T, master_categoryCreateArgs<ExtArgs>>): Prisma__master_categoryClient<$Result.GetResult<Prisma.$master_categoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Master_categories.
     * @param {master_categoryCreateManyArgs} args - Arguments to create many Master_categories.
     * @example
     * // Create many Master_categories
     * const master_category = await prisma.master_category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends master_categoryCreateManyArgs>(args?: SelectSubset<T, master_categoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Master_category.
     * @param {master_categoryDeleteArgs} args - Arguments to delete one Master_category.
     * @example
     * // Delete one Master_category
     * const Master_category = await prisma.master_category.delete({
     *   where: {
     *     // ... filter to delete one Master_category
     *   }
     * })
     * 
     */
    delete<T extends master_categoryDeleteArgs>(args: SelectSubset<T, master_categoryDeleteArgs<ExtArgs>>): Prisma__master_categoryClient<$Result.GetResult<Prisma.$master_categoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Master_category.
     * @param {master_categoryUpdateArgs} args - Arguments to update one Master_category.
     * @example
     * // Update one Master_category
     * const master_category = await prisma.master_category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends master_categoryUpdateArgs>(args: SelectSubset<T, master_categoryUpdateArgs<ExtArgs>>): Prisma__master_categoryClient<$Result.GetResult<Prisma.$master_categoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Master_categories.
     * @param {master_categoryDeleteManyArgs} args - Arguments to filter Master_categories to delete.
     * @example
     * // Delete a few Master_categories
     * const { count } = await prisma.master_category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends master_categoryDeleteManyArgs>(args?: SelectSubset<T, master_categoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Master_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {master_categoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Master_categories
     * const master_category = await prisma.master_category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends master_categoryUpdateManyArgs>(args: SelectSubset<T, master_categoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Master_category.
     * @param {master_categoryUpsertArgs} args - Arguments to update or create a Master_category.
     * @example
     * // Update or create a Master_category
     * const master_category = await prisma.master_category.upsert({
     *   create: {
     *     // ... data to create a Master_category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Master_category we want to update
     *   }
     * })
     */
    upsert<T extends master_categoryUpsertArgs>(args: SelectSubset<T, master_categoryUpsertArgs<ExtArgs>>): Prisma__master_categoryClient<$Result.GetResult<Prisma.$master_categoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Master_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {master_categoryCountArgs} args - Arguments to filter Master_categories to count.
     * @example
     * // Count the number of Master_categories
     * const count = await prisma.master_category.count({
     *   where: {
     *     // ... the filter for the Master_categories we want to count
     *   }
     * })
    **/
    count<T extends master_categoryCountArgs>(
      args?: Subset<T, master_categoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Master_categoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Master_category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Master_categoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Master_categoryAggregateArgs>(args: Subset<T, Master_categoryAggregateArgs>): Prisma.PrismaPromise<GetMaster_categoryAggregateType<T>>

    /**
     * Group by Master_category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {master_categoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends master_categoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: master_categoryGroupByArgs['orderBy'] }
        : { orderBy?: master_categoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, master_categoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMaster_categoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the master_category model
   */
  readonly fields: master_categoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for master_category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__master_categoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    participants<T extends master_category$participantsArgs<ExtArgs> = {}>(args?: Subset<T, master_category$participantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$participantsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the master_category model
   */
  interface master_categoryFieldRefs {
    readonly id: FieldRef<"master_category", 'Int'>
    readonly name: FieldRef<"master_category", 'String'>
    readonly type: FieldRef<"master_category", 'String'>
    readonly price: FieldRef<"master_category", 'Int'>
    readonly createdAt: FieldRef<"master_category", 'DateTime'>
    readonly updatedAt: FieldRef<"master_category", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * master_category findUnique
   */
  export type master_categoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the master_category
     */
    select?: master_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the master_category
     */
    omit?: master_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: master_categoryInclude<ExtArgs> | null
    /**
     * Filter, which master_category to fetch.
     */
    where: master_categoryWhereUniqueInput
  }

  /**
   * master_category findUniqueOrThrow
   */
  export type master_categoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the master_category
     */
    select?: master_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the master_category
     */
    omit?: master_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: master_categoryInclude<ExtArgs> | null
    /**
     * Filter, which master_category to fetch.
     */
    where: master_categoryWhereUniqueInput
  }

  /**
   * master_category findFirst
   */
  export type master_categoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the master_category
     */
    select?: master_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the master_category
     */
    omit?: master_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: master_categoryInclude<ExtArgs> | null
    /**
     * Filter, which master_category to fetch.
     */
    where?: master_categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of master_categories to fetch.
     */
    orderBy?: master_categoryOrderByWithRelationInput | master_categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for master_categories.
     */
    cursor?: master_categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` master_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` master_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of master_categories.
     */
    distinct?: Master_categoryScalarFieldEnum | Master_categoryScalarFieldEnum[]
  }

  /**
   * master_category findFirstOrThrow
   */
  export type master_categoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the master_category
     */
    select?: master_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the master_category
     */
    omit?: master_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: master_categoryInclude<ExtArgs> | null
    /**
     * Filter, which master_category to fetch.
     */
    where?: master_categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of master_categories to fetch.
     */
    orderBy?: master_categoryOrderByWithRelationInput | master_categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for master_categories.
     */
    cursor?: master_categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` master_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` master_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of master_categories.
     */
    distinct?: Master_categoryScalarFieldEnum | Master_categoryScalarFieldEnum[]
  }

  /**
   * master_category findMany
   */
  export type master_categoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the master_category
     */
    select?: master_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the master_category
     */
    omit?: master_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: master_categoryInclude<ExtArgs> | null
    /**
     * Filter, which master_categories to fetch.
     */
    where?: master_categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of master_categories to fetch.
     */
    orderBy?: master_categoryOrderByWithRelationInput | master_categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing master_categories.
     */
    cursor?: master_categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` master_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` master_categories.
     */
    skip?: number
    distinct?: Master_categoryScalarFieldEnum | Master_categoryScalarFieldEnum[]
  }

  /**
   * master_category create
   */
  export type master_categoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the master_category
     */
    select?: master_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the master_category
     */
    omit?: master_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: master_categoryInclude<ExtArgs> | null
    /**
     * The data needed to create a master_category.
     */
    data: XOR<master_categoryCreateInput, master_categoryUncheckedCreateInput>
  }

  /**
   * master_category createMany
   */
  export type master_categoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many master_categories.
     */
    data: master_categoryCreateManyInput | master_categoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * master_category update
   */
  export type master_categoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the master_category
     */
    select?: master_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the master_category
     */
    omit?: master_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: master_categoryInclude<ExtArgs> | null
    /**
     * The data needed to update a master_category.
     */
    data: XOR<master_categoryUpdateInput, master_categoryUncheckedUpdateInput>
    /**
     * Choose, which master_category to update.
     */
    where: master_categoryWhereUniqueInput
  }

  /**
   * master_category updateMany
   */
  export type master_categoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update master_categories.
     */
    data: XOR<master_categoryUpdateManyMutationInput, master_categoryUncheckedUpdateManyInput>
    /**
     * Filter which master_categories to update
     */
    where?: master_categoryWhereInput
    /**
     * Limit how many master_categories to update.
     */
    limit?: number
  }

  /**
   * master_category upsert
   */
  export type master_categoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the master_category
     */
    select?: master_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the master_category
     */
    omit?: master_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: master_categoryInclude<ExtArgs> | null
    /**
     * The filter to search for the master_category to update in case it exists.
     */
    where: master_categoryWhereUniqueInput
    /**
     * In case the master_category found by the `where` argument doesn't exist, create a new master_category with this data.
     */
    create: XOR<master_categoryCreateInput, master_categoryUncheckedCreateInput>
    /**
     * In case the master_category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<master_categoryUpdateInput, master_categoryUncheckedUpdateInput>
  }

  /**
   * master_category delete
   */
  export type master_categoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the master_category
     */
    select?: master_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the master_category
     */
    omit?: master_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: master_categoryInclude<ExtArgs> | null
    /**
     * Filter which master_category to delete.
     */
    where: master_categoryWhereUniqueInput
  }

  /**
   * master_category deleteMany
   */
  export type master_categoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which master_categories to delete
     */
    where?: master_categoryWhereInput
    /**
     * Limit how many master_categories to delete.
     */
    limit?: number
  }

  /**
   * master_category.participants
   */
  export type master_category$participantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the participants
     */
    select?: participantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the participants
     */
    omit?: participantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: participantsInclude<ExtArgs> | null
    where?: participantsWhereInput
    orderBy?: participantsOrderByWithRelationInput | participantsOrderByWithRelationInput[]
    cursor?: participantsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParticipantsScalarFieldEnum | ParticipantsScalarFieldEnum[]
  }

  /**
   * master_category without action
   */
  export type master_categoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the master_category
     */
    select?: master_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the master_category
     */
    omit?: master_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: master_categoryInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    username: 'username',
    password: 'password',
    role: 'role',
    status: 'status',
    users_refId: 'users_refId',
    transactionId: 'transactionId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const Users_refScalarFieldEnum: {
    EKTP: 'EKTP',
    type: 'type',
    name: 'name',
    birthplace: 'birthplace',
    birthdate: 'birthdate',
    address: 'address',
    subdistrict: 'subdistrict',
    district: 'district',
    city: 'city',
    phone: 'phone',
    email: 'email',
    gender: 'gender',
    weight: 'weight',
    height: 'height',
    bloodType: 'bloodType',
    religion: 'religion',
    struct: 'struct'
  };

  export type Users_refScalarFieldEnum = (typeof Users_refScalarFieldEnum)[keyof typeof Users_refScalarFieldEnum]


  export const Family_refScalarFieldEnum: {
    id: 'id',
    users_refKtp: 'users_refKtp',
    name: 'name',
    EKTP: 'EKTP',
    type: 'type',
    relation: 'relation',
    birthplace: 'birthplace',
    birthdate: 'birthdate',
    address: 'address',
    subdistrict: 'subdistrict',
    district: 'district',
    city: 'city',
    phone: 'phone',
    email: 'email'
  };

  export type Family_refScalarFieldEnum = (typeof Family_refScalarFieldEnum)[keyof typeof Family_refScalarFieldEnum]


  export const ParticipantsScalarFieldEnum: {
    id: 'id',
    fname: 'fname',
    lname: 'lname',
    bibname: 'bibname',
    email: 'email',
    identityId: 'identityId',
    birthplace: 'birthplace',
    birthdate: 'birthdate',
    phone: 'phone',
    address: 'address',
    zipcode: 'zipcode',
    country: 'country',
    city: 'city',
    bloodType: 'bloodType',
    size: 'size',
    master_categoryId: 'master_categoryId',
    transactionsId: 'transactionsId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ParticipantsScalarFieldEnum = (typeof ParticipantsScalarFieldEnum)[keyof typeof ParticipantsScalarFieldEnum]


  export const TransactionsScalarFieldEnum: {
    id: 'id',
    pt: 'pt',
    divisi: 'divisi',
    emergencyName: 'emergencyName',
    emergencyPhone: 'emergencyPhone',
    transferProof: 'transferProof',
    total: 'total',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TransactionsScalarFieldEnum = (typeof TransactionsScalarFieldEnum)[keyof typeof TransactionsScalarFieldEnum]


  export const Master_categoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    price: 'price',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type Master_categoryScalarFieldEnum = (typeof Master_categoryScalarFieldEnum)[keyof typeof Master_categoryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const usersOrderByRelevanceFieldEnum: {
    name: 'name',
    username: 'username',
    password: 'password',
    role: 'role',
    users_refId: 'users_refId',
    transactionId: 'transactionId'
  };

  export type usersOrderByRelevanceFieldEnum = (typeof usersOrderByRelevanceFieldEnum)[keyof typeof usersOrderByRelevanceFieldEnum]


  export const users_refOrderByRelevanceFieldEnum: {
    EKTP: 'EKTP',
    type: 'type',
    name: 'name',
    birthplace: 'birthplace',
    address: 'address',
    subdistrict: 'subdistrict',
    district: 'district',
    city: 'city',
    phone: 'phone',
    email: 'email',
    gender: 'gender',
    bloodType: 'bloodType',
    religion: 'religion',
    struct: 'struct'
  };

  export type users_refOrderByRelevanceFieldEnum = (typeof users_refOrderByRelevanceFieldEnum)[keyof typeof users_refOrderByRelevanceFieldEnum]


  export const family_refOrderByRelevanceFieldEnum: {
    users_refKtp: 'users_refKtp',
    name: 'name',
    EKTP: 'EKTP',
    type: 'type',
    relation: 'relation',
    birthplace: 'birthplace',
    address: 'address',
    subdistrict: 'subdistrict',
    district: 'district',
    city: 'city',
    phone: 'phone',
    email: 'email'
  };

  export type family_refOrderByRelevanceFieldEnum = (typeof family_refOrderByRelevanceFieldEnum)[keyof typeof family_refOrderByRelevanceFieldEnum]


  export const participantsOrderByRelevanceFieldEnum: {
    fname: 'fname',
    lname: 'lname',
    bibname: 'bibname',
    email: 'email',
    identityId: 'identityId',
    birthplace: 'birthplace',
    phone: 'phone',
    address: 'address',
    zipcode: 'zipcode',
    country: 'country',
    city: 'city',
    bloodType: 'bloodType',
    size: 'size',
    transactionsId: 'transactionsId'
  };

  export type participantsOrderByRelevanceFieldEnum = (typeof participantsOrderByRelevanceFieldEnum)[keyof typeof participantsOrderByRelevanceFieldEnum]


  export const transactionsOrderByRelevanceFieldEnum: {
    id: 'id',
    pt: 'pt',
    divisi: 'divisi',
    emergencyName: 'emergencyName',
    emergencyPhone: 'emergencyPhone',
    transferProof: 'transferProof'
  };

  export type transactionsOrderByRelevanceFieldEnum = (typeof transactionsOrderByRelevanceFieldEnum)[keyof typeof transactionsOrderByRelevanceFieldEnum]


  export const master_categoryOrderByRelevanceFieldEnum: {
    name: 'name',
    type: 'type'
  };

  export type master_categoryOrderByRelevanceFieldEnum = (typeof master_categoryOrderByRelevanceFieldEnum)[keyof typeof master_categoryOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: IntFilter<"users"> | number
    name?: StringFilter<"users"> | string
    username?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    role?: StringFilter<"users"> | string
    status?: IntFilter<"users"> | number
    users_refId?: StringNullableFilter<"users"> | string | null
    transactionId?: StringNullableFilter<"users"> | string | null
    createdAt?: DateTimeFilter<"users"> | Date | string
    updatedAt?: DateTimeFilter<"users"> | Date | string
    users_ref?: XOR<Users_refNullableScalarRelationFilter, users_refWhereInput> | null
    transactions?: XOR<TransactionsNullableScalarRelationFilter, transactionsWhereInput> | null
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    users_refId?: SortOrderInput | SortOrder
    transactionId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    users_ref?: users_refOrderByWithRelationInput
    transactions?: transactionsOrderByWithRelationInput
    _relevance?: usersOrderByRelevanceInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    users_refId?: string
    transactionId?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    name?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    role?: StringFilter<"users"> | string
    status?: IntFilter<"users"> | number
    createdAt?: DateTimeFilter<"users"> | Date | string
    updatedAt?: DateTimeFilter<"users"> | Date | string
    users_ref?: XOR<Users_refNullableScalarRelationFilter, users_refWhereInput> | null
    transactions?: XOR<TransactionsNullableScalarRelationFilter, transactionsWhereInput> | null
  }, "id" | "username" | "users_refId" | "transactionId">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    users_refId?: SortOrderInput | SortOrder
    transactionId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"users"> | number
    name?: StringWithAggregatesFilter<"users"> | string
    username?: StringWithAggregatesFilter<"users"> | string
    password?: StringWithAggregatesFilter<"users"> | string
    role?: StringWithAggregatesFilter<"users"> | string
    status?: IntWithAggregatesFilter<"users"> | number
    users_refId?: StringNullableWithAggregatesFilter<"users"> | string | null
    transactionId?: StringNullableWithAggregatesFilter<"users"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"users"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"users"> | Date | string
  }

  export type users_refWhereInput = {
    AND?: users_refWhereInput | users_refWhereInput[]
    OR?: users_refWhereInput[]
    NOT?: users_refWhereInput | users_refWhereInput[]
    EKTP?: StringFilter<"users_ref"> | string
    type?: StringFilter<"users_ref"> | string
    name?: StringFilter<"users_ref"> | string
    birthplace?: StringNullableFilter<"users_ref"> | string | null
    birthdate?: DateTimeNullableFilter<"users_ref"> | Date | string | null
    address?: StringNullableFilter<"users_ref"> | string | null
    subdistrict?: StringNullableFilter<"users_ref"> | string | null
    district?: StringNullableFilter<"users_ref"> | string | null
    city?: StringNullableFilter<"users_ref"> | string | null
    phone?: StringNullableFilter<"users_ref"> | string | null
    email?: StringNullableFilter<"users_ref"> | string | null
    gender?: StringNullableFilter<"users_ref"> | string | null
    weight?: IntNullableFilter<"users_ref"> | number | null
    height?: IntNullableFilter<"users_ref"> | number | null
    bloodType?: StringNullableFilter<"users_ref"> | string | null
    religion?: StringNullableFilter<"users_ref"> | string | null
    struct?: StringNullableFilter<"users_ref"> | string | null
    family_ref?: Family_refListRelationFilter
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }

  export type users_refOrderByWithRelationInput = {
    EKTP?: SortOrder
    type?: SortOrder
    name?: SortOrder
    birthplace?: SortOrderInput | SortOrder
    birthdate?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    subdistrict?: SortOrderInput | SortOrder
    district?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    weight?: SortOrderInput | SortOrder
    height?: SortOrderInput | SortOrder
    bloodType?: SortOrderInput | SortOrder
    religion?: SortOrderInput | SortOrder
    struct?: SortOrderInput | SortOrder
    family_ref?: family_refOrderByRelationAggregateInput
    users?: usersOrderByWithRelationInput
    _relevance?: users_refOrderByRelevanceInput
  }

  export type users_refWhereUniqueInput = Prisma.AtLeast<{
    EKTP?: string
    AND?: users_refWhereInput | users_refWhereInput[]
    OR?: users_refWhereInput[]
    NOT?: users_refWhereInput | users_refWhereInput[]
    type?: StringFilter<"users_ref"> | string
    name?: StringFilter<"users_ref"> | string
    birthplace?: StringNullableFilter<"users_ref"> | string | null
    birthdate?: DateTimeNullableFilter<"users_ref"> | Date | string | null
    address?: StringNullableFilter<"users_ref"> | string | null
    subdistrict?: StringNullableFilter<"users_ref"> | string | null
    district?: StringNullableFilter<"users_ref"> | string | null
    city?: StringNullableFilter<"users_ref"> | string | null
    phone?: StringNullableFilter<"users_ref"> | string | null
    email?: StringNullableFilter<"users_ref"> | string | null
    gender?: StringNullableFilter<"users_ref"> | string | null
    weight?: IntNullableFilter<"users_ref"> | number | null
    height?: IntNullableFilter<"users_ref"> | number | null
    bloodType?: StringNullableFilter<"users_ref"> | string | null
    religion?: StringNullableFilter<"users_ref"> | string | null
    struct?: StringNullableFilter<"users_ref"> | string | null
    family_ref?: Family_refListRelationFilter
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }, "EKTP" | "EKTP">

  export type users_refOrderByWithAggregationInput = {
    EKTP?: SortOrder
    type?: SortOrder
    name?: SortOrder
    birthplace?: SortOrderInput | SortOrder
    birthdate?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    subdistrict?: SortOrderInput | SortOrder
    district?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    weight?: SortOrderInput | SortOrder
    height?: SortOrderInput | SortOrder
    bloodType?: SortOrderInput | SortOrder
    religion?: SortOrderInput | SortOrder
    struct?: SortOrderInput | SortOrder
    _count?: users_refCountOrderByAggregateInput
    _avg?: users_refAvgOrderByAggregateInput
    _max?: users_refMaxOrderByAggregateInput
    _min?: users_refMinOrderByAggregateInput
    _sum?: users_refSumOrderByAggregateInput
  }

  export type users_refScalarWhereWithAggregatesInput = {
    AND?: users_refScalarWhereWithAggregatesInput | users_refScalarWhereWithAggregatesInput[]
    OR?: users_refScalarWhereWithAggregatesInput[]
    NOT?: users_refScalarWhereWithAggregatesInput | users_refScalarWhereWithAggregatesInput[]
    EKTP?: StringWithAggregatesFilter<"users_ref"> | string
    type?: StringWithAggregatesFilter<"users_ref"> | string
    name?: StringWithAggregatesFilter<"users_ref"> | string
    birthplace?: StringNullableWithAggregatesFilter<"users_ref"> | string | null
    birthdate?: DateTimeNullableWithAggregatesFilter<"users_ref"> | Date | string | null
    address?: StringNullableWithAggregatesFilter<"users_ref"> | string | null
    subdistrict?: StringNullableWithAggregatesFilter<"users_ref"> | string | null
    district?: StringNullableWithAggregatesFilter<"users_ref"> | string | null
    city?: StringNullableWithAggregatesFilter<"users_ref"> | string | null
    phone?: StringNullableWithAggregatesFilter<"users_ref"> | string | null
    email?: StringNullableWithAggregatesFilter<"users_ref"> | string | null
    gender?: StringNullableWithAggregatesFilter<"users_ref"> | string | null
    weight?: IntNullableWithAggregatesFilter<"users_ref"> | number | null
    height?: IntNullableWithAggregatesFilter<"users_ref"> | number | null
    bloodType?: StringNullableWithAggregatesFilter<"users_ref"> | string | null
    religion?: StringNullableWithAggregatesFilter<"users_ref"> | string | null
    struct?: StringNullableWithAggregatesFilter<"users_ref"> | string | null
  }

  export type family_refWhereInput = {
    AND?: family_refWhereInput | family_refWhereInput[]
    OR?: family_refWhereInput[]
    NOT?: family_refWhereInput | family_refWhereInput[]
    id?: IntFilter<"family_ref"> | number
    users_refKtp?: StringFilter<"family_ref"> | string
    name?: StringFilter<"family_ref"> | string
    EKTP?: StringNullableFilter<"family_ref"> | string | null
    type?: StringFilter<"family_ref"> | string
    relation?: StringFilter<"family_ref"> | string
    birthplace?: StringNullableFilter<"family_ref"> | string | null
    birthdate?: DateTimeNullableFilter<"family_ref"> | Date | string | null
    address?: StringNullableFilter<"family_ref"> | string | null
    subdistrict?: StringNullableFilter<"family_ref"> | string | null
    district?: StringNullableFilter<"family_ref"> | string | null
    city?: StringNullableFilter<"family_ref"> | string | null
    phone?: StringNullableFilter<"family_ref"> | string | null
    email?: StringFilter<"family_ref"> | string
    users_ref?: XOR<Users_refNullableScalarRelationFilter, users_refWhereInput> | null
  }

  export type family_refOrderByWithRelationInput = {
    id?: SortOrder
    users_refKtp?: SortOrder
    name?: SortOrder
    EKTP?: SortOrderInput | SortOrder
    type?: SortOrder
    relation?: SortOrder
    birthplace?: SortOrderInput | SortOrder
    birthdate?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    subdistrict?: SortOrderInput | SortOrder
    district?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrder
    users_ref?: users_refOrderByWithRelationInput
    _relevance?: family_refOrderByRelevanceInput
  }

  export type family_refWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: family_refWhereInput | family_refWhereInput[]
    OR?: family_refWhereInput[]
    NOT?: family_refWhereInput | family_refWhereInput[]
    users_refKtp?: StringFilter<"family_ref"> | string
    name?: StringFilter<"family_ref"> | string
    EKTP?: StringNullableFilter<"family_ref"> | string | null
    type?: StringFilter<"family_ref"> | string
    relation?: StringFilter<"family_ref"> | string
    birthplace?: StringNullableFilter<"family_ref"> | string | null
    birthdate?: DateTimeNullableFilter<"family_ref"> | Date | string | null
    address?: StringNullableFilter<"family_ref"> | string | null
    subdistrict?: StringNullableFilter<"family_ref"> | string | null
    district?: StringNullableFilter<"family_ref"> | string | null
    city?: StringNullableFilter<"family_ref"> | string | null
    phone?: StringNullableFilter<"family_ref"> | string | null
    email?: StringFilter<"family_ref"> | string
    users_ref?: XOR<Users_refNullableScalarRelationFilter, users_refWhereInput> | null
  }, "id">

  export type family_refOrderByWithAggregationInput = {
    id?: SortOrder
    users_refKtp?: SortOrder
    name?: SortOrder
    EKTP?: SortOrderInput | SortOrder
    type?: SortOrder
    relation?: SortOrder
    birthplace?: SortOrderInput | SortOrder
    birthdate?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    subdistrict?: SortOrderInput | SortOrder
    district?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrder
    _count?: family_refCountOrderByAggregateInput
    _avg?: family_refAvgOrderByAggregateInput
    _max?: family_refMaxOrderByAggregateInput
    _min?: family_refMinOrderByAggregateInput
    _sum?: family_refSumOrderByAggregateInput
  }

  export type family_refScalarWhereWithAggregatesInput = {
    AND?: family_refScalarWhereWithAggregatesInput | family_refScalarWhereWithAggregatesInput[]
    OR?: family_refScalarWhereWithAggregatesInput[]
    NOT?: family_refScalarWhereWithAggregatesInput | family_refScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"family_ref"> | number
    users_refKtp?: StringWithAggregatesFilter<"family_ref"> | string
    name?: StringWithAggregatesFilter<"family_ref"> | string
    EKTP?: StringNullableWithAggregatesFilter<"family_ref"> | string | null
    type?: StringWithAggregatesFilter<"family_ref"> | string
    relation?: StringWithAggregatesFilter<"family_ref"> | string
    birthplace?: StringNullableWithAggregatesFilter<"family_ref"> | string | null
    birthdate?: DateTimeNullableWithAggregatesFilter<"family_ref"> | Date | string | null
    address?: StringNullableWithAggregatesFilter<"family_ref"> | string | null
    subdistrict?: StringNullableWithAggregatesFilter<"family_ref"> | string | null
    district?: StringNullableWithAggregatesFilter<"family_ref"> | string | null
    city?: StringNullableWithAggregatesFilter<"family_ref"> | string | null
    phone?: StringNullableWithAggregatesFilter<"family_ref"> | string | null
    email?: StringWithAggregatesFilter<"family_ref"> | string
  }

  export type participantsWhereInput = {
    AND?: participantsWhereInput | participantsWhereInput[]
    OR?: participantsWhereInput[]
    NOT?: participantsWhereInput | participantsWhereInput[]
    id?: IntFilter<"participants"> | number
    fname?: StringFilter<"participants"> | string
    lname?: StringFilter<"participants"> | string
    bibname?: StringFilter<"participants"> | string
    email?: StringFilter<"participants"> | string
    identityId?: StringFilter<"participants"> | string
    birthplace?: StringFilter<"participants"> | string
    birthdate?: DateTimeFilter<"participants"> | Date | string
    phone?: StringFilter<"participants"> | string
    address?: StringFilter<"participants"> | string
    zipcode?: StringFilter<"participants"> | string
    country?: StringFilter<"participants"> | string
    city?: StringFilter<"participants"> | string
    bloodType?: StringFilter<"participants"> | string
    size?: StringNullableFilter<"participants"> | string | null
    master_categoryId?: IntNullableFilter<"participants"> | number | null
    transactionsId?: StringNullableFilter<"participants"> | string | null
    createdAt?: DateTimeFilter<"participants"> | Date | string
    updatedAt?: DateTimeFilter<"participants"> | Date | string
    transactions?: XOR<TransactionsNullableScalarRelationFilter, transactionsWhereInput> | null
    master_category?: XOR<Master_categoryNullableScalarRelationFilter, master_categoryWhereInput> | null
  }

  export type participantsOrderByWithRelationInput = {
    id?: SortOrder
    fname?: SortOrder
    lname?: SortOrder
    bibname?: SortOrder
    email?: SortOrder
    identityId?: SortOrder
    birthplace?: SortOrder
    birthdate?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    zipcode?: SortOrder
    country?: SortOrder
    city?: SortOrder
    bloodType?: SortOrder
    size?: SortOrderInput | SortOrder
    master_categoryId?: SortOrderInput | SortOrder
    transactionsId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    transactions?: transactionsOrderByWithRelationInput
    master_category?: master_categoryOrderByWithRelationInput
    _relevance?: participantsOrderByRelevanceInput
  }

  export type participantsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: participantsWhereInput | participantsWhereInput[]
    OR?: participantsWhereInput[]
    NOT?: participantsWhereInput | participantsWhereInput[]
    fname?: StringFilter<"participants"> | string
    lname?: StringFilter<"participants"> | string
    bibname?: StringFilter<"participants"> | string
    email?: StringFilter<"participants"> | string
    identityId?: StringFilter<"participants"> | string
    birthplace?: StringFilter<"participants"> | string
    birthdate?: DateTimeFilter<"participants"> | Date | string
    phone?: StringFilter<"participants"> | string
    address?: StringFilter<"participants"> | string
    zipcode?: StringFilter<"participants"> | string
    country?: StringFilter<"participants"> | string
    city?: StringFilter<"participants"> | string
    bloodType?: StringFilter<"participants"> | string
    size?: StringNullableFilter<"participants"> | string | null
    master_categoryId?: IntNullableFilter<"participants"> | number | null
    transactionsId?: StringNullableFilter<"participants"> | string | null
    createdAt?: DateTimeFilter<"participants"> | Date | string
    updatedAt?: DateTimeFilter<"participants"> | Date | string
    transactions?: XOR<TransactionsNullableScalarRelationFilter, transactionsWhereInput> | null
    master_category?: XOR<Master_categoryNullableScalarRelationFilter, master_categoryWhereInput> | null
  }, "id">

  export type participantsOrderByWithAggregationInput = {
    id?: SortOrder
    fname?: SortOrder
    lname?: SortOrder
    bibname?: SortOrder
    email?: SortOrder
    identityId?: SortOrder
    birthplace?: SortOrder
    birthdate?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    zipcode?: SortOrder
    country?: SortOrder
    city?: SortOrder
    bloodType?: SortOrder
    size?: SortOrderInput | SortOrder
    master_categoryId?: SortOrderInput | SortOrder
    transactionsId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: participantsCountOrderByAggregateInput
    _avg?: participantsAvgOrderByAggregateInput
    _max?: participantsMaxOrderByAggregateInput
    _min?: participantsMinOrderByAggregateInput
    _sum?: participantsSumOrderByAggregateInput
  }

  export type participantsScalarWhereWithAggregatesInput = {
    AND?: participantsScalarWhereWithAggregatesInput | participantsScalarWhereWithAggregatesInput[]
    OR?: participantsScalarWhereWithAggregatesInput[]
    NOT?: participantsScalarWhereWithAggregatesInput | participantsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"participants"> | number
    fname?: StringWithAggregatesFilter<"participants"> | string
    lname?: StringWithAggregatesFilter<"participants"> | string
    bibname?: StringWithAggregatesFilter<"participants"> | string
    email?: StringWithAggregatesFilter<"participants"> | string
    identityId?: StringWithAggregatesFilter<"participants"> | string
    birthplace?: StringWithAggregatesFilter<"participants"> | string
    birthdate?: DateTimeWithAggregatesFilter<"participants"> | Date | string
    phone?: StringWithAggregatesFilter<"participants"> | string
    address?: StringWithAggregatesFilter<"participants"> | string
    zipcode?: StringWithAggregatesFilter<"participants"> | string
    country?: StringWithAggregatesFilter<"participants"> | string
    city?: StringWithAggregatesFilter<"participants"> | string
    bloodType?: StringWithAggregatesFilter<"participants"> | string
    size?: StringNullableWithAggregatesFilter<"participants"> | string | null
    master_categoryId?: IntNullableWithAggregatesFilter<"participants"> | number | null
    transactionsId?: StringNullableWithAggregatesFilter<"participants"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"participants"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"participants"> | Date | string
  }

  export type transactionsWhereInput = {
    AND?: transactionsWhereInput | transactionsWhereInput[]
    OR?: transactionsWhereInput[]
    NOT?: transactionsWhereInput | transactionsWhereInput[]
    id?: StringFilter<"transactions"> | string
    pt?: StringFilter<"transactions"> | string
    divisi?: StringFilter<"transactions"> | string
    emergencyName?: StringFilter<"transactions"> | string
    emergencyPhone?: StringFilter<"transactions"> | string
    transferProof?: StringNullableFilter<"transactions"> | string | null
    total?: IntFilter<"transactions"> | number
    status?: IntFilter<"transactions"> | number
    createdAt?: DateTimeFilter<"transactions"> | Date | string
    updatedAt?: DateTimeFilter<"transactions"> | Date | string
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    participants?: ParticipantsListRelationFilter
  }

  export type transactionsOrderByWithRelationInput = {
    id?: SortOrder
    pt?: SortOrder
    divisi?: SortOrder
    emergencyName?: SortOrder
    emergencyPhone?: SortOrder
    transferProof?: SortOrderInput | SortOrder
    total?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    users?: usersOrderByWithRelationInput
    participants?: participantsOrderByRelationAggregateInput
    _relevance?: transactionsOrderByRelevanceInput
  }

  export type transactionsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: transactionsWhereInput | transactionsWhereInput[]
    OR?: transactionsWhereInput[]
    NOT?: transactionsWhereInput | transactionsWhereInput[]
    pt?: StringFilter<"transactions"> | string
    divisi?: StringFilter<"transactions"> | string
    emergencyName?: StringFilter<"transactions"> | string
    emergencyPhone?: StringFilter<"transactions"> | string
    transferProof?: StringNullableFilter<"transactions"> | string | null
    total?: IntFilter<"transactions"> | number
    status?: IntFilter<"transactions"> | number
    createdAt?: DateTimeFilter<"transactions"> | Date | string
    updatedAt?: DateTimeFilter<"transactions"> | Date | string
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    participants?: ParticipantsListRelationFilter
  }, "id">

  export type transactionsOrderByWithAggregationInput = {
    id?: SortOrder
    pt?: SortOrder
    divisi?: SortOrder
    emergencyName?: SortOrder
    emergencyPhone?: SortOrder
    transferProof?: SortOrderInput | SortOrder
    total?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: transactionsCountOrderByAggregateInput
    _avg?: transactionsAvgOrderByAggregateInput
    _max?: transactionsMaxOrderByAggregateInput
    _min?: transactionsMinOrderByAggregateInput
    _sum?: transactionsSumOrderByAggregateInput
  }

  export type transactionsScalarWhereWithAggregatesInput = {
    AND?: transactionsScalarWhereWithAggregatesInput | transactionsScalarWhereWithAggregatesInput[]
    OR?: transactionsScalarWhereWithAggregatesInput[]
    NOT?: transactionsScalarWhereWithAggregatesInput | transactionsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"transactions"> | string
    pt?: StringWithAggregatesFilter<"transactions"> | string
    divisi?: StringWithAggregatesFilter<"transactions"> | string
    emergencyName?: StringWithAggregatesFilter<"transactions"> | string
    emergencyPhone?: StringWithAggregatesFilter<"transactions"> | string
    transferProof?: StringNullableWithAggregatesFilter<"transactions"> | string | null
    total?: IntWithAggregatesFilter<"transactions"> | number
    status?: IntWithAggregatesFilter<"transactions"> | number
    createdAt?: DateTimeWithAggregatesFilter<"transactions"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"transactions"> | Date | string
  }

  export type master_categoryWhereInput = {
    AND?: master_categoryWhereInput | master_categoryWhereInput[]
    OR?: master_categoryWhereInput[]
    NOT?: master_categoryWhereInput | master_categoryWhereInput[]
    id?: IntFilter<"master_category"> | number
    name?: StringFilter<"master_category"> | string
    type?: StringFilter<"master_category"> | string
    price?: IntFilter<"master_category"> | number
    createdAt?: DateTimeFilter<"master_category"> | Date | string
    updatedAt?: DateTimeFilter<"master_category"> | Date | string
    participants?: ParticipantsListRelationFilter
  }

  export type master_categoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    participants?: participantsOrderByRelationAggregateInput
    _relevance?: master_categoryOrderByRelevanceInput
  }

  export type master_categoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: master_categoryWhereInput | master_categoryWhereInput[]
    OR?: master_categoryWhereInput[]
    NOT?: master_categoryWhereInput | master_categoryWhereInput[]
    name?: StringFilter<"master_category"> | string
    type?: StringFilter<"master_category"> | string
    price?: IntFilter<"master_category"> | number
    createdAt?: DateTimeFilter<"master_category"> | Date | string
    updatedAt?: DateTimeFilter<"master_category"> | Date | string
    participants?: ParticipantsListRelationFilter
  }, "id">

  export type master_categoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: master_categoryCountOrderByAggregateInput
    _avg?: master_categoryAvgOrderByAggregateInput
    _max?: master_categoryMaxOrderByAggregateInput
    _min?: master_categoryMinOrderByAggregateInput
    _sum?: master_categorySumOrderByAggregateInput
  }

  export type master_categoryScalarWhereWithAggregatesInput = {
    AND?: master_categoryScalarWhereWithAggregatesInput | master_categoryScalarWhereWithAggregatesInput[]
    OR?: master_categoryScalarWhereWithAggregatesInput[]
    NOT?: master_categoryScalarWhereWithAggregatesInput | master_categoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"master_category"> | number
    name?: StringWithAggregatesFilter<"master_category"> | string
    type?: StringWithAggregatesFilter<"master_category"> | string
    price?: IntWithAggregatesFilter<"master_category"> | number
    createdAt?: DateTimeWithAggregatesFilter<"master_category"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"master_category"> | Date | string
  }

  export type usersCreateInput = {
    name: string
    username: string
    password?: string
    role?: string
    status?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    users_ref?: users_refCreateNestedOneWithoutUsersInput
    transactions?: transactionsCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    id?: number
    name: string
    username: string
    password?: string
    role?: string
    status?: number
    users_refId?: string | null
    transactionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type usersUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users_ref?: users_refUpdateOneWithoutUsersNestedInput
    transactions?: transactionsUpdateOneWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    users_refId?: NullableStringFieldUpdateOperationsInput | string | null
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersCreateManyInput = {
    id?: number
    name: string
    username: string
    password?: string
    role?: string
    status?: number
    users_refId?: string | null
    transactionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type usersUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    users_refId?: NullableStringFieldUpdateOperationsInput | string | null
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type users_refCreateInput = {
    EKTP: string
    type: string
    name: string
    birthplace?: string | null
    birthdate?: Date | string | null
    address?: string | null
    subdistrict?: string | null
    district?: string | null
    city?: string | null
    phone?: string | null
    email?: string | null
    gender?: string | null
    weight?: number | null
    height?: number | null
    bloodType?: string | null
    religion?: string | null
    struct?: string | null
    family_ref?: family_refCreateNestedManyWithoutUsers_refInput
    users?: usersCreateNestedOneWithoutUsers_refInput
  }

  export type users_refUncheckedCreateInput = {
    EKTP: string
    type: string
    name: string
    birthplace?: string | null
    birthdate?: Date | string | null
    address?: string | null
    subdistrict?: string | null
    district?: string | null
    city?: string | null
    phone?: string | null
    email?: string | null
    gender?: string | null
    weight?: number | null
    height?: number | null
    bloodType?: string | null
    religion?: string | null
    struct?: string | null
    family_ref?: family_refUncheckedCreateNestedManyWithoutUsers_refInput
    users?: usersUncheckedCreateNestedOneWithoutUsers_refInput
  }

  export type users_refUpdateInput = {
    EKTP?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birthplace?: NullableStringFieldUpdateOperationsInput | string | null
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    subdistrict?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    bloodType?: NullableStringFieldUpdateOperationsInput | string | null
    religion?: NullableStringFieldUpdateOperationsInput | string | null
    struct?: NullableStringFieldUpdateOperationsInput | string | null
    family_ref?: family_refUpdateManyWithoutUsers_refNestedInput
    users?: usersUpdateOneWithoutUsers_refNestedInput
  }

  export type users_refUncheckedUpdateInput = {
    EKTP?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birthplace?: NullableStringFieldUpdateOperationsInput | string | null
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    subdistrict?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    bloodType?: NullableStringFieldUpdateOperationsInput | string | null
    religion?: NullableStringFieldUpdateOperationsInput | string | null
    struct?: NullableStringFieldUpdateOperationsInput | string | null
    family_ref?: family_refUncheckedUpdateManyWithoutUsers_refNestedInput
    users?: usersUncheckedUpdateOneWithoutUsers_refNestedInput
  }

  export type users_refCreateManyInput = {
    EKTP: string
    type: string
    name: string
    birthplace?: string | null
    birthdate?: Date | string | null
    address?: string | null
    subdistrict?: string | null
    district?: string | null
    city?: string | null
    phone?: string | null
    email?: string | null
    gender?: string | null
    weight?: number | null
    height?: number | null
    bloodType?: string | null
    religion?: string | null
    struct?: string | null
  }

  export type users_refUpdateManyMutationInput = {
    EKTP?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birthplace?: NullableStringFieldUpdateOperationsInput | string | null
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    subdistrict?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    bloodType?: NullableStringFieldUpdateOperationsInput | string | null
    religion?: NullableStringFieldUpdateOperationsInput | string | null
    struct?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type users_refUncheckedUpdateManyInput = {
    EKTP?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birthplace?: NullableStringFieldUpdateOperationsInput | string | null
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    subdistrict?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    bloodType?: NullableStringFieldUpdateOperationsInput | string | null
    religion?: NullableStringFieldUpdateOperationsInput | string | null
    struct?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type family_refCreateInput = {
    name: string
    EKTP?: string | null
    type: string
    relation: string
    birthplace?: string | null
    birthdate?: Date | string | null
    address?: string | null
    subdistrict?: string | null
    district?: string | null
    city?: string | null
    phone?: string | null
    email: string
    users_ref?: users_refCreateNestedOneWithoutFamily_refInput
  }

  export type family_refUncheckedCreateInput = {
    id?: number
    users_refKtp: string
    name: string
    EKTP?: string | null
    type: string
    relation: string
    birthplace?: string | null
    birthdate?: Date | string | null
    address?: string | null
    subdistrict?: string | null
    district?: string | null
    city?: string | null
    phone?: string | null
    email: string
  }

  export type family_refUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    EKTP?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    relation?: StringFieldUpdateOperationsInput | string
    birthplace?: NullableStringFieldUpdateOperationsInput | string | null
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    subdistrict?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    users_ref?: users_refUpdateOneWithoutFamily_refNestedInput
  }

  export type family_refUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    users_refKtp?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    EKTP?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    relation?: StringFieldUpdateOperationsInput | string
    birthplace?: NullableStringFieldUpdateOperationsInput | string | null
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    subdistrict?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
  }

  export type family_refCreateManyInput = {
    id?: number
    users_refKtp: string
    name: string
    EKTP?: string | null
    type: string
    relation: string
    birthplace?: string | null
    birthdate?: Date | string | null
    address?: string | null
    subdistrict?: string | null
    district?: string | null
    city?: string | null
    phone?: string | null
    email: string
  }

  export type family_refUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    EKTP?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    relation?: StringFieldUpdateOperationsInput | string
    birthplace?: NullableStringFieldUpdateOperationsInput | string | null
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    subdistrict?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
  }

  export type family_refUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    users_refKtp?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    EKTP?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    relation?: StringFieldUpdateOperationsInput | string
    birthplace?: NullableStringFieldUpdateOperationsInput | string | null
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    subdistrict?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
  }

  export type participantsCreateInput = {
    fname: string
    lname: string
    bibname: string
    email: string
    identityId: string
    birthplace: string
    birthdate: Date | string
    phone: string
    address: string
    zipcode: string
    country: string
    city: string
    bloodType: string
    size?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: transactionsCreateNestedOneWithoutParticipantsInput
    master_category?: master_categoryCreateNestedOneWithoutParticipantsInput
  }

  export type participantsUncheckedCreateInput = {
    id?: number
    fname: string
    lname: string
    bibname: string
    email: string
    identityId: string
    birthplace: string
    birthdate: Date | string
    phone: string
    address: string
    zipcode: string
    country: string
    city: string
    bloodType: string
    size?: string | null
    master_categoryId?: number | null
    transactionsId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type participantsUpdateInput = {
    fname?: StringFieldUpdateOperationsInput | string
    lname?: StringFieldUpdateOperationsInput | string
    bibname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    identityId?: StringFieldUpdateOperationsInput | string
    birthplace?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    zipcode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    bloodType?: StringFieldUpdateOperationsInput | string
    size?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: transactionsUpdateOneWithoutParticipantsNestedInput
    master_category?: master_categoryUpdateOneWithoutParticipantsNestedInput
  }

  export type participantsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fname?: StringFieldUpdateOperationsInput | string
    lname?: StringFieldUpdateOperationsInput | string
    bibname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    identityId?: StringFieldUpdateOperationsInput | string
    birthplace?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    zipcode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    bloodType?: StringFieldUpdateOperationsInput | string
    size?: NullableStringFieldUpdateOperationsInput | string | null
    master_categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    transactionsId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type participantsCreateManyInput = {
    id?: number
    fname: string
    lname: string
    bibname: string
    email: string
    identityId: string
    birthplace: string
    birthdate: Date | string
    phone: string
    address: string
    zipcode: string
    country: string
    city: string
    bloodType: string
    size?: string | null
    master_categoryId?: number | null
    transactionsId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type participantsUpdateManyMutationInput = {
    fname?: StringFieldUpdateOperationsInput | string
    lname?: StringFieldUpdateOperationsInput | string
    bibname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    identityId?: StringFieldUpdateOperationsInput | string
    birthplace?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    zipcode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    bloodType?: StringFieldUpdateOperationsInput | string
    size?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type participantsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fname?: StringFieldUpdateOperationsInput | string
    lname?: StringFieldUpdateOperationsInput | string
    bibname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    identityId?: StringFieldUpdateOperationsInput | string
    birthplace?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    zipcode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    bloodType?: StringFieldUpdateOperationsInput | string
    size?: NullableStringFieldUpdateOperationsInput | string | null
    master_categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    transactionsId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type transactionsCreateInput = {
    id: string
    pt: string
    divisi: string
    emergencyName: string
    emergencyPhone: string
    transferProof?: string | null
    total: number
    status?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: usersCreateNestedOneWithoutTransactionsInput
    participants?: participantsCreateNestedManyWithoutTransactionsInput
  }

  export type transactionsUncheckedCreateInput = {
    id: string
    pt: string
    divisi: string
    emergencyName: string
    emergencyPhone: string
    transferProof?: string | null
    total: number
    status?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: usersUncheckedCreateNestedOneWithoutTransactionsInput
    participants?: participantsUncheckedCreateNestedManyWithoutTransactionsInput
  }

  export type transactionsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pt?: StringFieldUpdateOperationsInput | string
    divisi?: StringFieldUpdateOperationsInput | string
    emergencyName?: StringFieldUpdateOperationsInput | string
    emergencyPhone?: StringFieldUpdateOperationsInput | string
    transferProof?: NullableStringFieldUpdateOperationsInput | string | null
    total?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateOneWithoutTransactionsNestedInput
    participants?: participantsUpdateManyWithoutTransactionsNestedInput
  }

  export type transactionsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pt?: StringFieldUpdateOperationsInput | string
    divisi?: StringFieldUpdateOperationsInput | string
    emergencyName?: StringFieldUpdateOperationsInput | string
    emergencyPhone?: StringFieldUpdateOperationsInput | string
    transferProof?: NullableStringFieldUpdateOperationsInput | string | null
    total?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUncheckedUpdateOneWithoutTransactionsNestedInput
    participants?: participantsUncheckedUpdateManyWithoutTransactionsNestedInput
  }

  export type transactionsCreateManyInput = {
    id: string
    pt: string
    divisi: string
    emergencyName: string
    emergencyPhone: string
    transferProof?: string | null
    total: number
    status?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type transactionsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    pt?: StringFieldUpdateOperationsInput | string
    divisi?: StringFieldUpdateOperationsInput | string
    emergencyName?: StringFieldUpdateOperationsInput | string
    emergencyPhone?: StringFieldUpdateOperationsInput | string
    transferProof?: NullableStringFieldUpdateOperationsInput | string | null
    total?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type transactionsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    pt?: StringFieldUpdateOperationsInput | string
    divisi?: StringFieldUpdateOperationsInput | string
    emergencyName?: StringFieldUpdateOperationsInput | string
    emergencyPhone?: StringFieldUpdateOperationsInput | string
    transferProof?: NullableStringFieldUpdateOperationsInput | string | null
    total?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type master_categoryCreateInput = {
    name: string
    type: string
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    participants?: participantsCreateNestedManyWithoutMaster_categoryInput
  }

  export type master_categoryUncheckedCreateInput = {
    id?: number
    name: string
    type: string
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    participants?: participantsUncheckedCreateNestedManyWithoutMaster_categoryInput
  }

  export type master_categoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: participantsUpdateManyWithoutMaster_categoryNestedInput
  }

  export type master_categoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: participantsUncheckedUpdateManyWithoutMaster_categoryNestedInput
  }

  export type master_categoryCreateManyInput = {
    id?: number
    name: string
    type: string
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type master_categoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type master_categoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type Users_refNullableScalarRelationFilter = {
    is?: users_refWhereInput | null
    isNot?: users_refWhereInput | null
  }

  export type TransactionsNullableScalarRelationFilter = {
    is?: transactionsWhereInput | null
    isNot?: transactionsWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type usersOrderByRelevanceInput = {
    fields: usersOrderByRelevanceFieldEnum | usersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    users_refId?: SortOrder
    transactionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    users_refId?: SortOrder
    transactionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    users_refId?: SortOrder
    transactionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type Family_refListRelationFilter = {
    every?: family_refWhereInput
    some?: family_refWhereInput
    none?: family_refWhereInput
  }

  export type UsersNullableScalarRelationFilter = {
    is?: usersWhereInput | null
    isNot?: usersWhereInput | null
  }

  export type family_refOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type users_refOrderByRelevanceInput = {
    fields: users_refOrderByRelevanceFieldEnum | users_refOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type users_refCountOrderByAggregateInput = {
    EKTP?: SortOrder
    type?: SortOrder
    name?: SortOrder
    birthplace?: SortOrder
    birthdate?: SortOrder
    address?: SortOrder
    subdistrict?: SortOrder
    district?: SortOrder
    city?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    gender?: SortOrder
    weight?: SortOrder
    height?: SortOrder
    bloodType?: SortOrder
    religion?: SortOrder
    struct?: SortOrder
  }

  export type users_refAvgOrderByAggregateInput = {
    weight?: SortOrder
    height?: SortOrder
  }

  export type users_refMaxOrderByAggregateInput = {
    EKTP?: SortOrder
    type?: SortOrder
    name?: SortOrder
    birthplace?: SortOrder
    birthdate?: SortOrder
    address?: SortOrder
    subdistrict?: SortOrder
    district?: SortOrder
    city?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    gender?: SortOrder
    weight?: SortOrder
    height?: SortOrder
    bloodType?: SortOrder
    religion?: SortOrder
    struct?: SortOrder
  }

  export type users_refMinOrderByAggregateInput = {
    EKTP?: SortOrder
    type?: SortOrder
    name?: SortOrder
    birthplace?: SortOrder
    birthdate?: SortOrder
    address?: SortOrder
    subdistrict?: SortOrder
    district?: SortOrder
    city?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    gender?: SortOrder
    weight?: SortOrder
    height?: SortOrder
    bloodType?: SortOrder
    religion?: SortOrder
    struct?: SortOrder
  }

  export type users_refSumOrderByAggregateInput = {
    weight?: SortOrder
    height?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type family_refOrderByRelevanceInput = {
    fields: family_refOrderByRelevanceFieldEnum | family_refOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type family_refCountOrderByAggregateInput = {
    id?: SortOrder
    users_refKtp?: SortOrder
    name?: SortOrder
    EKTP?: SortOrder
    type?: SortOrder
    relation?: SortOrder
    birthplace?: SortOrder
    birthdate?: SortOrder
    address?: SortOrder
    subdistrict?: SortOrder
    district?: SortOrder
    city?: SortOrder
    phone?: SortOrder
    email?: SortOrder
  }

  export type family_refAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type family_refMaxOrderByAggregateInput = {
    id?: SortOrder
    users_refKtp?: SortOrder
    name?: SortOrder
    EKTP?: SortOrder
    type?: SortOrder
    relation?: SortOrder
    birthplace?: SortOrder
    birthdate?: SortOrder
    address?: SortOrder
    subdistrict?: SortOrder
    district?: SortOrder
    city?: SortOrder
    phone?: SortOrder
    email?: SortOrder
  }

  export type family_refMinOrderByAggregateInput = {
    id?: SortOrder
    users_refKtp?: SortOrder
    name?: SortOrder
    EKTP?: SortOrder
    type?: SortOrder
    relation?: SortOrder
    birthplace?: SortOrder
    birthdate?: SortOrder
    address?: SortOrder
    subdistrict?: SortOrder
    district?: SortOrder
    city?: SortOrder
    phone?: SortOrder
    email?: SortOrder
  }

  export type family_refSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type Master_categoryNullableScalarRelationFilter = {
    is?: master_categoryWhereInput | null
    isNot?: master_categoryWhereInput | null
  }

  export type participantsOrderByRelevanceInput = {
    fields: participantsOrderByRelevanceFieldEnum | participantsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type participantsCountOrderByAggregateInput = {
    id?: SortOrder
    fname?: SortOrder
    lname?: SortOrder
    bibname?: SortOrder
    email?: SortOrder
    identityId?: SortOrder
    birthplace?: SortOrder
    birthdate?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    zipcode?: SortOrder
    country?: SortOrder
    city?: SortOrder
    bloodType?: SortOrder
    size?: SortOrder
    master_categoryId?: SortOrder
    transactionsId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type participantsAvgOrderByAggregateInput = {
    id?: SortOrder
    master_categoryId?: SortOrder
  }

  export type participantsMaxOrderByAggregateInput = {
    id?: SortOrder
    fname?: SortOrder
    lname?: SortOrder
    bibname?: SortOrder
    email?: SortOrder
    identityId?: SortOrder
    birthplace?: SortOrder
    birthdate?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    zipcode?: SortOrder
    country?: SortOrder
    city?: SortOrder
    bloodType?: SortOrder
    size?: SortOrder
    master_categoryId?: SortOrder
    transactionsId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type participantsMinOrderByAggregateInput = {
    id?: SortOrder
    fname?: SortOrder
    lname?: SortOrder
    bibname?: SortOrder
    email?: SortOrder
    identityId?: SortOrder
    birthplace?: SortOrder
    birthdate?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    zipcode?: SortOrder
    country?: SortOrder
    city?: SortOrder
    bloodType?: SortOrder
    size?: SortOrder
    master_categoryId?: SortOrder
    transactionsId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type participantsSumOrderByAggregateInput = {
    id?: SortOrder
    master_categoryId?: SortOrder
  }

  export type ParticipantsListRelationFilter = {
    every?: participantsWhereInput
    some?: participantsWhereInput
    none?: participantsWhereInput
  }

  export type participantsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type transactionsOrderByRelevanceInput = {
    fields: transactionsOrderByRelevanceFieldEnum | transactionsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type transactionsCountOrderByAggregateInput = {
    id?: SortOrder
    pt?: SortOrder
    divisi?: SortOrder
    emergencyName?: SortOrder
    emergencyPhone?: SortOrder
    transferProof?: SortOrder
    total?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type transactionsAvgOrderByAggregateInput = {
    total?: SortOrder
    status?: SortOrder
  }

  export type transactionsMaxOrderByAggregateInput = {
    id?: SortOrder
    pt?: SortOrder
    divisi?: SortOrder
    emergencyName?: SortOrder
    emergencyPhone?: SortOrder
    transferProof?: SortOrder
    total?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type transactionsMinOrderByAggregateInput = {
    id?: SortOrder
    pt?: SortOrder
    divisi?: SortOrder
    emergencyName?: SortOrder
    emergencyPhone?: SortOrder
    transferProof?: SortOrder
    total?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type transactionsSumOrderByAggregateInput = {
    total?: SortOrder
    status?: SortOrder
  }

  export type master_categoryOrderByRelevanceInput = {
    fields: master_categoryOrderByRelevanceFieldEnum | master_categoryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type master_categoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type master_categoryAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
  }

  export type master_categoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type master_categoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type master_categorySumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
  }

  export type users_refCreateNestedOneWithoutUsersInput = {
    create?: XOR<users_refCreateWithoutUsersInput, users_refUncheckedCreateWithoutUsersInput>
    connectOrCreate?: users_refCreateOrConnectWithoutUsersInput
    connect?: users_refWhereUniqueInput
  }

  export type transactionsCreateNestedOneWithoutUsersInput = {
    create?: XOR<transactionsCreateWithoutUsersInput, transactionsUncheckedCreateWithoutUsersInput>
    connectOrCreate?: transactionsCreateOrConnectWithoutUsersInput
    connect?: transactionsWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type users_refUpdateOneWithoutUsersNestedInput = {
    create?: XOR<users_refCreateWithoutUsersInput, users_refUncheckedCreateWithoutUsersInput>
    connectOrCreate?: users_refCreateOrConnectWithoutUsersInput
    upsert?: users_refUpsertWithoutUsersInput
    disconnect?: users_refWhereInput | boolean
    delete?: users_refWhereInput | boolean
    connect?: users_refWhereUniqueInput
    update?: XOR<XOR<users_refUpdateToOneWithWhereWithoutUsersInput, users_refUpdateWithoutUsersInput>, users_refUncheckedUpdateWithoutUsersInput>
  }

  export type transactionsUpdateOneWithoutUsersNestedInput = {
    create?: XOR<transactionsCreateWithoutUsersInput, transactionsUncheckedCreateWithoutUsersInput>
    connectOrCreate?: transactionsCreateOrConnectWithoutUsersInput
    upsert?: transactionsUpsertWithoutUsersInput
    disconnect?: transactionsWhereInput | boolean
    delete?: transactionsWhereInput | boolean
    connect?: transactionsWhereUniqueInput
    update?: XOR<XOR<transactionsUpdateToOneWithWhereWithoutUsersInput, transactionsUpdateWithoutUsersInput>, transactionsUncheckedUpdateWithoutUsersInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type family_refCreateNestedManyWithoutUsers_refInput = {
    create?: XOR<family_refCreateWithoutUsers_refInput, family_refUncheckedCreateWithoutUsers_refInput> | family_refCreateWithoutUsers_refInput[] | family_refUncheckedCreateWithoutUsers_refInput[]
    connectOrCreate?: family_refCreateOrConnectWithoutUsers_refInput | family_refCreateOrConnectWithoutUsers_refInput[]
    createMany?: family_refCreateManyUsers_refInputEnvelope
    connect?: family_refWhereUniqueInput | family_refWhereUniqueInput[]
  }

  export type usersCreateNestedOneWithoutUsers_refInput = {
    create?: XOR<usersCreateWithoutUsers_refInput, usersUncheckedCreateWithoutUsers_refInput>
    connectOrCreate?: usersCreateOrConnectWithoutUsers_refInput
    connect?: usersWhereUniqueInput
  }

  export type family_refUncheckedCreateNestedManyWithoutUsers_refInput = {
    create?: XOR<family_refCreateWithoutUsers_refInput, family_refUncheckedCreateWithoutUsers_refInput> | family_refCreateWithoutUsers_refInput[] | family_refUncheckedCreateWithoutUsers_refInput[]
    connectOrCreate?: family_refCreateOrConnectWithoutUsers_refInput | family_refCreateOrConnectWithoutUsers_refInput[]
    createMany?: family_refCreateManyUsers_refInputEnvelope
    connect?: family_refWhereUniqueInput | family_refWhereUniqueInput[]
  }

  export type usersUncheckedCreateNestedOneWithoutUsers_refInput = {
    create?: XOR<usersCreateWithoutUsers_refInput, usersUncheckedCreateWithoutUsers_refInput>
    connectOrCreate?: usersCreateOrConnectWithoutUsers_refInput
    connect?: usersWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type family_refUpdateManyWithoutUsers_refNestedInput = {
    create?: XOR<family_refCreateWithoutUsers_refInput, family_refUncheckedCreateWithoutUsers_refInput> | family_refCreateWithoutUsers_refInput[] | family_refUncheckedCreateWithoutUsers_refInput[]
    connectOrCreate?: family_refCreateOrConnectWithoutUsers_refInput | family_refCreateOrConnectWithoutUsers_refInput[]
    upsert?: family_refUpsertWithWhereUniqueWithoutUsers_refInput | family_refUpsertWithWhereUniqueWithoutUsers_refInput[]
    createMany?: family_refCreateManyUsers_refInputEnvelope
    set?: family_refWhereUniqueInput | family_refWhereUniqueInput[]
    disconnect?: family_refWhereUniqueInput | family_refWhereUniqueInput[]
    delete?: family_refWhereUniqueInput | family_refWhereUniqueInput[]
    connect?: family_refWhereUniqueInput | family_refWhereUniqueInput[]
    update?: family_refUpdateWithWhereUniqueWithoutUsers_refInput | family_refUpdateWithWhereUniqueWithoutUsers_refInput[]
    updateMany?: family_refUpdateManyWithWhereWithoutUsers_refInput | family_refUpdateManyWithWhereWithoutUsers_refInput[]
    deleteMany?: family_refScalarWhereInput | family_refScalarWhereInput[]
  }

  export type usersUpdateOneWithoutUsers_refNestedInput = {
    create?: XOR<usersCreateWithoutUsers_refInput, usersUncheckedCreateWithoutUsers_refInput>
    connectOrCreate?: usersCreateOrConnectWithoutUsers_refInput
    upsert?: usersUpsertWithoutUsers_refInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutUsers_refInput, usersUpdateWithoutUsers_refInput>, usersUncheckedUpdateWithoutUsers_refInput>
  }

  export type family_refUncheckedUpdateManyWithoutUsers_refNestedInput = {
    create?: XOR<family_refCreateWithoutUsers_refInput, family_refUncheckedCreateWithoutUsers_refInput> | family_refCreateWithoutUsers_refInput[] | family_refUncheckedCreateWithoutUsers_refInput[]
    connectOrCreate?: family_refCreateOrConnectWithoutUsers_refInput | family_refCreateOrConnectWithoutUsers_refInput[]
    upsert?: family_refUpsertWithWhereUniqueWithoutUsers_refInput | family_refUpsertWithWhereUniqueWithoutUsers_refInput[]
    createMany?: family_refCreateManyUsers_refInputEnvelope
    set?: family_refWhereUniqueInput | family_refWhereUniqueInput[]
    disconnect?: family_refWhereUniqueInput | family_refWhereUniqueInput[]
    delete?: family_refWhereUniqueInput | family_refWhereUniqueInput[]
    connect?: family_refWhereUniqueInput | family_refWhereUniqueInput[]
    update?: family_refUpdateWithWhereUniqueWithoutUsers_refInput | family_refUpdateWithWhereUniqueWithoutUsers_refInput[]
    updateMany?: family_refUpdateManyWithWhereWithoutUsers_refInput | family_refUpdateManyWithWhereWithoutUsers_refInput[]
    deleteMany?: family_refScalarWhereInput | family_refScalarWhereInput[]
  }

  export type usersUncheckedUpdateOneWithoutUsers_refNestedInput = {
    create?: XOR<usersCreateWithoutUsers_refInput, usersUncheckedCreateWithoutUsers_refInput>
    connectOrCreate?: usersCreateOrConnectWithoutUsers_refInput
    upsert?: usersUpsertWithoutUsers_refInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutUsers_refInput, usersUpdateWithoutUsers_refInput>, usersUncheckedUpdateWithoutUsers_refInput>
  }

  export type users_refCreateNestedOneWithoutFamily_refInput = {
    create?: XOR<users_refCreateWithoutFamily_refInput, users_refUncheckedCreateWithoutFamily_refInput>
    connectOrCreate?: users_refCreateOrConnectWithoutFamily_refInput
    connect?: users_refWhereUniqueInput
  }

  export type users_refUpdateOneWithoutFamily_refNestedInput = {
    create?: XOR<users_refCreateWithoutFamily_refInput, users_refUncheckedCreateWithoutFamily_refInput>
    connectOrCreate?: users_refCreateOrConnectWithoutFamily_refInput
    upsert?: users_refUpsertWithoutFamily_refInput
    disconnect?: users_refWhereInput | boolean
    delete?: users_refWhereInput | boolean
    connect?: users_refWhereUniqueInput
    update?: XOR<XOR<users_refUpdateToOneWithWhereWithoutFamily_refInput, users_refUpdateWithoutFamily_refInput>, users_refUncheckedUpdateWithoutFamily_refInput>
  }

  export type transactionsCreateNestedOneWithoutParticipantsInput = {
    create?: XOR<transactionsCreateWithoutParticipantsInput, transactionsUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: transactionsCreateOrConnectWithoutParticipantsInput
    connect?: transactionsWhereUniqueInput
  }

  export type master_categoryCreateNestedOneWithoutParticipantsInput = {
    create?: XOR<master_categoryCreateWithoutParticipantsInput, master_categoryUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: master_categoryCreateOrConnectWithoutParticipantsInput
    connect?: master_categoryWhereUniqueInput
  }

  export type transactionsUpdateOneWithoutParticipantsNestedInput = {
    create?: XOR<transactionsCreateWithoutParticipantsInput, transactionsUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: transactionsCreateOrConnectWithoutParticipantsInput
    upsert?: transactionsUpsertWithoutParticipantsInput
    disconnect?: transactionsWhereInput | boolean
    delete?: transactionsWhereInput | boolean
    connect?: transactionsWhereUniqueInput
    update?: XOR<XOR<transactionsUpdateToOneWithWhereWithoutParticipantsInput, transactionsUpdateWithoutParticipantsInput>, transactionsUncheckedUpdateWithoutParticipantsInput>
  }

  export type master_categoryUpdateOneWithoutParticipantsNestedInput = {
    create?: XOR<master_categoryCreateWithoutParticipantsInput, master_categoryUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: master_categoryCreateOrConnectWithoutParticipantsInput
    upsert?: master_categoryUpsertWithoutParticipantsInput
    disconnect?: master_categoryWhereInput | boolean
    delete?: master_categoryWhereInput | boolean
    connect?: master_categoryWhereUniqueInput
    update?: XOR<XOR<master_categoryUpdateToOneWithWhereWithoutParticipantsInput, master_categoryUpdateWithoutParticipantsInput>, master_categoryUncheckedUpdateWithoutParticipantsInput>
  }

  export type usersCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<usersCreateWithoutTransactionsInput, usersUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: usersCreateOrConnectWithoutTransactionsInput
    connect?: usersWhereUniqueInput
  }

  export type participantsCreateNestedManyWithoutTransactionsInput = {
    create?: XOR<participantsCreateWithoutTransactionsInput, participantsUncheckedCreateWithoutTransactionsInput> | participantsCreateWithoutTransactionsInput[] | participantsUncheckedCreateWithoutTransactionsInput[]
    connectOrCreate?: participantsCreateOrConnectWithoutTransactionsInput | participantsCreateOrConnectWithoutTransactionsInput[]
    createMany?: participantsCreateManyTransactionsInputEnvelope
    connect?: participantsWhereUniqueInput | participantsWhereUniqueInput[]
  }

  export type usersUncheckedCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<usersCreateWithoutTransactionsInput, usersUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: usersCreateOrConnectWithoutTransactionsInput
    connect?: usersWhereUniqueInput
  }

  export type participantsUncheckedCreateNestedManyWithoutTransactionsInput = {
    create?: XOR<participantsCreateWithoutTransactionsInput, participantsUncheckedCreateWithoutTransactionsInput> | participantsCreateWithoutTransactionsInput[] | participantsUncheckedCreateWithoutTransactionsInput[]
    connectOrCreate?: participantsCreateOrConnectWithoutTransactionsInput | participantsCreateOrConnectWithoutTransactionsInput[]
    createMany?: participantsCreateManyTransactionsInputEnvelope
    connect?: participantsWhereUniqueInput | participantsWhereUniqueInput[]
  }

  export type usersUpdateOneWithoutTransactionsNestedInput = {
    create?: XOR<usersCreateWithoutTransactionsInput, usersUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: usersCreateOrConnectWithoutTransactionsInput
    upsert?: usersUpsertWithoutTransactionsInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutTransactionsInput, usersUpdateWithoutTransactionsInput>, usersUncheckedUpdateWithoutTransactionsInput>
  }

  export type participantsUpdateManyWithoutTransactionsNestedInput = {
    create?: XOR<participantsCreateWithoutTransactionsInput, participantsUncheckedCreateWithoutTransactionsInput> | participantsCreateWithoutTransactionsInput[] | participantsUncheckedCreateWithoutTransactionsInput[]
    connectOrCreate?: participantsCreateOrConnectWithoutTransactionsInput | participantsCreateOrConnectWithoutTransactionsInput[]
    upsert?: participantsUpsertWithWhereUniqueWithoutTransactionsInput | participantsUpsertWithWhereUniqueWithoutTransactionsInput[]
    createMany?: participantsCreateManyTransactionsInputEnvelope
    set?: participantsWhereUniqueInput | participantsWhereUniqueInput[]
    disconnect?: participantsWhereUniqueInput | participantsWhereUniqueInput[]
    delete?: participantsWhereUniqueInput | participantsWhereUniqueInput[]
    connect?: participantsWhereUniqueInput | participantsWhereUniqueInput[]
    update?: participantsUpdateWithWhereUniqueWithoutTransactionsInput | participantsUpdateWithWhereUniqueWithoutTransactionsInput[]
    updateMany?: participantsUpdateManyWithWhereWithoutTransactionsInput | participantsUpdateManyWithWhereWithoutTransactionsInput[]
    deleteMany?: participantsScalarWhereInput | participantsScalarWhereInput[]
  }

  export type usersUncheckedUpdateOneWithoutTransactionsNestedInput = {
    create?: XOR<usersCreateWithoutTransactionsInput, usersUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: usersCreateOrConnectWithoutTransactionsInput
    upsert?: usersUpsertWithoutTransactionsInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutTransactionsInput, usersUpdateWithoutTransactionsInput>, usersUncheckedUpdateWithoutTransactionsInput>
  }

  export type participantsUncheckedUpdateManyWithoutTransactionsNestedInput = {
    create?: XOR<participantsCreateWithoutTransactionsInput, participantsUncheckedCreateWithoutTransactionsInput> | participantsCreateWithoutTransactionsInput[] | participantsUncheckedCreateWithoutTransactionsInput[]
    connectOrCreate?: participantsCreateOrConnectWithoutTransactionsInput | participantsCreateOrConnectWithoutTransactionsInput[]
    upsert?: participantsUpsertWithWhereUniqueWithoutTransactionsInput | participantsUpsertWithWhereUniqueWithoutTransactionsInput[]
    createMany?: participantsCreateManyTransactionsInputEnvelope
    set?: participantsWhereUniqueInput | participantsWhereUniqueInput[]
    disconnect?: participantsWhereUniqueInput | participantsWhereUniqueInput[]
    delete?: participantsWhereUniqueInput | participantsWhereUniqueInput[]
    connect?: participantsWhereUniqueInput | participantsWhereUniqueInput[]
    update?: participantsUpdateWithWhereUniqueWithoutTransactionsInput | participantsUpdateWithWhereUniqueWithoutTransactionsInput[]
    updateMany?: participantsUpdateManyWithWhereWithoutTransactionsInput | participantsUpdateManyWithWhereWithoutTransactionsInput[]
    deleteMany?: participantsScalarWhereInput | participantsScalarWhereInput[]
  }

  export type participantsCreateNestedManyWithoutMaster_categoryInput = {
    create?: XOR<participantsCreateWithoutMaster_categoryInput, participantsUncheckedCreateWithoutMaster_categoryInput> | participantsCreateWithoutMaster_categoryInput[] | participantsUncheckedCreateWithoutMaster_categoryInput[]
    connectOrCreate?: participantsCreateOrConnectWithoutMaster_categoryInput | participantsCreateOrConnectWithoutMaster_categoryInput[]
    createMany?: participantsCreateManyMaster_categoryInputEnvelope
    connect?: participantsWhereUniqueInput | participantsWhereUniqueInput[]
  }

  export type participantsUncheckedCreateNestedManyWithoutMaster_categoryInput = {
    create?: XOR<participantsCreateWithoutMaster_categoryInput, participantsUncheckedCreateWithoutMaster_categoryInput> | participantsCreateWithoutMaster_categoryInput[] | participantsUncheckedCreateWithoutMaster_categoryInput[]
    connectOrCreate?: participantsCreateOrConnectWithoutMaster_categoryInput | participantsCreateOrConnectWithoutMaster_categoryInput[]
    createMany?: participantsCreateManyMaster_categoryInputEnvelope
    connect?: participantsWhereUniqueInput | participantsWhereUniqueInput[]
  }

  export type participantsUpdateManyWithoutMaster_categoryNestedInput = {
    create?: XOR<participantsCreateWithoutMaster_categoryInput, participantsUncheckedCreateWithoutMaster_categoryInput> | participantsCreateWithoutMaster_categoryInput[] | participantsUncheckedCreateWithoutMaster_categoryInput[]
    connectOrCreate?: participantsCreateOrConnectWithoutMaster_categoryInput | participantsCreateOrConnectWithoutMaster_categoryInput[]
    upsert?: participantsUpsertWithWhereUniqueWithoutMaster_categoryInput | participantsUpsertWithWhereUniqueWithoutMaster_categoryInput[]
    createMany?: participantsCreateManyMaster_categoryInputEnvelope
    set?: participantsWhereUniqueInput | participantsWhereUniqueInput[]
    disconnect?: participantsWhereUniqueInput | participantsWhereUniqueInput[]
    delete?: participantsWhereUniqueInput | participantsWhereUniqueInput[]
    connect?: participantsWhereUniqueInput | participantsWhereUniqueInput[]
    update?: participantsUpdateWithWhereUniqueWithoutMaster_categoryInput | participantsUpdateWithWhereUniqueWithoutMaster_categoryInput[]
    updateMany?: participantsUpdateManyWithWhereWithoutMaster_categoryInput | participantsUpdateManyWithWhereWithoutMaster_categoryInput[]
    deleteMany?: participantsScalarWhereInput | participantsScalarWhereInput[]
  }

  export type participantsUncheckedUpdateManyWithoutMaster_categoryNestedInput = {
    create?: XOR<participantsCreateWithoutMaster_categoryInput, participantsUncheckedCreateWithoutMaster_categoryInput> | participantsCreateWithoutMaster_categoryInput[] | participantsUncheckedCreateWithoutMaster_categoryInput[]
    connectOrCreate?: participantsCreateOrConnectWithoutMaster_categoryInput | participantsCreateOrConnectWithoutMaster_categoryInput[]
    upsert?: participantsUpsertWithWhereUniqueWithoutMaster_categoryInput | participantsUpsertWithWhereUniqueWithoutMaster_categoryInput[]
    createMany?: participantsCreateManyMaster_categoryInputEnvelope
    set?: participantsWhereUniqueInput | participantsWhereUniqueInput[]
    disconnect?: participantsWhereUniqueInput | participantsWhereUniqueInput[]
    delete?: participantsWhereUniqueInput | participantsWhereUniqueInput[]
    connect?: participantsWhereUniqueInput | participantsWhereUniqueInput[]
    update?: participantsUpdateWithWhereUniqueWithoutMaster_categoryInput | participantsUpdateWithWhereUniqueWithoutMaster_categoryInput[]
    updateMany?: participantsUpdateManyWithWhereWithoutMaster_categoryInput | participantsUpdateManyWithWhereWithoutMaster_categoryInput[]
    deleteMany?: participantsScalarWhereInput | participantsScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type users_refCreateWithoutUsersInput = {
    EKTP: string
    type: string
    name: string
    birthplace?: string | null
    birthdate?: Date | string | null
    address?: string | null
    subdistrict?: string | null
    district?: string | null
    city?: string | null
    phone?: string | null
    email?: string | null
    gender?: string | null
    weight?: number | null
    height?: number | null
    bloodType?: string | null
    religion?: string | null
    struct?: string | null
    family_ref?: family_refCreateNestedManyWithoutUsers_refInput
  }

  export type users_refUncheckedCreateWithoutUsersInput = {
    EKTP: string
    type: string
    name: string
    birthplace?: string | null
    birthdate?: Date | string | null
    address?: string | null
    subdistrict?: string | null
    district?: string | null
    city?: string | null
    phone?: string | null
    email?: string | null
    gender?: string | null
    weight?: number | null
    height?: number | null
    bloodType?: string | null
    religion?: string | null
    struct?: string | null
    family_ref?: family_refUncheckedCreateNestedManyWithoutUsers_refInput
  }

  export type users_refCreateOrConnectWithoutUsersInput = {
    where: users_refWhereUniqueInput
    create: XOR<users_refCreateWithoutUsersInput, users_refUncheckedCreateWithoutUsersInput>
  }

  export type transactionsCreateWithoutUsersInput = {
    id: string
    pt: string
    divisi: string
    emergencyName: string
    emergencyPhone: string
    transferProof?: string | null
    total: number
    status?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    participants?: participantsCreateNestedManyWithoutTransactionsInput
  }

  export type transactionsUncheckedCreateWithoutUsersInput = {
    id: string
    pt: string
    divisi: string
    emergencyName: string
    emergencyPhone: string
    transferProof?: string | null
    total: number
    status?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    participants?: participantsUncheckedCreateNestedManyWithoutTransactionsInput
  }

  export type transactionsCreateOrConnectWithoutUsersInput = {
    where: transactionsWhereUniqueInput
    create: XOR<transactionsCreateWithoutUsersInput, transactionsUncheckedCreateWithoutUsersInput>
  }

  export type users_refUpsertWithoutUsersInput = {
    update: XOR<users_refUpdateWithoutUsersInput, users_refUncheckedUpdateWithoutUsersInput>
    create: XOR<users_refCreateWithoutUsersInput, users_refUncheckedCreateWithoutUsersInput>
    where?: users_refWhereInput
  }

  export type users_refUpdateToOneWithWhereWithoutUsersInput = {
    where?: users_refWhereInput
    data: XOR<users_refUpdateWithoutUsersInput, users_refUncheckedUpdateWithoutUsersInput>
  }

  export type users_refUpdateWithoutUsersInput = {
    EKTP?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birthplace?: NullableStringFieldUpdateOperationsInput | string | null
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    subdistrict?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    bloodType?: NullableStringFieldUpdateOperationsInput | string | null
    religion?: NullableStringFieldUpdateOperationsInput | string | null
    struct?: NullableStringFieldUpdateOperationsInput | string | null
    family_ref?: family_refUpdateManyWithoutUsers_refNestedInput
  }

  export type users_refUncheckedUpdateWithoutUsersInput = {
    EKTP?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birthplace?: NullableStringFieldUpdateOperationsInput | string | null
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    subdistrict?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    bloodType?: NullableStringFieldUpdateOperationsInput | string | null
    religion?: NullableStringFieldUpdateOperationsInput | string | null
    struct?: NullableStringFieldUpdateOperationsInput | string | null
    family_ref?: family_refUncheckedUpdateManyWithoutUsers_refNestedInput
  }

  export type transactionsUpsertWithoutUsersInput = {
    update: XOR<transactionsUpdateWithoutUsersInput, transactionsUncheckedUpdateWithoutUsersInput>
    create: XOR<transactionsCreateWithoutUsersInput, transactionsUncheckedCreateWithoutUsersInput>
    where?: transactionsWhereInput
  }

  export type transactionsUpdateToOneWithWhereWithoutUsersInput = {
    where?: transactionsWhereInput
    data: XOR<transactionsUpdateWithoutUsersInput, transactionsUncheckedUpdateWithoutUsersInput>
  }

  export type transactionsUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    pt?: StringFieldUpdateOperationsInput | string
    divisi?: StringFieldUpdateOperationsInput | string
    emergencyName?: StringFieldUpdateOperationsInput | string
    emergencyPhone?: StringFieldUpdateOperationsInput | string
    transferProof?: NullableStringFieldUpdateOperationsInput | string | null
    total?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: participantsUpdateManyWithoutTransactionsNestedInput
  }

  export type transactionsUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    pt?: StringFieldUpdateOperationsInput | string
    divisi?: StringFieldUpdateOperationsInput | string
    emergencyName?: StringFieldUpdateOperationsInput | string
    emergencyPhone?: StringFieldUpdateOperationsInput | string
    transferProof?: NullableStringFieldUpdateOperationsInput | string | null
    total?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: participantsUncheckedUpdateManyWithoutTransactionsNestedInput
  }

  export type family_refCreateWithoutUsers_refInput = {
    name: string
    EKTP?: string | null
    type: string
    relation: string
    birthplace?: string | null
    birthdate?: Date | string | null
    address?: string | null
    subdistrict?: string | null
    district?: string | null
    city?: string | null
    phone?: string | null
    email: string
  }

  export type family_refUncheckedCreateWithoutUsers_refInput = {
    id?: number
    name: string
    EKTP?: string | null
    type: string
    relation: string
    birthplace?: string | null
    birthdate?: Date | string | null
    address?: string | null
    subdistrict?: string | null
    district?: string | null
    city?: string | null
    phone?: string | null
    email: string
  }

  export type family_refCreateOrConnectWithoutUsers_refInput = {
    where: family_refWhereUniqueInput
    create: XOR<family_refCreateWithoutUsers_refInput, family_refUncheckedCreateWithoutUsers_refInput>
  }

  export type family_refCreateManyUsers_refInputEnvelope = {
    data: family_refCreateManyUsers_refInput | family_refCreateManyUsers_refInput[]
    skipDuplicates?: boolean
  }

  export type usersCreateWithoutUsers_refInput = {
    name: string
    username: string
    password?: string
    role?: string
    status?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: transactionsCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutUsers_refInput = {
    id?: number
    name: string
    username: string
    password?: string
    role?: string
    status?: number
    transactionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type usersCreateOrConnectWithoutUsers_refInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutUsers_refInput, usersUncheckedCreateWithoutUsers_refInput>
  }

  export type family_refUpsertWithWhereUniqueWithoutUsers_refInput = {
    where: family_refWhereUniqueInput
    update: XOR<family_refUpdateWithoutUsers_refInput, family_refUncheckedUpdateWithoutUsers_refInput>
    create: XOR<family_refCreateWithoutUsers_refInput, family_refUncheckedCreateWithoutUsers_refInput>
  }

  export type family_refUpdateWithWhereUniqueWithoutUsers_refInput = {
    where: family_refWhereUniqueInput
    data: XOR<family_refUpdateWithoutUsers_refInput, family_refUncheckedUpdateWithoutUsers_refInput>
  }

  export type family_refUpdateManyWithWhereWithoutUsers_refInput = {
    where: family_refScalarWhereInput
    data: XOR<family_refUpdateManyMutationInput, family_refUncheckedUpdateManyWithoutUsers_refInput>
  }

  export type family_refScalarWhereInput = {
    AND?: family_refScalarWhereInput | family_refScalarWhereInput[]
    OR?: family_refScalarWhereInput[]
    NOT?: family_refScalarWhereInput | family_refScalarWhereInput[]
    id?: IntFilter<"family_ref"> | number
    users_refKtp?: StringFilter<"family_ref"> | string
    name?: StringFilter<"family_ref"> | string
    EKTP?: StringNullableFilter<"family_ref"> | string | null
    type?: StringFilter<"family_ref"> | string
    relation?: StringFilter<"family_ref"> | string
    birthplace?: StringNullableFilter<"family_ref"> | string | null
    birthdate?: DateTimeNullableFilter<"family_ref"> | Date | string | null
    address?: StringNullableFilter<"family_ref"> | string | null
    subdistrict?: StringNullableFilter<"family_ref"> | string | null
    district?: StringNullableFilter<"family_ref"> | string | null
    city?: StringNullableFilter<"family_ref"> | string | null
    phone?: StringNullableFilter<"family_ref"> | string | null
    email?: StringFilter<"family_ref"> | string
  }

  export type usersUpsertWithoutUsers_refInput = {
    update: XOR<usersUpdateWithoutUsers_refInput, usersUncheckedUpdateWithoutUsers_refInput>
    create: XOR<usersCreateWithoutUsers_refInput, usersUncheckedCreateWithoutUsers_refInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutUsers_refInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutUsers_refInput, usersUncheckedUpdateWithoutUsers_refInput>
  }

  export type usersUpdateWithoutUsers_refInput = {
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: transactionsUpdateOneWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutUsers_refInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type users_refCreateWithoutFamily_refInput = {
    EKTP: string
    type: string
    name: string
    birthplace?: string | null
    birthdate?: Date | string | null
    address?: string | null
    subdistrict?: string | null
    district?: string | null
    city?: string | null
    phone?: string | null
    email?: string | null
    gender?: string | null
    weight?: number | null
    height?: number | null
    bloodType?: string | null
    religion?: string | null
    struct?: string | null
    users?: usersCreateNestedOneWithoutUsers_refInput
  }

  export type users_refUncheckedCreateWithoutFamily_refInput = {
    EKTP: string
    type: string
    name: string
    birthplace?: string | null
    birthdate?: Date | string | null
    address?: string | null
    subdistrict?: string | null
    district?: string | null
    city?: string | null
    phone?: string | null
    email?: string | null
    gender?: string | null
    weight?: number | null
    height?: number | null
    bloodType?: string | null
    religion?: string | null
    struct?: string | null
    users?: usersUncheckedCreateNestedOneWithoutUsers_refInput
  }

  export type users_refCreateOrConnectWithoutFamily_refInput = {
    where: users_refWhereUniqueInput
    create: XOR<users_refCreateWithoutFamily_refInput, users_refUncheckedCreateWithoutFamily_refInput>
  }

  export type users_refUpsertWithoutFamily_refInput = {
    update: XOR<users_refUpdateWithoutFamily_refInput, users_refUncheckedUpdateWithoutFamily_refInput>
    create: XOR<users_refCreateWithoutFamily_refInput, users_refUncheckedCreateWithoutFamily_refInput>
    where?: users_refWhereInput
  }

  export type users_refUpdateToOneWithWhereWithoutFamily_refInput = {
    where?: users_refWhereInput
    data: XOR<users_refUpdateWithoutFamily_refInput, users_refUncheckedUpdateWithoutFamily_refInput>
  }

  export type users_refUpdateWithoutFamily_refInput = {
    EKTP?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birthplace?: NullableStringFieldUpdateOperationsInput | string | null
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    subdistrict?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    bloodType?: NullableStringFieldUpdateOperationsInput | string | null
    religion?: NullableStringFieldUpdateOperationsInput | string | null
    struct?: NullableStringFieldUpdateOperationsInput | string | null
    users?: usersUpdateOneWithoutUsers_refNestedInput
  }

  export type users_refUncheckedUpdateWithoutFamily_refInput = {
    EKTP?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birthplace?: NullableStringFieldUpdateOperationsInput | string | null
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    subdistrict?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    bloodType?: NullableStringFieldUpdateOperationsInput | string | null
    religion?: NullableStringFieldUpdateOperationsInput | string | null
    struct?: NullableStringFieldUpdateOperationsInput | string | null
    users?: usersUncheckedUpdateOneWithoutUsers_refNestedInput
  }

  export type transactionsCreateWithoutParticipantsInput = {
    id: string
    pt: string
    divisi: string
    emergencyName: string
    emergencyPhone: string
    transferProof?: string | null
    total: number
    status?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: usersCreateNestedOneWithoutTransactionsInput
  }

  export type transactionsUncheckedCreateWithoutParticipantsInput = {
    id: string
    pt: string
    divisi: string
    emergencyName: string
    emergencyPhone: string
    transferProof?: string | null
    total: number
    status?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: usersUncheckedCreateNestedOneWithoutTransactionsInput
  }

  export type transactionsCreateOrConnectWithoutParticipantsInput = {
    where: transactionsWhereUniqueInput
    create: XOR<transactionsCreateWithoutParticipantsInput, transactionsUncheckedCreateWithoutParticipantsInput>
  }

  export type master_categoryCreateWithoutParticipantsInput = {
    name: string
    type: string
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type master_categoryUncheckedCreateWithoutParticipantsInput = {
    id?: number
    name: string
    type: string
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type master_categoryCreateOrConnectWithoutParticipantsInput = {
    where: master_categoryWhereUniqueInput
    create: XOR<master_categoryCreateWithoutParticipantsInput, master_categoryUncheckedCreateWithoutParticipantsInput>
  }

  export type transactionsUpsertWithoutParticipantsInput = {
    update: XOR<transactionsUpdateWithoutParticipantsInput, transactionsUncheckedUpdateWithoutParticipantsInput>
    create: XOR<transactionsCreateWithoutParticipantsInput, transactionsUncheckedCreateWithoutParticipantsInput>
    where?: transactionsWhereInput
  }

  export type transactionsUpdateToOneWithWhereWithoutParticipantsInput = {
    where?: transactionsWhereInput
    data: XOR<transactionsUpdateWithoutParticipantsInput, transactionsUncheckedUpdateWithoutParticipantsInput>
  }

  export type transactionsUpdateWithoutParticipantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    pt?: StringFieldUpdateOperationsInput | string
    divisi?: StringFieldUpdateOperationsInput | string
    emergencyName?: StringFieldUpdateOperationsInput | string
    emergencyPhone?: StringFieldUpdateOperationsInput | string
    transferProof?: NullableStringFieldUpdateOperationsInput | string | null
    total?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateOneWithoutTransactionsNestedInput
  }

  export type transactionsUncheckedUpdateWithoutParticipantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    pt?: StringFieldUpdateOperationsInput | string
    divisi?: StringFieldUpdateOperationsInput | string
    emergencyName?: StringFieldUpdateOperationsInput | string
    emergencyPhone?: StringFieldUpdateOperationsInput | string
    transferProof?: NullableStringFieldUpdateOperationsInput | string | null
    total?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUncheckedUpdateOneWithoutTransactionsNestedInput
  }

  export type master_categoryUpsertWithoutParticipantsInput = {
    update: XOR<master_categoryUpdateWithoutParticipantsInput, master_categoryUncheckedUpdateWithoutParticipantsInput>
    create: XOR<master_categoryCreateWithoutParticipantsInput, master_categoryUncheckedCreateWithoutParticipantsInput>
    where?: master_categoryWhereInput
  }

  export type master_categoryUpdateToOneWithWhereWithoutParticipantsInput = {
    where?: master_categoryWhereInput
    data: XOR<master_categoryUpdateWithoutParticipantsInput, master_categoryUncheckedUpdateWithoutParticipantsInput>
  }

  export type master_categoryUpdateWithoutParticipantsInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type master_categoryUncheckedUpdateWithoutParticipantsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersCreateWithoutTransactionsInput = {
    name: string
    username: string
    password?: string
    role?: string
    status?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    users_ref?: users_refCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutTransactionsInput = {
    id?: number
    name: string
    username: string
    password?: string
    role?: string
    status?: number
    users_refId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type usersCreateOrConnectWithoutTransactionsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutTransactionsInput, usersUncheckedCreateWithoutTransactionsInput>
  }

  export type participantsCreateWithoutTransactionsInput = {
    fname: string
    lname: string
    bibname: string
    email: string
    identityId: string
    birthplace: string
    birthdate: Date | string
    phone: string
    address: string
    zipcode: string
    country: string
    city: string
    bloodType: string
    size?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    master_category?: master_categoryCreateNestedOneWithoutParticipantsInput
  }

  export type participantsUncheckedCreateWithoutTransactionsInput = {
    id?: number
    fname: string
    lname: string
    bibname: string
    email: string
    identityId: string
    birthplace: string
    birthdate: Date | string
    phone: string
    address: string
    zipcode: string
    country: string
    city: string
    bloodType: string
    size?: string | null
    master_categoryId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type participantsCreateOrConnectWithoutTransactionsInput = {
    where: participantsWhereUniqueInput
    create: XOR<participantsCreateWithoutTransactionsInput, participantsUncheckedCreateWithoutTransactionsInput>
  }

  export type participantsCreateManyTransactionsInputEnvelope = {
    data: participantsCreateManyTransactionsInput | participantsCreateManyTransactionsInput[]
    skipDuplicates?: boolean
  }

  export type usersUpsertWithoutTransactionsInput = {
    update: XOR<usersUpdateWithoutTransactionsInput, usersUncheckedUpdateWithoutTransactionsInput>
    create: XOR<usersCreateWithoutTransactionsInput, usersUncheckedCreateWithoutTransactionsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutTransactionsInput, usersUncheckedUpdateWithoutTransactionsInput>
  }

  export type usersUpdateWithoutTransactionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users_ref?: users_refUpdateOneWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutTransactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    users_refId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type participantsUpsertWithWhereUniqueWithoutTransactionsInput = {
    where: participantsWhereUniqueInput
    update: XOR<participantsUpdateWithoutTransactionsInput, participantsUncheckedUpdateWithoutTransactionsInput>
    create: XOR<participantsCreateWithoutTransactionsInput, participantsUncheckedCreateWithoutTransactionsInput>
  }

  export type participantsUpdateWithWhereUniqueWithoutTransactionsInput = {
    where: participantsWhereUniqueInput
    data: XOR<participantsUpdateWithoutTransactionsInput, participantsUncheckedUpdateWithoutTransactionsInput>
  }

  export type participantsUpdateManyWithWhereWithoutTransactionsInput = {
    where: participantsScalarWhereInput
    data: XOR<participantsUpdateManyMutationInput, participantsUncheckedUpdateManyWithoutTransactionsInput>
  }

  export type participantsScalarWhereInput = {
    AND?: participantsScalarWhereInput | participantsScalarWhereInput[]
    OR?: participantsScalarWhereInput[]
    NOT?: participantsScalarWhereInput | participantsScalarWhereInput[]
    id?: IntFilter<"participants"> | number
    fname?: StringFilter<"participants"> | string
    lname?: StringFilter<"participants"> | string
    bibname?: StringFilter<"participants"> | string
    email?: StringFilter<"participants"> | string
    identityId?: StringFilter<"participants"> | string
    birthplace?: StringFilter<"participants"> | string
    birthdate?: DateTimeFilter<"participants"> | Date | string
    phone?: StringFilter<"participants"> | string
    address?: StringFilter<"participants"> | string
    zipcode?: StringFilter<"participants"> | string
    country?: StringFilter<"participants"> | string
    city?: StringFilter<"participants"> | string
    bloodType?: StringFilter<"participants"> | string
    size?: StringNullableFilter<"participants"> | string | null
    master_categoryId?: IntNullableFilter<"participants"> | number | null
    transactionsId?: StringNullableFilter<"participants"> | string | null
    createdAt?: DateTimeFilter<"participants"> | Date | string
    updatedAt?: DateTimeFilter<"participants"> | Date | string
  }

  export type participantsCreateWithoutMaster_categoryInput = {
    fname: string
    lname: string
    bibname: string
    email: string
    identityId: string
    birthplace: string
    birthdate: Date | string
    phone: string
    address: string
    zipcode: string
    country: string
    city: string
    bloodType: string
    size?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: transactionsCreateNestedOneWithoutParticipantsInput
  }

  export type participantsUncheckedCreateWithoutMaster_categoryInput = {
    id?: number
    fname: string
    lname: string
    bibname: string
    email: string
    identityId: string
    birthplace: string
    birthdate: Date | string
    phone: string
    address: string
    zipcode: string
    country: string
    city: string
    bloodType: string
    size?: string | null
    transactionsId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type participantsCreateOrConnectWithoutMaster_categoryInput = {
    where: participantsWhereUniqueInput
    create: XOR<participantsCreateWithoutMaster_categoryInput, participantsUncheckedCreateWithoutMaster_categoryInput>
  }

  export type participantsCreateManyMaster_categoryInputEnvelope = {
    data: participantsCreateManyMaster_categoryInput | participantsCreateManyMaster_categoryInput[]
    skipDuplicates?: boolean
  }

  export type participantsUpsertWithWhereUniqueWithoutMaster_categoryInput = {
    where: participantsWhereUniqueInput
    update: XOR<participantsUpdateWithoutMaster_categoryInput, participantsUncheckedUpdateWithoutMaster_categoryInput>
    create: XOR<participantsCreateWithoutMaster_categoryInput, participantsUncheckedCreateWithoutMaster_categoryInput>
  }

  export type participantsUpdateWithWhereUniqueWithoutMaster_categoryInput = {
    where: participantsWhereUniqueInput
    data: XOR<participantsUpdateWithoutMaster_categoryInput, participantsUncheckedUpdateWithoutMaster_categoryInput>
  }

  export type participantsUpdateManyWithWhereWithoutMaster_categoryInput = {
    where: participantsScalarWhereInput
    data: XOR<participantsUpdateManyMutationInput, participantsUncheckedUpdateManyWithoutMaster_categoryInput>
  }

  export type family_refCreateManyUsers_refInput = {
    id?: number
    name: string
    EKTP?: string | null
    type: string
    relation: string
    birthplace?: string | null
    birthdate?: Date | string | null
    address?: string | null
    subdistrict?: string | null
    district?: string | null
    city?: string | null
    phone?: string | null
    email: string
  }

  export type family_refUpdateWithoutUsers_refInput = {
    name?: StringFieldUpdateOperationsInput | string
    EKTP?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    relation?: StringFieldUpdateOperationsInput | string
    birthplace?: NullableStringFieldUpdateOperationsInput | string | null
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    subdistrict?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
  }

  export type family_refUncheckedUpdateWithoutUsers_refInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    EKTP?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    relation?: StringFieldUpdateOperationsInput | string
    birthplace?: NullableStringFieldUpdateOperationsInput | string | null
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    subdistrict?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
  }

  export type family_refUncheckedUpdateManyWithoutUsers_refInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    EKTP?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    relation?: StringFieldUpdateOperationsInput | string
    birthplace?: NullableStringFieldUpdateOperationsInput | string | null
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    subdistrict?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
  }

  export type participantsCreateManyTransactionsInput = {
    id?: number
    fname: string
    lname: string
    bibname: string
    email: string
    identityId: string
    birthplace: string
    birthdate: Date | string
    phone: string
    address: string
    zipcode: string
    country: string
    city: string
    bloodType: string
    size?: string | null
    master_categoryId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type participantsUpdateWithoutTransactionsInput = {
    fname?: StringFieldUpdateOperationsInput | string
    lname?: StringFieldUpdateOperationsInput | string
    bibname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    identityId?: StringFieldUpdateOperationsInput | string
    birthplace?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    zipcode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    bloodType?: StringFieldUpdateOperationsInput | string
    size?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    master_category?: master_categoryUpdateOneWithoutParticipantsNestedInput
  }

  export type participantsUncheckedUpdateWithoutTransactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    fname?: StringFieldUpdateOperationsInput | string
    lname?: StringFieldUpdateOperationsInput | string
    bibname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    identityId?: StringFieldUpdateOperationsInput | string
    birthplace?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    zipcode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    bloodType?: StringFieldUpdateOperationsInput | string
    size?: NullableStringFieldUpdateOperationsInput | string | null
    master_categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type participantsUncheckedUpdateManyWithoutTransactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    fname?: StringFieldUpdateOperationsInput | string
    lname?: StringFieldUpdateOperationsInput | string
    bibname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    identityId?: StringFieldUpdateOperationsInput | string
    birthplace?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    zipcode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    bloodType?: StringFieldUpdateOperationsInput | string
    size?: NullableStringFieldUpdateOperationsInput | string | null
    master_categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type participantsCreateManyMaster_categoryInput = {
    id?: number
    fname: string
    lname: string
    bibname: string
    email: string
    identityId: string
    birthplace: string
    birthdate: Date | string
    phone: string
    address: string
    zipcode: string
    country: string
    city: string
    bloodType: string
    size?: string | null
    transactionsId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type participantsUpdateWithoutMaster_categoryInput = {
    fname?: StringFieldUpdateOperationsInput | string
    lname?: StringFieldUpdateOperationsInput | string
    bibname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    identityId?: StringFieldUpdateOperationsInput | string
    birthplace?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    zipcode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    bloodType?: StringFieldUpdateOperationsInput | string
    size?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: transactionsUpdateOneWithoutParticipantsNestedInput
  }

  export type participantsUncheckedUpdateWithoutMaster_categoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    fname?: StringFieldUpdateOperationsInput | string
    lname?: StringFieldUpdateOperationsInput | string
    bibname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    identityId?: StringFieldUpdateOperationsInput | string
    birthplace?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    zipcode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    bloodType?: StringFieldUpdateOperationsInput | string
    size?: NullableStringFieldUpdateOperationsInput | string | null
    transactionsId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type participantsUncheckedUpdateManyWithoutMaster_categoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    fname?: StringFieldUpdateOperationsInput | string
    lname?: StringFieldUpdateOperationsInput | string
    bibname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    identityId?: StringFieldUpdateOperationsInput | string
    birthplace?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    zipcode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    bloodType?: StringFieldUpdateOperationsInput | string
    size?: NullableStringFieldUpdateOperationsInput | string | null
    transactionsId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}