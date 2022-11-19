"use strict";
exports.__esModule = true;
exports.UserProfile = void 0;
var schema_1 = require("@nexus/schema");
exports.UserProfile = schema_1.objectType({
    name: 'UserProfile',
    definition: function (t) {
        t.model.id();
        t.model.kakaoid();
        t.model.gsiid();
        t.model.bankname();
        t.model.bankaccount();
        t.model.businessnumber();
        t.model.contactemail();
        t.model.deposit();
        t.model.point();
    }
});
