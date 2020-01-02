import teacherRepository from '../repositories/teacher.repository';
import studentRepository from '../repositories/student.repository';
import Token from './token.auth';
import hash from './hash.auth';


class AuthenticateAuth {

    async login(data) {
        const student =  await studentRepository.findByIndentity(data.identity);
        const teacher = await teacherRepository.findByEmail(data.email);
        
        
        
    }

}