
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UsersScalarFieldEnum = {
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

exports.Prisma.Users_refScalarFieldEnum = {
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

exports.Prisma.Family_refScalarFieldEnum = {
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

exports.Prisma.ParticipantsScalarFieldEnum = {
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
  master_categoryId: 'master_categoryId',
  transactionsId: 'transactionsId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.TransactionsScalarFieldEnum = {
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

exports.Prisma.Master_categoryScalarFieldEnum = {
  id: 'id',
  name: 'name',
  type: 'type',
  price: 'price',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.usersOrderByRelevanceFieldEnum = {
  name: 'name',
  username: 'username',
  password: 'password',
  role: 'role',
  users_refId: 'users_refId',
  transactionId: 'transactionId'
};

exports.Prisma.users_refOrderByRelevanceFieldEnum = {
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

exports.Prisma.family_refOrderByRelevanceFieldEnum = {
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

exports.Prisma.participantsOrderByRelevanceFieldEnum = {
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
  transactionsId: 'transactionsId'
};

exports.Prisma.transactionsOrderByRelevanceFieldEnum = {
  id: 'id',
  pt: 'pt',
  divisi: 'divisi',
  emergencyName: 'emergencyName',
  emergencyPhone: 'emergencyPhone',
  transferProof: 'transferProof'
};

exports.Prisma.master_categoryOrderByRelevanceFieldEnum = {
  name: 'name',
  type: 'type'
};


exports.Prisma.ModelName = {
  users: 'users',
  users_ref: 'users_ref',
  family_ref: 'family_ref',
  participants: 'participants',
  transactions: 'transactions',
  master_category: 'master_category'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
