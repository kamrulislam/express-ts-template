import { badImplementation } from 'boom';
import { NextFunction } from 'express';
import * as express from 'express';
import { createLog } from './logs/logging';
const log = createLog(__filename);

// wrapper for our async route handlers
// probably you want to move it to a new file
export const asyncMiddleware = (fn: any) => (req: express.Request, res: express.Response, next: NextFunction) => {
  Promise.resolve(fn(req, res, next)).catch(err => {
    log.debug('err: %s, %j', err, err);

    if (!err.isBoom) {
      return next(badImplementation(err));
    }
    next(err);
  });
};
