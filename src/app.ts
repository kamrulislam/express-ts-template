import * as pkg from '../package.json';
export const apiVersion = pkg.version;

import * as express from "express";
// Routes
import {index} from "./routes/index";


// Create Express server
export const app = express();

// Express configuration
app.set("port", process.env.PORT || 3000);

app.use("/", index);
