"use strict";
exports.__esModule = true;
exports.BeautyCategoryDataDetailsContents = void 0;
var schema_1 = require("@nexus/schema");
exports.BeautyCategoryDataDetailsContents = schema_1.objectType({
    name: 'BeautyCategoryDataDetailsContents',
    definition: function (t) {
        t.model.id();
        t.model.createdAt();
        t.model.contents();
        t.model.beautyDetailImageId();
        t.model.userId();
    }
});
