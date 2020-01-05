import classValidator from '../validators/class.validator';
import classHandler from '../handlers/class.handler';
import authToken from '../auth/token.auth';
import router from './config.router';

export default [

    router.post('/class/:module_id/', classValidator, authToken.checkToken, classHandler.store),
    router.get('/class/:class_id/', authToken.checkToken, classHandler.show)

]