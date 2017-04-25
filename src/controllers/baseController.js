export default class baseController {
    /**
     * Response Success
     * status 200 responses
     * @param {any} response - res obj
     * @param {any} data 
     * @param {string} [message='Success'] 
     * @returns response
     */
    responseSuccess(response, data, message='Success') {
        // define success response schema
        const responseData = {
            message,
            data
        }
        return response.send(responseData);
    }

    /**
     * Response Error
     * @param {obj} response - res object
     * @param {any} message
     * @param {number} status - error status code
     * @returns response
     */
    responseError(response, message, status=422) {
        // define error response schema
        const responseData = { error: message }
        return response.status(status).send(responseData)
    }
}