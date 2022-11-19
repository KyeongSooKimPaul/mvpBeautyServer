"use strict";
exports.__esModule = true;
exports.KeepOrder = void 0;
var schema_1 = require("@nexus/schema");
exports.KeepOrder = schema_1.objectType({
    name: 'KeepOrder',
    definition: function (t) {
        t.model.id();
        t.model.userId();
        t.model.createdAt();
        t.model.User();
        t.model.orderId();
        t.model.productId();
        t.model.productName();
        t.model.productPrice();
        t.model.productQty();
        t.model.productKeepQty();
        t.model.messagefromcustomer();
        t.model.messagefromadmin();
        t.model.demandproductKeepQty();
        t.model.paidstatus();
        t.model.orderaddress();
    }
});
