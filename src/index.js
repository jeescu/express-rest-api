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

import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './config/swagger.json';

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
	// api explorer
	app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

	// internal middleware
	app.use(middleware());

	// api router
	app.use('/api', api());

	app.server.listen(process.env.PORT || apiConfig.port);

	console.log(`Started on port ${app.server.address().port}`);
});

export default app;
