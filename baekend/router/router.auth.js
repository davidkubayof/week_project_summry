import { Router } from "express";
import { getMe, verifyUserC } from "../controler/controler.user.js";
import { authenticateToken } from "../middlwer/middlwer.token.js";

const router = Router();

router.post('/login', verifyUserC)
router.get('/me', authenticateToken , getMe)

export default router;