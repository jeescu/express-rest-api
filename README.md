# Express REST API starter

This boilerplate uses [passport](https://github.com/jaredhanson/passport) for authentication and [mongodb](https://www.mongodb.com) as the database.

## Libraries and tools used
- Express
- ES6
- Babel (preset 2015)
- Passport
- JsonWebToken
- Mongoose
- Swagger
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

## Licence
MIT
