"use strict";
exports.__esModule = true;
exports.SubscriptionPayload = void 0;
var schema_1 = require("@nexus/schema");
exports.SubscriptionPayload = schema_1.objectType({
    name: "SubscriptionPayload",
    definition: function (t) {
        t.field("message", { type: "Chat" });
        t.field("mutation", { type: "String" });
    }
});
