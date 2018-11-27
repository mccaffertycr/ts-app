import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as mongoose from 'mongoose';
import * as morgan from 'morgan';
import { Routes } from './routes/crmRoutes';

class App {

  public app: express.Application;
  public routePrv: Routes = new Routes();

  constructor() {
    this.app = express();
    this.config();     
    this.routePrv.routes(this.app);  
    this.mongoSetup();
  }
  
  private config(): void{
    this.app.use(morgan('dev'));
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(express.static('app/build'));
  }

  private mongoUrl: string = process.env.MONGODB_URL || 'mongodb://localhost:27017/typescript-app';

  private mongoSetup(): void{
    const options = { useNewUrlParser: true, useCreateIndex: true };
    mongoose.Promise = global.Promise;
    mongoose.connect(this.mongoUrl, options);    
  }

}

export default new App().app;