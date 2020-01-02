import Sequelize, { Model } from 'sequelize';

class Student extends Model {

    static init(sequelize) {
        super.init({

            student_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true 
            },
            
            name: {
                type: Sequelize.STRING,
                allowNull: false
            },

            email: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true
            },

            password: {
                type: Sequelize.VIRTUAL,
                allowNull: false
            },

            sex: {
                type: Sequelize.STRING,
                allowNull: false
            },

            phone: {
                type: Sequelize.STRING,
                allowNull: false,
            },

            registration: {
                type: Sequelize.STRING(30),
                allowNull: false,
                unique: true
            },
            
            identity: {
                type: Sequelize.STRING(30),
                allowNull: false,
                unique: true
            },

            createdAt: Sequelize.DATE,
            updatedAt: Sequelize.DATE

        }, {
            sequelize
        });

        return this;
    }
}

export default Student;