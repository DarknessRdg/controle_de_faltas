import teacherRepository from '../repositories/teacher.repository';

class TeacherHandler {

    async store(req, res) {
        const teacher = await teacherRepository.create(req.body);
        return res.status(201).json(teacher);
    }
}

export default new TeacherHandler();