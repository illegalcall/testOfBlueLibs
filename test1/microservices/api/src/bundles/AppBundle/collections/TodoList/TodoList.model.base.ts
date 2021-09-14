/** overridable */
import { Schema, Is, a, an } from "@bluelibs/validator-bundle";
import { User } from "../";
import { IPasswordAuthenticationStrategy } from "@bluelibs/password-bundle";

@Schema()
export class TodoListProfile {
  @Is(a.string().required())
  firstName: string;

  @Is(a.string().required())
  lastName: string;
}

@Schema()
export class TodoList {
  @Is(an.objectId())
  _id?: any;

  @Is(a.date().required())
  createdAt: Date;

  /**
   * @description Represents the user who has created this object
   */
  createdBy?: User;

  /**
   * @description Represents the user's id who has created this object
   */
  @Is(an.objectId().nullable())
  createdById?: any;

  @Is(a.boolean().nullable())
  isCompleted?: boolean;

  /**
   * @description This field is used to identify if this object has been soft-deleted
   */
  @Is(a.boolean().nullable())
  isDeleted?: boolean;

  @Is(a.boolean().required())
  isEnabled: boolean;

  /**
   * @description This is the model that stores password authentication data such as emails, hashed password, salt and other security related data
   */
  password: IPasswordAuthenticationStrategy;

  @Is(() => Schema.from(TodoListProfile))
  profile: TodoListProfile;

  @Is(a.string().nullable())
  taskName?: string;

  /**
   * @description Represents the last time when the object was updated
   */
  @Is(a.date().required())
  updatedAt: Date;

  /**
   * @description Represents the user who has made the latest update on this object
   */
  updatedBy?: User;

  /**
   * @description Represents the user's id who has made the latest update on this object
   */
  @Is(an.objectId().nullable())
  updatedById?: any;
}
