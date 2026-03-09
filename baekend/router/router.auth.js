import { Router } from "express";
import { verifyUserC } from "../controler/controler.user.js";

const router = Router();

router.post('/login', verifyUserC)

export default router;