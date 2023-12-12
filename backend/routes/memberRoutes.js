import express from 'express';
const router= express.Router();
import { createMember, getMembers,getOneMember,updateMember,deleteMember } from '../controllers/memberController.js';
import checkAutheticate from '../middleware/authRouteMiddleware.js';

router.post('/',checkAutheticate, createMember)
router.get('/', checkAutheticate, getMembers) 
router.get('/:id', checkAutheticate, getOneMember) 
router.put('/:id', checkAutheticate, updateMember) 
router.delete('/:id', checkAutheticate, deleteMember) 



export default router;