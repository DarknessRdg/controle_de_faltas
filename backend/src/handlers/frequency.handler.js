import frequencyRepository from '../repositories/frequency.repository';
import studentRepository from '../repositories/student.repository';
import classRepository from '../repositories/class.repository';

class FrequencyHandler {

    async store(req, res) {

        try {
            
            const { student_id } = req.params;
            const { class_id } = req.params;
            const { present } = req.body;
          
            const student = await studentRepository.getStudent(student_id);
            const classs = await classRepository.getClass(class_id);
            
            if (!student) { throw new Error('STUDENT NOT FOUND'); }
            if (!classs) { throw new Error('CLASS NOT FOUND'); }

            const { frequency_id } = await frequencyRepository.create(
            { present, student_id, class_id });

            return res.status(201).json({frequency_id: frequency_id});
            
        } catch (error) {
            switch (error.message) {
                case 'STUDENT NOT FOUND': 
                    return res.status(404).json({error: 'STUDENT NOT FOUND' });
                case 'CLASS NOT FOUND': 
                    return res.status(404).json({error: 'CLASS NOT FOUND' });
                case error.errors:
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
}

export default new FrequencyHandler();