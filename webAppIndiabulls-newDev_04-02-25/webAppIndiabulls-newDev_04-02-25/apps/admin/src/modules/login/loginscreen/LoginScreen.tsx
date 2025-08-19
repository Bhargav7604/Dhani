import React, { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z, ZodErrorMap } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { setToken } from "../../login/loginscreen/state-slice/AuthSlice";
import { AdminLoginPostService } from "./services/AppServices";
import ToasterComp from "../../sharedComponents/toasterdialog/ToasterComp";
import { useDispatch } from "react-redux";
import { LoginFormFields, loginSchema } from "./LoginFieldSpecs";
import { AdminStyledForm } from "../../../components/ui/GlobalStyles";
import { CustomButton, FormSubmitLink } from "../../../styles/FormStyles";
import AuthLayout from "../auth/AuthLayout";

import {
  FormContainer,
  ForgotPasswordContainer,
  FooterText,
  RememberMeContainer,
  RememberMeLabel,
  StyledCheckbox,
} from "./LoginScreenStyles";
import { Heading } from "../auth/AuthLayoutStyles";
import ShimmerSkeleton from "../../../components/ui/shimmers/ShimmerLoginFlowSkeleton";
import AdminInputComp from "../../../components/admininput/AdminInputComp";

const LoginScreen: React.FC = () => {
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
  } = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
  });
  const customErrorMap: ZodErrorMap = (issue, _ctx) => {
    if (issue.code === "invalid_type" && issue.expected === "string") {
      return { message: "field is required" };
    }
    return { message: issue.message || "Invalid input" };
  };

  z.setErrorMap(customErrorMap);
  type LoginSchemaZod = z.infer<typeof loginSchema>;

  const onSubmit: SubmitHandler<LoginSchemaZod> = async (data) => {
    try {
      const config = { payload: data };
      const response = await AdminLoginPostService(config);

      if (response.success === true) {
        sessionStorage.setItem("token", response.data.jwt);
        dispatch(setToken(response.data.jwt));
        setToaster({ status: true, message: "Login successfull" });
        navigate("/strategies/manage");
      } else {
        setError("password", {
          type: "manual",
          message: response.message || "Invalid email or password",
        });
      }
    } catch (error: any) {
      setToaster({ status: false, message: "an error occured from server" });
    }
  };

  useEffect(() => {
    setTimeout(() => setIsLoading(false));
    sessionStorage.clear();
  }, []);

  return (
    <AuthLayout imageSrc="/path/to/login-image.jpg">
      {toaster && (
        <ToasterComp
          status={toaster.status}
          message={toaster.message}
          duration={2000}
          onClose={() => setToaster(null)}
        />
      )}
      {isLoading ? (
        <ShimmerSkeleton count={4} height={40} />
      ) : (
        <AdminStyledForm onSubmit={handleSubmit(onSubmit)}>
          <FormContainer>
            <Heading>Welcome</Heading>
            {LoginFormFields.map((field) => {
              return (
                <div key={field.name} style={{ width: "100%" }}>
                  {/* {field.type === "select" ? (
                    <AdminSelectComp
                      name={field.name}
                      control={control}
                      heading={field.heading}
                       options={field.options || []}
                      placeholder={field.placeholder}
                      error={
                        errors[field.name as keyof z.infer<typeof loginSchema>]
                          ?.message
                      }
                    />
                  ) : ( */}
                  <AdminInputComp
                    name={field.name}
                    control={control}
                    heading={field.heading}
                    type={field.type}
                    placeholder={field.placeholder}
                    error={
                      errors[field.name as keyof z.infer<typeof loginSchema>]
                        ?.message
                    }
                  />
                  {/* ) */}
                  {/* } */}
                </div>
              );
            })}

            <ForgotPasswordContainer>
              <RememberMeContainer>
                <StyledCheckbox color="primary" />
                <RememberMeLabel>Remember Me</RememberMeLabel>
              </RememberMeContainer>
              <FormSubmitLink to="/forgot-password">
                Forgot Password?
              </FormSubmitLink>
            </ForgotPasswordContainer>

            <CustomButton $profile fullWidth variant="contained" type="submit">
              Sign in
            </CustomButton>
            <FooterText variant="body2">© 2024 ALL RIGHTS RESERVED</FooterText>
          </FormContainer>
        </AdminStyledForm>
      )}
    </AuthLayout>
  );
};

export default LoginScreen;

// import React, { useState, useEffect } from "react";
// import { useForm, SubmitHandler } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
// import { z, ZodErrorMap } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { setToken } from "../../login/loginscreen/state-slice/AuthSlice";
// // import { AdminLoginPostService } from "./services/AppServices";
// import ToasterComp from "../../sharedComponents/toasterdialog/ToasterComp";
// import { useDispatch } from "react-redux";
// import { LoginFormFields, loginSchema } from "./LoginFieldSpecs";
// import { AdminStyledForm } from "../../../components/ui/GlobalStyles";
// import { CustomButton, FormSubmitLink } from "../../../styles/FormStyles";
// import AuthLayout from "../auth/AuthLayout";

