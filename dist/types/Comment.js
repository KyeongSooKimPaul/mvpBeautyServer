"use strict";
exports.__esModule = true;
exports.Comment = void 0;
var schema_1 = require("@nexus/schema");
exports.Comment = schema_1.objectType({
    name: 'Comment',
    definition: function (t) {
        t.model.id();
        t.model.content();
        t.model.createdAt();
        t.model.User();
        t.model.Comment();
        t.model.commentId();
    }
});
