import Teacher from '../models/Teacher';

class TeacherRepository {

    async create(data) {
        return await Teacher.create(data);
    }
    
    async getAll() {
        return await Teacher.findAll({});
    }

    async getTeacher(id) {
        const teacher = [
            'teacher_id','name','sex','email','registration','is_supersu'
        ]
        return await Teacher.findOne({where: {teacher_id: id}, attributes: teacher});
    }

    async findByEmail(email) {
        return await Teacher.findOne({where: {email: email}});
    }
}

export default new TeacherRepository();