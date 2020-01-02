import moduleValidator from '../validators/module.validator';
import moduleHandler from '../handlers/module.handler';
import router from './config.router';

export default [

    router.post('/api/v1/modules/', moduleValidator, moduleHandler.store)

]
