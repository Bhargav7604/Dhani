import React from "react";
import AuthLayout from "../auth/AuthLayout";
import { StyledForm } from "../../../styles/FormStyles";
import { FormContainer } from "../loginscreen/LoginScreenStyles";
import { Heading } from "../auth/AuthLayoutStyles";
import { BackLinkContainer } from "../passwordreset/PasswordResetStyles";
import BackToLogin from "../backtologin/BackToLogin";

const PasswordResetSuccess: React.FC = () => {
  const imageSrc = "/path/to/success-image.jpg";

  return (
    <AuthLayout imageSrc={imageSrc}>
      <StyledForm>
        <FormContainer>
          <Heading>All done!</Heading>
          <Heading subHeading>Your password has been reset.</Heading>
          <BackLinkContainer>
            <BackToLogin />
          </BackLinkContainer>
        </FormContainer>
      </StyledForm>
    </AuthLayout>
  );
};

export default PasswordResetSuccess;
