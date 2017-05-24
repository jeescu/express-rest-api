import APIResource from './resource';
import Facet from '../models/facet';
import { roleAuthorize } from '../middleware/authorization';

class FacetsApi extends APIResource {
  constructor() {
    // define resource id and model
    super('facet', Facet);
    
    // optionally you can define a permission
    // middleware per resource methods
    this.permissionRules = {
      get: roleAuthorize(['user', 'admin'])
    }

    // extend default resource routes here
    this.resource().get('/search/:keyword', (req, res) => {
      res.send({ message: 'search' })
    });
  }
}

export default new FacetsApi();
