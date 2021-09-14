export default /* GraphQL */ `
  type Query {
    TodoListFindOne(query: QueryInput): TodoList
    TodoListFindOneByID(_id: ObjectId!): TodoList
    TodoListFind(query: QueryInput): [TodoList]!
    TodoListCount(query: QueryInput): Int!
  }

  type Mutation {
    TodoListInsertOne(document: TodoListInsertInput!): TodoList
    TodoListUpdateOne(_id: ObjectId!, document: TodoListUpdateInput!): TodoList!
    TodoListDeleteOne(_id: ObjectId!): Boolean
  }

  type Subscription {
    TodoListSubscription(body: EJSON): SubscriptionEvent
    TodoListSubscriptionCount(filters: EJSON): SubscriptionCountEvent
  }
`;
