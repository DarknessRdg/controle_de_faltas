import teacherRepository from '../repositories/teacher.repository';

class TeacherHandler {

    async store(req, res) {
        try {
         
            const teacher = await teacherRepository.create(req.body);
            return res.status(201).json(teacher);

        } catch (error) {
            switch (error.errors) {
                case error.errors:
                    return res.status(401).json({error: error.errors[0].message });
            }
        }
    }
}

export default new TeacherHandler();