/** @overridable */
import { notification } from "antd";
import { XFormElementType, XList, XForm } from "@bluelibs/x-ui-admin";
import { Service } from "@bluelibs/core";
import { IComponents, XRouter, use } from "@bluelibs/x-ui";
import * as Ant from "antd";
import {
  TodoList,
  UsersCollection,
  TodoListCollection,
} from "@bundles/UIAppBundle/collections";

@Service({ transient: true })
export class TodoListListFiltersForm extends XForm {
  build() {
    const { UIComponents } = this;
    const { t } = this.i18n;

    this.add([
      {
        id: "profile",
        label: t("management.todo_list.fields.profile"),
        name: ["profile"],
        columns: true,
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
        id: "createdAt",
        label: t("management.todo_list.fields.createdAt"),
        name: ["createdAt"],
        render: (props) => (
          <Ant.Form.Item {...props}>
            <Ant.DatePicker.RangePicker />
          </Ant.Form.Item>
        ),
      },

      {
        id: "updatedAt",
        label: t("management.todo_list.fields.updatedAt"),
        name: ["updatedAt"],
        tooltip: t("management.todo_list.fields.updatedAt_description"),
        render: (props) => (
          <Ant.Form.Item {...props}>
            <Ant.DatePicker.RangePicker />
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

      {
        id: "createdById",
        label: t("management.todo_list.fields.createdBy"),
        name: ["createdById"],
        tooltip: t("management.todo_list.fields.createdBy_description"),
        render: (props) => (
          <Ant.Form.Item {...props}>
            <UIComponents.RemoteSelect
              collectionClass={UsersCollection}
              field="fullName"
              placeholder="Please select an option"
              mode="multiple"
            />
          </Ant.Form.Item>
        ),
      },

      {
        id: "updatedById",
        label: t("management.todo_list.fields.updatedBy"),
        name: ["updatedById"],
        tooltip: t("management.todo_list.fields.updatedBy_description"),
        render: (props) => (
          <Ant.Form.Item {...props}>
            <UIComponents.RemoteSelect
              collectionClass={UsersCollection}
              field="fullName"
              placeholder="Please select an option"
              mode="multiple"
            />
          </Ant.Form.Item>
        ),
      },
    ]);
  }
}
