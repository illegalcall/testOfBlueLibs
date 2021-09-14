import {
  Collection,
  CollectionLinkConfig,
  CollectionTransformMap,
} from "@bluelibs/x-ui";
import { TodoList } from "@root/api.types";
import { UsersCollection } from "@bundles/UIAppBundle/collections";
import { ObjectId } from "@bluelibs/ejson";

export type { TodoList };

export class TodoListCollection extends Collection<TodoList> {
  getName() {
    return "TodoList";
  }

  getInputs() {
    return {
      insert: "TodoListInsertInput!",
      update: "TodoListUpdateInput!",
    };
  }

  // Return here the relations with other configs
  getLinks(): CollectionLinkConfig<TodoList>[] {
    return [
      {
        collection: () => UsersCollection,
        name: "createdBy",
        field: "createdById",
      },
      {
        collection: () => UsersCollection,
        name: "updatedBy",
        field: "updatedById",
      },
    ];
  }

  // Return here how you want to transform certain fields
  getTransformMap(): CollectionTransformMap<TodoList> {
    return {
      createdAt: (v) => new Date(v),
      updatedAt: (v) => new Date(v),
    };
  }
}
