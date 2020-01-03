import moduleRepository from '../repositories/module.repository';

class ModuleHandler {

    async store(req, res) {

        try {
         
            await moduleRepository.create(req.body);
            return res.status(201);

        } catch (error) {
            switch (error.errors) {
                case error.errors:
                    return res.status(401).json({error: error.errors[0].message });
            }
        }
    }
}

export default new ModuleHandler();