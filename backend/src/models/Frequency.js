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
                allowNull: false,
                references: { model: 'class', key: 'class_id'},
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE'
            },

            student_id: {
                type: Sequelize.INTEGER,
                unique: true,
                allowNull: false,
                references: { model: 'student', key: 'student_id'},
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE'
            },

            present: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
            },
              
        }, 
        {
            sequelize
        });

        return this;
    }

    static associate (models) { 
       
        /* Relations (1, 1) Frequency -> Class */
        this.belongsTo(models.Class, {as: 'frequency_class', foreignKey: 'class_id'});

        /* Relations (1, 1) Frequency -> Student */
        this.belongsTo(models.Student, {as: 'frequency_student', foreignKey: 'student_id'});

    }
}

export default Frequency;