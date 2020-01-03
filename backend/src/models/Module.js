import Sequelize, { Model } from 'sequelize';

class Module extends Model {

    static init(sequelize) { 
        super.init({

            module_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true 
            },

            name: {
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

        /* Relations (1, N)  Module -> class */
        this.hasMany(models.Class, {as: 'class', foreignKey: 'class_id', onDelete: 'cascade'});
    }
}

export default Module;