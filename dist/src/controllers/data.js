"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getData = void 0;
const api_1 = require("../../api");
const availableSources = {
    data1: {
        kind: 'local',
        get: api_1.requestData1
    },
    data2: {
        kind: 'local',
        get: api_1.requestData2
    },
    data3: {
        kind: 'local',
        get: api_1.requestData3
    }
};
const getData = async (sources) => {
    const sourcesFound = sources
        .map(source => ({ source: availableSources[source.name], args: source.args }))
        .filter(({ source }) => source);
    const data = await Promise.allSettled(sourcesFound.map(({ source, args }) => source.get(...args)));
    return data;
};
exports.getData = getData;
//# sourceMappingURL=data.js.map