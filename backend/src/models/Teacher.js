import Sequelize, { Model } from 'sequelize';

class Teacher extends Model {

    static init(sequelize) {
        super.init({
            
            teacher_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true 
            },

            name: {
                type: Sequelize.STRING(20),
                allowNull: false
            },

            sex: {
                type: Sequelize.STRING,
                allowNull: false
            },

            email: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true
            },

            password: {
                type: Sequelize.STRING,
                allowNull: false
            },

            registration: {
                type: Sequelize.STRING(30),
                allowNull: false,
                unique: true
            },
            
            is_supersu: {
                type: Sequelize.BOOLEAN,
                defaultValue: true
            },

        }, {
            sequelize
        });

        return this;
    }

    static associate (models) { 
        
        /* Relations (1, N) Teacher -> Class  */
        this.hasMany(models.Class, {as: 'teacher_class', foreignKey: 'teacher_id'});

    }
}

export default Teacher;