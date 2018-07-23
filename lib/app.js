"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
dotenv.config();
const app_env_1 = require("./app-env");
app_env_1.default.init(process.env.TARGET_ENV);
// import * as version from './version.json';
// import R = require('ramda');
// const { prop } = R;
// console.log('version: %j', version);
// export const apiVersion: string = prop('version', version);
const express = require("express");
// Routes
const index_1 = require("./routes/index");
exports.app = express();
exports.app.set('port', process.env.PORT || 3000);
exports.app.use('/', index_1.index);
//# sourceMappingURL=app.js.map