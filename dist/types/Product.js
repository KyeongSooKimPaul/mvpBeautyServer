"use strict";
exports.__esModule = true;
exports.Product = void 0;
var schema_1 = require("@nexus/schema");
exports.Product = schema_1.objectType({
    name: 'Product',
    definition: function (t) {
        t.model.id();
        t.model.userId();
        t.model.productpageId();
        t.model.title();
        t.model.description();
        t.model.type();
        t.model.brand();
        t.model.category();
        t.model.price();
        t.model.newproduct();
        t.model.sale();
        t.model.stock();
        t.model.discount();
        t.model.variants();
        t.model.images();
        t.model.always();
        t.model.createdAt();
    }
});
