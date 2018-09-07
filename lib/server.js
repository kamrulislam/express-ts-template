"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const server = app_1.app.listen(app_1.app.get('port'), () => {
    console.log(('API running at http://localhost:%d'), app_1.app.get('port'));
});
exports.default = server;
//# sourceMappingURL=server.js.map