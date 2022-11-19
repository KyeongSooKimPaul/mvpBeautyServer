import { objectType } from "@nexus/schema"

export const Hashtag = objectType({
	name: "Hashtag",
	definition(t) {
		t.model.id()
		t.model.MvpFreeBoard()
		t.model.content()
		t.model.userId()
		t.model.boardId()
	}
})
