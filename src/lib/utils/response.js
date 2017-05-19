/**
  * Response Success
  * @param {any} response - res obj
  * @param {any} data 
  * @param {string} [message='Success'] 
  * @returns response
  */
export function formatResponseSuccess(response, data, message = 'Success', status = 200) {
  // define success response schema
  const responseData = {
    message,
    data
  }
  return response.status(status).send(responseData);
}

/**
 * Response Error
 * @param {obj} response - res object
 * @param {any} message
 * @param {number} status - error status code
 * @returns response
 */
export function formatResponseError(response, message, status = 422) {
  // define error response schema
  const responseData = { error: message }
  return response.status(status).send(responseData)
}