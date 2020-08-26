"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const dotenv = require("dotenv");
const cors = require("cors");
const nocache = require("nocache");
const bodyParser = require("body-parser");
const express = require("express");
dotenv.config();
const app_env_1 = require("./app-env");
app_env_1.default.init(process.env.TARGET_ENV);
const logging_1 = require("./logs/logging");
const log = logging_1.createLog(__filename);
// uncomment below to activate jwt auth0
// import { jwtAuth0 } from './app-jwt-rs256';
// import { findUser } from './app-find-user';
// routes
const index_1 = require("./routes/index");
const app_error_handler_1 = require("./app-error-handler");
exports.app = express();
exports.app.set('port', process.env.API_PORT || 3000);
exports.app.use(nocache());
exports.app.use(cors({ allowedHeaders: ['Content-Type', 'Authorization', 'Content-Encoding'] }));
exports.app.use(bodyParser.json());
exports.app.use(bodyParser.urlencoded({ extended: true }));
// uncomment below to activate jwt auth0
// app.use('/', jwtAuth0.unless({ path: [
//     '/welcome',
//   ]}));
exports.app.use('/', index_1.index);
// error handler middleware must be added at the end
exports.app.use(app_error_handler_1.errorHandler);
//# sourceMappingURL=app.js.map