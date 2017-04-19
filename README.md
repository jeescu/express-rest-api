# Express REST API starter

A REST API boilerplate for NodeJS that uses collections 
of basic practices: Auth, Security, RESTful resources, API specs.

> Uses MongoDB as its database, Passport for authentication with (jwt) and Swagger for api specs.

## Libraries and tools used
- [Express](https://expressjs.com/)
- [Mongodb](https://www.mongodb.com)
- ES6
- Babel (preset 2015)
- [Passport](https://github.com/jaredhanson/passport)
- [JsonWebToken](https://github.com/auth0/node-jsonwebtoken)
- [Mongoose]()
- [SwaggerUI](https://github.com/scottie1984/swagger-ui-express)
- Morgan, Helmet, Cors
- Mocha, Chai, Chakram
- Docker

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
Just Checkout `localhost:8080/explorer`.

## Licence
MIT
