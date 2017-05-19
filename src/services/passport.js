import passport from 'passport';
import User from '../models/user';
import apiConfig from '../config/api';
import { Strategy, ExtractJwt } from 'passport-jwt';
import LocalStrategy from 'passport-local';

/**
 * Local Strategy
 * This strategy allows incoming
 * requests to authenticate using 
 * username and password.
 */

const localOptions = {
  usernameField: 'email'
}

const localLogin = new LocalStrategy(localOptions, (email, password, done) => {
  // verify this username and password
  User.findOne({ email }, (error, user) => {
    if (error) return done(error)

    if (!user) return done(null, false);

    // Compare password
    user.comparePassword(password, (error, isMatch) => {
      if (error) return done(error);
      if (!isMatch) return done(null, false);

      return done(null, user);
    });
  })
});

/**
 * JWT Strategy
 * This allows to authenticate incoming requests
 * using the token in the Authorization field in headers
 */

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: apiConfig.secretKey
}

const jwtLogin = new Strategy(jwtOptions, (payload, done) => {
  // See if the user ID in the payload (sub) exists in the db
  // if does call 'done' with user object
  // otherwise call done without it
  User.findById(payload.sub, (error, user) => {
    if (error) done(error, false);
    done(null, user || false);
  })
});

// Use the strategies using passport
passport.use(jwtLogin);
passport.use(localLogin);