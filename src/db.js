import mongoose from 'mongoose';
import appConfig from './config/env';

export default callback => {
	// connect to db
	mongoose.connect(appConfig.mongoUrl);
	const db = mongoose.connection;

	db.on('error', console.error.bind(console, 'connection error:'));
	db.once('open', () => {
		console.info('db connection success..')
		callback();
	});
}
