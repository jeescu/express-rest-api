import resource from 'resource-router-middleware';
import Facet from '../models/facet';

export default () => resource({
	/** Property name to store preloaded entity on `request`. */
	id: 'facet',

	/** For requests with an `id`, you can auto-load the entity.
	 *  Errors terminate the request, success sets `req[id] = data`.
	 */
	load(req, id, callback) {
		Facet.findById(id, (error, facet) => {
			if (error) callback(error);
			if (facet) callback(null, facet);
		})
	},

	/** GET / - List all entities */
	index({ params }, res) {
		Facet.find({}, (error, facets) => {
			res.json(facets);
		})
	},

	/** POST / - Create a new entity */
	create({ body }, res) {
		const facet = new Facet(body);
		facet.save((error) => {
			if (error) res.status(422).send("Invalid data");
			res.json(facet);
		})
	},

	/** GET /:id - Return a given entity */
	read({ facet }, res) {
		res.json(facet);
	},

	/** PUT /:id - Update a given entity */
	update({ facet, body }, res) {
		const fields = Object.keys(body);

		fields.forEach((field) => {
			facet[fields] = body[field]
		});

		facet.save((error, updatedFacet) => {
			if (error) res.status(422).send(error);
			res.send(updatedFacet);
		});
	},

	/** DELETE /:id - Delete a given entity */
	delete({ facet }, res) {
		facet.remove((error) => {
			if (error) res.status(204).send("Deleted");
			res.sendStatus(204);
		})
	}
});
