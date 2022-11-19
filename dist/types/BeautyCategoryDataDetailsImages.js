"use strict";
exports.__esModule = true;
exports.BeautyCategoryDataDetailsImages = void 0;
var schema_1 = require("@nexus/schema");
exports.BeautyCategoryDataDetailsImages = schema_1.objectType({
    name: 'BeautyCategoryDataDetailsImages',
    definition: function (t) {
        t.model.id();
        t.model.createdAt();
        t.model.url();
        t.model.beautyDetailImageId();
        t.model.userId();
    }
});
