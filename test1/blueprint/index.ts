import { TodoList } from "./collections/TodoList";
import { Users } from "./collections/Users";
import { generateProject, app } from "./utils";

const application = app({
  id: "test1",
  sharedModels: [
    // Configure shared models
  ],
  collections: [Users, TodoList],
});

generateProject(application, {
  // Mark this as true when you want to override even the non-overridable files
  // override: true,
});
