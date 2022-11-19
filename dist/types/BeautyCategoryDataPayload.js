"use strict";
exports.__esModule = true;
exports.BeautyCategoryDataPayload = void 0;
var schema_1 = require("@nexus/schema");
exports.BeautyCategoryDataPayload = schema_1.objectType({
    name: 'BeautyCategoryDataPayload',
    definition: function (t) {
        t.field('beautyCategoryData', { type: 'BeautyCategoryData' });
        t.field('user', { type: 'User' });
    }
});
