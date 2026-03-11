import { readAll } from "../storage/StoreCsv.js";

export async function craeteUserC(req, res) {
    try {
        const { agentCode, fullName, role, password } = req.body
        if (!agentCode || !fullName || !role || !password) {
            return res.status(400).json({
                message: "agentCode, fullName and role and password are required"
            })
        }
        const dataUsers = await readAll('agentData.csv');
        const userDB = dataUsers.find(element => element.agentCode === agentCode);
        
        if (typeof userDB !== 'undefined') {
            return res.status(409).json({ massage: "User is alrday in db" })
        }

        const user = {
            id: Date.now(),
            agentCode,
            fullName,
            role,
            createdAt: new Date()
        }
        return res.status(201).json({ user })

    } catch (err) {
        return res.status(500).json({ message: "Server error" })
    }
}
export async function getUsersC(req, res) {
    try {
        const dataUsers = await readAll('agentData.csv');
        res.status(200).json({ users: dataUsers });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}