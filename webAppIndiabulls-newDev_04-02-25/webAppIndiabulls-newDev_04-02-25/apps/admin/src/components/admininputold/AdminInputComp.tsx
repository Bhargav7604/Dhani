import { forwardRef } from "react";
import {
  AdminFormError,
  AdminInput,
  AdminInputTextHeader,
} from "../ui/GlobalStyles";
import { ColumnFlexDiv } from "../../../../user/src/components/ui/GlobalStyles";

interface AdminInputCompProps {
  heading: string;
  type: string;
  placeholder: string;
  disabled?: boolean;
  error?: string;
  [key: string]: any;
}

const AdminInputComp = forwardRef<HTMLInputElement, AdminInputCompProps>(
  ({ heading, type, placeholder, disabled = false, error, ...rest }, ref) => {
    return (
      <ColumnFlexDiv $flexstart>
        <AdminInputTextHeader>{heading}</AdminInputTextHeader>
        <AdminInput
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          padding="8px 16px"
          ref={ref}
          {...rest}
        />
        {error && <AdminFormError adminselect>{error}</AdminFormError>}
      </ColumnFlexDiv>
    );
  }
);

export default AdminInputComp;
