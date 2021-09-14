export default /* GraphQL */ `
  input UserInsertInput {
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
