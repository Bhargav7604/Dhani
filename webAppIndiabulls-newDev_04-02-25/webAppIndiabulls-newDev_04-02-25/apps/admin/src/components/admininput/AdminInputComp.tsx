import { forwardRef, useState } from "react";
import { Controller } from "react-hook-form";
import { IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  AdminFormError,
  AdminInput,
  AdminInputTextHeader,
} from "../../components/ui/GlobalStyles";
import { ColumnFlexDiv } from "../../../../user/src/components/ui/GlobalStyles";

interface AdminInputCompProps {
  name: string;
  control: any;
  heading: string;
  type: string;
  placeholder: string;
  disabled?: boolean;
  error?: string;
  rules?: object;
  [key: string]: any;
}

const AdminInputComp = forwardRef<HTMLInputElement, AdminInputCompProps>(
  ({
    name,
    control,
    heading,
    type,
    placeholder,
    disabled = false,
    error,
    rules,
    ...rest
  }) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword((prev) => !prev);
    };

    const isPasswordField = type === "password";

    return (
      <ColumnFlexDiv $flexstart>
        <AdminInputTextHeader>{heading}</AdminInputTextHeader>
        <div style={{ position: "relative", width: "100%" }}>
          <Controller
            name={name}
            control={control}
            rules={rules}
            render={({ field }) => (
              <AdminInput
                type={isPasswordField && showPassword ? "text" : type}
                placeholder={placeholder}
                disabled={disabled}
                // padding="10px 16px"
                {...field}
                {...rest}
                style={{ paddingRight: "40px" }}
              />
            )}
          />
          {isPasswordField && (
            <IconButton
              onClick={togglePasswordVisibility}
              style={{
                position: "absolute",
                right: "8px",
                top: "45%",
                transform: "translateY(-50%)",
              }}
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          )}
        </div>
        {error && <AdminFormError adminselect={false}>{error}</AdminFormError>}
      </ColumnFlexDiv>
    );
  }
);

export default AdminInputComp;
