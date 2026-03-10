import JWT from 'jsonwebtoken'
import { readAll } from "../storage/StoreCsv.js";

export async function verifyUserC(req, res) {
    try {
        const { agentCode, password } = req.body;
        if (!agentCode || !password) return res.status(400).json({ err: "missing filed agentCode or password" });

        const dataUsers = await readAll('agentData.csv');
        const userIndex = dataUsers.findIndex((element) => element.agentCode === agentCode && element.password === password);

        if (userIndex === -1) return res.status(401).json({ err: "Worng pass or agentCode" });

        const { id, fullName, role } = dataUsers[userIndex]
        const token = JWT.sign(dataUsers[userIndex], process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });

        res.status(200).json({ token, user: { id, agentCode, fullName, role } })
    } catch (error) {
        console.error(error);
        res.status(500).json({ err: "Server Error " });
    }
}
export async function getMe(req, res) {
    const { id, agentCode, fullName, role } = req.user
    res.json({ user: { id, agentCode, fullName, role } })
}
