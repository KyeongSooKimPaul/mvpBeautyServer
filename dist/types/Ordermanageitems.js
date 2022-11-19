"use strict";
exports.__esModule = true;
exports.Ordermanageitems = void 0;
var schema_1 = require("@nexus/schema");
exports.Ordermanageitems = schema_1.objectType({
    name: 'Ordermanageitems',
    definition: function (t) {
        t.model.id();
        t.model.createdAt();
        t.model.product_main_image();
        t.model.name();
        t.model.keepingamount();
        t.model.wholeamount();
        t.model.multiorder();
        t.model.shipping_amount();
        t.model.created_at();
        t.model.shippingfee();
        t.model.updated_at();
        t.model.item_price();
        t.model.paidstatus();
        t.model.productid();
        t.model.userId();
        t.model.User();
        t.model.Keepstatus();
        t.model.messagefromcustomer();
        t.model.messagefromadmin();
        t.model.orderaddress();
    }
});
