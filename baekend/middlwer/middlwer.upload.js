import multer from "multer"

export function uploading() {
    const storage = multer.diskStorage({
    destination: "data/uploads/",
    filename: (req, file, cb) => {
        const uniqueName = Date.now() + "-" + file.originalname;
        cb(null, uniqueName);
    }
})
    const fileFilter = (req, file, cb) => {
        const types = ["image/png", "image/jpg", "image/jpeg","text/csv"]
        
        if (types.includes(file.mimetype)) {
            cb(null, true)
        } else {
            cb(null,false)
        }
    }

    const upload = multer({
        storage,
        fileFilter,
        limits: {
            fileSize: 1024 * 10 // 10MB
        }
    })
    
    return upload
}

export const upload = uploading()
