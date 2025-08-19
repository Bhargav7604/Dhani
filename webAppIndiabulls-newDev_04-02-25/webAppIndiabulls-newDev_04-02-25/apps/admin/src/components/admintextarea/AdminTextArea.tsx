import { forwardRef } from "react";
import { Controller } from "react-hook-form";
import {
  AdminFormError,
  AdminInputTextHeader,
  AdminTextArea,
} from "../../components/ui/GlobalStyles";
import { ColumnFlexDiv } from "../../../../user/src/components/ui/GlobalStyles";

interface AdminTextAreaCompProps {
  name: string;
  control: any;
  heading: string;
  placeholder: string;
  disabled?: boolean;
  error?: string;
  rules?: object;
  [key: string]: any;
}



const AdminTextAreaComp = forwardRef<HTMLTextAreaElement, AdminTextAreaCompProps>(
  (
    {
      name,
      control,
      heading,
      placeholder,
      disabled = false,
      error,
      rules,
      ...rest
    },
    ref
  ) => {
    return (
      <ColumnFlexDiv $flexstart>
        <AdminInputTextHeader>{heading}</AdminInputTextHeader>
        <div style={{ position: "relative", width: "100%" }}>
          <Controller
            name={name}
            control={control}
            rules={rules}
            render={({ field }) => (
              <AdminTextArea
                placeholder={placeholder}
                disabled={disabled}
                {...field}
                {...rest}
                ref={ref}
              />
            )}
          />
        </div>
        {error && (
          <AdminFormError adminselect={false}>{error}</AdminFormError>
        )}
      </ColumnFlexDiv>
    );
  }
);

export default AdminTextAreaComp;
