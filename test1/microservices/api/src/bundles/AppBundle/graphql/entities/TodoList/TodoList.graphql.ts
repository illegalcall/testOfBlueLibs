export default /* GraphQL */ `
  type TodoList {
    _id: ObjectId
    createdAt: Date!

    """
    Represents the user who has created this object
    """
    createdBy: User

    """
    Represents the user's id who has created this object
    """
    createdById: ObjectId
    isCompleted: Boolean
    isEnabled: Boolean!
    profile: TodoListProfile!
    taskName: String

    """
    Represents the last time when the object was updated
    """
    updatedAt: Date!

    """
    Represents the user who has made the latest update on this object
    """
    updatedBy: User

    """
    Represents the user's id who has made the latest update on this object
    """
    updatedById: ObjectId
  }

  type TodoListProfile {
    firstName: String!
    lastName: String!
  }
`;
