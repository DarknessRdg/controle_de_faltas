import router from '../routes/index.router';
import '../service/ConnectionDataBase';
import { config } from 'dotenv';
import Express from 'express';
import cors from 'cors';

config({path: process.cwd() + '/environments/.env'});

class App {
    constructor() {
        this.server = Express();

        this.middlewares();
        this.routes();
    }

    routes() {
        this.server.use(Express.json());
        this.server.use(router);
    }

    middlewares() {
        this.server.use(cors());
    }
}

export default new App().server;