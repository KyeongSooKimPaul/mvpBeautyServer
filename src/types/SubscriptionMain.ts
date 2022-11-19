import { intArg, subscriptionField } from '@nexus/schema'

import { withFilter } from 'graphql-yoga'
import { APP_SECRET, getUserId } from '../utils'
const mutationType = ['LIKED', 'DISLIKED']

export const SubscriptionMain = subscriptionField('User', {
  type: 'SubscriptionMainPayload',
  description: 'Subscription For Chats',
  subscribe: withFilter(
    (parent, args, ctx) => {
      return ctx.pubSub.asyncIterator(mutationType)
    },
    (payload, variables) => {
      return true
    },
  ),
  resolve: async (payload) => {
    console.log('payload', payload)
    const { User } = await payload
    return User
  },
})
