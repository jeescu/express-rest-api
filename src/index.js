import http from 'http';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import initializeDb from './db';
import middleware from './middleware';
import api from './api';
import apiConfig from './config/api';

let app = express();
app.server = http.createServer(app);

// 3rd party middleware
app.use(cors({
	exposedHeaders: apiConfig.corsHeaders
}));

app.use(helmet());

app.use(bodyParser.json({
	limit: apiConfig.bodyLimit
}));

app.use(morgan('combined'));

initializeDb(() => {
	// internal middleware
	app.use(middleware());

	// api router
	app.use('/api', api());

	app.server.listen(process.env.PORT || apiConfig.port);

	console.log(`Started on port ${app.server.address().port}`);
});

export default app;
