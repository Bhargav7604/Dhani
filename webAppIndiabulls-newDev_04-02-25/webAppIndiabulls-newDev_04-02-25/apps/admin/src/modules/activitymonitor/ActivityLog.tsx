import { HeadingWrapper, PageHeading } from "../../components/ui/GlobalStyles";
import PageContainer from "../sharedComponents/PageContainer";
import CustomTable from "../sharedComponents/CustomTable/CustomTable";
import { columns } from "./ActivityData";
import { TableHeader } from "../sharedComponents/CustomTable/CustomTableStyles";
import { ActivityMonitorGetService } from "./services/Appservice";
import { useEffect, useState } from "react";
import { ActivityMonitorRows } from "./AcitityMonitorUtils";
import TableShimmer from "../../components/ui/shimmers/TableShimmerComp";
import dayjs from "dayjs";

const ActivityLog = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const response = await ActivityMonitorGetService();
        if (response?.data) {
          const mappedRows = response.data.map((item: ActivityMonitorRows) => {
            const lastActiveTimestamp = parseFloat(item.lastActiveTime);
            const tokenGeneratedTimestamp = parseFloat(item.tokenGeneratedTime);
            const welcomeAcceptTimeStamp = parseFloat(
              item.welcomeAcknowledgedTime
            );
            return {
              id: item.id,
              clientId: item.clientId || "N/A",
              name: item.name,
              token: item.token || "N/A",
              tokenType: item.tokenType,
              isWelcomeAccepted:item.isWelcomeAccepted,
               welcomeAcknowledgedTime: !isNaN(welcomeAcceptTimeStamp)
                ? dayjs(welcomeAcceptTimeStamp * 1000).format(
                    "DD-MM-YYYY HH:mm:ss"
                  )
                : "N/A",
              tokenGeneratedTime: !isNaN(tokenGeneratedTimestamp)
                ? dayjs(tokenGeneratedTimestamp * 1000).format(
                    "DD-MM-YYYY HH:mm:ss"
                  )
                : "N/A",
              lastActiveTime: !isNaN(lastActiveTimestamp)
                ? dayjs(lastActiveTimestamp * 1000).format(
                    "DD-MM-YYYY HH:mm:ss"
                  )
                : "N/A",
             
              lastActiveMachineId: item.lastActiveMachineId || "N/A",
              tokenGeneratedMachineId: item.tokenGeneratedMachineId || "N/A",
            };
          });
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
          <TableHeader>Activity Log</TableHeader>
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
