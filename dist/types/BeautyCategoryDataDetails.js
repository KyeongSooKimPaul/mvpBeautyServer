"use strict";
exports.__esModule = true;
exports.BeautyCategoryDataDetails = void 0;
var schema_1 = require("@nexus/schema");
exports.BeautyCategoryDataDetails = schema_1.objectType({
    name: 'BeautyCategoryDataDetails',
    definition: function (t) {
        t.model.id();
        t.model.createdAt();
        t.model.url();
        t.model.beautyDetailId();
        t.model.userId();
        t.model.BeautyCategoryDataDetailsImages();
        t.model.BeautyCategoryDataDetailsContents();
    }
});
