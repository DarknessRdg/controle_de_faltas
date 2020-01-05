import studentRepository from '../repositories/student.repository';
import hash from '../auth/hash.auth';

class StudentHandler {

    async store(req, res) {
        
        try {
            
            const passwordHashed = await hash.encrypt(req.body.password);
            req.body.password = passwordHashed;
            const { student_id } = await studentRepository.create(req.body);
            return res.status(201).json({student_id: student_id});

        } catch (error) {
            switch (error.errors) {
                case error.errors:
                    return res.status(401).json({error: error.errors[0].message });
            }
        }
    }

    async show(req, res) {

        try {
            
            const { id } = req.params;
            const student = await studentRepository.getStudent(id);
            return res.status(200).json(student);
            
        } catch (error) { 
            switch (error.errors) {
                case error.errors:
                    return res.status(401).json({error: error.errors[0].message });
            }
        }
    }

    async index(req, res) {

        try {
            
            if (!req.auth.data.is_supersu) { throw new Error('UNAUTHORIZED ACCESS'); }  

            const student = await studentRepository.getAll();
            return res.status(200).json(student);
            
        } catch (error) { 
            switch (error.message) {
                case 'UNAUTHORIZED ACCESS':
                    return res.status(401).json({ error: 'UNAUTHORIZED ACCESS' });
                case error.errors:
                    return res.status(401).json({error: error.errors[0].message });
            }
        }
    }
}

export default new StudentHandler();