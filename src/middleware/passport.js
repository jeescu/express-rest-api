// load and apply passport strategies
import '../services/passport';
import passport from 'passport';

/**
 * Authentication Strategies
 * See `services/passport` for
 * further reading
 */

export const requireAuth = passport.authenticate('jwt', { session: false });
export const requireSignIn = passport.authenticate('local', { session: false });
