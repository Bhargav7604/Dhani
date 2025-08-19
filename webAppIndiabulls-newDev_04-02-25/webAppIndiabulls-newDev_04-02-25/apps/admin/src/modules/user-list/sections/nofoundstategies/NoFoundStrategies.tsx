import {
  FirstText,
  SecondText,
  NoStrategyDiv,
} from "../../../../../../user/src/modules/readytodeploy/ReadyToDeployStyles";

function NoActiveStrategyFoundPage() {
  return (
    <NoStrategyDiv>
      <FirstText>No Live Strategies Found for This User</FirstText>

      <SecondText>
        This user has not deployed any live strategies yet...
      </SecondText>
    </NoStrategyDiv>
  );
}

export default NoActiveStrategyFoundPage;
