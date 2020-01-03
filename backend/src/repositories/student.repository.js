import Frequency from '../models/Frequency';
import Student from '../models/Student';
import Class from '../models/Class';

class StudentRepository {

    async create(data) {
        return await Student.create(data);
    }

    async getAll() {
        return await Student.findAll({});
    }

    async getStudent(id) {
        const student = [
            'student_id', 
            'name', 
            'email', 
            'registration', 
            'phone', 
            'identity',
            'updatedAt',
            'createdAt'
        ]
        return await Student.findOne({where: {student_id: id}, attributes: student, include: [
            {as: 'frequences', model: Frequency, include: [{as: 'classes', model: Class}]}
        ]});
    }

    async findByIndentity(identity) {
        return await Student.findOne({where: { identity: identity }});
    }
}

export default new StudentRepository();