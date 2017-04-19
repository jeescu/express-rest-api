import resource from 'resource-router-middleware';
import Facet from '../models/facet';

/**
 * Check out https://github.com/developit/resource-router-middleware
 * for further documentation of the code 
 */

export default () => resource({
	id: 'facet',

	load(req, id, callback) {
		Facet.findById(id, (error, facet) => {
			if (error) callback(error);
			if (facet) callback(null, facet);
		})
	},

	// GET all
	index({ params }, res) {
		Facet.find({}, (error, facets) => {
			res.json(facets);
		})
	},

	// POST
	create({ body }, res) {
		const facet = new Facet(body);
		facet.save((error) => {
			if (error) res.status(422).send("Invalid data");
			res.json(facet);
		})
	},

	// GET :id 
	read({ facet }, res) {
		res.json(facet);
	},

	// PUT :id
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

	// DELETE :id
	delete({ facet }, res) {
		facet.remove((error) => {
			if (error) res.status(204).send("Deleted");
			res.sendStatus(204);
		})
	}
});
