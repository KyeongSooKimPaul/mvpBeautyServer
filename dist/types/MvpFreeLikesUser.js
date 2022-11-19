"use strict";
exports.__esModule = true;
exports.MvpFreeLikesUser = void 0;
var schema_1 = require("@nexus/schema");
exports.MvpFreeLikesUser = schema_1.objectType({
    name: "MvpFreeLikesUser",
    definition: function (t) {
        t.model.id();
        t.model.MvpFreeBoard();
        t.model.likedAt();
        t.model.userId();
        t.model.boardId();
    }
});
