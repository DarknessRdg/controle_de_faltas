import teacherRepository from '../../app/repositories/teacher.repository';
import studentRepository from '../../app/repositories/student.repository';
import Token from './token.auth';
import hash from './hash.auth';

class AuthenticateAuth {

    async setupLogin(id, data, currentModel, jwtData) {
        const passwordOk = await hash.compare(data.password, currentModel.password);

        if (!passwordOk) { throw new Error('ERR_INVALID_PASSWORD'); }

        const token = await Token.generate(jwtData);

        return { id, token };
    }

    async login(data) {
        const student = await studentRepository.findByIndentity(data.identity || null);
        const teacher = await teacherRepository.findByEmail(data.email || null);

        if (!student && !teacher) { throw new Error('ERR_USER_NOT_FOUND'); }
        if (!teacher && !student) { throw new Error('ERR_USER_NOT_FOUND'); }

        if (student) {

            const JWTData = {
                exp: Math.floor(Date.now() / 1000) + 54200,
                info: 'api',
                data: {
                    id: student.student_id,
                    is_supersu: student.is_supersu
                }
            };
            
            return await this.setupLogin(student.student_id, data, student, JWTData);
        }

        if (teacher) {
 
            const JWTData = {
                exp: Math.floor(Date.now() / 1000) + 54200,
                info: 'api',
                data: {
                    id: teacher.teacher_id,
                    is_supersu: teacher.is_supersu
                }
            };

            return await this.setupLogin(teacher.teacher_id, data, teacher, JWTData);
        }
    }
}

export default new AuthenticateAuth();