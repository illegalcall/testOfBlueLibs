import { Schema, Is, a, an } from "@bluelibs/validator-bundle";
import { TodoListUpdateInput as BaseTodoListUpdateInput } from "./TodoListUpdate.input.base";

@Schema()
export class TodoListUpdateInput extends BaseTodoListUpdateInput {
  // You can extend the base here
}
