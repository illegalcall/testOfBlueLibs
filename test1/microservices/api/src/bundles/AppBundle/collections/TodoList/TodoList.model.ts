import { Schema, Is, a, an } from "@bluelibs/validator-bundle";
import { TodoList as BaseTodoList } from "./TodoList.model.base";
export { TodoListProfile } from "./TodoList.model.base";

@Schema()
export class TodoList extends BaseTodoList {
  // You can extend the base here
}
