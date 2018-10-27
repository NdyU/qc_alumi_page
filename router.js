const Router = require('express-promise-router');
const router = new Router();

const UserController = require('./controllers/users');

const ViewController = require('./controllers/views');
/*
 * Sample route structure
 *  router.HttpMehods(get, post, delete, put, etc...) {
 *    route,
 *    middlewares,
 *    view
 *  }
 */
router.get(  //http request type
  '/',  //route
  UserController.userList, //middleware for fetching information of the userList
  ViewController.Homepage //View Controller
);

router.get(
  '/register',
  ViewController.Register
)
router.post(
  '/register',
  UserController.createUser,
  ViewController.Homepage
);

module.exports = router;
