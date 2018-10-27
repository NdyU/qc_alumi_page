const userDef = require('./../definitions/user');
//Define User Model

module.exports = (sequelize) => {
  const User = sequelize.define('user', userDef.property, {...userDef.config, ...userDef.scope});

  return {

    GET_ALL: () => {
      return User.findAll();
    },
    /*
      Find the User given the id
      required: id
     */
    GET: (id) => {
      return User.findOne({
        where: {
          id: id
        }
      });
    },

    CREATE: ({username, password, gender, email, dateOfBirth}) => {
      return User.create({
        user_name: username,
        password: password,
        user_email: email,
        user_gender: gender,
        user_DOB: dateOfBirth
      });
    }
  }
};
