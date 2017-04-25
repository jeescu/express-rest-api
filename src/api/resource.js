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
    constructor(Id, Model) {
        this.id = Id;
        this.load = function (req, id, callback) {
            Model.findById(id, (error, obj) => {
                if (error) callback(error);
                if (obj) callback(null, obj);
            })
        }

        // GET all
        this.list = function ({ params }, res) {
            Model.find({}, (error, obj) => {
                formatResponseSuccess(res, obj)
            })
        }

        // POST
        this.create = function ({ body }, res) {
            const obj = new Model(body);
            obj.save((error) => {
                if (error) formatResponseError(res, 'Invalid data');
                formatResponseSuccess(res, obj);
            })
        }

        // GET :id 
        this.read = function ({ obj }, res) {
            formatResponseSuccess(res, obj);
        }

        // PUT :id
        this.update = function ({ obj, body }, res) {
            const fields = Object.keys(body);

            fields.forEach((field) => {
                obj[fields] = body[field]
            });

            obj.save((error, updatedObj) => {
                if (error) formatResponseError(res, error);
                formatResponseSuccess(res, updatedObj);
            });
        }

        // DELETE :id
        this.delete = function ({ obj }, res) {
            obj.remove((error) => {
                if (error) formatResponseError(res, error);
                res.sendStatus(204);
            })
        }
    }

    getResource() {
        return resource(this);
    }
}