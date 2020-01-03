import Student from '../models/Student';

class StudentRepository {

    async create(data) {
        return await Student.create(data);
    }

    async getAll() {
        return await Student.findAll({});
    }

    async getStudent(id) {
        return await Student.findOne({where: {student_id: id}});
    }

    async findByIndentity(identity) {
        return await Student.findOne({where: { identity: identity }});
    }
}

export default new StudentRepository();