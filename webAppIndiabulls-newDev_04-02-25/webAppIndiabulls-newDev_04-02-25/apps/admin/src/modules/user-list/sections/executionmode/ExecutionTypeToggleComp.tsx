
import { useAppDispatch, useAppSelector } from "../../../../store/Store";
import { setExecutionType } from "../../state-slice/ExecutionTypeSlice";
import { ToggleButton, ToggleWrapper } from "../../UsersStyles";

function  ExecutionTypeToggleComp() {
  // const [activeTab, setActiveTab] = useState<"ForwardText" | "LiveTrading">(
  //   "ForwardText"
  // );
  const dispatch = useAppDispatch();
  const { ExecutionType } = useAppSelector((state) => state.ExecutionType);
  const handleToggleDispatch = (type: string) => {
    dispatch(setExecutionType({ ExecutionType: type }));
  };

  return (
    <ToggleWrapper>
      {/* <ToggleIcon $activetab={ExecutionType}>
        <span>
          {" "}
          {ExecutionType === "PaperTrading" ? (
            <img src={YarrowLeft} />
          ) : (
            <img src={YarrowRight} />
          )}
        </span>
      </ToggleIcon> */}
      <ToggleButton
        $active={ExecutionType === "PaperTrading"}
        $type="PaperTrading"
        onClick={() => handleToggleDispatch("PaperTrading")}
      >
        <span>Forward Test</span>
      </ToggleButton>

      <ToggleButton
        $active={ExecutionType === "LiveTrading"}
        $type="LiveTrading"
        onClick={() => handleToggleDispatch("LiveTrading")}
      >
        <span>Live Trading</span>
      </ToggleButton>
    </ToggleWrapper>
  );
}
export default ExecutionTypeToggleComp;
