"use strict";
exports.__esModule = true;
exports.BeautyCategoryDataImages = void 0;
var schema_1 = require("@nexus/schema");
exports.BeautyCategoryDataImages = schema_1.objectType({
    name: 'BeautyCategoryDataImages',
    definition: function (t) {
        t.model.id();
        t.model.createdAt();
        t.model.url();
        t.model.BeautyCategoryData();
        t.model.title();
        t.model.subtitle();
        t.model.brandName();
        t.model.originalPrice();
        t.model.finalPrice();
        t.model.BeautyCategoryDataDetails();
        t.model.beautyId();
        t.model.userId();
        t.model.BeautyLikesUser();
        t.model.RecentlyViewd();
    }
});
