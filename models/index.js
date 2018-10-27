const Sequelize = require('sequelize');

//Get the database config info from the local environment
//ref: https://www.postgresql.org/docs/9.1/static/libpq-envars.html
const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;

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
    console.log('Connection to the database has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

//Acquire Models
const userModel = require('./models/user')(sequelize);

module.exports = {
  USER: userModel
}
