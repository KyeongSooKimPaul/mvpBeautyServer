import { objectType } from '@nexus/schema'

export const BeautyCategoryDataDetails = objectType({
  name: 'BeautyCategoryDataDetails',
  definition(t) {
    t.model.id()
    t.model.createdAt()

    t.model.url()
    t.model.beautyDetailId()
    t.model.userId()
    t.model.BeautyCategoryDataDetailsImages()
    t.model.BeautyCategoryDataDetailsContents()
    
  },
})
