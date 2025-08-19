
import { Controller } from "react-hook-form";
import {
  StyledDiySelect,
  StyledTertiaryText,
} from "../../../../components/ui/GlobalStyles";
import { NoCodeWidthSelect } from "../../../nocodestrategy/NoCodeStrategyStyles";
import { DeployedSelectCompProps } from "../../../../../../user/src/modules/deployedstrategies/DeployedStrategiesUtils";
import { DeployedStrategyCardDiv } from "../../../../../../user/src/modules/deployedstrategies/DeployedStrategiesStyles";

const DeployedSelectComp = (props: DeployedSelectCompProps) => {
  const { name, control, item, heading, disabled } = props;
  const mobileMaxWidth =
    name === "multiplier" ? "80px" : name === "executionMode" ? "150px" : "";
  return (
    <DeployedStrategyCardDiv>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <NoCodeWidthSelect
            width={name === "multiplier" ? "60%" : ""}
            $mobilemaxwidth={mobileMaxWidth}
          >
            <StyledDiySelect
              {...field}
              $deployedselect="true"
              disabled={disabled}
            >
              {item?.map((option, index) => (
                <option
                  value={option.key}
                  key={index}
                  disabled={option.key === "LiveTrading" }
                  title={
                    option.key === "LiveTrading" 
                      ? "Cannot switch to live trading"
                      : ""
                  }
                  style={{
                    color:
                      option.key === "LiveTrading" 
                        ? "#aaa"
                        : "inherit",
                    cursor:
                      option.key === "LiveTrading" 
                        ? "not-allowed"
                        : "pointer",
                  }}
                >
                  {option.val}
                </option>
              ))}
            </StyledDiySelect>
          </NoCodeWidthSelect>
        )}
      />
      <StyledTertiaryText>{heading}</StyledTertiaryText>
    </DeployedStrategyCardDiv>
  );
};

export default DeployedSelectComp;
