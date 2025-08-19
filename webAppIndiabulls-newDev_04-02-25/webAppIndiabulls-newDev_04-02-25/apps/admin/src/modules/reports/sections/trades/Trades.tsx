import { useEffect, useState } from "react";
import {
  HeadingWrapper,
  PageHeading,
} from "../../../../components/ui/GlobalStyles";
import CustomTable from "../../../sharedComponents/CustomTable/CustomTable";
import PageContainer from "../../../sharedComponents/PageContainer";
import { columns } from "./TradesData";
import { TradesGetService } from "../../services/AppService";
import { TradeRowsTypes } from "../../ReportsUtils";
import { TableHeader } from "../../../sharedComponents/CustomTable/CustomTableStyles";
import TableShimmerEffect from "../../../../components/ui/shimmers/TableShimmerComp";

const TradesPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [rows, setRows] = useState<TradeRowsTypes[]>([]);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);

      try {
        const response = await TradesGetService();
        if (response && response.data) {
          const mappedRows = response.data.map((item: TradeRowsTypes) => ({
            userId: item.userId,
            userName: item.userName,
            totalTrades: item.totalTrades,
            totalQuantity: item.totalQuantity,
            totalPrice: item.totalPrice,
          }));

          setRows(mappedRows);
        } else {
          console.error("No user data found");
        }
      } catch (error) {
        throw error;
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
          <TableHeader> Trades</TableHeader>
        </PageHeading>
      </HeadingWrapper>
      {isLoading ? (
        <TableShimmerEffect rowsCount={7} />
      ) : (
        <PageContainer>
          <CustomTable rows={rows} columns={columns} />
        </PageContainer>
      )}
    </>
  );
};

export default TradesPage;
