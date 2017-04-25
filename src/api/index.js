import { version } from '../../package.json';
import { Router } from 'express';
import facets from './facets';

/**
 * API Resources
 */
export default () => {
	let api = Router();

	// facets resource
	api.use('/facets', facets.getResource());

	// No resource. Show API metadata at the root
	api.get('/', (req, res) => {
		res.json({ version });
	});

	return api;
}
