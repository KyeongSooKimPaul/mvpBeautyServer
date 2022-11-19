import { objectType } from '@nexus/schema'

export const MvpFreeProductCategory = objectType({
  name: 'MvpFreeProductCategory',
  definition(t) {
    t.model.id()

    t.model.name()

    t.model.createdAt()
  },
})
