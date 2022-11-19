"use strict";
exports.__esModule = true;
exports.Paidproductlist = void 0;
var schema_1 = require("@nexus/schema");
exports.Paidproductlist = schema_1.objectType({
    name: 'Paidproductlist',
    definition: function (t) {
        t.model.id();
        t.model.userId();
        t.model.createdAt();
        t.model.title();
        t.model.category();
        t.model.price();
        t.model.discount();
        t.model.images();
        t.model.updated_at();
        t.model.productid();
        t.model.wholeamount();
        t.model.keepingamount();
        t.model.shipping_amount();
        t.model.orderstatus();
        t.model.User();
    }
});
