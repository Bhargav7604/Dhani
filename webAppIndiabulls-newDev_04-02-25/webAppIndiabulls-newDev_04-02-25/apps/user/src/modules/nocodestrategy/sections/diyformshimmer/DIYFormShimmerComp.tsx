import {
  ColumnFlexDiv,
  FlexRowDiv,
} from "../../../../components/ui/GlobalStyles";
import { ShimmerCard } from "../../../deployedstrategies/sections/deployedshimmercard/ShimmerCard";
import { NoCodeHeaderText, StyledForm, StyledFormDiv } from "../../NoCodeStrategyStyles";

const DIYFormShimmerComp = () => {
    return (
      <StyledForm>
          <StyledFormDiv>
      <FlexRowDiv $width="82%" $alignitems="end" $diy={true} $gap="24px">
        <ColumnFlexDiv $flexstart>
          <NoCodeHeaderText>Step 1: Set Strategy</NoCodeHeaderText>
          <ShimmerCard $height={"240px"} $mobileheight="200px" />
        </ColumnFlexDiv>
        <ColumnFlexDiv $flexstart>
          <NoCodeHeaderText>Step 2: Entry Settings</NoCodeHeaderText>
          <ShimmerCard $height={"240px"} $mobileheight="200px" />
        </ColumnFlexDiv>
      </FlexRowDiv>
      <ColumnFlexDiv $flexstart>
        <NoCodeHeaderText>Step 3: Exit Settings</NoCodeHeaderText>
        <ShimmerCard $height="200px" />
      </ColumnFlexDiv>
      <ColumnFlexDiv $flexstart>
        <NoCodeHeaderText>Step 4: Position Builder</NoCodeHeaderText>
      <ShimmerCard $height="300px" />
      </ColumnFlexDiv>
    </StyledFormDiv>  
      </StyledForm>
  );
};

export default DIYFormShimmerComp;
