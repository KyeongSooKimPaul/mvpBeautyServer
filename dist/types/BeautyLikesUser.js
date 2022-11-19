"use strict";
exports.__esModule = true;
exports.BeautyLikesUser = void 0;
var schema_1 = require("@nexus/schema");
exports.BeautyLikesUser = schema_1.objectType({
    name: "BeautyLikesUser",
    definition: function (t) {
        t.model.id();
        t.model.BeautyCategoryDataImages();
        t.model.likedAt();
        t.model.userId();
        t.model.boardId();
    }
});
