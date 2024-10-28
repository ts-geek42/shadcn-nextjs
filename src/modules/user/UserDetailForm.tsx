"use client";
import { FormFieldLayout, FormFieldRadioButton } from "@/components/form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import React from "react";
import { useForm } from "react-hook-form";
import { UserDetails, userDetailSchema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";

const UserDetailForm = () => {
  const form = useForm<UserDetails>({
    resolver: zodResolver(userDetailSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });
  const handleSubmit = (values: UserDetails) => {
    console.log(values, "data");
  };
  return (
    <div className="p-10">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <FormFieldLayout label="Name" name="name" />
          <FormFieldLayout label="Email" name="email" type="email" />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default UserDetailForm;
