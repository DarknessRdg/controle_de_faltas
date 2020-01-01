import router from '../routes/index.router';
import { config } from 'dotenv';
import Express from 'express';

config({path: process.cwd() + '/environments/.env'});

class App {
    constructor() {
        this.server = Express();
        this.routes();
    }

    routes() {
        this.server.use(Express.json());
        this.server.use(router);
    }
}

export default new App().server;