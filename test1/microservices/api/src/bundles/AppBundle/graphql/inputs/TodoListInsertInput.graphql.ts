export default /* GraphQL */ `
  input TodoListInsertInput {
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
