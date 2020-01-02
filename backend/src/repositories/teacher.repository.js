import Teacher from '../models/Teacher';

class TeacherRepository {

    async create(data) {
        const teacher = new Teacher(data);
        return await teacher.save();
    }
    
    async all() {
        return await Teacher.findAll({});
    }
}

export default new TeacherRepository();