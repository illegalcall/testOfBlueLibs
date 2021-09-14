/** @overridable */
import { IRoute } from "@bluelibs/x-ui";
import * as React from "react";
import { TodoListList } from "../components/List/TodoListList";
import { TodoListCreate } from "../components/Create/TodoListCreate";
import { TodoListEdit } from "../components/Edit/TodoListEdit";
import { TodoListView } from "../components/View/TodoListView";

import { SettingFilled } from "@ant-design/icons";

export const TODO_LIST_LIST: IRoute = {
  path: "/admin/todo-list",
  component: TodoListList,
  menu: {
    key: "TODO_LIST_LIST",
    label: "management.todo_list.menu.title",
    icon: SettingFilled,
  },
};

export const TODO_LIST_CREATE: IRoute = {
  path: "/admin/todo-list/create",
  component: TodoListCreate,
};

export const TODO_LIST_EDIT: IRoute<{ id: string }> = {
  path: "/admin/todo-list/:id/edit",
  component: TodoListEdit,
};

export const TODO_LIST_VIEW: IRoute<{ id: string }> = {
  path: "/admin/todo-list/:id/view",
  component: TodoListView,
};
