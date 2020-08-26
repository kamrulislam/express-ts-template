"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.index = void 0;
const express_1 = require("express");
const welcome = require("../welcome/index");
exports.index = express_1.Router();
exports.index.get('/', welcome.index);
//# sourceMappingURL=index.js.map