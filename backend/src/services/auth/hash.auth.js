import bcrypt from 'bcryptjs';

class HashAuth {

   async encrypt(value) {
        const salt = await bcrypt.genSalt(10);
        return bcrypt.hash(value, salt);
    }

    compare(value, valueHash) {
        return bcrypt.compare(value, valueHash);
    }
}

export default new HashAuth();