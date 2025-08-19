import {
  BackLinkWrapper,
  LoginLink,
  PlainText1,
  PlainText2,
 StyledIconArrowLeft,
} from "../forgotpassword/ForgotPasswordStyles";
import IconArrowLeft from "../../../assets/svg/ArrowLeft.svg";

export default function BackToLogin() {
  return (
    <div>
      <LoginLink to="/login">
        <BackLinkWrapper>
          <StyledIconArrowLeft>
            <img src={IconArrowLeft}/>
          </StyledIconArrowLeft>
          <PlainText1>Back to</PlainText1>
          <PlainText2>Log in</PlainText2>
        </BackLinkWrapper>
      </LoginLink>
    </div>
  );
}
