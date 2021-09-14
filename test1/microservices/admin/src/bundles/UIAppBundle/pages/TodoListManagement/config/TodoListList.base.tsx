/** @overridable */
import { notification } from "antd";
import { SmileOutlined } from "@ant-design/icons";
import { XFormElementType, XList, XForm } from "@bluelibs/x-ui-admin";
import { Routes } from "@bundles/UIAppBundle";
import { Service } from "@bluelibs/core";
import { IComponents, XRouter, use, QueryBodyType } from "@bluelibs/x-ui";
import * as Ant from "antd";
import {
  TodoList,
  UsersCollection,
  TodoListCollection,
} from "@bundles/UIAppBundle/collections";

@Service({ transient: true })
export class TodoListList extends XList<TodoList> {
  build() {
    const { UIComponents, router } = this;
    const { t } = this.i18n;

    this.add([
      {
        id: "profile.firstName",
        title: t("management.todo_list.fields.profile.firstName"),
        key: "management.todo_list.fields.profile.firstName",
        dataIndex: ["profile", "firstName"],
        sorter: true,
        render: (value, model) => {
          const props = {
            type: "string",
            value,
          };
          return <UIComponents.AdminListItemRenderer {...props} />;
        },
      },
      {
        id: "profile.lastName",
        title: t("management.todo_list.fields.profile.lastName"),
        key: "management.todo_list.fields.profile.lastName",
        dataIndex: ["profile", "lastName"],
        sorter: true,
        render: (value, model) => {
          const props = {
            type: "string",
            value,
          };
          return <UIComponents.AdminListItemRenderer {...props} />;
        },
      },
      {
        id: "isEnabled",
        title: t("management.todo_list.fields.isEnabled"),
        key: "management.todo_list.fields.isEnabled",
        dataIndex: ["isEnabled"],
        sorter: true,
        render: (value, model) => {
          const props = {
            type: "boolean",
            value,
          };
          return <UIComponents.AdminListItemRenderer {...props} />;
        },
      },
      {
        id: "createdAt",
        title: t("management.todo_list.fields.createdAt"),
        key: "management.todo_list.fields.createdAt",
        dataIndex: ["createdAt"],
        sorter: true,
        render: (value, model) => {
          const props = {
            type: "date",
            value,
          };
          return <UIComponents.AdminListItemRenderer {...props} />;
        },
      },
      {
        id: "updatedAt",
        title: t("management.todo_list.fields.updatedAt"),
        key: "management.todo_list.fields.updatedAt",
        dataIndex: ["updatedAt"],
        sorter: true,
        render: (value, model) => {
          const props = {
            type: "date",
            value,
          };
          return <UIComponents.AdminListItemRenderer {...props} />;
        },
      },
      {
        id: "taskName",
        title: t("management.todo_list.fields.taskName"),
        key: "management.todo_list.fields.taskName",
        dataIndex: ["taskName"],
        sorter: true,
        render: (value, model) => {
          const props = {
            type: "string",
            value,
          };
          return <UIComponents.AdminListItemRenderer {...props} />;
        },
      },
      {
        id: "isCompleted",
        title: t("management.todo_list.fields.isCompleted"),
        key: "management.todo_list.fields.isCompleted",
        dataIndex: ["isCompleted"],
        sorter: true,
        render: (value, model) => {
          const props = {
            type: "boolean",
            value,
          };
          return <UIComponents.AdminListItemRenderer {...props} />;
        },
      },
      {
        id: "createdBy",
        title: t("management.todo_list.fields.createdBy"),
        key: "management.todo_list.fields.createdBy",
        dataIndex: ["createdBy"],
        sorter: true,
        render: (value, model) => {
          const props = {
            type: "relation",
            value,
            relation: {
              path: router.path(Routes.USERS_VIEW, {
                params: {
                  id: value?._id,
                },
              }),
              dataIndex: "fullName",
            },
          };
          return <UIComponents.AdminListItemRenderer {...props} />;
        },
      },
      {
        id: "updatedBy",
        title: t("management.todo_list.fields.updatedBy"),
        key: "management.todo_list.fields.updatedBy",
        dataIndex: ["updatedBy"],
        sorter: true,
        render: (value, model) => {
          const props = {
            type: "relation",
            value,
            relation: {
              path: router.path(Routes.USERS_VIEW, {
                params: {
                  id: value?._id,
                },
              }),
              dataIndex: "fullName",
            },
          };
          return <UIComponents.AdminListItemRenderer {...props} />;
        },
      },
    ]);
  }

  static getSortMap() {
    return {
      createdBy: "createdBy.fullName",
      updatedBy: "updatedBy.fullName",
    };
  }

  static getRequestBody(): QueryBodyType<TodoList> {
    return {
      _id: 1,
      profile: {
        firstName: 1,
        lastName: 1,
      },
      isEnabled: 1,
      createdAt: 1,
      updatedAt: 1,
      taskName: 1,
      isCompleted: 1,
      createdBy: {
        _id: 1,
        fullName: 1,
      },
      createdById: 1,
      updatedBy: {
        _id: 1,
        fullName: 1,
      },
      updatedById: 1,
    };
  }
}
