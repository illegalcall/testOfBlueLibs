/** overridable */
import { Schema, Is, a, an } from "@bluelibs/validator-bundle";

@Schema()
export class TodoListProfileInput {
  @Is(a.string().required())
  firstName: string;

  @Is(a.string().required())
  lastName: string;
}

@Schema()
export class TodoListUpdateInput {
  @Is(a.boolean().nullable())
  isCompleted?: boolean;

  @Is(a.boolean().required())
  isEnabled: boolean;

  @Is(() => Schema.from(TodoListProfileInput))
  profile: TodoListProfileInput;

  @Is(a.string().nullable())
  taskName?: string;
}
