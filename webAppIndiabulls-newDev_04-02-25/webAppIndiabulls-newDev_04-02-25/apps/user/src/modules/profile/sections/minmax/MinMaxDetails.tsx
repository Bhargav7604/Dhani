import { Controller } from "react-hook-form";
import {
  ColumnFlexDiv,
  DiyTextHeader,
  FlexRowDiv,
  MainStyledButton,
  NoSearchText,
  StyledTertiaryText,
} from "../../../../components/ui/GlobalStyles";
import { ProfileDetailsDiv } from "../../ProfileStyles";

import { MinMaxDetailsInfoMapping } from "./MinMaxFormfields";
import {
  MinMaxDetailsProps,
  ProfileFormDatatypes,
} from "../../ProfilePageUtils";
import {
  CopyLegDiv,
  NoCodeWidthSelect,
} from "../../../nocodestrategy/NoCodeStrategyStyles";
import NoCodeInputComp from "../../../../../../../packages/ui/src/sharedcomponents/formfields/NoCodeInputComp";
import { useAppSelector } from "../../../../store/Store";
import { ShimmerCard } from "../../../deployedstrategies/sections/deployedshimmercard/ShimmerCard";

const MinMaxDetails = ({ control, errors }: MinMaxDetailsProps) => {
  const { profileLoadingState } = useAppSelector(
    (appState) => appState.approutes
  );

  const shimmerHeadings = ["Profit target", "Max Loss Cap"];

  const ShimmerPart = () => {
    return (
      <>
        {" "}
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
      </>
    );
  };

  return (
    <ColumnFlexDiv>
      <NoSearchText>Profit Target & Max Loss Cap</NoSearchText>

      <ProfileDetailsDiv $gap="20px">
        <FlexRowDiv $justifycontent="space-around" $width="100%" $gap="16px">
          {profileLoadingState ? (
            <ShimmerPart />
          ) : (
            MinMaxDetailsInfoMapping.map((field) => (
              <Controller
                key={field.name}
                name={field.name}
                control={control}
                render={({ field: inputField }) => (
                  <NoCodeWidthSelect>
                    <NoCodeInputComp
                      heading={field.heading}
                      type="number"
                      error={
                        errors[field.name as keyof ProfileFormDatatypes]
                          ?.message
                      }
                      {...inputField}
                    />
                  </NoCodeWidthSelect>
                )}
              />
            ))
          )}
        </FlexRowDiv>
        <StyledTertiaryText>
          If the value of either Profit Target or Max Loss is set to 0, that
          will be considered as having no limit (i.e. infinite).
        </StyledTertiaryText>
        <CopyLegDiv>
          <MainStyledButton
            type="submit"
            $width="20%"
            $mobilewidth="50%"
            variant="contained"
          >
            Save
          </MainStyledButton>
        </CopyLegDiv>
      </ProfileDetailsDiv>
    </ColumnFlexDiv>
  );
};

export default MinMaxDetails;
