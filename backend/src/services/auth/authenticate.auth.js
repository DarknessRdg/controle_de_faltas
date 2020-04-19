import teacherRepository from '../../app/repositories/teacher.repository';
import studentRepository from '../../app/repositories/student.repository';
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
                exp: Math.floor(Date.now() / 1000) + 54200,
                info: 'api',
                data: {
                    id: student.student_id,
                    is_supersu: student.is_supersu
                }
            };

            const id = student.student_id;
            const token = await Token.generate(JWTData);

            return { id, token };
        }

        if (teacher) {

            const passwordOk = await hash.compare(data.password, teacher.password);

            if (!passwordOk) { throw new Error('ERR_INVALID_PASSWORD'); }
            
            const JWTData = {
                exp: Math.floor(Date.now() / 1000) + 54200,
                info: 'api',
                data: {
                    id: teacher.teacher_id,
                    is_supersu: teacher.is_supersu
                }
            };

            const id = teacher.teacher_id;
            const token = await Token.generate(JWTData);

            return { id, token };
        }
    }
}

export default new AuthenticateAuth();