import classValidator from '../app/validators/class.validator';
import classHandler from '../app/handlers/class.handler';
import authToken from '../services/auth/token.auth';
import router from './config.router';

export default [

    router.post('/:teacher_id/class/:module_id/', classValidator, authToken.checkToken, classHandler.store),
    router.get('/class/:class_id/', authToken.checkToken, classHandler.show),
    router.get('/class/', authToken.checkToken, classHandler.index),
    router.delete('/class/:id/', authToken.checkToken, classHandler.destroy),
    router.put('/class/:id/', authToken.checkToken, classHandler.update)

]