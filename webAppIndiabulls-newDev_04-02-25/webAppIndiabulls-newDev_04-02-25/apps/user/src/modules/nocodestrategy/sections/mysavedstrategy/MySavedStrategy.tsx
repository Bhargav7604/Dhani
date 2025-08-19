import { useEffect, useState } from "react";
import EditDIYForm from "../edit-diy-form/EditDIYForm";
import { useAppDispatch, useAppSelector } from "../../../../store/Store";
import {
  saveStrategyID,
  showEditDIYForm,
} from "../../state-slice/NoCodeStrategySlice";
import LoadPopUp from "../../components/LoadPopUp";
import {
  ColumnFlexDiv,
  StyledDiySelect,
} from "../../../../components/ui/GlobalStyles";
import {
  MySavedStrategies,
  NoCodeWidthSelect,
  StyledFormDiv,
} from "../../NoCodeStrategyStyles";
import NoSearchStrategy from "../../../../../../../packages/ui/src/sharedcomponents/nosearch/NoSearchCard";
import { ShimmerCard } from "../../../deployedstrategies/sections/deployedshimmercard/ShimmerCard";

export interface StateType {
  showLoadPopup: boolean;
  strategyIDSave: number | null;
}

const InitialState: StateType = {
  showLoadPopup: false,
  strategyIDSave: null,
};

function MySavedStrategy() {
  const [state, setState] = useState<StateType>(InitialState);
  const { showLoadPopup, strategyIDSave } = state;
  const {
    strategies: { diy: diyStrategies },
  } = useAppSelector((AppState) => AppState.strategies.strategiesRes);
  const { DIYForm: showEditDIY } = useAppSelector((appState) => appState.diy);
  const { allStrategiesAPIStatusFail, allStrategiesLoadingState } =
    useAppSelector((appState) => appState.approutes);

  const dispatch = useAppDispatch();
  function handlePreBuildStrategyClick(strategyID: number) {
    if (strategyID) {
      if (!showEditDIY) {
        dispatch(saveStrategyID({ selectedStrategyID: strategyID }));
        dispatch(showEditDIYForm({ DIYForm: true }));
        setState((prevState) => ({
          ...prevState,
          activeStrategyCard: strategyID,
        }));
      } else {
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
    dispatch(saveStrategyID({ selectedStrategyID: strategyIDSave ?? 0 }));
    setState((prevState) => ({
      ...prevState,
      showLoadPopup: false,
      activeStrategyCard: strategyIDSave,
    }));
  }

  useEffect(() => {
    if (diyStrategies) {
      setState((prevState) => ({
        ...prevState,
        shimmer: false,
      }));
    }
  }, []);

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = Number(e.target.value);
    if (selectedId) {
      handlePreBuildStrategyClick(selectedId);
    }
  };

  const MySavedStrategyPart = () => {
    return allStrategiesAPIStatusFail ? (
      <NoSearchStrategy text="Failed to fetch data." />
    ) : (
      <NoCodeWidthSelect>
        <ColumnFlexDiv width="300px">
          <MySavedStrategies>My Saved Strategies</MySavedStrategies>
          {allStrategiesLoadingState ? (
            <ShimmerCard
              $height="40px"
              $minidesktopheight="40px"
              $tabheight="40px"
              $mobileheight="40px"
            />
          ) : (
            <StyledDiySelect onChange={handleSelectChange}>
              <option value="0">Select</option>
              {diyStrategies?.map((option, index) => (
                <option key={index} value={option.id}>
                  {option.name}
                </option>
              ))}
            </StyledDiySelect>
          )}
        </ColumnFlexDiv>
      </NoCodeWidthSelect>
    );
  };

  return (
    <StyledFormDiv>
      {MySavedStrategyPart()}
      {showLoadPopup && (
        <LoadPopUp
          open={showLoadPopup}
          onClose={closePopup}
          Confirm={handleConfirmPopup}
        />
      )}
      {showEditDIY && <EditDIYForm />}
    </StyledFormDiv>
  );
}

export default MySavedStrategy;
