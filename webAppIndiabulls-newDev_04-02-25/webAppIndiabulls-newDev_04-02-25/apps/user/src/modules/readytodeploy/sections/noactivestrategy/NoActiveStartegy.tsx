import {
  FirstText,
  LinkText,
  NoStrategyDiv,
  SecondText,
} from "../../ReadyToDeployStyles";

function NoActiveStrategy() {
  return (
    <NoStrategyDiv>
      <FirstText>No Strategies added yet</FirstText>

      <SecondText>
        Please go to{" "}
        <LinkText to={"/nocodestrategybuilder"}>
          No-Coding Strategy Builder (DIY)
        </LinkText>{" "}
        and click on Pre build Strategies. If you want to Create new strategy,
        you can{" "}
        <LinkText to={"/nocodestrategybuilder"}>
          Create Own Strategies.
        </LinkText>
      </SecondText>
    </NoStrategyDiv>
  );
}

export default NoActiveStrategy;
