
import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import Db from './Db/index'
import { UserModel } from './Db/models'
import userRouter from './routes/user'
import { API_VERSION } from './service/Enums'

Db.init()

dotenv.config();

const app: Express = express();
// const port = process.env.PORT;
const port = 9999;

app.use(`${API_VERSION.V1}/user`, userRouter)



app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
