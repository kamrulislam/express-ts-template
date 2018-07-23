"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const server = app_1.app.listen(app_1.app.get('port'), () => {
    console.log(('Server running at http://localhost:%d in %s mode'), app_1.app.get('port'), app_1.app.get('env'));
    console.log('Press CTRL-C to stop\n');
});
exports.default = server;
//# sourceMappingURL=server.js.map