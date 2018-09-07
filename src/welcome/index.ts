import { Request, Response } from 'express';
import {default as connection} from '../database/Connection';
import * as asyncHandler from 'express-async-handler'

export let index = asyncHandler(async (req: Request, res: Response) => {
  res.json(`Welcome to WRAS API ${process.env.API_VERSION}`);

  const db = connection.getDb();
  const data = await db.any('select * from current_date', []);

  // db.any('select * from current_date', []).then((data: any) => {
  //   console.log(data);
  //   res.json(data);
  // })
  // .catch((error: any) => {
  //   res.status(500).send('DB connection error: ' + error);
  // });
  //res.json(`Welcome to WRAS API ${apiVersion}`);
});
