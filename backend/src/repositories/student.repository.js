import Frequency from '../models/Frequency';
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
            'sex', 
            'registration', 
            'phone', 
            'identity'
        ]
        return await Student.findAll({attributes: student, include: [
            {as: 'student_frequences', model: Frequency}
        ]});
    }

    async getStudent(id) {
        const student = [
            'student_id', 
            'name', 
            'email', 
            'registration', 
            'phone', 
            'identity',
        ]
        return await Student.findOne(
        {where: {student_id: id}, attributes: student, include:
        [ {as: 'student_frequences', model: Frequency} ]});
    }

    async findByIndentity(identity) {
        return await Student.findOne({where: { identity: identity }});
    }

    async delete(id) {
        return await Student.destroy({where: {student_id: id}});
    }

    async update(instance, data) {
        return await instance.update(data);
    }
}

export default new StudentRepository();