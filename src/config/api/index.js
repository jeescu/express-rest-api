import api from './api.json';

// API environment variables settings
const ENV_SECRET_KEY = process.env.SECRET_KEY;
const ENV_PORT = process.env.PORT;

api.secretKey = ENV_SECRET_KEY || api.secretKey;
api.port = ENV_PORT || api.port;

export default api;