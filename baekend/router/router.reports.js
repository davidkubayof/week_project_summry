import { Router } from "express";
import { authenticateToken } from "../middlwer/middlwer.token.js";
import { isRole } from "../middlwer/middlwer.role.js";
import { appendCSV, createReport, getReportById, getReportFilter } from "../controler/controler.reports.js";
import { upload } from "../middlwer/middlwer.upload.js";


const router = Router();

router.post('/', authenticateToken, isRole, upload.single("image"), createReport)
router.post('/csv',authenticateToken ,isRole,upload.single("csvFile"),appendCSV)
router.get('/',authenticateToken ,isRole,getReportFilter)
router.get('/:id', authenticateToken, isRole, getReportById)

export default router;