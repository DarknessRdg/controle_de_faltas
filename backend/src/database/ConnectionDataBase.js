import databaseConfig from '../config/config';
import Frequency from '../app/models/Frequency';
import Student from '../app/models/Student';
import Teacher from '../app/models/Teacher';
import Module from '../app/models/Module';
import Class from '../app/models/Class';
import Sequelize from 'sequelize';

const models = [Teacher, Module, Class, Student, Frequency];

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