import { objectType } from '@nexus/schema'

export const BeautyCategoryData = objectType({
  name: 'BeautyCategoryData',
  definition(t) {
    t.model.id()

 

    t.model.createdAt()
    t.model.title()
    t.model.BeautyCategoryDataImages()
    t.model.userId()
  },
})
