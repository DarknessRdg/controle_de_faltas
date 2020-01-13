import Frequency from '../models/Frequency';
import Teacher from '../models/Teacher';
import Module from '../models/Module';
import Class from '../models/Class';

class TeacherRepository {

    async create(data) {
        return await Teacher.create(data);
    }
    
    async getAll() {
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

        return await Teacher.findAll({attributes: teacher});
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
        include: [{all: true, include: [{all: true}]}]
    });
    }

    async delete(id) {
        return await Teacher.destroy({where: {teacher_id: id}});
    }

    async findByEmail(email) {
        return await Teacher.findOne({where: {email: email}});
    }
}

export default new TeacherRepository();