const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const router = require('express').Router();


const PORT = 5000;

const swaggerDocs = swaggerJsDoc({
  swaggerDefinition: {
    openapi: '3.0.1',
    servers: [
      {
        url: 'http://localhost:5000/',
        description: 'Simple Todo',
        variables: {
          port: {
            enum: [PORT],
            default: PORT
          }
        }
      }
    ],
    components: {
      securitySchemes: {
        Bearer: {
          type: 'apiKey',
          name: 'Authorization',
          in: 'header',
          description: 'Please use login api to get accessToken'
        }
      }
    }
  },
  
  apis: [`${__dirname}/docs/**/*.yaml` , `${__dirname}/components/**/*.yaml`,]
});

router.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

module.exports = router;
