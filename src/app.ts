import * as dotenv from 'dotenv';
import * as cors from 'cors';
import * as nocache from 'nocache';
import * as bodyParser from 'body-parser';
import * as express from 'express';
import {NextFunction} from 'express';
import {isNil, prop} from './ramda-functions';

dotenv.config();
import env from './app-env';
env.init(process.env.TARGET_ENV);

// routes
import {index} from './routes/index';


export const app = express();

app.set('port', process.env.PORT || 3000);
app.use(nocache());
app.use(cors({allowedHeaders: ['Content-Type', 'Authorization', 'Content-Encoding']}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', index);

const errorHandler = (err: any, req: express.Request, res: express.Response, next: NextFunction) => {
  if (res.headersSent) {
    return next(err);
  }

  const statusCode = prop('statusCode', err);
  res.status(!isNil(statusCode) ? statusCode : 500);
  res.json({ error: err });
};

app.use(errorHandler);
