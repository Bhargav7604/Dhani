import {
  HeadingWrapper,
  PageHeading,
} from "../../../../components/ui/GlobalStyles";
import PageContainer from "../../../sharedComponents/PageContainer";
import CustomTable from "../../../sharedComponents/CustomTable/CustomTable";
import { useColumns } from "./StrategyLogData";
import { TableHeader } from "../../../sharedComponents/CustomTable/CustomTableStyles";
import { useEffect, useState } from "react";
import TableShimmerEffect from "../../../../components/ui/shimmers/TableShimmerComp";
import { StrategyLogGetService } from "../../services/AppServices";
import { StrategyLogRows } from "../../StrategiesUtils";
import dayjs from "dayjs";

const StrategyLog: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [rows, setRows] = useState([]);

  const columns = useColumns();

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const response = await StrategyLogGetService();
        if (response) {
          const mappedRows = response?.data.map(
            (item: StrategyLogRows, index: number) => ({
              id: index + 1,
              strategyId: item.strategyId,
              strategyName: item.strategyName,
              userId: item.userId,
              userName:item.userName,
              deploymentDate: dayjs(Number(item.deploymentDate) * 1000).format(
                "YYYY-MM-DD HH:mm:ss"
              ),
              description: item.description,
              status: item.status,
              errorCode: item.errorCode,
            })
          );

          setRows(mappedRows);
          setIsLoading(false);
        } else {
          console.error("No content data found");
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <HeadingWrapper>
        <PageHeading>
          <TableHeader> Strategy Log </TableHeader>
        </PageHeading>
      </HeadingWrapper>
      {isLoading ? (
        <TableShimmerEffect rowsCount={7} />
      ) : (
        <PageContainer>
          <CustomTable
            rows={rows}
            columns={columns}
            // enableStrategyButtons={true}
          />
        </PageContainer>
      )}
    </>
  );
};

export default StrategyLog;
