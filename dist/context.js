"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.createContext = void 0;
var client_1 = require("@prisma/client");
var graphql_yoga_1 = require("graphql-yoga");
var pubSub = new graphql_yoga_1.PubSub();
var prisma = new client_1.PrismaClient();
function createContext(request) {
    return __assign(__assign({}, request), { prisma: prisma,
        pubSub: pubSub });
}
exports.createContext = createContext;
