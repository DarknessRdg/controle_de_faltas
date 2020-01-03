import teacherRepository from '../repositories/teacher.repository';
import moduleRepository from '../repositories/module.repository';
import classRepository from '../repositories/class.repository';

class ClassHandler {

    async store(req, res) {

        try {
            
            const teacher_id = await teacherRepository.getTeacher(req.auth.user_id);

            req.body['module_id'] = req.params['module_id'];
            req.body['teacher_id'] = teacher_id;
            
            const classs = await classRepository.create(req.body);
            return res.status(201).json(classs);

        } catch (error) {
            switch (error.errors) {
                case error.errors:
                    return res.status(401).json({error: error.errors[0].message });
            }
        }
    }
}

export default new ClassHandler();