import studentValidator from '../app/validators/student.validator';
import studentHandler from '../app/handlers/student.handler';
import authToken from '../services/auth/token.auth';
import router from './config.router';

export default [

    router.post('/students/', studentValidator, studentHandler.store),
    router.get('/students/:id/', authToken.checkToken, studentHandler.show),
    router.get('/students/', authToken.checkToken, studentHandler.index),
    router.delete('/students/:id/', authToken.checkToken, studentHandler.destroy),
    router.put('/students/:id/', authToken.checkToken, studentHandler.update)
]
