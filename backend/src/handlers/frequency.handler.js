import frequencyRepository from '../repositories/frequency.repository';
import classRepository from '../repositories/class.repository';
import databaseConfig from '../database/config/config';
import Sequelize from 'sequelize';


class FrequencyHandler {

    async store(req, res) {

        try {
            
            const { class_id } = req.params;
          
            const classs = await classRepository.getClass(class_id);
            
            if (!classs) { throw new Error('CLASS NOT FOUND'); }

            const sequelize = new Sequelize(databaseConfig);
            const transaction = await sequelize.transaction();

            req.body['frequencyList'] = [];

            try {
                
                await Promise.all(

                    req.body.map(async data => {
                
                        const { frequency_id } = await frequencyRepository.create({
                            class_id: class_id, 
                            student_id: data.student_id,
                            present: data.present},
                            { transaction: transaction });
                        
                            req.body.frequencyList.push({frequency_id: frequency_id});
                        }
                    )
                );
                
                await transaction.commit();
                
                return res.status(201).json(req.body.frequencyList);

            } catch (error) {
                
                if (transaction) await transaction.rollback();
            }

        } catch (error) {
            switch (error.message) {
                case 'STUDENT NOT FOUND': 
                    return res.status(404).json({error: 'STUDENT NOT FOUND' });
                case 'CLASS NOT FOUND': 
                    return res.status(404).json({error: 'CLASS NOT FOUND' });
                case error.message:
                    return res.status(400).json({error: error.errors[0].message });
            }
        }
    }

    async show(req, res) {

        try {
            
            const { student_id } = req.params;

            const frequency = await frequencyRepository.getAll(student_id);

            if (!frequency) { throw new Error('FREQUENCY NOT FOUND'); }

            return res.status(200).json(frequency);
            
        } catch (error) { 
            switch (error.message) {
                case 'FREQUENCY NOT FOUND':
                    return res.status(401).json({error: 'FREQUENCY NOT FOUND' });
                case error.errors:
                    return res.status(400).json({error: error.errors[0].message });
            }
        }
    }

    async update(req, res) {

        try {

            const { id } = req.params;

            const frequency = await frequencyRepository.getFrequency(id);

            if (!frequency) { throw new Error('FREQUENCY NOT FOUND'); }
           
            const { frequency_id } = await frequencyRepository.update(frequency, req.body);

            return res.status(200).json({frequency_id: frequency_id});
            
        } catch (error) { 
            switch (error.message) {
                case 'FREQUENCY NOT FOUND':
                    return res.status(404).json({error: 'FREQUENCY NOT FOUND' });
                case error.errors:
                    return res.status(400).json({error: error.errors[0].message });
            }
        }
    }
}

export default new FrequencyHandler();