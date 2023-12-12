import express from 'express';
const router = express.Router();
import { register, profile, confirm, authenticate, forgotPass, checkToken, newPass } from '../controllers/trainerController.js';
import checkAutheticate from '../middleware/authRouteMiddleware.js';

//público
router.post('/', register)
router.get('/confirm/:token', confirm)
router.post('/login', authenticate)
router.post('/forgot-pass', forgotPass)
router.get('/forgot-pass/:token', checkToken)
router.post('/forgot-pass/:token', newPass)


//privado
router.get('/profile',checkAutheticate, profile)



export default router;