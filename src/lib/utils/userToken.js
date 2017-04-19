import jwt from 'jwt-simple';
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
    return jwt.encode({ sub: user._id, iat: timestamp }, apiConfig.secretKey);
}