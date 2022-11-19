"use strict";
exports.__esModule = true;
exports.ProductsPayload = void 0;
var schema_1 = require("@nexus/schema");
exports.ProductsPayload = schema_1.objectType({
    name: 'ProductsPayload',
    definition: function (t) {
        t.list.field('mvpFreeProduct', { type: 'MvpFreeProduct' });
        t.int('totalcount');
    }
});
