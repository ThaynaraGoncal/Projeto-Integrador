import express from 'express';
import routes from './routes';
import path from 'path';

import './database';

class App {
    constructor() {
        this.server = express();

        this.midlewares();
        this.routes();
    }


    midlewares() {
        this.server.use(express.json());
        this.server.use('/images', express.static(path.resolve(__dirname, '..', 'tmp', 'uploads')));
    }

    routes() {
        this.server.use(routes);
    }
}

export default new App().server;