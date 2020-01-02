import authenticateValidator from '../validators/authenticate.validator';
import loginHandler from '../handlers/login.handler';
import router from './config.router';

export default [

    router.post('/api/v1/sessions/', authenticateValidator, loginHandler.login)

]
