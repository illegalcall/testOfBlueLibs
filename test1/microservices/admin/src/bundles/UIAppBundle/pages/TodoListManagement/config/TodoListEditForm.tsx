import { Service } from "@bluelibs/core";
import { TodoListEditForm as BaseTodoListEditForm } from "./TodoListEditForm.base";
import { QueryBodyType } from "@bluelibs/x-ui";
import { TodoList } from "@bundles/UIAppBundle/collections";

@Service({ transient: true })
export class TodoListEditForm extends BaseTodoListEditForm {
  build() {
    super.build();

    // Perform additional modifications such as updating rendering functions, labels, description
  }

  static getRequestBody(): QueryBodyType<TodoList> {
    // You have the ability to modify the request by adding certain fields or relations

    return super.getRequestBody();
  }
}
