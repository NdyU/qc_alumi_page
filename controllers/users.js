const { USER } = require('./../models');

module.exports = {
  /*
    Route to handle creating new post,
    Given params:
      -username
      -password
      -repeatedPassword
    Supported request type: x-www-form-urlencoded
   */

  createUser: async (req, res, next) => {
    try {
      console.log(req.body);
      var user = await USER.CREATE(req.body);
      req.data = {success: true, message: 'Successfully Created Account'};
    }
    catch( error) {
      console.error(error.message);
      req.error = {error: true, message: 'Fail to create account'};

    };
    next();
  },

  /*
    Route to handle creating new post,
    Given params:
      -username
      -password
      -repeatedPassword
    Supported request type: x-www-form-urlencoded
   */
   userList: async (req, res, next) => {
     try {
       var user = await USER.GET_ALL();
       req.data = user;
     }
     catch( error) {
       console.error(error.message);
       req.error = {error: true};
     };
     next();
   }
}
