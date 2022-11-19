import { objectType } from "@nexus/schema"

export const RecentlyViewd = objectType({
	name: "RecentlyViewd",
	definition(t) {
		t.model.id()
		t.model.BeautyCategoryDataImages()
		t.model.viewedAt()
		t.model.userId()
		t.model.boardId()
	
	}
})
