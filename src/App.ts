import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import 'reflect-metadata';
import { createConnection } from "typeorm";
import HeroRouter from './routes/HeroRouter';
import PhotoRouter from './routes/PhotoRouter';
import { developmentConnectionOptions } from './environments/dev'
import { Photo } from './entities/Photo';

// Creates and configures an ExpressJS web server.
class App {

  // ref to Express instance
  public express: express.Application;

  //Run configuration methods on the Express instance.
  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
    createConnection(developmentConnectionOptions).then(
      async connection => {
        // Here you can start to work with your entities
      }).catch(error => console.log(error));
  }

  // Configure Express middleware.
  private middleware(): void {
    this.express.use(logger('dev'));
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
  }

  // Configure API endpoints.
  private routes(): void {
    /* This is just to get up and running, and to make sure what we've got is
     * working so far. This function will change when we start to add more
     * API endpoints */
    let router = express.Router();
    // placeholder route handler
    router.get('/', (req, res, next) => {
      res.json({
        message: 'Hello World!'
      });
    });
    this.express.use('/', router);
    this.express.use('/api/v1/heroes', HeroRouter);
    this.express.use('/api/v1/photos', PhotoRouter);    
  }

}

export default new App().express;

