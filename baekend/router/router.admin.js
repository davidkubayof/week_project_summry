import { Router } from "express";
import { authenticateToken } from "../middlwer/middlwer.token.js";
import { isAdmin } from '../middlwer/middlwer.admin.js'
import { craeteUserC, getUsersC } from "../controler/controler.admin.js";

const router = Router();

router.post('/users', authenticateToken, isAdmin, craeteUserC)
router.get('/users', authenticateToken, isAdmin, getUsersC)

export default router;