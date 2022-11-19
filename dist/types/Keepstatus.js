"use strict";
exports.__esModule = true;
exports.Keepstatus = void 0;
var schema_1 = require("@nexus/schema");
exports.Keepstatus = schema_1.objectType({
    name: "Keepstatus",
    definition: function (t) {
        t.model.id();
        t.model.userId();
        t.model.createdAt();
        t.model.Ordermanageitems();
        t.model.User();
        t.model.keepId();
        t.model.productId();
        t.model.productName();
        t.model.productPrice();
        t.model.productQty();
        t.model.productKeepQty();
    }
});
