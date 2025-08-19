import { useState, useEffect, useMemo } from "react";
import { DynamicWrapperDiv } from "../../components/ui/GlobalStyles";
import { SortDropDownData } from "./DeployedStrategiesData";
import {
  ActiveStrategiesDiv,
  CardsScrollYDiv,
  ContentBottomDiv,
} from "./DeployedStrategiesStyles";
import CustomPagination from "../../../../../packages/ui/src/sharedcomponents/Pagination/CustomPagination";
import NoActiveStrategyPage from "./sections/nodeployedinfotext/NoDeployedInfoText";
import { DeployedStrategiesService } from "./services/DeployedStrategiesServices";
import { useForm, useWatch } from "react-hook-form";
import SearchSortComp from "../../components/searchsortwrapper/SearchSortComp";
import { ActiveStrategiesResponseTypes } from "./services/DeployedStrategiesServiceTypes";
import DeployedStrategyCard from "./sections/deployedstrategycard/DeployedStrategyCard";
import NoSearchStrategy from "../../../../../packages/ui/src/sharedcomponents/nosearch/NoSearchCard";
import { useAppDispatch, useAppSelector } from "../../store/Store";
import { saveDeployedStrategies } from "./state-slice/DeployedStrategySlice";
import { getAllStrategiesService } from "../readytodeploy/services/AllStrategiesServices";
import { saveStrategies } from "../readytodeploy/state-slice/StartegySlice";
import { ShimmerCard } from "./sections/deployedshimmercard/ShimmerCard";
import { StrategyStatusTypes } from "./services/SocketDataUtils";
import { shallowEqual } from "react-redux";

export interface ActiveStrategiesStateType {
  openMenuIndex: number | null;
  showTableIndex: number | null;
  tempActiveStrategies: ActiveStrategiesResponseTypes[] | [];
  currentPage: number;
  deployedStrategy: ActiveStrategiesResponseTypes[] | [];
  updatedDeployedStrategies: ActiveStrategiesResponseTypes[] | [];
  isLoading?: boolean;
  contentTopHeight: number;
  apiStatusFail: string;
}

const InitialState: ActiveStrategiesStateType = {
  openMenuIndex: null,
  showTableIndex: null,
  tempActiveStrategies: [],
  currentPage: 0,
  deployedStrategy: [],
  updatedDeployedStrategies: [],
  isLoading: true,
  contentTopHeight: 0,
  apiStatusFail: "",
};

