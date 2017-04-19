import { Router } from 'express';
import authController from '../controllers/authentication';
import { requireSignIn } from './passport';

export default () => {
	let api = Router();
	api.post('/signup', authController.signUp);
    api.post('/signin', requireSignIn, authController.signIn);

	return api;
}
