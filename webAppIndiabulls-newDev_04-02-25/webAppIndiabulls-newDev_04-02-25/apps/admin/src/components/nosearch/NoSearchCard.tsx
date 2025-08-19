import { NoSearchText, NoStrategyDiv } from "../ui/GlobalStyles";
import { NoSearchStrategyProps } from "../ui/GlobalStylesUtils";


function NoSearchStrategy({ text, isDetailView = false }: NoSearchStrategyProps) {
  return (
    <NoStrategyDiv $detailView={isDetailView} >
      <NoSearchText>
        {text}
      </NoSearchText>
    </NoStrategyDiv>
  );
}

export default NoSearchStrategy