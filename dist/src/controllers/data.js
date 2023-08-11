"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getData = exports.allSources = void 0;
const api_1 = require("../../api");
// If any other sources will be planned, we can implement args parsing from request query (or changing type to POST and pass via body).
// But for now we have only local sources, so I hardcoded possible args here
const availableSources = {
    data1: {
        kind: 'local',
        get: api_1.requestData1,
        key: 'price',
        args: [],
    },
    data2: {
        kind: 'local',
        get: api_1.requestData2,
        args: [],
    },
    data3: {
        kind: 'local',
        get: api_1.requestData3,
        key: 'name',
        args: [],
    }
};
const unifyData = (data, key, unificator) => {
    const nonUnique = (arr, value) => arr.filter(el => el === value).length > 1;
    const values = data.map(obj => obj[key]);
    const unified = data.map(obj => {
        if (nonUnique(values, obj[key])) {
            return { ...obj, [key]: `${obj[key]} ${obj[unificator]}` };
        }
        else {
            return { ...obj, [key]: obj[key].toString() }; // converting numbers to strings to make them the same type as unified ones
        }
    });
    return unified;
};
exports.allSources = Object.keys(availableSources);
const getData = async (sources) => {
    const sourcesFound = sources
        .map(sourceName => ({ name: sourceName, source: availableSources[sourceName] }))
        .filter(({ source }) => source);
    const collectedData = await Promise.allSettled(sourcesFound.map(({ name, source }) => source.get(...source.args)
        .then(data => ({ name, key: source.key, data }))
        .catch(() => {
        // such error handling because of response format, which was mentioned in README
        return { name, key: source.key, data: [] };
    })));
    const response = {};
    const unificator = 'id';
    for (const result of collectedData) {
        if (result.status === 'fulfilled') {
            const { name, key, data } = result.value;
            const unified = unifyData(data, key, unificator);
            response[name] = unified;
        }
    }
    return response;
};
exports.getData = getData;
//# sourceMappingURL=data.js.map