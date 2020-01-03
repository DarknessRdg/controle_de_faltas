import teacherRepository from '../repositories/teacher.repository';
import moduleRepository from '../repositories/module.repository';
import classRepository from '../repositories/class.repository';

class ClassHandler {

    async store(req, res) {

        try {
            
            const module_id = req.params['module_id'];

            const modulee = await moduleRepository.getModule(module_id);

            if (!modulee) { throw new Error("MODULE NOT FOUND"); }

            const teacher = await teacherRepository.getTeacher(req.auth.data.user_id);
            
            req.body['module_id'] = modulee.module_id;
            req.body['teacher_id'] = teacher.teacher_id;
            
            const classs = await classRepository.create(req.body);

            return res.status(201).json(classs);

        } catch (error) {
            switch (error.message) {
                case "MODULE NOT FOUND": 
                    return res.status(404).json({error: 'MODULE NOT FOUND' });
                case error.errors:
                    return res.status(401).json({error: error.errors[0].message });
            }
        }
    }
}

export default new ClassHandler();