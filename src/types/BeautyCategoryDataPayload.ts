import { objectType } from '@nexus/schema'

export const BeautyCategoryDataPayload = objectType({
  name: 'BeautyCategoryDataPayload',
  definition(t) {
    t.field('beautyCategoryData', { type: 'BeautyCategoryData' })
    t.field('user', { type: 'User' })
  },
})
