import { objectType } from "@nexus/schema"

export const LikesUser = objectType({
	name: "LikesUser",
	definition(t) {
		t.model.id()
		t.model.Board()
		t.model.likedAt()
		t.model.userId()

		t.model.boardId()
	
	}
})
