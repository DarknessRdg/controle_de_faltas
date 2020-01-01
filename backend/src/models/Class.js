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

            teacher_id: {
                type: Sequelize.INTEGER,
                onDelete: 'cascade',
                allowNull: false,
                references: {
                    model: 'teacher',
                    key:  'teacher_id',
                    as: 'teacher',
                }
            },

            module_id: {
                type: Sequelize.INTEGER,
                onDelete: 'cascade',
                allowNull: false,
                references: {
                    model: 'module',
                    key:  'module_id',
                    as: 'module',
                }
            },
            
            date: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            
            descriptions: {
                type: Sequelize.STRING,
                allowNull: false
            },

            createdAt: Sequelize.DATE,
            updatedAt: Sequelize.DATE

        }, 
        {
            sequelize
        });

        return this;
    }

    static associate (models) { 

        /* Relations (1, N) */
        this.hasMany(models.Teacher, {as: 'teachers', foreignKey: 'teacher_id', onDelete: 'cascade'});
        
        /* Relations (1, N) */
        this.hasMany(models.Module, {as: 'modules', foreignKey: 'module_id', onDelete: 'cascade'});
    }
}

export default Class;