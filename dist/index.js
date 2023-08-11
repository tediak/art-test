"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const routes_1 = __importDefault(require("./src/routes"));
const express_1 = __importDefault(require("express"));
const PORT = process.env.PORT || 9000;
const app = (0, express_1.default)();
for (const { path, router } of routes_1.default) {
    app.use(path, router);
}
app.listen(PORT, () => {
    console.log('Server listening on http://localhost:' + PORT);
});
//# sourceMappingURL=index.js.map