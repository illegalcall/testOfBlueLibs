import { Service } from "@bluelibs/core";
import { QueryBodyType } from "@bluelibs/x-ui";
import { TodoList } from "@bundles/UIAppBundle/collections";
import { TodoListList as BaseTodoListList } from "./TodoListList.base";

@Service({ transient: true })
export class TodoListList extends BaseTodoListList {
  build() {
    super.build();
    // Perform additional modifications such as updating how a list item renders or add additional ones
  }

  static getRequestBody(): QueryBodyType<TodoList> {
    // You have the ability to modify the request by adding certain fields or relations

    return super.getRequestBody();
  }
}
