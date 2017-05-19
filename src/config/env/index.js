import devConfig from './app.dev.json';
import prodConfig from './app.dev.json';

let appConfig = devConfig;

if (process.env.NODE_ENV === 'production') {
  appConfig = prodConfig;
}

export default appConfig;