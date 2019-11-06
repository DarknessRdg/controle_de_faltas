import databaseConfig from '../database/config/config';
import Sequelize from 'sequelize';

const models = [];

class ConnectionDatabase {
    constructor() {
        this.init();
    }
    
    init() {
        
        this.connection = new Sequelize(databaseConfig);
      
        models
        .map(model => model.init(this.connection))
        .map(model => model.associate && model.associate(this.connection.models));

        this.connection.authenticate().then((msg) => {
          console.log("\nDatabase started successfully\n");
        });
    }
}

export default new ConnectionDatabase();