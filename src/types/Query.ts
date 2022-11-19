import { intArg, queryType, stringArg } from '@nexus/schema'
import { getUserId, APP_SECRET } from '../utils'
import { sign } from 'jsonwebtoken'
import cron = require('node-cron')

// const cron = require('node-cron');
import twilio = require('twilio')

export const Query = queryType({
  definition(t) {
    t.field('me', {
      type: 'User',
      nullable: true,
      resolve: (parent, args, ctx) => {
        const userId = getUserId(ctx)
        return ctx.prisma.user.findOne({
          where: {
            id: Number(userId),
          },
        })
      },
    })

    t.list.field('users', {
      type: 'User',
      resolve: (parent, args, ctx) => {
        return ctx.prisma.user.findMany()
      },
    })

    t.field('UserbyKakao', {
      type: 'User',
      args: {
        isKakaoSavedId: stringArg(),
      },
      resolve: async (parent, { isKakaoSavedId }, ctx): Promise<any> => {
        const user = await ctx.prisma.user.findFirst({
          where: {
            isKakaoSavedId: isKakaoSavedId,
          } as any,
        })
        await console.log('first', user)
        // await console.log('first', user)
        // await console.log('sign', sign({ userId: user[0].id }, APP_SECRET))
        const finalUser = await user
        if (user) {
          return user
        } else {
          throw new Error('no kakao')
        }
      },
    }),
      t.field('user', {
        type: 'User',
        nullable: true,
        args: { id: intArg() },
        resolve: (parent, { id }, ctx) => {
          return ctx.prisma.user.findOne({
            where: {
              id: Number(id),
            },
          })
        },
      })

    t.field('productpage', {
      type: 'Productpage',
      nullable: true,
      args: { id: intArg() },
      resolve: (parent, { id }, ctx) => {
        return ctx.prisma.productpage.findOne({
          where: {
            id: Number(id),
          },
        })
      },
    })

    t.field('product', {
      type: 'Product',
      nullable: true,
      args: { id: intArg() },
      resolve: (parent, { id }, ctx) => {
        return ctx.prisma.product.findOne({
          where: {
            id: Number(id),
          },
        })
      },
    })

    //project

    t.list.field('orders', {
      type: 'Ordermanageitems',
      resolve: (parent, args, ctx): any => {
        return ctx.prisma.ordermanageitems.findMany()
      },
    })

    t.list.field('ordersbyuserid', {
      type: 'Ordermanageitems',
      args: { userId: intArg() },
      resolve: (parent, { userId }, ctx): any => {
        return ctx.prisma.ordermanageitems.findMany({
          where: {
            userId: Number(userId),
          },
        })
      },
    })

    t.list.field('ordersbyorderid', {
      type: 'Ordermanageitems',
      args: { id: intArg() },
      resolve: (parent, { id }, ctx): any => {
        return ctx.prisma.ordermanageitems.findMany({
          where: {
            id: Number(id),
          },
        })
      },
    })

    t.list.field('keepdatabyorderid', {
      type: 'Keepstatus',
      args: { keepId: intArg() },
      resolve: (parent, { keepId }, ctx): any => {
        return ctx.prisma.keepstatus.findMany({
          where: {
            keepId: Number(keepId),
          },
        })
      },
    })

    t.list.field('keepdemanddatabyorderid', {
      type: 'KeepOrder',
      args: { id: intArg() },
      resolve: (parent, { id }, ctx): any => {
        return ctx.prisma.keepOrder.findMany({
          where: {
            id: Number(id),
          },
        })
      },
    })
    t.list.field('paidorders', {
      type: 'Ordermanageitems',
      resolve: (parent, args, ctx): any => {
        return ctx.prisma.ordermanageitems.findMany({
          where: {
            paidstatus: String('yes'),
          },
        })
      },
    })
    t.list.field('paidorderbyid', {
      type: 'Paidproductlist',
      args: { id: intArg() },
      resolve: (parent, { id }, ctx): any => {
        return ctx.prisma.paidproductlist.findMany({
          where: {
            id: Number(id),
          },
        })
      },
    })
    t.list.field('boardquery', {
      type: 'Board',

      resolve: (parent, args, ctx): any => {
        return ctx.prisma.board.findMany({})
      },
    })
    t.field('boardquerybyid', {
      type: 'Board',
      args: { id: intArg() },
      resolve: (parent, { id }, ctx): any => {
        return ctx.prisma.board.findOne({
          where: {
            id: Number(id),
          },
        })
      },
    })

    t.list.field('categories', {
      type: 'ProductCategory',
      resolve: (parent, args, ctx): any => {
        return ctx.prisma.productCategory.findMany({})
      },
    })

    t.list.field('keepOrderPaidlist', {
      type: 'KeepOrder',
      resolve: (parent, args, ctx): any => {
        return ctx.prisma.keepOrder.findMany({
          where: {
            paidstatus: String('yes'),
          },
        })
      },
    })

    t.list.field('keepOrderlist', {
      type: 'KeepOrder',
      resolve: (parent, args, ctx): any => {
        return ctx.prisma.keepOrder.findMany({})
      },
    })

    t.list.field('mvpfreecategories', {
      type: 'MvpFreeProductCategory',
      resolve: (parent, args, ctx): any => {
        return ctx.prisma.mvpFreeProductCategory.findMany({})
      },
    })
    t.field('mvpfreeproductpage', {
      type: 'MvpFreeProductpage',
      nullable: true,
      args: { id: intArg() },
      resolve: (parent, { id }, ctx) => {
        return ctx.prisma.mvpFreeProductpage.findOne({
          where: {
            id: Number(id),
          },
        }) as any
      },
    })

    t.field('mvpFreeProduct', {
      type: 'MvpFreeProduct',
      nullable: true,
      args: { id: intArg() },
      resolve: (parent, { id }, ctx) => {
        return ctx.prisma.mvpFreeProduct.findOne({
          where: {
            id: Number(id),
          },
        })
      },
    })

    t.field('mvpFreeProducts', {
      type: 'ProductsPayload',
      nullable: true,
      args: {
        skip: intArg({ nullable: true }),
        take: intArg({ nullable: true }),
        always: stringArg({ nullable: true }),
        category: stringArg({ nullable: true }),
      },
      resolve: async (_parent, _args, ctx): Promise<any> => {
        const skips: number = _args.skip as number
        const takes: number = _args.take as number

        const totalcount = (await ctx.prisma.mvpFreeProduct.findMany({
          orderBy: {
            id: 'desc',
          },
          where: {
            AND: [
              {
                always: {
                  contains: _args.always,
                } as any,
              },
              { category: { contains: _args.category } as any },
            ],
          },
        })) as any

        const mvpFreeProduct = (await ctx.prisma.mvpFreeProduct.findMany({
          orderBy: {
            id: 'desc',
          },
          where: {
            AND: [
              {
                always: {
                  contains: _args.always,
                } as any,
              },
              { category: { contains: _args.category } as any },
            ],
          },
          skip: skips,
          take: takes,
        })) as any

        return {
          totalcount: totalcount.length,
          mvpFreeProduct,
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
      },
    })

    t.list.field('mvpFreeboardquery', {
      type: 'MvpFreeBoard',

      resolve: (parent, args, ctx): any => {
        return ctx.prisma.mvpFreeBoard.findMany({})
      },
    })

    t.field('mvpFreeboardquerybyid', {
      type: 'MvpFreeBoard',
      args: { id: intArg() },
      resolve: (parent, { id }, ctx): any => {
        return ctx.prisma.mvpFreeBoard.findOne({
          where: {
            id: Number(id),
          },
        })
      },
    })
    t.list.field('allBeautyCategoryData', {
      type: 'BeautyCategoryData',

      resolve: (parent, args, ctx): any => {
        return ctx.prisma.beautyCategoryData.findMany({})
      },
    })

    t.list.field('chatmantoman', {
      type: 'Chat',
      args: {
        senderId: intArg({ nullable: false }),
        receiverId: intArg({ nullable: false }),
      },
      resolve: (_parent, _args, ctx) => {
        const senderId: number = _args.senderId as number
        const receiverId: number = _args.receiverId as number
        return ctx.prisma.chat.findMany({
          where: {
            senderId: senderId,
            receiverId: receiverId,
          },
          orderBy: {
            id: 'desc',
          },  take: 3,
        })
      },
    })
  },
})
