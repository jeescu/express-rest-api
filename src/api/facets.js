import APIResource from './resource';
import Facet from '../models/facet';

class FacetsApi extends APIResource {
  constructor() {
    // define resource id and model
    super('facet', Facet);

    // you can override default APIResource methods here
    // load, list, create ...

    // you can also extend default resource route here
    this.facetResource = super.resource();
    this.extendResource();
  }

  extendResource() {
    // facets/search/name
    this.facetResource.get('/search/:keyword', (req, res) => {
      res.send({ message: 'search' })
    });
  }
  // then overrides super's resource() by the extended resource.
  resource() {
    return this.facetResource;
  }
}

const facetApi = new FacetsApi();
const facetApiResource = facetApi.resource();

export default facetApiResource;
