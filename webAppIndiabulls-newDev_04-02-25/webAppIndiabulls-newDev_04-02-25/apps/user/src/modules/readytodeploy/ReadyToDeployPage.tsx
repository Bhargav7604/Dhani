import { useState, useEffect } from "react";
import { ButtonsData, SortDeployDropDownData } from "./ReadyToDeployData";
import { useAppSelector } from "../../store/Store";
import {
  DynamicWrapperDiv,
  SearchSortLinkDiv,
  StrategiesColumnItemsDiv,
} from "../../components/ui/GlobalStyles";
import { ScrollyDiv } from "./ReadyToDeployStyles";
import StrategiesCard from "./sections/strategiescard/StrategiesCard";
import NoActiveStrategy from "./sections/noactivestrategy/NoActiveStartegy";
import { ReadyToDeployStateType } from "./ReadyToDeployUtils";
import { useForm } from "react-hook-form";
import SearchSortComp from "../../components/searchsortwrapper/SearchSortComp";
import NoSearchStrategy from "../../../../../packages/ui/src/sharedcomponents/nosearch/NoSearchCard";
import ToggleButtonContainer from "../../../../../packages/ui/src/sharedcomponents/togglebutton/ToggleButtonContainer";
import ComingSoon from "../../components/comingsoon/ComingSoon";
import { ShimmerCard } from "../deployedstrategies/sections/deployedshimmercard/ShimmerCard";

const InitialState = {
  originalStrategy: [], // Store unmodified original data
  selectedStrategy: "inHouse",
  filteredStrategy: [], // Used for search/sort
};

