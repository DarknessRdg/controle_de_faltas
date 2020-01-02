import Teacher from '../models/Teacher';

class TeacherRepository {

    async create(data) {
        return await Teacher.create(data);
    }
    
    async getAll() {
        return await Teacher.findAll({});
    }
}

export default new TeacherRepository();