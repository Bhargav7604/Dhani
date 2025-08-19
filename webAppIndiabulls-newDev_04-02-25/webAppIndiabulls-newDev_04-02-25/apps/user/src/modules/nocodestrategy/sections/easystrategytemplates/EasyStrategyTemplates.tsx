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
import StrategyIcon from "../../../../assets/svgs/StrategyIcon.svg";
import { StrategyAPIResponse } from "../../../readytodeploy/services/AllStrategiesServiceTypes";
import NoSearchStrategy from "../../../../../../../packages/ui/src/sharedcomponents/nosearch/NoSearchCard";
import EasyStrategyTemplatesShimmer from "../diyformshimmer/EasyStrategyTemplatesShimmer";

export interface StateType {
  showEditDIY: boolean;
  showLoadPopup: boolean;
  strategyIDSave: number | null;
  activeStrategyCard: number | null;
}

const InitialState: StateType = {
  showEditDIY: false,
  showLoadPopup: false,
  strategyIDSave: null,
  activeStrategyCard: null,
};

const EasyStrategyTemplates = ({}) => {
  const [state, setState] = useState<StateType>(InitialState);
  const { showEditDIY, showLoadPopup, strategyIDSave, activeStrategyCard } =
    state;
  const { allStrategiesAPIStatusFail, allStrategiesLoadingState } =
    useAppSelector((appState) => appState.approutes);
  const {
    strategies: { preBuilt: preBuiltStrategies },
  } = useAppSelector((AppState) => AppState.strategies.strategiesRes);

  const { selectedStrategyID } = useAppSelector((appState) => appState.diy);

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
    if (preBuiltStrategies.length === 0) {
      return <NoSearchStrategy isDetailView={true} text="No easy strategy templates." />;
    }

    return allStrategiesLoadingState ? (
      <EasyStrategyTemplatesShimmer />
    ) : allStrategiesAPIStatusFail ? (
      <NoSearchStrategy text="Failed to fetch data." />
    ) : (
      <PreBuildDiv>
        {preBuiltStrategies.map((item: StrategyAPIResponse) => (
          <PreBuildcard
            key={item.id} // Always add a key when mapping
            onClick={() => handlePreBuildStrategyClick(item.id)}
            $isActive={activeStrategyCard === item.id}
          >
            <PreBuildImg src={StrategyIcon} alt="PreBuildImage" />
            <StrategyText>{item.name ?? ""}</StrategyText>
          </PreBuildcard>
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