function HomePage() {
  const [state, setState] = useState<ReadyToDeployStateType>(InitialState);
  const { originalStrategy, selectedStrategy, filteredStrategy } = state;
  const { allStrategiesAPIStatusFail, allStrategiesLoadingState } =
    useAppSelector((appState) => appState.approutes);
  const { strategies } = useAppSelector(
    (appState) => appState.strategies.strategiesRes
  );

  const { control, watch, setValue } = useForm();
  const searchStrategy = watch("StrategySearch");
  const sortStrategy = watch("StrategySort");

  useEffect(() => {
    if (strategies && strategies[selectedStrategy as keyof typeof strategies]) {
      setState((prevState) => ({
        ...prevState,
        selectedStrategy,
        originalStrategy: [
          ...strategies[selectedStrategy as keyof typeof strategies],
        ],
        filteredStrategy: [
          ...strategies[selectedStrategy as keyof typeof strategies],
        ],
      }));
    }
  }, [strategies, selectedStrategy]);

  const handlePageChange = (
    strategyType:
      | keyof typeof strategies
      | "raStrategyBlackBox"
      | "timeBasedStrategy"
      | "greekBasedStrategy"
      | "indicatorBasedStrategy"
      | "hybridBasedStrategy"
  ) => {
    if (
      strategyType !== "raStrategyBlackBox" &&
      strategyType !== "timeBasedStrategy" &&
      strategyType !== "greekBasedStrategy" &&
      strategyType !== "indicatorBasedStrategy" &&
      strategyType !== "hybridBasedStrategy" &&
      !strategies[strategyType]
    )
      return;

    setState((prevState) => ({
      ...prevState,
      selectedStrategy: strategyType,
      originalStrategy:
        strategyType === "raStrategyBlackBox" ||
        strategyType === "timeBasedStrategy" ||
        strategyType === "greekBasedStrategy" ||
        strategyType === "indicatorBasedStrategy" ||
        strategyType === "hybridBasedStrategy"
          ? []
          : [...strategies[strategyType]],
      filteredStrategy:
        strategyType === "raStrategyBlackBox" ||
        strategyType === "timeBasedStrategy" ||
        strategyType === "greekBasedStrategy" ||
        strategyType === "indicatorBasedStrategy" ||
        strategyType === "hybridBasedStrategy"
          ? []
          : [...strategies[strategyType]],
    }));

    setValue("StrategySearch", "");
    setValue("StrategySort", "");
  };

  const handleStrategyFilter = () => {
    if (!searchStrategy) {
      setState((prevState) => ({
        ...prevState,
        filteredStrategy: [...originalStrategy], // Reset when search is empty
      }));
      return;
    }

    const filteredData = originalStrategy.filter((item) =>
      item.name?.toLowerCase().includes(searchStrategy.toLowerCase())
    );

    setState((prevState) => ({
      ...prevState,
      filteredStrategy: filteredData, // Update filtered list first
    }));
  };

  // Sort Function
  const handleStrategySort = (dataToSort = [...filteredStrategy]) => {
    if (!sortStrategy) {
      setState((prevState) => ({
        ...prevState,
        filteredStrategy: originalStrategy, // Reset when sort is cleared
      }));
      return;
    }

    let sortedData = [...dataToSort];

    switch (sortStrategy) {
      case "Min Capital":
        sortedData.sort((a, b) => a.minCapital - b.minCapital);
        break;
      case "Max Capital":
        sortedData.sort((a, b) => b.minCapital - a.minCapital);
        break;
      case "Latest":
        sortedData.sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        break;
    }

    setState((prevState) => ({
      ...prevState,
      filteredStrategy: sortedData,
    }));
  };

  // Apply Search Dynamically
  useEffect(() => {
    if (strategies) {
      if (searchStrategy) {
        handleStrategyFilter();
      } else {
        setState((prevState) => ({
          ...prevState,
          filteredStrategy: [...prevState.originalStrategy],
        }));
      }
    }
  }, [searchStrategy, strategies, selectedStrategy]);

  useEffect(() => {
    if (!strategies) return;

    if (sortStrategy) {
      // Sort only the filtered results (searched strategies)
      handleStrategySort([...filteredStrategy]);
    } else {
      setState((prevState) => ({
        ...prevState,
        filteredStrategy: searchStrategy
          ? prevState.originalStrategy.filter((item) =>
              item.name?.toLowerCase().includes(searchStrategy.toLowerCase())
            ) // Restore only searched results
          : [...prevState.originalStrategy], // If no search, reset fully
      }));
    }
  }, [sortStrategy, strategies, selectedStrategy]);

  const searchPlaceHolder = (() => {
    switch (selectedStrategy) {
      case "inHouse":
        return "Search In-House Strategies";
      case "popular":
        return "Search Popular Strategies";
      case "diy":
        return "Search DIY Strategies";
      default:
        return "Search Strategies";
    }
  })();

  const ShimmerPart = () => {
    return (
      <ScrollyDiv>
        {[...Array(6)].map((_, i) => (
          <ShimmerCard key={i} $height="300px" />
        ))}
      </ScrollyDiv>
    );
  };

  const strategiesSection = () => {
    return (
      <StrategiesColumnItemsDiv $ismobile $padding="0">
        {allStrategiesLoadingState ? (
          ShimmerPart()
        ) : allStrategiesAPIStatusFail ? (
          <NoSearchStrategy text="Failed to fetch data." />
        ) : filteredStrategy.length > 0 ? (
          <ScrollyDiv>
            {filteredStrategy?.map((item) => (
              <StrategiesCard
                key={item.id}
                item={item}
                maxWidth="520px"
                minWidth="310px"
                width="97%"
                mobilewidth="100%"
              />
            ))}
          </ScrollyDiv>
        ) : searchStrategy ? (
          <NoSearchStrategy text={"No Such Strategy Found!"} />
        ) : (
          <NoActiveStrategy />
        )}
      </StrategiesColumnItemsDiv>
    );
  };

  const renderContent = () => {
    if (selectedStrategy === "raStrategyBlackBox") {
      return (
        <ComingSoon content="RA Blackbox Strategies Page currently Under Developement" />
      );
    }
    if (selectedStrategy === "timeBasedStrategy") {
      return (
        <ComingSoon content="Time Based Strategies Page currently Under Developement" />
      );
    }
    if (selectedStrategy === "greekBasedStrategy") {
      return (
        <ComingSoon content="Greek Based Strategies Page currently Under Developement" />
      );
    }
    if (selectedStrategy === "indicatorBasedStrategy") {
      return (
        <ComingSoon content="Indicator Based Strategies Page currently Under Developement" />
      );
    }
    if (selectedStrategy === "hybridBasedStrategy") {
      return (
        <ComingSoon content="Hybrid Based Strategies Page currently Under Developement" />
      );
    }
    return strategiesSection();
  };

  return (
    <DynamicWrapperDiv>
      <ToggleButtonContainer
        buttons={ButtonsData}
        currentPage={selectedStrategy}
        onPageChange={handlePageChange}
      />
      <SearchSortLinkDiv>
        <SearchSortComp
          inputName={"StrategySearch"}
          sortName={"StrategySort"}
          sortOptions={SortDeployDropDownData}
          control={control}
          searchPlaceholder={searchPlaceHolder}
        />
      </SearchSortLinkDiv>

      {renderContent()}
    </DynamicWrapperDiv>
  );
}

export default HomePage;
