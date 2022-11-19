"use strict";
exports.__esModule = true;
exports.MvpFreeProductpage = void 0;
var schema_1 = require("@nexus/schema");
exports.MvpFreeProductpage = schema_1.objectType({
    name: "MvpFreeProductpage",
    definition: function (t) {
        t.model.id();
        t.model.text();
        t.model.MvpFreeProduct({ pagination: true, ordering: true, filtering: true });
    }
});
