import * as X from "@bluelibs/x-bundle";
import { IResolverMap } from "@bluelibs/graphql-bundle";
import { TodoListInsertInput } from "../../../services/inputs/TodoListInsert.input";
import { TodoListUpdateInput } from "../../../services/inputs/TodoListUpdate.input";
import { TodoListCollection } from "../../../collections/TodoList/TodoList.collection";

export default {
  Query: [
    [],
    {
      TodoListFindOne: [X.ToNovaOne(TodoListCollection)],
      TodoListFindOneByID: [X.ToNovaByResultID(TodoListCollection)],
      TodoListFind: [X.ToNova(TodoListCollection)],
      TodoListCount: [X.ToCollectionCount(TodoListCollection)],
    },
  ],
  Mutation: [
    [],
    {
      TodoListInsertOne: [
        X.ToModel(TodoListInsertInput, { field: "document" }),
        X.Validate({ field: "document" }),
        X.ToDocumentInsert(TodoListCollection),
        X.ToNovaByResultID(TodoListCollection),
      ],
      TodoListUpdateOne: [
        X.ToModel(TodoListUpdateInput, { field: "document" }),
        X.Validate({ field: "document" }),
        X.CheckDocumentExists(TodoListCollection),
        X.ToDocumentUpdateByID(TodoListCollection, null, ({ document }) => ({
          $set: document,
        })),
        X.ToNovaByResultID(TodoListCollection),
      ],
      TodoListDeleteOne: [
        X.CheckDocumentExists(TodoListCollection),
        X.ToDocumentDeleteByID(TodoListCollection),
      ],
    },
  ],
  Subscription: {
    TodoListSubscription: {
      resolve: (payload) => payload,
      subscribe: [X.ToSubscription(TodoListCollection)],
    },
    TodoListSubscriptionCount: {
      resolve: (payload) => payload,
      subscribe: [X.ToSubscriptionCount(TodoListCollection)],
    },
  },
} as IResolverMap;
