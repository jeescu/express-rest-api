import mongoose from 'mongoose';
import appConfig from './config/env';
import logger from './lib/utils/logger';

export default init => {
	// connect to db
	mongoose.connect(appConfig.mongoUrl);
	const db = mongoose.connection;

	db.on('error', logger.error.bind(logger, 'DB connection error:'));
	db.once('open', () => {
		logger.info('DB connected.')
		init();
	});
}
