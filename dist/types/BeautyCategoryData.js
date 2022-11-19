"use strict";
exports.__esModule = true;
exports.BeautyCategoryData = void 0;
var schema_1 = require("@nexus/schema");
exports.BeautyCategoryData = schema_1.objectType({
    name: 'BeautyCategoryData',
    definition: function (t) {
        t.model.id();
        t.model.createdAt();
        t.model.title();
        t.model.BeautyCategoryDataImages();
        t.model.userId();
    }
});
