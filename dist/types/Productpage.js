"use strict";
exports.__esModule = true;
exports.Productpage = void 0;
var schema_1 = require("@nexus/schema");
exports.Productpage = schema_1.objectType({
    name: "Productpage",
    definition: function (t) {
        t.model.id();
        t.model.text();
        t.model.Product({ pagination: true, ordering: true, filtering: true });
    }
});
