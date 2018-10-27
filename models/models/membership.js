const membershipDef = require('./../definitions/membership');
//Define Membership Model

module.exports = (sequelize) => {
  const Membership = sequelize.define('membership', membershipDef.property, {...membershipDef.config, ...membershipDef.scope});

  return {
    /*
      Find the Membership given the id
      required: id
     */
    GET: (id) => {
      return Membership.findOne({
        where: {
          id: id
        }
      });
    },

    CREATE: ({member_level, member_cost, point, join_date}) => {
      return Membership.create({
        member_level: member_level,
        member_cost: member_cost,
        point: point,
        join_date: join_date
      });
    }
  }
};
