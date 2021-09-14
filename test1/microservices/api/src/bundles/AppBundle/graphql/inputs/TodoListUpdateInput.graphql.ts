export default /* GraphQL */ `
  input TodoListUpdateInput {
    isCompleted: Boolean
    isEnabled: Boolean!
    profile: TodoListProfileInput!
    taskName: String
  }

  input TodoListProfileInput {
    firstName: String!
    lastName: String!
  }
`;
