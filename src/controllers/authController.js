import BaseController from './baseController';
import User from '../models/user';
import { getTokenForUser } from '../lib/utils/userToken';

class AuthController extends BaseController {
  constructor() {
    super();
    // pinning context, when used in routers 
    this.signUp = this.signUp.bind(this);
    this.signIn = this.signIn.bind(this);
  }

  signUp(req, res, next) {
    const { email, password } = req.body;
    // controller level validation
    if (!email || !password) {
      return this.responseError(res, 'You must provide email and password');
    }

    User.findOne({ email }, (error, data) => {
      if (error) { return next(error) }
      // if email exists
      if (data) {
        return this.responseError(res, 'Email is in use');
      }
      // is user doesn't exist create new record
      const user = new User({
        email,
        password
      });

      user.save((error) => {
        if (error) return next(error);
        // respond to request indicating the user was created                
        res.send({ token: getTokenForUser(user) });
      });
    });
  }

  signIn(req, res) {
    // User is already had their email and password authenticated
    // See local strategy authentication
    // Just respond a token
    res.send({ token: getTokenForUser(req.user) });
  }
}

export default new AuthController();
