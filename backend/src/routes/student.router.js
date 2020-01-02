import studentValidator from '../validators/student.validator';
import studentHandler from '../handlers/student.handler';
import router from './config.router';

export default [
    
    router.post('/api/v1/students/', studentValidator, studentHandler.store),
    
]


