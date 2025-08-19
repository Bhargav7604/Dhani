import {
  PreBuildcard,
  PreBuildDiv,
  PreBuildImg,
  StrategyText,
} from "../../NoCodeStrategyStyles";
import { useAppDispatch, useAppSelector } from "../../../../store/Store";
import { useState } from "react";
import {
  incrementRePopulateForm,
  saveStrategyID,
} from "../../state-slice/NoCodeStrategySlice";
import EditDIYForm from "../edit-diy-form/EditDIYForm";
import LoadPopUp from "../../components/LoadPopUp";
import { StyledFormDiv } from "../../NoCodeStrategyStyles";
import StrategyIcon from "../../../../assets/svg/StrategyIcon.svg";
import Skeleton from "react-loading-skeleton";

import { StyledDataBigText } from "../../../../components/ui/GlobalStyles";
import { StrategyAPIResponse } from "../../services/NoCodeStrategyServiceTypes";

export interface StateType {
  showEditDIY: boolean;
  showLoadPopup: boolean;
  strategyIDSave: number | null;
  activeStrategyCard: number | null;
  shimmer: boolean;
}

const InitialState: StateType = {
  showEditDIY: false,
  showLoadPopup: false,
  strategyIDSave: null,
  activeStrategyCard: null,
  shimmer: true,
};

const EasyStrategyTemplates = ({}) => {
  const [state, setState] = useState<StateType>(InitialState);
  const {
    showEditDIY,
    showLoadPopup,
    strategyIDSave,
    activeStrategyCard,
    shimmer,
  } = state;
  // const {
  //   strategies: { preBuilt: preBuiltStrategies },
  // } = useAppSelector((AppState) => AppState.strategies.strategiesRes);
  const { selectedStrategyID } = useAppSelector((appState) => appState.diy);
  // useEffect(() => {
  //   if (preBuiltStrategies && preBuiltStrategies.length > 0) {
  //     setState((prev) => ({ ...prev, shimmer: false }));
  //   } else if (preBuiltStrategies.length === 0) {
  //     setState((prev) => ({ ...prev, shimmer: false }));
  //   }
  // }, [preBuiltStrategies]);

  const preBuiltStrategies: any = [];
  const dispatch = useAppDispatch();
  const { rePopulateForm } = useAppSelector((appState) => appState.diy);

  function handlePreBuildStrategyClick(strategyID: number) {
    if (strategyID) {
      if (!state.showEditDIY) {
        //first click will show form directly
        dispatch(saveStrategyID({ selectedStrategyID: strategyID }));
        setState((prevState) => ({
          ...prevState,
          showEditDIY: true,
          activeStrategyCard: strategyID,
        }));
      } else {
        //from the second click, it will load the popup for confirmation
        setState((prevState) => ({
          ...prevState,
          strategyIDSave: strategyID,
          showLoadPopup: true,
        }));
      }
    }
  }

  function closePopup() {
    setState((prevState) => ({
      ...prevState,
      showLoadPopup: false,
    }));
  }

  function handleConfirmPopup() {
    if (selectedStrategyID === strategyIDSave) {
      dispatch(incrementRePopulateForm(rePopulateForm + 1));
    }

    dispatch(saveStrategyID({ selectedStrategyID: strategyIDSave ?? 0 }));
    setState((prevState) => ({
      ...prevState,
      showLoadPopup: false,
      activeStrategyCard: strategyIDSave,
    }));
  }

  const PreBuildStrategyPart = () => {
    if (!preBuiltStrategies || preBuiltStrategies.length === 0) {
      return <StyledDataBigText $errmsg>No Data!</StyledDataBigText>;
    }

    return (
      <PreBuildDiv>
        {preBuiltStrategies.map((item: StrategyAPIResponse, index: number) => (
          <div key={index}>
            {shimmer ? (
              <PreBuildcard>
                <Skeleton width="100%" />
              </PreBuildcard>
            ) : (
              <PreBuildcard
                onClick={() => handlePreBuildStrategyClick(item.id)}
                $isActive={activeStrategyCard === item.id}
              >
                <PreBuildImg src={StrategyIcon} alt="PreBuildImage" />
                <StrategyText>{item.name ?? ""}</StrategyText>
              </PreBuildcard>
            )}
          </div>
        ))}
      </PreBuildDiv>
    );
  };

  return (
    <StyledFormDiv>
      {PreBuildStrategyPart()}
      {showLoadPopup && (
        <LoadPopUp
          open={showLoadPopup}
          onClose={closePopup}
          Confirm={handleConfirmPopup}
        />
      )}
      {showEditDIY && <EditDIYForm isEasyStrategyTemplate={false} />}
    </StyledFormDiv>
  );
};

export default EasyStrategyTemplates;
