import { Router } from 'express';
import authController from '../controllers/authController';
import { requireSignIn } from '../middleware/passport';

/**
 * Follow this format if you want to use api
 * with controllers
 */
const auth = () => {
	let api = Router();
	api.post('/signup', authController.signUp);
    api.post('/signin', requireSignIn, authController.signIn);
	return api;
}

export default auth();
