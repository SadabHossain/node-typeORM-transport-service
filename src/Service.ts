import * as express from 'express';
import * as dotenv from 'dotenv';
import { Request, Response } from 'express';
import * as bodyParser from 'body-parser';
import { AppDataSource } from './data-source';

//env setup
dotenv.config();
AppDataSource.initialize().then(async () => {
    const port = process.env.PORT
    const api = process.env.NODE_ENV === 'development' ? '/transport/dev' : '/transport/api';

    // create and setup express app
    const app = express();
    app.use(bodyParser.json({ limit: '50kb' }));

    //register routes

    app.get("/", function (req: Request, res: Response) {
        console.log('welcome to transport service', port);
        return res.status(200).json({
            status: 'success',
            message: 'Welcome to Node.js, we are happyto see you and transport service is runing on port  ', port
        })
    })

}).catch((error) => console.log(error))