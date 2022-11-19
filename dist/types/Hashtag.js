"use strict";
exports.__esModule = true;
exports.Hashtag = void 0;
var schema_1 = require("@nexus/schema");
exports.Hashtag = schema_1.objectType({
    name: "Hashtag",
    definition: function (t) {
        t.model.id();
        t.model.MvpFreeBoard();
        t.model.content();
        t.model.userId();
        t.model.boardId();
    }
});
