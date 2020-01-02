import teacherValidator from '../validators/teacher.validator';
import teacherHandler from '../handlers/teacher.handler';
import router from './config.router';

export default [
        
    router.get('api/v1/teachers/', teacherValidator, teacherHandler.store)

]