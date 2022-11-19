"use strict";
exports.__esModule = true;
exports.BoaMvpFreeBoardrd = void 0;
var schema_1 = require("@nexus/schema");
exports.BoaMvpFreeBoardrd = schema_1.objectType({
    name: "MvpFreeBoard",
    definition: function (t) {
        t.model.id();
        t.model.userId();
        t.model.createdAt();
        t.model.title();
        t.model.contents();
        t.model.User();
        t.model.images();
        t.model.likes();
        t.model.MvpFreeLikesUser();
        t.model.comments();
        t.model.Hashtag();
    }
});
