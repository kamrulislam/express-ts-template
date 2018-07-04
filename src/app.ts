import * as pkg from '../package.json';
export const apiVersion: string = pkg.version;

import * as express from 'express';
// Routes
import {index} from './routes/index';

export const app = express();

app.set('port', process.env.PORT || 3000);
app.use('/', index);
