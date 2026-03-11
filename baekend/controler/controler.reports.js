
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
        console.log(report);
        return res.status(201).json({ report })

    } catch (err) {

        if (err.code === "LIMIT_FILE_SIZE") {
            return res.status(413).json({ message: "File too large" })
        }

        return res.status(500).json({ message: "Server error" })
    }
}
export async function appendCSV(req, res) {
    if (req.file.mimetype !== "text/csv") {
        return res.status(400).json("csv is requrid")
    } else {
        return res.json(req.file.mimetype === "text/csv")
    }
}
export async function getReportFilter(req, res) {

    const { agentCode, category, urgency } = req.query;
    let filteredReports = reports;

    // אם המשתמש Agent → מקבל רק את הדיווחים שלו
    if (req.user.role === "agent") {
        filteredReports = filteredReports.filter(
            report => report.agentCode === req.user.agentCode
        );
    }

    // סינון לפי query params
    if (agentCode) {
        filteredReports = filteredReports.filter(
            report => report.agentCode === agentCode
        );
    }

    if (category) {
        filteredReports = filteredReports.filter(
            report => report.category === category
        );
    }

    if (urgency) {
        filteredReports = filteredReports.filter(
            report => report.urgency === urgency
        );
    }

    res.status(200).json({
        reports: filteredReports
    });

}
export async function getReportById(req, res) {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({
                message: "id is required"
            })
        }
        if (req.user.id !== id) {
            return res.status(403).json("not allowad")
        }

        return res.status(200).json({ report })

    } catch (err) {
        return res.status(500).json({ message: "Server error" })
    }
}