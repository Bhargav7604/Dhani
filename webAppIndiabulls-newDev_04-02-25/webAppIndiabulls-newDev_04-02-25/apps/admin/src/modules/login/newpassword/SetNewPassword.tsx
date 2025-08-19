import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../auth/AuthLayout";
import { BackLinkContainer, Textcase } from "./SetPasswordStyles";
import { CustomButton } from "../../../styles/FormStyles";
import { Heading } from "../auth/AuthLayoutStyles";
import PasswordStrengthIndicator from "./passwordStrengthIndicator";
import { FormContainer } from "../loginscreen/LoginScreenStyles";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { AdminStyledForm } from "../../../components/ui/GlobalStyles";
import {
  SetNewPasswordFormFields,
  setPasswordSchema,
} from "./SetNewPasswordSpecs";
import { SetNewPasswordService } from "./services/AppServices";
import { RootState } from "../../../store/Store";
import { useSelector } from "react-redux";
import BackToLogin from "../backtologin/BackToLogin";
import ShimmerSkeleton from "../../../components/ui/shimmers/ShimmerLoginFlowSkeleton";
import AdminInputComp from "../../../components/admininput/AdminInputComp";

type SetNewPasswordSchema = z.infer<typeof setPasswordSchema>;

const SetNewPassword: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();
  const [, setToasterConfig] = useState<{
    status: boolean;
    message: string;
  } | null>(null);

  const storeEmail = useSelector((state: RootState) => state.emailData.email);

  const {
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<SetNewPasswordSchema>({
    resolver: zodResolver(setPasswordSchema),
  });

  const newPassword = watch("password");

  const onSubmit = async (data: SetNewPasswordSchema) => {
    try {
      const config = {
        payload: {
          email: storeEmail,
          password: data.password,
          confirmPassword: data.confirmPassword,
        },
      };
      // console.log(config.payload);
      const response = await SetNewPasswordService(config);
      if (response.success) {
        navigate("/success");
      } else {
        // console.log("Response error");
      }
    } catch (error) {
      setToasterConfig({
        status: false,
        message: "Something went wrong, please try again.",
      });
    }
  };
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  return (
    <AuthLayout imageSrc="/path/to/set-new-password-image.jpg">
      {isLoading ? (
        <ShimmerSkeleton count={3} height={40} />
      ) : (
        <AdminStyledForm onSubmit={handleSubmit(onSubmit)}>
          <Heading>Set new password</Heading>
          <Heading subHeading>
            Choose a strong password to reset and secure your account
          </Heading>
          <FormContainer>
            {SetNewPasswordFormFields.map((field) => (
              <AdminInputComp
                key={field.name}
                name={field.name}
                control={control}
                heading={field.label}
                type={field.type}
                placeholder={field.placeholder}
                error={
                  errors[field.name as keyof SetNewPasswordSchema]?.message
                }
              />
            ))}

            <Textcase>
              Include uppercase, lowercase, number, and symbol
            </Textcase>
            <PasswordStrengthIndicator password={newPassword} />

            <CustomButton
              fullWidth
              variant="contained"
              type="submit"
              style={{ marginTop: "18px" }}
              $profile
            >
              Reset password
            </CustomButton>
          </FormContainer>
          <BackLinkContainer>
            <BackToLogin />
          </BackLinkContainer>
        </AdminStyledForm>
      )}
    </AuthLayout>
  );
};

export default SetNewPassword;
