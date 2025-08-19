import { NoSearchStrategyProps } from "../../../../../apps/user/src/modules/deployedstrategies/DeployedStrategiesUtils.js";
import { NoStrategyDiv } from "../../../../../apps/user/src/modules/readytodeploy/ReadyToDeployStyles.js";
import { NoSearchText } from "../../../../../apps/user/src/components/ui/GlobalStyles.js";

function NoSearchStrategy({
  text,
  isDetailView = false,
}: NoSearchStrategyProps) {
  return (
    <NoStrategyDiv $detailView={isDetailView}>
      <NoSearchText>{text}</NoSearchText>
    </NoStrategyDiv>
  );
}

export default NoSearchStrategy;
