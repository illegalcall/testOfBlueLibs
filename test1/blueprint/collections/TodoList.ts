import {
  generateProject,
  app,
  collection,
  field,
  relation,
  shortcuts,
  sharedModel,
  GeneratorKind,
  faker,
} from "../utils";

export const TodoList = collection({
  id: "TodoList",
  representedBy: "taskName",
  behaviors: {
    softdeletable: true,
  },
  mock: {
    count: 10,
  },
  fields: [
    // Standard fields present for user (isEnabled, createdAt)
    ...shortcuts.fields.user.standard(),
    // Information about password storage (hash, email, etc)
    shortcuts.field.user.password(),
    shortcuts.field.softdeletable(),
    ...shortcuts.fields.timestampable(),
    field({
      id: "taskName",
      type: field.types.STRING,
    }),
    field({
      id: "isCompleted",
      type: field.types.BOOLEAN,
    }),
    field({
      id: "createdAt",
      type: field.types.DATE,
    }),
  ],
  relations: [...shortcuts.relations.blameable()],
});
