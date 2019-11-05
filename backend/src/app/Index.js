import router from '../routes/index.router';
import Server from './Server';
import { config } from 'dotenv';

config();

class Index {
    constructor() {
        this.init();
    }

    init () {
        Server.use(router);
    }
}

new Index();