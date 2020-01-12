import Module from '../models/Module';
import Class from '../models/Class';

class ModuleRepository {

    async create(data) {
        return await Module.create(data);
    }

    async getAll() {
        return await Module.findAll({include: [{as: 'module_class', model: Class}]});
    }

    async getModule(id) {
        return await Module.findOne({where: {module_id: id}, 
        include: [{as: 'module_class', model: Class}]});
    }
}

export default new ModuleRepository();