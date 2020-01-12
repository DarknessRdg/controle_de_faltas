import moduleRepository from '../repositories/module.repository';

class ModuleHandler {

    async store(req, res) {

        try {
            
            const { module_id } = await moduleRepository.create(req.body);
            return res.status(201).json({module_id: module_id});

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
            const modulee = await moduleRepository.getModule(id);

            if (!modulee) { throw new Error('MODULE NOT FOUND'); }

            return res.status(200).json(modulee);
            
        } catch (error) { 
            switch (error.message) {
                case 'MODULE NOT FOUND':
                    return res.status(401).json({ error: 'MODULE NOT FOUND' });
                case error.errors:
                    return res.status(401).json({error: error.errors[0].message });
            }
        }
    }

    async index(req, res) {

        try {

            const modules = await moduleRepository.getAll();
            return res.status(200).json(modules);
            
        } catch (error) { 
            switch (error.message) {
                case error.errors:
                    return res.status(401).json({error: error.errors[0].message });
            }
        }
    }

    async destroy(req, res) {

        try {

            const { id } = req.params;

            const modulee = await moduleRepository.getModule(id);

            if (!modulee) { throw new Error('MODULE NOT FOUND'); }

            await moduleRepository.delete(id);

            return res.status(200).json();
            
        } catch (error) { 
            switch (error.message) {
                case error.errors:
                    return res.status(401).json({error: error.errors[0].message });
            }
        }
    }

    async update(req, res) {

        try {

            const { id } = req.params;

            const modulee = await moduleRepository.getModule(id);

            if (!modulee) { throw new Error('MODULE NOT FOUND'); }
           
            const { module_id } = await moduleRepository.update(modulee, req.body);

            return res.status(200).json({module_id: module_id});
            
        } catch (error) { 
            switch (error.message) {
                case error.errors:
                    return res.status(401).json({error: error.errors[0].message });
            }
        }
    }
}

export default new ModuleHandler();