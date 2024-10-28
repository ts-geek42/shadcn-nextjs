import React from "react";
import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input, InputProps } from "../ui/input";

export interface FormFieldLayoutProps extends Omit<InputProps, "children"> {
  name: string;
  label?: string;
  placeholder?: string;
  description?: string;
  children?: React.ReactNode | ((field: any) => React.ReactNode);
}

const FormFieldLayout = ({
  name,
  label,
  description,
  children,
  ...props
}: FormFieldLayoutProps) => {
  const { control } = useFormContext();
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="w-full">
          <FormLabel>{label}</FormLabel>
          <FormControl>
            {(typeof children === "function" ? children(field) : children) || (
              <Input {...props} {...field} />
            )}
          </FormControl>
          <FormDescription>{description}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormFieldLayout;
