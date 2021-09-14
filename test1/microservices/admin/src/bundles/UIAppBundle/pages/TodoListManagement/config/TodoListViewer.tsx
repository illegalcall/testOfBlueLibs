import { Service } from "@bluelibs/core";
import { QueryBodyType } from "@bluelibs/x-ui";
import { TodoList } from "@bundles/UIAppBundle/collections";
import { TodoListViewer as BaseTodoListViewer } from "./TodoListViewer.base";

@Service({ transient: true })
export class TodoListViewer extends BaseTodoListViewer {
  build() {
    super.build();

    // Perform additional modifications such as updating rendering functions, labels, description
  }

  static getRequestBody(): QueryBodyType<TodoList> {
    // You have the ability to modify the request by adding certain fields or relations

    return super.getRequestBody();
  }
}
