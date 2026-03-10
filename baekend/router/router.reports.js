import { Router } from "express";
import { authenticateToken } from "../middlwer/middlwer.token.js";
import { isRole } from "../middlwer/middlwer.role.js";
import { createReport } from "../controler/controler.reports.js";
import { upload } from "../middlwer/middlwer.upload.js";


const router = Router();

router.post('/', authenticateToken, isRole ,upload.single("img") , createReport )
// router.post('/csv',authenticateToken ,isRole,(req,res)=>{})
// router.get('/',authenticateToken ,isRole,(req,res)=>{res.status(200).json({reports: [report]})})

export default router;