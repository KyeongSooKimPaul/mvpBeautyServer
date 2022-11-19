"use strict";
exports.__esModule = true;
exports.MvpFreeProductCategory = void 0;
var schema_1 = require("@nexus/schema");
exports.MvpFreeProductCategory = schema_1.objectType({
    name: 'MvpFreeProductCategory',
    definition: function (t) {
        t.model.id();
        t.model.name();
        t.model.createdAt();
    }
});
