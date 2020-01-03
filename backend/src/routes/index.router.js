import authenticateValidator from '../validators/authenticate.validator';
import frequencyValidator from '../validators/frequency.validator';
import teacherValidator from '../validators/teacher.validator';
import studentValidator from '../validators/student.validator';
import moduleValidator from '../validators/module.validator';
import frequencyHandler from '../handlers/frequency.handler';
import classValidator from '../validators/class.validator';
import teacherHandler from '../handlers/teacher.handler';
import studentHandler from '../handlers/student.handler';
import moduleHandler from '../handlers/module.handler';
import classHandler from '../handlers/class.handler';
import loginHandler from '../handlers/login.handler';
import authToken from '../auth/token.auth';
import { Router } from 'express';

const router = new Router();

router.post('/sessions/', authenticateValidator, loginHandler.login)
router.post('/teachers/', teacherValidator, teacherHandler.store)
router.post('/students/', studentValidator, studentHandler.store)

/* Endpoints with auth */
router.use(authToken.checkToken);

router.post('/modules/', moduleValidator, moduleHandler.store)
router.post('/class/:module_id/', classValidator, classHandler.store)
router.post('/:class_id/frequency/:student_id/', frequencyValidator, frequencyHandler.store)

export default router;