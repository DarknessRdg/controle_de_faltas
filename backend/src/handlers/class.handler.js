import classRepository from '../repositories/class.repository';

class ClassHandler {

    async store(req, res) {

        try {
            
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