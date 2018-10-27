//Use this file to initialize the database, run this file directly once, and run from the root directory.

//Load the environment virables from the .env file from the root directory
//Thus the script must be run from the root directory.
require('dotenv').config();

const Sequelize = require('sequelize');

//Get the database config info from the local environment
//ref: https://www.usergresql.org/docs/9.1/static/libpq-envars.html
const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;

console.log(PGHOST);

// Or you can simply use a connection uri
// const sequelize = new Sequelize('usergres://user:pass@example.com:5432/dbname');
const sequelize = new Sequelize(PGDATABASE, PGUSER, PGPASSWORD, {
  host: PGHOST,
  dialect: 'mysql',  //'mysql'|'sqlite'|'postgres'|'mssql'
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});

//Check if connection to the database can be established
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

/*
 * Model Definitions
 * */

const membershipModelDef = require('./definitions/membership');
//Define member model
const Membership = sequelize.define('membership', membershipModelDef.property, membershipModelDef.config);

const userModelDef = require('./definitions/user');
//Define user Model
const User = sequelize.define('user', userModelDef.property, userModelDef.config);

// /*
//  * Model Associations
//  * */
// Membership.hasMany(User, {
//   foreignKey: {
//     name: 'member_id',
//     allowNull: false
//   }
// });

//If {force: true}, drop the existing table with the same name and create a new one
Membership.sync({force: false});
User.sync({force: true});
