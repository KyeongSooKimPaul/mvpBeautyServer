"use strict";
exports.__esModule = true;
exports.permissions = void 0;
var graphql_shield_1 = require("graphql-shield");
// export const permissions = shield({})
exports.permissions = graphql_shield_1.shield({
    Query: {
        // me: rules.isAuthenticatedUser,
        // filterPosts: rules.isAuthenticatedUser,
        // tweet: rules.isAuthenticatedUser,
        "*": graphql_shield_1.allow
    },
    Mutation: {
        // createDraft: rules.isAuthenticatedUser,
        // deletePost: rules.isPostOwner,
        // publish: rules.isPostOwner,
        "*": graphql_shield_1.allow
    }
});
