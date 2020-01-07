import moduleValidator from '../validators/module.validator';
import moduleHandler from '../handlers/module.handler';
import authToken from '../auth/token.auth';
import router from './config.router';

export default [

    router.post('/modules/', moduleValidator, authToken.checkToken, moduleHandler.store),
    router.get('/modules/:id/', authToken.checkToken, moduleHandler.show)

]