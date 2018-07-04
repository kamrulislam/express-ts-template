import * as dotenv from 'dotenv';
dotenv.config();
import env from './app-env';
env.init(process.env.TARGET_ENV);

// import * as version from './version.json';
// import R = require('ramda');
// const { prop } = R;
// console.log('version: %j', version);
// export const apiVersion: string = prop('version', version);

import * as express from 'express';
// Routes
import {index} from './routes/index';

export const app = express();

app.set('port', process.env.PORT || 3000);
app.use('/', index);
