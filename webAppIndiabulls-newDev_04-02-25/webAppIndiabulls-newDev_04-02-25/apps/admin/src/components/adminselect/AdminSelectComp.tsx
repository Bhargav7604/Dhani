// AdminSelectComp.tsx
import React from "react";
import { Controller } from "react-hook-form";
import { MenuItem } from "@mui/material";
import { CustomSelect } from "../../styles/FormStyles";
import { AdminFormError, AdminInputTextHeader } from "../ui/GlobalStyles";
import { ColumnFlexDiv } from "../../../../user/src/components/ui/GlobalStyles";
interface OptionType {
  key: string;
  val: string;
}
interface AdminSelectCompProps {
  name: string;
  control: any;
  options: OptionType[];
  placeholder: string;
  heading?: string;
  error?: string;
  customMargin?: string;
}

const AdminSelectComp: React.FC<AdminSelectCompProps> = ({
  name,
  control,
  options,
  heading,
  placeholder,
  error,
  customMargin,
}) => {
  return (
    <div style={{ width: "100%", margin: customMargin || "0" }}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <ColumnFlexDiv $flexstart>
            <AdminInputTextHeader>{heading}</AdminInputTextHeader>
            <CustomSelect {...field} fullWidth variant="outlined" displayEmpty>
              <MenuItem value="" disabled>
                {placeholder}
              </MenuItem>
              {options?.map((option, index) => (
                <MenuItem key={index} value={option.key}>
                  {option.val}
                </MenuItem>
              ))}
            </CustomSelect>
            {error && <AdminFormError adminselect>{error}</AdminFormError>}
          </ColumnFlexDiv>
        )}
      />
    </div>
  );
};

export default AdminSelectComp;
