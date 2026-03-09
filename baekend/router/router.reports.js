import { Router } from "express";
import { authenticateToken } from "../middlwer/middlwer.token.js";
import { isRole } from "../middlwer/middlwer.role.js";

import multer from 'multer';

const router = Router();
const storage = multer.memoryStorage();
const fileFilter = (req, file, cb) => {
    const arr = ["image/png", "image/jpg", "image/jpeg"]
    if (arr.includes(file.mimetype)) {
        cb(null, true)
    } else {
        cb(null, false)
    }
}

const upload = multer({ storage, fileFilter })



router.post('/', authenticateToken, isRole, upload.single("img"), (req, res) => {
    res.json(req.file)

})
// router.post('/csv',authenticateToken ,isRole,(req,res)=>{})
// router.get('/',authenticateToken ,isRole,(req,res)=>{ 
//     res.status(200).json({reports: [report]})})

export default router;