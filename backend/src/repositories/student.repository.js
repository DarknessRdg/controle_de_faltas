import Student from '../models/Student';

class StudentRepository {

    async create(data) {
        return await Student.create(data);
    }

    async getAll() {
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
        return await Student.findAll({attributes: student});
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
        return await Student.findOne({where: {student_id: id}, 
            attributes: student, include: [ {all: true} ]});
    }

    async findByIndentity(identity) {
        return await Student.findOne({where: { identity: identity }});
    }
}

export default new StudentRepository();