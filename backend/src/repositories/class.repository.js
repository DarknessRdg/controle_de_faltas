import Frequency from '../models/Frequency';
import Module from '../models/Module';
import Class from '../models/Class';

class ClassRepository {

    async create(data) {
        return await Class.create(data);
    }

    async getAll() {
        return await Class.findAll({});
    }
    
    async getClass(id) {
        return await Class.findOne({where: {class_id: id}, include: [
            {as: 'modules', model: Module},
            {as: 'frequences', model: Frequency} 
        ]});
    }
}

export default new ClassRepository();