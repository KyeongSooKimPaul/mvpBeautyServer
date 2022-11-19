"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
exports.Mutation = void 0;
var schema_1 = require("@nexus/schema");
var bcryptjs_1 = require("bcryptjs");
var jsonwebtoken_1 = require("jsonwebtoken");
var utils_1 = require("../utils");
exports.Mutation = schema_1.mutationType({
    definition: function (t) {
        var _this = this;
        t.field('signup', {
            type: 'AuthPayload',
            args: {
                isKakaoSavedId: schema_1.stringArg(),
                name: schema_1.stringArg(),
                phonenumber: schema_1.stringArg(),
                email: schema_1.stringArg(),
                address: schema_1.stringArg(),
                password: schema_1.stringArg(),
                businesscard: schema_1.stringArg(),
                recommendname: schema_1.stringArg(),
                recommendphonenumber: schema_1.stringArg(),
                sample1name: schema_1.stringArg(),
                sample1phonenumber: schema_1.stringArg(),
                sample2name: schema_1.stringArg(),
                sample2phonenumber: schema_1.stringArg()
            },
            resolve: function (_parent, _a, ctx) {
                var name = _a.name, email = _a.email, password = _a.password, phonenumber = _a.phonenumber, address = _a.address, businesscard = _a.businesscard, recommendname = _a.recommendname, recommendphonenumber = _a.recommendphonenumber, sample1name = _a.sample1name, sample1phonenumber = _a.sample1phonenumber, sample2name = _a.sample2name, sample2phonenumber = _a.sample2phonenumber, isKakaoSavedId = _a.isKakaoSavedId;
                return __awaiter(_this, void 0, void 0, function () {
                    var hashedPassword, userforkakao, useremail, user;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, bcryptjs_1.hash(password, 10)];
                            case 1:
                                hashedPassword = _b.sent();
                                return [4 /*yield*/, ctx.prisma.user.findMany({
                                        where: { isKakaoSavedId: isKakaoSavedId }
                                    })];
                            case 2:
                                userforkakao = _b.sent();
                                return [4 /*yield*/, ctx.prisma.user.findOne({
                                        where: { email: email }
                                    })];
                            case 3:
                                useremail = _b.sent();
                                return [4 /*yield*/, console.log('   console.userforkakao', userforkakao)];
                            case 4:
                                _b.sent();
                                if (!(userforkakao.length == 1)) return [3 /*break*/, 5];
                                throw new Error("\uC774\uBBF8 \uCE74\uCE74\uC624\uD1A1 \uAC00\uC785\uC644\uB8CC");
                            case 5:
                                if (!useremail) return [3 /*break*/, 6];
                                throw new Error("\uC774\uBBF8 \uC774\uBA54\uC77C \uAC00\uC785\uC644\uB8CC");
                            case 6: return [4 /*yield*/, ctx.prisma.user.create({
                                    data: {
                                        phonenumber: phonenumber,
                                        name: name,
                                        email: email,
                                        address: address,
                                        businesscard: businesscard,
                                        recommendname: recommendname,
                                        recommendphonenumber: recommendphonenumber,
                                        sample1name: sample1name,
                                        sample1phonenumber: sample1phonenumber,
                                        sample2name: sample2name,
                                        sample2phonenumber: sample2phonenumber,
                                        isKakaoSavedId: isKakaoSavedId,
                                        password: hashedPassword
                                    }
                                })];
                            case 7:
                                user = _b.sent();
                                return [2 /*return*/, {
                                        token: jsonwebtoken_1.sign({ userId: user.id }, utils_1.APP_SECRET),
                                        user: user
                                    }];
                        }
                    });
                });
            }
        });
        t.field('login', {
            type: 'AuthPayload',
            args: {
                email: schema_1.stringArg({ nullable: false }),
                password: schema_1.stringArg({ nullable: false })
            },
            resolve: function (_parent, _a, ctx) {
                var email = _a.email, password = _a.password;
                return __awaiter(_this, void 0, void 0, function () {
                    var user, passwordValid;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, ctx.prisma.user.findOne({
                                    where: {
                                        email: email
                                    }
                                })];
                            case 1:
                                user = _b.sent();
                                if (!user) {
                                    throw new Error("No user found for email: " + email);
                                }
                                return [4 /*yield*/, bcryptjs_1.compare(password, user.password)];
                            case 2:
                                passwordValid = _b.sent();
                                if (!passwordValid) {
                                    throw new Error('Invalid password');
                                }
                                return [4 /*yield*/, console.log('user', user)];
                            case 3:
                                _b.sent();
                                return [2 /*return*/, {
                                        token: jsonwebtoken_1.sign({ userId: user.id }, utils_1.APP_SECRET),
                                        user: user
                                    }];
                        }
                    });
                });
            }
        });
        t.field('loginKakao', {
            type: 'AuthPayload',
            args: {
                email: schema_1.stringArg({ nullable: false })
            },
            resolve: function (_parent, _a, ctx) {
                var email = _a.email;
                return __awaiter(_this, void 0, void 0, function () {
                    var user;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, ctx.prisma.user.findOne({
                                    where: {
                                        email: email
                                    }
                                })];
                            case 1:
                                user = _b.sent();
                                if (!user) {
                                    throw new Error("No user found for email: " + email);
                                }
                                return [2 /*return*/, {
                                        token: jsonwebtoken_1.sign({ userId: user.id }, utils_1.APP_SECRET),
                                        user: user
                                    }];
                        }
                    });
                });
            }
        });
        t.field('Userbyemail', {
            type: 'User',
            args: {
                email: schema_1.stringArg()
            },
            resolve: function (parent, _a, ctx) {
                var email = _a.email;
                return ctx.prisma.user.findOne({
                    where: { email: email }
                });
            }
        });
        t.field('updatepassword', {
            type: 'User',
            args: {
                id: schema_1.intArg(),
                password: schema_1.stringArg()
            },
            resolve: function (parent, _a, ctx) {
                var id = _a.id, password = _a.password;
                return __awaiter(_this, void 0, void 0, function () {
                    var hashedPassword;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, bcryptjs_1.hash(password, 10)];
                            case 1:
                                hashedPassword = _b.sent();
                                console.log('hashedPassword', hashedPassword);
                                return [4 /*yield*/, ctx.prisma.user.update({
                                        data: {
                                            password: hashedPassword
                                        },
                                        where: {
                                            id: Number(id)
                                        }
                                    })];
                            case 2: return [2 /*return*/, _b.sent()];
                        }
                    });
                });
            }
        });
        //project
        t.field('productpagemutation', {
            type: 'Productpage',
            nullable: true,
            args: { id: schema_1.intArg() },
            resolve: function (parent, _a, ctx) {
                var id = _a.id;
                return ctx.prisma.productpage.findOne({
                    where: {
                        id: Number(id)
                    }
                });
            }
        });
        t.field('createProduct', {
            type: 'Product',
            args: {
                title: schema_1.stringArg(),
                description: schema_1.stringArg(),
                type: schema_1.stringArg(),
                brand: schema_1.stringArg(),
                category: schema_1.stringArg(),
                price: schema_1.intArg(),
                newproduct: schema_1.stringArg(),
                sale: schema_1.stringArg(),
                stock: schema_1.stringArg(),
                discount: schema_1.intArg(),
                variants: schema_1.stringArg(),
                images: schema_1.stringArg(),
                userId: schema_1.intArg(),
                productpageId: schema_1.intArg()
            },
            resolve: function (_parent, _a, ctx) {
                var productpageId = _a.productpageId, userId = _a.userId, title = _a.title, description = _a.description, type = _a.type, brand = _a.brand, category = _a.category, price = _a.price, newproduct = _a.newproduct, sale = _a.sale, stock = _a.stock, discount = _a.discount, variants = _a.variants, images = _a.images;
                return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_b) {
                        if (!userId)
                            throw new Error('Could not authenticate user.');
                        return [2 /*return*/, ctx.prisma.product.create({
                                data: {
                                    title: title,
                                    description: description,
                                    type: type,
                                    brand: brand,
                                    category: category,
                                    price: price,
                                    newproduct: newproduct,
                                    sale: sale,
                                    stock: stock,
                                    discount: discount,
                                    variants: variants,
                                    images: images,
                                    User: { connect: { id: Number(userId) } },
                                    Productpage: { connect: { id: Number(productpageId) } }
                                }
                            })];
                    });
                });
            }
        });
        t.field('updatesingleproduct', {
            type: 'Product',
            args: {
                id: schema_1.intArg(),
                title: schema_1.stringArg(),
                description: schema_1.stringArg(),
                type: schema_1.stringArg(),
                brand: schema_1.stringArg(),
                category: schema_1.stringArg(),
                price: schema_1.intArg(),
                newproduct: schema_1.stringArg(),
                sale: schema_1.stringArg(),
                stock: schema_1.stringArg(),
                discount: schema_1.intArg(),
                variants: schema_1.stringArg(),
                images: schema_1.stringArg()
            },
            resolve: function (parent, _a, ctx) {
                var id = _a.id, args = __rest(_a, ["id"]);
                var userId = utils_1.getUserId(ctx);
                if (!userId)
                    throw new Error('Could not authenticate user.');
                return ctx.prisma.product.update({
                    data: __assign({}, args),
                    where: {
                        id: Number(id)
                    }
                });
            }
        });
        t.field('createOrder', {
            type: 'Ordermanageitems',
            args: {
                product_main_image: schema_1.stringArg(),
                name: schema_1.stringArg(),
                productid: schema_1.intArg(),
                keepingamount: schema_1.stringArg(),
                wholeamount: schema_1.stringArg(),
                multiorder: schema_1.stringArg(),
                shipping_amount: schema_1.stringArg(),
                updated_at: schema_1.stringArg(),
                item_price: schema_1.stringArg(),
                paidstatus: schema_1.stringArg(),
                shippingfee: schema_1.stringArg(),
                orderaddress: schema_1.stringArg(),
                messagefromcustomer: schema_1.stringArg()
            },
            resolve: function (parent, args, ctx) { return __awaiter(_this, void 0, void 0, function () {
                var userId, result2, result1, jsondata, i;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            userId = utils_1.getUserId(ctx);
                            if (!userId)
                                throw new Error('Could not authenticate user.');
                            return [4 /*yield*/, ctx.prisma.ordermanageitems.create({
                                    data: __assign(__assign({}, args), { User: { connect: { id: Number(userId) } } })
                                })];
                        case 1:
                            result1 = _a.sent();
                            console.log('result', result1);
                            if (!result1) return [3 /*break*/, 9];
                            if (!(result1.multiorder == 'no')) return [3 /*break*/, 3];
                            return [4 /*yield*/, ctx.prisma.keepstatus.create({
                                    data: {
                                        productId: String(result1.productid),
                                        productName: String(result1.name),
                                        productPrice: String(result1.item_price),
                                        productQty: String(result1.wholeamount),
                                        productKeepQty: String(result1.keepingamount),
                                        Ordermanageitems: { connect: { id: Number(result1.id) } },
                                        User: { connect: { id: Number(userId) } }
                                    }
                                })];
                        case 2: return [2 /*return*/, (result2 = _a.sent())];
                        case 3:
                            jsondata = JSON.parse(result1.multiorder);
                            console.log('multiorder yes', jsondata);
                            console.log('multiorder yes', jsondata.length);
                            i = 0;
                            _a.label = 4;
                        case 4:
                            if (!(i < jsondata.length)) return [3 /*break*/, 8];
                            console.log('multiorder strat' + i, jsondata[i]);
                            if (!(Number(jsondata[i].qtyforkeep) > 0)) return [3 /*break*/, 6];
                            console.log('multiorder strat-real' + i, jsondata[i]);
                            return [4 /*yield*/, ctx.prisma.keepstatus.create({
                                    data: {
                                        productId: String(jsondata[i].id),
                                        productName: String(jsondata[i].title),
                                        productPrice: String(jsondata[i].price),
                                        productQty: String(jsondata[i].qty),
                                        productKeepQty: String(jsondata[i].qtyforkeep),
                                        Ordermanageitems: { connect: { id: Number(result1.id) } },
                                        User: { connect: { id: Number(userId) } }
                                    }
                                })];
                        case 5:
                            result2 = _a.sent();
                            _a.label = 6;
                        case 6:
                            if (jsondata.length - 1 == i) {
                                return [2 /*return*/, result2];
                            }
                            _a.label = 7;
                        case 7:
                            i++;
                            return [3 /*break*/, 4];
                        case 8: return [3 /*break*/, 10];
                        case 9: throw new Error('error');
                        case 10: return [2 /*return*/];
                    }
                });
            }); }
        });
        t.field('updateOrder', {
            type: 'Ordermanageitems',
            args: {
                id: schema_1.intArg(),
                paidstatus: schema_1.stringArg()
            },
            resolve: function (parent, _a, ctx) {
                var id = _a.id, args = __rest(_a, ["id"]);
                var userId = utils_1.getUserId(ctx);
                // const now = Date.now()
                if (!userId)
                    throw new Error('Could not authenticate user.');
                return ctx.prisma.ordermanageitems.update({
                    data: __assign({}, args),
                    where: {
                        id: Number(id)
                    }
                });
            }
        });
        t.field('updatekeepOrder', {
            type: 'KeepOrder',
            args: {
                id: schema_1.intArg(),
                paidstatus: schema_1.stringArg()
            },
            resolve: function (parent, _a, ctx) {
                var id = _a.id, args = __rest(_a, ["id"]);
                var userId = utils_1.getUserId(ctx);
                // const now = Date.now()
                if (!userId)
                    throw new Error('Could not authenticate user.');
                return ctx.prisma.keepOrder.update({
                    data: __assign({}, args),
                    where: {
                        id: Number(id)
                    }
                });
            }
        });
        t.field('updateKeepstatus', {
            type: 'Keepstatus',
            args: {
                id: schema_1.intArg(),
                productKeepQty: schema_1.stringArg(),
                messagefromcustomer: schema_1.stringArg(),
                orderaddress: schema_1.stringArg()
            },
            resolve: function (parent, _a, ctx) { return __awaiter(_this, void 0, void 0, function () {
                var userId, result2, result0, result1, final;
                var id = _a.id, productKeepQty = _a.productKeepQty, orderaddress = _a.orderaddress, messagefromcustomer = _a.messagefromcustomer, args = __rest(_a, ["id", "productKeepQty", "orderaddress", "messagefromcustomer"]);
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            userId = utils_1.getUserId(ctx);
                            // const now = Date.now()
                            if (!userId)
                                throw new Error('Could not authenticate user.');
                            return [4 /*yield*/, ctx.prisma.keepstatus.findOne({
                                    where: {
                                        id: Number(id)
                                    }
                                })];
                        case 1:
                            result0 = _b.sent();
                            return [4 /*yield*/, console.log('result0', result0)];
                        case 2:
                            _b.sent();
                            if (!(Number(result0 === null || result0 === void 0 ? void 0 : result0.productKeepQty) > 0)) return [3 /*break*/, 9];
                            return [4 /*yield*/, ctx.prisma.keepstatus.update({
                                    data: __assign(__assign({}, args), { productKeepQty: String(productKeepQty) }),
                                    where: {
                                        id: Number(id)
                                    }
                                })];
                        case 3:
                            result1 = _b.sent();
                            console.log('result', result1);
                            if (!(Number(result1.productKeepQty) == 0)) return [3 /*break*/, 5];
                            return [4 /*yield*/, ctx.prisma.keepstatus["delete"]({
                                    where: {
                                        id: Number(result1.id)
                                    }
                                })];
                        case 4:
                            result2 = _b.sent();
                            _b.label = 5;
                        case 5: return [4 /*yield*/, console.log('result2', result2)];
                        case 6:
                            _b.sent();
                            return [4 /*yield*/, ctx.prisma.keepOrder.create({
                                    data: {
                                        productId: String(result1.productId),
                                        orderId: String(result1.keepId),
                                        productName: String(result1.productName),
                                        productPrice: String(result1.productPrice),
                                        productQty: String(result1.productQty),
                                        productKeepQty: String(result0 === null || result0 === void 0 ? void 0 : result0.productKeepQty),
                                        demandproductKeepQty: String(Number(result0 === null || result0 === void 0 ? void 0 : result0.productKeepQty) -
                                            Number(result1.productKeepQty)),
                                        messagefromcustomer: String(messagefromcustomer),
                                        orderaddress: String(orderaddress),
                                        User: { connect: { id: Number(userId) } }
                                    }
                                })];
                        case 7:
                            final = _b.sent();
                            return [4 /*yield*/, console.log('final', final)];
                        case 8:
                            _b.sent();
                            return [2 /*return*/, final];
                        case 9: throw new Error('error');
                    }
                });
            }); }
        });
        t.field('createKeeporder', {
            type: 'KeepOrder',
            args: {
                productId: schema_1.stringArg(),
                orderId: schema_1.stringArg(),
                productName: schema_1.stringArg(),
                productPrice: schema_1.stringArg(),
                productQty: schema_1.stringArg(),
                productKeepQty: schema_1.stringArg(),
                messagefromcustomer: schema_1.stringArg(),
                messagefromadmin: schema_1.stringArg(),
                demandproductKeepQty: schema_1.stringArg(),
                orderaddress: schema_1.stringArg()
            },
            resolve: function (parent, args, ctx) {
                var userId = utils_1.getUserId(ctx);
                if (!userId)
                    throw new Error('Could not authenticate user.');
                return ctx.prisma.keepOrder.create({
                    data: __assign(__assign({}, args), { User: { connect: { id: Number(userId) } } })
                });
            }
        });
        t.field('updateKeeporder', {
            type: 'KeepOrder',
            args: {
                id: schema_1.intArg(),
                productId: schema_1.stringArg(),
                orderId: schema_1.stringArg(),
                productName: schema_1.stringArg(),
                productPrice: schema_1.stringArg(),
                productQty: schema_1.stringArg(),
                productKeepQty: schema_1.stringArg(),
                messagefromcustomer: schema_1.stringArg(),
                messagefromadmin: schema_1.stringArg(),
                demandproductKeepQty: schema_1.stringArg()
            },
            resolve: function (parent, _a, ctx) {
                var id = _a.id, args = __rest(_a, ["id"]);
                var userId = utils_1.getUserId(ctx);
                if (!userId)
                    throw new Error('Could not authenticate user.');
                return ctx.prisma.keepOrder.update({
                    data: __assign({}, args),
                    where: {
                        id: Number(id)
                    }
                });
            }
        });
        t.field('changeuseralways', {
            type: 'Product',
            args: {
                id: schema_1.intArg(),
                always: schema_1.stringArg()
            },
            resolve: function (parent, _a, ctx) {
                var id = _a.id, args = __rest(_a, ["id"]);
                return ctx.prisma.product.update({
                    data: __assign({}, args),
                    where: {
                        id: Number(id)
                    }
                });
            }
        });
        t.field('createPaidorderlist', {
            type: 'Paidproductlist',
            args: {
                userId: schema_1.intArg(),
                id: schema_1.intArg(),
                productid: schema_1.intArg(),
                title: schema_1.stringArg(),
                category: schema_1.stringArg(),
                price: schema_1.stringArg(),
                discount: schema_1.stringArg(),
                images: schema_1.stringArg(),
                wholeamount: schema_1.stringArg(),
                keepingamount: schema_1.stringArg(),
                shipping_amount: schema_1.stringArg(),
                updated_at: schema_1.stringArg(),
                orderstatus: schema_1.stringArg()
            },
            resolve: function (parent, args, ctx) { return __awaiter(_this, void 0, void 0, function () {
                var userId;
                return __generator(this, function (_a) {
                    userId = utils_1.getUserId(ctx);
                    if (!userId)
                        throw new Error('Could not authenticate user.');
                    return [2 /*return*/, ctx.prisma.paidproductlist.create({
                            data: {
                                productid: Number(args.productid),
                                title: String(args.title),
                                category: String(args.category),
                                price: String(args.price),
                                discount: String(args.discount),
                                images: String(args.images),
                                wholeamount: String(args.wholeamount),
                                keepingamount: String(args.keepingamount),
                                shipping_amount: String(args.shipping_amount),
                                updated_at: String(args.updated_at),
                                orderstatus: String(args.orderstatus),
                                User: { connect: { id: Number(userId) } }
                            }
                        })];
                });
            }); }
        });
        /// yoyomo
        t.field('changeuserapprove', {
            type: 'User',
            args: {
                id: schema_1.intArg(),
                approved: schema_1.stringArg()
            },
            resolve: function (parent, _a, ctx) {
                var id = _a.id, args = __rest(_a, ["id"]);
                return ctx.prisma.user.update({
                    data: __assign({}, args),
                    where: {
                        id: Number(id)
                    }
                });
            }
        });
        t.field('createBoard', {
            type: 'Board',
            args: {
                title: schema_1.stringArg(),
                contents: schema_1.stringArg(),
                images: schema_1.stringArg(),
                likes: schema_1.stringArg()
            },
            resolve: function (parent, args, ctx) {
                var userId = utils_1.getUserId(ctx);
                if (!userId)
                    throw new Error('Could not authenticate user.');
                return ctx.prisma.board.create({
                    data: __assign(__assign({}, args), { User: { connect: { id: Number(userId) } } })
                });
            }
        });
        t.field('likesUser', {
            type: 'LikesUser',
            args: {
                id: schema_1.intArg()
            },
            resolve: function (parent, _a, ctx) {
                var id = _a.id;
                var userId = utils_1.getUserId(ctx);
                if (!userId)
                    throw new Error('Could not authenticate user.');
                return ctx.prisma.likesUser.create({
                    data: {
                        Board: { connect: { id: Number(id) } },
                        User: { connect: { id: Number(userId) } }
                    }
                });
            }
        });
        t.field('deleteLike', {
            type: 'LikesUser',
            args: {
                id: schema_1.intArg({ nullable: false })
            },
            resolve: function (parent, _a, ctx) {
                var id = _a.id;
                var userId = utils_1.getUserId(ctx);
                if (!userId)
                    throw new Error('Could not authenticate user.');
                return ctx.prisma.likesUser["delete"]({
                    where: { id: id }
                });
            }
        });
        t.field('cretecategory', {
            type: 'ProductCategory',
            args: {
                name: schema_1.stringArg()
            },
            resolve: function (parent, args, ctx) {
                var userId = utils_1.getUserId(ctx);
                if (!userId)
                    throw new Error('Could not authenticate user.');
                return ctx.prisma.productCategory.create({
                    data: __assign(__assign({}, args), { User: { connect: { id: Number(userId) } } })
                });
            }
        });
        t.field('deletecategory', {
            type: 'ProductCategory',
            args: {
                id: schema_1.intArg({ nullable: false })
            },
            resolve: function (parent, _a, ctx) {
                var id = _a.id;
                var userId = utils_1.getUserId(ctx);
                if (!userId)
                    throw new Error('Could not authenticate user.');
                return ctx.prisma.productCategory["delete"]({
                    where: { id: id }
                });
            }
        });
        t.field('createKeepstatus', {
            type: 'Keepstatus',
            args: {
                id: schema_1.intArg(),
                productId: schema_1.stringArg(),
                productName: schema_1.stringArg(),
                productPrice: schema_1.stringArg(),
                productQty: schema_1.stringArg(),
                productKeepQty: schema_1.stringArg()
            },
            resolve: function (parent, _a, ctx) {
                var id = _a.id, args = __rest(_a, ["id"]);
                var userId = utils_1.getUserId(ctx);
                if (!userId)
                    throw new Error('Could not authenticate user.');
                console.log('dd', userId);
                return ctx.prisma.keepstatus.create({
                    data: __assign(__assign({}, args), { Ordermanageitems: { connect: { id: Number(id) } }, User: { connect: { id: Number(userId) } } })
                });
            }
        });
        t.field('cretemvpfreecategory', {
            type: 'MvpFreeProductCategory',
            args: {
                name: schema_1.stringArg()
            },
            resolve: function (parent, args, ctx) {
                var userId = utils_1.getUserId(ctx);
                if (!userId)
                    throw new Error('Could not authenticate user.');
                return ctx.prisma.mvpFreeProductCategory.create({
                    data: __assign(__assign({}, args), { User: { connect: { id: Number(userId) } } })
                });
            }
        });
        t.field('deletemvpfreecategory', {
            type: 'MvpFreeProductCategory',
            args: {
                id: schema_1.intArg({ nullable: false })
            },
            resolve: function (parent, _a, ctx) {
                var id = _a.id;
                var userId = utils_1.getUserId(ctx);
                if (!userId)
                    throw new Error('Could not authenticate user.');
                return ctx.prisma.mvpFreeProductCategory["delete"]({
                    where: { id: id }
                });
            }
        });
        t.field('createmvpfreeProduct', {
            type: 'MvpFreeProduct',
            args: {
                title: schema_1.stringArg(),
                description: schema_1.stringArg(),
                type: schema_1.stringArg(),
                brand: schema_1.stringArg(),
                category: schema_1.stringArg(),
                price: schema_1.intArg(),
                newproduct: schema_1.stringArg(),
                sale: schema_1.stringArg(),
                stock: schema_1.stringArg(),
                discount: schema_1.intArg(),
                variants: schema_1.stringArg(),
                images: schema_1.stringArg(),
                userId: schema_1.intArg(),
                productpageId: schema_1.intArg()
            },
            resolve: function (_parent, _a, ctx) {
                var productpageId = _a.productpageId, userId = _a.userId, title = _a.title, description = _a.description, type = _a.type, brand = _a.brand, category = _a.category, price = _a.price, newproduct = _a.newproduct, sale = _a.sale, stock = _a.stock, discount = _a.discount, variants = _a.variants, images = _a.images;
                return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_b) {
                        if (!userId)
                            throw new Error('Could not authenticate user.');
                        return [2 /*return*/, ctx.prisma.mvpFreeProduct.create({
                                data: {
                                    title: title,
                                    description: description,
                                    type: type,
                                    brand: brand,
                                    category: category,
                                    price: price,
                                    newproduct: newproduct,
                                    sale: sale,
                                    stock: stock,
                                    discount: discount,
                                    variants: variants,
                                    images: images,
                                    User: { connect: { id: Number(userId) } },
                                    MvpFreeProductpage: { connect: { id: Number(productpageId) } }
                                }
                            })];
                    });
                });
            }
        });
        t.field('updatemvpfreeProduct', {
            type: 'MvpFreeProduct',
            args: {
                id: schema_1.intArg(),
                title: schema_1.stringArg(),
                description: schema_1.stringArg(),
                type: schema_1.stringArg(),
                brand: schema_1.stringArg(),
                category: schema_1.stringArg(),
                price: schema_1.intArg(),
                newproduct: schema_1.stringArg(),
                sale: schema_1.stringArg(),
                stock: schema_1.stringArg(),
                discount: schema_1.intArg(),
                variants: schema_1.stringArg(),
                images: schema_1.stringArg()
            },
            resolve: function (parent, _a, ctx) {
                var id = _a.id, args = __rest(_a, ["id"]);
                var userId = utils_1.getUserId(ctx);
                if (!userId)
                    throw new Error('Could not authenticate user.');
                return ctx.prisma.mvpFreeProduct.update({
                    data: __assign({}, args),
                    where: {
                        id: Number(id)
                    }
                });
            }
        });
        t.field('mvpfreechangeuseralways', {
            type: 'MvpFreeProduct',
            args: {
                id: schema_1.intArg(),
                always: schema_1.stringArg()
            },
            resolve: function (parent, _a, ctx) {
                var id = _a.id, args = __rest(_a, ["id"]);
                return ctx.prisma.mvpFreeProduct.update({
                    data: __assign({}, args),
                    where: {
                        id: Number(id)
                    }
                });
            }
        });
        t.field('mvpFreelikesUser', {
            type: 'MvpFreeLikesUser',
            args: {
                id: schema_1.intArg()
            },
            resolve: function (parent, _a, ctx) {
                var id = _a.id;
                var userId = utils_1.getUserId(ctx);
                if (!userId)
                    throw new Error('Could not authenticate user.');
                return ctx.prisma.mvpFreeLikesUser.create({
                    data: {
                        MvpFreeBoard: { connect: { id: Number(id) } },
                        User: { connect: { id: Number(userId) } }
                    }
                });
            }
        });
        t.field('mvpFreedeleteLike', {
            type: 'MvpFreeLikesUser',
            args: {
                id: schema_1.intArg({ nullable: false })
            },
            resolve: function (parent, _a, ctx) {
                var id = _a.id;
                var userId = utils_1.getUserId(ctx);
                if (!userId)
                    throw new Error('Could not authenticate user.');
                return ctx.prisma.mvpFreeLikesUser["delete"]({
                    where: { id: id }
                });
            }
        });
        t.field('mvpFreecreateBoard', {
            type: 'MvpFreeBoard',
            args: {
                title: schema_1.stringArg(),
                contents: schema_1.stringArg(),
                images: schema_1.stringArg(),
                likes: schema_1.stringArg()
            },
            resolve: function (parent, args, ctx) {
                var userId = utils_1.getUserId(ctx);
                if (!userId)
                    throw new Error('Could not authenticate user.');
                return ctx.prisma.mvpFreeBoard.create({
                    data: __assign(__assign({}, args), { User: { connect: { id: Number(userId) } } })
                });
            }
        });
        t.field('createComment', {
            type: 'Comment',
            args: {
                content: schema_1.stringArg({ nullable: false }),
                id: schema_1.intArg({ nullable: false })
            },
            resolve: function (parent, _a, ctx) {
                var content = _a.content, id = _a.id;
                var userId = utils_1.getUserId(ctx);
                if (!userId)
                    throw new Error('Could not authenticate user.');
                return ctx.prisma.comment.create({
                    data: {
                        content: content,
                        User: { connect: { id: Number(userId) } },
                        MvpFreeBoard: { connect: { id: Number(id) } }
                    }
                });
            }
        });
        t.field('createReply', {
            type: 'Comment',
            args: {
                content: schema_1.stringArg({ nullable: false }),
                id: schema_1.intArg({ nullable: false }),
                commentId: schema_1.intArg()
            },
            resolve: function (parent, _a, ctx) {
                var content = _a.content, id = _a.id, commentId = _a.commentId;
                var userId = utils_1.getUserId(ctx);
                if (!userId)
                    throw new Error('Could not authenticate user.');
                return ctx.prisma.comment.create({
                    data: {
                        content: content,
                        User: { connect: { id: Number(userId) } },
                        MvpFreeBoard: { connect: { id: Number(id) } },
                        Comment: { connect: { id: Number(commentId) } }
                    }
                });
            }
        });
        t.field('createBeautyCategoryData', {
            type: 'BeautyCategoryData',
            args: {
                title: schema_1.stringArg()
            },
            resolve: function (parent, args, ctx) {
                var userId = utils_1.getUserId(ctx);
                if (!userId)
                    throw new Error('Could not authenticate user.');
                return ctx.prisma.beautyCategoryData.create({
                    data: __assign(__assign({}, args), { User: { connect: { id: Number(userId) } } })
                });
            }
        });
        t.field('createBeautyCategoryDataImages', {
            type: 'BeautyCategoryDataImages',
            args: {
                url: schema_1.stringArg({ nullable: false }),
                title: schema_1.stringArg({ nullable: false }),
                subtitle: schema_1.stringArg({ nullable: false }),
                brandName: schema_1.stringArg({ nullable: false }),
                originalPrice: schema_1.stringArg({ nullable: false }),
                finalPrice: schema_1.stringArg({ nullable: false })
            },
            resolve: function (parent, args, ctx) {
                var userId = utils_1.getUserId(ctx);
                if (!userId)
                    throw new Error('Could not authenticate user.');
                return ctx.prisma.beautyCategoryDataImages.create({
                    data: __assign(__assign({}, args), { User: { connect: { id: Number(userId) } }, BeautyCategoryData: { connect: { id: Number(1) } } })
                });
            }
        });
        t.field('createBeautyCategoryDataDetails', {
            type: 'BeautyCategoryDataDetails',
            args: {
                url: schema_1.stringArg(),
                id: schema_1.intArg()
            },
            resolve: function (parent, _a, ctx) {
                var id = _a.id, url = _a.url;
                var userId = utils_1.getUserId(ctx);
                if (!userId)
                    throw new Error('Could not authenticate user.');
                return ctx.prisma.beautyCategoryDataDetails.create({
                    data: {
                        url: url,
                        User: { connect: { id: Number(userId) } },
                        BeautyCategoryDataImages: { connect: { id: Number(id) } }
                    }
                });
            }
        });
        t.field('createBeautyCategoryDataDetailsImages', {
            type: 'BeautyCategoryDataDetailsImages',
            args: {
                url: schema_1.stringArg(),
                id: schema_1.intArg()
            },
            resolve: function (parent, _a, ctx) {
                var id = _a.id, url = _a.url;
                var userId = utils_1.getUserId(ctx);
                if (!userId)
                    throw new Error('Could not authenticate user.');
                return ctx.prisma.beautyCategoryDataDetailsImages.create({
                    data: {
                        url: url,
                        User: { connect: { id: Number(userId) } },
                        BeautyCategoryDataDetails: { connect: { id: Number(id) } }
                    }
                });
            }
        });
        t.field('createBeautyCategoryDataDetailsContents', {
            type: 'BeautyCategoryDataDetailsContents',
            args: {
                contents: schema_1.stringArg(),
                id: schema_1.intArg()
            },
            resolve: function (parent, _a, ctx) {
                var id = _a.id, contents = _a.contents;
                var userId = utils_1.getUserId(ctx);
                if (!userId)
                    throw new Error('Could not authenticate user.');
                return ctx.prisma.beautyCategoryDataDetailsContents.create({
                    data: {
                        contents: contents,
                        User: { connect: { id: Number(userId) } },
                        BeautyCategoryDataDetails: { connect: { id: Number(id) } }
                    }
                });
            }
        });
        t.field('beautylikesUser', {
            type: 'BeautyLikesUser',
            args: {
                id: schema_1.intArg()
            },
            resolve: function (parent, _a, ctx) {
                var id = _a.id;
                var userId = utils_1.getUserId(ctx);
                if (!userId)
                    throw new Error('Could not authenticate user.');
                return ctx.prisma.beautyLikesUser.create({
                    data: {
                        BeautyCategoryDataImages: { connect: { id: Number(id) } },
                        User: { connect: { id: Number(userId) } }
                    }
                });
            }
        });
        t.field('beautydeleteLike', {
            type: 'BeautyLikesUser',
            args: {
                id: schema_1.intArg({ nullable: false })
            },
            resolve: function (parent, _a, ctx) {
                var id = _a.id;
                var userId = utils_1.getUserId(ctx);
                if (!userId)
                    throw new Error('Could not authenticate user.');
                return ctx.prisma.beautyLikesUser["delete"]({
                    where: { id: id }
                });
            }
        });
        t.field('recentlyViewd', {
            type: 'RecentlyViewd',
            args: {
                id: schema_1.intArg(),
                userId: schema_1.intArg()
            },
            resolve: function (parent, _a, ctx) {
                var id = _a.id, userId = _a.userId;
                return __awaiter(_this, void 0, void 0, function () {
                    var result2, result1;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, ctx.prisma.recentlyViewd.findMany({
                                    where: {
                                        AND: [
                                            {
                                                boardId: id
                                            },
                                            { userId: userId },
                                        ]
                                    }
                                })];
                            case 1:
                                result1 = (_b.sent());
                                return [4 /*yield*/, console.log('rrr--,', result1)];
                            case 2:
                                _b.sent();
                                if (result1.length !== 0) {
                                    throw new Error('already saved');
                                }
                                else {
                                    return [2 /*return*/, ctx.prisma.recentlyViewd.create({
                                            data: {
                                                BeautyCategoryDataImages: { connect: { id: Number(id) } },
                                                User: { connect: { id: Number(userId) } }
                                            }
                                        })];
                                }
                                return [2 /*return*/];
                        }
                    });
                });
            }
        });
        t.field('createChat', {
            type: 'Chat',
            args: {
                senderId: schema_1.intArg({ nullable: false }),
                receiverId: schema_1.intArg({ nullable: false }),
                message: schema_1.stringArg({ nullable: false })
            },
            resolve: function (parent, _a, ctx) {
                var receiverId = _a.receiverId, message = _a.message, senderId = _a.senderId;
                return __awaiter(_this, void 0, void 0, function () {
                    var newMessage;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, ctx.prisma.chat.create({
                                    data: {
                                        message: message,
                                        receiver: {
                                            connect: {
                                                id: receiverId
                                            }
                                        },
                                        sender: {
                                            connect: {
                                                id: Number(senderId)
                                            }
                                        }
                                    }
                                })];
                            case 1:
                                newMessage = _b.sent();
                                return [4 /*yield*/, ctx.pubSub.publish('CREATED', {
                                        Chat: {
                                            message: newMessage,
                                            mutation: 'CREATED'
                                        },
                                        senderId: Number(senderId),
                                        receiverId: receiverId
                                    })];
                            case 2:
                                _b.sent();
                                return [2 /*return*/, newMessage];
                        }
                    });
                });
            }
        });
        t.field('updateChat', {
            type: 'Chat',
            args: {
                messageId: schema_1.intArg({ nullable: false }),
                message: schema_1.stringArg({ nullable: false })
            },
            resolve: function (parent, _a, ctx) {
                var messageId = _a.messageId, message = _a.message;
                return __awaiter(_this, void 0, void 0, function () {
                    var sender, sentMessage, updatedMessage;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                sender = utils_1.getUserId(ctx);
                                if (!sender) {
                                    throw new Error('You are not logged in. Please login to your account.');
                                }
                                return [4 /*yield*/, ctx.prisma.chat.findOne({
                                        where: {
                                            id: Number(messageId)
                                        }
                                    })];
                            case 1:
                                sentMessage = _b.sent();
                                if (!sentMessage) {
                                    throw new Error('This message does not exist.');
                                }
                                if (Number(sentMessage.senderId) !== Number(sender)) {
                                    throw new Error("You don't have the permission to delete this message. You can only delete messages created by you.");
                                }
                                return [4 /*yield*/, ctx.prisma.chat.update({
                                        where: {
                                            id: sentMessage.id
                                        },
                                        data: {
                                            message: message
                                        }
                                    })];
                            case 2:
                                updatedMessage = _b.sent();
                                return [4 /*yield*/, ctx.pubSub.publish('UPDATED', {
                                        Chat: {
                                            message: updatedMessage,
                                            mutation: 'UPDATED'
                                        },
                                        senderId: Number(sender),
                                        receiverId: updatedMessage.receiverId
                                    })];
                            case 3:
                                _b.sent();
                                return [2 /*return*/, updatedMessage];
                        }
                    });
                });
            }
        });
        t.field('deleteChat', {
            type: 'Chat',
            args: {
                messageId: schema_1.intArg({ nullable: false })
            },
            resolve: function (parent, _a, ctx) {
                var messageId = _a.messageId;
                return __awaiter(_this, void 0, void 0, function () {
                    var sender, sentMessage, deletedMessage;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                sender = utils_1.getUserId(ctx);
                                if (!sender) {
                                    throw new Error('You are not logged in. Please login to your account.');
                                }
                                return [4 /*yield*/, ctx.prisma.chat.findOne({
                                        where: {
                                            id: Number(messageId)
                                        }
                                    })];
                            case 1:
                                sentMessage = _b.sent();
                                if (!sentMessage) {
                                    throw new Error('This message does not exist.');
                                }
                                if (Number(sentMessage.senderId) !== Number(sender)) {
                                    throw new Error("You don't have the permission to delete this message. You can only delete messages created by you.");
                                }
                                return [4 /*yield*/, ctx.prisma.chat["delete"]({
                                        where: {
                                            id: sentMessage.id
                                        }
                                    })];
                            case 2:
                                deletedMessage = _b.sent();
                                return [4 /*yield*/, ctx.pubSub.publish('DELETED', {
                                        Chat: {
                                            message: deletedMessage,
                                            mutation: 'DELETED'
                                        },
                                        senderId: Number(sender),
                                        receiverId: deletedMessage.receiverId
                                    })];
                            case 3:
                                _b.sent();
                                return [2 /*return*/, deletedMessage];
                        }
                    });
                });
            }
        });
    }
});
