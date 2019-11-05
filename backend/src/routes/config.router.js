import bodyParser from 'body-parser';
import { Router } from 'express';

const router = Router();

router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());

export default router;

