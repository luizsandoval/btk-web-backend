import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import { connect } from 'mongoose';

import { Routes } from '../routes/routes';
class App {
    public app: express.Application;
    public routes: Routes = new Routes();
    constructor() {
        this.app = express();
        this.config();
        this.routes.routes(this.app);
    }

    private config(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(cors());
        connect(
            'mongodb://127.0.0.1:27017/btk',
            { useNewUrlParser: true }
        )
            .then(() => {
                console.log('Connected to MongoDB');
            })
            .catch(console.error);
    }
}

export default new App().app;
