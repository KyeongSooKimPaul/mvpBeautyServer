import { objectType } from '@nexus/schema'

export const SubscriptionPayload = objectType({
 name: "SubscriptionPayload",
 definition(t) {
   t.field("message", { type: "Chat" });
   t.field("mutation", { type: "String" });
 }
});
 