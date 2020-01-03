import Frequency from '../models/Frequency';
import Teacher from '../models/Teacher';
import Module from '../models/Module';
import Class from '../models/Class';

class TeacherRepository {

    async create(data) {
        return await Teacher.create(data);
    }
    
    async getAll() {
        return await Teacher.findAll({});
    }

    async getTeacher(id) {
        const teacher = [
            'teacher_id',
            'name',
            'sex',
            'email',
            'registration',
            'is_supersu',
            'updatedAt',
            'createdAt'
        ]
    
       return await Teacher.findOne({where: {teacher_id: id},  attributes: teacher, 
        include: [{as: 'class', model: Class,
        //include: [{as: 'modules', model: Module}],
        include: [{as: 'frequences', model: Frequency}]    
    }]});
    }

    async findByEmail(email) {
        return await Teacher.findOne({where: {email: email}});
    }
}

export default new TeacherRepository();