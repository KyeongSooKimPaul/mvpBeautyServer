import { objectType } from "@nexus/schema"

export const MvpFreeProductpage = objectType({
	name: "MvpFreeProductpage",
	definition(t) {
		t.model.id()
        t.model.text()
		t.model.MvpFreeProduct({ pagination: true,  ordering: true, filtering:true, })
	}
})