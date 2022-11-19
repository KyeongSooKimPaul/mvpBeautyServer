import { objectType } from '@nexus/schema'

export const User = objectType({
  name: 'User',
  definition(t) {
    t.field('user', { type: 'User' })
    t.string('token')
    t.model.id()
    t.model.name()
    t.model.email()
    t.model.deposit()
    t.model.point()
    t.model.phonenumber()
  t.model.address()
  t.model.isKakaoSavedId()
    t.model.businesscard()
    t.model.recommendname()
    t.model.recommendphonenumber()
    t.model.sample1name()
    t.model.sample1phonenumber()
    t.model.sample2name()
    t.model.sample2phonenumber()
    t.model.approved()
   
    t.model.Profile()

    t.model.UserProfile()

    t.model.createdAt()

    t.model.Ordermanageitems()

    t.model.Productupdate()

    t.model.Paidproductlist()
    t.model.Board()
    t.model.LikesUser()
    t.model.ProductCategory()
    t.model.Keepstatus()
    t.model.KeepOrder()
    t.model.MvpFreeProduct()
  
    t.model.MvpFreeProductCategory()
    t.model.MvpFreeBoard()
    t.model.MvpFreeLikesUser()
    t.model.comments()
    t.model.Hashtag()
    t.model.BeautyCategoryData()
    t.model.BeautyCategoryDataImages()
    t.model.BeautyCategoryDataDetails()
    t.model.BeautyCategoryDataDetailsImages()
    t.model.BeautyCategoryDataDetailsContents()
    t.model.BeautyLikesUser()
    t.model.RecentlyViewd()
    t.model.SenderOfChat()
    t.model.RecieverOfChat()
  },
})
