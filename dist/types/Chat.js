"use strict";
exports.__esModule = true;
exports.Chat = void 0;
var schema_1 = require("@nexus/schema");
exports.Chat = schema_1.objectType({
    name: 'Chat',
    definition: function (t) {
        t.model.id();
        t.model.receiver();
        t.model.sender();
        t.model.message();
        t.model.createdAt();
        t.model.updatedAt();
        t.model.receiverId();
        t.model.senderId();
    }
});
