import React, { useState, useEffect } from "react";
import krishna from "../../../public/image/krishna.png";
// import camera from "../../../public/svg/camera.svg";
import {
  AdminStyledForm,
  FlexProfileDiv,
  ProfileDiv,
  StyledSubTitle,
} from "../../components/ui/GlobalStyles";
import {
  StyledEditText,
  StyledImage,
  // StyledCamImg,
  PostionDiv,
} from "./ProfilePageStyles";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { ProfileAccFormFields } from "./ProfilePageSpecs";
import { CustomButton } from "../../styles/FormStyles";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/Store";
import { updateUserInfo } from "./state-slice/userSlice";
import AdminInputComp from "../../components/admininput/AdminInputComp";

const accountSchema = z.object({
  fullName: z
    .string()
    .min(4, { message: "Full name must have at least 4 letters" }),
  dateOfBirth: z.string(),
  role: z.string(),
  email: z.string().email({ message: "Invalid email address" }),
  mobileNumber: z.string(),
});

type accountSchemaZod = z.infer<typeof accountSchema>;

const AccountInfo: React.FC = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [animate, setAnimate] = useState(false);
  const {
    handleSubmit,
    control,
    formState: { errors },
    setFocus,
    setValue,
  } = useForm<accountSchemaZod>({
    resolver: zodResolver(accountSchema),
  });

  const dispatch = useDispatch();

  const userData = useSelector((state: RootState) => state.userData);

  useEffect(() => {
    if (!isEditMode && userData) {
      setValue("fullName", userData.fullName);
      setValue("role", userData.role);
      setValue("email", userData.email);
      setValue("mobileNumber", userData.mobileNumber);
    }
  }, [isEditMode, setValue, userData]);

  const handleEditClick = () => {
    setIsEditMode(true);
    setAnimate(true);
    setTimeout(() => setAnimate(false), 400);
    setFocus("fullName");
  };

  const onSubmit: SubmitHandler<accountSchemaZod> = async (data) => {
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        data
      );
      if (response.status === 201) {
        // console.log("Profile updated:", response);
        dispatch(updateUserInfo(data));
      } else {
        // console.log("Profile update failed:", response);
      }
    } catch (error) {
      // console.error("Error during profile update", error);
    }
  };

  return (
    <ProfileDiv>
      <FlexProfileDiv $flexDirection>
        <FlexProfileDiv $flexDirection>
          <StyledSubTitle>Account Information</StyledSubTitle>
          <StyledEditText animate={animate} onClick={handleEditClick}>
            Edit your profile
          </StyledEditText>
        </FlexProfileDiv>
        <PostionDiv>
          <StyledImage src={krishna} alt="Profile Picture" />
          {/* <StyledCamImg src={camera} alt="Camera Icon" /> */}
        </PostionDiv>

        <AdminStyledForm onSubmit={handleSubmit(onSubmit)}>
          {ProfileAccFormFields.map((field) => (
            <AdminInputComp
              name={field.name}
              control={control}
              heading={field.heading}
              type={field.type}
              placeholder={field.placeholder}
              disabled={
                !isEditMode ||
                (field.name !== "fullName" && field.name !== "dateOfBirth")
              }
              style={{
                cursor:
                  !isEditMode ||
                  (field.name !== "fullName" && field.name !== "dateOfBirth")
                    ? "not-allowed"
                    : "auto",
              }}
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
            disabled={!isEditMode}
            style={{ marginTop: "18px" }}
          >
            Update Now
          </CustomButton>
        </AdminStyledForm>
      </FlexProfileDiv>
    </ProfileDiv>
  );
};

export default AccountInfo;
