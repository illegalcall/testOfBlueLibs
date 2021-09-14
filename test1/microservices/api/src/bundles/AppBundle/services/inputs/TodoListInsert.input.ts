import { Schema, Is, a, an } from "@bluelibs/validator-bundle";
import { TodoListInsertInput as BaseTodoListInsertInput } from "./TodoListInsert.input.base";

@Schema()
export class TodoListInsertInput extends BaseTodoListInsertInput {
  // You can extend the base here
}
