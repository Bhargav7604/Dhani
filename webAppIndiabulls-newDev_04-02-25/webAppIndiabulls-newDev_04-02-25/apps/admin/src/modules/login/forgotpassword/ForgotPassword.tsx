import React, { useEffect } from "react";
import { CustomButton } from "../../../styles/FormStyles";
import AuthLayout from "../auth/AuthLayout";
import { Heading } from "../auth/AuthLayoutStyles";
import { CenteredBox } from "./ForgotPasswordStyles";
import { ForgotFormFields, forgotPasswordSchema } from "./ForgotPasswordSpecs";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { AdminStyledForm } from "../../../components/ui/GlobalStyles";
import { ForgotEmailPostService } from "./services/AppServices";
import { setEmail } from "./state-slice/EmailSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import ToasterComp from "../../sharedComponents/toasterdialog/ToasterComp";
import BackToLogin from "../backtologin/BackToLogin";
import ShimmerSkeleton from "../../../components/ui/shimmers/ShimmerLoginFlowSkeleton";
import AdminInputComp from "../../../components/admininput/AdminInputComp";

type ForgotPasswordSchemaZod = z.infer<typeof forgotPasswordSchema>;

const ForgotPassword: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [toaster, setToaster] = useState<{
    status: boolean;
    message: string;
  } | null>(null);
  const {
    handleSubmit,
    control,
    formState: { errors },
    setError,
  } = useForm<ForgotPasswordSchemaZod>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const onSubmit: SubmitHandler<ForgotPasswordSchemaZod> = async (data) => {
    // console.log(data);
    try {
      const config = { payload: data };
      const response = await ForgotEmailPostService(config);
      // console.log(response);

      if (response.success) {
        dispatch(setEmail(data.email));
        setToaster({
          status: true,
          message: "OTP sent successfully!",
        });
        setTimeout(() => {
          navigate("/otp");
        }, 1000);
      } else {
        setError("email", {
          type: "manual",
          message: response.errors.message || "Invalid email",
        });
      }
    } catch (error: any) {
      setToaster({
        status: false,
        message: "An error occurred from server",
      });
    }
  };
  useEffect(() => {
    setTimeout(() => setIsLoading(false));
  }, []);

  return (
    <AuthLayout imageSrc="/path/to/forgot-password-image.jpg">
      {toaster && (
        <ToasterComp
          status={toaster.status}
          message={toaster.message}
          duration={1000}
          onClose={() => setToaster(null)}
        />
      )}

      {isLoading ? (
        <ShimmerSkeleton count={2} height={40} />
      ) : (
        <AdminStyledForm onSubmit={handleSubmit(onSubmit)}>
          <Heading>Forgot your password?</Heading>
          <Heading subHeading>Enter your email to reset your password.</Heading>
          {ForgotFormFields.map((field) => (
            <AdminInputComp
              name={field.name}
              control={control}
              heading={field.heading}
              type={field.type}
              placeholder={field.placeholder}
              error={
                errors[field.name as keyof z.infer<typeof forgotPasswordSchema>]
                  ?.message
              }
            />
          ))}

          <CustomButton
            fullWidth={true}
            variant="contained"
            type="submit"
            $profile
          >
            Reset password
          </CustomButton>

          <CenteredBox>
            <BackToLogin />
          </CenteredBox>
        </AdminStyledForm>
      )}
    </AuthLayout>
  );
};

export default ForgotPassword;
