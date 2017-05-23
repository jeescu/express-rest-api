import resource from 'resource-router-middleware';
import { formatResponseError, formatResponseSuccess } from '../lib/utils/response';
// Check out resource https://github.com/developit/resource-router-middleware 

/**
 * API Resource
 * Generic wrapper for model resource,  
 * @export
 * @class APIResource
 * 
 */
export default class APIResource {
  constructor(resourceId, Model) {
    this.id = resourceId;

    this.load = (req, id, callback) => {
      Model.findById(id, (error, obj) => {
        if (error) callback(error);
        if (obj) callback(null, obj);
      })
    }

    // GET all
    this.list = ({ params }, res) => {
      Model.find({}, (error, obj) => {
        formatResponseSuccess(res, obj)
      })
    }

    // POST
    this.create = ({ body }, res) => {
      const obj = new Model(body);
      obj.save((error) => {
        if (error) formatResponseError(res, 'Invalid data');
        formatResponseSuccess(res, obj);
      })
    }

    // GET :id 
    this.read = ({ [resourceId]: obj }, res) => {
      formatResponseSuccess(res, obj);
    }

    // PUT :id
    this.update = ({ [resourceId]: obj, body }, res) => {
      obj.set(body);
      obj.save((error, updatedObj) => {
        if (error) formatResponseError(res, error);
        formatResponseSuccess(res, updatedObj);
      });
    }

    // PATCH :id
    this.patch = ({ [resourceId]: obj, body }, res) => {
      obj.set(body)
      obj.save((error, obj) => {
        if (error) formatResponseError(res, error);
        formatResponseSuccess(res, obj);
      });
    }

    // DELETE :id
    this.delete = ({ [resourceId]: obj }, res) => {
      obj.remove((error) => {
        if (error) formatResponseError(res, error);
        res.sendStatus(204);
      })
    }

    // create resource router from this.
    this.resourceApi = resource(this);
  }

  resource() {
    return this.resourceApi;
  }
}