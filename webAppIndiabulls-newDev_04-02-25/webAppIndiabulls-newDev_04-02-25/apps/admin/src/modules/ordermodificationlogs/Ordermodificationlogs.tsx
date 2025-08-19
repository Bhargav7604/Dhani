import { HeadingWrapper, PageHeading } from "../../components/ui/GlobalStyles";
import PageContainer from "../sharedComponents/PageContainer";
import CustomTable from "../sharedComponents/CustomTable/CustomTable";
import { columns } from "./OrdermodificationData";
import { TableHeader } from "../sharedComponents/CustomTable/CustomTableStyles";
import { useEffect, useState } from "react";
import { OrderModificationRows } from "./OrdermodificationUtils";
import TableShimmer from "../../components/ui/shimmers/TableShimmerComp";
import { OrderModificationGetService } from "./services/Appservice";
import dayjs from "dayjs";

const ActivityLog = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const response = await OrderModificationGetService();
        if (response?.data) {
          const mappedRows = response.data.map(
            (item: OrderModificationRows) => {
              const modifiyTimeStamp = parseFloat(item.modifyDateTime);
              return {
                id: item.id,
                userId: item.userId,
                signalId: item.signalId,
                legId: item.legId,
                modifyCount: item.modifyCount,
                quantity: item.quantity,
                modifyPrice: item.modifyPrice,
                modifyDateTime: !isNaN(modifiyTimeStamp)
                  ? dayjs(modifiyTimeStamp * 1000).format("DD-MM-YYYY HH:mm:ss")
                  : "N/A",
                remarks: item.remarks,
              };
            }
          );
          setRows(mappedRows);
        } else {
          console.error("No Activity data found");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
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
          <TableHeader>Order Modification Logs</TableHeader>
        </PageHeading>
      </HeadingWrapper>
      {isLoading ? (
        <TableShimmer rowsCount={7} />
      ) : (
        <PageContainer>
          <CustomTable rows={rows} columns={columns} />
        </PageContainer>
      )}
    </>
  );
};

export default ActivityLog;
