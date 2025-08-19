import {
  FirstText,
  LinkText,
  NoStrategyDiv,
  SecondText,
} from "../../../readytodeploy/ReadyToDeployStyles";

function NoActiveStrategyPage() {
  return (
    <NoStrategyDiv>
      <FirstText>No strategies deployed yet</FirstText>

      <SecondText>
        Please go to <LinkText to={"/readytodeploy"}>Ready to Deploy</LinkText>{" "}
        and deploy the strategies. If you have not created any strategies yet,
        you can visit the{" "}
        <LinkText to={"/nocodestrategybuilder"}>
          No Coding Strategy Builder(DIY)
        </LinkText>
      </SecondText>
    </NoStrategyDiv>
  );
}

export default NoActiveStrategyPage;
