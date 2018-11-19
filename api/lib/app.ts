import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as mongoose from 'mongoose';
import * as morgan from 'morgan';
import { Routes } from './routes/crmRoutes';

class App {

    public app: express.Application;
    public routePrv: Routes = new Routes();
    public mongoUrl: string = 'mongodb://localhost:27017/typescript-app';

    constructor() {
        this.app = express();
        this.config();     
        this.routePrv.routes(this.app);  
        this.mongoSetup();
    }
    
    private config(): void{
        this.app.use(morgan('dev'));
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));

        this.app.use(express.static('app/build'));
    }

    private mongoSetup(): void{
      const params = { useNewUrlParser: true, useCreateIndex: true };

      mongoose.Promise = global.Promise;
      mongoose.connect(this.mongoUrl, params);    
    }

}

export default new App().app;