function ActiveStrategiesPage() {
  const [state, setState] = useState<ActiveStrategiesStateType>(InitialState);
  const {
    tempActiveStrategies,
    currentPage,
    deployedStrategy,
    isLoading,
    apiStatusFail,
  } = state;
  const { control } = useForm();
  const itemsPerPage = 10;
  const dispatch = useAppDispatch();
  const { activeStrategiesResponse } = useAppSelector(
    (appState) => appState.deployedstrategiesdata.deployedStrategyRes
  );
 const { ExecutionType } = useAppSelector(
    (appState) => appState.ExecutionType
  );
  const { socketData } = useAppSelector((appState) => appState.socket, shallowEqual);
  const { strategyStatusData} = useAppSelector((appState) => appState.socket);

  const UserId = sessionStorage.getItem("uId");
  const fetchAllStrategiesData = async () => {
    try {
      const result = await getAllStrategiesService();
      if (result) {
        dispatch(saveStrategies({ strategiesRes: result.data }));
      }
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    fetchAllStrategiesData();
  }, [activeStrategiesResponse]);

  const fetchDeployedStrategies = async () => {
    try {
      if (!UserId) return null;

      const result = await DeployedStrategiesService(UserId);
      if (result?.data) {
        dispatch(saveDeployedStrategies({ deployedStrategyRes: result.data }));
      }
      setState((prevState) => ({
        ...prevState,
        apiStatusFail: "",
      }));
    } catch (error) {
      setState((prevState) => ({
        ...prevState,
        apiStatusFail: "No Data Available",
      }));
      throw error;
    } finally {
      setState((prevState) => ({
        ...prevState,
        isLoading: false,
      }));
    }
  };

  useEffect(() => {
    fetchDeployedStrategies();
  }, []);

  const overrideStrategiesWithSocketData = (
    strategies: ActiveStrategiesResponseTypes[],
    socketData: any,
    strategyStatusData: StrategyStatusTypes[],
  ) => {
    if (!socketData?.strategyLegs) return strategies;

    return strategies.map((strategy) => {
      const matchingSocketData = socketData.strategyLegs.find(
        (socketItem: any) => socketItem.strategyId === strategy.sid
      );
      const matchingStatus = strategyStatusData.find(
        (s) => s.id === strategy.sid
      );

      // take the status from seperate web socket for the status, and the mtm value from the main open positions web socket
      return {
        ...strategy,
        ...(matchingStatus && {
          status: matchingStatus.status,
        }),
        ...(matchingSocketData && {
          strategyLegTableDTO: {
            ...strategy.strategyLegTableDTO,
            strategyMTM: matchingSocketData.strategyMTM,
          },
        }),
      };
    });
  };

  useEffect(() => {
    if (activeStrategiesResponse) {
      setState((prevState) => ({
        ...prevState,
        deployedStrategy: activeStrategiesResponse,
        tempActiveStrategies: activeStrategiesResponse,
      }));
    }
  }, [activeStrategiesResponse]);

  useEffect(() => {
    if (deployedStrategy.length > 0) {
      const updatedStrategies = overrideStrategiesWithSocketData(
        tempActiveStrategies,
        socketData,
        strategyStatusData,
      );

      setState((prevState) => ({
        ...prevState,
        tempActiveStrategies: updatedStrategies,
      }));
    }
  }, [socketData, strategyStatusData]);

  const searchActive = useWatch({ control, name: "DeployedStartegySearch" });
  const sortActive = useWatch({ control, name: "DeployedStartegySort" });

  const handleSearchFilter = () => {
    const filteredStrategies = deployedStrategy.filter(
      (item: ActiveStrategiesResponseTypes) =>
        item.name?.toLowerCase().includes(searchActive?.toLowerCase())
    );

    setState((prevState) => ({
      ...prevState,
      tempActiveStrategies: filteredStrategies,
      currentPage: 0,
    }));
  };

  const handleSort = () => {
    const data = state.tempActiveStrategies.length
      ? [...state.tempActiveStrategies]
      : deployedStrategy;
    const sortedData = data.sort((a, b) => {
      switch (sortActive) {
        case "Min Capital":
          return a.capital - b.capital;
        case "Max Capital":
          return b.capital - a.capital;
        default:
          return 0;
      }
    });

    setState((prevState) => ({
      ...prevState,
      tempActiveStrategies: sortedData,
    }));
  };

  useEffect(() => {
    if (searchActive) {
      handleSearchFilter();
    } else {
      setState((prevState) => ({
        ...prevState,
        tempActiveStrategies: deployedStrategy,
        currentPage: 0,
      }));
    }
  }, [searchActive]);

  useEffect(() => {
    if (sortActive) {
      handleSort();
    } else {
      // Reset to either the searched data or the full data
      const baseData = searchActive
        ? deployedStrategy.filter((item) =>
            item.name?.toLowerCase().includes(searchActive?.toLowerCase())
          )
        : deployedStrategy;

      setState((prev) => ({
        ...prev,
        tempActiveStrategies: baseData,
      }));
    }
  }, [sortActive, searchActive, deployedStrategy]);

const filteredByExecution = useMemo(() => {
  return tempActiveStrategies.filter(
    (item) => item.execution === ExecutionType
  );
}, [tempActiveStrategies, ExecutionType]);

  const totalPages = Math.ceil(filteredByExecution.length / itemsPerPage);

  const currentItems = filteredByExecution.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  useEffect(() => {
    if (currentPage >= totalPages) {
      setState((prevState) => ({
        ...prevState,
        currentPage: 0,
      }));
    }
  }, [ExecutionType]);

  function handlePageChange(newPage: number) {
    setState((prevState) => ({
      ...prevState,
      currentPage: newPage,
    }));
  }

  return (
    <DynamicWrapperDiv>
      <SearchSortComp
        sortOptions={SortDropDownData}
        control={control}
        inputName="DeployedStartegySearch"
        sortName="DeployedStartegySort"
        searchPlaceholder="Search Deployed Strategies"
      />
      <ActiveStrategiesDiv>
        <CardsScrollYDiv>
          {isLoading ? (
            [...Array(3)].map((_, i) => <ShimmerCard key={i} />)
          ) : apiStatusFail ? (
            <NoSearchStrategy text={apiStatusFail} />
          ) : filteredByExecution.length > 0 ? (
            currentItems.map((item, i) => (
              <DeployedStrategyCard key={i} item={item} index={i} />
            ))
          ) : searchActive ? (
            <NoSearchStrategy text="No Such Strategy Found!" />
          ) : (
            <NoActiveStrategyPage />
          )}
        </CardsScrollYDiv>
        <ContentBottomDiv>
          {filteredByExecution.length > 10 && (
            <CustomPagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          )}
        </ContentBottomDiv>
      </ActiveStrategiesDiv>
    </DynamicWrapperDiv>
  );
}

export default ActiveStrategiesPage;
