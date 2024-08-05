import { Router } from 'express';
import { userController } from '../controllers/userController';

const router = Router();

router.use('/', userController.getAll);
export default router;