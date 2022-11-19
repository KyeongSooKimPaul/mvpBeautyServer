import { arg, booleanArg, intArg, mutationType, stringArg } from '@nexus/schema'
import { compare, hash } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import { APP_SECRET, getUserId } from '../utils'
import { GraphQLServer, PubSub } from 'graphql-yoga'

export const Mutation = mutationType({
  definition(t) {
    t.field('signup', {
      type: 'AuthPayload',
      args: {
        isKakaoSavedId: stringArg(),
        name: stringArg(),
        phonenumber: stringArg(),
        email: stringArg(),
        address: stringArg(),
        password: stringArg(),
        businesscard: stringArg(),
        recommendname: stringArg(),
        recommendphonenumber: stringArg(),
        sample1name: stringArg(),
        sample1phonenumber: stringArg(),
        sample2name: stringArg(),
        sample2phonenumber: stringArg(),
      },
      resolve: async (
        _parent,
        {
          name,
          email,
          password,
          phonenumber,
          address,
          businesscard,
          recommendname,
          recommendphonenumber,
          sample1name,
          sample1phonenumber,
          sample2name,
          sample2phonenumber,
          isKakaoSavedId,
        }: any,
        ctx,
      ) => {
        const hashedPassword = await hash(password, 10)
        const userforkakao = await ctx.prisma.user.findMany({
          where: { isKakaoSavedId: isKakaoSavedId } as any,
        })
        const useremail = await ctx.prisma.user.findOne({
          where: { email: email } as any,
        })
        await console.log('   console.userforkakao', userforkakao)
        if (userforkakao.length == 1) {
          throw new Error(`이미 카카오톡 가입완료`)
        } else if (useremail) {
          throw new Error(`이미 이메일 가입완료`)
        } else {
          const user = await ctx.prisma.user.create({
            data: {
              phonenumber,
              name,
              email,
              address,
              businesscard,
              recommendname,
              recommendphonenumber,
              sample1name,
              sample1phonenumber,
              sample2name,
              sample2phonenumber,
              isKakaoSavedId,
              password: hashedPassword,
            } as any,
          })

          return {
            token: sign({ userId: user.id }, APP_SECRET),
            user,
          }
        }
      },
    })

    t.field('login', {
      type: 'AuthPayload',
      args: {
        email: stringArg({ nullable: false }),
        password: stringArg({ nullable: false }),
      },
      resolve: async (_parent, { email, password }, ctx) => {
        const user = await ctx.prisma.user.findOne({
          where: {
            email,
          },
        })
        if (!user) {
          throw new Error(`No user found for email: ${email}`)
        }
        const passwordValid = await compare(password, user.password)
        if (!passwordValid) {
          throw new Error('Invalid password')
        }
        await console.log('user', user)
        return {
          token: sign({ userId: user.id }, APP_SECRET),
          user,
        }
      },
    })

    t.field('loginKakao', {
      type: 'AuthPayload',
      args: {
        email: stringArg({ nullable: false }),
      },
      resolve: async (_parent, { email }, ctx) => {
        const user = await ctx.prisma.user.findOne({
          where: {
            email,
          },
        })
        if (!user) {
          throw new Error(`No user found for email: ${email}`)
        }
        return {
          token: sign({ userId: user.id }, APP_SECRET),
          user,
        }
      },
    })

    t.field('Userbyemail', {
      type: 'User',
      args: {
        email: stringArg(),
      },
      resolve: (parent, { email }, ctx) => {
        return ctx.prisma.user.findOne({
          where: { email: email } as any,
        })
      },
    })

    t.field('updatepassword', {
      type: 'User',
      args: {
        id: intArg(),
        password: stringArg(),
      },
      resolve: async (parent, { id, password }: any, ctx): Promise<any> => {
        const hashedPassword = await hash(password, 10)
        console.log('hashedPassword', hashedPassword)
        return await ctx.prisma.user.update({
          data: {
            password: hashedPassword,
          },
          where: {
            id: Number(id),
          },
        })
      },
    })

    //project
    t.field('productpagemutation', {
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

    t.field('createProduct', {
      type: 'Product',
      args: {
        title: stringArg(),
        description: stringArg(),
        type: stringArg(),
        brand: stringArg(),
        category: stringArg(),
        price: intArg(),
        newproduct: stringArg(),
        sale: stringArg(),
        stock: stringArg(),
        discount: intArg(),
        variants: stringArg(),
        images: stringArg(),
        userId: intArg(),
        productpageId: intArg(),
      },
      resolve: async (
        _parent,
        {
          productpageId,
          userId,
          title,
          description,
          type,
          brand,
          category,
          price,
          newproduct,
          sale,
          stock,
          discount,
          variants,
          images,
        },
        ctx,
      ) => {
        if (!userId) throw new Error('Could not authenticate user.')
        return ctx.prisma.product.create({
          data: {
            title,
            description,
            type,
            brand,
            category,
            price,
            newproduct,
            sale,
            stock,
            discount,
            variants,
            images,
            User: { connect: { id: Number(userId) } },

            Productpage: { connect: { id: Number(productpageId) } },
          } as any,
        })
      },
    })

    t.field('updatesingleproduct', {
      type: 'Product',
      args: {
        id: intArg(),
        title: stringArg(),
        description: stringArg(),
        type: stringArg(),
        brand: stringArg(),
        category: stringArg(),
        price: intArg(),
        newproduct: stringArg(),
        sale: stringArg(),
        stock: stringArg(),
        discount: intArg(),
        variants: stringArg(),
        images: stringArg(),
      },
      resolve: (parent, { id, ...args }: any, ctx) => {
        const userId = getUserId(ctx)

        if (!userId) throw new Error('Could not authenticate user.')
        return ctx.prisma.product.update({
          data: {
            ...args,
          },
          where: {
            id: Number(id),
          },
        })
      },
    })

    t.field('createOrder', {
      type: 'Ordermanageitems',
      args: {
        product_main_image: stringArg(),
        name: stringArg(),
        productid: intArg(),
        keepingamount: stringArg(),
        wholeamount: stringArg(),
        multiorder: stringArg(),
        shipping_amount: stringArg(),
        updated_at: stringArg(),
        item_price: stringArg(),
        paidstatus: stringArg(),
        shippingfee: stringArg(),
        orderaddress: stringArg(),
        messagefromcustomer: stringArg(),
      },
      resolve: async (parent, args, ctx): Promise<any> => {
        const userId = getUserId(ctx)
        if (!userId) throw new Error('Could not authenticate user.')

        var result2

        const result1 = await ctx.prisma.ordermanageitems.create({
          data: {
            ...args,
            User: { connect: { id: Number(userId) } },
          } as any,
        })
        console.log('result', result1)
        if (result1) {
          if (result1.multiorder == 'no') {
            return (result2 = await ctx.prisma.keepstatus.create({
              data: {
                productId: String(result1.productid),
                productName: String(result1.name),
                productPrice: String(result1.item_price),
                productQty: String(result1.wholeamount),
                productKeepQty: String(result1.keepingamount),
                Ordermanageitems: { connect: { id: Number(result1.id) } },
                User: { connect: { id: Number(userId) } },
              } as any,
            }))
          } else {
            var jsondata = JSON.parse(result1.multiorder as any)
            console.log('multiorder yes', jsondata)
            console.log('multiorder yes', jsondata.length)

            for (var i = 0; i < jsondata.length; i++) {
              console.log('multiorder strat' + i, jsondata[i])
              if (Number(jsondata[i].qtyforkeep) > 0) {
                console.log('multiorder strat-real' + i, jsondata[i])
                result2 = await ctx.prisma.keepstatus.create({
                  data: {
                    productId: String(jsondata[i].id),
                    productName: String(jsondata[i].title),
                    productPrice: String(jsondata[i].price),
                    productQty: String(jsondata[i].qty),
                    productKeepQty: String(jsondata[i].qtyforkeep),
                    Ordermanageitems: { connect: { id: Number(result1.id) } },
                    User: { connect: { id: Number(userId) } },
                  } as any,
                })
              }
              if (jsondata.length - 1 == i) {
                return result2
              }
            }
          }
        } else {
          throw new Error('error')
        }
      },
    })

    t.field('updateOrder', {
      type: 'Ordermanageitems',
      args: {
        id: intArg(),
        paidstatus: stringArg(),
      },
      resolve: (parent, { id, ...args }: any, ctx) => {
        const userId = getUserId(ctx)
        // const now = Date.now()
        if (!userId) throw new Error('Could not authenticate user.')
        return ctx.prisma.ordermanageitems.update({
          data: {
            ...args,
          },
          where: {
            id: Number(id),
          },
        })
      },
    })

    t.field('updatekeepOrder', {
      type: 'KeepOrder',
      args: {
        id: intArg(),
        paidstatus: stringArg(),
      },
      resolve: (parent, { id, ...args }: any, ctx) => {
        const userId = getUserId(ctx)
        // const now = Date.now()
        if (!userId) throw new Error('Could not authenticate user.')
        return ctx.prisma.keepOrder.update({
          data: {
            ...args,
          },
          where: {
            id: Number(id),
          },
        })
      },
    })

    t.field('updateKeepstatus', {
      type: 'Keepstatus',
      args: {
        id: intArg(),
        productKeepQty: stringArg(),
        messagefromcustomer: stringArg(),
        orderaddress: stringArg(),
      },
      resolve: async (
        parent,
        { id, productKeepQty, orderaddress, messagefromcustomer, ...args },
        ctx,
      ): Promise<any> => {
        const userId = getUserId(ctx)
        // const now = Date.now()
        if (!userId) throw new Error('Could not authenticate user.')
        var result2
        const result0 = await ctx.prisma.keepstatus.findOne({
          where: {
            id: Number(id),
          },
        })
        await console.log('result0', result0)

        if (Number(result0?.productKeepQty) > 0) {
          const result1 = await ctx.prisma.keepstatus.update({
            data: {
              ...args,
              productKeepQty: String(productKeepQty),
            },
            where: {
              id: Number(id),
            },
          })

          console.log('result', result1)

          if (Number(result1.productKeepQty) == 0) {
            result2 = await ctx.prisma.keepstatus.delete({
              where: {
                id: Number(result1.id),
              },
            })
          }

          await console.log('result2', result2)

          const final = await ctx.prisma.keepOrder.create({
            data: {
              productId: String(result1.productId),
              orderId: String(result1.keepId),
              productName: String(result1.productName),
              productPrice: String(result1.productPrice),
              productQty: String(result1.productQty),
              productKeepQty: String(result0?.productKeepQty),
              demandproductKeepQty: String(
                Number(result0?.productKeepQty) -
                  Number(result1.productKeepQty),
              ),
              messagefromcustomer: String(messagefromcustomer),
              orderaddress: String(orderaddress),
              User: { connect: { id: Number(userId) } },
            } as any,
          })
          await console.log('final', final)
          return final
        } else throw new Error('error')
      },
    })

    t.field('createKeeporder', {
      type: 'KeepOrder',
      args: {
        productId: stringArg(),
        orderId: stringArg(),
        productName: stringArg(),
        productPrice: stringArg(),
        productQty: stringArg(),
        productKeepQty: stringArg(),
        messagefromcustomer: stringArg(),
        messagefromadmin: stringArg(),
        demandproductKeepQty: stringArg(),
        orderaddress: stringArg(),
      },
      resolve: (parent, args, ctx) => {
        const userId = getUserId(ctx)
        if (!userId) throw new Error('Could not authenticate user.')
        return ctx.prisma.keepOrder.create({
          data: {
            ...args,
            User: { connect: { id: Number(userId) } },
          } as any,
        })
      },
    })

    t.field('updateKeeporder', {
      type: 'KeepOrder',
      args: {
        id: intArg(),
        productId: stringArg(),
        orderId: stringArg(),
        productName: stringArg(),
        productPrice: stringArg(),
        productQty: stringArg(),
        productKeepQty: stringArg(),
        messagefromcustomer: stringArg(),
        messagefromadmin: stringArg(),
        demandproductKeepQty: stringArg(),
      },
      resolve: (parent, { id, ...args }: any, ctx) => {
        const userId = getUserId(ctx)

        if (!userId) throw new Error('Could not authenticate user.')
        return ctx.prisma.keepOrder.update({
          data: {
            ...args,
          },
          where: {
            id: Number(id),
          },
        })
      },
    })

    t.field('changeuseralways', {
      type: 'Product',
      args: {
        id: intArg(),
        always: stringArg(),
      },
      resolve: (parent, { id, ...args }: any, ctx) => {
        return ctx.prisma.product.update({
          data: {
            ...args,
          },
          where: {
            id: Number(id),
          },
        })
      },
    })

    t.field('createPaidorderlist', {
      type: 'Paidproductlist',
      args: {
        userId: intArg(),
        id: intArg(),
        productid: intArg(),
        title: stringArg(),
        category: stringArg(),
        price: stringArg(),
        discount: stringArg(),
        images: stringArg(),
        wholeamount: stringArg(),
        keepingamount: stringArg(),
        shipping_amount: stringArg(),
        updated_at: stringArg(),
        orderstatus: stringArg(),
      },
      resolve: async (parent, args, ctx) => {
        const userId = getUserId(ctx)
        if (!userId) throw new Error('Could not authenticate user.')
        return ctx.prisma.paidproductlist.create({
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

            User: { connect: { id: Number(userId) } },
          } as any,
        })
      },
    })

    /// yoyomo
    t.field('changeuserapprove', {
      type: 'User',
      args: {
        id: intArg(),
        approved: stringArg(),
      },
      resolve: (parent, { id, ...args }: any, ctx) => {
        return ctx.prisma.user.update({
          data: {
            ...args,
          },
          where: {
            id: Number(id),
          },
        })
      },
    })
    t.field('createBoard', {
      type: 'Board',
      args: {
        title: stringArg(),
        contents: stringArg(),
        images: stringArg(),
        likes: stringArg(),
      },
      resolve: (parent, args, ctx) => {
        const userId = getUserId(ctx)
        if (!userId) throw new Error('Could not authenticate user.')
        return ctx.prisma.board.create({
          data: {
            ...args,
            User: { connect: { id: Number(userId) } },
          },
        })
      },
    })

    t.field('likesUser', {
      type: 'LikesUser',
      args: {
        id: intArg(),
        userId: intArg(),
      },
      resolve: (parent, { id, userId }: any, ctx) => {
        // const userId = getUserId(ctx)
        // if (!userId) throw new Error('Could not authenticate user.')
        return ctx.prisma.likesUser.create({
          data: {
            Board: { connect: { id: Number(id) } },
            User: { connect: { id: Number(userId) } },
          },
        })
      },
    })
    t.field('deleteLike', {
      type: 'LikesUser',
      args: {
        id: intArg({ nullable: false }),
        userId: intArg(),
      },
      resolve: (parent, { id, userId }: any, ctx) => {
        // const userId = getUserId(ctx)
        // if (!userId) throw new Error('Could not authenticate user.')
        return ctx.prisma.likesUser.delete({
          // where: { id: id },
          where: {
            boardId: id,
            userId: userId,
          } as any,
        })
      },
    })

    t.field('cretecategory', {
      type: 'ProductCategory',
      args: {
        name: stringArg(),
      },
      resolve: (parent, args, ctx) => {
        const userId = getUserId(ctx)
        if (!userId) throw new Error('Could not authenticate user.')
        return ctx.prisma.productCategory.create({
          data: {
            ...args,
            User: { connect: { id: Number(userId) } },
          },
        })
      },
    })
    t.field('deletecategory', {
      type: 'ProductCategory',
      args: {
        id: intArg({ nullable: false }),
      },
      resolve: (parent, { id }, ctx) => {
        const userId = getUserId(ctx)
        if (!userId) throw new Error('Could not authenticate user.')
        return ctx.prisma.productCategory.delete({
          where: { id: id },
        })
      },
    })

    t.field('createKeepstatus', {
      type: 'Keepstatus',
      args: {
        id: intArg(),
        productId: stringArg(),
        productName: stringArg(),
        productPrice: stringArg(),
        productQty: stringArg(),
        productKeepQty: stringArg(),
      } as any,
      resolve: (parent, { id, ...args }, ctx) => {
        const userId = getUserId(ctx)
        if (!userId) throw new Error('Could not authenticate user.')
        console.log('dd', userId)
        return ctx.prisma.keepstatus.create({
          data: {
            ...args,
            Ordermanageitems: { connect: { id: Number(id) } },
            User: { connect: { id: Number(userId) } },
          },
        })
      },
    })

    t.field('cretemvpfreecategory', {
      type: 'MvpFreeProductCategory',
      args: {
        name: stringArg(),
      },
      resolve: (parent, args, ctx) => {
        const userId = getUserId(ctx)
        if (!userId) throw new Error('Could not authenticate user.')
        return ctx.prisma.mvpFreeProductCategory.create({
          data: {
            ...args,
            User: { connect: { id: Number(userId) } },
          },
        })
      },
    })
    t.field('deletemvpfreecategory', {
      type: 'MvpFreeProductCategory',
      args: {
        id: intArg({ nullable: false }),
      },
      resolve: (parent, { id }, ctx) => {
        const userId = getUserId(ctx)
        if (!userId) throw new Error('Could not authenticate user.')
        return ctx.prisma.mvpFreeProductCategory.delete({
          where: { id: id },
        })
      },
    })
    t.field('createmvpfreeProduct', {
      type: 'MvpFreeProduct',
      args: {
        title: stringArg(),
        description: stringArg(),
        type: stringArg(),
        brand: stringArg(),
        category: stringArg(),
        price: intArg(),
        newproduct: stringArg(),
        sale: stringArg(),
        stock: stringArg(),
        discount: intArg(),
        variants: stringArg(),
        images: stringArg(),
        userId: intArg(),
        productpageId: intArg(),
      },
      resolve: async (
        _parent,
        {
          productpageId,
          userId,
          title,
          description,
          type,
          brand,
          category,
          price,
          newproduct,
          sale,
          stock,
          discount,
          variants,
          images,
        },
        ctx,
      ) => {
        if (!userId) throw new Error('Could not authenticate user.')
        return ctx.prisma.mvpFreeProduct.create({
          data: {
            title,
            description,
            type,
            brand,
            category,
            price,
            newproduct,
            sale,
            stock,
            discount,
            variants,
            images,
            User: { connect: { id: Number(userId) } },
            MvpFreeProductpage: { connect: { id: Number(productpageId) } },
          } as any,
        })
      },
    })

    t.field('updatemvpfreeProduct', {
      type: 'MvpFreeProduct',
      args: {
        id: intArg(),
        title: stringArg(),
        description: stringArg(),
        type: stringArg(),
        brand: stringArg(),
        category: stringArg(),
        price: intArg(),
        newproduct: stringArg(),
        sale: stringArg(),
        stock: stringArg(),
        discount: intArg(),
        variants: stringArg(),
        images: stringArg(),
      },
      resolve: (parent, { id, ...args }: any, ctx) => {
        const userId = getUserId(ctx)

        if (!userId) throw new Error('Could not authenticate user.')
        return ctx.prisma.mvpFreeProduct.update({
          data: {
            ...args,
          },
          where: {
            id: Number(id),
          },
        })
      },
    })

    t.field('mvpfreechangeuseralways', {
      type: 'MvpFreeProduct',
      args: {
        id: intArg(),
        always: stringArg(),
      },
      resolve: (parent, { id, ...args }: any, ctx) => {
        return ctx.prisma.mvpFreeProduct.update({
          data: {
            ...args,
          },
          where: {
            id: Number(id),
          },
        })
      },
    })

    t.field('mvpFreelikesUser', {
      type: 'MvpFreeLikesUser',
      args: {
        id: intArg(),
      },
      resolve: (parent, { id }, ctx) => {
        const userId = getUserId(ctx)
        if (!userId) throw new Error('Could not authenticate user.')
        return ctx.prisma.mvpFreeLikesUser.create({
          data: {
            MvpFreeBoard: { connect: { id: Number(id) } },
            User: { connect: { id: Number(userId) } },
          },
        })
      },
    })
    t.field('mvpFreedeleteLike', {
      type: 'MvpFreeLikesUser',
      args: {
        id: intArg({ nullable: false }),
      },
      resolve: (parent, { id }, ctx) => {
        const userId = getUserId(ctx)
        if (!userId) throw new Error('Could not authenticate user.')
        return ctx.prisma.mvpFreeLikesUser.delete({
          where: { id: id },
        })
      },
    })

    t.field('mvpFreecreateBoard', {
      type: 'MvpFreeBoard',
      args: {
        title: stringArg(),
        contents: stringArg(),
        images: stringArg(),
        likes: stringArg(),
      },
      resolve: (parent, args, ctx) => {
        const userId = getUserId(ctx)
        if (!userId) throw new Error('Could not authenticate user.')
        return ctx.prisma.mvpFreeBoard.create({
          data: {
            ...args,
            User: { connect: { id: Number(userId) } },
          } as any,
        })
      },
    })

    t.field('createComment', {
      type: 'Comment',
      args: {
        content: stringArg({ nullable: false }),
        id: intArg({ nullable: false }),
      },
      resolve: (parent, { content, id }, ctx) => {
        const userId = getUserId(ctx)
        if (!userId) throw new Error('Could not authenticate user.')
        return ctx.prisma.comment.create({
          data: {
            content,
            User: { connect: { id: Number(userId) } },
            MvpFreeBoard: { connect: { id: Number(id) } },
          },
        })
      },
    })

    t.field('createReply', {
      type: 'Comment',
      args: {
        content: stringArg({ nullable: false }),
        id: intArg({ nullable: false }),
        commentId: intArg(),
      },
      resolve: (parent, { content, id, commentId }, ctx) => {
        const userId = getUserId(ctx)
        if (!userId) throw new Error('Could not authenticate user.')
        return ctx.prisma.comment.create({
          data: {
            content,
            User: { connect: { id: Number(userId) } },
            MvpFreeBoard: { connect: { id: Number(id) } },
            Comment: { connect: { id: Number(commentId) } },
          },
        })
      },
    })

    t.field('createBeautyCategoryData', {
      type: 'BeautyCategoryData',
      args: {
        title: stringArg(),
      },
      resolve: (parent, args, ctx) => {
        const userId = getUserId(ctx)
        if (!userId) throw new Error('Could not authenticate user.')
        return ctx.prisma.beautyCategoryData.create({
          data: {
            ...args,
            User: { connect: { id: Number(userId) } },
          },
        })
      },
    })

    t.field('createBeautyCategoryDataImages', {
      type: 'BeautyCategoryDataImages',
      args: {
        url: stringArg({ nullable: false }),
        title: stringArg({ nullable: false }),
        subtitle: stringArg({ nullable: false }),
        brandName: stringArg({ nullable: false }),
        originalPrice: stringArg({ nullable: false }),
        finalPrice: stringArg({ nullable: false }),
      },
      resolve: (parent, args, ctx) => {
        const userId = getUserId(ctx)
        if (!userId) throw new Error('Could not authenticate user.')
        return ctx.prisma.beautyCategoryDataImages.create({
          data: {
            ...args,
            User: { connect: { id: Number(userId) } },
            BeautyCategoryData: { connect: { id: Number(1) } },
          },
        })
      },
    })

    t.field('createBeautyCategoryDataDetails', {
      type: 'BeautyCategoryDataDetails',
      args: {
        url: stringArg(),
        id: intArg(),
      },
      resolve: (parent, { id, url }, ctx) => {
        const userId = getUserId(ctx)
        if (!userId) throw new Error('Could not authenticate user.')
        return ctx.prisma.beautyCategoryDataDetails.create({
          data: {
            url,
            User: { connect: { id: Number(userId) } },
            BeautyCategoryDataImages: { connect: { id: Number(id) } },
          },
        })
      },
    })

    t.field('createBeautyCategoryDataDetailsImages', {
      type: 'BeautyCategoryDataDetailsImages',
      args: {
        url: stringArg(),
        id: intArg(),
      },
      resolve: (parent, { id, url }, ctx) => {
        const userId = getUserId(ctx)
        if (!userId) throw new Error('Could not authenticate user.')
        return ctx.prisma.beautyCategoryDataDetailsImages.create({
          data: {
            url,
            User: { connect: { id: Number(userId) } },
            BeautyCategoryDataDetails: { connect: { id: Number(id) } },
          },
        })
      },
    })

    t.field('createBeautyCategoryDataDetailsContents', {
      type: 'BeautyCategoryDataDetailsContents',
      args: {
        contents: stringArg(),
        id: intArg(),
      },
      resolve: (parent, { id, contents }, ctx) => {
        const userId = getUserId(ctx)
        if (!userId) throw new Error('Could not authenticate user.')
        return ctx.prisma.beautyCategoryDataDetailsContents.create({
          data: {
            contents,
            User: { connect: { id: Number(userId) } },
            BeautyCategoryDataDetails: { connect: { id: Number(id) } },
          },
        })
      },
    })

    t.field('beautylikesUser', {
      type: 'BeautyLikesUser',
      args: {
        id: intArg(),
        userId: intArg(),
      },
      resolve: async (parent, { id, userId }: any, ctx) => {
        // const userId = getUserId(ctx)
        // if (!userId) throw new Error('Could not authenticate user.')
        const result1 = await ctx.prisma.beautyLikesUser.create({
          data: {
            BeautyCategoryDataImages: { connect: { id: Number(id) } },
            User: { connect: { id: Number(userId) } },
          },
        })
        // const result2 = await ctx.prisma.beautyCategoryData.findMany()
        const result3 = await ctx.prisma.user.findOne({
          where: {
            id: Number(2),
          },
        })
        await ctx.pubSub.publish('LIKED', {
          User: {
            // data: result2,
            userData: result3,
            mutation: 'LIKED',
          },
        })
        return result1
      },
    })

    t.field('beautydeleteLike', {
      type: 'BeautyLikesUser',
      args: {
        id: intArg({ nullable: false }),
      },
      resolve: async (parent, { id }: any, ctx) => {
        // const userId = getUserId(ctx)
        // if (!userId) throw new Error('Could not authenticate user.')
        const result1 = await ctx.prisma.beautyLikesUser.delete({
          where: {
            id: id,
          },
        })
        await console.log('r--', result1)
        // const result2 = await ctx.prisma.beautyCategoryData.findMany()
        const result3 = await ctx.prisma.user.findOne({
          where: {
            id: Number(2),
          },
          // where: {
          //   boardId: id,
          //   userId: userId,
          // } as any,
        })
        await ctx.pubSub.publish('DISLIKED', {
          User: {
            // data: result2,
            userData: result3,
            mutation: 'DISLIKED',
          },
        })
        return result1
      },
    })

    t.field('recentlyViewd', {
      type: 'RecentlyViewd',
      args: {
        id: intArg(),
        userId: intArg(),
      } as any,
      resolve: async (parent, { id, userId }: any, ctx): Promise<any> => {
        // const userId = getUserId(ctx)
        // if (!userId) throw new Error('Could not authenticate user.')
        var result2
        const result1 = (await ctx.prisma.recentlyViewd.findMany({
          where: {
            AND: [
              {
                boardId: id,
              } as any,
              { userId: userId } as any,
            ] as any,
          } as any,
        })) as any
        await console.log('rrr--,', result1)
        if (result1.length !== 0) {
          throw new Error('already saved')
        } else {
          return ctx.prisma.recentlyViewd.create({
            data: {
              BeautyCategoryDataImages: { connect: { id: Number(id) } },
              User: { connect: { id: Number(userId) } },
            },
          })
        }
      },
    })

    t.field('createChat', {
      type: 'Chat',
      args: {
        senderId: intArg({ nullable: false }),
        receiverId: intArg({ nullable: false }),
        message: stringArg({ nullable: false }),
      },

      resolve: async (parent, { receiverId, message, senderId }, ctx) => {
        const newMessage = await ctx.prisma.chat.create({
          data: {
            message,
            receiver: {
              connect: {
                id: receiverId,
              },
            },
            sender: {
              connect: {
                id: Number(senderId),
              },
            },
          },
        })

        await ctx.pubSub.publish('CREATED', {
          Chat: {
            message: newMessage,
            mutation: 'CREATED',
          },
          senderId: Number(senderId),
          receiverId,
        })

        return newMessage
      },
    })

    t.field('updateChat', {
      type: 'Chat',
      args: {
        messageId: intArg({ nullable: false }),
        message: stringArg({ nullable: false }),
      },
      resolve: async (parent, { messageId, message }, ctx) => {
        const sender = getUserId(ctx)

        if (!sender) {
          throw new Error(
            'You are not logged in. Please login to your account.',
          )
        }

        const sentMessage = await ctx.prisma.chat.findOne({
          where: {
            id: Number(messageId),
          },
        })
        if (!sentMessage) {
          throw new Error('This message does not exist.')
        }

        if (Number(sentMessage.senderId) !== Number(sender)) {
          throw new Error(
            "You don't have the permission to delete this message. You can only delete messages created by you.",
          )
        }

        const updatedMessage = await ctx.prisma.chat.update({
          where: {
            id: sentMessage.id,
          },
          data: {
            message,
          },
        })

        await ctx.pubSub.publish('UPDATED', {
          Chat: {
            message: updatedMessage,
            mutation: 'UPDATED',
          },
          senderId: Number(sender),
          receiverId: updatedMessage.receiverId,
        })

        return updatedMessage
      },
    })

    t.field('deleteChat', {
      type: 'Chat',
      args: {
        messageId: intArg({ nullable: false }),
      },
      resolve: async (parent, { messageId }, ctx) => {
        const sender = getUserId(ctx)

        if (!sender) {
          throw new Error(
            'You are not logged in. Please login to your account.',
          )
        }

        const sentMessage = await ctx.prisma.chat.findOne({
          where: {
            id: Number(messageId),
          },
        })
        if (!sentMessage) {
          throw new Error('This message does not exist.')
        }

        if (Number(sentMessage.senderId) !== Number(sender)) {
          throw new Error(
            "You don't have the permission to delete this message. You can only delete messages created by you.",
          )
        }

        const deletedMessage = await ctx.prisma.chat.delete({
          where: {
            id: sentMessage.id,
          },
        })

        await ctx.pubSub.publish('DELETED', {
          Chat: {
            message: deletedMessage,
            mutation: 'DELETED',
          },
          senderId: Number(sender),
          receiverId: deletedMessage.receiverId,
        })

        return deletedMessage
      },
    })
  },
})
