import * as express from 'express';

declare module 'nocache';
declare module 'superagent-binary-parser';

interface JwtRequest extends express.Request {
  user: any;
}
