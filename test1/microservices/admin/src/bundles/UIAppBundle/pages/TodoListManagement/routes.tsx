import { IRoute } from "@bluelibs/x-ui";
import "./i18n";

import {
  TODO_LIST_LIST as BASE_TODO_LIST_LIST,
  TODO_LIST_CREATE as BASE_TODO_LIST_CREATE,
  TODO_LIST_EDIT as BASE_TODO_LIST_EDIT,
  TODO_LIST_VIEW as BASE_TODO_LIST_VIEW,
} from "./config/routes";

export const TODO_LIST_LIST: IRoute = {
  ...BASE_TODO_LIST_LIST,
};

export const TODO_LIST_CREATE: IRoute = {
  ...BASE_TODO_LIST_CREATE,
};

export const TODO_LIST_EDIT: IRoute = {
  ...BASE_TODO_LIST_EDIT,
};

export const TODO_LIST_VIEW: IRoute = {
  ...BASE_TODO_LIST_VIEW,
};
