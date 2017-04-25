# Express REST API starter
[![Build Status](https://travis-ci.org/jeescu/express-rest-api.svg?branch=master)](https://travis-ci.org/jeescu/express-rest-api)
[![bitHound Dependencies](https://www.bithound.io/github/jeescu/express-rest-api/badges/dependencies.svg)](https://www.bithound.io/github/jeescu/express-rest-api/master/dependencies/npm)
[![bitHound Dev Dependencies](https://www.bithound.io/github/jeescu/express-rest-api/badges/devDependencies.svg)](https://www.bithound.io/github/jeescu/express-rest-api/master/dependencies/npm)

A REST API boilerplate for NodeJS that uses collections 
of basic practices: Auth, Security, RESTful resources, API docs.

> Uses MongoDB as its database, Passport for authentication with (jwt) and Swagger for api documentation.

## Libraries and tools used
- [Express](https://expressjs.com/)
- [Mongodb](https://www.mongodb.com)
- [ES6](http://es6-features.org)
- [Babel (preset 2015)](https://babeljs.io/docs/plugins/preset-es2015/)
- [Passport](https://github.com/jaredhanson/passport)
- [JsonWebToken](https://github.com/auth0/node-jsonwebtoken)
- [Mongoose]()
- [SwaggerUI](https://github.com/scottie1984/swagger-ui-express)
- [Morgan](https://github.com/expressjs/morgan), [Helmet](https://github.com/helmetjs/helmet), [Cors](https://github.com/expressjs/cors)
- Mocha, Chai, Chakram
- [Docker](https://www.docker.com/)

### Getting Started

```
# Clone this repository and install dependencies

> git clone git@github.com:jeescu/express-rest-api.git
> cd express-rest-api

> npm install

# Run tests
> npm test

# Run development
> npm run dev

# Build and run production mode
> npm start
```

### Docker support
```
> cd express-rest-api

# Build your docker
> docker build -t rest-api .

# Run your docker image with the tag name
> docker run -p 8080:8080 rest-api
```

### API documentation
Checkout `localhost:8080/docs`.

## Licence
MIT
