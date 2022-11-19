"use strict";
exports.__esModule = true;
exports.Productupdate = void 0;
var schema_1 = require("@nexus/schema");
exports.Productupdate = schema_1.objectType({
    name: 'Productupdate',
    definition: function (t) {
        t.model.id();
        t.model.postfix();
        t.model.prefix();
        t.model.userId();
    }
});
