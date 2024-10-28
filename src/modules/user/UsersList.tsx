"use client";
import { AddUsers, GetUsers } from "@api/users/users";
import { FormFieldLayout } from "@components/form";
import { Button } from "@components/ui/button";
import { Form } from "@components/ui/form";
import React, { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";

const UsersList = () => {
  const [data, setData] = useState<any>();
  const form = useForm({ defaultValues: { users: [{ name: "", email: "" }] } });
  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "users",
  });
  const getUserData = async () => {
    const userData = await GetUsers();
    console.log(userData, "UserData");
    setData(userData);
  };

  return (
    <div className="p-10">
      <Form {...form}>
        <form onSubmit={form.handleSubmit((data) => console.log(data))}>
          <div className="flex items-center justify-between">
            <Button
              type="button"
              onClick={() => {
                append({ name: "", email: "" });
              }}
            >
              Add
            </Button>{" "}
            <Button
              type="button"
              onClick={async () => {
                append({ name: "", email: "" });
                await AddUsers(form.getValues().users);
                await getUserData();
              }}
            >
              Save
            </Button>
          </div>
          {fields.reverse().map((item, index) => (
            <div
              key={item.id}
              className=" flex gap-5	w-full justify-around	items-center"
            >
              <FormFieldLayout
                name={`users.${index}.id`}
                defaultValue={item?.id}
                readOnly
              />
              <FormFieldLayout name={`users.${index}.name`} />
              <FormFieldLayout name={`users.${index}.email`} type="email" />
              <Button type="button" onClick={() => remove(index)}>
                Delete
              </Button>
            </div>
          ))}
        </form>
      </Form>
    </div>
  );
};
export default UsersList;
