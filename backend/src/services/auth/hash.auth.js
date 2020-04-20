import bcrypt from 'bcryptjs';

class HashAuth {

   async encrypt(value) {
        const salt = await bcrypt.genSalt(10);
        return await bcrypt.hash(value, salt);
    }

    async compare(value, valueHash) {
        return await bcrypt.compare(value, valueHash);
    }
}

export default new HashAuth();