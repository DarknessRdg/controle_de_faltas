import Frequency from '../models/Frequency';
import Teacher from '../models/Teacher';
import Module from '../models/Module';
import Class from '../models/Class';

class TeacherRepository {

    async create(data) {
        return await Teacher.create(data);
    }
    
    async getAll() {
        return await Teacher.findAll({include: 
        [{as: 'teacher_class', model: Class}]});
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
    
       return await Teacher.findOne({where: {teacher_id: id}, attributes: teacher,
        include: [{ as: 'teacher_class', model: Class }]
    });
    }

    async findByEmail(email) {
        return await Teacher.findOne({where: {email: email}});
    }
}

export default new TeacherRepository();