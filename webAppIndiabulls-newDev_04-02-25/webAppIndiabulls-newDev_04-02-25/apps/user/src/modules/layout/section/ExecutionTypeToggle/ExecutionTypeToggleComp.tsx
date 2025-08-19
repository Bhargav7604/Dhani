import { ToggleButton, ToggleWrapper } from "../../LayoutStyles";
import { useAppDispatch, useAppSelector } from "../../../../store/Store";
import { setExecutionType } from "../../state-slice/ExecutionTypeSlice";

function ExecutionTypeToggleComp() {
  const dispatch = useAppDispatch();
  const { ExecutionType } = useAppSelector((state) => state.ExecutionType);
  const handleToggleDispatch = (type: string) => {
    dispatch(setExecutionType({ ExecutionType: type }));
  };

  return (
    <ToggleWrapper>
      <ToggleButton
        $active={ExecutionType === "PaperTrading"}
        $type="PaperTrading"
        onClick={() => handleToggleDispatch("PaperTrading")}
      >
        <span>FORWARD TEST</span>
      </ToggleButton>

      <ToggleButton
        $active={ExecutionType === "LiveTrading"}
        $type="LiveTrading"
        onClick={() => handleToggleDispatch("LiveTrading")}
      >
        <span>LIVE TRADING</span>
      </ToggleButton>
    </ToggleWrapper>
  );
}
export default ExecutionTypeToggleComp;
