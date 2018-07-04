import { Request, Response } from 'express';
const apiVersion = '1.0.0';

export let index = (req: Request, res: Response) => {
  res.json(`Welcome to WRAS API ${apiVersion}`);
};
