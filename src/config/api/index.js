import api from './api.json';

// API environment variables settings
const {
	SECRET_KEY,
	PORT
} = process.env;

api.secretKey = SECRET_KEY || api.secretKey;
api.port = PORT || api.port;

export default api;