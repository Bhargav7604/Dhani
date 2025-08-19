import React from "react";
import {
  AdminStyledForm,
  FlexProfileDiv,
  ProfileDiv,
  StyledSubTitle,
} from "../../components/ui/GlobalStyles";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { CustomButton } from "../../styles/FormStyles";
import { ProfilePasswordFormFields } from "./PasswordSpecs";
import AdminInputComp from "../../components/admininput/AdminInputComp";

const accountSchema = z
  .object({
    oldPassword: z.string().min(8, "Password must be at least 8 characters"),
    newPassword: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" })
      .regex(/[A-Z]/, { message: "Must contain at least one uppercase letter" })
      .regex(/[a-z]/, { message: "Must contain at least one lowercase letter" })
      .regex(/\d/, { message: "Must contain at least one number" })
      .regex(/[^a-zA-Z0-9]/, {
        message: "Must contain at least one special character",
      }),
    reenterPassword: z.string().min(8, "Password must match the above pattern"),
  })
  .refine((data) => data.newPassword === data.reenterPassword, {
    path: ["reenterPassword"],
    message: "Passwords do not match",
  });

type accountSchemaZod = z.infer<typeof accountSchema>;

const PasswordInfo: React.FC = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<accountSchemaZod>({
    resolver: zodResolver(accountSchema),
  });

  const onSubmit: SubmitHandler<accountSchemaZod> = async (data) => {
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        data
      );
      if (response.status === 201) {
        // console.log("Password updated successfully", response);
      } else {
        // console.log("Password update failed:", response);
      }
    } catch (error) {
      // console.error("Error during updating password", error);
    }
  };

  return (
    <ProfileDiv>
      <FlexProfileDiv $flexDirection>
        <StyledSubTitle>Update Password</StyledSubTitle>

        <AdminStyledForm onSubmit={handleSubmit(onSubmit)}>
          {ProfilePasswordFormFields.map((field) => (
            <AdminInputComp
              name={field.name}
              control={control}
              heading={field.heading}
              type={field.type}
              placeholder={field.placeholder}
              error={
                errors[field.name as keyof z.infer<typeof accountSchema>]
                  ?.message
              }
            />
          ))}

          <CustomButton
            fullWidth
            variant="contained"
            type="submit"
            $profile
            style={{ marginTop: "18px" }}
          >
            Update Password
          </CustomButton>
        </AdminStyledForm>
      </FlexProfileDiv>
    </ProfileDiv>
  );
};

export default PasswordInfo;
