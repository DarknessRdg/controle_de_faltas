import databaseConfig from '../database/config/config';
import Frequency from '../models/Frequency';
import Student from '../models/Student';
import Teacher from '../models/Teacher';
import Module from '../models/Module';
import Class from '../models/Class';
import Sequelize from 'sequelize';

const models = [Teacher, Class, Student, Frequency, Module];

class ConnectionDatabase {
    constructor() {
        this.init();
    }
    
    async init() {
        
        this.connection = new Sequelize(databaseConfig);
      
        models
        .map(model => model.init(this.connection))
        .map(model => model.associate && model.associate(this.connection.models));

        await this.connection.authenticate().then((msg) => {
            console.log("\nDatabase started successfully\n");
        });
    }
}

export default new ConnectionDatabase();