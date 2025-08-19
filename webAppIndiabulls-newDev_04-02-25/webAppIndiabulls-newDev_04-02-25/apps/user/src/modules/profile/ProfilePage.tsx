import { ProfileWrapperDiv } from "./ProfileStyles";
import { useForm } from "react-hook-form";
import { ProfileFormDatatypes, ProfilePageSchema } from "./ProfilePageUtils";
import { zodResolver } from "@hookform/resolvers/zod";
import { DynamicWrapperDiv } from "../../components/ui/GlobalStyles";
import ProfileDetails from "./sections/profiledetails/ProfileDetails";
import { useAppDispatch, useAppSelector } from "../../store/Store";
import MinMaxDetails from "./sections/minmax/MinMaxDetails";
import { useEffect } from "react";
import { UserProfileDetailsPost } from "./services/UserProfileService";
import { saveUserProfileDetails } from "./state-slice/UserProfileInfoSlice";

const ProfilePage = () => {
  const {
    control,
    formState: { errors },
    setValue,
    handleSubmit,
  } = useForm<ProfileFormDatatypes>({
    resolver: zodResolver(ProfilePageSchema),
  });
  const dispatch = useAppDispatch();

  const { UserProfileRes } = useAppSelector((appState) => appState.UserProfile);

  const PopulateForm = () => {
    setValue("clientID", UserProfileRes?.clientId);
    setValue("clientName", UserProfileRes?.clientName);
    setValue("address", UserProfileRes?.address);
    setValue("mobileNumber", UserProfileRes?.mobileNo);
    setValue("emailId", UserProfileRes?.emailId);
    setValue(
      "platform",
      UserProfileRes?.xtsClient === true ? "XTS" : "IndiaBulls Pro"
    );
    setValue("minProfit", UserProfileRes?.minProfit);
    setValue("maxLoss", UserProfileRes?.maxLoss);
  };

  useEffect(() => {
    if (UserProfileRes) {
      PopulateForm();
    }
  }, [UserProfileRes]);

  async function submitFormHandler(data: ProfileFormDatatypes) {
    const payload = {
      clientId: data.clientID,
      maxLoss: data.maxLoss,
      minProfit: data.minProfit,
    };

    try {
      const config = { payload };
      const response = await UserProfileDetailsPost(config);
      if (response.status === "success") {
        dispatch(saveUserProfileDetails({ UserProfileres: response.data }));
      }
    } catch (error: any) {
      throw error;
    }
  }

  return (
    <DynamicWrapperDiv>
      <ProfileWrapperDiv onSubmit={handleSubmit(submitFormHandler)}>
        <ProfileDetails control={control} errors={errors} />
        <MinMaxDetails control={control} errors={errors} />
      </ProfileWrapperDiv>
    </DynamicWrapperDiv>
  );
};

export default ProfilePage;
