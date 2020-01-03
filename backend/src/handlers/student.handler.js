import studentRepository from '../repositories/student.repository';
import hash from '../auth/hash.auth';

class StudentHandler {

    async store(req, res) {
        
        try {
            
            const passwordHashed = await hash.encrypt(req.body.password);
            req.body.password = passwordHashed;
            await studentRepository.create(req.body);
            return res.status(201);

        } catch (error) {
            switch (error.errors) {
                case error.errors:
                    return res.status(401).json({error: error.errors[0].message });
            }
        }
    }
}

export default new StudentHandler();