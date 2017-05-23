import APIResource from './resource';
import Facet from '../models/facet';

class FacetsApi extends APIResource {
  constructor() {
    // define resource id and model
    super('facet', Facet);

    // extend resource routes here
    this.resource().post('/search/:keyword', (req, res) => {
      res.send({ message: 'search' })
    });    
  }
}

// get resource routes
const FacetsApiResource = new FacetsApi().resource();

export default FacetsApiResource;
