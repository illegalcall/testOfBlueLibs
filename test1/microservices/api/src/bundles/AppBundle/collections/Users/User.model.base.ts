/** overridable */
import { Schema, Is, a, an } from "@bluelibs/validator-bundle";
import { IPasswordAuthenticationStrategy } from "@bluelibs/password-bundle";
import { UserRoles } from "./enums/UserRoles.enum";
export { UserRoles };

@Schema()
export class UserProfile {
  @Is(a.string().required())
  firstName: string;

  @Is(a.string().required())
  lastName: string;
}

@Schema()
export class User {
  @Is(an.objectId())
  _id?: any;

  @Is(a.date().nullable())
  createdAt?: Date;

  /**
   * @description Represents the user who has created this object
   */
  createdBy?: User;

  /**
   * @description Represents the user's id who has created this object
   */
  @Is(an.objectId().nullable())
  createdById?: any;

  email?: string;

  fullName?: string;

  /**
   * @description This field is used to identify if this object has been soft-deleted
   */
  @Is(a.boolean().nullable())
  isDeleted?: boolean;

  @Is(a.boolean().nullable())
  isEnabled?: boolean;

  /**
   * @description This is the model that stores password authentication data such as emails, hashed password, salt and other security related data
   */
  password: IPasswordAuthenticationStrategy;

  @Is(() => Schema.from(UserProfile))
  profile: UserProfile;

  @Is(an.array().of(a.string().oneOf(Object.values(UserRoles))))
  roles?: UserRoles[];

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
