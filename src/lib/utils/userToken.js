import jwt from 'jsonwebtoken';
import apiConfig from '../../config/api';

/**
* Token For User
* Sets a token based on user id and
* secret key
* 
* @param {object} user - user data
* @returns token
*/

export const getTokenForUser = (user) => {
  const timestamp = +new Date();
  return jwt.sign({ sub: user._id, iat: timestamp }, apiConfig.secretKey);
}