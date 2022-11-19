import { objectType } from "@nexus/schema"

export const MvpFreeLikesUser = objectType({
	name: "MvpFreeLikesUser",
	definition(t) {
		t.model.id()
		t.model.MvpFreeBoard()
		t.model.likedAt()
		t.model.userId()

		t.model.boardId()
	
	}
})
