import Frequency from '../models/Frequency';
import Module from '../models/Module';
import Class from '../models/Class';

class ClassRepository {

    async create(data) {
        return await Class.create(data);
    }

    async getAll() {
        return await Class.findAll({include: [
            {as: 'class_modules', model: Module},
            {as: 'class_frequences', model: Frequency} 
        ]});
    }
    
    async getClass(id) {
        return await Class.findOne({where: {class_id: id}, include: [
            {as: 'class_modules', model: Module},
            {as: 'class_frequences', model: Frequency} 
        ]});
    }

    async delete(id) {
        return await Class.destroy({where: {class_id: id}});
    }

    async update(instance, data) {
        return await instance.update(data);
    }
}

export default new ClassRepository();