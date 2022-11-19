import { objectType } from '@nexus/schema'

export const BeautyCategoryDataDetailsContents = objectType({
  name: 'BeautyCategoryDataDetailsContents',
  definition(t) {
    t.model.id()
    t.model.createdAt()
    t.model.contents()
    t.model.beautyDetailImageId()
    t.model.userId()
  },
})
