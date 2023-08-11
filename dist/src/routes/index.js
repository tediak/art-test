"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = __importDefault(require("./data"));
const routes = [
    {
        path: '/data',
        router: data_1.default
    }
];
exports.default = routes;
//# sourceMappingURL=index.js.map