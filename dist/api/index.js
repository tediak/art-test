"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestData3 = exports.requestData2 = exports.requestData1 = void 0;
const data1 = [
    {
        id: 1,
        price: 500,
    },
    {
        id: 2,
        price: 5000,
    },
    {
        id: 3,
        price: 5000,
    },
    {
        id: 4,
        price: 3500,
    },
    {
        id: 5,
        price: 5400,
    },
    {
        id: 6,
        price: 5060,
    },
    {
        id: 7,
        price: 5008,
    },
    {
        id: 8,
        price: 5001,
    },
];
const data2 = [
    {
        id: 1,
        color: "red",
    },
    {
        id: 2,
        color: "green",
    },
    {
        id: 3,
        color: "purple",
    },
    {
        id: 4,
        color: "red",
    },
    {
        id: 5,
        color: "blue",
    },
    {
        id: 50,
        color: "blue",
    },
    {
        id: 70,
        price: "blue",
    },
    {
        id: 88,
        price: "blue",
    },
];
const data3 = [
    {
        id: 1,
        name: "John",
    },
    {
        id: 2,
        name: "Jack",
    },
    {
        id: 3,
        name: "John",
    },
    {
        id: 4,
        name: "John",
    },
    {
        id: 5,
        name: "Arnold",
    },
    {
        id: 50,
        name: "Pele",
    },
    {
        id: 70,
        name: "Pele",
    },
    {
        id: 88,
        name: "John",
    },
];
async function requestImitator(data, timeout, rejected = false) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (rejected)
                reject();
            resolve(data);
        }, timeout);
    });
}
async function requestData1() {
    return requestImitator(data1, 700);
}
exports.requestData1 = requestData1;
async function requestData2() {
    return requestImitator(data2, 500, true);
}
exports.requestData2 = requestData2;
async function requestData3() {
    return requestImitator(data3, 900);
}
exports.requestData3 = requestData3;
//# sourceMappingURL=index.js.map