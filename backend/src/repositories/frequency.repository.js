import Frequency from '../models/Frequency';

class FrequencyRepository {

    async create(data) {
        return await Frequency.create(data);
    }

    async getAll() {
        return await Frequency.findAll({});
    }

    async getFrequency(id) {
        return await Frequency.findOne({where: {frequency_id: id}});
    }
}

export default new FrequencyRepository();