import { version } from '../../package.json';
import { Router } from 'express';
import { requireAuth } from '../middleware/passport';
import auth from './auth';
import facet from './facet';

/**
 * API Resources
 */
export default () => {
	let api = Router();
	// auth
	api.use('/auth', auth);
	// resources
	api.use('/facet', requireAuth, facet);
	// No resource. Perhaps show API metadata
	api.get('/', (req, res) => {
		res.json({ version });
	});

	return api;
}
