import Sequelize, { Model } from 'sequelize';

class Class extends Model {

    static init(sequelize) { 
        super.init({

            class_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true 
            },

            module_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: { model: 'module', key: 'module_id'},
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE'
            },

            teacher_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: { model: 'teacher', key: 'teacher_id'},
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE'
            },

            date: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            
            descriptions: {
                type: Sequelize.STRING,
                allowNull: false
            },
        }, {
            sequelize
        });

        return this;
    }

    static associate (models) { 
       
        /* Relations (1, 1) class -> Module */
        this.belongsTo(models.Module, {as: 'class_modules', foreignKey: 'module_id'});

        /* Relations (1, 1) class -> Teacher */
        this.belongsTo(models.Teacher, {as: 'class_teachers', foreignKey: 'teacher_id'});

        /* Relations (1, N) Class -> Frequency */
        this.hasMany(models.Frequency, {as: 'class_frequences', foreignKey: 'class_id'});
    }
}

export default Class;