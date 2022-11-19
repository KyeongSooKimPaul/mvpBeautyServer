"use strict";
exports.__esModule = true;
exports.Board = void 0;
var schema_1 = require("@nexus/schema");
exports.Board = schema_1.objectType({
    name: "Board",
    definition: function (t) {
        t.model.id();
        t.model.userId();
        t.model.createdAt();
        t.model.title();
        t.model.contents();
        t.model.User();
        t.model.images();
        t.model.likes();
        t.model.LikesUser();
    }
});
