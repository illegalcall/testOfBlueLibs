/** @overridable */
import { XRouter, use, IComponents } from "@bluelibs/x-ui";
import { SmileOutlined } from "@ant-design/icons";
import * as Ant from "antd";
import { XFormElementType, XForm } from "@bluelibs/x-ui-admin";
import { Routes } from "@bundles/UIAppBundle";
import { Service, Inject } from "@bluelibs/core";
import { features } from "./features";

import {
  TodoList,
  UsersCollection,
  TodoListCollection,
} from "@bundles/UIAppBundle/collections";

@Service({ transient: true })
export class TodoListCreateForm extends XForm {
  @Inject(() => TodoListCollection)
  collection: TodoListCollection;

  build() {
    const { UIComponents } = this;
    const { t } = this.i18n;

    this.add([
      {
        id: "profile",
        label: t("management.todo_list.fields.profile"),
        name: ["profile"],
        required: true,
        nest: [
          {
            id: "firstName",
            label: t("management.todo_list.fields.profile.firstName"),
            name: ["profile", "firstName"],
            required: true,
            render: (props) => (
              <Ant.Form.Item {...props}>
                <Ant.Input />
              </Ant.Form.Item>
            ),
          },

          {
            id: "lastName",
            label: t("management.todo_list.fields.profile.lastName"),
            name: ["profile", "lastName"],
            required: true,
            render: (props) => (
              <Ant.Form.Item {...props}>
                <Ant.Input />
              </Ant.Form.Item>
            ),
          },
        ],
      },

      {
        id: "isEnabled",
        label: t("management.todo_list.fields.isEnabled"),
        name: ["isEnabled"],
        required: true,
        render: (props) => (
          <Ant.Form.Item {...props}>
            <Ant.Radio.Group>
              <Ant.Radio value={false} key={0}>
                No
              </Ant.Radio>
              <Ant.Radio value={true} key={1}>
                Yes
              </Ant.Radio>
            </Ant.Radio.Group>
          </Ant.Form.Item>
        ),
      },

      {
        id: "taskName",
        label: t("management.todo_list.fields.taskName"),
        name: ["taskName"],
        render: (props) => (
          <Ant.Form.Item {...props}>
            <Ant.Input />
          </Ant.Form.Item>
        ),
      },

      {
        id: "isCompleted",
        label: t("management.todo_list.fields.isCompleted"),
        name: ["isCompleted"],
        render: (props) => (
          <Ant.Form.Item {...props}>
            <Ant.Radio.Group>
              <Ant.Radio value={false} key={0}>
                No
              </Ant.Radio>
              <Ant.Radio value={true} key={1}>
                Yes
              </Ant.Radio>
            </Ant.Radio.Group>
          </Ant.Form.Item>
        ),
      },
    ]);
  }

  onSubmit(document: Partial<TodoList>): Promise<void> {
    const { t } = this.i18n;

    return this.collection
      .insertOne(document)
      .then(({ _id }) => {
        Ant.notification.success({
          message: t("generics.success"),
          description: t("management.todo_list.create_confirmation"),
          icon: <SmileOutlined />,
        });

        if (features.view) {
          return this.router.go(Routes.TODO_LIST_VIEW, {
            params: {
              id: _id,
            },
          });
        }
        if (features.list) {
          return this.router.go(Routes.TODO_LIST_LIST);
        }
        if (features.edit) {
          return this.router.go(Routes.TODO_LIST_EDIT, {
            params: {
              id: _id,
            },
          });
        }
      })
      .catch((err) => {
        Ant.notification.warn({
          message: t("generics.error"),
          description: t("generics.error_message"),
        });
      });
  }
}
