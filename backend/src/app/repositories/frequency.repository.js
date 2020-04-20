import Frequency from '../models/Frequency';
import Student from '../models/Student';
import Class from '../models/Class';

class FrequencyRepository {

    async create(data) {
        return await Frequency.create(data);
    }

    async getAll(id) {
        const frequency = [
            "frequency_id",
            "class_id",
            "present",
        ]

        return await Frequency.findAll({ attributes: frequency, 
        where: {student_id: id}});
    }

    async getFrequency(id) {
        const student = [
            'student_id', 
            'name', 
            'email', 
            'registration', 
            'phone', 
            'identity',
            'updated_at',
            'created_at'
        ]
        return await Frequency.findOne({where: {frequency_id: id}, include: [
            {as: 'frequency_student', model: Student, attributes: student},
            {as: 'frequency_class', model: Class}
        ]});
    }

    async update(instance, data) {
        return await instance.update(data);
    }
}

export default new FrequencyRepository();