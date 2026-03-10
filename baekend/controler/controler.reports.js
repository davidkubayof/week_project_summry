export async function createReport(req, res) {

    try {

        const { category, urgency, message } = req.body

        if (!category || !urgency || !message) {
            return res.status(400).json({
                message: "category, urgency and message are required"
            })
        }

        const imagePath = req.file ? `/uploads/${req.file.originalname}` : null

        const report = {
            id: Date.now(),
            userId: req.user.id,
            category,
            urgency,
            message,
            imagePath,
            sourceType: "manual",
            createdAt: new Date()
        }

        return res.status(201).json({ report })

    } catch (err) {

        if (err.code === "LIMIT_FILE_SIZE") {
            return res.status(413).json({ message: "File too large" })
        }

        return res.status(500).json({ message: "Server error" })
    }
}