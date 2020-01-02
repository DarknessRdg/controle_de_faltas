import Sequelize, { Model } from 'sequelize';

class Frequency extends Model {

    static init(sequelize) { 
        super.init({

            frequency_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true 
            },

            class_id: {
                type: Sequelize.INTEGER,
                onDelete: 'cascade',
                allowNull: false,
                references: {
                    model: 'class',
                    key:  'class_id',
                    as: 'classes',
                }
            },

            student_id: {
                type: Sequelize.INTEGER,
                onDelete: 'cascade',
                allowNull: false,
                references: {
                    model: 'student',
                    key:  'student_id',
                    as: 'students',
                }
            },
            
            present: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
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
        this.hasMany(models.Class, {as: 'classes', foreignKey: 'class_id', onDelete: 'cascade'});
        
        /* Relations (1, N) */
        this.hasMany(models.Student, {as: 'students', foreignKey: 'student_id', onDelete: 'cascade'});
    }
}

export default Frequency;