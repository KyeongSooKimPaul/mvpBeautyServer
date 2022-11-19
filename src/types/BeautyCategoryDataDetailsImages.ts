import { objectType } from '@nexus/schema'

export const BeautyCategoryDataDetailsImages = objectType({
  name: 'BeautyCategoryDataDetailsImages',
  definition(t) {
    t.model.id()

 

    t.model.createdAt()
    t.model.url()
    t.model.beautyDetailImageId()
    t.model.userId()
  },
})
