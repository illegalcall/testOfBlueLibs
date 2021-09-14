export default /* GraphQL */ `
  input UserUpdateInput {
    createdAt: Date
    isEnabled: Boolean
    profile: UserProfileInput!
    roles: [UserRoles]
  }

  input UserProfileInput {
    firstName: String!
    lastName: String!
  }
`;
