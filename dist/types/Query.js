"use strict";
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
exports.__esModule = true;
exports.Query = void 0;
var schema_1 = require("@nexus/schema");
var utils_1 = require("../utils");
exports.Query = schema_1.queryType({
    definition: function (t) {
        var _this = this;
        t.field('me', {
            type: 'User',
            nullable: true,
            resolve: function (parent, args, ctx) {
                var userId = utils_1.getUserId(ctx);
                return ctx.prisma.user.findOne({
                    where: {
                        id: Number(userId)
                    }
                });
            }
        });
        t.list.field('users', {
            type: 'User',
            resolve: function (parent, args, ctx) {
                return ctx.prisma.user.findMany();
            }
        });
        t.field('UserbyKakao', {
            type: 'User',
            args: {
                isKakaoSavedId: schema_1.stringArg()
            },
            resolve: function (parent, _a, ctx) {
                var isKakaoSavedId = _a.isKakaoSavedId;
                return __awaiter(_this, void 0, void 0, function () {
                    var user, finalUser;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, ctx.prisma.user.findFirst({
                                    where: {
                                        isKakaoSavedId: isKakaoSavedId
                                    }
                                })];
                            case 1:
                                user = _b.sent();
                                return [4 /*yield*/, console.log('first', user)
                                    // await console.log('first', user)
                                    // await console.log('sign', sign({ userId: user[0].id }, APP_SECRET))
                                ];
                            case 2:
                                _b.sent();
                                return [4 /*yield*/, user];
                            case 3:
                                finalUser = _b.sent();
                                if (user) {
                                    return [2 /*return*/, user];
                                }
                                else {
                                    throw new Error('no kakao');
                                }
                                return [2 /*return*/];
                        }
                    });
                });
            }
        }),
            t.field('user', {
                type: 'User',
                nullable: true,
                args: { id: schema_1.intArg() },
                resolve: function (parent, _a, ctx) {
                    var id = _a.id;
                    return ctx.prisma.user.findOne({
                        where: {
                            id: Number(id)
                        }
                    });
                }
            });
        t.field('productpage', {
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
        t.field('product', {
            type: 'Product',
            nullable: true,
            args: { id: schema_1.intArg() },
            resolve: function (parent, _a, ctx) {
                var id = _a.id;
                return ctx.prisma.product.findOne({
                    where: {
                        id: Number(id)
                    }
                });
            }
        });
        //project
        t.list.field('orders', {
            type: 'Ordermanageitems',
            resolve: function (parent, args, ctx) {
                return ctx.prisma.ordermanageitems.findMany();
            }
        });
        t.list.field('ordersbyuserid', {
            type: 'Ordermanageitems',
            args: { userId: schema_1.intArg() },
            resolve: function (parent, _a, ctx) {
                var userId = _a.userId;
                return ctx.prisma.ordermanageitems.findMany({
                    where: {
                        userId: Number(userId)
                    }
                });
            }
        });
        t.list.field('ordersbyorderid', {
            type: 'Ordermanageitems',
            args: { id: schema_1.intArg() },
            resolve: function (parent, _a, ctx) {
                var id = _a.id;
                return ctx.prisma.ordermanageitems.findMany({
                    where: {
                        id: Number(id)
                    }
                });
            }
        });
        t.list.field('keepdatabyorderid', {
            type: 'Keepstatus',
            args: { keepId: schema_1.intArg() },
            resolve: function (parent, _a, ctx) {
                var keepId = _a.keepId;
                return ctx.prisma.keepstatus.findMany({
                    where: {
                        keepId: Number(keepId)
                    }
                });
            }
        });
        t.list.field('keepdemanddatabyorderid', {
            type: 'KeepOrder',
            args: { id: schema_1.intArg() },
            resolve: function (parent, _a, ctx) {
                var id = _a.id;
                return ctx.prisma.keepOrder.findMany({
                    where: {
                        id: Number(id)
                    }
                });
            }
        });
        t.list.field('paidorders', {
            type: 'Ordermanageitems',
            resolve: function (parent, args, ctx) {
                return ctx.prisma.ordermanageitems.findMany({
                    where: {
                        paidstatus: String('yes')
                    }
                });
            }
        });
        t.list.field('paidorderbyid', {
            type: 'Paidproductlist',
            args: { id: schema_1.intArg() },
            resolve: function (parent, _a, ctx) {
                var id = _a.id;
                return ctx.prisma.paidproductlist.findMany({
                    where: {
                        id: Number(id)
                    }
                });
            }
        });
        t.list.field('boardquery', {
            type: 'Board',
            resolve: function (parent, args, ctx) {
                return ctx.prisma.board.findMany({});
            }
        });
        t.field('boardquerybyid', {
            type: 'Board',
            args: { id: schema_1.intArg() },
            resolve: function (parent, _a, ctx) {
                var id = _a.id;
                return ctx.prisma.board.findOne({
                    where: {
                        id: Number(id)
                    }
                });
            }
        });
        t.list.field('categories', {
            type: 'ProductCategory',
            resolve: function (parent, args, ctx) {
                return ctx.prisma.productCategory.findMany({});
            }
        });
        t.list.field('keepOrderPaidlist', {
            type: 'KeepOrder',
            resolve: function (parent, args, ctx) {
                return ctx.prisma.keepOrder.findMany({
                    where: {
                        paidstatus: String('yes')
                    }
                });
            }
        });
        t.list.field('keepOrderlist', {
            type: 'KeepOrder',
            resolve: function (parent, args, ctx) {
                return ctx.prisma.keepOrder.findMany({});
            }
        });
        t.list.field('mvpfreecategories', {
            type: 'MvpFreeProductCategory',
            resolve: function (parent, args, ctx) {
                return ctx.prisma.mvpFreeProductCategory.findMany({});
            }
        });
        t.field('mvpfreeproductpage', {
            type: 'MvpFreeProductpage',
            nullable: true,
            args: { id: schema_1.intArg() },
            resolve: function (parent, _a, ctx) {
                var id = _a.id;
                return ctx.prisma.mvpFreeProductpage.findOne({
                    where: {
                        id: Number(id)
                    }
                });
            }
        });
        t.field('mvpFreeProduct', {
            type: 'MvpFreeProduct',
            nullable: true,
            args: { id: schema_1.intArg() },
            resolve: function (parent, _a, ctx) {
                var id = _a.id;
                return ctx.prisma.mvpFreeProduct.findOne({
                    where: {
                        id: Number(id)
                    }
                });
            }
        });
        t.field('mvpFreeProducts', {
            type: 'ProductsPayload',
            nullable: true,
            args: {
                skip: schema_1.intArg({ nullable: true }),
                take: schema_1.intArg({ nullable: true }),
                always: schema_1.stringArg({ nullable: true }),
                category: schema_1.stringArg({ nullable: true })
            },
            resolve: function (_parent, _args, ctx) { return __awaiter(_this, void 0, void 0, function () {
                var skips, takes, totalcount, mvpFreeProduct;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            skips = _args.skip;
                            takes = _args.take;
                            return [4 /*yield*/, ctx.prisma.mvpFreeProduct.findMany({
                                    orderBy: {
                                        id: 'desc'
                                    },
                                    where: {
                                        AND: [
                                            {
                                                always: {
                                                    contains: _args.always
                                                }
                                            },
                                            { category: { contains: _args.category } },
                                        ]
                                    }
                                })];
                        case 1:
                            totalcount = (_a.sent());
                            return [4 /*yield*/, ctx.prisma.mvpFreeProduct.findMany({
                                    orderBy: {
                                        id: 'desc'
                                    },
                                    where: {
                                        AND: [
                                            {
                                                always: {
                                                    contains: _args.always
                                                }
                                            },
                                            { category: { contains: _args.category } },
                                        ]
                                    },
                                    skip: skips,
                                    take: takes
                                })];
                        case 2:
                            mvpFreeProduct = (_a.sent());
                            return [2 /*return*/, {
                                    totalcount: totalcount.length,
                                    mvpFreeProduct: mvpFreeProduct
                                }
                                // return ctx.prisma.mvpFreeProduct.findMany({
                                //   orderBy: {
                                //     id: 'desc',
                                //   },
                                //   where: {
                                //     AND: [
                                //       {
                                //         always: {
                                //           contains: _args.always,
                                //         } as any,
                                //       },
                                //       { category: { contains: _args.category } as any },
                                //     ],
                                //   },
                                //   skip: skips,
                                //   take: takes,
                                // }) as any
                            ];
                    }
                });
            }); }
        });
        t.list.field('mvpFreeboardquery', {
            type: 'MvpFreeBoard',
            resolve: function (parent, args, ctx) {
                return ctx.prisma.mvpFreeBoard.findMany({});
            }
        });
        t.field('mvpFreeboardquerybyid', {
            type: 'MvpFreeBoard',
            args: { id: schema_1.intArg() },
            resolve: function (parent, _a, ctx) {
                var id = _a.id;
                return ctx.prisma.mvpFreeBoard.findOne({
                    where: {
                        id: Number(id)
                    }
                });
            }
        });
        t.list.field('allBeautyCategoryData', {
            type: 'BeautyCategoryData',
            resolve: function (parent, args, ctx) {
                return ctx.prisma.beautyCategoryData.findMany({});
            }
        });
        t.list.field('chatmantoman', {
            type: 'Chat',
            args: {
                senderId: schema_1.intArg({ nullable: false }),
                receiverId: schema_1.intArg({ nullable: false })
            },
            resolve: function (_parent, _args, ctx) {
                var senderId = _args.senderId;
                var receiverId = _args.receiverId;
                return ctx.prisma.chat.findMany({
                    where: {
                        senderId: senderId,
                        receiverId: receiverId
                    },
                    orderBy: {
                        id: 'desc'
                    }, take: 3
                });
            }
        });
    }
});
