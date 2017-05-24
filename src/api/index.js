import { version } from '../../package.json';
import { Router } from 'express';
import { requireAuth } from '../middleware/passport';
import auth from './auth';
import facets from './facets';

/**
 * API Resources
 */
export default () => {
  let api = Router();
  // auth
  api.use('/auth', auth);
  // resources
  api.use('/facets', requireAuth, facets.permissions(), facets.resource()); // using its api permissions
  // No resource. Perhaps show API metadata
  api.get('/', (req, res) => {
    res.json({ version });
  });

  return api;
}
