import { ShimmerCard } from "../../../deployedstrategies/sections/deployedshimmercard/ShimmerCard";
import { PreBuildDiv } from "../../NoCodeStrategyStyles";

const EasyStrategyTemplatesShimmer = () => {
  return (
    <PreBuildDiv>
      {[...Array(7)].map((_, i) => {
        return (
          <ShimmerCard
            key={i}
            $height="50px"
            $minidesktopheight="50px"
            $tabheight="50px"
            $mobileheight="50px"
            $width="150px"
          />
        );
      })}
    </PreBuildDiv>
  );
};

export default EasyStrategyTemplatesShimmer;
