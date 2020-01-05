import teacherRepository from '../repositories/teacher.repository';
import studentRepository from '../repositories/student.repository';
import Token from './token.auth';
import hash from './hash.auth';


class AuthenticateAuth {

    async login(data) {
        const student =  await studentRepository.findByIndentity(data.identity || null);
        const teacher = await teacherRepository.findByEmail(data.email || null);
        
        if (!student && !teacher) { throw new Error('ERR_USER_NOT_FOUND'); }
        if (!teacher && !student) { throw new Error('ERR_USER_NOT_FOUND'); }

        if (student) {
            const passwordOk = await hash.compare(data.password, student.password);

            if (!passwordOk) { throw new Error('ERR_INVALID_PASSWORD'); }

            const JWTData = {
                exp: Math.floor(Date.now() / 1000) + 7200,
                info: 'api',
                data: {
                  is_supersu: student.is_supersu
                }
            };

            const token = await Token.generate(JWTData);

            return { token };
        }

        if (teacher) {

            const passwordOk = await hash.compare(data.password, teacher.password);

            if (!passwordOk) { throw new Error('ERR_INVALID_PASSWORD'); }

            const JWTData = {
                exp: Math.floor(Date.now() / 1000) + 7200,
                info: 'api',
                data: {
                  is_supersu: teacher.is_supersu
                }
            };

            const token = await Token.generate(JWTData);

            return { token };
        }
    }
}

export default new AuthenticateAuth();