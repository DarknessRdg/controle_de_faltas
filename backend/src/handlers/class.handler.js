import moduleRepository from '../repositories/module.repository';
import classRepository from '../repositories/class.repository';

class ClassHandler {
    
    async store(req, res) {

        try {
            
            const { date, descriptions } = req.body;
            const { module_id } = req.params;
     
            const modulee = await moduleRepository.getModule(module_id);

            if (!req.auth.data.is_supersu) { throw new Error('UNAUTHORIZED ACCESS'); }  
            
            if (!modulee) { throw new Error("MODULE NOT FOUND"); }
            
            const teacher_id = req.auth.data.id;
            
            const { class_id } = await classRepository.create(
            {date, descriptions, module_id, teacher_id});

            return res.status(201).json({class_id: class_id});

        } catch (error) {
            switch (error.message) {
                case 'UNAUTHORIZED ACCESS': 
                    return res.status(404).json({error: 'UNAUTHORIZED ACCESS' });
                case "MODULE NOT FOUND": 
                    return res.status(404).json({error: 'MODULE NOT FOUND' });
                case error.errors:
                    return res.status(401).json({error: error.errors[0].message });
            }
        }
    }

    async show(req, res) {

        try {
            
            const { class_id } = req.params;
            
            const classs = await classRepository.getClass(class_id);

            if (!classs) { throw new Error('CLASS NOT FOUND'); }

            return res.status(200).json(classs);
            
        } catch (error) {
            switch (error.message) {
                case 'CLASS NOT FOUND':
                    return res.status(401).json({error: 'CLASS NOT FOUND' });
                case error.errors:
                    return res.status(401).json({error: error.errors[0].message });
            }
        }
    }

    async index(req, res) {

        try {

            const clas = await classRepository.getAll();
            return res.status(200).json(clas);
            
        } catch (error) { 
            switch (error.message) {
                case error.errors:
                    return res.status(401).json({error: error.errors[0].message });
            }
        }
    }
}

export default new ClassHandler();