"use strict";
exports.__esModule = true;
exports.Findcategory = void 0;
var schema_1 = require("@nexus/schema");
// export const Findcategory = objectType({
//   name: 'Findcategory',
//   definition(t) {
//     t.list.field('categoryList', {
//       type: findcategory,
//       resolve: (root, args, ctx) => {
//         console.log('!!!!!!!!!!!!!!');
//       }
//     })
//   },
// })
exports.Findcategory = schema_1.objectType({
    name: 'Findcategory',
    definition: function (t) {
        t.string('categoryList');
    }
});
// // const CategoryList = objectType({
// //   name: 'categoryList',
// //   definition(t) {
// //     t.string('categorye');
// //   }
// // })
