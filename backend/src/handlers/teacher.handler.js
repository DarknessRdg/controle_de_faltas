import teacherRepository from '../repositories/teacher.repository';
import hash from '../auth/hash.auth';

class TeacherHandler {

    async store(req, res) {
        
        try {
            
            const passwordHashed = await hash.encrypt(req.body.password);
            req.body.password = passwordHashed;
            const { teacher_id } = await teacherRepository.create(req.body);
            return res.status(201).json({teacher_id: teacher_id});

        } catch (error) { 
            switch (error.errors) {
                case error.errors:
                    return res.status(400).json({error: error.errors[0].message });
            }
        }
    }

    async show(req, res) {

        try {
            
            const { id } = req.params;
            const teacher = await teacherRepository.getTeacher(id);
            return res.status(200).json(teacher);
            
        } catch (error) {
            switch (error.errors) {
                case error.errors:
                    return res.status(400).json({error: error.errors[0].message });
            }
        }
    }

    async index(req, res) {

        try {

            const teachers = await teacherRepository.getAll();
            return res.status(200).json(teachers);
            
        } catch (error) { 
            switch (error.message) {
                case error.errors:
                    return res.status(400).json({error: error.errors[0].message });
            }
        }
    }
}

export default new TeacherHandler();