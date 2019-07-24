import { Request, Response, Router } from 'express';
import { asyncMiddleware } from '../asyncMiddleware';
import {body, param, validationResult} from 'express-validator';
import {isEmpty, path, prop} from '../ramda-functions';
import {createLog} from '../logs/logging';
import { create } from './create';
const log = createLog(__filename);
export const index: Router = Router();

index.get('/', asyncMiddleware(async (req: Request, res: Response) => {
   res.json(`Welcome to base API ${process.env.API_VERSION}`);
}));

index.post('/',
  [
    body('name'),
    // checkSchema({
    //   in: 'body' as Location,
    //   name: validRequired,
    // }),
  ],
  asyncMiddleware(async (req: Request, res: Response) => {
    const result = validationResult(req);

    if (!result.isEmpty()) {
      log.debug('post result: %j, %s', result, result);
      return res.status(400).json(result.array());
    }

    res.json(await create(prop('body', req)));
  }));
