import { Service } from "@bluelibs/core";
import { TodoListCreateForm as BaseTodoListCreateForm } from "./TodoListCreateForm.base";

@Service({ transient: true })
export class TodoListCreateForm extends BaseTodoListCreateForm {
  build() {
    super.build();

    // Perform additional modifications such as updating rendering functions, labels, description
  }
}
