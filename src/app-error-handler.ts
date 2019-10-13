import {NextFunction} from 'express';
import * as express from 'express';
import {getErrorStatusCode} from './getErrorStatusCode';
import { createLog } from './logs/logging';
import { path } from './ramda-functions';
const log = createLog(__filename);
export const errorHandler = (err: any, req: express.Request, res: express.Response, next: NextFunction) => {
  if (res.headersSent) {
    return next(err);
  }
  log.error('errorHandler err: %s, %j', err, err);
  const statusCode = getErrorStatusCode(err);
  if(err.isBoom) {
    res.status(statusCode);
    res.json(path(['output', 'payload'], err));
    return;
  }
  res.status(statusCode);
  res.json({ error: err });
};
// {"data":null,"isBoom":true,"isServer":false,"output":{"statusCode":409,"payload":{"statusCode":409,"error":"Conflict","message":"CustomerID and/or email already has an account associated with it"},"headers":{}}}
