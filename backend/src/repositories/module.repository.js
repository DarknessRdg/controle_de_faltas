import Module from '../models/Module';

class ModuleRepository {

    async create(data) {
        return await Module.create(data);
    }

    async getAll() {
        return await Module.findAll({ include: [ {all: true} ]});
    }

    async getModule(id) {
        return await Module.findOne({where: {module_id: id}, 
        include: [ {all: true} ]});
    }
}

export default new ModuleRepository();