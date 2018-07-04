import { Request, Response } from 'express';
import {apiVersion} from '../app';

export let index = (req: Request, res: Response) => {
  res.json(`Welcome to WRAS API ${apiVersion}`);
};
