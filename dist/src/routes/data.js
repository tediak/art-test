"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const data_1 = require("../../src/controllers/data");
const router = express_1.default.Router();
router.get('/', async (req, res) => {
    const { sources } = req.query;
    const sourcesArray = sources ? sources.split(',') : data_1.allSources;
    const data = await (0, data_1.getData)(sourcesArray);
    console.log(data);
    res.json(data);
});
exports.default = router;
//# sourceMappingURL=data.js.map