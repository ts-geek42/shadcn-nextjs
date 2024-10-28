import React from "react";
import FormFieldLayout, { FormFieldLayoutProps } from "./FormFieldLayout";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

interface FormFieldRadioButtonProps extends FormFieldLayoutProps {
  value: string;
  options: Array<any>;
}

const FormFieldRadioButton = ({
  name,
  value,
  options,
  ...props
}: FormFieldRadioButtonProps) => {
  return (
    <FormFieldLayout name={name} {...props}>
      <RadioGroup>{options?.map}</RadioGroup>
      <RadioGroupItem value={value} />
    </FormFieldLayout>
  );
};

export default FormFieldRadioButton;
