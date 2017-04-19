/**
 * Creates a callback that proxies node callback style arguments to an Express Response object.
 *	@param {express.Response} res	Express HTTP Response
 *	@param {number} [status=200]	Status code to send on success
 *
 *	@example
 *	list(req, res) {
 *		collection.find({}, toRes(res));
 *	}
 */
export function toRes(res, status=200) {
	return (error, data) => {
		if (error) return res.status(500).send(data);
		res.status(status).json(data);
	};
}
