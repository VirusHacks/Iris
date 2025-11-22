
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Webinar
 * 
 */
export type Webinar = $Result.DefaultSelection<Prisma.$WebinarPayload>
/**
 * Model Attendee
 * 
 */
export type Attendee = $Result.DefaultSelection<Prisma.$AttendeePayload>
/**
 * Model Attendance
 * 
 */
export type Attendance = $Result.DefaultSelection<Prisma.$AttendancePayload>
/**
 * Model AiAgents
 * 
 */
export type AiAgents = $Result.DefaultSelection<Prisma.$AiAgentsPayload>
/**
 * Model SalesTransaction
 * 
 */
export type SalesTransaction = $Result.DefaultSelection<Prisma.$SalesTransactionPayload>
/**
 * Model RFMAnalysis
 * 
 */
export type RFMAnalysis = $Result.DefaultSelection<Prisma.$RFMAnalysisPayload>
/**
 * Model DashboardAnalytics
 * 
 */
export type DashboardAnalytics = $Result.DefaultSelection<Prisma.$DashboardAnalyticsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const AttendedTypeEnum: {
  REGISTERED: 'REGISTERED',
  ATTENDED: 'ATTENDED',
  ADDED_TO_CART: 'ADDED_TO_CART',
  FOLLOW_UP: 'FOLLOW_UP',
  BREAKOUT_ROOM: 'BREAKOUT_ROOM',
  CONVERTED: 'CONVERTED'
};

export type AttendedTypeEnum = (typeof AttendedTypeEnum)[keyof typeof AttendedTypeEnum]


export const CtaTypeEnum: {
  BUY_NOW: 'BUY_NOW',
  BOOK_A_CALL: 'BOOK_A_CALL'
};

export type CtaTypeEnum = (typeof CtaTypeEnum)[keyof typeof CtaTypeEnum]


export const WebinarStatusEnum: {
  SCHEDULED: 'SCHEDULED',
  WAITING_ROOM: 'WAITING_ROOM',
  LIVE: 'LIVE',
  ENDED: 'ENDED',
  CANCELLED: 'CANCELLED'
};

export type WebinarStatusEnum = (typeof WebinarStatusEnum)[keyof typeof WebinarStatusEnum]


export const CallStatusEnum: {
  PENDING: 'PENDING',
  InProgress: 'InProgress',
  COMPLETED: 'COMPLETED'
};

export type CallStatusEnum = (typeof CallStatusEnum)[keyof typeof CallStatusEnum]

}

export type AttendedTypeEnum = $Enums.AttendedTypeEnum

export const AttendedTypeEnum: typeof $Enums.AttendedTypeEnum

export type CtaTypeEnum = $Enums.CtaTypeEnum

export const CtaTypeEnum: typeof $Enums.CtaTypeEnum

export type WebinarStatusEnum = $Enums.WebinarStatusEnum

export const WebinarStatusEnum: typeof $Enums.WebinarStatusEnum

export type CallStatusEnum = $Enums.CallStatusEnum

