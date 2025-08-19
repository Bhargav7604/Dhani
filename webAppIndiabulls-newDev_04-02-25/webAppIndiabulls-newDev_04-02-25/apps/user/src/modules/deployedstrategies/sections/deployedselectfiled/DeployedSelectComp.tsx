
import { Controller } from "react-hook-form";
import { DeployedStrategyCardDiv } from "../../DeployedStrategiesStyles";
import {
  StyledDiySelect,
  StyledTertiaryText,
} from "../../../../components/ui/GlobalStyles";
import { DeployedSelectCompProps } from "../../DeployedStrategiesUtils";
import { NoCodeWidthSelect } from "../../../nocodestrategy/NoCodeStrategyStyles";
import { useAppSelector } from "../../../../store/Store";

const DeployedSelectComp = (props: DeployedSelectCompProps) => {
  const { name, control, item, heading, disabled } = props;
  const mobileMaxWidth =
    name === "multiplier" ? "80px" : name === "executionMode" ? "150px" : "";
  const { isLive } = useAppSelector((appState) => appState.welcomePopup);
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
                  disabled={option.key === "LiveTrading" && !isLive}
                  title={
                    option.key === "LiveTrading" && !isLive
                      ? "Cannot switch to live trading"
                      : ""
                  }
                  style={{
                    color:
                      option.key === "LiveTrading" && !isLive
                        ? "#aaa"
                        : "inherit",
                    cursor:
                      option.key === "LiveTrading" && !isLive
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
