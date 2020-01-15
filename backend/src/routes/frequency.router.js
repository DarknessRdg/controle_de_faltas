import frequencyValidator from '../validators/frequency.validator';
import frequencyHandler from '../handlers/frequency.handler';
import authToken from '../auth/token.auth';
import router from './config.router';

export default [

    router.post('/frequency/:class_id/', authToken.checkToken, frequencyHandler.store),
    router.get('/frequency/:student_id/', authToken.checkToken, frequencyHandler.show),
    router.put('/frequency/:id/', authToken.checkToken, frequencyHandler.update)
    
]