export const CallStatusEnum: typeof $Enums.CallStatusEnum

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs, $Utils.Call<Prisma.TypeMapCb, {
    extArgs: ExtArgs
  }>, ClientOptions>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.webinar`: Exposes CRUD operations for the **Webinar** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Webinars
    * const webinars = await prisma.webinar.findMany()
    * ```
    */
  get webinar(): Prisma.WebinarDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.attendee`: Exposes CRUD operations for the **Attendee** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Attendees
    * const attendees = await prisma.attendee.findMany()
    * ```
    */
  get attendee(): Prisma.AttendeeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.attendance`: Exposes CRUD operations for the **Attendance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Attendances
    * const attendances = await prisma.attendance.findMany()
    * ```
    */
  get attendance(): Prisma.AttendanceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.aiAgents`: Exposes CRUD operations for the **AiAgents** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AiAgents
    * const aiAgents = await prisma.aiAgents.findMany()
    * ```
    */
  get aiAgents(): Prisma.AiAgentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.salesTransaction`: Exposes CRUD operations for the **SalesTransaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SalesTransactions
    * const salesTransactions = await prisma.salesTransaction.findMany()
    * ```
    */
  get salesTransaction(): Prisma.SalesTransactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rFMAnalysis`: Exposes CRUD operations for the **RFMAnalysis** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RFMAnalyses
    * const rFMAnalyses = await prisma.rFMAnalysis.findMany()
    * ```
    */
  get rFMAnalysis(): Prisma.RFMAnalysisDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dashboardAnalytics`: Exposes CRUD operations for the **DashboardAnalytics** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DashboardAnalytics
    * const dashboardAnalytics = await prisma.dashboardAnalytics.findMany()
    * ```
    */
  get dashboardAnalytics(): Prisma.DashboardAnalyticsDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.3.1
   * Query Engine version: acc0b9dd43eb689cbd20c9470515d719db10d0b0
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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    User: 'User',
    Webinar: 'Webinar',
    Attendee: 'Attendee',
    Attendance: 'Attendance',
    AiAgents: 'AiAgents',
    SalesTransaction: 'SalesTransaction',
    RFMAnalysis: 'RFMAnalysis',
    DashboardAnalytics: 'DashboardAnalytics'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "webinar" | "attendee" | "attendance" | "aiAgents" | "salesTransaction" | "rFMAnalysis" | "dashboardAnalytics"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Webinar: {
        payload: Prisma.$WebinarPayload<ExtArgs>
        fields: Prisma.WebinarFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WebinarFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebinarPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WebinarFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebinarPayload>
          }
          findFirst: {
            args: Prisma.WebinarFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebinarPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WebinarFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebinarPayload>
          }
          findMany: {
            args: Prisma.WebinarFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebinarPayload>[]
          }
          create: {
            args: Prisma.WebinarCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebinarPayload>
          }
          createMany: {
            args: Prisma.WebinarCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WebinarCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebinarPayload>[]
          }
          delete: {
            args: Prisma.WebinarDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebinarPayload>
          }
          update: {
            args: Prisma.WebinarUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebinarPayload>
          }
          deleteMany: {
            args: Prisma.WebinarDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WebinarUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WebinarUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebinarPayload>[]
          }
          upsert: {
            args: Prisma.WebinarUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebinarPayload>
          }
          aggregate: {
            args: Prisma.WebinarAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWebinar>
          }
          groupBy: {
            args: Prisma.WebinarGroupByArgs<ExtArgs>
            result: $Utils.Optional<WebinarGroupByOutputType>[]
          }
          count: {
            args: Prisma.WebinarCountArgs<ExtArgs>
            result: $Utils.Optional<WebinarCountAggregateOutputType> | number
          }
        }
      }
      Attendee: {
        payload: Prisma.$AttendeePayload<ExtArgs>
        fields: Prisma.AttendeeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AttendeeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendeePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttendeeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendeePayload>
          }
          findFirst: {
            args: Prisma.AttendeeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendeePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttendeeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendeePayload>
          }
          findMany: {
            args: Prisma.AttendeeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendeePayload>[]
          }
          create: {
            args: Prisma.AttendeeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendeePayload>
          }
          createMany: {
            args: Prisma.AttendeeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AttendeeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendeePayload>[]
          }
          delete: {
            args: Prisma.AttendeeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendeePayload>
          }
          update: {
            args: Prisma.AttendeeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendeePayload>
          }
          deleteMany: {
            args: Prisma.AttendeeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AttendeeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AttendeeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendeePayload>[]
          }
          upsert: {
            args: Prisma.AttendeeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendeePayload>
          }
          aggregate: {
            args: Prisma.AttendeeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttendee>
          }
          groupBy: {
            args: Prisma.AttendeeGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttendeeGroupByOutputType>[]
          }
          count: {
            args: Prisma.AttendeeCountArgs<ExtArgs>
            result: $Utils.Optional<AttendeeCountAggregateOutputType> | number
          }
        }
      }
      Attendance: {
        payload: Prisma.$AttendancePayload<ExtArgs>
        fields: Prisma.AttendanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AttendanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttendanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          findFirst: {
            args: Prisma.AttendanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttendanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          findMany: {
            args: Prisma.AttendanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>[]
          }
          create: {
            args: Prisma.AttendanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          createMany: {
            args: Prisma.AttendanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AttendanceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>[]
          }
          delete: {
            args: Prisma.AttendanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          update: {
            args: Prisma.AttendanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          deleteMany: {
            args: Prisma.AttendanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AttendanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AttendanceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>[]
          }
          upsert: {
            args: Prisma.AttendanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          aggregate: {
            args: Prisma.AttendanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttendance>
          }
          groupBy: {
            args: Prisma.AttendanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttendanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.AttendanceCountArgs<ExtArgs>
            result: $Utils.Optional<AttendanceCountAggregateOutputType> | number
          }
        }
      }
      AiAgents: {
        payload: Prisma.$AiAgentsPayload<ExtArgs>
        fields: Prisma.AiAgentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AiAgentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiAgentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AiAgentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiAgentsPayload>
          }
          findFirst: {
            args: Prisma.AiAgentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiAgentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AiAgentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiAgentsPayload>
          }
          findMany: {
            args: Prisma.AiAgentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiAgentsPayload>[]
          }
          create: {
            args: Prisma.AiAgentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiAgentsPayload>
          }
          createMany: {
            args: Prisma.AiAgentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AiAgentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiAgentsPayload>[]
          }
          delete: {
            args: Prisma.AiAgentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiAgentsPayload>
          }
          update: {
            args: Prisma.AiAgentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiAgentsPayload>
          }
          deleteMany: {
            args: Prisma.AiAgentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AiAgentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AiAgentsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiAgentsPayload>[]
          }
          upsert: {
            args: Prisma.AiAgentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiAgentsPayload>
          }
          aggregate: {
            args: Prisma.AiAgentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAiAgents>
          }
          groupBy: {
            args: Prisma.AiAgentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AiAgentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.AiAgentsCountArgs<ExtArgs>
            result: $Utils.Optional<AiAgentsCountAggregateOutputType> | number
          }
        }
      }
      SalesTransaction: {
        payload: Prisma.$SalesTransactionPayload<ExtArgs>
        fields: Prisma.SalesTransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SalesTransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesTransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SalesTransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesTransactionPayload>
          }
          findFirst: {
            args: Prisma.SalesTransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesTransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SalesTransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesTransactionPayload>
          }
          findMany: {
            args: Prisma.SalesTransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesTransactionPayload>[]
          }
          create: {
            args: Prisma.SalesTransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesTransactionPayload>
          }
          createMany: {
            args: Prisma.SalesTransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SalesTransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesTransactionPayload>[]
          }
          delete: {
            args: Prisma.SalesTransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesTransactionPayload>
          }
          update: {
            args: Prisma.SalesTransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesTransactionPayload>
          }
          deleteMany: {
            args: Prisma.SalesTransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SalesTransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SalesTransactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesTransactionPayload>[]
          }
          upsert: {
            args: Prisma.SalesTransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesTransactionPayload>
          }
          aggregate: {
            args: Prisma.SalesTransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSalesTransaction>
          }
          groupBy: {
            args: Prisma.SalesTransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SalesTransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SalesTransactionCountArgs<ExtArgs>
            result: $Utils.Optional<SalesTransactionCountAggregateOutputType> | number
          }
        }
      }
      RFMAnalysis: {
        payload: Prisma.$RFMAnalysisPayload<ExtArgs>
        fields: Prisma.RFMAnalysisFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RFMAnalysisFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RFMAnalysisPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RFMAnalysisFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RFMAnalysisPayload>
          }
          findFirst: {
            args: Prisma.RFMAnalysisFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RFMAnalysisPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RFMAnalysisFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RFMAnalysisPayload>
          }
          findMany: {
            args: Prisma.RFMAnalysisFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RFMAnalysisPayload>[]
          }
          create: {
            args: Prisma.RFMAnalysisCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RFMAnalysisPayload>
          }
          createMany: {
            args: Prisma.RFMAnalysisCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RFMAnalysisCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RFMAnalysisPayload>[]
          }
          delete: {
            args: Prisma.RFMAnalysisDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RFMAnalysisPayload>
          }
          update: {
            args: Prisma.RFMAnalysisUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RFMAnalysisPayload>
          }
          deleteMany: {
            args: Prisma.RFMAnalysisDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RFMAnalysisUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RFMAnalysisUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RFMAnalysisPayload>[]
          }
          upsert: {
            args: Prisma.RFMAnalysisUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RFMAnalysisPayload>
          }
          aggregate: {
            args: Prisma.RFMAnalysisAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRFMAnalysis>
          }
          groupBy: {
            args: Prisma.RFMAnalysisGroupByArgs<ExtArgs>
            result: $Utils.Optional<RFMAnalysisGroupByOutputType>[]
          }
          count: {
            args: Prisma.RFMAnalysisCountArgs<ExtArgs>
            result: $Utils.Optional<RFMAnalysisCountAggregateOutputType> | number
          }
        }
      }
      DashboardAnalytics: {
        payload: Prisma.$DashboardAnalyticsPayload<ExtArgs>
        fields: Prisma.DashboardAnalyticsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DashboardAnalyticsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DashboardAnalyticsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DashboardAnalyticsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DashboardAnalyticsPayload>
          }
          findFirst: {
            args: Prisma.DashboardAnalyticsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DashboardAnalyticsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DashboardAnalyticsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DashboardAnalyticsPayload>
          }
          findMany: {
            args: Prisma.DashboardAnalyticsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DashboardAnalyticsPayload>[]
          }
          create: {
            args: Prisma.DashboardAnalyticsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DashboardAnalyticsPayload>
          }
          createMany: {
            args: Prisma.DashboardAnalyticsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DashboardAnalyticsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DashboardAnalyticsPayload>[]
          }
          delete: {
            args: Prisma.DashboardAnalyticsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DashboardAnalyticsPayload>
          }
          update: {
            args: Prisma.DashboardAnalyticsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DashboardAnalyticsPayload>
          }
          deleteMany: {
            args: Prisma.DashboardAnalyticsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DashboardAnalyticsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DashboardAnalyticsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DashboardAnalyticsPayload>[]
          }
          upsert: {
            args: Prisma.DashboardAnalyticsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DashboardAnalyticsPayload>
          }
          aggregate: {
            args: Prisma.DashboardAnalyticsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDashboardAnalytics>
          }
          groupBy: {
            args: Prisma.DashboardAnalyticsGroupByArgs<ExtArgs>
            result: $Utils.Optional<DashboardAnalyticsGroupByOutputType>[]
          }
          count: {
            args: Prisma.DashboardAnalyticsCountArgs<ExtArgs>
            result: $Utils.Optional<DashboardAnalyticsCountAggregateOutputType> | number
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
    user?: UserOmit
    webinar?: WebinarOmit
    attendee?: AttendeeOmit
    attendance?: AttendanceOmit
    aiAgents?: AiAgentsOmit
    salesTransaction?: SalesTransactionOmit
    rFMAnalysis?: RFMAnalysisOmit
    dashboardAnalytics?: DashboardAnalyticsOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    webinars: number
    aiAgents: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    webinars?: boolean | UserCountOutputTypeCountWebinarsArgs
    aiAgents?: boolean | UserCountOutputTypeCountAiAgentsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWebinarsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WebinarWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAiAgentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AiAgentsWhereInput
  }


  /**
   * Count Type WebinarCountOutputType
   */

  export type WebinarCountOutputType = {
    attendances: number
  }

  export type WebinarCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attendances?: boolean | WebinarCountOutputTypeCountAttendancesArgs
  }

  // Custom InputTypes
  /**
   * WebinarCountOutputType without action
   */
  export type WebinarCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebinarCountOutputType
     */
    select?: WebinarCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WebinarCountOutputType without action
   */
  export type WebinarCountOutputTypeCountAttendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceWhereInput
  }


  /**
   * Count Type AttendeeCountOutputType
   */

  export type AttendeeCountOutputType = {
    Attendance: number
    Webinar: number
  }

  export type AttendeeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Attendance?: boolean | AttendeeCountOutputTypeCountAttendanceArgs
    Webinar?: boolean | AttendeeCountOutputTypeCountWebinarArgs
  }

  // Custom InputTypes
  /**
   * AttendeeCountOutputType without action
   */
  export type AttendeeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendeeCountOutputType
     */
    select?: AttendeeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AttendeeCountOutputType without action
   */
  export type AttendeeCountOutputTypeCountAttendanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceWhereInput
  }

  /**
   * AttendeeCountOutputType without action
   */
  export type AttendeeCountOutputTypeCountWebinarArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WebinarWhereInput
  }


  /**
   * Count Type AiAgentsCountOutputType
   */

  export type AiAgentsCountOutputType = {
    User: number
  }

  export type AiAgentsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | AiAgentsCountOutputTypeCountUserArgs
  }

  // Custom InputTypes
  /**
   * AiAgentsCountOutputType without action
   */
  export type AiAgentsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiAgentsCountOutputType
     */
    select?: AiAgentsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AiAgentsCountOutputType without action
   */
  export type AiAgentsCountOutputTypeCountUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    clerkId: string | null
    email: string | null
    profileImage: string | null
    stripeConnectId: string | null
    lastLoginAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    subscription: boolean | null
    stripeCustomerId: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    clerkId: string | null
    email: string | null
    profileImage: string | null
    stripeConnectId: string | null
    lastLoginAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    subscription: boolean | null
    stripeCustomerId: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    clerkId: number
    email: number
    profileImage: number
    stripeConnectId: number
    lastLoginAt: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    subscription: number
    stripeCustomerId: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    clerkId?: true
    email?: true
    profileImage?: true
    stripeConnectId?: true
    lastLoginAt?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    subscription?: true
    stripeCustomerId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    clerkId?: true
    email?: true
    profileImage?: true
    stripeConnectId?: true
    lastLoginAt?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    subscription?: true
    stripeCustomerId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    clerkId?: true
    email?: true
    profileImage?: true
    stripeConnectId?: true
    lastLoginAt?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    subscription?: true
    stripeCustomerId?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    clerkId: string
    email: string
    profileImage: string
    stripeConnectId: string | null
    lastLoginAt: Date | null
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    subscription: boolean
    stripeCustomerId: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    clerkId?: boolean
    email?: boolean
    profileImage?: boolean
    stripeConnectId?: boolean
    lastLoginAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    subscription?: boolean
    stripeCustomerId?: boolean
    webinars?: boolean | User$webinarsArgs<ExtArgs>
    aiAgents?: boolean | User$aiAgentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    clerkId?: boolean
    email?: boolean
    profileImage?: boolean
    stripeConnectId?: boolean
    lastLoginAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    subscription?: boolean
    stripeCustomerId?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    clerkId?: boolean
    email?: boolean
    profileImage?: boolean
    stripeConnectId?: boolean
    lastLoginAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    subscription?: boolean
    stripeCustomerId?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    clerkId?: boolean
    email?: boolean
    profileImage?: boolean
    stripeConnectId?: boolean
    lastLoginAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    subscription?: boolean
    stripeCustomerId?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "clerkId" | "email" | "profileImage" | "stripeConnectId" | "lastLoginAt" | "createdAt" | "updatedAt" | "deletedAt" | "subscription" | "stripeCustomerId", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    webinars?: boolean | User$webinarsArgs<ExtArgs>
    aiAgents?: boolean | User$aiAgentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      webinars: Prisma.$WebinarPayload<ExtArgs>[]
      aiAgents: Prisma.$AiAgentsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      clerkId: string
      email: string
      profileImage: string
      stripeConnectId: string | null
      lastLoginAt: Date | null
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
      subscription: boolean
      stripeCustomerId: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    webinars<T extends User$webinarsArgs<ExtArgs> = {}>(args?: Subset<T, User$webinarsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebinarPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    aiAgents<T extends User$aiAgentsArgs<ExtArgs> = {}>(args?: Subset<T, User$aiAgentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AiAgentsPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly clerkId: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly profileImage: FieldRef<"User", 'String'>
    readonly stripeConnectId: FieldRef<"User", 'String'>
    readonly lastLoginAt: FieldRef<"User", 'DateTime'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly deletedAt: FieldRef<"User", 'DateTime'>
    readonly subscription: FieldRef<"User", 'Boolean'>
    readonly stripeCustomerId: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.webinars
   */
  export type User$webinarsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Webinar
     */
    select?: WebinarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Webinar
     */
    omit?: WebinarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebinarInclude<ExtArgs> | null
    where?: WebinarWhereInput
    orderBy?: WebinarOrderByWithRelationInput | WebinarOrderByWithRelationInput[]
    cursor?: WebinarWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WebinarScalarFieldEnum | WebinarScalarFieldEnum[]
  }

  /**
   * User.aiAgents
   */
  export type User$aiAgentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiAgents
     */
    select?: AiAgentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiAgents
     */
    omit?: AiAgentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiAgentsInclude<ExtArgs> | null
    where?: AiAgentsWhereInput
    orderBy?: AiAgentsOrderByWithRelationInput | AiAgentsOrderByWithRelationInput[]
    cursor?: AiAgentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AiAgentsScalarFieldEnum | AiAgentsScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Webinar
   */

  export type AggregateWebinar = {
    _count: WebinarCountAggregateOutputType | null
    _avg: WebinarAvgAggregateOutputType | null
    _sum: WebinarSumAggregateOutputType | null
    _min: WebinarMinAggregateOutputType | null
    _max: WebinarMaxAggregateOutputType | null
  }

  export type WebinarAvgAggregateOutputType = {
    duration: number | null
  }

  export type WebinarSumAggregateOutputType = {
    duration: number | null
  }

  export type WebinarMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    startTime: Date | null
    endTime: Date | null
    duration: number | null
    webinarStatus: $Enums.WebinarStatusEnum | null
    presenterId: string | null
    ctaLabel: string | null
    ctaType: $Enums.CtaTypeEnum | null
    ctaUrl: string | null
    couponCode: string | null
    couponEnabled: boolean | null
    couponExpiry: Date | null
    lockChat: boolean | null
    stripeProductId: string | null
    aiAgentId: string | null
    priceId: string | null
    recordingUrl: string | null
    thumbnail: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    attendeeId: string | null
  }

  export type WebinarMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    startTime: Date | null
    endTime: Date | null
    duration: number | null
    webinarStatus: $Enums.WebinarStatusEnum | null
    presenterId: string | null
    ctaLabel: string | null
    ctaType: $Enums.CtaTypeEnum | null
    ctaUrl: string | null
    couponCode: string | null
    couponEnabled: boolean | null
    couponExpiry: Date | null
    lockChat: boolean | null
    stripeProductId: string | null
    aiAgentId: string | null
    priceId: string | null
    recordingUrl: string | null
    thumbnail: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    attendeeId: string | null
  }

  export type WebinarCountAggregateOutputType = {
    id: number
    title: number
    description: number
    startTime: number
    endTime: number
    duration: number
    webinarStatus: number
    presenterId: number
    tags: number
    ctaLabel: number
    ctaType: number
    ctaUrl: number
    couponCode: number
    couponEnabled: number
    couponExpiry: number
    lockChat: number
    stripeProductId: number
    aiAgentId: number
    priceId: number
    recordingUrl: number
    thumbnail: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    attendeeId: number
    _all: number
  }


  export type WebinarAvgAggregateInputType = {
    duration?: true
  }

  export type WebinarSumAggregateInputType = {
    duration?: true
  }

  export type WebinarMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    startTime?: true
    endTime?: true
    duration?: true
    webinarStatus?: true
    presenterId?: true
    ctaLabel?: true
    ctaType?: true
    ctaUrl?: true
    couponCode?: true
    couponEnabled?: true
    couponExpiry?: true
    lockChat?: true
    stripeProductId?: true
    aiAgentId?: true
    priceId?: true
    recordingUrl?: true
    thumbnail?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    attendeeId?: true
  }

  export type WebinarMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    startTime?: true
    endTime?: true
    duration?: true
    webinarStatus?: true
    presenterId?: true
    ctaLabel?: true
    ctaType?: true
    ctaUrl?: true
    couponCode?: true
    couponEnabled?: true
    couponExpiry?: true
    lockChat?: true
    stripeProductId?: true
    aiAgentId?: true
    priceId?: true
    recordingUrl?: true
    thumbnail?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    attendeeId?: true
  }

  export type WebinarCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    startTime?: true
    endTime?: true
    duration?: true
    webinarStatus?: true
    presenterId?: true
    tags?: true
    ctaLabel?: true
    ctaType?: true
    ctaUrl?: true
    couponCode?: true
    couponEnabled?: true
    couponExpiry?: true
    lockChat?: true
    stripeProductId?: true
    aiAgentId?: true
    priceId?: true
    recordingUrl?: true
    thumbnail?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    attendeeId?: true
    _all?: true
  }

  export type WebinarAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Webinar to aggregate.
     */
    where?: WebinarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Webinars to fetch.
     */
    orderBy?: WebinarOrderByWithRelationInput | WebinarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WebinarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Webinars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Webinars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Webinars
    **/
    _count?: true | WebinarCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WebinarAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WebinarSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WebinarMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WebinarMaxAggregateInputType
  }

  export type GetWebinarAggregateType<T extends WebinarAggregateArgs> = {
        [P in keyof T & keyof AggregateWebinar]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWebinar[P]>
      : GetScalarType<T[P], AggregateWebinar[P]>
  }




  export type WebinarGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WebinarWhereInput
    orderBy?: WebinarOrderByWithAggregationInput | WebinarOrderByWithAggregationInput[]
    by: WebinarScalarFieldEnum[] | WebinarScalarFieldEnum
    having?: WebinarScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WebinarCountAggregateInputType | true
    _avg?: WebinarAvgAggregateInputType
    _sum?: WebinarSumAggregateInputType
    _min?: WebinarMinAggregateInputType
    _max?: WebinarMaxAggregateInputType
  }

  export type WebinarGroupByOutputType = {
    id: string
    title: string
    description: string | null
    startTime: Date
    endTime: Date | null
    duration: number
    webinarStatus: $Enums.WebinarStatusEnum
    presenterId: string
    tags: string[]
    ctaLabel: string | null
    ctaType: $Enums.CtaTypeEnum
    ctaUrl: string | null
    couponCode: string | null
    couponEnabled: boolean
    couponExpiry: Date | null
    lockChat: boolean
    stripeProductId: string | null
    aiAgentId: string | null
    priceId: string | null
    recordingUrl: string | null
    thumbnail: string | null
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    attendeeId: string | null
    _count: WebinarCountAggregateOutputType | null
    _avg: WebinarAvgAggregateOutputType | null
    _sum: WebinarSumAggregateOutputType | null
    _min: WebinarMinAggregateOutputType | null
    _max: WebinarMaxAggregateOutputType | null
  }

  type GetWebinarGroupByPayload<T extends WebinarGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WebinarGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WebinarGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WebinarGroupByOutputType[P]>
            : GetScalarType<T[P], WebinarGroupByOutputType[P]>
        }
      >
    >


  export type WebinarSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    startTime?: boolean
    endTime?: boolean
    duration?: boolean
    webinarStatus?: boolean
    presenterId?: boolean
    tags?: boolean
    ctaLabel?: boolean
    ctaType?: boolean
    ctaUrl?: boolean
    couponCode?: boolean
    couponEnabled?: boolean
    couponExpiry?: boolean
    lockChat?: boolean
    stripeProductId?: boolean
    aiAgentId?: boolean
    priceId?: boolean
    recordingUrl?: boolean
    thumbnail?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    attendeeId?: boolean
    attendances?: boolean | Webinar$attendancesArgs<ExtArgs>
    Attendee?: boolean | Webinar$AttendeeArgs<ExtArgs>
    presenter?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | WebinarCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["webinar"]>

  export type WebinarSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    startTime?: boolean
    endTime?: boolean
    duration?: boolean
    webinarStatus?: boolean
    presenterId?: boolean
    tags?: boolean
    ctaLabel?: boolean
    ctaType?: boolean
    ctaUrl?: boolean
    couponCode?: boolean
    couponEnabled?: boolean
    couponExpiry?: boolean
    lockChat?: boolean
    stripeProductId?: boolean
    aiAgentId?: boolean
    priceId?: boolean
    recordingUrl?: boolean
    thumbnail?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    attendeeId?: boolean
    Attendee?: boolean | Webinar$AttendeeArgs<ExtArgs>
    presenter?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["webinar"]>

  export type WebinarSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    startTime?: boolean
    endTime?: boolean
    duration?: boolean
    webinarStatus?: boolean
    presenterId?: boolean
    tags?: boolean
    ctaLabel?: boolean
    ctaType?: boolean
    ctaUrl?: boolean
    couponCode?: boolean
    couponEnabled?: boolean
    couponExpiry?: boolean
    lockChat?: boolean
    stripeProductId?: boolean
    aiAgentId?: boolean
    priceId?: boolean
    recordingUrl?: boolean
    thumbnail?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    attendeeId?: boolean
    Attendee?: boolean | Webinar$AttendeeArgs<ExtArgs>
    presenter?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["webinar"]>

  export type WebinarSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    startTime?: boolean
    endTime?: boolean
    duration?: boolean
    webinarStatus?: boolean
    presenterId?: boolean
    tags?: boolean
    ctaLabel?: boolean
    ctaType?: boolean
    ctaUrl?: boolean
    couponCode?: boolean
    couponEnabled?: boolean
    couponExpiry?: boolean
    lockChat?: boolean
    stripeProductId?: boolean
    aiAgentId?: boolean
    priceId?: boolean
    recordingUrl?: boolean
    thumbnail?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    attendeeId?: boolean
  }

  export type WebinarOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "startTime" | "endTime" | "duration" | "webinarStatus" | "presenterId" | "tags" | "ctaLabel" | "ctaType" | "ctaUrl" | "couponCode" | "couponEnabled" | "couponExpiry" | "lockChat" | "stripeProductId" | "aiAgentId" | "priceId" | "recordingUrl" | "thumbnail" | "createdAt" | "updatedAt" | "deletedAt" | "attendeeId", ExtArgs["result"]["webinar"]>
  export type WebinarInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attendances?: boolean | Webinar$attendancesArgs<ExtArgs>
    Attendee?: boolean | Webinar$AttendeeArgs<ExtArgs>
    presenter?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | WebinarCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WebinarIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Attendee?: boolean | Webinar$AttendeeArgs<ExtArgs>
    presenter?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WebinarIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Attendee?: boolean | Webinar$AttendeeArgs<ExtArgs>
    presenter?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $WebinarPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Webinar"
    objects: {
      attendances: Prisma.$AttendancePayload<ExtArgs>[]
      Attendee: Prisma.$AttendeePayload<ExtArgs> | null
      presenter: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      startTime: Date
      endTime: Date | null
      duration: number
      webinarStatus: $Enums.WebinarStatusEnum
      presenterId: string
      tags: string[]
      ctaLabel: string | null
      ctaType: $Enums.CtaTypeEnum
      ctaUrl: string | null
      couponCode: string | null
      couponEnabled: boolean
      couponExpiry: Date | null
      lockChat: boolean
      stripeProductId: string | null
      aiAgentId: string | null
      priceId: string | null
      recordingUrl: string | null
      thumbnail: string | null
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
      attendeeId: string | null
    }, ExtArgs["result"]["webinar"]>
    composites: {}
  }

  type WebinarGetPayload<S extends boolean | null | undefined | WebinarDefaultArgs> = $Result.GetResult<Prisma.$WebinarPayload, S>

  type WebinarCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WebinarFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WebinarCountAggregateInputType | true
    }

  export interface WebinarDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Webinar'], meta: { name: 'Webinar' } }
    /**
     * Find zero or one Webinar that matches the filter.
     * @param {WebinarFindUniqueArgs} args - Arguments to find a Webinar
     * @example
     * // Get one Webinar
     * const webinar = await prisma.webinar.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WebinarFindUniqueArgs>(args: SelectSubset<T, WebinarFindUniqueArgs<ExtArgs>>): Prisma__WebinarClient<$Result.GetResult<Prisma.$WebinarPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Webinar that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WebinarFindUniqueOrThrowArgs} args - Arguments to find a Webinar
     * @example
     * // Get one Webinar
     * const webinar = await prisma.webinar.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WebinarFindUniqueOrThrowArgs>(args: SelectSubset<T, WebinarFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WebinarClient<$Result.GetResult<Prisma.$WebinarPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Webinar that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebinarFindFirstArgs} args - Arguments to find a Webinar
     * @example
     * // Get one Webinar
     * const webinar = await prisma.webinar.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WebinarFindFirstArgs>(args?: SelectSubset<T, WebinarFindFirstArgs<ExtArgs>>): Prisma__WebinarClient<$Result.GetResult<Prisma.$WebinarPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Webinar that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebinarFindFirstOrThrowArgs} args - Arguments to find a Webinar
     * @example
     * // Get one Webinar
     * const webinar = await prisma.webinar.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WebinarFindFirstOrThrowArgs>(args?: SelectSubset<T, WebinarFindFirstOrThrowArgs<ExtArgs>>): Prisma__WebinarClient<$Result.GetResult<Prisma.$WebinarPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Webinars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebinarFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Webinars
     * const webinars = await prisma.webinar.findMany()
     * 
     * // Get first 10 Webinars
     * const webinars = await prisma.webinar.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const webinarWithIdOnly = await prisma.webinar.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WebinarFindManyArgs>(args?: SelectSubset<T, WebinarFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebinarPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Webinar.
     * @param {WebinarCreateArgs} args - Arguments to create a Webinar.
     * @example
     * // Create one Webinar
     * const Webinar = await prisma.webinar.create({
     *   data: {
     *     // ... data to create a Webinar
     *   }
     * })
     * 
     */
    create<T extends WebinarCreateArgs>(args: SelectSubset<T, WebinarCreateArgs<ExtArgs>>): Prisma__WebinarClient<$Result.GetResult<Prisma.$WebinarPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Webinars.
     * @param {WebinarCreateManyArgs} args - Arguments to create many Webinars.
     * @example
     * // Create many Webinars
     * const webinar = await prisma.webinar.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WebinarCreateManyArgs>(args?: SelectSubset<T, WebinarCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Webinars and returns the data saved in the database.
     * @param {WebinarCreateManyAndReturnArgs} args - Arguments to create many Webinars.
     * @example
     * // Create many Webinars
     * const webinar = await prisma.webinar.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Webinars and only return the `id`
     * const webinarWithIdOnly = await prisma.webinar.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WebinarCreateManyAndReturnArgs>(args?: SelectSubset<T, WebinarCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebinarPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Webinar.
     * @param {WebinarDeleteArgs} args - Arguments to delete one Webinar.
     * @example
     * // Delete one Webinar
     * const Webinar = await prisma.webinar.delete({
     *   where: {
     *     // ... filter to delete one Webinar
     *   }
     * })
     * 
     */
    delete<T extends WebinarDeleteArgs>(args: SelectSubset<T, WebinarDeleteArgs<ExtArgs>>): Prisma__WebinarClient<$Result.GetResult<Prisma.$WebinarPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Webinar.
     * @param {WebinarUpdateArgs} args - Arguments to update one Webinar.
     * @example
     * // Update one Webinar
     * const webinar = await prisma.webinar.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WebinarUpdateArgs>(args: SelectSubset<T, WebinarUpdateArgs<ExtArgs>>): Prisma__WebinarClient<$Result.GetResult<Prisma.$WebinarPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Webinars.
     * @param {WebinarDeleteManyArgs} args - Arguments to filter Webinars to delete.
     * @example
     * // Delete a few Webinars
     * const { count } = await prisma.webinar.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WebinarDeleteManyArgs>(args?: SelectSubset<T, WebinarDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Webinars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebinarUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Webinars
     * const webinar = await prisma.webinar.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WebinarUpdateManyArgs>(args: SelectSubset<T, WebinarUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Webinars and returns the data updated in the database.
     * @param {WebinarUpdateManyAndReturnArgs} args - Arguments to update many Webinars.
     * @example
     * // Update many Webinars
     * const webinar = await prisma.webinar.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Webinars and only return the `id`
     * const webinarWithIdOnly = await prisma.webinar.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WebinarUpdateManyAndReturnArgs>(args: SelectSubset<T, WebinarUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebinarPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Webinar.
     * @param {WebinarUpsertArgs} args - Arguments to update or create a Webinar.
     * @example
     * // Update or create a Webinar
     * const webinar = await prisma.webinar.upsert({
     *   create: {
     *     // ... data to create a Webinar
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Webinar we want to update
     *   }
     * })
     */
    upsert<T extends WebinarUpsertArgs>(args: SelectSubset<T, WebinarUpsertArgs<ExtArgs>>): Prisma__WebinarClient<$Result.GetResult<Prisma.$WebinarPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Webinars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebinarCountArgs} args - Arguments to filter Webinars to count.
     * @example
     * // Count the number of Webinars
     * const count = await prisma.webinar.count({
     *   where: {
     *     // ... the filter for the Webinars we want to count
     *   }
     * })
    **/
    count<T extends WebinarCountArgs>(
      args?: Subset<T, WebinarCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WebinarCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Webinar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebinarAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WebinarAggregateArgs>(args: Subset<T, WebinarAggregateArgs>): Prisma.PrismaPromise<GetWebinarAggregateType<T>>

    /**
     * Group by Webinar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebinarGroupByArgs} args - Group by arguments.
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
      T extends WebinarGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WebinarGroupByArgs['orderBy'] }
        : { orderBy?: WebinarGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WebinarGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWebinarGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Webinar model
   */
  readonly fields: WebinarFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Webinar.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WebinarClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    attendances<T extends Webinar$attendancesArgs<ExtArgs> = {}>(args?: Subset<T, Webinar$attendancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    Attendee<T extends Webinar$AttendeeArgs<ExtArgs> = {}>(args?: Subset<T, Webinar$AttendeeArgs<ExtArgs>>): Prisma__AttendeeClient<$Result.GetResult<Prisma.$AttendeePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    presenter<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
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
   * Fields of the Webinar model
   */ 
  interface WebinarFieldRefs {
    readonly id: FieldRef<"Webinar", 'String'>
    readonly title: FieldRef<"Webinar", 'String'>
    readonly description: FieldRef<"Webinar", 'String'>
    readonly startTime: FieldRef<"Webinar", 'DateTime'>
    readonly endTime: FieldRef<"Webinar", 'DateTime'>
    readonly duration: FieldRef<"Webinar", 'Int'>
    readonly webinarStatus: FieldRef<"Webinar", 'WebinarStatusEnum'>
    readonly presenterId: FieldRef<"Webinar", 'String'>
    readonly tags: FieldRef<"Webinar", 'String[]'>
    readonly ctaLabel: FieldRef<"Webinar", 'String'>
    readonly ctaType: FieldRef<"Webinar", 'CtaTypeEnum'>
    readonly ctaUrl: FieldRef<"Webinar", 'String'>
    readonly couponCode: FieldRef<"Webinar", 'String'>
    readonly couponEnabled: FieldRef<"Webinar", 'Boolean'>
    readonly couponExpiry: FieldRef<"Webinar", 'DateTime'>
    readonly lockChat: FieldRef<"Webinar", 'Boolean'>
    readonly stripeProductId: FieldRef<"Webinar", 'String'>
    readonly aiAgentId: FieldRef<"Webinar", 'String'>
    readonly priceId: FieldRef<"Webinar", 'String'>
    readonly recordingUrl: FieldRef<"Webinar", 'String'>
    readonly thumbnail: FieldRef<"Webinar", 'String'>
    readonly createdAt: FieldRef<"Webinar", 'DateTime'>
    readonly updatedAt: FieldRef<"Webinar", 'DateTime'>
    readonly deletedAt: FieldRef<"Webinar", 'DateTime'>
    readonly attendeeId: FieldRef<"Webinar", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Webinar findUnique
   */
  export type WebinarFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Webinar
     */
    select?: WebinarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Webinar
     */
    omit?: WebinarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebinarInclude<ExtArgs> | null
    /**
     * Filter, which Webinar to fetch.
     */
    where: WebinarWhereUniqueInput
  }

  /**
   * Webinar findUniqueOrThrow
   */
  export type WebinarFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Webinar
     */
    select?: WebinarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Webinar
     */
    omit?: WebinarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebinarInclude<ExtArgs> | null
    /**
     * Filter, which Webinar to fetch.
     */
    where: WebinarWhereUniqueInput
  }

  /**
   * Webinar findFirst
   */
  export type WebinarFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Webinar
     */
    select?: WebinarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Webinar
     */
    omit?: WebinarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebinarInclude<ExtArgs> | null
    /**
     * Filter, which Webinar to fetch.
     */
    where?: WebinarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Webinars to fetch.
     */
    orderBy?: WebinarOrderByWithRelationInput | WebinarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Webinars.
     */
    cursor?: WebinarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Webinars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Webinars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Webinars.
     */
    distinct?: WebinarScalarFieldEnum | WebinarScalarFieldEnum[]
  }

  /**
   * Webinar findFirstOrThrow
   */
  export type WebinarFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Webinar
     */
    select?: WebinarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Webinar
     */
    omit?: WebinarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebinarInclude<ExtArgs> | null
    /**
     * Filter, which Webinar to fetch.
     */
    where?: WebinarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Webinars to fetch.
     */
    orderBy?: WebinarOrderByWithRelationInput | WebinarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Webinars.
     */
    cursor?: WebinarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Webinars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Webinars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Webinars.
     */
    distinct?: WebinarScalarFieldEnum | WebinarScalarFieldEnum[]
  }

  /**
   * Webinar findMany
   */
  export type WebinarFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Webinar
     */
    select?: WebinarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Webinar
     */
    omit?: WebinarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebinarInclude<ExtArgs> | null
    /**
     * Filter, which Webinars to fetch.
     */
    where?: WebinarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Webinars to fetch.
     */
    orderBy?: WebinarOrderByWithRelationInput | WebinarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Webinars.
     */
    cursor?: WebinarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Webinars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Webinars.
     */
    skip?: number
    distinct?: WebinarScalarFieldEnum | WebinarScalarFieldEnum[]
  }

  /**
   * Webinar create
   */
  export type WebinarCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Webinar
     */
    select?: WebinarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Webinar
     */
    omit?: WebinarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebinarInclude<ExtArgs> | null
    /**
     * The data needed to create a Webinar.
     */
    data: XOR<WebinarCreateInput, WebinarUncheckedCreateInput>
  }

  /**
   * Webinar createMany
   */
  export type WebinarCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Webinars.
     */
    data: WebinarCreateManyInput | WebinarCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Webinar createManyAndReturn
   */
  export type WebinarCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Webinar
     */
    select?: WebinarSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Webinar
     */
    omit?: WebinarOmit<ExtArgs> | null
    /**
     * The data used to create many Webinars.
     */
    data: WebinarCreateManyInput | WebinarCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebinarIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Webinar update
   */
  export type WebinarUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Webinar
     */
    select?: WebinarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Webinar
     */
    omit?: WebinarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebinarInclude<ExtArgs> | null
    /**
     * The data needed to update a Webinar.
     */
    data: XOR<WebinarUpdateInput, WebinarUncheckedUpdateInput>
    /**
     * Choose, which Webinar to update.
     */
    where: WebinarWhereUniqueInput
  }

  /**
   * Webinar updateMany
   */
  export type WebinarUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Webinars.
     */
    data: XOR<WebinarUpdateManyMutationInput, WebinarUncheckedUpdateManyInput>
    /**
     * Filter which Webinars to update
     */
    where?: WebinarWhereInput
    /**
     * Limit how many Webinars to update.
     */
    limit?: number
  }

  /**
   * Webinar updateManyAndReturn
   */
  export type WebinarUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Webinar
     */
    select?: WebinarSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Webinar
     */
    omit?: WebinarOmit<ExtArgs> | null
    /**
     * The data used to update Webinars.
     */
    data: XOR<WebinarUpdateManyMutationInput, WebinarUncheckedUpdateManyInput>
    /**
     * Filter which Webinars to update
     */
    where?: WebinarWhereInput
    /**
     * Limit how many Webinars to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebinarIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Webinar upsert
   */
  export type WebinarUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Webinar
     */
    select?: WebinarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Webinar
     */
    omit?: WebinarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebinarInclude<ExtArgs> | null
    /**
     * The filter to search for the Webinar to update in case it exists.
     */
    where: WebinarWhereUniqueInput
    /**
     * In case the Webinar found by the `where` argument doesn't exist, create a new Webinar with this data.
     */
    create: XOR<WebinarCreateInput, WebinarUncheckedCreateInput>
    /**
     * In case the Webinar was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WebinarUpdateInput, WebinarUncheckedUpdateInput>
  }

  /**
   * Webinar delete
   */
  export type WebinarDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Webinar
     */
    select?: WebinarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Webinar
     */
    omit?: WebinarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebinarInclude<ExtArgs> | null
    /**
     * Filter which Webinar to delete.
     */
    where: WebinarWhereUniqueInput
  }

  /**
   * Webinar deleteMany
   */
  export type WebinarDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Webinars to delete
     */
    where?: WebinarWhereInput
    /**
     * Limit how many Webinars to delete.
     */
    limit?: number
  }

  /**
   * Webinar.attendances
   */
  export type Webinar$attendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    where?: AttendanceWhereInput
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    cursor?: AttendanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Webinar.Attendee
   */
  export type Webinar$AttendeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendee
     */
    select?: AttendeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendee
     */
    omit?: AttendeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendeeInclude<ExtArgs> | null
    where?: AttendeeWhereInput
  }

  /**
   * Webinar without action
   */
  export type WebinarDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Webinar
     */
    select?: WebinarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Webinar
     */
    omit?: WebinarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebinarInclude<ExtArgs> | null
  }


  /**
   * Model Attendee
   */

  export type AggregateAttendee = {
    _count: AttendeeCountAggregateOutputType | null
    _min: AttendeeMinAggregateOutputType | null
    _max: AttendeeMaxAggregateOutputType | null
  }

  export type AttendeeMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    callStatus: $Enums.CallStatusEnum | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AttendeeMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    callStatus: $Enums.CallStatusEnum | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AttendeeCountAggregateOutputType = {
    id: number
    email: number
    name: number
    callStatus: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AttendeeMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    callStatus?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AttendeeMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    callStatus?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AttendeeCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    callStatus?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AttendeeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attendee to aggregate.
     */
    where?: AttendeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendees to fetch.
     */
    orderBy?: AttendeeOrderByWithRelationInput | AttendeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttendeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Attendees
    **/
    _count?: true | AttendeeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttendeeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttendeeMaxAggregateInputType
  }

  export type GetAttendeeAggregateType<T extends AttendeeAggregateArgs> = {
        [P in keyof T & keyof AggregateAttendee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttendee[P]>
      : GetScalarType<T[P], AggregateAttendee[P]>
  }




  export type AttendeeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendeeWhereInput
    orderBy?: AttendeeOrderByWithAggregationInput | AttendeeOrderByWithAggregationInput[]
    by: AttendeeScalarFieldEnum[] | AttendeeScalarFieldEnum
    having?: AttendeeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttendeeCountAggregateInputType | true
    _min?: AttendeeMinAggregateInputType
    _max?: AttendeeMaxAggregateInputType
  }

  export type AttendeeGroupByOutputType = {
    id: string
    email: string
    name: string
    callStatus: $Enums.CallStatusEnum
    createdAt: Date
    updatedAt: Date
    _count: AttendeeCountAggregateOutputType | null
    _min: AttendeeMinAggregateOutputType | null
    _max: AttendeeMaxAggregateOutputType | null
  }

  type GetAttendeeGroupByPayload<T extends AttendeeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttendeeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttendeeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttendeeGroupByOutputType[P]>
            : GetScalarType<T[P], AttendeeGroupByOutputType[P]>
        }
      >
    >


  export type AttendeeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    callStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Attendance?: boolean | Attendee$AttendanceArgs<ExtArgs>
    Webinar?: boolean | Attendee$WebinarArgs<ExtArgs>
    _count?: boolean | AttendeeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendee"]>

  export type AttendeeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    callStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["attendee"]>

  export type AttendeeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    callStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["attendee"]>

  export type AttendeeSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    callStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AttendeeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "callStatus" | "createdAt" | "updatedAt", ExtArgs["result"]["attendee"]>
  export type AttendeeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Attendance?: boolean | Attendee$AttendanceArgs<ExtArgs>
    Webinar?: boolean | Attendee$WebinarArgs<ExtArgs>
    _count?: boolean | AttendeeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AttendeeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AttendeeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AttendeePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Attendee"
    objects: {
      Attendance: Prisma.$AttendancePayload<ExtArgs>[]
      Webinar: Prisma.$WebinarPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string
      callStatus: $Enums.CallStatusEnum
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["attendee"]>
    composites: {}
  }

  type AttendeeGetPayload<S extends boolean | null | undefined | AttendeeDefaultArgs> = $Result.GetResult<Prisma.$AttendeePayload, S>

  type AttendeeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AttendeeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AttendeeCountAggregateInputType | true
    }

  export interface AttendeeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Attendee'], meta: { name: 'Attendee' } }
    /**
     * Find zero or one Attendee that matches the filter.
     * @param {AttendeeFindUniqueArgs} args - Arguments to find a Attendee
     * @example
     * // Get one Attendee
     * const attendee = await prisma.attendee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AttendeeFindUniqueArgs>(args: SelectSubset<T, AttendeeFindUniqueArgs<ExtArgs>>): Prisma__AttendeeClient<$Result.GetResult<Prisma.$AttendeePayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Attendee that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AttendeeFindUniqueOrThrowArgs} args - Arguments to find a Attendee
     * @example
     * // Get one Attendee
     * const attendee = await prisma.attendee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AttendeeFindUniqueOrThrowArgs>(args: SelectSubset<T, AttendeeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AttendeeClient<$Result.GetResult<Prisma.$AttendeePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Attendee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendeeFindFirstArgs} args - Arguments to find a Attendee
     * @example
     * // Get one Attendee
     * const attendee = await prisma.attendee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AttendeeFindFirstArgs>(args?: SelectSubset<T, AttendeeFindFirstArgs<ExtArgs>>): Prisma__AttendeeClient<$Result.GetResult<Prisma.$AttendeePayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Attendee that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendeeFindFirstOrThrowArgs} args - Arguments to find a Attendee
     * @example
     * // Get one Attendee
     * const attendee = await prisma.attendee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AttendeeFindFirstOrThrowArgs>(args?: SelectSubset<T, AttendeeFindFirstOrThrowArgs<ExtArgs>>): Prisma__AttendeeClient<$Result.GetResult<Prisma.$AttendeePayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Attendees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendeeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Attendees
     * const attendees = await prisma.attendee.findMany()
     * 
     * // Get first 10 Attendees
     * const attendees = await prisma.attendee.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const attendeeWithIdOnly = await prisma.attendee.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AttendeeFindManyArgs>(args?: SelectSubset<T, AttendeeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendeePayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Attendee.
     * @param {AttendeeCreateArgs} args - Arguments to create a Attendee.
     * @example
     * // Create one Attendee
     * const Attendee = await prisma.attendee.create({
     *   data: {
     *     // ... data to create a Attendee
     *   }
     * })
     * 
     */
    create<T extends AttendeeCreateArgs>(args: SelectSubset<T, AttendeeCreateArgs<ExtArgs>>): Prisma__AttendeeClient<$Result.GetResult<Prisma.$AttendeePayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Attendees.
     * @param {AttendeeCreateManyArgs} args - Arguments to create many Attendees.
     * @example
     * // Create many Attendees
     * const attendee = await prisma.attendee.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AttendeeCreateManyArgs>(args?: SelectSubset<T, AttendeeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Attendees and returns the data saved in the database.
     * @param {AttendeeCreateManyAndReturnArgs} args - Arguments to create many Attendees.
     * @example
     * // Create many Attendees
     * const attendee = await prisma.attendee.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Attendees and only return the `id`
     * const attendeeWithIdOnly = await prisma.attendee.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AttendeeCreateManyAndReturnArgs>(args?: SelectSubset<T, AttendeeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendeePayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Attendee.
     * @param {AttendeeDeleteArgs} args - Arguments to delete one Attendee.
     * @example
     * // Delete one Attendee
     * const Attendee = await prisma.attendee.delete({
     *   where: {
     *     // ... filter to delete one Attendee
     *   }
     * })
     * 
     */
    delete<T extends AttendeeDeleteArgs>(args: SelectSubset<T, AttendeeDeleteArgs<ExtArgs>>): Prisma__AttendeeClient<$Result.GetResult<Prisma.$AttendeePayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Attendee.
     * @param {AttendeeUpdateArgs} args - Arguments to update one Attendee.
     * @example
     * // Update one Attendee
     * const attendee = await prisma.attendee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AttendeeUpdateArgs>(args: SelectSubset<T, AttendeeUpdateArgs<ExtArgs>>): Prisma__AttendeeClient<$Result.GetResult<Prisma.$AttendeePayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Attendees.
     * @param {AttendeeDeleteManyArgs} args - Arguments to filter Attendees to delete.
     * @example
     * // Delete a few Attendees
     * const { count } = await prisma.attendee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AttendeeDeleteManyArgs>(args?: SelectSubset<T, AttendeeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attendees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendeeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Attendees
     * const attendee = await prisma.attendee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AttendeeUpdateManyArgs>(args: SelectSubset<T, AttendeeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attendees and returns the data updated in the database.
     * @param {AttendeeUpdateManyAndReturnArgs} args - Arguments to update many Attendees.
     * @example
     * // Update many Attendees
     * const attendee = await prisma.attendee.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Attendees and only return the `id`
     * const attendeeWithIdOnly = await prisma.attendee.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AttendeeUpdateManyAndReturnArgs>(args: SelectSubset<T, AttendeeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendeePayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Attendee.
     * @param {AttendeeUpsertArgs} args - Arguments to update or create a Attendee.
     * @example
     * // Update or create a Attendee
     * const attendee = await prisma.attendee.upsert({
     *   create: {
     *     // ... data to create a Attendee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Attendee we want to update
     *   }
     * })
     */
    upsert<T extends AttendeeUpsertArgs>(args: SelectSubset<T, AttendeeUpsertArgs<ExtArgs>>): Prisma__AttendeeClient<$Result.GetResult<Prisma.$AttendeePayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Attendees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendeeCountArgs} args - Arguments to filter Attendees to count.
     * @example
     * // Count the number of Attendees
     * const count = await prisma.attendee.count({
     *   where: {
     *     // ... the filter for the Attendees we want to count
     *   }
     * })
    **/
    count<T extends AttendeeCountArgs>(
      args?: Subset<T, AttendeeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttendeeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Attendee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendeeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AttendeeAggregateArgs>(args: Subset<T, AttendeeAggregateArgs>): Prisma.PrismaPromise<GetAttendeeAggregateType<T>>

    /**
     * Group by Attendee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendeeGroupByArgs} args - Group by arguments.
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
      T extends AttendeeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttendeeGroupByArgs['orderBy'] }
        : { orderBy?: AttendeeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AttendeeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttendeeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Attendee model
   */
  readonly fields: AttendeeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Attendee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AttendeeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Attendance<T extends Attendee$AttendanceArgs<ExtArgs> = {}>(args?: Subset<T, Attendee$AttendanceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    Webinar<T extends Attendee$WebinarArgs<ExtArgs> = {}>(args?: Subset<T, Attendee$WebinarArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebinarPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
   * Fields of the Attendee model
   */ 
  interface AttendeeFieldRefs {
    readonly id: FieldRef<"Attendee", 'String'>
    readonly email: FieldRef<"Attendee", 'String'>
    readonly name: FieldRef<"Attendee", 'String'>
    readonly callStatus: FieldRef<"Attendee", 'CallStatusEnum'>
    readonly createdAt: FieldRef<"Attendee", 'DateTime'>
    readonly updatedAt: FieldRef<"Attendee", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Attendee findUnique
   */
  export type AttendeeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendee
     */
    select?: AttendeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendee
     */
    omit?: AttendeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendeeInclude<ExtArgs> | null
    /**
     * Filter, which Attendee to fetch.
     */
    where: AttendeeWhereUniqueInput
  }

  /**
   * Attendee findUniqueOrThrow
   */
  export type AttendeeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendee
     */
    select?: AttendeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendee
     */
    omit?: AttendeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendeeInclude<ExtArgs> | null
    /**
     * Filter, which Attendee to fetch.
     */
    where: AttendeeWhereUniqueInput
  }

  /**
   * Attendee findFirst
   */
  export type AttendeeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendee
     */
    select?: AttendeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendee
     */
    omit?: AttendeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendeeInclude<ExtArgs> | null
    /**
     * Filter, which Attendee to fetch.
     */
    where?: AttendeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendees to fetch.
     */
    orderBy?: AttendeeOrderByWithRelationInput | AttendeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attendees.
     */
    cursor?: AttendeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attendees.
     */
    distinct?: AttendeeScalarFieldEnum | AttendeeScalarFieldEnum[]
  }

  /**
   * Attendee findFirstOrThrow
   */
  export type AttendeeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendee
     */
    select?: AttendeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendee
     */
    omit?: AttendeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendeeInclude<ExtArgs> | null
    /**
     * Filter, which Attendee to fetch.
     */
    where?: AttendeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendees to fetch.
     */
    orderBy?: AttendeeOrderByWithRelationInput | AttendeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attendees.
     */
    cursor?: AttendeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attendees.
     */
    distinct?: AttendeeScalarFieldEnum | AttendeeScalarFieldEnum[]
  }

  /**
   * Attendee findMany
   */
  export type AttendeeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendee
     */
    select?: AttendeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendee
     */
    omit?: AttendeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendeeInclude<ExtArgs> | null
    /**
     * Filter, which Attendees to fetch.
     */
    where?: AttendeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendees to fetch.
     */
    orderBy?: AttendeeOrderByWithRelationInput | AttendeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Attendees.
     */
    cursor?: AttendeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendees.
     */
    skip?: number
    distinct?: AttendeeScalarFieldEnum | AttendeeScalarFieldEnum[]
  }

  /**
   * Attendee create
   */
  export type AttendeeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendee
     */
    select?: AttendeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendee
     */
    omit?: AttendeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendeeInclude<ExtArgs> | null
    /**
     * The data needed to create a Attendee.
     */
    data: XOR<AttendeeCreateInput, AttendeeUncheckedCreateInput>
  }

  /**
   * Attendee createMany
   */
  export type AttendeeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Attendees.
     */
    data: AttendeeCreateManyInput | AttendeeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Attendee createManyAndReturn
   */
  export type AttendeeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendee
     */
    select?: AttendeeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Attendee
     */
    omit?: AttendeeOmit<ExtArgs> | null
    /**
     * The data used to create many Attendees.
     */
    data: AttendeeCreateManyInput | AttendeeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Attendee update
   */
  export type AttendeeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendee
     */
    select?: AttendeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendee
     */
    omit?: AttendeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendeeInclude<ExtArgs> | null
    /**
     * The data needed to update a Attendee.
     */
    data: XOR<AttendeeUpdateInput, AttendeeUncheckedUpdateInput>
    /**
     * Choose, which Attendee to update.
     */
    where: AttendeeWhereUniqueInput
  }

  /**
   * Attendee updateMany
   */
  export type AttendeeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Attendees.
     */
    data: XOR<AttendeeUpdateManyMutationInput, AttendeeUncheckedUpdateManyInput>
    /**
     * Filter which Attendees to update
     */
    where?: AttendeeWhereInput
    /**
     * Limit how many Attendees to update.
     */
    limit?: number
  }

  /**
   * Attendee updateManyAndReturn
   */
  export type AttendeeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendee
     */
    select?: AttendeeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Attendee
     */
    omit?: AttendeeOmit<ExtArgs> | null
    /**
     * The data used to update Attendees.
     */
    data: XOR<AttendeeUpdateManyMutationInput, AttendeeUncheckedUpdateManyInput>
    /**
     * Filter which Attendees to update
     */
    where?: AttendeeWhereInput
    /**
     * Limit how many Attendees to update.
     */
    limit?: number
  }

  /**
   * Attendee upsert
   */
  export type AttendeeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendee
     */
    select?: AttendeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendee
     */
    omit?: AttendeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendeeInclude<ExtArgs> | null
    /**
     * The filter to search for the Attendee to update in case it exists.
     */
    where: AttendeeWhereUniqueInput
    /**
     * In case the Attendee found by the `where` argument doesn't exist, create a new Attendee with this data.
     */
    create: XOR<AttendeeCreateInput, AttendeeUncheckedCreateInput>
    /**
     * In case the Attendee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttendeeUpdateInput, AttendeeUncheckedUpdateInput>
  }

  /**
   * Attendee delete
   */
  export type AttendeeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendee
     */
    select?: AttendeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendee
     */
    omit?: AttendeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendeeInclude<ExtArgs> | null
    /**
     * Filter which Attendee to delete.
     */
    where: AttendeeWhereUniqueInput
  }

  /**
   * Attendee deleteMany
   */
  export type AttendeeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attendees to delete
     */
    where?: AttendeeWhereInput
    /**
     * Limit how many Attendees to delete.
     */
    limit?: number
  }

  /**
   * Attendee.Attendance
   */
  export type Attendee$AttendanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    where?: AttendanceWhereInput
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    cursor?: AttendanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendee.Webinar
   */
  export type Attendee$WebinarArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Webinar
     */
    select?: WebinarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Webinar
     */
    omit?: WebinarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebinarInclude<ExtArgs> | null
    where?: WebinarWhereInput
    orderBy?: WebinarOrderByWithRelationInput | WebinarOrderByWithRelationInput[]
    cursor?: WebinarWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WebinarScalarFieldEnum | WebinarScalarFieldEnum[]
  }

  /**
   * Attendee without action
   */
  export type AttendeeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendee
     */
    select?: AttendeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendee
     */
    omit?: AttendeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendeeInclude<ExtArgs> | null
  }


  /**
   * Model Attendance
   */

  export type AggregateAttendance = {
    _count: AttendanceCountAggregateOutputType | null
    _min: AttendanceMinAggregateOutputType | null
    _max: AttendanceMaxAggregateOutputType | null
  }

  export type AttendanceMinAggregateOutputType = {
    id: string | null
    webinarId: string | null
    joinedAt: Date | null
    leftAt: Date | null
    attendedType: $Enums.AttendedTypeEnum | null
    createdAt: Date | null
    updatedAt: Date | null
    attendeeId: string | null
    userId: string | null
  }

  export type AttendanceMaxAggregateOutputType = {
    id: string | null
    webinarId: string | null
    joinedAt: Date | null
    leftAt: Date | null
    attendedType: $Enums.AttendedTypeEnum | null
    createdAt: Date | null
    updatedAt: Date | null
    attendeeId: string | null
    userId: string | null
  }

  export type AttendanceCountAggregateOutputType = {
    id: number
    webinarId: number
    joinedAt: number
    leftAt: number
    attendedType: number
    createdAt: number
    updatedAt: number
    attendeeId: number
    userId: number
    _all: number
  }


  export type AttendanceMinAggregateInputType = {
    id?: true
    webinarId?: true
    joinedAt?: true
    leftAt?: true
    attendedType?: true
    createdAt?: true
    updatedAt?: true
    attendeeId?: true
    userId?: true
  }

  export type AttendanceMaxAggregateInputType = {
    id?: true
    webinarId?: true
    joinedAt?: true
    leftAt?: true
    attendedType?: true
    createdAt?: true
    updatedAt?: true
    attendeeId?: true
    userId?: true
  }

  export type AttendanceCountAggregateInputType = {
    id?: true
    webinarId?: true
    joinedAt?: true
    leftAt?: true
    attendedType?: true
    createdAt?: true
    updatedAt?: true
    attendeeId?: true
    userId?: true
    _all?: true
  }

  export type AttendanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attendance to aggregate.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Attendances
    **/
    _count?: true | AttendanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttendanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttendanceMaxAggregateInputType
  }

  export type GetAttendanceAggregateType<T extends AttendanceAggregateArgs> = {
        [P in keyof T & keyof AggregateAttendance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttendance[P]>
      : GetScalarType<T[P], AggregateAttendance[P]>
  }




  export type AttendanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceWhereInput
    orderBy?: AttendanceOrderByWithAggregationInput | AttendanceOrderByWithAggregationInput[]
    by: AttendanceScalarFieldEnum[] | AttendanceScalarFieldEnum
    having?: AttendanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttendanceCountAggregateInputType | true
    _min?: AttendanceMinAggregateInputType
    _max?: AttendanceMaxAggregateInputType
  }

  export type AttendanceGroupByOutputType = {
    id: string
    webinarId: string
    joinedAt: Date
    leftAt: Date | null
    attendedType: $Enums.AttendedTypeEnum
    createdAt: Date
    updatedAt: Date
    attendeeId: string
    userId: string | null
    _count: AttendanceCountAggregateOutputType | null
    _min: AttendanceMinAggregateOutputType | null
    _max: AttendanceMaxAggregateOutputType | null
  }

  type GetAttendanceGroupByPayload<T extends AttendanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttendanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttendanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttendanceGroupByOutputType[P]>
            : GetScalarType<T[P], AttendanceGroupByOutputType[P]>
        }
      >
    >


  export type AttendanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    webinarId?: boolean
    joinedAt?: boolean
    leftAt?: boolean
    attendedType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    attendeeId?: boolean
    userId?: boolean
    user?: boolean | AttendeeDefaultArgs<ExtArgs>
    webinar?: boolean | WebinarDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendance"]>

  export type AttendanceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    webinarId?: boolean
    joinedAt?: boolean
    leftAt?: boolean
    attendedType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    attendeeId?: boolean
    userId?: boolean
    user?: boolean | AttendeeDefaultArgs<ExtArgs>
    webinar?: boolean | WebinarDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendance"]>

  export type AttendanceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    webinarId?: boolean
    joinedAt?: boolean
    leftAt?: boolean
    attendedType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    attendeeId?: boolean
    userId?: boolean
    user?: boolean | AttendeeDefaultArgs<ExtArgs>
    webinar?: boolean | WebinarDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendance"]>

  export type AttendanceSelectScalar = {
    id?: boolean
    webinarId?: boolean
    joinedAt?: boolean
    leftAt?: boolean
    attendedType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    attendeeId?: boolean
    userId?: boolean
  }

  export type AttendanceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "webinarId" | "joinedAt" | "leftAt" | "attendedType" | "createdAt" | "updatedAt" | "attendeeId" | "userId", ExtArgs["result"]["attendance"]>
  export type AttendanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | AttendeeDefaultArgs<ExtArgs>
    webinar?: boolean | WebinarDefaultArgs<ExtArgs>
  }
  export type AttendanceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | AttendeeDefaultArgs<ExtArgs>
    webinar?: boolean | WebinarDefaultArgs<ExtArgs>
  }
  export type AttendanceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | AttendeeDefaultArgs<ExtArgs>
    webinar?: boolean | WebinarDefaultArgs<ExtArgs>
  }

  export type $AttendancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Attendance"
    objects: {
      user: Prisma.$AttendeePayload<ExtArgs>
      webinar: Prisma.$WebinarPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      webinarId: string
      joinedAt: Date
      leftAt: Date | null
      attendedType: $Enums.AttendedTypeEnum
      createdAt: Date
      updatedAt: Date
      attendeeId: string
      userId: string | null
    }, ExtArgs["result"]["attendance"]>
    composites: {}
  }

  type AttendanceGetPayload<S extends boolean | null | undefined | AttendanceDefaultArgs> = $Result.GetResult<Prisma.$AttendancePayload, S>

  type AttendanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AttendanceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AttendanceCountAggregateInputType | true
    }

  export interface AttendanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Attendance'], meta: { name: 'Attendance' } }
    /**
     * Find zero or one Attendance that matches the filter.
     * @param {AttendanceFindUniqueArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AttendanceFindUniqueArgs>(args: SelectSubset<T, AttendanceFindUniqueArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Attendance that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AttendanceFindUniqueOrThrowArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AttendanceFindUniqueOrThrowArgs>(args: SelectSubset<T, AttendanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Attendance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindFirstArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AttendanceFindFirstArgs>(args?: SelectSubset<T, AttendanceFindFirstArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Attendance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindFirstOrThrowArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AttendanceFindFirstOrThrowArgs>(args?: SelectSubset<T, AttendanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Attendances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Attendances
     * const attendances = await prisma.attendance.findMany()
     * 
     * // Get first 10 Attendances
     * const attendances = await prisma.attendance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const attendanceWithIdOnly = await prisma.attendance.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AttendanceFindManyArgs>(args?: SelectSubset<T, AttendanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Attendance.
     * @param {AttendanceCreateArgs} args - Arguments to create a Attendance.
     * @example
     * // Create one Attendance
     * const Attendance = await prisma.attendance.create({
     *   data: {
     *     // ... data to create a Attendance
     *   }
     * })
     * 
     */
    create<T extends AttendanceCreateArgs>(args: SelectSubset<T, AttendanceCreateArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Attendances.
     * @param {AttendanceCreateManyArgs} args - Arguments to create many Attendances.
     * @example
     * // Create many Attendances
     * const attendance = await prisma.attendance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AttendanceCreateManyArgs>(args?: SelectSubset<T, AttendanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Attendances and returns the data saved in the database.
     * @param {AttendanceCreateManyAndReturnArgs} args - Arguments to create many Attendances.
     * @example
     * // Create many Attendances
     * const attendance = await prisma.attendance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Attendances and only return the `id`
     * const attendanceWithIdOnly = await prisma.attendance.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AttendanceCreateManyAndReturnArgs>(args?: SelectSubset<T, AttendanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Attendance.
     * @param {AttendanceDeleteArgs} args - Arguments to delete one Attendance.
     * @example
     * // Delete one Attendance
     * const Attendance = await prisma.attendance.delete({
     *   where: {
     *     // ... filter to delete one Attendance
     *   }
     * })
     * 
     */
    delete<T extends AttendanceDeleteArgs>(args: SelectSubset<T, AttendanceDeleteArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Attendance.
     * @param {AttendanceUpdateArgs} args - Arguments to update one Attendance.
     * @example
     * // Update one Attendance
     * const attendance = await prisma.attendance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AttendanceUpdateArgs>(args: SelectSubset<T, AttendanceUpdateArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Attendances.
     * @param {AttendanceDeleteManyArgs} args - Arguments to filter Attendances to delete.
     * @example
     * // Delete a few Attendances
     * const { count } = await prisma.attendance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AttendanceDeleteManyArgs>(args?: SelectSubset<T, AttendanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Attendances
     * const attendance = await prisma.attendance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AttendanceUpdateManyArgs>(args: SelectSubset<T, AttendanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attendances and returns the data updated in the database.
     * @param {AttendanceUpdateManyAndReturnArgs} args - Arguments to update many Attendances.
     * @example
     * // Update many Attendances
     * const attendance = await prisma.attendance.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Attendances and only return the `id`
     * const attendanceWithIdOnly = await prisma.attendance.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AttendanceUpdateManyAndReturnArgs>(args: SelectSubset<T, AttendanceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Attendance.
     * @param {AttendanceUpsertArgs} args - Arguments to update or create a Attendance.
     * @example
     * // Update or create a Attendance
     * const attendance = await prisma.attendance.upsert({
     *   create: {
     *     // ... data to create a Attendance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Attendance we want to update
     *   }
     * })
     */
    upsert<T extends AttendanceUpsertArgs>(args: SelectSubset<T, AttendanceUpsertArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Attendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceCountArgs} args - Arguments to filter Attendances to count.
     * @example
     * // Count the number of Attendances
     * const count = await prisma.attendance.count({
     *   where: {
     *     // ... the filter for the Attendances we want to count
     *   }
     * })
    **/
    count<T extends AttendanceCountArgs>(
      args?: Subset<T, AttendanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttendanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Attendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AttendanceAggregateArgs>(args: Subset<T, AttendanceAggregateArgs>): Prisma.PrismaPromise<GetAttendanceAggregateType<T>>

    /**
     * Group by Attendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceGroupByArgs} args - Group by arguments.
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
      T extends AttendanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttendanceGroupByArgs['orderBy'] }
        : { orderBy?: AttendanceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AttendanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttendanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Attendance model
   */
  readonly fields: AttendanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Attendance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AttendanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends AttendeeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AttendeeDefaultArgs<ExtArgs>>): Prisma__AttendeeClient<$Result.GetResult<Prisma.$AttendeePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    webinar<T extends WebinarDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WebinarDefaultArgs<ExtArgs>>): Prisma__WebinarClient<$Result.GetResult<Prisma.$WebinarPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
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
   * Fields of the Attendance model
   */ 
  interface AttendanceFieldRefs {
    readonly id: FieldRef<"Attendance", 'String'>
    readonly webinarId: FieldRef<"Attendance", 'String'>
    readonly joinedAt: FieldRef<"Attendance", 'DateTime'>
    readonly leftAt: FieldRef<"Attendance", 'DateTime'>
    readonly attendedType: FieldRef<"Attendance", 'AttendedTypeEnum'>
    readonly createdAt: FieldRef<"Attendance", 'DateTime'>
    readonly updatedAt: FieldRef<"Attendance", 'DateTime'>
    readonly attendeeId: FieldRef<"Attendance", 'String'>
    readonly userId: FieldRef<"Attendance", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Attendance findUnique
   */
  export type AttendanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance findUniqueOrThrow
   */
  export type AttendanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance findFirst
   */
  export type AttendanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attendances.
     */
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendance findFirstOrThrow
   */
  export type AttendanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attendances.
     */
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendance findMany
   */
  export type AttendanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendances to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendance create
   */
  export type AttendanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * The data needed to create a Attendance.
     */
    data: XOR<AttendanceCreateInput, AttendanceUncheckedCreateInput>
  }

  /**
   * Attendance createMany
   */
  export type AttendanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Attendances.
     */
    data: AttendanceCreateManyInput | AttendanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Attendance createManyAndReturn
   */
  export type AttendanceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * The data used to create many Attendances.
     */
    data: AttendanceCreateManyInput | AttendanceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Attendance update
   */
  export type AttendanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * The data needed to update a Attendance.
     */
    data: XOR<AttendanceUpdateInput, AttendanceUncheckedUpdateInput>
    /**
     * Choose, which Attendance to update.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance updateMany
   */
  export type AttendanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Attendances.
     */
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyInput>
    /**
     * Filter which Attendances to update
     */
    where?: AttendanceWhereInput
    /**
     * Limit how many Attendances to update.
     */
    limit?: number
  }

  /**
   * Attendance updateManyAndReturn
   */
  export type AttendanceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * The data used to update Attendances.
     */
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyInput>
    /**
     * Filter which Attendances to update
     */
    where?: AttendanceWhereInput
    /**
     * Limit how many Attendances to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Attendance upsert
   */
  export type AttendanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * The filter to search for the Attendance to update in case it exists.
     */
    where: AttendanceWhereUniqueInput
    /**
     * In case the Attendance found by the `where` argument doesn't exist, create a new Attendance with this data.
     */
    create: XOR<AttendanceCreateInput, AttendanceUncheckedCreateInput>
    /**
     * In case the Attendance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttendanceUpdateInput, AttendanceUncheckedUpdateInput>
  }

  /**
   * Attendance delete
   */
  export type AttendanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter which Attendance to delete.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance deleteMany
   */
  export type AttendanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attendances to delete
     */
    where?: AttendanceWhereInput
    /**
     * Limit how many Attendances to delete.
     */
    limit?: number
  }

  /**
   * Attendance without action
   */
  export type AttendanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
  }


  /**
   * Model AiAgents
   */

  export type AggregateAiAgents = {
    _count: AiAgentsCountAggregateOutputType | null
    _min: AiAgentsMinAggregateOutputType | null
    _max: AiAgentsMaxAggregateOutputType | null
  }

  export type AiAgentsMinAggregateOutputType = {
    id: string | null
    name: string | null
    firstMessage: string | null
    prompt: string | null
    model: string | null
    provider: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AiAgentsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    firstMessage: string | null
    prompt: string | null
    model: string | null
    provider: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AiAgentsCountAggregateOutputType = {
    id: number
    name: number
    firstMessage: number
    prompt: number
    model: number
    provider: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AiAgentsMinAggregateInputType = {
    id?: true
    name?: true
    firstMessage?: true
    prompt?: true
    model?: true
    provider?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AiAgentsMaxAggregateInputType = {
    id?: true
    name?: true
    firstMessage?: true
    prompt?: true
    model?: true
    provider?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AiAgentsCountAggregateInputType = {
    id?: true
    name?: true
    firstMessage?: true
    prompt?: true
    model?: true
    provider?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AiAgentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AiAgents to aggregate.
     */
    where?: AiAgentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiAgents to fetch.
     */
    orderBy?: AiAgentsOrderByWithRelationInput | AiAgentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AiAgentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiAgents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiAgents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AiAgents
    **/
    _count?: true | AiAgentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AiAgentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AiAgentsMaxAggregateInputType
  }

  export type GetAiAgentsAggregateType<T extends AiAgentsAggregateArgs> = {
        [P in keyof T & keyof AggregateAiAgents]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAiAgents[P]>
      : GetScalarType<T[P], AggregateAiAgents[P]>
  }




  export type AiAgentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AiAgentsWhereInput
    orderBy?: AiAgentsOrderByWithAggregationInput | AiAgentsOrderByWithAggregationInput[]
    by: AiAgentsScalarFieldEnum[] | AiAgentsScalarFieldEnum
    having?: AiAgentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AiAgentsCountAggregateInputType | true
    _min?: AiAgentsMinAggregateInputType
    _max?: AiAgentsMaxAggregateInputType
  }

  export type AiAgentsGroupByOutputType = {
    id: string
    name: string
    firstMessage: string
    prompt: string
    model: string
    provider: string
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: AiAgentsCountAggregateOutputType | null
    _min: AiAgentsMinAggregateOutputType | null
    _max: AiAgentsMaxAggregateOutputType | null
  }

  type GetAiAgentsGroupByPayload<T extends AiAgentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AiAgentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AiAgentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AiAgentsGroupByOutputType[P]>
            : GetScalarType<T[P], AiAgentsGroupByOutputType[P]>
        }
      >
    >


  export type AiAgentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    firstMessage?: boolean
    prompt?: boolean
    model?: boolean
    provider?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    User?: boolean | AiAgents$UserArgs<ExtArgs>
    _count?: boolean | AiAgentsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aiAgents"]>

  export type AiAgentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    firstMessage?: boolean
    prompt?: boolean
    model?: boolean
    provider?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["aiAgents"]>

  export type AiAgentsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    firstMessage?: boolean
    prompt?: boolean
    model?: boolean
    provider?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["aiAgents"]>

  export type AiAgentsSelectScalar = {
    id?: boolean
    name?: boolean
    firstMessage?: boolean
    prompt?: boolean
    model?: boolean
    provider?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AiAgentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "firstMessage" | "prompt" | "model" | "provider" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["aiAgents"]>
  export type AiAgentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | AiAgents$UserArgs<ExtArgs>
    _count?: boolean | AiAgentsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AiAgentsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AiAgentsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AiAgentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AiAgents"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      firstMessage: string
      prompt: string
      model: string
      provider: string
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["aiAgents"]>
    composites: {}
  }

  type AiAgentsGetPayload<S extends boolean | null | undefined | AiAgentsDefaultArgs> = $Result.GetResult<Prisma.$AiAgentsPayload, S>

  type AiAgentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AiAgentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AiAgentsCountAggregateInputType | true
    }

  export interface AiAgentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AiAgents'], meta: { name: 'AiAgents' } }
    /**
     * Find zero or one AiAgents that matches the filter.
     * @param {AiAgentsFindUniqueArgs} args - Arguments to find a AiAgents
     * @example
     * // Get one AiAgents
     * const aiAgents = await prisma.aiAgents.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AiAgentsFindUniqueArgs>(args: SelectSubset<T, AiAgentsFindUniqueArgs<ExtArgs>>): Prisma__AiAgentsClient<$Result.GetResult<Prisma.$AiAgentsPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one AiAgents that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AiAgentsFindUniqueOrThrowArgs} args - Arguments to find a AiAgents
     * @example
     * // Get one AiAgents
     * const aiAgents = await prisma.aiAgents.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AiAgentsFindUniqueOrThrowArgs>(args: SelectSubset<T, AiAgentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AiAgentsClient<$Result.GetResult<Prisma.$AiAgentsPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first AiAgents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiAgentsFindFirstArgs} args - Arguments to find a AiAgents
     * @example
     * // Get one AiAgents
     * const aiAgents = await prisma.aiAgents.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AiAgentsFindFirstArgs>(args?: SelectSubset<T, AiAgentsFindFirstArgs<ExtArgs>>): Prisma__AiAgentsClient<$Result.GetResult<Prisma.$AiAgentsPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first AiAgents that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiAgentsFindFirstOrThrowArgs} args - Arguments to find a AiAgents
     * @example
     * // Get one AiAgents
     * const aiAgents = await prisma.aiAgents.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AiAgentsFindFirstOrThrowArgs>(args?: SelectSubset<T, AiAgentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__AiAgentsClient<$Result.GetResult<Prisma.$AiAgentsPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more AiAgents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiAgentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AiAgents
     * const aiAgents = await prisma.aiAgents.findMany()
     * 
     * // Get first 10 AiAgents
     * const aiAgents = await prisma.aiAgents.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aiAgentsWithIdOnly = await prisma.aiAgents.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AiAgentsFindManyArgs>(args?: SelectSubset<T, AiAgentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AiAgentsPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a AiAgents.
     * @param {AiAgentsCreateArgs} args - Arguments to create a AiAgents.
     * @example
     * // Create one AiAgents
     * const AiAgents = await prisma.aiAgents.create({
     *   data: {
     *     // ... data to create a AiAgents
     *   }
     * })
     * 
     */
    create<T extends AiAgentsCreateArgs>(args: SelectSubset<T, AiAgentsCreateArgs<ExtArgs>>): Prisma__AiAgentsClient<$Result.GetResult<Prisma.$AiAgentsPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many AiAgents.
     * @param {AiAgentsCreateManyArgs} args - Arguments to create many AiAgents.
     * @example
     * // Create many AiAgents
     * const aiAgents = await prisma.aiAgents.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AiAgentsCreateManyArgs>(args?: SelectSubset<T, AiAgentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AiAgents and returns the data saved in the database.
     * @param {AiAgentsCreateManyAndReturnArgs} args - Arguments to create many AiAgents.
     * @example
     * // Create many AiAgents
     * const aiAgents = await prisma.aiAgents.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AiAgents and only return the `id`
     * const aiAgentsWithIdOnly = await prisma.aiAgents.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AiAgentsCreateManyAndReturnArgs>(args?: SelectSubset<T, AiAgentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AiAgentsPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a AiAgents.
     * @param {AiAgentsDeleteArgs} args - Arguments to delete one AiAgents.
     * @example
     * // Delete one AiAgents
     * const AiAgents = await prisma.aiAgents.delete({
     *   where: {
     *     // ... filter to delete one AiAgents
     *   }
     * })
     * 
     */
    delete<T extends AiAgentsDeleteArgs>(args: SelectSubset<T, AiAgentsDeleteArgs<ExtArgs>>): Prisma__AiAgentsClient<$Result.GetResult<Prisma.$AiAgentsPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one AiAgents.
     * @param {AiAgentsUpdateArgs} args - Arguments to update one AiAgents.
     * @example
     * // Update one AiAgents
     * const aiAgents = await prisma.aiAgents.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AiAgentsUpdateArgs>(args: SelectSubset<T, AiAgentsUpdateArgs<ExtArgs>>): Prisma__AiAgentsClient<$Result.GetResult<Prisma.$AiAgentsPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more AiAgents.
     * @param {AiAgentsDeleteManyArgs} args - Arguments to filter AiAgents to delete.
     * @example
     * // Delete a few AiAgents
     * const { count } = await prisma.aiAgents.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AiAgentsDeleteManyArgs>(args?: SelectSubset<T, AiAgentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AiAgents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiAgentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AiAgents
     * const aiAgents = await prisma.aiAgents.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AiAgentsUpdateManyArgs>(args: SelectSubset<T, AiAgentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AiAgents and returns the data updated in the database.
     * @param {AiAgentsUpdateManyAndReturnArgs} args - Arguments to update many AiAgents.
     * @example
     * // Update many AiAgents
     * const aiAgents = await prisma.aiAgents.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AiAgents and only return the `id`
     * const aiAgentsWithIdOnly = await prisma.aiAgents.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AiAgentsUpdateManyAndReturnArgs>(args: SelectSubset<T, AiAgentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AiAgentsPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one AiAgents.
     * @param {AiAgentsUpsertArgs} args - Arguments to update or create a AiAgents.
     * @example
     * // Update or create a AiAgents
     * const aiAgents = await prisma.aiAgents.upsert({
     *   create: {
     *     // ... data to create a AiAgents
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AiAgents we want to update
     *   }
     * })
     */
    upsert<T extends AiAgentsUpsertArgs>(args: SelectSubset<T, AiAgentsUpsertArgs<ExtArgs>>): Prisma__AiAgentsClient<$Result.GetResult<Prisma.$AiAgentsPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of AiAgents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiAgentsCountArgs} args - Arguments to filter AiAgents to count.
     * @example
     * // Count the number of AiAgents
     * const count = await prisma.aiAgents.count({
     *   where: {
     *     // ... the filter for the AiAgents we want to count
     *   }
     * })
    **/
    count<T extends AiAgentsCountArgs>(
      args?: Subset<T, AiAgentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AiAgentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AiAgents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiAgentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AiAgentsAggregateArgs>(args: Subset<T, AiAgentsAggregateArgs>): Prisma.PrismaPromise<GetAiAgentsAggregateType<T>>

    /**
     * Group by AiAgents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiAgentsGroupByArgs} args - Group by arguments.
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
      T extends AiAgentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AiAgentsGroupByArgs['orderBy'] }
        : { orderBy?: AiAgentsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AiAgentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAiAgentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AiAgents model
   */
  readonly fields: AiAgentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AiAgents.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AiAgentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends AiAgents$UserArgs<ExtArgs> = {}>(args?: Subset<T, AiAgents$UserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
   * Fields of the AiAgents model
   */ 
  interface AiAgentsFieldRefs {
    readonly id: FieldRef<"AiAgents", 'String'>
    readonly name: FieldRef<"AiAgents", 'String'>
    readonly firstMessage: FieldRef<"AiAgents", 'String'>
    readonly prompt: FieldRef<"AiAgents", 'String'>
    readonly model: FieldRef<"AiAgents", 'String'>
    readonly provider: FieldRef<"AiAgents", 'String'>
    readonly userId: FieldRef<"AiAgents", 'String'>
    readonly createdAt: FieldRef<"AiAgents", 'DateTime'>
    readonly updatedAt: FieldRef<"AiAgents", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AiAgents findUnique
   */
  export type AiAgentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiAgents
     */
    select?: AiAgentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiAgents
     */
    omit?: AiAgentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiAgentsInclude<ExtArgs> | null
    /**
     * Filter, which AiAgents to fetch.
     */
    where: AiAgentsWhereUniqueInput
  }

  /**
   * AiAgents findUniqueOrThrow
   */
  export type AiAgentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiAgents
     */
    select?: AiAgentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiAgents
     */
    omit?: AiAgentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiAgentsInclude<ExtArgs> | null
    /**
     * Filter, which AiAgents to fetch.
     */
    where: AiAgentsWhereUniqueInput
  }

  /**
   * AiAgents findFirst
   */
  export type AiAgentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiAgents
     */
    select?: AiAgentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiAgents
     */
    omit?: AiAgentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiAgentsInclude<ExtArgs> | null
    /**
     * Filter, which AiAgents to fetch.
     */
    where?: AiAgentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiAgents to fetch.
     */
    orderBy?: AiAgentsOrderByWithRelationInput | AiAgentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AiAgents.
     */
    cursor?: AiAgentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiAgents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiAgents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AiAgents.
     */
    distinct?: AiAgentsScalarFieldEnum | AiAgentsScalarFieldEnum[]
  }

  /**
   * AiAgents findFirstOrThrow
   */
  export type AiAgentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiAgents
     */
    select?: AiAgentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiAgents
     */
    omit?: AiAgentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiAgentsInclude<ExtArgs> | null
    /**
     * Filter, which AiAgents to fetch.
     */
    where?: AiAgentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiAgents to fetch.
     */
    orderBy?: AiAgentsOrderByWithRelationInput | AiAgentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AiAgents.
     */
    cursor?: AiAgentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiAgents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiAgents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AiAgents.
     */
    distinct?: AiAgentsScalarFieldEnum | AiAgentsScalarFieldEnum[]
  }

  /**
   * AiAgents findMany
   */
  export type AiAgentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiAgents
     */
    select?: AiAgentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiAgents
     */
    omit?: AiAgentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiAgentsInclude<ExtArgs> | null
    /**
     * Filter, which AiAgents to fetch.
     */
    where?: AiAgentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiAgents to fetch.
     */
    orderBy?: AiAgentsOrderByWithRelationInput | AiAgentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AiAgents.
     */
    cursor?: AiAgentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiAgents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiAgents.
     */
    skip?: number
    distinct?: AiAgentsScalarFieldEnum | AiAgentsScalarFieldEnum[]
  }

  /**
   * AiAgents create
   */
  export type AiAgentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiAgents
     */
    select?: AiAgentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiAgents
     */
    omit?: AiAgentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiAgentsInclude<ExtArgs> | null
    /**
     * The data needed to create a AiAgents.
     */
    data: XOR<AiAgentsCreateInput, AiAgentsUncheckedCreateInput>
  }

  /**
   * AiAgents createMany
   */
  export type AiAgentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AiAgents.
     */
    data: AiAgentsCreateManyInput | AiAgentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AiAgents createManyAndReturn
   */
  export type AiAgentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiAgents
     */
    select?: AiAgentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AiAgents
     */
    omit?: AiAgentsOmit<ExtArgs> | null
    /**
     * The data used to create many AiAgents.
     */
    data: AiAgentsCreateManyInput | AiAgentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AiAgents update
   */
  export type AiAgentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiAgents
     */
    select?: AiAgentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiAgents
     */
    omit?: AiAgentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiAgentsInclude<ExtArgs> | null
    /**
     * The data needed to update a AiAgents.
     */
    data: XOR<AiAgentsUpdateInput, AiAgentsUncheckedUpdateInput>
    /**
     * Choose, which AiAgents to update.
     */
    where: AiAgentsWhereUniqueInput
  }

  /**
   * AiAgents updateMany
   */
  export type AiAgentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AiAgents.
     */
    data: XOR<AiAgentsUpdateManyMutationInput, AiAgentsUncheckedUpdateManyInput>
    /**
     * Filter which AiAgents to update
     */
    where?: AiAgentsWhereInput
    /**
     * Limit how many AiAgents to update.
     */
    limit?: number
  }

  /**
   * AiAgents updateManyAndReturn
   */
  export type AiAgentsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiAgents
     */
    select?: AiAgentsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AiAgents
     */
    omit?: AiAgentsOmit<ExtArgs> | null
    /**
     * The data used to update AiAgents.
     */
    data: XOR<AiAgentsUpdateManyMutationInput, AiAgentsUncheckedUpdateManyInput>
    /**
     * Filter which AiAgents to update
     */
    where?: AiAgentsWhereInput
    /**
     * Limit how many AiAgents to update.
     */
    limit?: number
  }

  /**
   * AiAgents upsert
   */
  export type AiAgentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiAgents
     */
    select?: AiAgentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiAgents
     */
    omit?: AiAgentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiAgentsInclude<ExtArgs> | null
    /**
     * The filter to search for the AiAgents to update in case it exists.
     */
    where: AiAgentsWhereUniqueInput
    /**
     * In case the AiAgents found by the `where` argument doesn't exist, create a new AiAgents with this data.
     */
    create: XOR<AiAgentsCreateInput, AiAgentsUncheckedCreateInput>
    /**
     * In case the AiAgents was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AiAgentsUpdateInput, AiAgentsUncheckedUpdateInput>
  }

  /**
   * AiAgents delete
   */
  export type AiAgentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiAgents
     */
    select?: AiAgentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiAgents
     */
    omit?: AiAgentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiAgentsInclude<ExtArgs> | null
    /**
     * Filter which AiAgents to delete.
     */
    where: AiAgentsWhereUniqueInput
  }

  /**
   * AiAgents deleteMany
   */
  export type AiAgentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AiAgents to delete
     */
    where?: AiAgentsWhereInput
    /**
     * Limit how many AiAgents to delete.
     */
    limit?: number
  }

  /**
   * AiAgents.User
   */
  export type AiAgents$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * AiAgents without action
   */
  export type AiAgentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiAgents
     */
    select?: AiAgentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiAgents
     */
    omit?: AiAgentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiAgentsInclude<ExtArgs> | null
  }


  /**
   * Model SalesTransaction
   */

  export type AggregateSalesTransaction = {
    _count: SalesTransactionCountAggregateOutputType | null
    _avg: SalesTransactionAvgAggregateOutputType | null
    _sum: SalesTransactionSumAggregateOutputType | null
    _min: SalesTransactionMinAggregateOutputType | null
    _max: SalesTransactionMaxAggregateOutputType | null
  }

  export type SalesTransactionAvgAggregateOutputType = {
    quantity: number | null
    price: number | null
    customerId: number | null
    totalPrice: number | null
    hourOfDay: number | null
  }

  export type SalesTransactionSumAggregateOutputType = {
    quantity: number | null
    price: number | null
    customerId: number | null
    totalPrice: number | null
    hourOfDay: number | null
  }

  export type SalesTransactionMinAggregateOutputType = {
    id: string | null
    invoice: string | null
    stockCode: string | null
    description: string | null
    quantity: number | null
    invoiceDate: Date | null
    price: number | null
    customerId: number | null
    country: string | null
    totalPrice: number | null
    invoiceMonth: string | null
    dayOfWeek: string | null
    hourOfDay: number | null
    isReturn: boolean | null
    isCreditNote: boolean | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SalesTransactionMaxAggregateOutputType = {
    id: string | null
    invoice: string | null
    stockCode: string | null
    description: string | null
    quantity: number | null
    invoiceDate: Date | null
    price: number | null
    customerId: number | null
    country: string | null
    totalPrice: number | null
    invoiceMonth: string | null
    dayOfWeek: string | null
    hourOfDay: number | null
    isReturn: boolean | null
    isCreditNote: boolean | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SalesTransactionCountAggregateOutputType = {
    id: number
    invoice: number
    stockCode: number
    description: number
    quantity: number
    invoiceDate: number
    price: number
    customerId: number
    country: number
    totalPrice: number
    invoiceMonth: number
    dayOfWeek: number
    hourOfDay: number
    isReturn: number
    isCreditNote: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SalesTransactionAvgAggregateInputType = {
    quantity?: true
    price?: true
    customerId?: true
    totalPrice?: true
    hourOfDay?: true
  }

  export type SalesTransactionSumAggregateInputType = {
    quantity?: true
    price?: true
    customerId?: true
    totalPrice?: true
    hourOfDay?: true
  }

  export type SalesTransactionMinAggregateInputType = {
    id?: true
    invoice?: true
    stockCode?: true
    description?: true
    quantity?: true
    invoiceDate?: true
    price?: true
    customerId?: true
    country?: true
    totalPrice?: true
    invoiceMonth?: true
    dayOfWeek?: true
    hourOfDay?: true
    isReturn?: true
    isCreditNote?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SalesTransactionMaxAggregateInputType = {
    id?: true
    invoice?: true
    stockCode?: true
    description?: true
    quantity?: true
    invoiceDate?: true
    price?: true
    customerId?: true
    country?: true
    totalPrice?: true
    invoiceMonth?: true
    dayOfWeek?: true
    hourOfDay?: true
    isReturn?: true
    isCreditNote?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SalesTransactionCountAggregateInputType = {
    id?: true
    invoice?: true
    stockCode?: true
    description?: true
    quantity?: true
    invoiceDate?: true
    price?: true
    customerId?: true
    country?: true
    totalPrice?: true
    invoiceMonth?: true
    dayOfWeek?: true
    hourOfDay?: true
    isReturn?: true
    isCreditNote?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SalesTransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SalesTransaction to aggregate.
     */
    where?: SalesTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalesTransactions to fetch.
     */
    orderBy?: SalesTransactionOrderByWithRelationInput | SalesTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SalesTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalesTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalesTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SalesTransactions
    **/
    _count?: true | SalesTransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SalesTransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SalesTransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SalesTransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SalesTransactionMaxAggregateInputType
  }

  export type GetSalesTransactionAggregateType<T extends SalesTransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateSalesTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSalesTransaction[P]>
      : GetScalarType<T[P], AggregateSalesTransaction[P]>
  }




  export type SalesTransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SalesTransactionWhereInput
    orderBy?: SalesTransactionOrderByWithAggregationInput | SalesTransactionOrderByWithAggregationInput[]
    by: SalesTransactionScalarFieldEnum[] | SalesTransactionScalarFieldEnum
    having?: SalesTransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SalesTransactionCountAggregateInputType | true
    _avg?: SalesTransactionAvgAggregateInputType
    _sum?: SalesTransactionSumAggregateInputType
    _min?: SalesTransactionMinAggregateInputType
    _max?: SalesTransactionMaxAggregateInputType
  }

  export type SalesTransactionGroupByOutputType = {
    id: string
    invoice: string
    stockCode: string
    description: string
    quantity: number
    invoiceDate: Date
    price: number
    customerId: number
    country: string
    totalPrice: number
    invoiceMonth: string
    dayOfWeek: string
    hourOfDay: number
    isReturn: boolean
    isCreditNote: boolean
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: SalesTransactionCountAggregateOutputType | null
    _avg: SalesTransactionAvgAggregateOutputType | null
    _sum: SalesTransactionSumAggregateOutputType | null
    _min: SalesTransactionMinAggregateOutputType | null
    _max: SalesTransactionMaxAggregateOutputType | null
  }

  type GetSalesTransactionGroupByPayload<T extends SalesTransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SalesTransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SalesTransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SalesTransactionGroupByOutputType[P]>
            : GetScalarType<T[P], SalesTransactionGroupByOutputType[P]>
        }
      >
    >


  export type SalesTransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invoice?: boolean
    stockCode?: boolean
    description?: boolean
    quantity?: boolean
    invoiceDate?: boolean
    price?: boolean
    customerId?: boolean
    country?: boolean
    totalPrice?: boolean
    invoiceMonth?: boolean
    dayOfWeek?: boolean
    hourOfDay?: boolean
    isReturn?: boolean
    isCreditNote?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["salesTransaction"]>

  export type SalesTransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invoice?: boolean
    stockCode?: boolean
    description?: boolean
    quantity?: boolean
    invoiceDate?: boolean
    price?: boolean
    customerId?: boolean
    country?: boolean
    totalPrice?: boolean
    invoiceMonth?: boolean
    dayOfWeek?: boolean
    hourOfDay?: boolean
    isReturn?: boolean
    isCreditNote?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["salesTransaction"]>

  export type SalesTransactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invoice?: boolean
    stockCode?: boolean
    description?: boolean
    quantity?: boolean
    invoiceDate?: boolean
    price?: boolean
    customerId?: boolean
    country?: boolean
    totalPrice?: boolean
    invoiceMonth?: boolean
    dayOfWeek?: boolean
    hourOfDay?: boolean
    isReturn?: boolean
    isCreditNote?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["salesTransaction"]>

  export type SalesTransactionSelectScalar = {
    id?: boolean
    invoice?: boolean
    stockCode?: boolean
    description?: boolean
    quantity?: boolean
    invoiceDate?: boolean
    price?: boolean
    customerId?: boolean
    country?: boolean
    totalPrice?: boolean
    invoiceMonth?: boolean
    dayOfWeek?: boolean
    hourOfDay?: boolean
    isReturn?: boolean
    isCreditNote?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SalesTransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "invoice" | "stockCode" | "description" | "quantity" | "invoiceDate" | "price" | "customerId" | "country" | "totalPrice" | "invoiceMonth" | "dayOfWeek" | "hourOfDay" | "isReturn" | "isCreditNote" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["salesTransaction"]>

  export type $SalesTransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SalesTransaction"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      invoice: string
      stockCode: string
      description: string
      quantity: number
      invoiceDate: Date
      price: number
      customerId: number
      country: string
      totalPrice: number
      invoiceMonth: string
      dayOfWeek: string
      hourOfDay: number
      isReturn: boolean
      isCreditNote: boolean
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["salesTransaction"]>
    composites: {}
  }

  type SalesTransactionGetPayload<S extends boolean | null | undefined | SalesTransactionDefaultArgs> = $Result.GetResult<Prisma.$SalesTransactionPayload, S>

  type SalesTransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SalesTransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SalesTransactionCountAggregateInputType | true
    }

  export interface SalesTransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SalesTransaction'], meta: { name: 'SalesTransaction' } }
    /**
     * Find zero or one SalesTransaction that matches the filter.
     * @param {SalesTransactionFindUniqueArgs} args - Arguments to find a SalesTransaction
     * @example
     * // Get one SalesTransaction
     * const salesTransaction = await prisma.salesTransaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SalesTransactionFindUniqueArgs>(args: SelectSubset<T, SalesTransactionFindUniqueArgs<ExtArgs>>): Prisma__SalesTransactionClient<$Result.GetResult<Prisma.$SalesTransactionPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one SalesTransaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SalesTransactionFindUniqueOrThrowArgs} args - Arguments to find a SalesTransaction
     * @example
     * // Get one SalesTransaction
     * const salesTransaction = await prisma.salesTransaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SalesTransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, SalesTransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SalesTransactionClient<$Result.GetResult<Prisma.$SalesTransactionPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first SalesTransaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesTransactionFindFirstArgs} args - Arguments to find a SalesTransaction
     * @example
     * // Get one SalesTransaction
     * const salesTransaction = await prisma.salesTransaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SalesTransactionFindFirstArgs>(args?: SelectSubset<T, SalesTransactionFindFirstArgs<ExtArgs>>): Prisma__SalesTransactionClient<$Result.GetResult<Prisma.$SalesTransactionPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first SalesTransaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesTransactionFindFirstOrThrowArgs} args - Arguments to find a SalesTransaction
     * @example
     * // Get one SalesTransaction
     * const salesTransaction = await prisma.salesTransaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SalesTransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, SalesTransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SalesTransactionClient<$Result.GetResult<Prisma.$SalesTransactionPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more SalesTransactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesTransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SalesTransactions
     * const salesTransactions = await prisma.salesTransaction.findMany()
     * 
     * // Get first 10 SalesTransactions
     * const salesTransactions = await prisma.salesTransaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const salesTransactionWithIdOnly = await prisma.salesTransaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SalesTransactionFindManyArgs>(args?: SelectSubset<T, SalesTransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalesTransactionPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a SalesTransaction.
     * @param {SalesTransactionCreateArgs} args - Arguments to create a SalesTransaction.
     * @example
     * // Create one SalesTransaction
     * const SalesTransaction = await prisma.salesTransaction.create({
     *   data: {
     *     // ... data to create a SalesTransaction
     *   }
     * })
     * 
     */
    create<T extends SalesTransactionCreateArgs>(args: SelectSubset<T, SalesTransactionCreateArgs<ExtArgs>>): Prisma__SalesTransactionClient<$Result.GetResult<Prisma.$SalesTransactionPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many SalesTransactions.
     * @param {SalesTransactionCreateManyArgs} args - Arguments to create many SalesTransactions.
     * @example
     * // Create many SalesTransactions
     * const salesTransaction = await prisma.salesTransaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SalesTransactionCreateManyArgs>(args?: SelectSubset<T, SalesTransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SalesTransactions and returns the data saved in the database.
     * @param {SalesTransactionCreateManyAndReturnArgs} args - Arguments to create many SalesTransactions.
     * @example
     * // Create many SalesTransactions
     * const salesTransaction = await prisma.salesTransaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SalesTransactions and only return the `id`
     * const salesTransactionWithIdOnly = await prisma.salesTransaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SalesTransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, SalesTransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalesTransactionPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a SalesTransaction.
     * @param {SalesTransactionDeleteArgs} args - Arguments to delete one SalesTransaction.
     * @example
     * // Delete one SalesTransaction
     * const SalesTransaction = await prisma.salesTransaction.delete({
     *   where: {
     *     // ... filter to delete one SalesTransaction
     *   }
     * })
     * 
     */
    delete<T extends SalesTransactionDeleteArgs>(args: SelectSubset<T, SalesTransactionDeleteArgs<ExtArgs>>): Prisma__SalesTransactionClient<$Result.GetResult<Prisma.$SalesTransactionPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one SalesTransaction.
     * @param {SalesTransactionUpdateArgs} args - Arguments to update one SalesTransaction.
     * @example
     * // Update one SalesTransaction
     * const salesTransaction = await prisma.salesTransaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SalesTransactionUpdateArgs>(args: SelectSubset<T, SalesTransactionUpdateArgs<ExtArgs>>): Prisma__SalesTransactionClient<$Result.GetResult<Prisma.$SalesTransactionPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more SalesTransactions.
     * @param {SalesTransactionDeleteManyArgs} args - Arguments to filter SalesTransactions to delete.
     * @example
     * // Delete a few SalesTransactions
     * const { count } = await prisma.salesTransaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SalesTransactionDeleteManyArgs>(args?: SelectSubset<T, SalesTransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SalesTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesTransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SalesTransactions
     * const salesTransaction = await prisma.salesTransaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SalesTransactionUpdateManyArgs>(args: SelectSubset<T, SalesTransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SalesTransactions and returns the data updated in the database.
     * @param {SalesTransactionUpdateManyAndReturnArgs} args - Arguments to update many SalesTransactions.
     * @example
     * // Update many SalesTransactions
     * const salesTransaction = await prisma.salesTransaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SalesTransactions and only return the `id`
     * const salesTransactionWithIdOnly = await prisma.salesTransaction.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SalesTransactionUpdateManyAndReturnArgs>(args: SelectSubset<T, SalesTransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalesTransactionPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one SalesTransaction.
     * @param {SalesTransactionUpsertArgs} args - Arguments to update or create a SalesTransaction.
     * @example
     * // Update or create a SalesTransaction
     * const salesTransaction = await prisma.salesTransaction.upsert({
     *   create: {
     *     // ... data to create a SalesTransaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SalesTransaction we want to update
     *   }
     * })
     */
    upsert<T extends SalesTransactionUpsertArgs>(args: SelectSubset<T, SalesTransactionUpsertArgs<ExtArgs>>): Prisma__SalesTransactionClient<$Result.GetResult<Prisma.$SalesTransactionPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of SalesTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesTransactionCountArgs} args - Arguments to filter SalesTransactions to count.
     * @example
     * // Count the number of SalesTransactions
     * const count = await prisma.salesTransaction.count({
     *   where: {
     *     // ... the filter for the SalesTransactions we want to count
     *   }
     * })
    **/
    count<T extends SalesTransactionCountArgs>(
      args?: Subset<T, SalesTransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SalesTransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SalesTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesTransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SalesTransactionAggregateArgs>(args: Subset<T, SalesTransactionAggregateArgs>): Prisma.PrismaPromise<GetSalesTransactionAggregateType<T>>

    /**
     * Group by SalesTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesTransactionGroupByArgs} args - Group by arguments.
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
      T extends SalesTransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SalesTransactionGroupByArgs['orderBy'] }
        : { orderBy?: SalesTransactionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SalesTransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSalesTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SalesTransaction model
   */
  readonly fields: SalesTransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SalesTransaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SalesTransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the SalesTransaction model
   */ 
  interface SalesTransactionFieldRefs {
    readonly id: FieldRef<"SalesTransaction", 'String'>
    readonly invoice: FieldRef<"SalesTransaction", 'String'>
    readonly stockCode: FieldRef<"SalesTransaction", 'String'>
    readonly description: FieldRef<"SalesTransaction", 'String'>
    readonly quantity: FieldRef<"SalesTransaction", 'Float'>
    readonly invoiceDate: FieldRef<"SalesTransaction", 'DateTime'>
    readonly price: FieldRef<"SalesTransaction", 'Float'>
    readonly customerId: FieldRef<"SalesTransaction", 'Int'>
    readonly country: FieldRef<"SalesTransaction", 'String'>
    readonly totalPrice: FieldRef<"SalesTransaction", 'Float'>
    readonly invoiceMonth: FieldRef<"SalesTransaction", 'String'>
    readonly dayOfWeek: FieldRef<"SalesTransaction", 'String'>
    readonly hourOfDay: FieldRef<"SalesTransaction", 'Int'>
    readonly isReturn: FieldRef<"SalesTransaction", 'Boolean'>
    readonly isCreditNote: FieldRef<"SalesTransaction", 'Boolean'>
    readonly userId: FieldRef<"SalesTransaction", 'String'>
    readonly createdAt: FieldRef<"SalesTransaction", 'DateTime'>
    readonly updatedAt: FieldRef<"SalesTransaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SalesTransaction findUnique
   */
  export type SalesTransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesTransaction
     */
    select?: SalesTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesTransaction
     */
    omit?: SalesTransactionOmit<ExtArgs> | null
    /**
     * Filter, which SalesTransaction to fetch.
     */
    where: SalesTransactionWhereUniqueInput
  }

  /**
   * SalesTransaction findUniqueOrThrow
   */
  export type SalesTransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesTransaction
     */
    select?: SalesTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesTransaction
     */
    omit?: SalesTransactionOmit<ExtArgs> | null
    /**
     * Filter, which SalesTransaction to fetch.
     */
    where: SalesTransactionWhereUniqueInput
  }

  /**
   * SalesTransaction findFirst
   */
  export type SalesTransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesTransaction
     */
    select?: SalesTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesTransaction
     */
    omit?: SalesTransactionOmit<ExtArgs> | null
    /**
     * Filter, which SalesTransaction to fetch.
     */
    where?: SalesTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalesTransactions to fetch.
     */
    orderBy?: SalesTransactionOrderByWithRelationInput | SalesTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SalesTransactions.
     */
    cursor?: SalesTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalesTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalesTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SalesTransactions.
     */
    distinct?: SalesTransactionScalarFieldEnum | SalesTransactionScalarFieldEnum[]
  }

  /**
   * SalesTransaction findFirstOrThrow
   */
  export type SalesTransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesTransaction
     */
    select?: SalesTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesTransaction
     */
    omit?: SalesTransactionOmit<ExtArgs> | null
    /**
     * Filter, which SalesTransaction to fetch.
     */
    where?: SalesTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalesTransactions to fetch.
     */
    orderBy?: SalesTransactionOrderByWithRelationInput | SalesTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SalesTransactions.
     */
    cursor?: SalesTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalesTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalesTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SalesTransactions.
     */
    distinct?: SalesTransactionScalarFieldEnum | SalesTransactionScalarFieldEnum[]
  }

  /**
   * SalesTransaction findMany
   */
  export type SalesTransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesTransaction
     */
    select?: SalesTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesTransaction
     */
    omit?: SalesTransactionOmit<ExtArgs> | null
    /**
     * Filter, which SalesTransactions to fetch.
     */
    where?: SalesTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalesTransactions to fetch.
     */
    orderBy?: SalesTransactionOrderByWithRelationInput | SalesTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SalesTransactions.
     */
    cursor?: SalesTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalesTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalesTransactions.
     */
    skip?: number
    distinct?: SalesTransactionScalarFieldEnum | SalesTransactionScalarFieldEnum[]
  }

  /**
   * SalesTransaction create
   */
  export type SalesTransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesTransaction
     */
    select?: SalesTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesTransaction
     */
    omit?: SalesTransactionOmit<ExtArgs> | null
    /**
     * The data needed to create a SalesTransaction.
     */
    data: XOR<SalesTransactionCreateInput, SalesTransactionUncheckedCreateInput>
  }

  /**
   * SalesTransaction createMany
   */
  export type SalesTransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SalesTransactions.
     */
    data: SalesTransactionCreateManyInput | SalesTransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SalesTransaction createManyAndReturn
   */
  export type SalesTransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesTransaction
     */
    select?: SalesTransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SalesTransaction
     */
    omit?: SalesTransactionOmit<ExtArgs> | null
    /**
     * The data used to create many SalesTransactions.
     */
    data: SalesTransactionCreateManyInput | SalesTransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SalesTransaction update
   */
  export type SalesTransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesTransaction
     */
    select?: SalesTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesTransaction
     */
    omit?: SalesTransactionOmit<ExtArgs> | null
    /**
     * The data needed to update a SalesTransaction.
     */
    data: XOR<SalesTransactionUpdateInput, SalesTransactionUncheckedUpdateInput>
    /**
     * Choose, which SalesTransaction to update.
     */
    where: SalesTransactionWhereUniqueInput
  }

  /**
   * SalesTransaction updateMany
   */
  export type SalesTransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SalesTransactions.
     */
    data: XOR<SalesTransactionUpdateManyMutationInput, SalesTransactionUncheckedUpdateManyInput>
    /**
     * Filter which SalesTransactions to update
     */
    where?: SalesTransactionWhereInput
    /**
     * Limit how many SalesTransactions to update.
     */
    limit?: number
  }

  /**
   * SalesTransaction updateManyAndReturn
   */
  export type SalesTransactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesTransaction
     */
    select?: SalesTransactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SalesTransaction
     */
    omit?: SalesTransactionOmit<ExtArgs> | null
    /**
     * The data used to update SalesTransactions.
     */
    data: XOR<SalesTransactionUpdateManyMutationInput, SalesTransactionUncheckedUpdateManyInput>
    /**
     * Filter which SalesTransactions to update
     */
    where?: SalesTransactionWhereInput
    /**
     * Limit how many SalesTransactions to update.
     */
    limit?: number
  }

  /**
   * SalesTransaction upsert
   */
  export type SalesTransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesTransaction
     */
    select?: SalesTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesTransaction
     */
    omit?: SalesTransactionOmit<ExtArgs> | null
    /**
     * The filter to search for the SalesTransaction to update in case it exists.
     */
    where: SalesTransactionWhereUniqueInput
    /**
     * In case the SalesTransaction found by the `where` argument doesn't exist, create a new SalesTransaction with this data.
     */
    create: XOR<SalesTransactionCreateInput, SalesTransactionUncheckedCreateInput>
    /**
     * In case the SalesTransaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SalesTransactionUpdateInput, SalesTransactionUncheckedUpdateInput>
  }

  /**
   * SalesTransaction delete
   */
  export type SalesTransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesTransaction
     */
    select?: SalesTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesTransaction
     */
    omit?: SalesTransactionOmit<ExtArgs> | null
    /**
     * Filter which SalesTransaction to delete.
     */
    where: SalesTransactionWhereUniqueInput
  }

  /**
   * SalesTransaction deleteMany
   */
  export type SalesTransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SalesTransactions to delete
     */
    where?: SalesTransactionWhereInput
    /**
     * Limit how many SalesTransactions to delete.
     */
    limit?: number
  }

  /**
   * SalesTransaction without action
   */
  export type SalesTransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesTransaction
     */
    select?: SalesTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesTransaction
     */
    omit?: SalesTransactionOmit<ExtArgs> | null
  }


  /**
   * Model RFMAnalysis
   */

  export type AggregateRFMAnalysis = {
    _count: RFMAnalysisCountAggregateOutputType | null
    _avg: RFMAnalysisAvgAggregateOutputType | null
    _sum: RFMAnalysisSumAggregateOutputType | null
    _min: RFMAnalysisMinAggregateOutputType | null
    _max: RFMAnalysisMaxAggregateOutputType | null
  }

  export type RFMAnalysisAvgAggregateOutputType = {
    customerId: number | null
    recency: number | null
    frequency: number | null
    monetary: number | null
    rScore: number | null
    fScore: number | null
    mScore: number | null
  }

  export type RFMAnalysisSumAggregateOutputType = {
    customerId: number | null
    recency: number | null
    frequency: number | null
    monetary: number | null
    rScore: number | null
    fScore: number | null
    mScore: number | null
  }

  export type RFMAnalysisMinAggregateOutputType = {
    id: string | null
    customerId: number | null
    recency: number | null
    frequency: number | null
    monetary: number | null
    rScore: number | null
    fScore: number | null
    mScore: number | null
    rfmScore: string | null
    rfmSegment: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RFMAnalysisMaxAggregateOutputType = {
    id: string | null
    customerId: number | null
    recency: number | null
    frequency: number | null
    monetary: number | null
    rScore: number | null
    fScore: number | null
    mScore: number | null
    rfmScore: string | null
    rfmSegment: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RFMAnalysisCountAggregateOutputType = {
    id: number
    customerId: number
    recency: number
    frequency: number
    monetary: number
    rScore: number
    fScore: number
    mScore: number
    rfmScore: number
    rfmSegment: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RFMAnalysisAvgAggregateInputType = {
    customerId?: true
    recency?: true
    frequency?: true
    monetary?: true
    rScore?: true
    fScore?: true
    mScore?: true
  }

  export type RFMAnalysisSumAggregateInputType = {
    customerId?: true
    recency?: true
    frequency?: true
    monetary?: true
    rScore?: true
    fScore?: true
    mScore?: true
  }

  export type RFMAnalysisMinAggregateInputType = {
    id?: true
    customerId?: true
    recency?: true
    frequency?: true
    monetary?: true
    rScore?: true
    fScore?: true
    mScore?: true
    rfmScore?: true
    rfmSegment?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RFMAnalysisMaxAggregateInputType = {
    id?: true
    customerId?: true
    recency?: true
    frequency?: true
    monetary?: true
    rScore?: true
    fScore?: true
    mScore?: true
    rfmScore?: true
    rfmSegment?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RFMAnalysisCountAggregateInputType = {
    id?: true
    customerId?: true
    recency?: true
    frequency?: true
    monetary?: true
    rScore?: true
    fScore?: true
    mScore?: true
    rfmScore?: true
    rfmSegment?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RFMAnalysisAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RFMAnalysis to aggregate.
     */
    where?: RFMAnalysisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RFMAnalyses to fetch.
     */
    orderBy?: RFMAnalysisOrderByWithRelationInput | RFMAnalysisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RFMAnalysisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RFMAnalyses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RFMAnalyses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RFMAnalyses
    **/
    _count?: true | RFMAnalysisCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RFMAnalysisAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RFMAnalysisSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RFMAnalysisMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RFMAnalysisMaxAggregateInputType
  }

  export type GetRFMAnalysisAggregateType<T extends RFMAnalysisAggregateArgs> = {
        [P in keyof T & keyof AggregateRFMAnalysis]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRFMAnalysis[P]>
      : GetScalarType<T[P], AggregateRFMAnalysis[P]>
  }




  export type RFMAnalysisGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RFMAnalysisWhereInput
    orderBy?: RFMAnalysisOrderByWithAggregationInput | RFMAnalysisOrderByWithAggregationInput[]
    by: RFMAnalysisScalarFieldEnum[] | RFMAnalysisScalarFieldEnum
    having?: RFMAnalysisScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RFMAnalysisCountAggregateInputType | true
    _avg?: RFMAnalysisAvgAggregateInputType
    _sum?: RFMAnalysisSumAggregateInputType
    _min?: RFMAnalysisMinAggregateInputType
    _max?: RFMAnalysisMaxAggregateInputType
  }

  export type RFMAnalysisGroupByOutputType = {
    id: string
    customerId: number
    recency: number
    frequency: number
    monetary: number
    rScore: number
    fScore: number
    mScore: number
    rfmScore: string
    rfmSegment: string
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: RFMAnalysisCountAggregateOutputType | null
    _avg: RFMAnalysisAvgAggregateOutputType | null
    _sum: RFMAnalysisSumAggregateOutputType | null
    _min: RFMAnalysisMinAggregateOutputType | null
    _max: RFMAnalysisMaxAggregateOutputType | null
  }

  type GetRFMAnalysisGroupByPayload<T extends RFMAnalysisGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RFMAnalysisGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RFMAnalysisGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RFMAnalysisGroupByOutputType[P]>
            : GetScalarType<T[P], RFMAnalysisGroupByOutputType[P]>
        }
      >
    >


  export type RFMAnalysisSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    recency?: boolean
    frequency?: boolean
    monetary?: boolean
    rScore?: boolean
    fScore?: boolean
    mScore?: boolean
    rfmScore?: boolean
    rfmSegment?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["rFMAnalysis"]>

  export type RFMAnalysisSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    recency?: boolean
    frequency?: boolean
    monetary?: boolean
    rScore?: boolean
    fScore?: boolean
    mScore?: boolean
    rfmScore?: boolean
    rfmSegment?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["rFMAnalysis"]>

  export type RFMAnalysisSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    recency?: boolean
    frequency?: boolean
    monetary?: boolean
    rScore?: boolean
    fScore?: boolean
    mScore?: boolean
    rfmScore?: boolean
    rfmSegment?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["rFMAnalysis"]>

  export type RFMAnalysisSelectScalar = {
    id?: boolean
    customerId?: boolean
    recency?: boolean
    frequency?: boolean
    monetary?: boolean
    rScore?: boolean
    fScore?: boolean
    mScore?: boolean
    rfmScore?: boolean
    rfmSegment?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RFMAnalysisOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "customerId" | "recency" | "frequency" | "monetary" | "rScore" | "fScore" | "mScore" | "rfmScore" | "rfmSegment" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["rFMAnalysis"]>

  export type $RFMAnalysisPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RFMAnalysis"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      customerId: number
      recency: number
      frequency: number
      monetary: number
      rScore: number
      fScore: number
      mScore: number
      rfmScore: string
      rfmSegment: string
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["rFMAnalysis"]>
    composites: {}
  }

  type RFMAnalysisGetPayload<S extends boolean | null | undefined | RFMAnalysisDefaultArgs> = $Result.GetResult<Prisma.$RFMAnalysisPayload, S>

  type RFMAnalysisCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RFMAnalysisFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RFMAnalysisCountAggregateInputType | true
    }

  export interface RFMAnalysisDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RFMAnalysis'], meta: { name: 'RFMAnalysis' } }
    /**
     * Find zero or one RFMAnalysis that matches the filter.
     * @param {RFMAnalysisFindUniqueArgs} args - Arguments to find a RFMAnalysis
     * @example
     * // Get one RFMAnalysis
     * const rFMAnalysis = await prisma.rFMAnalysis.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RFMAnalysisFindUniqueArgs>(args: SelectSubset<T, RFMAnalysisFindUniqueArgs<ExtArgs>>): Prisma__RFMAnalysisClient<$Result.GetResult<Prisma.$RFMAnalysisPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one RFMAnalysis that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RFMAnalysisFindUniqueOrThrowArgs} args - Arguments to find a RFMAnalysis
     * @example
     * // Get one RFMAnalysis
     * const rFMAnalysis = await prisma.rFMAnalysis.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RFMAnalysisFindUniqueOrThrowArgs>(args: SelectSubset<T, RFMAnalysisFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RFMAnalysisClient<$Result.GetResult<Prisma.$RFMAnalysisPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first RFMAnalysis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RFMAnalysisFindFirstArgs} args - Arguments to find a RFMAnalysis
     * @example
     * // Get one RFMAnalysis
     * const rFMAnalysis = await prisma.rFMAnalysis.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RFMAnalysisFindFirstArgs>(args?: SelectSubset<T, RFMAnalysisFindFirstArgs<ExtArgs>>): Prisma__RFMAnalysisClient<$Result.GetResult<Prisma.$RFMAnalysisPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first RFMAnalysis that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RFMAnalysisFindFirstOrThrowArgs} args - Arguments to find a RFMAnalysis
     * @example
     * // Get one RFMAnalysis
     * const rFMAnalysis = await prisma.rFMAnalysis.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RFMAnalysisFindFirstOrThrowArgs>(args?: SelectSubset<T, RFMAnalysisFindFirstOrThrowArgs<ExtArgs>>): Prisma__RFMAnalysisClient<$Result.GetResult<Prisma.$RFMAnalysisPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more RFMAnalyses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RFMAnalysisFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RFMAnalyses
     * const rFMAnalyses = await prisma.rFMAnalysis.findMany()
     * 
     * // Get first 10 RFMAnalyses
     * const rFMAnalyses = await prisma.rFMAnalysis.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rFMAnalysisWithIdOnly = await prisma.rFMAnalysis.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RFMAnalysisFindManyArgs>(args?: SelectSubset<T, RFMAnalysisFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RFMAnalysisPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a RFMAnalysis.
     * @param {RFMAnalysisCreateArgs} args - Arguments to create a RFMAnalysis.
     * @example
     * // Create one RFMAnalysis
     * const RFMAnalysis = await prisma.rFMAnalysis.create({
     *   data: {
     *     // ... data to create a RFMAnalysis
     *   }
     * })
     * 
     */
    create<T extends RFMAnalysisCreateArgs>(args: SelectSubset<T, RFMAnalysisCreateArgs<ExtArgs>>): Prisma__RFMAnalysisClient<$Result.GetResult<Prisma.$RFMAnalysisPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many RFMAnalyses.
     * @param {RFMAnalysisCreateManyArgs} args - Arguments to create many RFMAnalyses.
     * @example
     * // Create many RFMAnalyses
     * const rFMAnalysis = await prisma.rFMAnalysis.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RFMAnalysisCreateManyArgs>(args?: SelectSubset<T, RFMAnalysisCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RFMAnalyses and returns the data saved in the database.
     * @param {RFMAnalysisCreateManyAndReturnArgs} args - Arguments to create many RFMAnalyses.
     * @example
     * // Create many RFMAnalyses
     * const rFMAnalysis = await prisma.rFMAnalysis.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RFMAnalyses and only return the `id`
     * const rFMAnalysisWithIdOnly = await prisma.rFMAnalysis.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RFMAnalysisCreateManyAndReturnArgs>(args?: SelectSubset<T, RFMAnalysisCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RFMAnalysisPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a RFMAnalysis.
     * @param {RFMAnalysisDeleteArgs} args - Arguments to delete one RFMAnalysis.
     * @example
     * // Delete one RFMAnalysis
     * const RFMAnalysis = await prisma.rFMAnalysis.delete({
     *   where: {
     *     // ... filter to delete one RFMAnalysis
     *   }
     * })
     * 
     */
    delete<T extends RFMAnalysisDeleteArgs>(args: SelectSubset<T, RFMAnalysisDeleteArgs<ExtArgs>>): Prisma__RFMAnalysisClient<$Result.GetResult<Prisma.$RFMAnalysisPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one RFMAnalysis.
     * @param {RFMAnalysisUpdateArgs} args - Arguments to update one RFMAnalysis.
     * @example
     * // Update one RFMAnalysis
     * const rFMAnalysis = await prisma.rFMAnalysis.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RFMAnalysisUpdateArgs>(args: SelectSubset<T, RFMAnalysisUpdateArgs<ExtArgs>>): Prisma__RFMAnalysisClient<$Result.GetResult<Prisma.$RFMAnalysisPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more RFMAnalyses.
     * @param {RFMAnalysisDeleteManyArgs} args - Arguments to filter RFMAnalyses to delete.
     * @example
     * // Delete a few RFMAnalyses
     * const { count } = await prisma.rFMAnalysis.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RFMAnalysisDeleteManyArgs>(args?: SelectSubset<T, RFMAnalysisDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RFMAnalyses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RFMAnalysisUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RFMAnalyses
     * const rFMAnalysis = await prisma.rFMAnalysis.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RFMAnalysisUpdateManyArgs>(args: SelectSubset<T, RFMAnalysisUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RFMAnalyses and returns the data updated in the database.
     * @param {RFMAnalysisUpdateManyAndReturnArgs} args - Arguments to update many RFMAnalyses.
     * @example
     * // Update many RFMAnalyses
     * const rFMAnalysis = await prisma.rFMAnalysis.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RFMAnalyses and only return the `id`
     * const rFMAnalysisWithIdOnly = await prisma.rFMAnalysis.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RFMAnalysisUpdateManyAndReturnArgs>(args: SelectSubset<T, RFMAnalysisUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RFMAnalysisPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one RFMAnalysis.
     * @param {RFMAnalysisUpsertArgs} args - Arguments to update or create a RFMAnalysis.
     * @example
     * // Update or create a RFMAnalysis
     * const rFMAnalysis = await prisma.rFMAnalysis.upsert({
     *   create: {
     *     // ... data to create a RFMAnalysis
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RFMAnalysis we want to update
     *   }
     * })
     */
    upsert<T extends RFMAnalysisUpsertArgs>(args: SelectSubset<T, RFMAnalysisUpsertArgs<ExtArgs>>): Prisma__RFMAnalysisClient<$Result.GetResult<Prisma.$RFMAnalysisPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of RFMAnalyses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RFMAnalysisCountArgs} args - Arguments to filter RFMAnalyses to count.
     * @example
     * // Count the number of RFMAnalyses
     * const count = await prisma.rFMAnalysis.count({
     *   where: {
     *     // ... the filter for the RFMAnalyses we want to count
     *   }
     * })
    **/
    count<T extends RFMAnalysisCountArgs>(
      args?: Subset<T, RFMAnalysisCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RFMAnalysisCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RFMAnalysis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RFMAnalysisAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RFMAnalysisAggregateArgs>(args: Subset<T, RFMAnalysisAggregateArgs>): Prisma.PrismaPromise<GetRFMAnalysisAggregateType<T>>

    /**
     * Group by RFMAnalysis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RFMAnalysisGroupByArgs} args - Group by arguments.
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
      T extends RFMAnalysisGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RFMAnalysisGroupByArgs['orderBy'] }
        : { orderBy?: RFMAnalysisGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RFMAnalysisGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRFMAnalysisGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RFMAnalysis model
   */
  readonly fields: RFMAnalysisFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RFMAnalysis.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RFMAnalysisClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the RFMAnalysis model
   */ 
  interface RFMAnalysisFieldRefs {
    readonly id: FieldRef<"RFMAnalysis", 'String'>
    readonly customerId: FieldRef<"RFMAnalysis", 'Int'>
    readonly recency: FieldRef<"RFMAnalysis", 'Int'>
    readonly frequency: FieldRef<"RFMAnalysis", 'Int'>
    readonly monetary: FieldRef<"RFMAnalysis", 'Float'>
    readonly rScore: FieldRef<"RFMAnalysis", 'Int'>
    readonly fScore: FieldRef<"RFMAnalysis", 'Int'>
    readonly mScore: FieldRef<"RFMAnalysis", 'Int'>
    readonly rfmScore: FieldRef<"RFMAnalysis", 'String'>
    readonly rfmSegment: FieldRef<"RFMAnalysis", 'String'>
    readonly userId: FieldRef<"RFMAnalysis", 'String'>
    readonly createdAt: FieldRef<"RFMAnalysis", 'DateTime'>
    readonly updatedAt: FieldRef<"RFMAnalysis", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RFMAnalysis findUnique
   */
  export type RFMAnalysisFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RFMAnalysis
     */
    select?: RFMAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RFMAnalysis
     */
    omit?: RFMAnalysisOmit<ExtArgs> | null
    /**
     * Filter, which RFMAnalysis to fetch.
     */
    where: RFMAnalysisWhereUniqueInput
  }

  /**
   * RFMAnalysis findUniqueOrThrow
   */
  export type RFMAnalysisFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RFMAnalysis
     */
    select?: RFMAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RFMAnalysis
     */
    omit?: RFMAnalysisOmit<ExtArgs> | null
    /**
     * Filter, which RFMAnalysis to fetch.
     */
    where: RFMAnalysisWhereUniqueInput
  }

  /**
   * RFMAnalysis findFirst
   */
  export type RFMAnalysisFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RFMAnalysis
     */
    select?: RFMAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RFMAnalysis
     */
    omit?: RFMAnalysisOmit<ExtArgs> | null
    /**
     * Filter, which RFMAnalysis to fetch.
     */
    where?: RFMAnalysisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RFMAnalyses to fetch.
     */
    orderBy?: RFMAnalysisOrderByWithRelationInput | RFMAnalysisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RFMAnalyses.
     */
    cursor?: RFMAnalysisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RFMAnalyses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RFMAnalyses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RFMAnalyses.
     */
    distinct?: RFMAnalysisScalarFieldEnum | RFMAnalysisScalarFieldEnum[]
  }

  /**
   * RFMAnalysis findFirstOrThrow
   */
  export type RFMAnalysisFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RFMAnalysis
     */
    select?: RFMAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RFMAnalysis
     */
    omit?: RFMAnalysisOmit<ExtArgs> | null
    /**
     * Filter, which RFMAnalysis to fetch.
     */
    where?: RFMAnalysisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RFMAnalyses to fetch.
     */
    orderBy?: RFMAnalysisOrderByWithRelationInput | RFMAnalysisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RFMAnalyses.
     */
    cursor?: RFMAnalysisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RFMAnalyses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RFMAnalyses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RFMAnalyses.
     */
    distinct?: RFMAnalysisScalarFieldEnum | RFMAnalysisScalarFieldEnum[]
  }

  /**
   * RFMAnalysis findMany
   */
  export type RFMAnalysisFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RFMAnalysis
     */
    select?: RFMAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RFMAnalysis
     */
    omit?: RFMAnalysisOmit<ExtArgs> | null
    /**
     * Filter, which RFMAnalyses to fetch.
     */
    where?: RFMAnalysisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RFMAnalyses to fetch.
     */
    orderBy?: RFMAnalysisOrderByWithRelationInput | RFMAnalysisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RFMAnalyses.
     */
    cursor?: RFMAnalysisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RFMAnalyses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RFMAnalyses.
     */
    skip?: number
    distinct?: RFMAnalysisScalarFieldEnum | RFMAnalysisScalarFieldEnum[]
  }

  /**
   * RFMAnalysis create
   */
  export type RFMAnalysisCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RFMAnalysis
     */
    select?: RFMAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RFMAnalysis
     */
    omit?: RFMAnalysisOmit<ExtArgs> | null
    /**
     * The data needed to create a RFMAnalysis.
     */
    data: XOR<RFMAnalysisCreateInput, RFMAnalysisUncheckedCreateInput>
  }

  /**
   * RFMAnalysis createMany
   */
  export type RFMAnalysisCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RFMAnalyses.
     */
    data: RFMAnalysisCreateManyInput | RFMAnalysisCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RFMAnalysis createManyAndReturn
   */
  export type RFMAnalysisCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RFMAnalysis
     */
    select?: RFMAnalysisSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RFMAnalysis
     */
    omit?: RFMAnalysisOmit<ExtArgs> | null
    /**
     * The data used to create many RFMAnalyses.
     */
    data: RFMAnalysisCreateManyInput | RFMAnalysisCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RFMAnalysis update
   */
  export type RFMAnalysisUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RFMAnalysis
     */
    select?: RFMAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RFMAnalysis
     */
    omit?: RFMAnalysisOmit<ExtArgs> | null
    /**
     * The data needed to update a RFMAnalysis.
     */
    data: XOR<RFMAnalysisUpdateInput, RFMAnalysisUncheckedUpdateInput>
    /**
     * Choose, which RFMAnalysis to update.
     */
    where: RFMAnalysisWhereUniqueInput
  }

  /**
   * RFMAnalysis updateMany
   */
  export type RFMAnalysisUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RFMAnalyses.
     */
    data: XOR<RFMAnalysisUpdateManyMutationInput, RFMAnalysisUncheckedUpdateManyInput>
    /**
     * Filter which RFMAnalyses to update
     */
    where?: RFMAnalysisWhereInput
    /**
     * Limit how many RFMAnalyses to update.
     */
    limit?: number
  }

  /**
   * RFMAnalysis updateManyAndReturn
   */
  export type RFMAnalysisUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RFMAnalysis
     */
    select?: RFMAnalysisSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RFMAnalysis
     */
    omit?: RFMAnalysisOmit<ExtArgs> | null
    /**
     * The data used to update RFMAnalyses.
     */
    data: XOR<RFMAnalysisUpdateManyMutationInput, RFMAnalysisUncheckedUpdateManyInput>
    /**
     * Filter which RFMAnalyses to update
     */
    where?: RFMAnalysisWhereInput
    /**
     * Limit how many RFMAnalyses to update.
     */
    limit?: number
  }

  /**
   * RFMAnalysis upsert
   */
  export type RFMAnalysisUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RFMAnalysis
     */
    select?: RFMAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RFMAnalysis
     */
    omit?: RFMAnalysisOmit<ExtArgs> | null
    /**
     * The filter to search for the RFMAnalysis to update in case it exists.
     */
    where: RFMAnalysisWhereUniqueInput
    /**
     * In case the RFMAnalysis found by the `where` argument doesn't exist, create a new RFMAnalysis with this data.
     */
    create: XOR<RFMAnalysisCreateInput, RFMAnalysisUncheckedCreateInput>
    /**
     * In case the RFMAnalysis was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RFMAnalysisUpdateInput, RFMAnalysisUncheckedUpdateInput>
  }

  /**
   * RFMAnalysis delete
   */
  export type RFMAnalysisDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RFMAnalysis
     */
    select?: RFMAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RFMAnalysis
     */
    omit?: RFMAnalysisOmit<ExtArgs> | null
    /**
     * Filter which RFMAnalysis to delete.
     */
    where: RFMAnalysisWhereUniqueInput
  }

  /**
   * RFMAnalysis deleteMany
   */
  export type RFMAnalysisDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RFMAnalyses to delete
     */
    where?: RFMAnalysisWhereInput
    /**
     * Limit how many RFMAnalyses to delete.
     */
    limit?: number
  }

  /**
   * RFMAnalysis without action
   */
  export type RFMAnalysisDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RFMAnalysis
     */
    select?: RFMAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RFMAnalysis
     */
    omit?: RFMAnalysisOmit<ExtArgs> | null
  }


  /**
   * Model DashboardAnalytics
   */

  export type AggregateDashboardAnalytics = {
    _count: DashboardAnalyticsCountAggregateOutputType | null
    _min: DashboardAnalyticsMinAggregateOutputType | null
    _max: DashboardAnalyticsMaxAggregateOutputType | null
  }

  export type DashboardAnalyticsMinAggregateOutputType = {
    id: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DashboardAnalyticsMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DashboardAnalyticsCountAggregateOutputType = {
    id: number
    userId: number
    monthlySales: number
    aovTrend: number
    topCountries: number
    topProducts: number
    topCustomers: number
    rfmDistribution: number
    revenueByDay: number
    revenueByHour: number
    rfmData: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DashboardAnalyticsMinAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DashboardAnalyticsMaxAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DashboardAnalyticsCountAggregateInputType = {
    id?: true
    userId?: true
    monthlySales?: true
    aovTrend?: true
    topCountries?: true
    topProducts?: true
    topCustomers?: true
    rfmDistribution?: true
    revenueByDay?: true
    revenueByHour?: true
    rfmData?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DashboardAnalyticsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DashboardAnalytics to aggregate.
     */
    where?: DashboardAnalyticsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DashboardAnalytics to fetch.
     */
    orderBy?: DashboardAnalyticsOrderByWithRelationInput | DashboardAnalyticsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DashboardAnalyticsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DashboardAnalytics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DashboardAnalytics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DashboardAnalytics
    **/
    _count?: true | DashboardAnalyticsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DashboardAnalyticsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DashboardAnalyticsMaxAggregateInputType
  }

  export type GetDashboardAnalyticsAggregateType<T extends DashboardAnalyticsAggregateArgs> = {
        [P in keyof T & keyof AggregateDashboardAnalytics]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDashboardAnalytics[P]>
      : GetScalarType<T[P], AggregateDashboardAnalytics[P]>
  }




  export type DashboardAnalyticsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DashboardAnalyticsWhereInput
    orderBy?: DashboardAnalyticsOrderByWithAggregationInput | DashboardAnalyticsOrderByWithAggregationInput[]
    by: DashboardAnalyticsScalarFieldEnum[] | DashboardAnalyticsScalarFieldEnum
    having?: DashboardAnalyticsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DashboardAnalyticsCountAggregateInputType | true
    _min?: DashboardAnalyticsMinAggregateInputType
    _max?: DashboardAnalyticsMaxAggregateInputType
  }

  export type DashboardAnalyticsGroupByOutputType = {
    id: string
    userId: string
    monthlySales: JsonValue
    aovTrend: JsonValue
    topCountries: JsonValue
    topProducts: JsonValue
    topCustomers: JsonValue
    rfmDistribution: JsonValue
    revenueByDay: JsonValue
    revenueByHour: JsonValue
    rfmData: JsonValue
    createdAt: Date
    updatedAt: Date
    _count: DashboardAnalyticsCountAggregateOutputType | null
    _min: DashboardAnalyticsMinAggregateOutputType | null
    _max: DashboardAnalyticsMaxAggregateOutputType | null
  }

  type GetDashboardAnalyticsGroupByPayload<T extends DashboardAnalyticsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DashboardAnalyticsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DashboardAnalyticsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DashboardAnalyticsGroupByOutputType[P]>
            : GetScalarType<T[P], DashboardAnalyticsGroupByOutputType[P]>
        }
      >
    >


  export type DashboardAnalyticsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    monthlySales?: boolean
    aovTrend?: boolean
    topCountries?: boolean
    topProducts?: boolean
    topCustomers?: boolean
    rfmDistribution?: boolean
    revenueByDay?: boolean
    revenueByHour?: boolean
    rfmData?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["dashboardAnalytics"]>

  export type DashboardAnalyticsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    monthlySales?: boolean
    aovTrend?: boolean
    topCountries?: boolean
    topProducts?: boolean
    topCustomers?: boolean
    rfmDistribution?: boolean
    revenueByDay?: boolean
    revenueByHour?: boolean
    rfmData?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["dashboardAnalytics"]>

  export type DashboardAnalyticsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    monthlySales?: boolean
    aovTrend?: boolean
    topCountries?: boolean
    topProducts?: boolean
    topCustomers?: boolean
    rfmDistribution?: boolean
    revenueByDay?: boolean
    revenueByHour?: boolean
    rfmData?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["dashboardAnalytics"]>

  export type DashboardAnalyticsSelectScalar = {
    id?: boolean
    userId?: boolean
    monthlySales?: boolean
    aovTrend?: boolean
    topCountries?: boolean
    topProducts?: boolean
    topCustomers?: boolean
    rfmDistribution?: boolean
    revenueByDay?: boolean
    revenueByHour?: boolean
    rfmData?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DashboardAnalyticsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "monthlySales" | "aovTrend" | "topCountries" | "topProducts" | "topCustomers" | "rfmDistribution" | "revenueByDay" | "revenueByHour" | "rfmData" | "createdAt" | "updatedAt", ExtArgs["result"]["dashboardAnalytics"]>

  export type $DashboardAnalyticsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DashboardAnalytics"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      monthlySales: Prisma.JsonValue
      aovTrend: Prisma.JsonValue
      topCountries: Prisma.JsonValue
      topProducts: Prisma.JsonValue
      topCustomers: Prisma.JsonValue
      rfmDistribution: Prisma.JsonValue
      revenueByDay: Prisma.JsonValue
      revenueByHour: Prisma.JsonValue
      rfmData: Prisma.JsonValue
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["dashboardAnalytics"]>
    composites: {}
  }

  type DashboardAnalyticsGetPayload<S extends boolean | null | undefined | DashboardAnalyticsDefaultArgs> = $Result.GetResult<Prisma.$DashboardAnalyticsPayload, S>

  type DashboardAnalyticsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DashboardAnalyticsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DashboardAnalyticsCountAggregateInputType | true
    }

  export interface DashboardAnalyticsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DashboardAnalytics'], meta: { name: 'DashboardAnalytics' } }
    /**
     * Find zero or one DashboardAnalytics that matches the filter.
     * @param {DashboardAnalyticsFindUniqueArgs} args - Arguments to find a DashboardAnalytics
     * @example
     * // Get one DashboardAnalytics
     * const dashboardAnalytics = await prisma.dashboardAnalytics.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DashboardAnalyticsFindUniqueArgs>(args: SelectSubset<T, DashboardAnalyticsFindUniqueArgs<ExtArgs>>): Prisma__DashboardAnalyticsClient<$Result.GetResult<Prisma.$DashboardAnalyticsPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one DashboardAnalytics that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DashboardAnalyticsFindUniqueOrThrowArgs} args - Arguments to find a DashboardAnalytics
     * @example
     * // Get one DashboardAnalytics
     * const dashboardAnalytics = await prisma.dashboardAnalytics.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DashboardAnalyticsFindUniqueOrThrowArgs>(args: SelectSubset<T, DashboardAnalyticsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DashboardAnalyticsClient<$Result.GetResult<Prisma.$DashboardAnalyticsPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first DashboardAnalytics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DashboardAnalyticsFindFirstArgs} args - Arguments to find a DashboardAnalytics
     * @example
     * // Get one DashboardAnalytics
     * const dashboardAnalytics = await prisma.dashboardAnalytics.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DashboardAnalyticsFindFirstArgs>(args?: SelectSubset<T, DashboardAnalyticsFindFirstArgs<ExtArgs>>): Prisma__DashboardAnalyticsClient<$Result.GetResult<Prisma.$DashboardAnalyticsPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first DashboardAnalytics that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DashboardAnalyticsFindFirstOrThrowArgs} args - Arguments to find a DashboardAnalytics
     * @example
     * // Get one DashboardAnalytics
     * const dashboardAnalytics = await prisma.dashboardAnalytics.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DashboardAnalyticsFindFirstOrThrowArgs>(args?: SelectSubset<T, DashboardAnalyticsFindFirstOrThrowArgs<ExtArgs>>): Prisma__DashboardAnalyticsClient<$Result.GetResult<Prisma.$DashboardAnalyticsPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more DashboardAnalytics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DashboardAnalyticsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DashboardAnalytics
     * const dashboardAnalytics = await prisma.dashboardAnalytics.findMany()
     * 
     * // Get first 10 DashboardAnalytics
     * const dashboardAnalytics = await prisma.dashboardAnalytics.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dashboardAnalyticsWithIdOnly = await prisma.dashboardAnalytics.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DashboardAnalyticsFindManyArgs>(args?: SelectSubset<T, DashboardAnalyticsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DashboardAnalyticsPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a DashboardAnalytics.
     * @param {DashboardAnalyticsCreateArgs} args - Arguments to create a DashboardAnalytics.
     * @example
     * // Create one DashboardAnalytics
     * const DashboardAnalytics = await prisma.dashboardAnalytics.create({
     *   data: {
     *     // ... data to create a DashboardAnalytics
     *   }
     * })
     * 
     */
    create<T extends DashboardAnalyticsCreateArgs>(args: SelectSubset<T, DashboardAnalyticsCreateArgs<ExtArgs>>): Prisma__DashboardAnalyticsClient<$Result.GetResult<Prisma.$DashboardAnalyticsPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many DashboardAnalytics.
     * @param {DashboardAnalyticsCreateManyArgs} args - Arguments to create many DashboardAnalytics.
     * @example
     * // Create many DashboardAnalytics
     * const dashboardAnalytics = await prisma.dashboardAnalytics.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DashboardAnalyticsCreateManyArgs>(args?: SelectSubset<T, DashboardAnalyticsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DashboardAnalytics and returns the data saved in the database.
     * @param {DashboardAnalyticsCreateManyAndReturnArgs} args - Arguments to create many DashboardAnalytics.
     * @example
     * // Create many DashboardAnalytics
     * const dashboardAnalytics = await prisma.dashboardAnalytics.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DashboardAnalytics and only return the `id`
     * const dashboardAnalyticsWithIdOnly = await prisma.dashboardAnalytics.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DashboardAnalyticsCreateManyAndReturnArgs>(args?: SelectSubset<T, DashboardAnalyticsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DashboardAnalyticsPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a DashboardAnalytics.
     * @param {DashboardAnalyticsDeleteArgs} args - Arguments to delete one DashboardAnalytics.
     * @example
     * // Delete one DashboardAnalytics
     * const DashboardAnalytics = await prisma.dashboardAnalytics.delete({
     *   where: {
     *     // ... filter to delete one DashboardAnalytics
     *   }
     * })
     * 
     */
    delete<T extends DashboardAnalyticsDeleteArgs>(args: SelectSubset<T, DashboardAnalyticsDeleteArgs<ExtArgs>>): Prisma__DashboardAnalyticsClient<$Result.GetResult<Prisma.$DashboardAnalyticsPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one DashboardAnalytics.
     * @param {DashboardAnalyticsUpdateArgs} args - Arguments to update one DashboardAnalytics.
     * @example
     * // Update one DashboardAnalytics
     * const dashboardAnalytics = await prisma.dashboardAnalytics.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DashboardAnalyticsUpdateArgs>(args: SelectSubset<T, DashboardAnalyticsUpdateArgs<ExtArgs>>): Prisma__DashboardAnalyticsClient<$Result.GetResult<Prisma.$DashboardAnalyticsPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more DashboardAnalytics.
     * @param {DashboardAnalyticsDeleteManyArgs} args - Arguments to filter DashboardAnalytics to delete.
     * @example
     * // Delete a few DashboardAnalytics
     * const { count } = await prisma.dashboardAnalytics.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DashboardAnalyticsDeleteManyArgs>(args?: SelectSubset<T, DashboardAnalyticsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DashboardAnalytics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DashboardAnalyticsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DashboardAnalytics
     * const dashboardAnalytics = await prisma.dashboardAnalytics.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DashboardAnalyticsUpdateManyArgs>(args: SelectSubset<T, DashboardAnalyticsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DashboardAnalytics and returns the data updated in the database.
     * @param {DashboardAnalyticsUpdateManyAndReturnArgs} args - Arguments to update many DashboardAnalytics.
     * @example
     * // Update many DashboardAnalytics
     * const dashboardAnalytics = await prisma.dashboardAnalytics.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DashboardAnalytics and only return the `id`
     * const dashboardAnalyticsWithIdOnly = await prisma.dashboardAnalytics.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DashboardAnalyticsUpdateManyAndReturnArgs>(args: SelectSubset<T, DashboardAnalyticsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DashboardAnalyticsPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one DashboardAnalytics.
     * @param {DashboardAnalyticsUpsertArgs} args - Arguments to update or create a DashboardAnalytics.
     * @example
     * // Update or create a DashboardAnalytics
     * const dashboardAnalytics = await prisma.dashboardAnalytics.upsert({
     *   create: {
     *     // ... data to create a DashboardAnalytics
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DashboardAnalytics we want to update
     *   }
     * })
     */
    upsert<T extends DashboardAnalyticsUpsertArgs>(args: SelectSubset<T, DashboardAnalyticsUpsertArgs<ExtArgs>>): Prisma__DashboardAnalyticsClient<$Result.GetResult<Prisma.$DashboardAnalyticsPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of DashboardAnalytics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DashboardAnalyticsCountArgs} args - Arguments to filter DashboardAnalytics to count.
     * @example
     * // Count the number of DashboardAnalytics
     * const count = await prisma.dashboardAnalytics.count({
     *   where: {
     *     // ... the filter for the DashboardAnalytics we want to count
     *   }
     * })
    **/
    count<T extends DashboardAnalyticsCountArgs>(
      args?: Subset<T, DashboardAnalyticsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DashboardAnalyticsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DashboardAnalytics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DashboardAnalyticsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DashboardAnalyticsAggregateArgs>(args: Subset<T, DashboardAnalyticsAggregateArgs>): Prisma.PrismaPromise<GetDashboardAnalyticsAggregateType<T>>

    /**
     * Group by DashboardAnalytics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DashboardAnalyticsGroupByArgs} args - Group by arguments.
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
      T extends DashboardAnalyticsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DashboardAnalyticsGroupByArgs['orderBy'] }
        : { orderBy?: DashboardAnalyticsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DashboardAnalyticsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDashboardAnalyticsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DashboardAnalytics model
   */
  readonly fields: DashboardAnalyticsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DashboardAnalytics.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DashboardAnalyticsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the DashboardAnalytics model
   */ 
  interface DashboardAnalyticsFieldRefs {
    readonly id: FieldRef<"DashboardAnalytics", 'String'>
    readonly userId: FieldRef<"DashboardAnalytics", 'String'>
    readonly monthlySales: FieldRef<"DashboardAnalytics", 'Json'>
    readonly aovTrend: FieldRef<"DashboardAnalytics", 'Json'>
    readonly topCountries: FieldRef<"DashboardAnalytics", 'Json'>
    readonly topProducts: FieldRef<"DashboardAnalytics", 'Json'>
    readonly topCustomers: FieldRef<"DashboardAnalytics", 'Json'>
    readonly rfmDistribution: FieldRef<"DashboardAnalytics", 'Json'>
    readonly revenueByDay: FieldRef<"DashboardAnalytics", 'Json'>
    readonly revenueByHour: FieldRef<"DashboardAnalytics", 'Json'>
    readonly rfmData: FieldRef<"DashboardAnalytics", 'Json'>
    readonly createdAt: FieldRef<"DashboardAnalytics", 'DateTime'>
    readonly updatedAt: FieldRef<"DashboardAnalytics", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DashboardAnalytics findUnique
   */
  export type DashboardAnalyticsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DashboardAnalytics
     */
    select?: DashboardAnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DashboardAnalytics
     */
    omit?: DashboardAnalyticsOmit<ExtArgs> | null
    /**
     * Filter, which DashboardAnalytics to fetch.
     */
    where: DashboardAnalyticsWhereUniqueInput
  }

  /**
   * DashboardAnalytics findUniqueOrThrow
   */
  export type DashboardAnalyticsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DashboardAnalytics
     */
    select?: DashboardAnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DashboardAnalytics
     */
    omit?: DashboardAnalyticsOmit<ExtArgs> | null
    /**
     * Filter, which DashboardAnalytics to fetch.
     */
    where: DashboardAnalyticsWhereUniqueInput
  }

  /**
   * DashboardAnalytics findFirst
   */
  export type DashboardAnalyticsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DashboardAnalytics
     */
    select?: DashboardAnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DashboardAnalytics
     */
    omit?: DashboardAnalyticsOmit<ExtArgs> | null
    /**
     * Filter, which DashboardAnalytics to fetch.
     */
    where?: DashboardAnalyticsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DashboardAnalytics to fetch.
     */
    orderBy?: DashboardAnalyticsOrderByWithRelationInput | DashboardAnalyticsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DashboardAnalytics.
     */
    cursor?: DashboardAnalyticsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DashboardAnalytics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DashboardAnalytics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DashboardAnalytics.
     */
    distinct?: DashboardAnalyticsScalarFieldEnum | DashboardAnalyticsScalarFieldEnum[]
  }

  /**
   * DashboardAnalytics findFirstOrThrow
   */
  export type DashboardAnalyticsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DashboardAnalytics
     */
    select?: DashboardAnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DashboardAnalytics
     */
    omit?: DashboardAnalyticsOmit<ExtArgs> | null
    /**
     * Filter, which DashboardAnalytics to fetch.
     */
    where?: DashboardAnalyticsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DashboardAnalytics to fetch.
     */
    orderBy?: DashboardAnalyticsOrderByWithRelationInput | DashboardAnalyticsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DashboardAnalytics.
     */
    cursor?: DashboardAnalyticsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DashboardAnalytics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DashboardAnalytics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DashboardAnalytics.
     */
    distinct?: DashboardAnalyticsScalarFieldEnum | DashboardAnalyticsScalarFieldEnum[]
  }

  /**
   * DashboardAnalytics findMany
   */
  export type DashboardAnalyticsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DashboardAnalytics
     */
    select?: DashboardAnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DashboardAnalytics
     */
    omit?: DashboardAnalyticsOmit<ExtArgs> | null
    /**
     * Filter, which DashboardAnalytics to fetch.
     */
    where?: DashboardAnalyticsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DashboardAnalytics to fetch.
     */
    orderBy?: DashboardAnalyticsOrderByWithRelationInput | DashboardAnalyticsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DashboardAnalytics.
     */
    cursor?: DashboardAnalyticsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DashboardAnalytics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DashboardAnalytics.
     */
    skip?: number
    distinct?: DashboardAnalyticsScalarFieldEnum | DashboardAnalyticsScalarFieldEnum[]
  }

  /**
   * DashboardAnalytics create
   */
  export type DashboardAnalyticsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DashboardAnalytics
     */
    select?: DashboardAnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DashboardAnalytics
     */
    omit?: DashboardAnalyticsOmit<ExtArgs> | null
    /**
     * The data needed to create a DashboardAnalytics.
     */
    data: XOR<DashboardAnalyticsCreateInput, DashboardAnalyticsUncheckedCreateInput>
  }

  /**
   * DashboardAnalytics createMany
   */
  export type DashboardAnalyticsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DashboardAnalytics.
     */
    data: DashboardAnalyticsCreateManyInput | DashboardAnalyticsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DashboardAnalytics createManyAndReturn
   */
  export type DashboardAnalyticsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DashboardAnalytics
     */
    select?: DashboardAnalyticsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DashboardAnalytics
     */
    omit?: DashboardAnalyticsOmit<ExtArgs> | null
    /**
     * The data used to create many DashboardAnalytics.
     */
    data: DashboardAnalyticsCreateManyInput | DashboardAnalyticsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DashboardAnalytics update
   */
  export type DashboardAnalyticsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DashboardAnalytics
     */
    select?: DashboardAnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DashboardAnalytics
     */
    omit?: DashboardAnalyticsOmit<ExtArgs> | null
    /**
     * The data needed to update a DashboardAnalytics.
     */
    data: XOR<DashboardAnalyticsUpdateInput, DashboardAnalyticsUncheckedUpdateInput>
    /**
     * Choose, which DashboardAnalytics to update.
     */
    where: DashboardAnalyticsWhereUniqueInput
  }

  /**
   * DashboardAnalytics updateMany
   */
  export type DashboardAnalyticsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DashboardAnalytics.
     */
    data: XOR<DashboardAnalyticsUpdateManyMutationInput, DashboardAnalyticsUncheckedUpdateManyInput>
    /**
     * Filter which DashboardAnalytics to update
     */
    where?: DashboardAnalyticsWhereInput
    /**
     * Limit how many DashboardAnalytics to update.
     */
    limit?: number
  }

  /**
   * DashboardAnalytics updateManyAndReturn
   */
  export type DashboardAnalyticsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DashboardAnalytics
     */
    select?: DashboardAnalyticsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DashboardAnalytics
     */
    omit?: DashboardAnalyticsOmit<ExtArgs> | null
    /**
     * The data used to update DashboardAnalytics.
     */
    data: XOR<DashboardAnalyticsUpdateManyMutationInput, DashboardAnalyticsUncheckedUpdateManyInput>
    /**
     * Filter which DashboardAnalytics to update
     */
    where?: DashboardAnalyticsWhereInput
    /**
     * Limit how many DashboardAnalytics to update.
     */
    limit?: number
  }

  /**
   * DashboardAnalytics upsert
   */
  export type DashboardAnalyticsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DashboardAnalytics
     */
    select?: DashboardAnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DashboardAnalytics
     */
    omit?: DashboardAnalyticsOmit<ExtArgs> | null
    /**
     * The filter to search for the DashboardAnalytics to update in case it exists.
     */
    where: DashboardAnalyticsWhereUniqueInput
    /**
     * In case the DashboardAnalytics found by the `where` argument doesn't exist, create a new DashboardAnalytics with this data.
     */
    create: XOR<DashboardAnalyticsCreateInput, DashboardAnalyticsUncheckedCreateInput>
    /**
     * In case the DashboardAnalytics was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DashboardAnalyticsUpdateInput, DashboardAnalyticsUncheckedUpdateInput>
  }

  /**
   * DashboardAnalytics delete
   */
  export type DashboardAnalyticsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DashboardAnalytics
     */
    select?: DashboardAnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DashboardAnalytics
     */
    omit?: DashboardAnalyticsOmit<ExtArgs> | null
    /**
     * Filter which DashboardAnalytics to delete.
     */
    where: DashboardAnalyticsWhereUniqueInput
  }

  /**
   * DashboardAnalytics deleteMany
   */
  export type DashboardAnalyticsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DashboardAnalytics to delete
     */
    where?: DashboardAnalyticsWhereInput
    /**
     * Limit how many DashboardAnalytics to delete.
     */
    limit?: number
  }

  /**
   * DashboardAnalytics without action
   */
  export type DashboardAnalyticsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DashboardAnalytics
     */
    select?: DashboardAnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DashboardAnalytics
     */
    omit?: DashboardAnalyticsOmit<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    clerkId: 'clerkId',
    email: 'email',
    profileImage: 'profileImage',
    stripeConnectId: 'stripeConnectId',
    lastLoginAt: 'lastLoginAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt',
    subscription: 'subscription',
    stripeCustomerId: 'stripeCustomerId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const WebinarScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    startTime: 'startTime',
    endTime: 'endTime',
    duration: 'duration',
    webinarStatus: 'webinarStatus',
    presenterId: 'presenterId',
    tags: 'tags',
    ctaLabel: 'ctaLabel',
    ctaType: 'ctaType',
    ctaUrl: 'ctaUrl',
    couponCode: 'couponCode',
    couponEnabled: 'couponEnabled',
    couponExpiry: 'couponExpiry',
    lockChat: 'lockChat',
    stripeProductId: 'stripeProductId',
    aiAgentId: 'aiAgentId',
    priceId: 'priceId',
    recordingUrl: 'recordingUrl',
    thumbnail: 'thumbnail',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt',
    attendeeId: 'attendeeId'
  };

  export type WebinarScalarFieldEnum = (typeof WebinarScalarFieldEnum)[keyof typeof WebinarScalarFieldEnum]


  export const AttendeeScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    callStatus: 'callStatus',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AttendeeScalarFieldEnum = (typeof AttendeeScalarFieldEnum)[keyof typeof AttendeeScalarFieldEnum]


  export const AttendanceScalarFieldEnum: {
    id: 'id',
    webinarId: 'webinarId',
    joinedAt: 'joinedAt',
    leftAt: 'leftAt',
    attendedType: 'attendedType',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    attendeeId: 'attendeeId',
    userId: 'userId'
  };

  export type AttendanceScalarFieldEnum = (typeof AttendanceScalarFieldEnum)[keyof typeof AttendanceScalarFieldEnum]


  export const AiAgentsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    firstMessage: 'firstMessage',
    prompt: 'prompt',
    model: 'model',
    provider: 'provider',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AiAgentsScalarFieldEnum = (typeof AiAgentsScalarFieldEnum)[keyof typeof AiAgentsScalarFieldEnum]


  export const SalesTransactionScalarFieldEnum: {
    id: 'id',
    invoice: 'invoice',
    stockCode: 'stockCode',
    description: 'description',
    quantity: 'quantity',
    invoiceDate: 'invoiceDate',
    price: 'price',
    customerId: 'customerId',
    country: 'country',
    totalPrice: 'totalPrice',
    invoiceMonth: 'invoiceMonth',
    dayOfWeek: 'dayOfWeek',
    hourOfDay: 'hourOfDay',
    isReturn: 'isReturn',
    isCreditNote: 'isCreditNote',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SalesTransactionScalarFieldEnum = (typeof SalesTransactionScalarFieldEnum)[keyof typeof SalesTransactionScalarFieldEnum]


  export const RFMAnalysisScalarFieldEnum: {
    id: 'id',
    customerId: 'customerId',
    recency: 'recency',
    frequency: 'frequency',
    monetary: 'monetary',
    rScore: 'rScore',
    fScore: 'fScore',
    mScore: 'mScore',
    rfmScore: 'rfmScore',
    rfmSegment: 'rfmSegment',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RFMAnalysisScalarFieldEnum = (typeof RFMAnalysisScalarFieldEnum)[keyof typeof RFMAnalysisScalarFieldEnum]


  export const DashboardAnalyticsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    monthlySales: 'monthlySales',
    aovTrend: 'aovTrend',
    topCountries: 'topCountries',
    topProducts: 'topProducts',
    topCustomers: 'topCustomers',
    rfmDistribution: 'rfmDistribution',
    revenueByDay: 'revenueByDay',
    revenueByHour: 'revenueByHour',
    rfmData: 'rfmData',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DashboardAnalyticsScalarFieldEnum = (typeof DashboardAnalyticsScalarFieldEnum)[keyof typeof DashboardAnalyticsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'WebinarStatusEnum'
   */
  export type EnumWebinarStatusEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WebinarStatusEnum'>
    


  /**
   * Reference to a field of type 'WebinarStatusEnum[]'
   */
  export type ListEnumWebinarStatusEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WebinarStatusEnum[]'>
    


  /**
   * Reference to a field of type 'CtaTypeEnum'
   */
  export type EnumCtaTypeEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CtaTypeEnum'>
    


  /**
   * Reference to a field of type 'CtaTypeEnum[]'
   */
  export type ListEnumCtaTypeEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CtaTypeEnum[]'>
    


  /**
   * Reference to a field of type 'CallStatusEnum'
   */
  export type EnumCallStatusEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CallStatusEnum'>
    


  /**
   * Reference to a field of type 'CallStatusEnum[]'
   */
  export type ListEnumCallStatusEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CallStatusEnum[]'>
    


  /**
   * Reference to a field of type 'AttendedTypeEnum'
   */
  export type EnumAttendedTypeEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AttendedTypeEnum'>
    


  /**
   * Reference to a field of type 'AttendedTypeEnum[]'
   */
  export type ListEnumAttendedTypeEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AttendedTypeEnum[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: UuidFilter<"User"> | string
    name?: StringFilter<"User"> | string
    clerkId?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    profileImage?: StringFilter<"User"> | string
    stripeConnectId?: StringNullableFilter<"User"> | string | null
    lastLoginAt?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    subscription?: BoolFilter<"User"> | boolean
    stripeCustomerId?: StringNullableFilter<"User"> | string | null
    webinars?: WebinarListRelationFilter
    aiAgents?: AiAgentsListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    clerkId?: SortOrder
    email?: SortOrder
    profileImage?: SortOrder
    stripeConnectId?: SortOrderInput | SortOrder
    lastLoginAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    subscription?: SortOrder
    stripeCustomerId?: SortOrderInput | SortOrder
    webinars?: WebinarOrderByRelationAggregateInput
    aiAgents?: AiAgentsOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    clerkId?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    profileImage?: StringFilter<"User"> | string
    stripeConnectId?: StringNullableFilter<"User"> | string | null
    lastLoginAt?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    subscription?: BoolFilter<"User"> | boolean
    stripeCustomerId?: StringNullableFilter<"User"> | string | null
    webinars?: WebinarListRelationFilter
    aiAgents?: AiAgentsListRelationFilter
  }, "id" | "clerkId" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    clerkId?: SortOrder
    email?: SortOrder
    profileImage?: SortOrder
    stripeConnectId?: SortOrderInput | SortOrder
    lastLoginAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    subscription?: SortOrder
    stripeCustomerId?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    clerkId?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    profileImage?: StringWithAggregatesFilter<"User"> | string
    stripeConnectId?: StringNullableWithAggregatesFilter<"User"> | string | null
    lastLoginAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    subscription?: BoolWithAggregatesFilter<"User"> | boolean
    stripeCustomerId?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type WebinarWhereInput = {
    AND?: WebinarWhereInput | WebinarWhereInput[]
    OR?: WebinarWhereInput[]
    NOT?: WebinarWhereInput | WebinarWhereInput[]
    id?: UuidFilter<"Webinar"> | string
    title?: StringFilter<"Webinar"> | string
    description?: StringNullableFilter<"Webinar"> | string | null
    startTime?: DateTimeFilter<"Webinar"> | Date | string
    endTime?: DateTimeNullableFilter<"Webinar"> | Date | string | null
    duration?: IntFilter<"Webinar"> | number
    webinarStatus?: EnumWebinarStatusEnumFilter<"Webinar"> | $Enums.WebinarStatusEnum
    presenterId?: UuidFilter<"Webinar"> | string
    tags?: StringNullableListFilter<"Webinar">
    ctaLabel?: StringNullableFilter<"Webinar"> | string | null
    ctaType?: EnumCtaTypeEnumFilter<"Webinar"> | $Enums.CtaTypeEnum
    ctaUrl?: StringNullableFilter<"Webinar"> | string | null
    couponCode?: StringNullableFilter<"Webinar"> | string | null
    couponEnabled?: BoolFilter<"Webinar"> | boolean
    couponExpiry?: DateTimeNullableFilter<"Webinar"> | Date | string | null
    lockChat?: BoolFilter<"Webinar"> | boolean
    stripeProductId?: StringNullableFilter<"Webinar"> | string | null
    aiAgentId?: UuidNullableFilter<"Webinar"> | string | null
    priceId?: StringNullableFilter<"Webinar"> | string | null
    recordingUrl?: StringNullableFilter<"Webinar"> | string | null
    thumbnail?: StringNullableFilter<"Webinar"> | string | null
    createdAt?: DateTimeFilter<"Webinar"> | Date | string
    updatedAt?: DateTimeFilter<"Webinar"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Webinar"> | Date | string | null
    attendeeId?: UuidNullableFilter<"Webinar"> | string | null
    attendances?: AttendanceListRelationFilter
    Attendee?: XOR<AttendeeNullableScalarRelationFilter, AttendeeWhereInput> | null
    presenter?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type WebinarOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    startTime?: SortOrder
    endTime?: SortOrderInput | SortOrder
    duration?: SortOrder
    webinarStatus?: SortOrder
    presenterId?: SortOrder
    tags?: SortOrder
    ctaLabel?: SortOrderInput | SortOrder
    ctaType?: SortOrder
    ctaUrl?: SortOrderInput | SortOrder
    couponCode?: SortOrderInput | SortOrder
    couponEnabled?: SortOrder
    couponExpiry?: SortOrderInput | SortOrder
    lockChat?: SortOrder
    stripeProductId?: SortOrderInput | SortOrder
    aiAgentId?: SortOrderInput | SortOrder
    priceId?: SortOrderInput | SortOrder
    recordingUrl?: SortOrderInput | SortOrder
    thumbnail?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    attendeeId?: SortOrderInput | SortOrder
    attendances?: AttendanceOrderByRelationAggregateInput
    Attendee?: AttendeeOrderByWithRelationInput
    presenter?: UserOrderByWithRelationInput
  }

  export type WebinarWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WebinarWhereInput | WebinarWhereInput[]
    OR?: WebinarWhereInput[]
    NOT?: WebinarWhereInput | WebinarWhereInput[]
    title?: StringFilter<"Webinar"> | string
    description?: StringNullableFilter<"Webinar"> | string | null
    startTime?: DateTimeFilter<"Webinar"> | Date | string
    endTime?: DateTimeNullableFilter<"Webinar"> | Date | string | null
    duration?: IntFilter<"Webinar"> | number
    webinarStatus?: EnumWebinarStatusEnumFilter<"Webinar"> | $Enums.WebinarStatusEnum
    presenterId?: UuidFilter<"Webinar"> | string
    tags?: StringNullableListFilter<"Webinar">
    ctaLabel?: StringNullableFilter<"Webinar"> | string | null
    ctaType?: EnumCtaTypeEnumFilter<"Webinar"> | $Enums.CtaTypeEnum
    ctaUrl?: StringNullableFilter<"Webinar"> | string | null
    couponCode?: StringNullableFilter<"Webinar"> | string | null
    couponEnabled?: BoolFilter<"Webinar"> | boolean
    couponExpiry?: DateTimeNullableFilter<"Webinar"> | Date | string | null
    lockChat?: BoolFilter<"Webinar"> | boolean
    stripeProductId?: StringNullableFilter<"Webinar"> | string | null
    aiAgentId?: UuidNullableFilter<"Webinar"> | string | null
    priceId?: StringNullableFilter<"Webinar"> | string | null
    recordingUrl?: StringNullableFilter<"Webinar"> | string | null
    thumbnail?: StringNullableFilter<"Webinar"> | string | null
    createdAt?: DateTimeFilter<"Webinar"> | Date | string
    updatedAt?: DateTimeFilter<"Webinar"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Webinar"> | Date | string | null
    attendeeId?: UuidNullableFilter<"Webinar"> | string | null
    attendances?: AttendanceListRelationFilter
    Attendee?: XOR<AttendeeNullableScalarRelationFilter, AttendeeWhereInput> | null
    presenter?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type WebinarOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    startTime?: SortOrder
    endTime?: SortOrderInput | SortOrder
    duration?: SortOrder
    webinarStatus?: SortOrder
    presenterId?: SortOrder
    tags?: SortOrder
    ctaLabel?: SortOrderInput | SortOrder
    ctaType?: SortOrder
    ctaUrl?: SortOrderInput | SortOrder
    couponCode?: SortOrderInput | SortOrder
    couponEnabled?: SortOrder
    couponExpiry?: SortOrderInput | SortOrder
    lockChat?: SortOrder
    stripeProductId?: SortOrderInput | SortOrder
    aiAgentId?: SortOrderInput | SortOrder
    priceId?: SortOrderInput | SortOrder
    recordingUrl?: SortOrderInput | SortOrder
    thumbnail?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    attendeeId?: SortOrderInput | SortOrder
    _count?: WebinarCountOrderByAggregateInput
    _avg?: WebinarAvgOrderByAggregateInput
    _max?: WebinarMaxOrderByAggregateInput
    _min?: WebinarMinOrderByAggregateInput
    _sum?: WebinarSumOrderByAggregateInput
  }

  export type WebinarScalarWhereWithAggregatesInput = {
    AND?: WebinarScalarWhereWithAggregatesInput | WebinarScalarWhereWithAggregatesInput[]
    OR?: WebinarScalarWhereWithAggregatesInput[]
    NOT?: WebinarScalarWhereWithAggregatesInput | WebinarScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Webinar"> | string
    title?: StringWithAggregatesFilter<"Webinar"> | string
    description?: StringNullableWithAggregatesFilter<"Webinar"> | string | null
    startTime?: DateTimeWithAggregatesFilter<"Webinar"> | Date | string
    endTime?: DateTimeNullableWithAggregatesFilter<"Webinar"> | Date | string | null
    duration?: IntWithAggregatesFilter<"Webinar"> | number
    webinarStatus?: EnumWebinarStatusEnumWithAggregatesFilter<"Webinar"> | $Enums.WebinarStatusEnum
    presenterId?: UuidWithAggregatesFilter<"Webinar"> | string
    tags?: StringNullableListFilter<"Webinar">
    ctaLabel?: StringNullableWithAggregatesFilter<"Webinar"> | string | null
    ctaType?: EnumCtaTypeEnumWithAggregatesFilter<"Webinar"> | $Enums.CtaTypeEnum
    ctaUrl?: StringNullableWithAggregatesFilter<"Webinar"> | string | null
    couponCode?: StringNullableWithAggregatesFilter<"Webinar"> | string | null
    couponEnabled?: BoolWithAggregatesFilter<"Webinar"> | boolean
    couponExpiry?: DateTimeNullableWithAggregatesFilter<"Webinar"> | Date | string | null
    lockChat?: BoolWithAggregatesFilter<"Webinar"> | boolean
    stripeProductId?: StringNullableWithAggregatesFilter<"Webinar"> | string | null
    aiAgentId?: UuidNullableWithAggregatesFilter<"Webinar"> | string | null
    priceId?: StringNullableWithAggregatesFilter<"Webinar"> | string | null
    recordingUrl?: StringNullableWithAggregatesFilter<"Webinar"> | string | null
    thumbnail?: StringNullableWithAggregatesFilter<"Webinar"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Webinar"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Webinar"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Webinar"> | Date | string | null
    attendeeId?: UuidNullableWithAggregatesFilter<"Webinar"> | string | null
  }

  export type AttendeeWhereInput = {
    AND?: AttendeeWhereInput | AttendeeWhereInput[]
    OR?: AttendeeWhereInput[]
    NOT?: AttendeeWhereInput | AttendeeWhereInput[]
    id?: UuidFilter<"Attendee"> | string
    email?: StringFilter<"Attendee"> | string
    name?: StringFilter<"Attendee"> | string
    callStatus?: EnumCallStatusEnumFilter<"Attendee"> | $Enums.CallStatusEnum
    createdAt?: DateTimeFilter<"Attendee"> | Date | string
    updatedAt?: DateTimeFilter<"Attendee"> | Date | string
    Attendance?: AttendanceListRelationFilter
    Webinar?: WebinarListRelationFilter
  }

  export type AttendeeOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    callStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Attendance?: AttendanceOrderByRelationAggregateInput
    Webinar?: WebinarOrderByRelationAggregateInput
  }

  export type AttendeeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: AttendeeWhereInput | AttendeeWhereInput[]
    OR?: AttendeeWhereInput[]
    NOT?: AttendeeWhereInput | AttendeeWhereInput[]
    name?: StringFilter<"Attendee"> | string
    callStatus?: EnumCallStatusEnumFilter<"Attendee"> | $Enums.CallStatusEnum
    createdAt?: DateTimeFilter<"Attendee"> | Date | string
    updatedAt?: DateTimeFilter<"Attendee"> | Date | string
    Attendance?: AttendanceListRelationFilter
    Webinar?: WebinarListRelationFilter
  }, "id" | "email">

  export type AttendeeOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    callStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AttendeeCountOrderByAggregateInput
    _max?: AttendeeMaxOrderByAggregateInput
    _min?: AttendeeMinOrderByAggregateInput
  }

  export type AttendeeScalarWhereWithAggregatesInput = {
    AND?: AttendeeScalarWhereWithAggregatesInput | AttendeeScalarWhereWithAggregatesInput[]
    OR?: AttendeeScalarWhereWithAggregatesInput[]
    NOT?: AttendeeScalarWhereWithAggregatesInput | AttendeeScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Attendee"> | string
    email?: StringWithAggregatesFilter<"Attendee"> | string
    name?: StringWithAggregatesFilter<"Attendee"> | string
    callStatus?: EnumCallStatusEnumWithAggregatesFilter<"Attendee"> | $Enums.CallStatusEnum
    createdAt?: DateTimeWithAggregatesFilter<"Attendee"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Attendee"> | Date | string
  }

  export type AttendanceWhereInput = {
    AND?: AttendanceWhereInput | AttendanceWhereInput[]
    OR?: AttendanceWhereInput[]
    NOT?: AttendanceWhereInput | AttendanceWhereInput[]
    id?: UuidFilter<"Attendance"> | string
    webinarId?: UuidFilter<"Attendance"> | string
    joinedAt?: DateTimeFilter<"Attendance"> | Date | string
    leftAt?: DateTimeNullableFilter<"Attendance"> | Date | string | null
    attendedType?: EnumAttendedTypeEnumFilter<"Attendance"> | $Enums.AttendedTypeEnum
    createdAt?: DateTimeFilter<"Attendance"> | Date | string
    updatedAt?: DateTimeFilter<"Attendance"> | Date | string
    attendeeId?: UuidFilter<"Attendance"> | string
    userId?: UuidNullableFilter<"Attendance"> | string | null
    user?: XOR<AttendeeScalarRelationFilter, AttendeeWhereInput>
    webinar?: XOR<WebinarScalarRelationFilter, WebinarWhereInput>
  }

  export type AttendanceOrderByWithRelationInput = {
    id?: SortOrder
    webinarId?: SortOrder
    joinedAt?: SortOrder
    leftAt?: SortOrderInput | SortOrder
    attendedType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    attendeeId?: SortOrder
    userId?: SortOrderInput | SortOrder
    user?: AttendeeOrderByWithRelationInput
    webinar?: WebinarOrderByWithRelationInput
  }

  export type AttendanceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    attendeeId_webinarId?: AttendanceAttendeeIdWebinarIdCompoundUniqueInput
    AND?: AttendanceWhereInput | AttendanceWhereInput[]
    OR?: AttendanceWhereInput[]
    NOT?: AttendanceWhereInput | AttendanceWhereInput[]
    webinarId?: UuidFilter<"Attendance"> | string
    joinedAt?: DateTimeFilter<"Attendance"> | Date | string
    leftAt?: DateTimeNullableFilter<"Attendance"> | Date | string | null
    attendedType?: EnumAttendedTypeEnumFilter<"Attendance"> | $Enums.AttendedTypeEnum
    createdAt?: DateTimeFilter<"Attendance"> | Date | string
    updatedAt?: DateTimeFilter<"Attendance"> | Date | string
    attendeeId?: UuidFilter<"Attendance"> | string
    userId?: UuidNullableFilter<"Attendance"> | string | null
    user?: XOR<AttendeeScalarRelationFilter, AttendeeWhereInput>
    webinar?: XOR<WebinarScalarRelationFilter, WebinarWhereInput>
  }, "id" | "attendeeId_webinarId">

  export type AttendanceOrderByWithAggregationInput = {
    id?: SortOrder
    webinarId?: SortOrder
    joinedAt?: SortOrder
    leftAt?: SortOrderInput | SortOrder
    attendedType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    attendeeId?: SortOrder
    userId?: SortOrderInput | SortOrder
    _count?: AttendanceCountOrderByAggregateInput
    _max?: AttendanceMaxOrderByAggregateInput
    _min?: AttendanceMinOrderByAggregateInput
  }

  export type AttendanceScalarWhereWithAggregatesInput = {
    AND?: AttendanceScalarWhereWithAggregatesInput | AttendanceScalarWhereWithAggregatesInput[]
    OR?: AttendanceScalarWhereWithAggregatesInput[]
    NOT?: AttendanceScalarWhereWithAggregatesInput | AttendanceScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Attendance"> | string
    webinarId?: UuidWithAggregatesFilter<"Attendance"> | string
    joinedAt?: DateTimeWithAggregatesFilter<"Attendance"> | Date | string
    leftAt?: DateTimeNullableWithAggregatesFilter<"Attendance"> | Date | string | null
    attendedType?: EnumAttendedTypeEnumWithAggregatesFilter<"Attendance"> | $Enums.AttendedTypeEnum
    createdAt?: DateTimeWithAggregatesFilter<"Attendance"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Attendance"> | Date | string
    attendeeId?: UuidWithAggregatesFilter<"Attendance"> | string
    userId?: UuidNullableWithAggregatesFilter<"Attendance"> | string | null
  }

  export type AiAgentsWhereInput = {
    AND?: AiAgentsWhereInput | AiAgentsWhereInput[]
    OR?: AiAgentsWhereInput[]
    NOT?: AiAgentsWhereInput | AiAgentsWhereInput[]
    id?: UuidFilter<"AiAgents"> | string
    name?: StringFilter<"AiAgents"> | string
    firstMessage?: StringFilter<"AiAgents"> | string
    prompt?: StringFilter<"AiAgents"> | string
    model?: StringFilter<"AiAgents"> | string
    provider?: StringFilter<"AiAgents"> | string
    userId?: UuidFilter<"AiAgents"> | string
    createdAt?: DateTimeFilter<"AiAgents"> | Date | string
    updatedAt?: DateTimeFilter<"AiAgents"> | Date | string
    User?: UserListRelationFilter
  }

  export type AiAgentsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    firstMessage?: SortOrder
    prompt?: SortOrder
    model?: SortOrder
    provider?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    User?: UserOrderByRelationAggregateInput
  }

  export type AiAgentsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AiAgentsWhereInput | AiAgentsWhereInput[]
    OR?: AiAgentsWhereInput[]
    NOT?: AiAgentsWhereInput | AiAgentsWhereInput[]
    name?: StringFilter<"AiAgents"> | string
    firstMessage?: StringFilter<"AiAgents"> | string
    prompt?: StringFilter<"AiAgents"> | string
    model?: StringFilter<"AiAgents"> | string
    provider?: StringFilter<"AiAgents"> | string
    userId?: UuidFilter<"AiAgents"> | string
    createdAt?: DateTimeFilter<"AiAgents"> | Date | string
    updatedAt?: DateTimeFilter<"AiAgents"> | Date | string
    User?: UserListRelationFilter
  }, "id">

  export type AiAgentsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    firstMessage?: SortOrder
    prompt?: SortOrder
    model?: SortOrder
    provider?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AiAgentsCountOrderByAggregateInput
    _max?: AiAgentsMaxOrderByAggregateInput
    _min?: AiAgentsMinOrderByAggregateInput
  }

  export type AiAgentsScalarWhereWithAggregatesInput = {
    AND?: AiAgentsScalarWhereWithAggregatesInput | AiAgentsScalarWhereWithAggregatesInput[]
    OR?: AiAgentsScalarWhereWithAggregatesInput[]
    NOT?: AiAgentsScalarWhereWithAggregatesInput | AiAgentsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"AiAgents"> | string
    name?: StringWithAggregatesFilter<"AiAgents"> | string
    firstMessage?: StringWithAggregatesFilter<"AiAgents"> | string
    prompt?: StringWithAggregatesFilter<"AiAgents"> | string
    model?: StringWithAggregatesFilter<"AiAgents"> | string
    provider?: StringWithAggregatesFilter<"AiAgents"> | string
    userId?: UuidWithAggregatesFilter<"AiAgents"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AiAgents"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AiAgents"> | Date | string
  }

  export type SalesTransactionWhereInput = {
    AND?: SalesTransactionWhereInput | SalesTransactionWhereInput[]
    OR?: SalesTransactionWhereInput[]
    NOT?: SalesTransactionWhereInput | SalesTransactionWhereInput[]
    id?: UuidFilter<"SalesTransaction"> | string
    invoice?: StringFilter<"SalesTransaction"> | string
    stockCode?: StringFilter<"SalesTransaction"> | string
    description?: StringFilter<"SalesTransaction"> | string
    quantity?: FloatFilter<"SalesTransaction"> | number
    invoiceDate?: DateTimeFilter<"SalesTransaction"> | Date | string
    price?: FloatFilter<"SalesTransaction"> | number
    customerId?: IntFilter<"SalesTransaction"> | number
    country?: StringFilter<"SalesTransaction"> | string
    totalPrice?: FloatFilter<"SalesTransaction"> | number
    invoiceMonth?: StringFilter<"SalesTransaction"> | string
    dayOfWeek?: StringFilter<"SalesTransaction"> | string
    hourOfDay?: IntFilter<"SalesTransaction"> | number
    isReturn?: BoolFilter<"SalesTransaction"> | boolean
    isCreditNote?: BoolFilter<"SalesTransaction"> | boolean
    userId?: UuidFilter<"SalesTransaction"> | string
    createdAt?: DateTimeFilter<"SalesTransaction"> | Date | string
    updatedAt?: DateTimeFilter<"SalesTransaction"> | Date | string
  }

  export type SalesTransactionOrderByWithRelationInput = {
    id?: SortOrder
    invoice?: SortOrder
    stockCode?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    invoiceDate?: SortOrder
    price?: SortOrder
    customerId?: SortOrder
    country?: SortOrder
    totalPrice?: SortOrder
    invoiceMonth?: SortOrder
    dayOfWeek?: SortOrder
    hourOfDay?: SortOrder
    isReturn?: SortOrder
    isCreditNote?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SalesTransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SalesTransactionWhereInput | SalesTransactionWhereInput[]
    OR?: SalesTransactionWhereInput[]
    NOT?: SalesTransactionWhereInput | SalesTransactionWhereInput[]
    invoice?: StringFilter<"SalesTransaction"> | string
    stockCode?: StringFilter<"SalesTransaction"> | string
    description?: StringFilter<"SalesTransaction"> | string
    quantity?: FloatFilter<"SalesTransaction"> | number
    invoiceDate?: DateTimeFilter<"SalesTransaction"> | Date | string
    price?: FloatFilter<"SalesTransaction"> | number
    customerId?: IntFilter<"SalesTransaction"> | number
    country?: StringFilter<"SalesTransaction"> | string
    totalPrice?: FloatFilter<"SalesTransaction"> | number
    invoiceMonth?: StringFilter<"SalesTransaction"> | string
    dayOfWeek?: StringFilter<"SalesTransaction"> | string
    hourOfDay?: IntFilter<"SalesTransaction"> | number
    isReturn?: BoolFilter<"SalesTransaction"> | boolean
    isCreditNote?: BoolFilter<"SalesTransaction"> | boolean
    userId?: UuidFilter<"SalesTransaction"> | string
    createdAt?: DateTimeFilter<"SalesTransaction"> | Date | string
    updatedAt?: DateTimeFilter<"SalesTransaction"> | Date | string
  }, "id">

  export type SalesTransactionOrderByWithAggregationInput = {
    id?: SortOrder
    invoice?: SortOrder
    stockCode?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    invoiceDate?: SortOrder
    price?: SortOrder
    customerId?: SortOrder
    country?: SortOrder
    totalPrice?: SortOrder
    invoiceMonth?: SortOrder
    dayOfWeek?: SortOrder
    hourOfDay?: SortOrder
    isReturn?: SortOrder
    isCreditNote?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SalesTransactionCountOrderByAggregateInput
    _avg?: SalesTransactionAvgOrderByAggregateInput
    _max?: SalesTransactionMaxOrderByAggregateInput
    _min?: SalesTransactionMinOrderByAggregateInput
    _sum?: SalesTransactionSumOrderByAggregateInput
  }

  export type SalesTransactionScalarWhereWithAggregatesInput = {
    AND?: SalesTransactionScalarWhereWithAggregatesInput | SalesTransactionScalarWhereWithAggregatesInput[]
    OR?: SalesTransactionScalarWhereWithAggregatesInput[]
    NOT?: SalesTransactionScalarWhereWithAggregatesInput | SalesTransactionScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"SalesTransaction"> | string
    invoice?: StringWithAggregatesFilter<"SalesTransaction"> | string
    stockCode?: StringWithAggregatesFilter<"SalesTransaction"> | string
    description?: StringWithAggregatesFilter<"SalesTransaction"> | string
    quantity?: FloatWithAggregatesFilter<"SalesTransaction"> | number
    invoiceDate?: DateTimeWithAggregatesFilter<"SalesTransaction"> | Date | string
    price?: FloatWithAggregatesFilter<"SalesTransaction"> | number
    customerId?: IntWithAggregatesFilter<"SalesTransaction"> | number
    country?: StringWithAggregatesFilter<"SalesTransaction"> | string
    totalPrice?: FloatWithAggregatesFilter<"SalesTransaction"> | number
    invoiceMonth?: StringWithAggregatesFilter<"SalesTransaction"> | string
    dayOfWeek?: StringWithAggregatesFilter<"SalesTransaction"> | string
    hourOfDay?: IntWithAggregatesFilter<"SalesTransaction"> | number
    isReturn?: BoolWithAggregatesFilter<"SalesTransaction"> | boolean
    isCreditNote?: BoolWithAggregatesFilter<"SalesTransaction"> | boolean
    userId?: UuidWithAggregatesFilter<"SalesTransaction"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SalesTransaction"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SalesTransaction"> | Date | string
  }

  export type RFMAnalysisWhereInput = {
    AND?: RFMAnalysisWhereInput | RFMAnalysisWhereInput[]
    OR?: RFMAnalysisWhereInput[]
    NOT?: RFMAnalysisWhereInput | RFMAnalysisWhereInput[]
    id?: UuidFilter<"RFMAnalysis"> | string
    customerId?: IntFilter<"RFMAnalysis"> | number
    recency?: IntFilter<"RFMAnalysis"> | number
    frequency?: IntFilter<"RFMAnalysis"> | number
    monetary?: FloatFilter<"RFMAnalysis"> | number
    rScore?: IntFilter<"RFMAnalysis"> | number
    fScore?: IntFilter<"RFMAnalysis"> | number
    mScore?: IntFilter<"RFMAnalysis"> | number
    rfmScore?: StringFilter<"RFMAnalysis"> | string
    rfmSegment?: StringFilter<"RFMAnalysis"> | string
    userId?: UuidFilter<"RFMAnalysis"> | string
    createdAt?: DateTimeFilter<"RFMAnalysis"> | Date | string
    updatedAt?: DateTimeFilter<"RFMAnalysis"> | Date | string
  }

  export type RFMAnalysisOrderByWithRelationInput = {
    id?: SortOrder
    customerId?: SortOrder
    recency?: SortOrder
    frequency?: SortOrder
    monetary?: SortOrder
    rScore?: SortOrder
    fScore?: SortOrder
    mScore?: SortOrder
    rfmScore?: SortOrder
    rfmSegment?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RFMAnalysisWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    customerId?: number
    AND?: RFMAnalysisWhereInput | RFMAnalysisWhereInput[]
    OR?: RFMAnalysisWhereInput[]
    NOT?: RFMAnalysisWhereInput | RFMAnalysisWhereInput[]
    recency?: IntFilter<"RFMAnalysis"> | number
    frequency?: IntFilter<"RFMAnalysis"> | number
    monetary?: FloatFilter<"RFMAnalysis"> | number
    rScore?: IntFilter<"RFMAnalysis"> | number
    fScore?: IntFilter<"RFMAnalysis"> | number
    mScore?: IntFilter<"RFMAnalysis"> | number
    rfmScore?: StringFilter<"RFMAnalysis"> | string
    rfmSegment?: StringFilter<"RFMAnalysis"> | string
    userId?: UuidFilter<"RFMAnalysis"> | string
    createdAt?: DateTimeFilter<"RFMAnalysis"> | Date | string
    updatedAt?: DateTimeFilter<"RFMAnalysis"> | Date | string
  }, "id" | "customerId">

  export type RFMAnalysisOrderByWithAggregationInput = {
    id?: SortOrder
    customerId?: SortOrder
    recency?: SortOrder
    frequency?: SortOrder
    monetary?: SortOrder
    rScore?: SortOrder
    fScore?: SortOrder
    mScore?: SortOrder
    rfmScore?: SortOrder
    rfmSegment?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RFMAnalysisCountOrderByAggregateInput
    _avg?: RFMAnalysisAvgOrderByAggregateInput
    _max?: RFMAnalysisMaxOrderByAggregateInput
    _min?: RFMAnalysisMinOrderByAggregateInput
    _sum?: RFMAnalysisSumOrderByAggregateInput
  }

  export type RFMAnalysisScalarWhereWithAggregatesInput = {
    AND?: RFMAnalysisScalarWhereWithAggregatesInput | RFMAnalysisScalarWhereWithAggregatesInput[]
    OR?: RFMAnalysisScalarWhereWithAggregatesInput[]
    NOT?: RFMAnalysisScalarWhereWithAggregatesInput | RFMAnalysisScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"RFMAnalysis"> | string
    customerId?: IntWithAggregatesFilter<"RFMAnalysis"> | number
    recency?: IntWithAggregatesFilter<"RFMAnalysis"> | number
    frequency?: IntWithAggregatesFilter<"RFMAnalysis"> | number
    monetary?: FloatWithAggregatesFilter<"RFMAnalysis"> | number
    rScore?: IntWithAggregatesFilter<"RFMAnalysis"> | number
    fScore?: IntWithAggregatesFilter<"RFMAnalysis"> | number
    mScore?: IntWithAggregatesFilter<"RFMAnalysis"> | number
    rfmScore?: StringWithAggregatesFilter<"RFMAnalysis"> | string
    rfmSegment?: StringWithAggregatesFilter<"RFMAnalysis"> | string
    userId?: UuidWithAggregatesFilter<"RFMAnalysis"> | string
    createdAt?: DateTimeWithAggregatesFilter<"RFMAnalysis"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RFMAnalysis"> | Date | string
  }

  export type DashboardAnalyticsWhereInput = {
    AND?: DashboardAnalyticsWhereInput | DashboardAnalyticsWhereInput[]
    OR?: DashboardAnalyticsWhereInput[]
    NOT?: DashboardAnalyticsWhereInput | DashboardAnalyticsWhereInput[]
    id?: UuidFilter<"DashboardAnalytics"> | string
    userId?: UuidFilter<"DashboardAnalytics"> | string
    monthlySales?: JsonFilter<"DashboardAnalytics">
    aovTrend?: JsonFilter<"DashboardAnalytics">
    topCountries?: JsonFilter<"DashboardAnalytics">
    topProducts?: JsonFilter<"DashboardAnalytics">
    topCustomers?: JsonFilter<"DashboardAnalytics">
    rfmDistribution?: JsonFilter<"DashboardAnalytics">
    revenueByDay?: JsonFilter<"DashboardAnalytics">
    revenueByHour?: JsonFilter<"DashboardAnalytics">
    rfmData?: JsonFilter<"DashboardAnalytics">
    createdAt?: DateTimeFilter<"DashboardAnalytics"> | Date | string
    updatedAt?: DateTimeFilter<"DashboardAnalytics"> | Date | string
  }

  export type DashboardAnalyticsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    monthlySales?: SortOrder
    aovTrend?: SortOrder
    topCountries?: SortOrder
    topProducts?: SortOrder
    topCustomers?: SortOrder
    rfmDistribution?: SortOrder
    revenueByDay?: SortOrder
    revenueByHour?: SortOrder
    rfmData?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DashboardAnalyticsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: DashboardAnalyticsWhereInput | DashboardAnalyticsWhereInput[]
    OR?: DashboardAnalyticsWhereInput[]
    NOT?: DashboardAnalyticsWhereInput | DashboardAnalyticsWhereInput[]
    monthlySales?: JsonFilter<"DashboardAnalytics">
    aovTrend?: JsonFilter<"DashboardAnalytics">
    topCountries?: JsonFilter<"DashboardAnalytics">
    topProducts?: JsonFilter<"DashboardAnalytics">
    topCustomers?: JsonFilter<"DashboardAnalytics">
    rfmDistribution?: JsonFilter<"DashboardAnalytics">
    revenueByDay?: JsonFilter<"DashboardAnalytics">
    revenueByHour?: JsonFilter<"DashboardAnalytics">
    rfmData?: JsonFilter<"DashboardAnalytics">
    createdAt?: DateTimeFilter<"DashboardAnalytics"> | Date | string
    updatedAt?: DateTimeFilter<"DashboardAnalytics"> | Date | string
  }, "id" | "userId">

  export type DashboardAnalyticsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    monthlySales?: SortOrder
    aovTrend?: SortOrder
    topCountries?: SortOrder
    topProducts?: SortOrder
    topCustomers?: SortOrder
    rfmDistribution?: SortOrder
    revenueByDay?: SortOrder
    revenueByHour?: SortOrder
    rfmData?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DashboardAnalyticsCountOrderByAggregateInput
    _max?: DashboardAnalyticsMaxOrderByAggregateInput
    _min?: DashboardAnalyticsMinOrderByAggregateInput
  }

  export type DashboardAnalyticsScalarWhereWithAggregatesInput = {
    AND?: DashboardAnalyticsScalarWhereWithAggregatesInput | DashboardAnalyticsScalarWhereWithAggregatesInput[]
    OR?: DashboardAnalyticsScalarWhereWithAggregatesInput[]
    NOT?: DashboardAnalyticsScalarWhereWithAggregatesInput | DashboardAnalyticsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"DashboardAnalytics"> | string
    userId?: UuidWithAggregatesFilter<"DashboardAnalytics"> | string
    monthlySales?: JsonWithAggregatesFilter<"DashboardAnalytics">
    aovTrend?: JsonWithAggregatesFilter<"DashboardAnalytics">
    topCountries?: JsonWithAggregatesFilter<"DashboardAnalytics">
    topProducts?: JsonWithAggregatesFilter<"DashboardAnalytics">
    topCustomers?: JsonWithAggregatesFilter<"DashboardAnalytics">
    rfmDistribution?: JsonWithAggregatesFilter<"DashboardAnalytics">
    revenueByDay?: JsonWithAggregatesFilter<"DashboardAnalytics">
    revenueByHour?: JsonWithAggregatesFilter<"DashboardAnalytics">
    rfmData?: JsonWithAggregatesFilter<"DashboardAnalytics">
    createdAt?: DateTimeWithAggregatesFilter<"DashboardAnalytics"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DashboardAnalytics"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    clerkId: string
    email: string
    profileImage: string
    stripeConnectId?: string | null
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    subscription?: boolean
    stripeCustomerId?: string | null
    webinars?: WebinarCreateNestedManyWithoutPresenterInput
    aiAgents?: AiAgentsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    clerkId: string
    email: string
    profileImage: string
    stripeConnectId?: string | null
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    subscription?: boolean
    stripeCustomerId?: string | null
    webinars?: WebinarUncheckedCreateNestedManyWithoutPresenterInput
    aiAgents?: AiAgentsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profileImage?: StringFieldUpdateOperationsInput | string
    stripeConnectId?: NullableStringFieldUpdateOperationsInput | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subscription?: BoolFieldUpdateOperationsInput | boolean
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    webinars?: WebinarUpdateManyWithoutPresenterNestedInput
    aiAgents?: AiAgentsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profileImage?: StringFieldUpdateOperationsInput | string
    stripeConnectId?: NullableStringFieldUpdateOperationsInput | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subscription?: BoolFieldUpdateOperationsInput | boolean
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    webinars?: WebinarUncheckedUpdateManyWithoutPresenterNestedInput
    aiAgents?: AiAgentsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    clerkId: string
    email: string
    profileImage: string
    stripeConnectId?: string | null
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    subscription?: boolean
    stripeCustomerId?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profileImage?: StringFieldUpdateOperationsInput | string
    stripeConnectId?: NullableStringFieldUpdateOperationsInput | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subscription?: BoolFieldUpdateOperationsInput | boolean
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profileImage?: StringFieldUpdateOperationsInput | string
    stripeConnectId?: NullableStringFieldUpdateOperationsInput | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subscription?: BoolFieldUpdateOperationsInput | boolean
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WebinarCreateInput = {
    id?: string
    title: string
    description?: string | null
    startTime: Date | string
    endTime?: Date | string | null
    duration?: number
    webinarStatus?: $Enums.WebinarStatusEnum
    tags?: WebinarCreatetagsInput | string[]
    ctaLabel?: string | null
    ctaType: $Enums.CtaTypeEnum
    ctaUrl?: string | null
    couponCode?: string | null
    couponEnabled?: boolean
    couponExpiry?: Date | string | null
    lockChat?: boolean
    stripeProductId?: string | null
    aiAgentId?: string | null
    priceId?: string | null
    recordingUrl?: string | null
    thumbnail?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    attendances?: AttendanceCreateNestedManyWithoutWebinarInput
    Attendee?: AttendeeCreateNestedOneWithoutWebinarInput
    presenter: UserCreateNestedOneWithoutWebinarsInput
  }

  export type WebinarUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    startTime: Date | string
    endTime?: Date | string | null
    duration?: number
    webinarStatus?: $Enums.WebinarStatusEnum
    presenterId: string
    tags?: WebinarCreatetagsInput | string[]
    ctaLabel?: string | null
    ctaType: $Enums.CtaTypeEnum
    ctaUrl?: string | null
    couponCode?: string | null
    couponEnabled?: boolean
    couponExpiry?: Date | string | null
    lockChat?: boolean
    stripeProductId?: string | null
    aiAgentId?: string | null
    priceId?: string | null
    recordingUrl?: string | null
    thumbnail?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    attendeeId?: string | null
    attendances?: AttendanceUncheckedCreateNestedManyWithoutWebinarInput
  }

  export type WebinarUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: IntFieldUpdateOperationsInput | number
    webinarStatus?: EnumWebinarStatusEnumFieldUpdateOperationsInput | $Enums.WebinarStatusEnum
    tags?: WebinarUpdatetagsInput | string[]
    ctaLabel?: NullableStringFieldUpdateOperationsInput | string | null
    ctaType?: EnumCtaTypeEnumFieldUpdateOperationsInput | $Enums.CtaTypeEnum
    ctaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    couponCode?: NullableStringFieldUpdateOperationsInput | string | null
    couponEnabled?: BoolFieldUpdateOperationsInput | boolean
    couponExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lockChat?: BoolFieldUpdateOperationsInput | boolean
    stripeProductId?: NullableStringFieldUpdateOperationsInput | string | null
    aiAgentId?: NullableStringFieldUpdateOperationsInput | string | null
    priceId?: NullableStringFieldUpdateOperationsInput | string | null
    recordingUrl?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attendances?: AttendanceUpdateManyWithoutWebinarNestedInput
    Attendee?: AttendeeUpdateOneWithoutWebinarNestedInput
    presenter?: UserUpdateOneRequiredWithoutWebinarsNestedInput
  }

  export type WebinarUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: IntFieldUpdateOperationsInput | number
    webinarStatus?: EnumWebinarStatusEnumFieldUpdateOperationsInput | $Enums.WebinarStatusEnum
    presenterId?: StringFieldUpdateOperationsInput | string
    tags?: WebinarUpdatetagsInput | string[]
    ctaLabel?: NullableStringFieldUpdateOperationsInput | string | null
    ctaType?: EnumCtaTypeEnumFieldUpdateOperationsInput | $Enums.CtaTypeEnum
    ctaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    couponCode?: NullableStringFieldUpdateOperationsInput | string | null
    couponEnabled?: BoolFieldUpdateOperationsInput | boolean
    couponExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lockChat?: BoolFieldUpdateOperationsInput | boolean
    stripeProductId?: NullableStringFieldUpdateOperationsInput | string | null
    aiAgentId?: NullableStringFieldUpdateOperationsInput | string | null
    priceId?: NullableStringFieldUpdateOperationsInput | string | null
    recordingUrl?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attendeeId?: NullableStringFieldUpdateOperationsInput | string | null
    attendances?: AttendanceUncheckedUpdateManyWithoutWebinarNestedInput
  }

  export type WebinarCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    startTime: Date | string
    endTime?: Date | string | null
    duration?: number
    webinarStatus?: $Enums.WebinarStatusEnum
    presenterId: string
    tags?: WebinarCreatetagsInput | string[]
    ctaLabel?: string | null
    ctaType: $Enums.CtaTypeEnum
    ctaUrl?: string | null
    couponCode?: string | null
    couponEnabled?: boolean
    couponExpiry?: Date | string | null
    lockChat?: boolean
    stripeProductId?: string | null
    aiAgentId?: string | null
    priceId?: string | null
    recordingUrl?: string | null
    thumbnail?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    attendeeId?: string | null
  }

  export type WebinarUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: IntFieldUpdateOperationsInput | number
    webinarStatus?: EnumWebinarStatusEnumFieldUpdateOperationsInput | $Enums.WebinarStatusEnum
    tags?: WebinarUpdatetagsInput | string[]
    ctaLabel?: NullableStringFieldUpdateOperationsInput | string | null
    ctaType?: EnumCtaTypeEnumFieldUpdateOperationsInput | $Enums.CtaTypeEnum
    ctaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    couponCode?: NullableStringFieldUpdateOperationsInput | string | null
    couponEnabled?: BoolFieldUpdateOperationsInput | boolean
    couponExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lockChat?: BoolFieldUpdateOperationsInput | boolean
    stripeProductId?: NullableStringFieldUpdateOperationsInput | string | null
    aiAgentId?: NullableStringFieldUpdateOperationsInput | string | null
    priceId?: NullableStringFieldUpdateOperationsInput | string | null
    recordingUrl?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type WebinarUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: IntFieldUpdateOperationsInput | number
    webinarStatus?: EnumWebinarStatusEnumFieldUpdateOperationsInput | $Enums.WebinarStatusEnum
    presenterId?: StringFieldUpdateOperationsInput | string
    tags?: WebinarUpdatetagsInput | string[]
    ctaLabel?: NullableStringFieldUpdateOperationsInput | string | null
    ctaType?: EnumCtaTypeEnumFieldUpdateOperationsInput | $Enums.CtaTypeEnum
    ctaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    couponCode?: NullableStringFieldUpdateOperationsInput | string | null
    couponEnabled?: BoolFieldUpdateOperationsInput | boolean
    couponExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lockChat?: BoolFieldUpdateOperationsInput | boolean
    stripeProductId?: NullableStringFieldUpdateOperationsInput | string | null
    aiAgentId?: NullableStringFieldUpdateOperationsInput | string | null
    priceId?: NullableStringFieldUpdateOperationsInput | string | null
    recordingUrl?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attendeeId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AttendeeCreateInput = {
    id?: string
    email: string
    name: string
    callStatus?: $Enums.CallStatusEnum
    createdAt?: Date | string
    updatedAt?: Date | string
    Attendance?: AttendanceCreateNestedManyWithoutUserInput
    Webinar?: WebinarCreateNestedManyWithoutAttendeeInput
  }

  export type AttendeeUncheckedCreateInput = {
    id?: string
    email: string
    name: string
    callStatus?: $Enums.CallStatusEnum
    createdAt?: Date | string
    updatedAt?: Date | string
    Attendance?: AttendanceUncheckedCreateNestedManyWithoutUserInput
    Webinar?: WebinarUncheckedCreateNestedManyWithoutAttendeeInput
  }

  export type AttendeeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    callStatus?: EnumCallStatusEnumFieldUpdateOperationsInput | $Enums.CallStatusEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Attendance?: AttendanceUpdateManyWithoutUserNestedInput
    Webinar?: WebinarUpdateManyWithoutAttendeeNestedInput
  }

  export type AttendeeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    callStatus?: EnumCallStatusEnumFieldUpdateOperationsInput | $Enums.CallStatusEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Attendance?: AttendanceUncheckedUpdateManyWithoutUserNestedInput
    Webinar?: WebinarUncheckedUpdateManyWithoutAttendeeNestedInput
  }

  export type AttendeeCreateManyInput = {
    id?: string
    email: string
    name: string
    callStatus?: $Enums.CallStatusEnum
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttendeeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    callStatus?: EnumCallStatusEnumFieldUpdateOperationsInput | $Enums.CallStatusEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendeeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    callStatus?: EnumCallStatusEnumFieldUpdateOperationsInput | $Enums.CallStatusEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceCreateInput = {
    id?: string
    joinedAt?: Date | string
    leftAt?: Date | string | null
    attendedType: $Enums.AttendedTypeEnum
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
    user: AttendeeCreateNestedOneWithoutAttendanceInput
    webinar: WebinarCreateNestedOneWithoutAttendancesInput
  }

  export type AttendanceUncheckedCreateInput = {
    id?: string
    webinarId: string
    joinedAt?: Date | string
    leftAt?: Date | string | null
    attendedType: $Enums.AttendedTypeEnum
    createdAt?: Date | string
    updatedAt?: Date | string
    attendeeId: string
    userId?: string | null
  }

  export type AttendanceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attendedType?: EnumAttendedTypeEnumFieldUpdateOperationsInput | $Enums.AttendedTypeEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    user?: AttendeeUpdateOneRequiredWithoutAttendanceNestedInput
    webinar?: WebinarUpdateOneRequiredWithoutAttendancesNestedInput
  }

  export type AttendanceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    webinarId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attendedType?: EnumAttendedTypeEnumFieldUpdateOperationsInput | $Enums.AttendedTypeEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendeeId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AttendanceCreateManyInput = {
    id?: string
    webinarId: string
    joinedAt?: Date | string
    leftAt?: Date | string | null
    attendedType: $Enums.AttendedTypeEnum
    createdAt?: Date | string
    updatedAt?: Date | string
    attendeeId: string
    userId?: string | null
  }

  export type AttendanceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attendedType?: EnumAttendedTypeEnumFieldUpdateOperationsInput | $Enums.AttendedTypeEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AttendanceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    webinarId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attendedType?: EnumAttendedTypeEnumFieldUpdateOperationsInput | $Enums.AttendedTypeEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendeeId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AiAgentsCreateInput = {
    id?: string
    name: string
    firstMessage: string
    prompt: string
    model: string
    provider: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    User?: UserCreateNestedManyWithoutAiAgentsInput
  }

  export type AiAgentsUncheckedCreateInput = {
    id?: string
    name: string
    firstMessage: string
    prompt: string
    model: string
    provider: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    User?: UserUncheckedCreateNestedManyWithoutAiAgentsInput
  }

  export type AiAgentsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    firstMessage?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateManyWithoutAiAgentsNestedInput
  }

  export type AiAgentsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    firstMessage?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUncheckedUpdateManyWithoutAiAgentsNestedInput
  }

  export type AiAgentsCreateManyInput = {
    id?: string
    name: string
    firstMessage: string
    prompt: string
    model: string
    provider: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AiAgentsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    firstMessage?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiAgentsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    firstMessage?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalesTransactionCreateInput = {
    id?: string
    invoice: string
    stockCode: string
    description?: string
    quantity: number
    invoiceDate: Date | string
    price: number
    customerId?: number
    country: string
    totalPrice: number
    invoiceMonth: string
    dayOfWeek: string
    hourOfDay: number
    isReturn?: boolean
    isCreditNote?: boolean
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SalesTransactionUncheckedCreateInput = {
    id?: string
    invoice: string
    stockCode: string
    description?: string
    quantity: number
    invoiceDate: Date | string
    price: number
    customerId?: number
    country: string
    totalPrice: number
    invoiceMonth: string
    dayOfWeek: string
    hourOfDay: number
    isReturn?: boolean
    isCreditNote?: boolean
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SalesTransactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoice?: StringFieldUpdateOperationsInput | string
    stockCode?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    invoiceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: FloatFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    country?: StringFieldUpdateOperationsInput | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    invoiceMonth?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: StringFieldUpdateOperationsInput | string
    hourOfDay?: IntFieldUpdateOperationsInput | number
    isReturn?: BoolFieldUpdateOperationsInput | boolean
    isCreditNote?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalesTransactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoice?: StringFieldUpdateOperationsInput | string
    stockCode?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    invoiceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: FloatFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    country?: StringFieldUpdateOperationsInput | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    invoiceMonth?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: StringFieldUpdateOperationsInput | string
    hourOfDay?: IntFieldUpdateOperationsInput | number
    isReturn?: BoolFieldUpdateOperationsInput | boolean
    isCreditNote?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalesTransactionCreateManyInput = {
    id?: string
    invoice: string
    stockCode: string
    description?: string
    quantity: number
    invoiceDate: Date | string
    price: number
    customerId?: number
    country: string
    totalPrice: number
    invoiceMonth: string
    dayOfWeek: string
    hourOfDay: number
    isReturn?: boolean
    isCreditNote?: boolean
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SalesTransactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoice?: StringFieldUpdateOperationsInput | string
    stockCode?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    invoiceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: FloatFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    country?: StringFieldUpdateOperationsInput | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    invoiceMonth?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: StringFieldUpdateOperationsInput | string
    hourOfDay?: IntFieldUpdateOperationsInput | number
    isReturn?: BoolFieldUpdateOperationsInput | boolean
    isCreditNote?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalesTransactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoice?: StringFieldUpdateOperationsInput | string
    stockCode?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    invoiceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: FloatFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    country?: StringFieldUpdateOperationsInput | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    invoiceMonth?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: StringFieldUpdateOperationsInput | string
    hourOfDay?: IntFieldUpdateOperationsInput | number
    isReturn?: BoolFieldUpdateOperationsInput | boolean
    isCreditNote?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RFMAnalysisCreateInput = {
    id?: string
    customerId: number
    recency: number
    frequency: number
    monetary: number
    rScore: number
    fScore: number
    mScore: number
    rfmScore: string
    rfmSegment: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RFMAnalysisUncheckedCreateInput = {
    id?: string
    customerId: number
    recency: number
    frequency: number
    monetary: number
    rScore: number
    fScore: number
    mScore: number
    rfmScore: string
    rfmSegment: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RFMAnalysisUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: IntFieldUpdateOperationsInput | number
    recency?: IntFieldUpdateOperationsInput | number
    frequency?: IntFieldUpdateOperationsInput | number
    monetary?: FloatFieldUpdateOperationsInput | number
    rScore?: IntFieldUpdateOperationsInput | number
    fScore?: IntFieldUpdateOperationsInput | number
    mScore?: IntFieldUpdateOperationsInput | number
    rfmScore?: StringFieldUpdateOperationsInput | string
    rfmSegment?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RFMAnalysisUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: IntFieldUpdateOperationsInput | number
    recency?: IntFieldUpdateOperationsInput | number
    frequency?: IntFieldUpdateOperationsInput | number
    monetary?: FloatFieldUpdateOperationsInput | number
    rScore?: IntFieldUpdateOperationsInput | number
    fScore?: IntFieldUpdateOperationsInput | number
    mScore?: IntFieldUpdateOperationsInput | number
    rfmScore?: StringFieldUpdateOperationsInput | string
    rfmSegment?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RFMAnalysisCreateManyInput = {
    id?: string
    customerId: number
    recency: number
    frequency: number
    monetary: number
    rScore: number
    fScore: number
    mScore: number
    rfmScore: string
    rfmSegment: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RFMAnalysisUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: IntFieldUpdateOperationsInput | number
    recency?: IntFieldUpdateOperationsInput | number
    frequency?: IntFieldUpdateOperationsInput | number
    monetary?: FloatFieldUpdateOperationsInput | number
    rScore?: IntFieldUpdateOperationsInput | number
    fScore?: IntFieldUpdateOperationsInput | number
    mScore?: IntFieldUpdateOperationsInput | number
    rfmScore?: StringFieldUpdateOperationsInput | string
    rfmSegment?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RFMAnalysisUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: IntFieldUpdateOperationsInput | number
    recency?: IntFieldUpdateOperationsInput | number
    frequency?: IntFieldUpdateOperationsInput | number
    monetary?: FloatFieldUpdateOperationsInput | number
    rScore?: IntFieldUpdateOperationsInput | number
    fScore?: IntFieldUpdateOperationsInput | number
    mScore?: IntFieldUpdateOperationsInput | number
    rfmScore?: StringFieldUpdateOperationsInput | string
    rfmSegment?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DashboardAnalyticsCreateInput = {
    id?: string
    userId: string
    monthlySales: JsonNullValueInput | InputJsonValue
    aovTrend: JsonNullValueInput | InputJsonValue
    topCountries: JsonNullValueInput | InputJsonValue
    topProducts: JsonNullValueInput | InputJsonValue
    topCustomers: JsonNullValueInput | InputJsonValue
    rfmDistribution: JsonNullValueInput | InputJsonValue
    revenueByDay: JsonNullValueInput | InputJsonValue
    revenueByHour: JsonNullValueInput | InputJsonValue
    rfmData: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DashboardAnalyticsUncheckedCreateInput = {
    id?: string
    userId: string
    monthlySales: JsonNullValueInput | InputJsonValue
    aovTrend: JsonNullValueInput | InputJsonValue
    topCountries: JsonNullValueInput | InputJsonValue
    topProducts: JsonNullValueInput | InputJsonValue
    topCustomers: JsonNullValueInput | InputJsonValue
    rfmDistribution: JsonNullValueInput | InputJsonValue
    revenueByDay: JsonNullValueInput | InputJsonValue
    revenueByHour: JsonNullValueInput | InputJsonValue
    rfmData: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DashboardAnalyticsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    monthlySales?: JsonNullValueInput | InputJsonValue
    aovTrend?: JsonNullValueInput | InputJsonValue
    topCountries?: JsonNullValueInput | InputJsonValue
    topProducts?: JsonNullValueInput | InputJsonValue
    topCustomers?: JsonNullValueInput | InputJsonValue
    rfmDistribution?: JsonNullValueInput | InputJsonValue
    revenueByDay?: JsonNullValueInput | InputJsonValue
    revenueByHour?: JsonNullValueInput | InputJsonValue
    rfmData?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DashboardAnalyticsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    monthlySales?: JsonNullValueInput | InputJsonValue
    aovTrend?: JsonNullValueInput | InputJsonValue
    topCountries?: JsonNullValueInput | InputJsonValue
    topProducts?: JsonNullValueInput | InputJsonValue
    topCustomers?: JsonNullValueInput | InputJsonValue
    rfmDistribution?: JsonNullValueInput | InputJsonValue
    revenueByDay?: JsonNullValueInput | InputJsonValue
    revenueByHour?: JsonNullValueInput | InputJsonValue
    rfmData?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DashboardAnalyticsCreateManyInput = {
    id?: string
    userId: string
    monthlySales: JsonNullValueInput | InputJsonValue
    aovTrend: JsonNullValueInput | InputJsonValue
    topCountries: JsonNullValueInput | InputJsonValue
    topProducts: JsonNullValueInput | InputJsonValue
    topCustomers: JsonNullValueInput | InputJsonValue
    rfmDistribution: JsonNullValueInput | InputJsonValue
    revenueByDay: JsonNullValueInput | InputJsonValue
    revenueByHour: JsonNullValueInput | InputJsonValue
    rfmData: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DashboardAnalyticsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    monthlySales?: JsonNullValueInput | InputJsonValue
    aovTrend?: JsonNullValueInput | InputJsonValue
    topCountries?: JsonNullValueInput | InputJsonValue
    topProducts?: JsonNullValueInput | InputJsonValue
    topCustomers?: JsonNullValueInput | InputJsonValue
    rfmDistribution?: JsonNullValueInput | InputJsonValue
    revenueByDay?: JsonNullValueInput | InputJsonValue
    revenueByHour?: JsonNullValueInput | InputJsonValue
    rfmData?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DashboardAnalyticsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    monthlySales?: JsonNullValueInput | InputJsonValue
    aovTrend?: JsonNullValueInput | InputJsonValue
    topCountries?: JsonNullValueInput | InputJsonValue
    topProducts?: JsonNullValueInput | InputJsonValue
    topCustomers?: JsonNullValueInput | InputJsonValue
    rfmDistribution?: JsonNullValueInput | InputJsonValue
    revenueByDay?: JsonNullValueInput | InputJsonValue
    revenueByHour?: JsonNullValueInput | InputJsonValue
    rfmData?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type WebinarListRelationFilter = {
    every?: WebinarWhereInput
    some?: WebinarWhereInput
    none?: WebinarWhereInput
  }

  export type AiAgentsListRelationFilter = {
    every?: AiAgentsWhereInput
    some?: AiAgentsWhereInput
    none?: AiAgentsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type WebinarOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AiAgentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    clerkId?: SortOrder
    email?: SortOrder
    profileImage?: SortOrder
    stripeConnectId?: SortOrder
    lastLoginAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    subscription?: SortOrder
    stripeCustomerId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    clerkId?: SortOrder
    email?: SortOrder
    profileImage?: SortOrder
    stripeConnectId?: SortOrder
    lastLoginAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    subscription?: SortOrder
    stripeCustomerId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    clerkId?: SortOrder
    email?: SortOrder
    profileImage?: SortOrder
    stripeConnectId?: SortOrder
    lastLoginAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    subscription?: SortOrder
    stripeCustomerId?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumWebinarStatusEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.WebinarStatusEnum | EnumWebinarStatusEnumFieldRefInput<$PrismaModel>
    in?: $Enums.WebinarStatusEnum[] | ListEnumWebinarStatusEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.WebinarStatusEnum[] | ListEnumWebinarStatusEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumWebinarStatusEnumFilter<$PrismaModel> | $Enums.WebinarStatusEnum
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EnumCtaTypeEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.CtaTypeEnum | EnumCtaTypeEnumFieldRefInput<$PrismaModel>
    in?: $Enums.CtaTypeEnum[] | ListEnumCtaTypeEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.CtaTypeEnum[] | ListEnumCtaTypeEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumCtaTypeEnumFilter<$PrismaModel> | $Enums.CtaTypeEnum
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type AttendanceListRelationFilter = {
    every?: AttendanceWhereInput
    some?: AttendanceWhereInput
    none?: AttendanceWhereInput
  }

  export type AttendeeNullableScalarRelationFilter = {
    is?: AttendeeWhereInput | null
    isNot?: AttendeeWhereInput | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AttendanceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WebinarCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    duration?: SortOrder
    webinarStatus?: SortOrder
    presenterId?: SortOrder
    tags?: SortOrder
    ctaLabel?: SortOrder
    ctaType?: SortOrder
    ctaUrl?: SortOrder
    couponCode?: SortOrder
    couponEnabled?: SortOrder
    couponExpiry?: SortOrder
    lockChat?: SortOrder
    stripeProductId?: SortOrder
    aiAgentId?: SortOrder
    priceId?: SortOrder
    recordingUrl?: SortOrder
    thumbnail?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    attendeeId?: SortOrder
  }

  export type WebinarAvgOrderByAggregateInput = {
    duration?: SortOrder
  }

  export type WebinarMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    duration?: SortOrder
    webinarStatus?: SortOrder
    presenterId?: SortOrder
    ctaLabel?: SortOrder
    ctaType?: SortOrder
    ctaUrl?: SortOrder
    couponCode?: SortOrder
    couponEnabled?: SortOrder
    couponExpiry?: SortOrder
    lockChat?: SortOrder
    stripeProductId?: SortOrder
    aiAgentId?: SortOrder
    priceId?: SortOrder
    recordingUrl?: SortOrder
    thumbnail?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    attendeeId?: SortOrder
  }

  export type WebinarMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    duration?: SortOrder
    webinarStatus?: SortOrder
    presenterId?: SortOrder
    ctaLabel?: SortOrder
    ctaType?: SortOrder
    ctaUrl?: SortOrder
    couponCode?: SortOrder
    couponEnabled?: SortOrder
    couponExpiry?: SortOrder
    lockChat?: SortOrder
    stripeProductId?: SortOrder
    aiAgentId?: SortOrder
    priceId?: SortOrder
    recordingUrl?: SortOrder
    thumbnail?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    attendeeId?: SortOrder
  }

  export type WebinarSumOrderByAggregateInput = {
    duration?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type EnumWebinarStatusEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WebinarStatusEnum | EnumWebinarStatusEnumFieldRefInput<$PrismaModel>
    in?: $Enums.WebinarStatusEnum[] | ListEnumWebinarStatusEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.WebinarStatusEnum[] | ListEnumWebinarStatusEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumWebinarStatusEnumWithAggregatesFilter<$PrismaModel> | $Enums.WebinarStatusEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWebinarStatusEnumFilter<$PrismaModel>
    _max?: NestedEnumWebinarStatusEnumFilter<$PrismaModel>
  }

  export type EnumCtaTypeEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CtaTypeEnum | EnumCtaTypeEnumFieldRefInput<$PrismaModel>
    in?: $Enums.CtaTypeEnum[] | ListEnumCtaTypeEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.CtaTypeEnum[] | ListEnumCtaTypeEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumCtaTypeEnumWithAggregatesFilter<$PrismaModel> | $Enums.CtaTypeEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCtaTypeEnumFilter<$PrismaModel>
    _max?: NestedEnumCtaTypeEnumFilter<$PrismaModel>
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumCallStatusEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.CallStatusEnum | EnumCallStatusEnumFieldRefInput<$PrismaModel>
    in?: $Enums.CallStatusEnum[] | ListEnumCallStatusEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.CallStatusEnum[] | ListEnumCallStatusEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumCallStatusEnumFilter<$PrismaModel> | $Enums.CallStatusEnum
  }

  export type AttendeeCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    callStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AttendeeMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    callStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AttendeeMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    callStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumCallStatusEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CallStatusEnum | EnumCallStatusEnumFieldRefInput<$PrismaModel>
    in?: $Enums.CallStatusEnum[] | ListEnumCallStatusEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.CallStatusEnum[] | ListEnumCallStatusEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumCallStatusEnumWithAggregatesFilter<$PrismaModel> | $Enums.CallStatusEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCallStatusEnumFilter<$PrismaModel>
    _max?: NestedEnumCallStatusEnumFilter<$PrismaModel>
  }

  export type EnumAttendedTypeEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendedTypeEnum | EnumAttendedTypeEnumFieldRefInput<$PrismaModel>
    in?: $Enums.AttendedTypeEnum[] | ListEnumAttendedTypeEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttendedTypeEnum[] | ListEnumAttendedTypeEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumAttendedTypeEnumFilter<$PrismaModel> | $Enums.AttendedTypeEnum
  }

  export type AttendeeScalarRelationFilter = {
    is?: AttendeeWhereInput
    isNot?: AttendeeWhereInput
  }

  export type WebinarScalarRelationFilter = {
    is?: WebinarWhereInput
    isNot?: WebinarWhereInput
  }

  export type AttendanceAttendeeIdWebinarIdCompoundUniqueInput = {
    attendeeId: string
    webinarId: string
  }

  export type AttendanceCountOrderByAggregateInput = {
    id?: SortOrder
    webinarId?: SortOrder
    joinedAt?: SortOrder
    leftAt?: SortOrder
    attendedType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    attendeeId?: SortOrder
    userId?: SortOrder
  }

  export type AttendanceMaxOrderByAggregateInput = {
    id?: SortOrder
    webinarId?: SortOrder
    joinedAt?: SortOrder
    leftAt?: SortOrder
    attendedType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    attendeeId?: SortOrder
    userId?: SortOrder
  }

  export type AttendanceMinOrderByAggregateInput = {
    id?: SortOrder
    webinarId?: SortOrder
    joinedAt?: SortOrder
    leftAt?: SortOrder
    attendedType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    attendeeId?: SortOrder
    userId?: SortOrder
  }

  export type EnumAttendedTypeEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendedTypeEnum | EnumAttendedTypeEnumFieldRefInput<$PrismaModel>
    in?: $Enums.AttendedTypeEnum[] | ListEnumAttendedTypeEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttendedTypeEnum[] | ListEnumAttendedTypeEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumAttendedTypeEnumWithAggregatesFilter<$PrismaModel> | $Enums.AttendedTypeEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAttendedTypeEnumFilter<$PrismaModel>
    _max?: NestedEnumAttendedTypeEnumFilter<$PrismaModel>
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AiAgentsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    firstMessage?: SortOrder
    prompt?: SortOrder
    model?: SortOrder
    provider?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AiAgentsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    firstMessage?: SortOrder
    prompt?: SortOrder
    model?: SortOrder
    provider?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AiAgentsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    firstMessage?: SortOrder
    prompt?: SortOrder
    model?: SortOrder
    provider?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type SalesTransactionCountOrderByAggregateInput = {
    id?: SortOrder
    invoice?: SortOrder
    stockCode?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    invoiceDate?: SortOrder
    price?: SortOrder
    customerId?: SortOrder
    country?: SortOrder
    totalPrice?: SortOrder
    invoiceMonth?: SortOrder
    dayOfWeek?: SortOrder
    hourOfDay?: SortOrder
    isReturn?: SortOrder
    isCreditNote?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SalesTransactionAvgOrderByAggregateInput = {
    quantity?: SortOrder
    price?: SortOrder
    customerId?: SortOrder
    totalPrice?: SortOrder
    hourOfDay?: SortOrder
  }

  export type SalesTransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    invoice?: SortOrder
    stockCode?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    invoiceDate?: SortOrder
    price?: SortOrder
    customerId?: SortOrder
    country?: SortOrder
    totalPrice?: SortOrder
    invoiceMonth?: SortOrder
    dayOfWeek?: SortOrder
    hourOfDay?: SortOrder
    isReturn?: SortOrder
    isCreditNote?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SalesTransactionMinOrderByAggregateInput = {
    id?: SortOrder
    invoice?: SortOrder
    stockCode?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    invoiceDate?: SortOrder
    price?: SortOrder
    customerId?: SortOrder
    country?: SortOrder
    totalPrice?: SortOrder
    invoiceMonth?: SortOrder
    dayOfWeek?: SortOrder
    hourOfDay?: SortOrder
    isReturn?: SortOrder
    isCreditNote?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SalesTransactionSumOrderByAggregateInput = {
    quantity?: SortOrder
    price?: SortOrder
    customerId?: SortOrder
    totalPrice?: SortOrder
    hourOfDay?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type RFMAnalysisCountOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    recency?: SortOrder
    frequency?: SortOrder
    monetary?: SortOrder
    rScore?: SortOrder
    fScore?: SortOrder
    mScore?: SortOrder
    rfmScore?: SortOrder
    rfmSegment?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RFMAnalysisAvgOrderByAggregateInput = {
    customerId?: SortOrder
    recency?: SortOrder
    frequency?: SortOrder
    monetary?: SortOrder
    rScore?: SortOrder
    fScore?: SortOrder
    mScore?: SortOrder
  }

  export type RFMAnalysisMaxOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    recency?: SortOrder
    frequency?: SortOrder
    monetary?: SortOrder
    rScore?: SortOrder
    fScore?: SortOrder
    mScore?: SortOrder
    rfmScore?: SortOrder
    rfmSegment?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RFMAnalysisMinOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    recency?: SortOrder
    frequency?: SortOrder
    monetary?: SortOrder
    rScore?: SortOrder
    fScore?: SortOrder
    mScore?: SortOrder
    rfmScore?: SortOrder
    rfmSegment?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RFMAnalysisSumOrderByAggregateInput = {
    customerId?: SortOrder
    recency?: SortOrder
    frequency?: SortOrder
    monetary?: SortOrder
    rScore?: SortOrder
    fScore?: SortOrder
    mScore?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type DashboardAnalyticsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    monthlySales?: SortOrder
    aovTrend?: SortOrder
    topCountries?: SortOrder
    topProducts?: SortOrder
    topCustomers?: SortOrder
    rfmDistribution?: SortOrder
    revenueByDay?: SortOrder
    revenueByHour?: SortOrder
    rfmData?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DashboardAnalyticsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DashboardAnalyticsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type WebinarCreateNestedManyWithoutPresenterInput = {
    create?: XOR<WebinarCreateWithoutPresenterInput, WebinarUncheckedCreateWithoutPresenterInput> | WebinarCreateWithoutPresenterInput[] | WebinarUncheckedCreateWithoutPresenterInput[]
    connectOrCreate?: WebinarCreateOrConnectWithoutPresenterInput | WebinarCreateOrConnectWithoutPresenterInput[]
    createMany?: WebinarCreateManyPresenterInputEnvelope
    connect?: WebinarWhereUniqueInput | WebinarWhereUniqueInput[]
  }

  export type AiAgentsCreateNestedManyWithoutUserInput = {
    create?: XOR<AiAgentsCreateWithoutUserInput, AiAgentsUncheckedCreateWithoutUserInput> | AiAgentsCreateWithoutUserInput[] | AiAgentsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AiAgentsCreateOrConnectWithoutUserInput | AiAgentsCreateOrConnectWithoutUserInput[]
    connect?: AiAgentsWhereUniqueInput | AiAgentsWhereUniqueInput[]
  }

  export type WebinarUncheckedCreateNestedManyWithoutPresenterInput = {
    create?: XOR<WebinarCreateWithoutPresenterInput, WebinarUncheckedCreateWithoutPresenterInput> | WebinarCreateWithoutPresenterInput[] | WebinarUncheckedCreateWithoutPresenterInput[]
    connectOrCreate?: WebinarCreateOrConnectWithoutPresenterInput | WebinarCreateOrConnectWithoutPresenterInput[]
    createMany?: WebinarCreateManyPresenterInputEnvelope
    connect?: WebinarWhereUniqueInput | WebinarWhereUniqueInput[]
  }

  export type AiAgentsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AiAgentsCreateWithoutUserInput, AiAgentsUncheckedCreateWithoutUserInput> | AiAgentsCreateWithoutUserInput[] | AiAgentsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AiAgentsCreateOrConnectWithoutUserInput | AiAgentsCreateOrConnectWithoutUserInput[]
    connect?: AiAgentsWhereUniqueInput | AiAgentsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type WebinarUpdateManyWithoutPresenterNestedInput = {
    create?: XOR<WebinarCreateWithoutPresenterInput, WebinarUncheckedCreateWithoutPresenterInput> | WebinarCreateWithoutPresenterInput[] | WebinarUncheckedCreateWithoutPresenterInput[]
    connectOrCreate?: WebinarCreateOrConnectWithoutPresenterInput | WebinarCreateOrConnectWithoutPresenterInput[]
    upsert?: WebinarUpsertWithWhereUniqueWithoutPresenterInput | WebinarUpsertWithWhereUniqueWithoutPresenterInput[]
    createMany?: WebinarCreateManyPresenterInputEnvelope
    set?: WebinarWhereUniqueInput | WebinarWhereUniqueInput[]
    disconnect?: WebinarWhereUniqueInput | WebinarWhereUniqueInput[]
    delete?: WebinarWhereUniqueInput | WebinarWhereUniqueInput[]
    connect?: WebinarWhereUniqueInput | WebinarWhereUniqueInput[]
    update?: WebinarUpdateWithWhereUniqueWithoutPresenterInput | WebinarUpdateWithWhereUniqueWithoutPresenterInput[]
    updateMany?: WebinarUpdateManyWithWhereWithoutPresenterInput | WebinarUpdateManyWithWhereWithoutPresenterInput[]
    deleteMany?: WebinarScalarWhereInput | WebinarScalarWhereInput[]
  }

  export type AiAgentsUpdateManyWithoutUserNestedInput = {
    create?: XOR<AiAgentsCreateWithoutUserInput, AiAgentsUncheckedCreateWithoutUserInput> | AiAgentsCreateWithoutUserInput[] | AiAgentsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AiAgentsCreateOrConnectWithoutUserInput | AiAgentsCreateOrConnectWithoutUserInput[]
    upsert?: AiAgentsUpsertWithWhereUniqueWithoutUserInput | AiAgentsUpsertWithWhereUniqueWithoutUserInput[]
    set?: AiAgentsWhereUniqueInput | AiAgentsWhereUniqueInput[]
    disconnect?: AiAgentsWhereUniqueInput | AiAgentsWhereUniqueInput[]
    delete?: AiAgentsWhereUniqueInput | AiAgentsWhereUniqueInput[]
    connect?: AiAgentsWhereUniqueInput | AiAgentsWhereUniqueInput[]
    update?: AiAgentsUpdateWithWhereUniqueWithoutUserInput | AiAgentsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AiAgentsUpdateManyWithWhereWithoutUserInput | AiAgentsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AiAgentsScalarWhereInput | AiAgentsScalarWhereInput[]
  }

  export type WebinarUncheckedUpdateManyWithoutPresenterNestedInput = {
    create?: XOR<WebinarCreateWithoutPresenterInput, WebinarUncheckedCreateWithoutPresenterInput> | WebinarCreateWithoutPresenterInput[] | WebinarUncheckedCreateWithoutPresenterInput[]
    connectOrCreate?: WebinarCreateOrConnectWithoutPresenterInput | WebinarCreateOrConnectWithoutPresenterInput[]
    upsert?: WebinarUpsertWithWhereUniqueWithoutPresenterInput | WebinarUpsertWithWhereUniqueWithoutPresenterInput[]
    createMany?: WebinarCreateManyPresenterInputEnvelope
    set?: WebinarWhereUniqueInput | WebinarWhereUniqueInput[]
    disconnect?: WebinarWhereUniqueInput | WebinarWhereUniqueInput[]
    delete?: WebinarWhereUniqueInput | WebinarWhereUniqueInput[]
    connect?: WebinarWhereUniqueInput | WebinarWhereUniqueInput[]
    update?: WebinarUpdateWithWhereUniqueWithoutPresenterInput | WebinarUpdateWithWhereUniqueWithoutPresenterInput[]
    updateMany?: WebinarUpdateManyWithWhereWithoutPresenterInput | WebinarUpdateManyWithWhereWithoutPresenterInput[]
    deleteMany?: WebinarScalarWhereInput | WebinarScalarWhereInput[]
  }

  export type AiAgentsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AiAgentsCreateWithoutUserInput, AiAgentsUncheckedCreateWithoutUserInput> | AiAgentsCreateWithoutUserInput[] | AiAgentsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AiAgentsCreateOrConnectWithoutUserInput | AiAgentsCreateOrConnectWithoutUserInput[]
    upsert?: AiAgentsUpsertWithWhereUniqueWithoutUserInput | AiAgentsUpsertWithWhereUniqueWithoutUserInput[]
    set?: AiAgentsWhereUniqueInput | AiAgentsWhereUniqueInput[]
    disconnect?: AiAgentsWhereUniqueInput | AiAgentsWhereUniqueInput[]
    delete?: AiAgentsWhereUniqueInput | AiAgentsWhereUniqueInput[]
    connect?: AiAgentsWhereUniqueInput | AiAgentsWhereUniqueInput[]
    update?: AiAgentsUpdateWithWhereUniqueWithoutUserInput | AiAgentsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AiAgentsUpdateManyWithWhereWithoutUserInput | AiAgentsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AiAgentsScalarWhereInput | AiAgentsScalarWhereInput[]
  }

  export type WebinarCreatetagsInput = {
    set: string[]
  }

  export type AttendanceCreateNestedManyWithoutWebinarInput = {
    create?: XOR<AttendanceCreateWithoutWebinarInput, AttendanceUncheckedCreateWithoutWebinarInput> | AttendanceCreateWithoutWebinarInput[] | AttendanceUncheckedCreateWithoutWebinarInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutWebinarInput | AttendanceCreateOrConnectWithoutWebinarInput[]
    createMany?: AttendanceCreateManyWebinarInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type AttendeeCreateNestedOneWithoutWebinarInput = {
    create?: XOR<AttendeeCreateWithoutWebinarInput, AttendeeUncheckedCreateWithoutWebinarInput>
    connectOrCreate?: AttendeeCreateOrConnectWithoutWebinarInput
    connect?: AttendeeWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutWebinarsInput = {
    create?: XOR<UserCreateWithoutWebinarsInput, UserUncheckedCreateWithoutWebinarsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWebinarsInput
    connect?: UserWhereUniqueInput
  }

  export type AttendanceUncheckedCreateNestedManyWithoutWebinarInput = {
    create?: XOR<AttendanceCreateWithoutWebinarInput, AttendanceUncheckedCreateWithoutWebinarInput> | AttendanceCreateWithoutWebinarInput[] | AttendanceUncheckedCreateWithoutWebinarInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutWebinarInput | AttendanceCreateOrConnectWithoutWebinarInput[]
    createMany?: AttendanceCreateManyWebinarInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumWebinarStatusEnumFieldUpdateOperationsInput = {
    set?: $Enums.WebinarStatusEnum
  }

  export type WebinarUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EnumCtaTypeEnumFieldUpdateOperationsInput = {
    set?: $Enums.CtaTypeEnum
  }

  export type AttendanceUpdateManyWithoutWebinarNestedInput = {
    create?: XOR<AttendanceCreateWithoutWebinarInput, AttendanceUncheckedCreateWithoutWebinarInput> | AttendanceCreateWithoutWebinarInput[] | AttendanceUncheckedCreateWithoutWebinarInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutWebinarInput | AttendanceCreateOrConnectWithoutWebinarInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutWebinarInput | AttendanceUpsertWithWhereUniqueWithoutWebinarInput[]
    createMany?: AttendanceCreateManyWebinarInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutWebinarInput | AttendanceUpdateWithWhereUniqueWithoutWebinarInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutWebinarInput | AttendanceUpdateManyWithWhereWithoutWebinarInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type AttendeeUpdateOneWithoutWebinarNestedInput = {
    create?: XOR<AttendeeCreateWithoutWebinarInput, AttendeeUncheckedCreateWithoutWebinarInput>
    connectOrCreate?: AttendeeCreateOrConnectWithoutWebinarInput
    upsert?: AttendeeUpsertWithoutWebinarInput
    disconnect?: AttendeeWhereInput | boolean
    delete?: AttendeeWhereInput | boolean
    connect?: AttendeeWhereUniqueInput
    update?: XOR<XOR<AttendeeUpdateToOneWithWhereWithoutWebinarInput, AttendeeUpdateWithoutWebinarInput>, AttendeeUncheckedUpdateWithoutWebinarInput>
  }

  export type UserUpdateOneRequiredWithoutWebinarsNestedInput = {
    create?: XOR<UserCreateWithoutWebinarsInput, UserUncheckedCreateWithoutWebinarsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWebinarsInput
    upsert?: UserUpsertWithoutWebinarsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWebinarsInput, UserUpdateWithoutWebinarsInput>, UserUncheckedUpdateWithoutWebinarsInput>
  }

  export type AttendanceUncheckedUpdateManyWithoutWebinarNestedInput = {
    create?: XOR<AttendanceCreateWithoutWebinarInput, AttendanceUncheckedCreateWithoutWebinarInput> | AttendanceCreateWithoutWebinarInput[] | AttendanceUncheckedCreateWithoutWebinarInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutWebinarInput | AttendanceCreateOrConnectWithoutWebinarInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutWebinarInput | AttendanceUpsertWithWhereUniqueWithoutWebinarInput[]
    createMany?: AttendanceCreateManyWebinarInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutWebinarInput | AttendanceUpdateWithWhereUniqueWithoutWebinarInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutWebinarInput | AttendanceUpdateManyWithWhereWithoutWebinarInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type AttendanceCreateNestedManyWithoutUserInput = {
    create?: XOR<AttendanceCreateWithoutUserInput, AttendanceUncheckedCreateWithoutUserInput> | AttendanceCreateWithoutUserInput[] | AttendanceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutUserInput | AttendanceCreateOrConnectWithoutUserInput[]
    createMany?: AttendanceCreateManyUserInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type WebinarCreateNestedManyWithoutAttendeeInput = {
    create?: XOR<WebinarCreateWithoutAttendeeInput, WebinarUncheckedCreateWithoutAttendeeInput> | WebinarCreateWithoutAttendeeInput[] | WebinarUncheckedCreateWithoutAttendeeInput[]
    connectOrCreate?: WebinarCreateOrConnectWithoutAttendeeInput | WebinarCreateOrConnectWithoutAttendeeInput[]
    createMany?: WebinarCreateManyAttendeeInputEnvelope
    connect?: WebinarWhereUniqueInput | WebinarWhereUniqueInput[]
  }

  export type AttendanceUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AttendanceCreateWithoutUserInput, AttendanceUncheckedCreateWithoutUserInput> | AttendanceCreateWithoutUserInput[] | AttendanceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutUserInput | AttendanceCreateOrConnectWithoutUserInput[]
    createMany?: AttendanceCreateManyUserInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type WebinarUncheckedCreateNestedManyWithoutAttendeeInput = {
    create?: XOR<WebinarCreateWithoutAttendeeInput, WebinarUncheckedCreateWithoutAttendeeInput> | WebinarCreateWithoutAttendeeInput[] | WebinarUncheckedCreateWithoutAttendeeInput[]
    connectOrCreate?: WebinarCreateOrConnectWithoutAttendeeInput | WebinarCreateOrConnectWithoutAttendeeInput[]
    createMany?: WebinarCreateManyAttendeeInputEnvelope
    connect?: WebinarWhereUniqueInput | WebinarWhereUniqueInput[]
  }

  export type EnumCallStatusEnumFieldUpdateOperationsInput = {
    set?: $Enums.CallStatusEnum
  }

  export type AttendanceUpdateManyWithoutUserNestedInput = {
    create?: XOR<AttendanceCreateWithoutUserInput, AttendanceUncheckedCreateWithoutUserInput> | AttendanceCreateWithoutUserInput[] | AttendanceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutUserInput | AttendanceCreateOrConnectWithoutUserInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutUserInput | AttendanceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AttendanceCreateManyUserInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutUserInput | AttendanceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutUserInput | AttendanceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type WebinarUpdateManyWithoutAttendeeNestedInput = {
    create?: XOR<WebinarCreateWithoutAttendeeInput, WebinarUncheckedCreateWithoutAttendeeInput> | WebinarCreateWithoutAttendeeInput[] | WebinarUncheckedCreateWithoutAttendeeInput[]
    connectOrCreate?: WebinarCreateOrConnectWithoutAttendeeInput | WebinarCreateOrConnectWithoutAttendeeInput[]
    upsert?: WebinarUpsertWithWhereUniqueWithoutAttendeeInput | WebinarUpsertWithWhereUniqueWithoutAttendeeInput[]
    createMany?: WebinarCreateManyAttendeeInputEnvelope
    set?: WebinarWhereUniqueInput | WebinarWhereUniqueInput[]
    disconnect?: WebinarWhereUniqueInput | WebinarWhereUniqueInput[]
    delete?: WebinarWhereUniqueInput | WebinarWhereUniqueInput[]
    connect?: WebinarWhereUniqueInput | WebinarWhereUniqueInput[]
    update?: WebinarUpdateWithWhereUniqueWithoutAttendeeInput | WebinarUpdateWithWhereUniqueWithoutAttendeeInput[]
    updateMany?: WebinarUpdateManyWithWhereWithoutAttendeeInput | WebinarUpdateManyWithWhereWithoutAttendeeInput[]
    deleteMany?: WebinarScalarWhereInput | WebinarScalarWhereInput[]
  }

  export type AttendanceUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AttendanceCreateWithoutUserInput, AttendanceUncheckedCreateWithoutUserInput> | AttendanceCreateWithoutUserInput[] | AttendanceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutUserInput | AttendanceCreateOrConnectWithoutUserInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutUserInput | AttendanceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AttendanceCreateManyUserInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutUserInput | AttendanceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutUserInput | AttendanceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type WebinarUncheckedUpdateManyWithoutAttendeeNestedInput = {
    create?: XOR<WebinarCreateWithoutAttendeeInput, WebinarUncheckedCreateWithoutAttendeeInput> | WebinarCreateWithoutAttendeeInput[] | WebinarUncheckedCreateWithoutAttendeeInput[]
    connectOrCreate?: WebinarCreateOrConnectWithoutAttendeeInput | WebinarCreateOrConnectWithoutAttendeeInput[]
    upsert?: WebinarUpsertWithWhereUniqueWithoutAttendeeInput | WebinarUpsertWithWhereUniqueWithoutAttendeeInput[]
    createMany?: WebinarCreateManyAttendeeInputEnvelope
    set?: WebinarWhereUniqueInput | WebinarWhereUniqueInput[]
    disconnect?: WebinarWhereUniqueInput | WebinarWhereUniqueInput[]
    delete?: WebinarWhereUniqueInput | WebinarWhereUniqueInput[]
    connect?: WebinarWhereUniqueInput | WebinarWhereUniqueInput[]
    update?: WebinarUpdateWithWhereUniqueWithoutAttendeeInput | WebinarUpdateWithWhereUniqueWithoutAttendeeInput[]
    updateMany?: WebinarUpdateManyWithWhereWithoutAttendeeInput | WebinarUpdateManyWithWhereWithoutAttendeeInput[]
    deleteMany?: WebinarScalarWhereInput | WebinarScalarWhereInput[]
  }

  export type AttendeeCreateNestedOneWithoutAttendanceInput = {
    create?: XOR<AttendeeCreateWithoutAttendanceInput, AttendeeUncheckedCreateWithoutAttendanceInput>
    connectOrCreate?: AttendeeCreateOrConnectWithoutAttendanceInput
    connect?: AttendeeWhereUniqueInput
  }

  export type WebinarCreateNestedOneWithoutAttendancesInput = {
    create?: XOR<WebinarCreateWithoutAttendancesInput, WebinarUncheckedCreateWithoutAttendancesInput>
    connectOrCreate?: WebinarCreateOrConnectWithoutAttendancesInput
    connect?: WebinarWhereUniqueInput
  }

  export type EnumAttendedTypeEnumFieldUpdateOperationsInput = {
    set?: $Enums.AttendedTypeEnum
  }

  export type AttendeeUpdateOneRequiredWithoutAttendanceNestedInput = {
    create?: XOR<AttendeeCreateWithoutAttendanceInput, AttendeeUncheckedCreateWithoutAttendanceInput>
    connectOrCreate?: AttendeeCreateOrConnectWithoutAttendanceInput
    upsert?: AttendeeUpsertWithoutAttendanceInput
    connect?: AttendeeWhereUniqueInput
    update?: XOR<XOR<AttendeeUpdateToOneWithWhereWithoutAttendanceInput, AttendeeUpdateWithoutAttendanceInput>, AttendeeUncheckedUpdateWithoutAttendanceInput>
  }

  export type WebinarUpdateOneRequiredWithoutAttendancesNestedInput = {
    create?: XOR<WebinarCreateWithoutAttendancesInput, WebinarUncheckedCreateWithoutAttendancesInput>
    connectOrCreate?: WebinarCreateOrConnectWithoutAttendancesInput
    upsert?: WebinarUpsertWithoutAttendancesInput
    connect?: WebinarWhereUniqueInput
    update?: XOR<XOR<WebinarUpdateToOneWithWhereWithoutAttendancesInput, WebinarUpdateWithoutAttendancesInput>, WebinarUncheckedUpdateWithoutAttendancesInput>
  }

  export type UserCreateNestedManyWithoutAiAgentsInput = {
    create?: XOR<UserCreateWithoutAiAgentsInput, UserUncheckedCreateWithoutAiAgentsInput> | UserCreateWithoutAiAgentsInput[] | UserUncheckedCreateWithoutAiAgentsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutAiAgentsInput | UserCreateOrConnectWithoutAiAgentsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutAiAgentsInput = {
    create?: XOR<UserCreateWithoutAiAgentsInput, UserUncheckedCreateWithoutAiAgentsInput> | UserCreateWithoutAiAgentsInput[] | UserUncheckedCreateWithoutAiAgentsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutAiAgentsInput | UserCreateOrConnectWithoutAiAgentsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUpdateManyWithoutAiAgentsNestedInput = {
    create?: XOR<UserCreateWithoutAiAgentsInput, UserUncheckedCreateWithoutAiAgentsInput> | UserCreateWithoutAiAgentsInput[] | UserUncheckedCreateWithoutAiAgentsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutAiAgentsInput | UserCreateOrConnectWithoutAiAgentsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutAiAgentsInput | UserUpsertWithWhereUniqueWithoutAiAgentsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutAiAgentsInput | UserUpdateWithWhereUniqueWithoutAiAgentsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutAiAgentsInput | UserUpdateManyWithWhereWithoutAiAgentsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutAiAgentsNestedInput = {
    create?: XOR<UserCreateWithoutAiAgentsInput, UserUncheckedCreateWithoutAiAgentsInput> | UserCreateWithoutAiAgentsInput[] | UserUncheckedCreateWithoutAiAgentsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutAiAgentsInput | UserCreateOrConnectWithoutAiAgentsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutAiAgentsInput | UserUpsertWithWhereUniqueWithoutAiAgentsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutAiAgentsInput | UserUpdateWithWhereUniqueWithoutAiAgentsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutAiAgentsInput | UserUpdateManyWithWhereWithoutAiAgentsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumWebinarStatusEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.WebinarStatusEnum | EnumWebinarStatusEnumFieldRefInput<$PrismaModel>
    in?: $Enums.WebinarStatusEnum[] | ListEnumWebinarStatusEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.WebinarStatusEnum[] | ListEnumWebinarStatusEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumWebinarStatusEnumFilter<$PrismaModel> | $Enums.WebinarStatusEnum
  }

  export type NestedEnumCtaTypeEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.CtaTypeEnum | EnumCtaTypeEnumFieldRefInput<$PrismaModel>
    in?: $Enums.CtaTypeEnum[] | ListEnumCtaTypeEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.CtaTypeEnum[] | ListEnumCtaTypeEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumCtaTypeEnumFilter<$PrismaModel> | $Enums.CtaTypeEnum
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumWebinarStatusEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WebinarStatusEnum | EnumWebinarStatusEnumFieldRefInput<$PrismaModel>
    in?: $Enums.WebinarStatusEnum[] | ListEnumWebinarStatusEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.WebinarStatusEnum[] | ListEnumWebinarStatusEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumWebinarStatusEnumWithAggregatesFilter<$PrismaModel> | $Enums.WebinarStatusEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWebinarStatusEnumFilter<$PrismaModel>
    _max?: NestedEnumWebinarStatusEnumFilter<$PrismaModel>
  }

  export type NestedEnumCtaTypeEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CtaTypeEnum | EnumCtaTypeEnumFieldRefInput<$PrismaModel>
    in?: $Enums.CtaTypeEnum[] | ListEnumCtaTypeEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.CtaTypeEnum[] | ListEnumCtaTypeEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumCtaTypeEnumWithAggregatesFilter<$PrismaModel> | $Enums.CtaTypeEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCtaTypeEnumFilter<$PrismaModel>
    _max?: NestedEnumCtaTypeEnumFilter<$PrismaModel>
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumCallStatusEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.CallStatusEnum | EnumCallStatusEnumFieldRefInput<$PrismaModel>
    in?: $Enums.CallStatusEnum[] | ListEnumCallStatusEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.CallStatusEnum[] | ListEnumCallStatusEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumCallStatusEnumFilter<$PrismaModel> | $Enums.CallStatusEnum
  }

  export type NestedEnumCallStatusEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CallStatusEnum | EnumCallStatusEnumFieldRefInput<$PrismaModel>
    in?: $Enums.CallStatusEnum[] | ListEnumCallStatusEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.CallStatusEnum[] | ListEnumCallStatusEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumCallStatusEnumWithAggregatesFilter<$PrismaModel> | $Enums.CallStatusEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCallStatusEnumFilter<$PrismaModel>
    _max?: NestedEnumCallStatusEnumFilter<$PrismaModel>
  }

  export type NestedEnumAttendedTypeEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendedTypeEnum | EnumAttendedTypeEnumFieldRefInput<$PrismaModel>
    in?: $Enums.AttendedTypeEnum[] | ListEnumAttendedTypeEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttendedTypeEnum[] | ListEnumAttendedTypeEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumAttendedTypeEnumFilter<$PrismaModel> | $Enums.AttendedTypeEnum
  }

  export type NestedEnumAttendedTypeEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendedTypeEnum | EnumAttendedTypeEnumFieldRefInput<$PrismaModel>
    in?: $Enums.AttendedTypeEnum[] | ListEnumAttendedTypeEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttendedTypeEnum[] | ListEnumAttendedTypeEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumAttendedTypeEnumWithAggregatesFilter<$PrismaModel> | $Enums.AttendedTypeEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAttendedTypeEnumFilter<$PrismaModel>
    _max?: NestedEnumAttendedTypeEnumFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type WebinarCreateWithoutPresenterInput = {
    id?: string
    title: string
    description?: string | null
    startTime: Date | string
    endTime?: Date | string | null
    duration?: number
    webinarStatus?: $Enums.WebinarStatusEnum
    tags?: WebinarCreatetagsInput | string[]
    ctaLabel?: string | null
    ctaType: $Enums.CtaTypeEnum
    ctaUrl?: string | null
    couponCode?: string | null
    couponEnabled?: boolean
    couponExpiry?: Date | string | null
    lockChat?: boolean
    stripeProductId?: string | null
    aiAgentId?: string | null
    priceId?: string | null
    recordingUrl?: string | null
    thumbnail?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    attendances?: AttendanceCreateNestedManyWithoutWebinarInput
    Attendee?: AttendeeCreateNestedOneWithoutWebinarInput
  }

  export type WebinarUncheckedCreateWithoutPresenterInput = {
    id?: string
    title: string
    description?: string | null
    startTime: Date | string
    endTime?: Date | string | null
    duration?: number
    webinarStatus?: $Enums.WebinarStatusEnum
    tags?: WebinarCreatetagsInput | string[]
    ctaLabel?: string | null
    ctaType: $Enums.CtaTypeEnum
    ctaUrl?: string | null
    couponCode?: string | null
    couponEnabled?: boolean
    couponExpiry?: Date | string | null
    lockChat?: boolean
    stripeProductId?: string | null
    aiAgentId?: string | null
    priceId?: string | null
    recordingUrl?: string | null
    thumbnail?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    attendeeId?: string | null
    attendances?: AttendanceUncheckedCreateNestedManyWithoutWebinarInput
  }

  export type WebinarCreateOrConnectWithoutPresenterInput = {
    where: WebinarWhereUniqueInput
    create: XOR<WebinarCreateWithoutPresenterInput, WebinarUncheckedCreateWithoutPresenterInput>
  }

  export type WebinarCreateManyPresenterInputEnvelope = {
    data: WebinarCreateManyPresenterInput | WebinarCreateManyPresenterInput[]
    skipDuplicates?: boolean
  }

  export type AiAgentsCreateWithoutUserInput = {
    id?: string
    name: string
    firstMessage: string
    prompt: string
    model: string
    provider: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AiAgentsUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    firstMessage: string
    prompt: string
    model: string
    provider: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AiAgentsCreateOrConnectWithoutUserInput = {
    where: AiAgentsWhereUniqueInput
    create: XOR<AiAgentsCreateWithoutUserInput, AiAgentsUncheckedCreateWithoutUserInput>
  }

  export type WebinarUpsertWithWhereUniqueWithoutPresenterInput = {
    where: WebinarWhereUniqueInput
    update: XOR<WebinarUpdateWithoutPresenterInput, WebinarUncheckedUpdateWithoutPresenterInput>
    create: XOR<WebinarCreateWithoutPresenterInput, WebinarUncheckedCreateWithoutPresenterInput>
  }

  export type WebinarUpdateWithWhereUniqueWithoutPresenterInput = {
    where: WebinarWhereUniqueInput
    data: XOR<WebinarUpdateWithoutPresenterInput, WebinarUncheckedUpdateWithoutPresenterInput>
  }

  export type WebinarUpdateManyWithWhereWithoutPresenterInput = {
    where: WebinarScalarWhereInput
    data: XOR<WebinarUpdateManyMutationInput, WebinarUncheckedUpdateManyWithoutPresenterInput>
  }

  export type WebinarScalarWhereInput = {
    AND?: WebinarScalarWhereInput | WebinarScalarWhereInput[]
    OR?: WebinarScalarWhereInput[]
    NOT?: WebinarScalarWhereInput | WebinarScalarWhereInput[]
    id?: UuidFilter<"Webinar"> | string
    title?: StringFilter<"Webinar"> | string
    description?: StringNullableFilter<"Webinar"> | string | null
    startTime?: DateTimeFilter<"Webinar"> | Date | string
    endTime?: DateTimeNullableFilter<"Webinar"> | Date | string | null
    duration?: IntFilter<"Webinar"> | number
    webinarStatus?: EnumWebinarStatusEnumFilter<"Webinar"> | $Enums.WebinarStatusEnum
    presenterId?: UuidFilter<"Webinar"> | string
    tags?: StringNullableListFilter<"Webinar">
    ctaLabel?: StringNullableFilter<"Webinar"> | string | null
    ctaType?: EnumCtaTypeEnumFilter<"Webinar"> | $Enums.CtaTypeEnum
    ctaUrl?: StringNullableFilter<"Webinar"> | string | null
    couponCode?: StringNullableFilter<"Webinar"> | string | null
    couponEnabled?: BoolFilter<"Webinar"> | boolean
    couponExpiry?: DateTimeNullableFilter<"Webinar"> | Date | string | null
    lockChat?: BoolFilter<"Webinar"> | boolean
    stripeProductId?: StringNullableFilter<"Webinar"> | string | null
    aiAgentId?: UuidNullableFilter<"Webinar"> | string | null
    priceId?: StringNullableFilter<"Webinar"> | string | null
    recordingUrl?: StringNullableFilter<"Webinar"> | string | null
    thumbnail?: StringNullableFilter<"Webinar"> | string | null
    createdAt?: DateTimeFilter<"Webinar"> | Date | string
    updatedAt?: DateTimeFilter<"Webinar"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Webinar"> | Date | string | null
    attendeeId?: UuidNullableFilter<"Webinar"> | string | null
  }

  export type AiAgentsUpsertWithWhereUniqueWithoutUserInput = {
    where: AiAgentsWhereUniqueInput
    update: XOR<AiAgentsUpdateWithoutUserInput, AiAgentsUncheckedUpdateWithoutUserInput>
    create: XOR<AiAgentsCreateWithoutUserInput, AiAgentsUncheckedCreateWithoutUserInput>
  }

  export type AiAgentsUpdateWithWhereUniqueWithoutUserInput = {
    where: AiAgentsWhereUniqueInput
    data: XOR<AiAgentsUpdateWithoutUserInput, AiAgentsUncheckedUpdateWithoutUserInput>
  }

  export type AiAgentsUpdateManyWithWhereWithoutUserInput = {
    where: AiAgentsScalarWhereInput
    data: XOR<AiAgentsUpdateManyMutationInput, AiAgentsUncheckedUpdateManyWithoutUserInput>
  }

  export type AiAgentsScalarWhereInput = {
    AND?: AiAgentsScalarWhereInput | AiAgentsScalarWhereInput[]
    OR?: AiAgentsScalarWhereInput[]
    NOT?: AiAgentsScalarWhereInput | AiAgentsScalarWhereInput[]
    id?: UuidFilter<"AiAgents"> | string
    name?: StringFilter<"AiAgents"> | string
    firstMessage?: StringFilter<"AiAgents"> | string
    prompt?: StringFilter<"AiAgents"> | string
    model?: StringFilter<"AiAgents"> | string
    provider?: StringFilter<"AiAgents"> | string
    userId?: UuidFilter<"AiAgents"> | string
    createdAt?: DateTimeFilter<"AiAgents"> | Date | string
    updatedAt?: DateTimeFilter<"AiAgents"> | Date | string
  }

  export type AttendanceCreateWithoutWebinarInput = {
    id?: string
    joinedAt?: Date | string
    leftAt?: Date | string | null
    attendedType: $Enums.AttendedTypeEnum
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
    user: AttendeeCreateNestedOneWithoutAttendanceInput
  }

  export type AttendanceUncheckedCreateWithoutWebinarInput = {
    id?: string
    joinedAt?: Date | string
    leftAt?: Date | string | null
    attendedType: $Enums.AttendedTypeEnum
    createdAt?: Date | string
    updatedAt?: Date | string
    attendeeId: string
    userId?: string | null
  }

  export type AttendanceCreateOrConnectWithoutWebinarInput = {
    where: AttendanceWhereUniqueInput
    create: XOR<AttendanceCreateWithoutWebinarInput, AttendanceUncheckedCreateWithoutWebinarInput>
  }

  export type AttendanceCreateManyWebinarInputEnvelope = {
    data: AttendanceCreateManyWebinarInput | AttendanceCreateManyWebinarInput[]
    skipDuplicates?: boolean
  }

  export type AttendeeCreateWithoutWebinarInput = {
    id?: string
    email: string
    name: string
    callStatus?: $Enums.CallStatusEnum
    createdAt?: Date | string
    updatedAt?: Date | string
    Attendance?: AttendanceCreateNestedManyWithoutUserInput
  }

  export type AttendeeUncheckedCreateWithoutWebinarInput = {
    id?: string
    email: string
    name: string
    callStatus?: $Enums.CallStatusEnum
    createdAt?: Date | string
    updatedAt?: Date | string
    Attendance?: AttendanceUncheckedCreateNestedManyWithoutUserInput
  }

  export type AttendeeCreateOrConnectWithoutWebinarInput = {
    where: AttendeeWhereUniqueInput
    create: XOR<AttendeeCreateWithoutWebinarInput, AttendeeUncheckedCreateWithoutWebinarInput>
  }

  export type UserCreateWithoutWebinarsInput = {
    id?: string
    name: string
    clerkId: string
    email: string
    profileImage: string
    stripeConnectId?: string | null
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    subscription?: boolean
    stripeCustomerId?: string | null
    aiAgents?: AiAgentsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWebinarsInput = {
    id?: string
    name: string
    clerkId: string
    email: string
    profileImage: string
    stripeConnectId?: string | null
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    subscription?: boolean
    stripeCustomerId?: string | null
    aiAgents?: AiAgentsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWebinarsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWebinarsInput, UserUncheckedCreateWithoutWebinarsInput>
  }

  export type AttendanceUpsertWithWhereUniqueWithoutWebinarInput = {
    where: AttendanceWhereUniqueInput
    update: XOR<AttendanceUpdateWithoutWebinarInput, AttendanceUncheckedUpdateWithoutWebinarInput>
    create: XOR<AttendanceCreateWithoutWebinarInput, AttendanceUncheckedCreateWithoutWebinarInput>
  }

  export type AttendanceUpdateWithWhereUniqueWithoutWebinarInput = {
    where: AttendanceWhereUniqueInput
    data: XOR<AttendanceUpdateWithoutWebinarInput, AttendanceUncheckedUpdateWithoutWebinarInput>
  }

  export type AttendanceUpdateManyWithWhereWithoutWebinarInput = {
    where: AttendanceScalarWhereInput
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyWithoutWebinarInput>
  }

  export type AttendanceScalarWhereInput = {
    AND?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
    OR?: AttendanceScalarWhereInput[]
    NOT?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
    id?: UuidFilter<"Attendance"> | string
    webinarId?: UuidFilter<"Attendance"> | string
    joinedAt?: DateTimeFilter<"Attendance"> | Date | string
    leftAt?: DateTimeNullableFilter<"Attendance"> | Date | string | null
    attendedType?: EnumAttendedTypeEnumFilter<"Attendance"> | $Enums.AttendedTypeEnum
    createdAt?: DateTimeFilter<"Attendance"> | Date | string
    updatedAt?: DateTimeFilter<"Attendance"> | Date | string
    attendeeId?: UuidFilter<"Attendance"> | string
    userId?: UuidNullableFilter<"Attendance"> | string | null
  }

  export type AttendeeUpsertWithoutWebinarInput = {
    update: XOR<AttendeeUpdateWithoutWebinarInput, AttendeeUncheckedUpdateWithoutWebinarInput>
    create: XOR<AttendeeCreateWithoutWebinarInput, AttendeeUncheckedCreateWithoutWebinarInput>
    where?: AttendeeWhereInput
  }

  export type AttendeeUpdateToOneWithWhereWithoutWebinarInput = {
    where?: AttendeeWhereInput
    data: XOR<AttendeeUpdateWithoutWebinarInput, AttendeeUncheckedUpdateWithoutWebinarInput>
  }

  export type AttendeeUpdateWithoutWebinarInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    callStatus?: EnumCallStatusEnumFieldUpdateOperationsInput | $Enums.CallStatusEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Attendance?: AttendanceUpdateManyWithoutUserNestedInput
  }

  export type AttendeeUncheckedUpdateWithoutWebinarInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    callStatus?: EnumCallStatusEnumFieldUpdateOperationsInput | $Enums.CallStatusEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Attendance?: AttendanceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutWebinarsInput = {
    update: XOR<UserUpdateWithoutWebinarsInput, UserUncheckedUpdateWithoutWebinarsInput>
    create: XOR<UserCreateWithoutWebinarsInput, UserUncheckedCreateWithoutWebinarsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWebinarsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWebinarsInput, UserUncheckedUpdateWithoutWebinarsInput>
  }

  export type UserUpdateWithoutWebinarsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profileImage?: StringFieldUpdateOperationsInput | string
    stripeConnectId?: NullableStringFieldUpdateOperationsInput | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subscription?: BoolFieldUpdateOperationsInput | boolean
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    aiAgents?: AiAgentsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWebinarsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profileImage?: StringFieldUpdateOperationsInput | string
    stripeConnectId?: NullableStringFieldUpdateOperationsInput | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subscription?: BoolFieldUpdateOperationsInput | boolean
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    aiAgents?: AiAgentsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AttendanceCreateWithoutUserInput = {
    id?: string
    joinedAt?: Date | string
    leftAt?: Date | string | null
    attendedType: $Enums.AttendedTypeEnum
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
    webinar: WebinarCreateNestedOneWithoutAttendancesInput
  }

  export type AttendanceUncheckedCreateWithoutUserInput = {
    id?: string
    webinarId: string
    joinedAt?: Date | string
    leftAt?: Date | string | null
    attendedType: $Enums.AttendedTypeEnum
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
  }

  export type AttendanceCreateOrConnectWithoutUserInput = {
    where: AttendanceWhereUniqueInput
    create: XOR<AttendanceCreateWithoutUserInput, AttendanceUncheckedCreateWithoutUserInput>
  }

  export type AttendanceCreateManyUserInputEnvelope = {
    data: AttendanceCreateManyUserInput | AttendanceCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WebinarCreateWithoutAttendeeInput = {
    id?: string
    title: string
    description?: string | null
    startTime: Date | string
    endTime?: Date | string | null
    duration?: number
    webinarStatus?: $Enums.WebinarStatusEnum
    tags?: WebinarCreatetagsInput | string[]
    ctaLabel?: string | null
    ctaType: $Enums.CtaTypeEnum
    ctaUrl?: string | null
    couponCode?: string | null
    couponEnabled?: boolean
    couponExpiry?: Date | string | null
    lockChat?: boolean
    stripeProductId?: string | null
    aiAgentId?: string | null
    priceId?: string | null
    recordingUrl?: string | null
    thumbnail?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    attendances?: AttendanceCreateNestedManyWithoutWebinarInput
    presenter: UserCreateNestedOneWithoutWebinarsInput
  }

  export type WebinarUncheckedCreateWithoutAttendeeInput = {
    id?: string
    title: string
    description?: string | null
    startTime: Date | string
    endTime?: Date | string | null
    duration?: number
    webinarStatus?: $Enums.WebinarStatusEnum
    presenterId: string
    tags?: WebinarCreatetagsInput | string[]
    ctaLabel?: string | null
    ctaType: $Enums.CtaTypeEnum
    ctaUrl?: string | null
    couponCode?: string | null
    couponEnabled?: boolean
    couponExpiry?: Date | string | null
    lockChat?: boolean
    stripeProductId?: string | null
    aiAgentId?: string | null
    priceId?: string | null
    recordingUrl?: string | null
    thumbnail?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    attendances?: AttendanceUncheckedCreateNestedManyWithoutWebinarInput
  }

  export type WebinarCreateOrConnectWithoutAttendeeInput = {
    where: WebinarWhereUniqueInput
    create: XOR<WebinarCreateWithoutAttendeeInput, WebinarUncheckedCreateWithoutAttendeeInput>
  }

  export type WebinarCreateManyAttendeeInputEnvelope = {
    data: WebinarCreateManyAttendeeInput | WebinarCreateManyAttendeeInput[]
    skipDuplicates?: boolean
  }

  export type AttendanceUpsertWithWhereUniqueWithoutUserInput = {
    where: AttendanceWhereUniqueInput
    update: XOR<AttendanceUpdateWithoutUserInput, AttendanceUncheckedUpdateWithoutUserInput>
    create: XOR<AttendanceCreateWithoutUserInput, AttendanceUncheckedCreateWithoutUserInput>
  }

  export type AttendanceUpdateWithWhereUniqueWithoutUserInput = {
    where: AttendanceWhereUniqueInput
    data: XOR<AttendanceUpdateWithoutUserInput, AttendanceUncheckedUpdateWithoutUserInput>
  }

  export type AttendanceUpdateManyWithWhereWithoutUserInput = {
    where: AttendanceScalarWhereInput
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyWithoutUserInput>
  }

  export type WebinarUpsertWithWhereUniqueWithoutAttendeeInput = {
    where: WebinarWhereUniqueInput
    update: XOR<WebinarUpdateWithoutAttendeeInput, WebinarUncheckedUpdateWithoutAttendeeInput>
    create: XOR<WebinarCreateWithoutAttendeeInput, WebinarUncheckedCreateWithoutAttendeeInput>
  }

  export type WebinarUpdateWithWhereUniqueWithoutAttendeeInput = {
    where: WebinarWhereUniqueInput
    data: XOR<WebinarUpdateWithoutAttendeeInput, WebinarUncheckedUpdateWithoutAttendeeInput>
  }

  export type WebinarUpdateManyWithWhereWithoutAttendeeInput = {
    where: WebinarScalarWhereInput
    data: XOR<WebinarUpdateManyMutationInput, WebinarUncheckedUpdateManyWithoutAttendeeInput>
  }

  export type AttendeeCreateWithoutAttendanceInput = {
    id?: string
    email: string
    name: string
    callStatus?: $Enums.CallStatusEnum
    createdAt?: Date | string
    updatedAt?: Date | string
    Webinar?: WebinarCreateNestedManyWithoutAttendeeInput
  }

  export type AttendeeUncheckedCreateWithoutAttendanceInput = {
    id?: string
    email: string
    name: string
    callStatus?: $Enums.CallStatusEnum
    createdAt?: Date | string
    updatedAt?: Date | string
    Webinar?: WebinarUncheckedCreateNestedManyWithoutAttendeeInput
  }

  export type AttendeeCreateOrConnectWithoutAttendanceInput = {
    where: AttendeeWhereUniqueInput
    create: XOR<AttendeeCreateWithoutAttendanceInput, AttendeeUncheckedCreateWithoutAttendanceInput>
  }

  export type WebinarCreateWithoutAttendancesInput = {
    id?: string
    title: string
    description?: string | null
    startTime: Date | string
    endTime?: Date | string | null
    duration?: number
    webinarStatus?: $Enums.WebinarStatusEnum
    tags?: WebinarCreatetagsInput | string[]
    ctaLabel?: string | null
    ctaType: $Enums.CtaTypeEnum
    ctaUrl?: string | null
    couponCode?: string | null
    couponEnabled?: boolean
    couponExpiry?: Date | string | null
    lockChat?: boolean
    stripeProductId?: string | null
    aiAgentId?: string | null
    priceId?: string | null
    recordingUrl?: string | null
    thumbnail?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    Attendee?: AttendeeCreateNestedOneWithoutWebinarInput
    presenter: UserCreateNestedOneWithoutWebinarsInput
  }

  export type WebinarUncheckedCreateWithoutAttendancesInput = {
    id?: string
    title: string
    description?: string | null
    startTime: Date | string
    endTime?: Date | string | null
    duration?: number
    webinarStatus?: $Enums.WebinarStatusEnum
    presenterId: string
    tags?: WebinarCreatetagsInput | string[]
    ctaLabel?: string | null
    ctaType: $Enums.CtaTypeEnum
    ctaUrl?: string | null
    couponCode?: string | null
    couponEnabled?: boolean
    couponExpiry?: Date | string | null
    lockChat?: boolean
    stripeProductId?: string | null
    aiAgentId?: string | null
    priceId?: string | null
    recordingUrl?: string | null
    thumbnail?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    attendeeId?: string | null
  }

  export type WebinarCreateOrConnectWithoutAttendancesInput = {
    where: WebinarWhereUniqueInput
    create: XOR<WebinarCreateWithoutAttendancesInput, WebinarUncheckedCreateWithoutAttendancesInput>
  }

  export type AttendeeUpsertWithoutAttendanceInput = {
    update: XOR<AttendeeUpdateWithoutAttendanceInput, AttendeeUncheckedUpdateWithoutAttendanceInput>
    create: XOR<AttendeeCreateWithoutAttendanceInput, AttendeeUncheckedCreateWithoutAttendanceInput>
    where?: AttendeeWhereInput
  }

  export type AttendeeUpdateToOneWithWhereWithoutAttendanceInput = {
    where?: AttendeeWhereInput
    data: XOR<AttendeeUpdateWithoutAttendanceInput, AttendeeUncheckedUpdateWithoutAttendanceInput>
  }

  export type AttendeeUpdateWithoutAttendanceInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    callStatus?: EnumCallStatusEnumFieldUpdateOperationsInput | $Enums.CallStatusEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Webinar?: WebinarUpdateManyWithoutAttendeeNestedInput
  }

  export type AttendeeUncheckedUpdateWithoutAttendanceInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    callStatus?: EnumCallStatusEnumFieldUpdateOperationsInput | $Enums.CallStatusEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Webinar?: WebinarUncheckedUpdateManyWithoutAttendeeNestedInput
  }

  export type WebinarUpsertWithoutAttendancesInput = {
    update: XOR<WebinarUpdateWithoutAttendancesInput, WebinarUncheckedUpdateWithoutAttendancesInput>
    create: XOR<WebinarCreateWithoutAttendancesInput, WebinarUncheckedCreateWithoutAttendancesInput>
    where?: WebinarWhereInput
  }

  export type WebinarUpdateToOneWithWhereWithoutAttendancesInput = {
    where?: WebinarWhereInput
    data: XOR<WebinarUpdateWithoutAttendancesInput, WebinarUncheckedUpdateWithoutAttendancesInput>
  }

  export type WebinarUpdateWithoutAttendancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: IntFieldUpdateOperationsInput | number
    webinarStatus?: EnumWebinarStatusEnumFieldUpdateOperationsInput | $Enums.WebinarStatusEnum
    tags?: WebinarUpdatetagsInput | string[]
    ctaLabel?: NullableStringFieldUpdateOperationsInput | string | null
    ctaType?: EnumCtaTypeEnumFieldUpdateOperationsInput | $Enums.CtaTypeEnum
    ctaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    couponCode?: NullableStringFieldUpdateOperationsInput | string | null
    couponEnabled?: BoolFieldUpdateOperationsInput | boolean
    couponExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lockChat?: BoolFieldUpdateOperationsInput | boolean
    stripeProductId?: NullableStringFieldUpdateOperationsInput | string | null
    aiAgentId?: NullableStringFieldUpdateOperationsInput | string | null
    priceId?: NullableStringFieldUpdateOperationsInput | string | null
    recordingUrl?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Attendee?: AttendeeUpdateOneWithoutWebinarNestedInput
    presenter?: UserUpdateOneRequiredWithoutWebinarsNestedInput
  }

  export type WebinarUncheckedUpdateWithoutAttendancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: IntFieldUpdateOperationsInput | number
    webinarStatus?: EnumWebinarStatusEnumFieldUpdateOperationsInput | $Enums.WebinarStatusEnum
    presenterId?: StringFieldUpdateOperationsInput | string
    tags?: WebinarUpdatetagsInput | string[]
    ctaLabel?: NullableStringFieldUpdateOperationsInput | string | null
    ctaType?: EnumCtaTypeEnumFieldUpdateOperationsInput | $Enums.CtaTypeEnum
    ctaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    couponCode?: NullableStringFieldUpdateOperationsInput | string | null
    couponEnabled?: BoolFieldUpdateOperationsInput | boolean
    couponExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lockChat?: BoolFieldUpdateOperationsInput | boolean
    stripeProductId?: NullableStringFieldUpdateOperationsInput | string | null
    aiAgentId?: NullableStringFieldUpdateOperationsInput | string | null
    priceId?: NullableStringFieldUpdateOperationsInput | string | null
    recordingUrl?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attendeeId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateWithoutAiAgentsInput = {
    id?: string
    name: string
    clerkId: string
    email: string
    profileImage: string
    stripeConnectId?: string | null
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    subscription?: boolean
    stripeCustomerId?: string | null
    webinars?: WebinarCreateNestedManyWithoutPresenterInput
  }

  export type UserUncheckedCreateWithoutAiAgentsInput = {
    id?: string
    name: string
    clerkId: string
    email: string
    profileImage: string
    stripeConnectId?: string | null
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    subscription?: boolean
    stripeCustomerId?: string | null
    webinars?: WebinarUncheckedCreateNestedManyWithoutPresenterInput
  }

  export type UserCreateOrConnectWithoutAiAgentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAiAgentsInput, UserUncheckedCreateWithoutAiAgentsInput>
  }

  export type UserUpsertWithWhereUniqueWithoutAiAgentsInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutAiAgentsInput, UserUncheckedUpdateWithoutAiAgentsInput>
    create: XOR<UserCreateWithoutAiAgentsInput, UserUncheckedCreateWithoutAiAgentsInput>
  }

  export type UserUpdateWithWhereUniqueWithoutAiAgentsInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutAiAgentsInput, UserUncheckedUpdateWithoutAiAgentsInput>
  }

  export type UserUpdateManyWithWhereWithoutAiAgentsInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutAiAgentsInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: UuidFilter<"User"> | string
    name?: StringFilter<"User"> | string
    clerkId?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    profileImage?: StringFilter<"User"> | string
    stripeConnectId?: StringNullableFilter<"User"> | string | null
    lastLoginAt?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    subscription?: BoolFilter<"User"> | boolean
    stripeCustomerId?: StringNullableFilter<"User"> | string | null
  }

  export type WebinarCreateManyPresenterInput = {
    id?: string
    title: string
    description?: string | null
    startTime: Date | string
    endTime?: Date | string | null
    duration?: number
    webinarStatus?: $Enums.WebinarStatusEnum
    tags?: WebinarCreatetagsInput | string[]
    ctaLabel?: string | null
    ctaType: $Enums.CtaTypeEnum
    ctaUrl?: string | null
    couponCode?: string | null
    couponEnabled?: boolean
    couponExpiry?: Date | string | null
    lockChat?: boolean
    stripeProductId?: string | null
    aiAgentId?: string | null
    priceId?: string | null
    recordingUrl?: string | null
    thumbnail?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    attendeeId?: string | null
  }

  export type WebinarUpdateWithoutPresenterInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: IntFieldUpdateOperationsInput | number
    webinarStatus?: EnumWebinarStatusEnumFieldUpdateOperationsInput | $Enums.WebinarStatusEnum
    tags?: WebinarUpdatetagsInput | string[]
    ctaLabel?: NullableStringFieldUpdateOperationsInput | string | null
    ctaType?: EnumCtaTypeEnumFieldUpdateOperationsInput | $Enums.CtaTypeEnum
    ctaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    couponCode?: NullableStringFieldUpdateOperationsInput | string | null
    couponEnabled?: BoolFieldUpdateOperationsInput | boolean
    couponExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lockChat?: BoolFieldUpdateOperationsInput | boolean
    stripeProductId?: NullableStringFieldUpdateOperationsInput | string | null
    aiAgentId?: NullableStringFieldUpdateOperationsInput | string | null
    priceId?: NullableStringFieldUpdateOperationsInput | string | null
    recordingUrl?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attendances?: AttendanceUpdateManyWithoutWebinarNestedInput
    Attendee?: AttendeeUpdateOneWithoutWebinarNestedInput
  }

  export type WebinarUncheckedUpdateWithoutPresenterInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: IntFieldUpdateOperationsInput | number
    webinarStatus?: EnumWebinarStatusEnumFieldUpdateOperationsInput | $Enums.WebinarStatusEnum
    tags?: WebinarUpdatetagsInput | string[]
    ctaLabel?: NullableStringFieldUpdateOperationsInput | string | null
    ctaType?: EnumCtaTypeEnumFieldUpdateOperationsInput | $Enums.CtaTypeEnum
    ctaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    couponCode?: NullableStringFieldUpdateOperationsInput | string | null
    couponEnabled?: BoolFieldUpdateOperationsInput | boolean
    couponExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lockChat?: BoolFieldUpdateOperationsInput | boolean
    stripeProductId?: NullableStringFieldUpdateOperationsInput | string | null
    aiAgentId?: NullableStringFieldUpdateOperationsInput | string | null
    priceId?: NullableStringFieldUpdateOperationsInput | string | null
    recordingUrl?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attendeeId?: NullableStringFieldUpdateOperationsInput | string | null
    attendances?: AttendanceUncheckedUpdateManyWithoutWebinarNestedInput
  }

  export type WebinarUncheckedUpdateManyWithoutPresenterInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: IntFieldUpdateOperationsInput | number
    webinarStatus?: EnumWebinarStatusEnumFieldUpdateOperationsInput | $Enums.WebinarStatusEnum
    tags?: WebinarUpdatetagsInput | string[]
    ctaLabel?: NullableStringFieldUpdateOperationsInput | string | null
    ctaType?: EnumCtaTypeEnumFieldUpdateOperationsInput | $Enums.CtaTypeEnum
    ctaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    couponCode?: NullableStringFieldUpdateOperationsInput | string | null
    couponEnabled?: BoolFieldUpdateOperationsInput | boolean
    couponExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lockChat?: BoolFieldUpdateOperationsInput | boolean
    stripeProductId?: NullableStringFieldUpdateOperationsInput | string | null
    aiAgentId?: NullableStringFieldUpdateOperationsInput | string | null
    priceId?: NullableStringFieldUpdateOperationsInput | string | null
    recordingUrl?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attendeeId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AiAgentsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    firstMessage?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiAgentsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    firstMessage?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiAgentsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    firstMessage?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceCreateManyWebinarInput = {
    id?: string
    joinedAt?: Date | string
    leftAt?: Date | string | null
    attendedType: $Enums.AttendedTypeEnum
    createdAt?: Date | string
    updatedAt?: Date | string
    attendeeId: string
    userId?: string | null
  }

  export type AttendanceUpdateWithoutWebinarInput = {
    id?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attendedType?: EnumAttendedTypeEnumFieldUpdateOperationsInput | $Enums.AttendedTypeEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    user?: AttendeeUpdateOneRequiredWithoutAttendanceNestedInput
  }

  export type AttendanceUncheckedUpdateWithoutWebinarInput = {
    id?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attendedType?: EnumAttendedTypeEnumFieldUpdateOperationsInput | $Enums.AttendedTypeEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendeeId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AttendanceUncheckedUpdateManyWithoutWebinarInput = {
    id?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attendedType?: EnumAttendedTypeEnumFieldUpdateOperationsInput | $Enums.AttendedTypeEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendeeId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AttendanceCreateManyUserInput = {
    id?: string
    webinarId: string
    joinedAt?: Date | string
    leftAt?: Date | string | null
    attendedType: $Enums.AttendedTypeEnum
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
  }

  export type WebinarCreateManyAttendeeInput = {
    id?: string
    title: string
    description?: string | null
    startTime: Date | string
    endTime?: Date | string | null
    duration?: number
    webinarStatus?: $Enums.WebinarStatusEnum
    presenterId: string
    tags?: WebinarCreatetagsInput | string[]
    ctaLabel?: string | null
    ctaType: $Enums.CtaTypeEnum
    ctaUrl?: string | null
    couponCode?: string | null
    couponEnabled?: boolean
    couponExpiry?: Date | string | null
    lockChat?: boolean
    stripeProductId?: string | null
    aiAgentId?: string | null
    priceId?: string | null
    recordingUrl?: string | null
    thumbnail?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type AttendanceUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attendedType?: EnumAttendedTypeEnumFieldUpdateOperationsInput | $Enums.AttendedTypeEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    webinar?: WebinarUpdateOneRequiredWithoutAttendancesNestedInput
  }

  export type AttendanceUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    webinarId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attendedType?: EnumAttendedTypeEnumFieldUpdateOperationsInput | $Enums.AttendedTypeEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AttendanceUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    webinarId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attendedType?: EnumAttendedTypeEnumFieldUpdateOperationsInput | $Enums.AttendedTypeEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WebinarUpdateWithoutAttendeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: IntFieldUpdateOperationsInput | number
    webinarStatus?: EnumWebinarStatusEnumFieldUpdateOperationsInput | $Enums.WebinarStatusEnum
    tags?: WebinarUpdatetagsInput | string[]
    ctaLabel?: NullableStringFieldUpdateOperationsInput | string | null
    ctaType?: EnumCtaTypeEnumFieldUpdateOperationsInput | $Enums.CtaTypeEnum
    ctaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    couponCode?: NullableStringFieldUpdateOperationsInput | string | null
    couponEnabled?: BoolFieldUpdateOperationsInput | boolean
    couponExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lockChat?: BoolFieldUpdateOperationsInput | boolean
    stripeProductId?: NullableStringFieldUpdateOperationsInput | string | null
    aiAgentId?: NullableStringFieldUpdateOperationsInput | string | null
    priceId?: NullableStringFieldUpdateOperationsInput | string | null
    recordingUrl?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attendances?: AttendanceUpdateManyWithoutWebinarNestedInput
    presenter?: UserUpdateOneRequiredWithoutWebinarsNestedInput
  }

  export type WebinarUncheckedUpdateWithoutAttendeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: IntFieldUpdateOperationsInput | number
    webinarStatus?: EnumWebinarStatusEnumFieldUpdateOperationsInput | $Enums.WebinarStatusEnum
    presenterId?: StringFieldUpdateOperationsInput | string
    tags?: WebinarUpdatetagsInput | string[]
    ctaLabel?: NullableStringFieldUpdateOperationsInput | string | null
    ctaType?: EnumCtaTypeEnumFieldUpdateOperationsInput | $Enums.CtaTypeEnum
    ctaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    couponCode?: NullableStringFieldUpdateOperationsInput | string | null
    couponEnabled?: BoolFieldUpdateOperationsInput | boolean
    couponExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lockChat?: BoolFieldUpdateOperationsInput | boolean
    stripeProductId?: NullableStringFieldUpdateOperationsInput | string | null
    aiAgentId?: NullableStringFieldUpdateOperationsInput | string | null
    priceId?: NullableStringFieldUpdateOperationsInput | string | null
    recordingUrl?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attendances?: AttendanceUncheckedUpdateManyWithoutWebinarNestedInput
  }

  export type WebinarUncheckedUpdateManyWithoutAttendeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: IntFieldUpdateOperationsInput | number
    webinarStatus?: EnumWebinarStatusEnumFieldUpdateOperationsInput | $Enums.WebinarStatusEnum
    presenterId?: StringFieldUpdateOperationsInput | string
    tags?: WebinarUpdatetagsInput | string[]
    ctaLabel?: NullableStringFieldUpdateOperationsInput | string | null
    ctaType?: EnumCtaTypeEnumFieldUpdateOperationsInput | $Enums.CtaTypeEnum
    ctaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    couponCode?: NullableStringFieldUpdateOperationsInput | string | null
    couponEnabled?: BoolFieldUpdateOperationsInput | boolean
    couponExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lockChat?: BoolFieldUpdateOperationsInput | boolean
    stripeProductId?: NullableStringFieldUpdateOperationsInput | string | null
    aiAgentId?: NullableStringFieldUpdateOperationsInput | string | null
    priceId?: NullableStringFieldUpdateOperationsInput | string | null
    recordingUrl?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUpdateWithoutAiAgentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profileImage?: StringFieldUpdateOperationsInput | string
    stripeConnectId?: NullableStringFieldUpdateOperationsInput | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subscription?: BoolFieldUpdateOperationsInput | boolean
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    webinars?: WebinarUpdateManyWithoutPresenterNestedInput
  }

  export type UserUncheckedUpdateWithoutAiAgentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profileImage?: StringFieldUpdateOperationsInput | string
    stripeConnectId?: NullableStringFieldUpdateOperationsInput | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subscription?: BoolFieldUpdateOperationsInput | boolean
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    webinars?: WebinarUncheckedUpdateManyWithoutPresenterNestedInput
  }

  export type UserUncheckedUpdateManyWithoutAiAgentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profileImage?: StringFieldUpdateOperationsInput | string
    stripeConnectId?: NullableStringFieldUpdateOperationsInput | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subscription?: BoolFieldUpdateOperationsInput | boolean
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
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