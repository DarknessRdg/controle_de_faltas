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
            }

        }, {
            sequelize
        });

        return this;
    }

    static associate (models) { 

        /* Relations (1, N)  Module -> Class */
        this.hasMany(models.Class, {as: 'module_class', foreignKey: 'module_id'});
    }
}

export default Module;