import { useEffect } from "react";
import {
  ButtonsDiv,
  CustomDiv,
  CustomStrategiesDiv,
  CustomStrategyOption,
  StyledNoCodeButton,
} from "./NoCodeStrategyStyles";
// import EasyStrategyTemplates from "./sections/easystrategytemplates/EasyStrategyTemplates";
import { getNoCodeStrategy } from "./services/NoCodeStrategyServices";
import { useAppDispatch, useAppSelector } from "../../store/Store";
import {
  clearLegData,
  clearStrategyID,
  incrementRePopulateForm,
  navigationToPage,
  openMySavedStrategy,
  saveDiyDropDowns,
  saveStrategyID,
} from "./state-slice/NoCodeStrategySlice";
import CreateOwnStrategy from "./sections/createownstrategy/CreateOwnStrategy";
// import MySavedStrategy from "./sections/mysavedstrategy/MySavedStrategy";
import { DynamicWrapperDiv } from "../../components/ui/GlobalStyles";
import { StyledPara } from "./NoCodeStrategyStyles";
import { StrategyAPIResponse } from "./services/NoCodeStrategyServiceTypes";

function NoCodeStrategyPage() {
  const view = useAppSelector((appState) => appState.diy.currentPage);
  const showMySaved = useAppSelector((appState) => appState.diy.showMySaved);
  //  const { strategiesData } = useAppSelector((appstate) => appstate.strategies);
  // const {
  //   strategies: { diy: mySavedStrategy },
  // } = strategiesData;
  const mySavedStrategy: any = [];
  const dispatch = useAppDispatch();

  const fetchData = async () => {
    try {
      const response = await getNoCodeStrategy();
      dispatch(saveDiyDropDowns({ DiyDropDownRes: response.data }));
    } catch (error) {
      throw error;
    }
  };

  const onMount = async () => {
    await fetchData();
  };

  useEffect(() => {
    onMount();
  }, []);

  function handleButtonClick(id: number) {
    if (id === 0) {
      dispatch(navigationToPage({ currentPage: "easystrategy" }));
      dispatch(clearStrategyID());
      dispatch(openMySavedStrategy({ showMySaved: false }));
      dispatch(clearLegData());
      dispatch(incrementRePopulateForm(0));
    } else if (id === 1) {
      dispatch(navigationToPage({ currentPage: "create" }));
      dispatch(clearStrategyID());
      dispatch(openMySavedStrategy({ showMySaved: false }));
      dispatch(clearLegData());
      dispatch(incrementRePopulateForm(0));
    } else if (id === 2) {
      dispatch(navigationToPage({ currentPage: "mysaved" }));
      dispatch(openMySavedStrategy({ showMySaved: true }));
      dispatch(clearStrategyID());
      dispatch(clearLegData());
      dispatch(incrementRePopulateForm(0));
    }
  }

  const handleMySavedStrategyClick = (strategyID: number) => {
    if (strategyID) {
      dispatch(saveStrategyID({ selectedStrategyID: strategyID }));
      dispatch(openMySavedStrategy({ showMySaved: false }));
    }
  };

  const CreateButtonsPart = () => {
    return (
      <ButtonsDiv>
        {/* <StyledNoCodeButton
          onClick={() => handleButtonClick(0)}
          $active={view === "easystrategy"}
        >
         Easy Strategy Templates 
        </StyledNoCodeButton> */}
        <StyledNoCodeButton
          onClick={() => handleButtonClick(1)}
          $active={view === "create"}
        >
          Create Own Strategy
        </StyledNoCodeButton>
        <CustomDiv>
          {/* <StyledNoCodeButton
            onClick={() => handleButtonClick(2)}
            $active={view === "mysaved"}
          >
            My Saved Strategies
          </StyledNoCodeButton> */}
          {showMySaved && (
            <CustomStrategiesDiv open={showMySaved === true}>
              {mySavedStrategy?.length === 0 ? (
                <>
                {/* <StyledPara></StyledPara> */}
                <StyledPara>No strategy found !, Create altleast one.</StyledPara>
                </>
              ) : (
                mySavedStrategy?.map((item: StrategyAPIResponse) => (
                  <CustomStrategyOption
                    key={item.name}
                    onClick={() => handleMySavedStrategyClick(item.id)}
                  >
                    {item.name ?? ""}
                  </CustomStrategyOption>
                ))
              )}
            </CustomStrategiesDiv>
          )}
        </CustomDiv>
      </ButtonsDiv>
    );
  };

  const RenderComponent = () => {
    // if (view === "easystrategy") {
    //   return <EasyStrategyTemplates />;
    // } 
     if (view === "create") {
      return <CreateOwnStrategy />;
    // } else if (view === "mysaved") {
    //   return <MySavedStrategy />;
    } else {
      return <div></div>;
    }
  };

  return (
      <DynamicWrapperDiv>
        {CreateButtonsPart()}
        {RenderComponent()}
      </DynamicWrapperDiv>
  );
}

export default NoCodeStrategyPage;
