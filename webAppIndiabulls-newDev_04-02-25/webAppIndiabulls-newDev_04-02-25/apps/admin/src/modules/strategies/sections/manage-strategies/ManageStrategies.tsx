import React, { useEffect, useState } from "react";
import {
  RootState,
  useAppDispatch,
  useAppSelector,
} from "../../../../store/Store";
import {
  setCategories,
  setStrategies,
} from "../../state-slice/StrategiesSlice";
import {
  HeadingWrapper,
  PageHeading,
} from "../../../../components/ui/GlobalStyles";
import PageContainer from "../../../sharedComponents/PageContainer";
import CustomTable from "../../../sharedComponents/CustomTable/CustomTable";
import TableShimmerEffect from "../../../../components/ui/shimmers/TableShimmerComp";
import { useColumns } from "./ManageStrategiesData";
import { AllStrategiestableGetService } from "../../services/AppServices";
import { StrategyRows } from "../../StrategiesUtils";
import EditStrategyComp from "../strategymanage/EditStrategyComp";
import ApprovedManage from "../approvedpopup/ApprovedPopup";
import { TableHeader } from "../../../sharedComponents/CustomTable/CustomTableStyles";
import StrategyRejectComp from "../rejectpopup/StrategyReject";

const AllStrategies: React.FC = () => {
  const dispatch = useAppDispatch();

  const AllStrategies = useAppSelector(
    (appState: RootState) => appState.strategiesdata.strategiesData
  );

  const [rows, setRows] = useState<StrategyRows[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isApprovedModalOpen, setIsApprovedModalOpen] = useState(false);
  const [isRejectModalOpen, setIsRejectModalOpen] = useState(false);
  const [selectedStrategy, setSelectedStrategy] = useState<{
    id: number;
  } | null>(null);
const [selectedStrategyName, setSelectedStrategyName] = useState("")
  const [selectedStrategyId, setSelectedStrategyId] = useState<number | null>(
    null
  );

  // Modal handlers
  const handleCloseModal = () => {
    setIsEditModalOpen(false);
    setIsApprovedModalOpen(false);
    setIsRejectModalOpen(false);
    setSelectedStrategyId(null);
    setSelectedStrategy(null);
  };

  const handleOpenEditModal = (id: number) => {
    setSelectedStrategyId(id);
    setIsEditModalOpen(true);
  };

  const handleOpenApprovedModal = (id:number) => {
    setSelectedStrategyId(id);
    setIsApprovedModalOpen(true);
  };

  const handleOpenRejectModal = (id: number,name:string) => {
    setSelectedStrategy({ id });
    setIsRejectModalOpen(true);
      setSelectedStrategyName(name); // Store the name in state

  };

  // Fetch strategies on mount
  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const response = await AllStrategiestableGetService("all");
        if (response?.data) {
          dispatch(
            setStrategies({ strategiesData: response.data.allAdminStrategies })
          );
          dispatch(setCategories({ categories: response.data.categories }));
        } else {
          console.error("No data found");
        }
      } catch (error) {
        throw error;
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [dispatch]);

  // Map Redux data to table rows
  useEffect(() => {
    if (!Array.isArray(AllStrategies)) return;

    const mappedRows = AllStrategies.map((strategy: StrategyRows) => ({
      id: strategy.id,
      userId: strategy.userId,
      description: strategy.description,
      name: strategy.name,
      instrument: strategy.instrument || "N/A",
      status: strategy.status || "N/A",
      isHidden: strategy.isHidden,
    }));
    setRows(mappedRows);
  }, [AllStrategies]);

  const columns = useColumns(
    handleOpenEditModal,
    handleOpenApprovedModal,
    handleOpenRejectModal
  );
  return (
    <>
      <HeadingWrapper>
        <PageHeading>
          <TableHeader>STRATEGY MANAGEMENT</TableHeader>
        </PageHeading>
      </HeadingWrapper>

      {isLoading ? (
        <TableShimmerEffect rowsCount={11} />
      ) : (
        <PageContainer>
          <CustomTable rows={rows} columns={columns} />
        </PageContainer>
      )}

      <EditStrategyComp
        open={isEditModalOpen}
        onClose={handleCloseModal}
        id={selectedStrategyId}
      />
      <ApprovedManage
        open={isApprovedModalOpen}
        onClose={handleCloseModal}
        id={selectedStrategyId}
      />

      
      <StrategyRejectComp
        open={isRejectModalOpen}
        onClose={handleCloseModal}
        id={selectedStrategy?.id}
          strategyName={selectedStrategyName} 

      />
    </>
  );
};

export default AllStrategies;
