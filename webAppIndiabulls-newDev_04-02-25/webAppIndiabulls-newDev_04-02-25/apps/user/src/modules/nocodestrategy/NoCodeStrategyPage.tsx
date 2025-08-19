import { useEffect } from "react";
import {
  ButtonsDiv,
  StyledNoCodeButton,
} from "./NoCodeStrategyStyles";
import EasyStrategyTemplates from "./sections/easystrategytemplates/EasyStrategyTemplates";
import { getNoCodeStrategy } from "./services/NoCodeStrategyServices";
import { useAppDispatch, useAppSelector } from "../../store/Store";
import {
  clearLegData,
  clearStrategyID,
  incrementRePopulateForm,
  navigationToPage,
  PageConfig,
  saveDiyDropDowns,
  setDropDownAPIFailState,
  setDropdownLoadingState,
  showEditDIYForm,
} from "./state-slice/NoCodeStrategySlice";
import CreateOwnStrategy from "./sections/createownstrategy/CreateOwnStrategy";
import MySavedStrategy from "./sections/mysavedstrategy/MySavedStrategy";
import { DynamicWrapperDiv } from "../../components/ui/GlobalStyles";
import ComingSoon from "../../components/comingsoon/ComingSoon";

function NoCodeStrategyPage() {
  const view = useAppSelector((appState) => appState.diy.currentPage);
  const dispatch = useAppDispatch();
  const fetchData = async () => {
    try {
      const response = await getNoCodeStrategy();
      dispatch(saveDiyDropDowns({ DiyDropDownRes: response.data }));
    } catch (error) {
      dispatch(setDropDownAPIFailState({ dropdownAPIFail: true }));
      throw error;
    } finally {
      dispatch(setDropdownLoadingState({ dropdownDataLoadingState: false }));
    }
  };

  const onMount = async () => {
    await fetchData();
  };

  useEffect(() => {
    onMount();
  }, []);

  const pageMap: Record<number, PageConfig> = {
    0: { page: "easystrategy", showMySaved: false },
    1: { page: "create", showMySaved: false },
    2: { page: "timebase", showMySaved: false },
    3: { page: "greekbase", showMySaved: false },
    4: { page: "indicatorbase", showMySaved: false },
    5: { page: "hybridbase", showMySaved: false },
    6: { page: "mysaved", showMySaved: false },
  };

  function handleButtonClick(id: number) {
    const config = pageMap[id];
    if (!config) return;

    dispatch(navigationToPage({ currentPage: config.page }));
    dispatch(showEditDIYForm({ DIYForm: config.showMySaved }));
    dispatch(clearStrategyID());
    dispatch(clearLegData());
    dispatch(incrementRePopulateForm(0));
  }

  const CreateButtonsPart = () => {
    return (
      <ButtonsDiv>
        <StyledNoCodeButton
          onClick={() => handleButtonClick(0)}
          $active={view === "easystrategy"}
        >
          Easy Strategy Templates
        </StyledNoCodeButton>
        <StyledNoCodeButton
          onClick={() => handleButtonClick(1)}
          $active={view === "create"}
        >
          Classic Strategy
        </StyledNoCodeButton>
        <StyledNoCodeButton
          onClick={() => handleButtonClick(2)}
          $active={view === "timebase"}
        >
          Time Based Strategy
        </StyledNoCodeButton>
        <StyledNoCodeButton
          onClick={() => handleButtonClick(3)}
          $active={view === "greekbase"}
        >
          Greeks Based Strategy
        </StyledNoCodeButton>
        <StyledNoCodeButton
          onClick={() => handleButtonClick(4)}
          $active={view === "indicatorbase"}
        >
          Indicator Based Strategy
        </StyledNoCodeButton>
        <StyledNoCodeButton
          onClick={() => handleButtonClick(5)}
          $active={view === "hybridbase"}
        >
          Hybrid Strategy
        </StyledNoCodeButton>

        <StyledNoCodeButton
          onClick={() => handleButtonClick(6)}
          $active={view === "mysaved"}
        >
          My Saved Strategies
        </StyledNoCodeButton>
      </ButtonsDiv>
    );
  };

  const viewComponentMap: Record<string, JSX.Element> = {
    easystrategy: <EasyStrategyTemplates />,
    create: <CreateOwnStrategy />,
    timebase: (
      <ComingSoon content="Time Based Strategies Page currently Under Developement" />
    ),
    greekbase: (
      <ComingSoon content="Greek Based Strategies Page currently Under Developement" />
    ),
    indicatorbase: (
      <ComingSoon content="Indicator Based Strategies Page currently Under Developement" />
    ),
    hybridbase: (
      <ComingSoon content="Hybrid Based Strategies Page currently Under Developement" />
    ),
    mysaved: <MySavedStrategy />,
  };
  const RenderComponent = () => {
    return viewComponentMap[view] || <div></div>;
  };

  return (
    <DynamicWrapperDiv>
      {CreateButtonsPart()}
      {RenderComponent()}
    </DynamicWrapperDiv>
  );
}

export default NoCodeStrategyPage;
