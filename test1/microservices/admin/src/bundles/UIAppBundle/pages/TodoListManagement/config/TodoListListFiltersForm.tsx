import { Service } from "@bluelibs/core";
import { TodoListListFiltersForm as BaseTodoListListFiltersForm } from "./TodoListListFiltersForm.base";

@Service({ transient: true })
export class TodoListListFiltersForm extends BaseTodoListListFiltersForm {
  build() {
    super.build();

    // Perform additional modifications such as updating rendering functions, labels, description
  }
}
