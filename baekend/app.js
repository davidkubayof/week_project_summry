import express from 'express'
import cors from 'cors'
import { config } from 'dotenv'

import routerAuth from './router/router.auth.js'
import routerReport from './router/router.reports.js'

config()

const app = express();
app.use(cors());
app.use(express.json());

app.use('/auth', routerAuth);
app.use('/reports', routerReport);

app.listen(process.env.PORT, () => {
    console.log(`server run http://localhost:${process.env.PORT}`)
})
