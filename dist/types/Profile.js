"use strict";
exports.__esModule = true;
exports.Profile = void 0;
var schema_1 = require("@nexus/schema");
exports.Profile = schema_1.objectType({
    name: 'Profile',
    definition: function (t) {
        t.model.id();
        t.model.bio();
        t.model.location();
        t.model.website();
        t.model.avatar();
    }
});
