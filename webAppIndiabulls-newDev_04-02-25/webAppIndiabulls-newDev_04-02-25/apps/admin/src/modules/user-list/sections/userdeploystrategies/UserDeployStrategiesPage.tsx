import { useState, useEffect, useRef } from "react";
import { DynamicWrapperDiv } from "../../../../components/ui/GlobalStyles";
import { SortDropDownData } from "../../../../../../user/src/modules/deployedstrategies/DeployedStrategiesData";
import { useForm, useWatch } from "react-hook-form";
import { ActiveStrategiesResponseTypes } from "../../../../../../user/src/modules/deployedstrategies/services/DeployedStrategiesServiceTypes";
import NoSearchStrategy from "../../../../../../../packages/ui/src/sharedcomponents/nosearch/NoSearchCard";
import { useAppDispatch, useAppSelector } from "../../../../store/Store";
import { saveDeployedStrategies } from "../../state-slice/UserStrategySlice";
import { ShimmerCard } from "../../../../../../user/src/modules/deployedstrategies/sections/deployedshimmercard/ShimmerCard";
import { UserDeployStrategyService } from "../../services/AppServices";
import { useParams } from "react-router-dom";
import DeployedStrategyCard from "../deploystrategycard/DeployStrategyCard";
import Refresh from "../../../../assets/svg/refresh-svgrepo-com.svg"
import {
  ActiveStrategiesDivision,
  CardsScrollYDivision,
  ContentBottomDivision,
  FetchButton,
  UserdetailsWraper,
  UserInfoRow,
  UserInfoText,
  UserNameText,
  UserTextWraper,
} from "../../UsersStyles";
import NoActiveStrategyFoundPage from "../nofoundstategies/NoFoundStrategies";
import CustomPagination from "../../../sharedComponents/CustomTable/Pagination/CustomPagination";
import { PageNationCountText } from "../../../sharedComponents/CustomTable/CustomTableStyles";
import ExecutionTypeToggleComp from "../executionmode/ExecutionTypeToggleComp";
import SearchSortComp from "../../../../components/searchsortwrapper/SearchSortComp";

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

