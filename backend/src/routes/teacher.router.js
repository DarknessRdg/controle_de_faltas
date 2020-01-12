import teacherValidator from '../validators/teacher.validator';
import teacherHandler from '../handlers/teacher.handler';
import authToken from '../auth/token.auth';
import router from './config.router';

export default [

    router.post('/teachers/', teacherValidator, teacherHandler.store),
    router.get('/teachers/:id/', authToken.checkToken, teacherHandler.show),
    router.get('/teachers/', teacherHandler.index)

]