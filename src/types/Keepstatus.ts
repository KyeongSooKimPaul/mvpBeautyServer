import { objectType } from "@nexus/schema"

export const Keepstatus = objectType({
	name: "Keepstatus",
	definition(t) {
		t.model.id()
		t.model.userId()
		t.model.createdAt()
		t.model.Ordermanageitems()
		t.model.User()
		t.model.keepId()
		t.model.productId()
		t.model.productName()
		t.model.productPrice()
		t.model.productQty()
		t.model.productKeepQty()
	
	}
})
