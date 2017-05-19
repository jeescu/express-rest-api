import { formatResponseSuccess, formatResponseError } from '../lib/utils/response';

export default class BaseController {
  constructor() {
    this.responseSuccess = formatResponseSuccess;
    this.responseError = formatResponseError;
  }
}