import { objectType } from '@nexus/schema'

export const SubscriptionMainPayload = objectType({
  name: 'SubscriptionMainPayload',
  definition(t) {
    // t.list.field('data',{ type: 'BeautyCategoryData'})
    t.field('userData', { type: 'User' })
    t.field('mutation', { type: 'String' })
  },
})
