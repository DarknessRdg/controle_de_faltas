import authenticateValidator from '../app/validators/authenticate.validator';
import loginHandler from '../app/handlers/login.handler';
import router from './config.router';

export default [

    router.post('/sessions/', authenticateValidator, loginHandler.login)

]