// import {
//   FormContainer,
//   ForgotPasswordContainer,
//   FooterText,
//   RememberMeContainer,
//   RememberMeLabel,
//   StyledCheckbox,
// } from "./LoginScreenStyles";
// import { Heading } from "../auth/AuthLayoutStyles";
// // import AdminSelectComp from "../../../components/adminselect/AdminSelectComp";
// import ShimmerSkeleton from "../../../components/ui/shimmers/ShimmerLoginFlowSkeleton";
// import AdminInputComp from "../../../components/admininput/AdminInputComp";

// const LoginScreen: React.FC = () => {
//   const [isLoading, setIsLoading] = useState(true);
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const [toaster, setToaster] = useState<{
//     status: boolean;
//     message: string;
//   } | null>(null);
//   const {
//     handleSubmit,
//     control,
//     formState: { errors },
//     setError,
//   } = useForm<z.infer<typeof loginSchema>>({
//     resolver: zodResolver(loginSchema),
//   });
//   const customErrorMap: ZodErrorMap = (issue, _ctx) => {
//     if (issue.code === "invalid_type" && issue.expected === "string") {
//       return { message: "field is required" };
//     }
//     return { message: issue.message || "Invalid input" };
//   };

//   z.setErrorMap(customErrorMap);
//   type LoginSchemaZod = z.infer<typeof loginSchema>;

//   // const onSubmit: SubmitHandler<LoginSchemaZod> = async (data) => {
//   //   try {
//   //     const config = { payload: data };
//   //     const response = await AdminLoginPostService(config);
//   //     const token = "text@123";
//   //     localStorage.setItem("token", token);
//   //     if (response.success) {
//   //       localStorage.setItem("token", token);
//   //       dispatch(setToken(token));
//   //       setToaster({ status: true, message: "Login successfull" });
//   //       setTimeout(() => navigate("/strategies/manage"), 1000);
//   //       console.log("mock token stored ", token);
//   //     } else {
//   //       setError("password", {
//   //         type: "manual",
//   //         message: response.message || "Invalid email or password",
//   //       });
//   //     }
//   //   } catch (error: any) {
//   //     setToaster({ status: false, message: "an error occured from server" });
//   //   }
//   // };
//   const onSubmit: SubmitHandler<LoginSchemaZod> = async (data) => {
//     try {
//       // 🔐 Hardcoded login credentials
//       const hardcodedEmail = "Rajesh@gmail.com";
//       const hardcodedPassword = "Rajesh@123";

//       if (
//         data.username === hardcodedEmail &&
//         data.password === hardcodedPassword
//       ) {
//         const token = "text@123";

//         localStorage.setItem("token", token);
//         dispatch(setToken(token));
//         setToaster({ status: true, message: "Login successful" });
//          navigate("/strategies/manage");

//       } else {
//         // ❌ Invalid credentials
//         setError("password", {
//           type: "manual",
//           message: "Invalid email or password",
//         });
//       }
//     } catch (error: any) {
//       setToaster({ status: false, message: "An error occurred from server" });
//     }
//   };

//   useEffect(() => {
//     setTimeout(() => setIsLoading(false));
//   }, []);

//   return (
//     <AuthLayout imageSrc="https://images.unsplash.com/photo-1651340981821-b519ad14da7c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
//       {toaster && (
//         <ToasterComp
//           status={toaster.status}
//           message={toaster.message}
//           duration={2000}
//           onClose={() => setToaster(null)}
//         />
//       )}
//       {isLoading ? (
//         <ShimmerSkeleton count={4} height={40} />
//       ) : (
//         <div style={{width:"350px"}}>
//         <AdminStyledForm onSubmit={handleSubmit(onSubmit)}>
//           <FormContainer>
//             <Heading>Welcome</Heading>
//             {LoginFormFields.map((field) => {
//               return (
//                 <div key={field.name} style={{ width: "100%" }}>

//                     <AdminInputComp
//                       name={field.name}
//                       control={control}
//                       heading={field.heading}
//                       type={field.type}
//                       placeholder={field.placeholder}
//                       error={
//                         errors[field.name as keyof z.infer<typeof loginSchema>]
//                           ?.message
//                       }
//                     />

//                 </div>
//               );
//             })}

//             <ForgotPasswordContainer>
//               <RememberMeContainer>
//                 <StyledCheckbox color="primary" />
//                 <RememberMeLabel>Remember Me</RememberMeLabel>
//               </RememberMeContainer>
//               <FormSubmitLink to="/forgot-password">
//                 Forgot Password?
//               </FormSubmitLink>
//             </ForgotPasswordContainer>

//             <CustomButton profile fullWidth variant="contained" type="submit">
//               Sign in
//             </CustomButton>
//             <FooterText variant="body2">© 2024 ALL RIGHTS RESERVED</FooterText>
//           </FormContainer>
//         </AdminStyledForm>
//         </div>
//       )}
//     </AuthLayout>
//   );
// };

// export default LoginScreen;
