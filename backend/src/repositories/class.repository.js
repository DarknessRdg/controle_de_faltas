import Class from '../models/Class';

class ClassRepository {

    async create(data) {
        return await Class.create(data);
    }

    async getAll() {
        return await Class.findAll({});
    }
    
    async getClass(id) {
        return await Module.findOne({where: {class_id: id}});
    }
}

export default new ClassRepository();