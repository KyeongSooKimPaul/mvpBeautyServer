"use strict";
exports.__esModule = true;
exports.RecentlyViewd = void 0;
var schema_1 = require("@nexus/schema");
exports.RecentlyViewd = schema_1.objectType({
    name: "RecentlyViewd",
    definition: function (t) {
        t.model.id();
        t.model.BeautyCategoryDataImages();
        t.model.viewedAt();
        t.model.userId();
        t.model.boardId();
    }
});
