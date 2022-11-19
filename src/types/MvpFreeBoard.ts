import { objectType } from "@nexus/schema"

export const BoaMvpFreeBoardrd = objectType({
	name: "MvpFreeBoard",
	definition(t) {
		t.model.id()
		t.model.userId()
	
		t.model.createdAt()
		t.model.title()
		t.model.contents()
		t.model.User()
		t.model.images()
		t.model.likes()
		t.model.MvpFreeLikesUser()
		t.model.comments()
		t.model.Hashtag()

	}
})
