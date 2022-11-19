import { objectType } from '@nexus/schema'

export const Chat = objectType({
  name: 'Chat',
  definition(t) {
    t.model.id()
    t.model.receiver()
    t.model.sender()
    t.model.message()
    t.model.createdAt()
    t.model.updatedAt()
    t.model.receiverId()
    t.model.senderId()
  },
})
