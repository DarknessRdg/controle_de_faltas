import router from '../routes/index.router';
import { config } from 'dotenv';
import Server from './Server';

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