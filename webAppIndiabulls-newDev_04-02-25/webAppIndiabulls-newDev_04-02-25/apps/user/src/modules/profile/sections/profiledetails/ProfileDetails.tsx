import { Controller } from "react-hook-form";
import { ProfileDetailsDiv } from "../../ProfileStyles";
import { ProfileDetailsInfoMapping } from "./ProfileDetailsformFields";
import { NoCodeWidthSelect } from "../../../nocodestrategy/NoCodeStrategyStyles";
import NoCodeInputComp from "../../../../../../../packages/ui/src/sharedcomponents/formfields/NoCodeInputComp";
import {
  ProfileDetailsProps,
  ProfileFormDatatypes,
} from "../../ProfilePageUtils";
import {
  ColumnFlexDiv,
  DiyTextHeader,
  NoSearchText,
} from "../../../../components/ui/GlobalStyles";
import { useAppSelector } from "../../../../store/Store";
import { ShimmerCard } from "../../../deployedstrategies/sections/deployedshimmercard/ShimmerCard";

const ProfileDetails = ({ control, errors }: ProfileDetailsProps) => {
  const {  profileLoadingState } = useAppSelector(
    (appState) => appState.approutes
  );

  const shimmerHeadings = [
    "Client ID",
    "Client Name",
    "Address",
    "Mobile Number",
    "Email ID",
    "Platform",
  ];

  const ShimmerPart = () => {
    return (
      <ProfileDetailsDiv>
        {shimmerHeadings.map((heading, i) => (
          <NoCodeWidthSelect key={i}>
            <ColumnFlexDiv $flexstart>
              <DiyTextHeader>{heading}</DiyTextHeader>
              <ShimmerCard
                $height="40px"
                $minidesktopheight="40px"
                $tabheight="40px"
                $mobileheight="40px"
              />
            </ColumnFlexDiv>
          </NoCodeWidthSelect>
        ))}
      </ProfileDetailsDiv>
    );
  };

  return (
    <ColumnFlexDiv>
      <NoSearchText>Profile Details</NoSearchText>

      {profileLoadingState ? (
        ShimmerPart()
      ) :
        <ProfileDetailsDiv>
          {ProfileDetailsInfoMapping.map((field) => (
            <Controller
              key={field.name}
              name={field.name}
              control={control}
              render={({ field: inputField }) => (
                <NoCodeWidthSelect>
                  <NoCodeInputComp
                    heading={field.heading}
                    disabled={field.disable}
                    {...inputField}
                    error={
                      errors[field.name as keyof ProfileFormDatatypes]?.message
                    }
                  />
                </NoCodeWidthSelect>
              )}
            />
          ))}
        </ProfileDetailsDiv>
      }
    </ColumnFlexDiv>
  );
};

export default ProfileDetails;
