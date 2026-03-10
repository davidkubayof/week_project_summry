import multer from "multer"

export function uploading() {
    const storage = multer.memoryStorage()
    const fileFilter = (req, file, cb) => {
        const types = ["image/png", "image/jpg", "image/jpeg"]
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
            fileSize: 1024 * 1024 * 10 // 10MB
        }
    })
    return upload
}

export const upload = uploading()