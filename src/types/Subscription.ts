import { intArg, subscriptionField } from '@nexus/schema'

import { withFilter } from 'graphql-yoga'
import { APP_SECRET, getUserId } from '../utils'
const mutationType = ['CREATED', 'UPDATED', 'DELETED']

export const Subscription = subscriptionField('Chat', {
  type: 'SubscriptionPayload',
  args: {
    receiverId: intArg({
      nullable: true,
    }),
    senderId: intArg({
      nullable: true,
    }),
  },
  description: 'Subscription For Chats',
  subscribe: withFilter(
    (parent, args, ctx) => {
      console.log('0-----', args.senderId)
      console.log('0-----', args.receiverId)
      return ctx.pubSub.asyncIterator(mutationType)
    },
    (payload, variables) => {
      if (
        (Number(payload.senderId) === Number(variables.senderId) &&
          Number(payload.receiverId) === Number(variables.receiverId)) ||
        (Number(payload.senderId) === Number(variables.receiverId) &&
          Number(payload.receiverId) === Number(variables.senderId))
      ) {
        return true
      }

      return false
    },
  ),
  resolve: async (payload) => {
    console.log("pp---", payload)
    const { Chat } = await payload

    return Chat
  },

  
})


