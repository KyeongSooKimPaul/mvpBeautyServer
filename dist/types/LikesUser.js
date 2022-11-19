"use strict";
exports.__esModule = true;
exports.LikesUser = void 0;
var schema_1 = require("@nexus/schema");
exports.LikesUser = schema_1.objectType({
    name: "LikesUser",
    definition: function (t) {
        t.model.id();
        t.model.Board();
        t.model.likedAt();
        t.model.userId();
        t.model.boardId();
    }
});
