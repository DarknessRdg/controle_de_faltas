import frequencyValidator from '../app/validators/frequency.validator';
import frequencyHandler from '../app/handlers/frequency.handler';
import authToken from '../services/auth/token.auth';
import router from './config.router';

export default [

    router.post('/frequency/:class_id/', authToken.checkToken, frequencyHandler.store),
    router.get('/frequency/:student_id/', authToken.checkToken, frequencyHandler.show),
    router.put('/frequency/:id/', authToken.checkToken, frequencyHandler.update)
    
]
