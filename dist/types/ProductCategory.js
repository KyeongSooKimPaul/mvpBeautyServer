"use strict";
exports.__esModule = true;
exports.ProductCategory = void 0;
var schema_1 = require("@nexus/schema");
exports.ProductCategory = schema_1.objectType({
    name: 'ProductCategory',
    definition: function (t) {
        t.model.id();
        t.model.name();
        t.model.createdAt();
    }
});
