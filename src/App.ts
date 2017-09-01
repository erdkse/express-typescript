import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import {DBConnectionHelper} from "./helpers/db-connection-helper";

import HeroRouter from './routes/HeroRouter';
import UserRouter from "./routes/UserRouter";

class App {

    public express: express.Application;

    constructor() {
        DBConnectionHelper.connect();
        this.express = express();
        this.middleware();
        this.routes();
    }

    private middleware(): void {
        this.express.use(logger('dev'));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({extended: false}));
    }

    private routes(): void {
        let router = express.Router();
        router.get('/', (req, res, next) => {
            res.json({
                message: 'Running v0.0.0'
            });
        });
        this.express.use('/', router);
        this.express.use('/api/v1/heroes', HeroRouter);
        this.express.use('/api/v1/users', UserRouter);
    }

}

export default new App().express;

