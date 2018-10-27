const Sequelize = require('sequelize');

const Member = require('./membership');

module.exports = {
  //Table Model
  property: {
    user_id : {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    user_name: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    user_email: {
      type: Sequelize.STRING
    },
    user_gender: {
      type: Sequelize.STRING
    },
    user_DOB: {
      type: Sequelize.DATE
    },
    enroll_date: {
      type: Sequelize.DATE,
    }
  },
  //Additional cofiguration for the model
  config: {
    timestamps: false //setting it to false: Block timebased columns from being created automaticly upon table creation
  }
};
