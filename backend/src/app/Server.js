import Express from 'express';
import { config } from 'dotenv'

config()

class Server {
    constructor() {
        this.server = Express();
        this.init();
    }

    init() {
        this.server.listen(process.env.SERVER_PORT, process.env.SERVER_HOST, (msg) => {
            console.log('\nServer start with successfully!');
        });
    }
}

export default new Server().server;