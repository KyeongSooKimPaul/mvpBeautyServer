import { objectType } from '@nexus/schema'

export const ProductsPayload = objectType({
  name: 'ProductsPayload',
  definition(t) {
    t.list.field('mvpFreeProduct', { type: 'MvpFreeProduct' })
    t.int('totalcount')
  },
})
