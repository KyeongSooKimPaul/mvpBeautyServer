import { objectType } from '@nexus/schema'

export const ProductCategory = objectType({
  name: 'ProductCategory',
  definition(t) {
    t.model.id()

    t.model.name()

    t.model.createdAt()
  },
})
