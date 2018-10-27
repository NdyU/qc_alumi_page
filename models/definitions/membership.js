const Sequelize = require('sequelize');

module.exports = {
  //Table Model
  property: {
    member_id : {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    // lvl 0: guest
    // lvl 1: user
    // lvl 2: admin
    member_level: {
      type: Sequelize.INTEGER
    },
    member_cost: {
      type: Sequelize.INTEGER
    },
    point: {
      type: Sequelize.DECIMAL
    },
    join_date: {
      type: Sequelize.DATE
    }
  },
  //Additional cofiguration for the model
  config: {
    timestamps: false //setting it to false: Block timebased columns from being created automaticly upon table creation
  }
};
