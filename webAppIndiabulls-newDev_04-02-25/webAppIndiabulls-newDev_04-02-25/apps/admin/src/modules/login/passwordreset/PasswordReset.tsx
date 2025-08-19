import React, { useRef, useState, useEffect } from "react";
import AuthLayout from "../auth/AuthLayout";
import { CustomButton } from "../../../styles/FormStyles";
import {
  ResendLink,
  OTPContainer,
  OTPInput,
  ErrorOtpMsg,
} from "./PasswordResetStyles";
import {
  Heading,
  StyledSpan,
  StyledSubHeading,
} from "../auth/AuthLayoutStyles";
import { Link, useNavigate } from "react-router-dom";
import { FormContainer } from "../loginscreen/LoginScreenStyles";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { AdminStyledForm } from "../../../components/ui/GlobalStyles";
import { OtpPostService } from "./services/AppServices";
import { ForgotEmailPostService } from "../forgotpassword/services/AppServices";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/Store";
import { OtpPostProps } from "./services/AppServiceTypes";
import ToasterComp from "../../sharedComponents/toasterdialog/ToasterComp";
import BackToLogin from "../backtologin/BackToLogin";
import { setEmail } from "../forgotpassword/state-slice/EmailSlice";
import ShimmerSkeleton from "../../../components/ui/shimmers/ShimmerLoginFlowSkeleton";

const otpSchema = z.object({
  otp: z
    .array(z.string().regex(/^\d$/, "Must be a number").min(1, "Required"))
    .length(6),
});

type OtpSchemaZod = z.infer<typeof otpSchema>;

const PasswordReset: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const imageSrc = "/path/to/password-reset-image.jpg";
  const storedEmail = useSelector((state: RootState) => state.emailData.email);
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
    setError,
  } = useForm<OtpSchemaZod>({
    resolver: zodResolver(otpSchema),
    defaultValues: {
      otp: ["", "", "", "", "", ""],
    },
  });

  const otpRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [toasterStatus, setToasterStatus] = useState<boolean | null>(null);
  const [toasterMessage, setToasterMessage] = useState<string>("");

  const onSubmit: SubmitHandler<OtpSchemaZod> = async (data) => {
    try {
      const OtpString = data.otp.join("");
      const config: OtpPostProps = {
        payload: { email: storedEmail || "", otp: OtpString },
      };
      const response = await OtpPostService(config);

      if (response.success) {
        setToasterStatus(true);
        setToasterMessage("OTP verified successfully!");
        setTimeout(() => navigate("/set-new-password"), 1000);
      } else {
        const errorMessage =
          response.errors?.[0]?.message || "Invalid OTP. Please try again.";
        setToasterStatus(false);
        setToasterMessage(errorMessage);
      }
    } catch (error) {
      setToasterStatus(false);
      setToasterMessage("An unexpected error occurred. Please try again.");
      console.error("Error during OTP verification:", error);
    }
  };

  const handleKeyDown = (
    index: number,
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    const { key } = event;
    if (key === "Backspace" && index > 0 && !otpRefs.current[index]?.value) {
      otpRefs.current[index - 1]?.focus();
    }
  };

  const HandlePost = async () => {
    if (!storedEmail) {
      setToasterStatus(false);
      setToasterMessage("Email is required to resend OTP.");
      return;
    } else {
      setToasterStatus(true);
      setToasterMessage("OTP sent successfully");
    }
    try {
      const config = { payload: { email: storedEmail } };
      const response = await ForgotEmailPostService(config);
      if (response.status === true) {
        dispatch(setEmail(storedEmail));
        setToasterStatus(true);
        setToasterMessage("OTP sent successfully!");
      }
      reset();
    } catch (error) {
      setToasterStatus(false);
      setToasterMessage("An error occurred while resending OTP.");
      setError("otp", {
        type: "manual",
        message: "Invalid otp",
      });
    }
  };
  useEffect(() => {
    setTimeout(() => setIsLoading(false));
  }, []);
  return (
    <AuthLayout imageSrc={imageSrc}>
      {toasterStatus !== null && (
        <ToasterComp
          status={toasterStatus}
          message={toasterMessage}
          duration={2000}
          onClose={() => setToasterStatus(null)}
        />
      )}

      {isLoading ? (
        <ShimmerSkeleton count={2} height={40} />
      ) : (
        <AdminStyledForm onSubmit={handleSubmit(onSubmit)}>
          <FormContainer>
            <Heading>Password reset</Heading>
            <StyledSubHeading>
              sent a code to <StyledSpan color>{storedEmail}</StyledSpan>
            </StyledSubHeading>
            <OTPContainer>
              {Array.from({ length: 6 }).map((_, index) => (
                <Controller
                  key={index}
                  name={`otp.${index}`}
                  control={control}
                  render={({ field: { onChange, value, ref } }) => (
                    <OTPInput
                      type="text"
                      inputMode="numeric"
                      value={value}
                      inputRef={(input) => {
                        ref(input);
                        otpRefs.current[index] = input;
                      }}
                      onChange={(e) => {
                        const input = e.target as HTMLInputElement;
                        if (/^\d?$/.test(input.value)) {
                          onChange(input.value);
                          if (input.value && index < 5) {
                            otpRefs.current[index + 1]?.focus();
                          }
                        }
                      }}
                      onKeyDown={(e) =>
                        handleKeyDown(
                          index,
                          e as React.KeyboardEvent<HTMLInputElement>
                        )
                      }
                      inputProps={{ maxLength: 1 }}
                      hasValue={!!value}
                      error={!!errors.otp?.[index]?.message}
                    />
                  )}
                />
              ))}
              {errors.otp && (
                <ErrorOtpMsg>Please enter a valid 6-digit OTP</ErrorOtpMsg>
              )}
            </OTPContainer>

            <CustomButton fullWidth variant="contained" type="submit" $profile>
              Continue
            </CustomButton>

            <ResendLink>
              Didn't receive the OTP?{" "}
              <Link to="">
                <StyledSpan color onClick={HandlePost}>
                  Click to resend
                </StyledSpan>
              </Link>
            </ResendLink>

            <BackToLogin />
          </FormContainer>
        </AdminStyledForm>
      )}
    </AuthLayout>
  );
};

export default PasswordReset;
