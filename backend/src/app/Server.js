import { config } from 'dotenv';
import Express from 'express';

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