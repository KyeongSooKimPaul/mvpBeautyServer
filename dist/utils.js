"use strict";
exports.__esModule = true;
exports.getUserId = exports.APP_SECRET = void 0;
var jsonwebtoken_1 = require("jsonwebtoken");
// export const APP_SECRET = 'appsecret321'
exports.APP_SECRET = "WLU{Ba[^!({9?ZZvO4TkNZg`jOply/3:sOLK}Obx:&L_@'G`DGO+/Li/5Ju?l,U";
function getUserId(context) {
    var Authorization = context.request.get('Authorization');
    if (Authorization) {
        var token = Authorization.replace('Bearer ', '');
        var verifiedToken = jsonwebtoken_1.verify(token, exports.APP_SECRET);
        return verifiedToken && verifiedToken.userId;
    }
}
exports.getUserId = getUserId;
