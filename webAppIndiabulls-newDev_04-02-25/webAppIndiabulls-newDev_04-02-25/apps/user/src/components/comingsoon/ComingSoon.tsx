import { PerformanceDiv } from "../../modules/readytodeploy/ReadyToDeployStyles";
import { DynamicWrapperDiv, NoSearchText } from "../ui/GlobalStyles";

export default function ComingSoon(props:any) {
  return (
    <DynamicWrapperDiv>
      <PerformanceDiv>
        <NoSearchText>Coming Soon...</NoSearchText>
        <NoSearchText>{props.content}</NoSearchText>
      </PerformanceDiv>
    </DynamicWrapperDiv>
  );
}
