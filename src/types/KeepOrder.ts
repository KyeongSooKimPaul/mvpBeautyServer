import { objectType } from '@nexus/schema'

export const KeepOrder = objectType({
  name: 'KeepOrder',
  definition(t) {
    t.model.id()
    t.model.userId()
    t.model.createdAt()
    t.model.User()
    t.model.orderId()
    t.model.productId()
    t.model.productName()
    t.model.productPrice()
    t.model.productQty()
    t.model.productKeepQty()
    t.model.messagefromcustomer()
    t.model.messagefromadmin()
    t.model.demandproductKeepQty()
    t.model.paidstatus()
    t.model.orderaddress()
  },
})