function UserDeployStrategiesPage() {
  const { userId } = useParams<{ userId: string }>();
  const queryParams = new URLSearchParams(location.search);
  const userName = queryParams.get("userName");
  const clientID = queryParams.get("clientId");

  const renderForwardComp =
    location.pathname === `/userdeploystrategies/${userId}`;

  const [state, setState] = useState<ActiveStrategiesStateType>(InitialState);
  const { tempActiveStrategies, currentPage, deployedStrategy, isLoading } =
    state;
  const { control } = useForm();
  const itemsPerPage = 10;
  const dispatch = useAppDispatch();
  const { activeStrategiesResponse } = useAppSelector(
    (appState) => appState.deployedstrategiesdata.deployedStrategyRes
  );
  const { ExecutionType } = useAppSelector(
    (appState) => appState.ExecutionType
  );

  const { socketData }: any = useAppSelector((appState) => appState.socket);
  // const { algoCompHeight } = useAppSelector((appState) => appState.algoCompDimension);

  // const fetchAllStrategiesData = async () => {
  //   try {
  //     const result = await getAllStrategiesService();
  //     if (result) {
  //       dispatch(saveStrategies({ strategiesRes: result?.data }));
  //     }
  //   } catch (error) {
  //     throw error;
  //   }
  // };

  useEffect(() => {
    //  fetchAllStrategiesData();
  }, [activeStrategiesResponse]);

  const fetchDeployedStrategies = async () => {
    try {
      if (!userId) return null;

      const result = await UserDeployStrategyService(userId);
      if (result?.data) {
        dispatch(saveDeployedStrategies({ deployedStrategyRes: result.data }));
        // console.log(result?.data);
        // console.log("data",result?.data);
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
    socketData: any
  ) => {
    if (!socketData?.strategyLegs) return strategies;

    return strategies.map((strategy) => {
      const matchingSocketData = socketData.strategyLegs.find(
        (socketItem: any) => socketItem.strategyId === strategy.sid
      );

      return matchingSocketData
        ? {
            ...strategy,
            strategyLegTableDTO: {
              ...strategy.strategyLegTableDTO,
              strategyMTM: matchingSocketData.strategyMTM,
              strategyStatus: matchingSocketData.strategyStatus,
            },
          }
        : strategy;
    });
  };

  useEffect(() => {
    if (activeStrategiesResponse) {
      // let sortedData = preProcessStrategies(activeStrategiesResponse);

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
        socketData
      );

      setState((prevState) => ({
        ...prevState,
        tempActiveStrategies: updatedStrategies,
      }));
    }
  }, [socketData]);

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
    }
  }, [sortActive]);

  // const totalPages = Math.ceil(tempActiveStrategies.length / itemsPerPage);
  // const currentItems = tempActiveStrategies.slice(
  //   currentPage * itemsPerPage,
  //   (currentPage + 1) * itemsPerPage
  // );
  const filteredByExecution = tempActiveStrategies.filter(
    (item) => item.execution === ExecutionType
  );

  const totalPages = Math.ceil(filteredByExecution.length / itemsPerPage);

  const currentItems = filteredByExecution.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );
  function handlePageChange(newPage: number) {
    setState((prevState) => ({
      ...prevState,
      currentPage: newPage,
    }));
  }

  const ContentTopDivRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ContentTopDivRef.current;
    if (!el) return;

    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const newHeight = entry.contentRect.height;
        setState((prevState) => ({
          ...prevState,
          contentTopHeight: newHeight,
        }));
      }
    });

    observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
      observer.disconnect(); // Clean up the observer
    };
  }, [ContentTopDivRef]);

  return (
    <DynamicWrapperDiv $nopadding>
      {/* <ContentTopDiv $top={algoCompHeight} $padding={true} ref={ContentTopDivRef}> */}
      <UserdetailsWraper>
        <SearchSortComp
          sortOptions={SortDropDownData}
          control={control}
          inputName="DeployedStartegySearch"
          sortName="DeployedStartegySort"
          searchPlaceholder="Search Deployed Strategies"
        />
        <FetchButton onClick={fetchDeployedStrategies}> <img src={Refresh}></img> </FetchButton>
        
        <div>{renderForwardComp && <ExecutionTypeToggleComp />}</div>
        <UserInfoRow>
          <UserTextWraper>
            <UserNameText>Client ID:</UserNameText>
            <UserInfoText>{clientID}</UserInfoText>
          </UserTextWraper>
          <UserTextWraper>
            <UserNameText>User Name:</UserNameText>{" "}
            <UserInfoText>{userName}</UserInfoText>
          </UserTextWraper>
        </UserInfoRow>
      </UserdetailsWraper>
      {/* </ContentTopDiv> */}
      {/* <MainContentSpacer $height={contentTopHeight}/> */}
      <ActiveStrategiesDivision
      // $height={contentTopHeight}
      // $height={contentTopHeight}
      >
        <CardsScrollYDivision>
          {isLoading ? (
            [...Array(4)].map((_, i) => <ShimmerCard key={i} />)
          ) : currentItems.length > 0 ? (
            currentItems.map((item, i) => (
              <DeployedStrategyCard
                key={i}
                item={item}
                index={i}
                userId={userId}
              />
            ))
          ) : searchActive ? (
            <NoSearchStrategy text="No Subcribed  Strategy Found! this user" />
          ) : (
            <NoActiveStrategyFoundPage />
          )}
        </CardsScrollYDivision>
        <ContentBottomDivision>
          {deployedStrategy.length > 10 && (
            <CustomPagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          )}
        </ContentBottomDivision>
        <PageNationCountText>
          Showing {+1}–{Math.min(currentItems.length)} of{" "}
          {tempActiveStrategies.length} results
        </PageNationCountText>
      </ActiveStrategiesDivision>
    </DynamicWrapperDiv>
  );
}

export default UserDeployStrategiesPage;
