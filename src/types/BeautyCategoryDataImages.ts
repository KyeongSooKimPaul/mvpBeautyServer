import { objectType } from '@nexus/schema'

export const BeautyCategoryDataImages = objectType({
  name: 'BeautyCategoryDataImages',
  definition(t) {
    t.model.id()
    t.model.createdAt()
    t.model.url()
    t.model.BeautyCategoryData()
    t.model.title()
    t.model.subtitle()
    t.model.brandName()
    t.model.originalPrice()
    t.model.finalPrice()
    t.model.BeautyCategoryDataDetails()
    t.model.beautyId()
    t.model.userId()
    t.model.BeautyLikesUser()
    t.model.RecentlyViewd()

  },
})
