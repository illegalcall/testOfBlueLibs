import { IPasswordAuthenticationStrategy } from "@bluelibs/password-bundle";
import { Schema, Is, a, an } from "@bluelibs/validator-bundle";
import { User as BaseUser } from "./User.model.base";
export { UserProfile } from "./User.model.base";
export { UserRoles } from "./enums/UserRoles.enum";

@Schema()
export class User extends BaseUser {
  // You can extend the base here
  password: IPasswordAuthenticationStrategy;
  @Is(a.boolean().nullable())
  isEnabled: boolean;
  @Is(a.date().nullable())
  createdAt: Date;
}
