import User from '../models/user';

export const roleAuthorize = (roles) => {
  return (req, res, next) => {
    const user = req.user;

    User.findById(user._id, function (err, user) {
      if (err) {
        res.status(422).json({ error: 'No user found.' });
        return next(err);
      }

      if (roles.indexOf(user.role) > -1) {
        return next();
      }

      res.status(401).json({ error: 'Unauthorized' });
      return next('Unauthorized');
    });
  }
}