import { objectType } from "@nexus/schema"

export const BeautyLikesUser = objectType({
	name: "BeautyLikesUser",
	definition(t) {
		t.model.id()
		t.model.BeautyCategoryDataImages()
		t.model.likedAt()
		t.model.userId()

		t.model.boardId()
	
	}
})
