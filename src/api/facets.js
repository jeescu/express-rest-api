import APIResource from './resource';
import Facet from '../models/facet';

class FacetsApi extends APIResource {
	constructor() {
		// define id and model
		super('facet', Facet);
		
		// override resource methods here
	}
}

export default new FacetsApi();
