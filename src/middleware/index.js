import { Router } from 'express';
import auth from './auth';
import { requireAuth } from './passport';

export default () => {
	let middleware = Router();
	// auth api for unique signIn and signUp routes
	middleware.use('/auth', auth());
	// authenticate any incoming requests
	middleware.all('*', requireAuth);

	return middleware;
}
