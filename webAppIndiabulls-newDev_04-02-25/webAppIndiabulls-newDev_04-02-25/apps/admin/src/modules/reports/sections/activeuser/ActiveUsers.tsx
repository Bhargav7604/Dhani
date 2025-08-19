import { useEffect, useState } from "react";
import {
  HeadingWrapper,
  PageHeading,
} from "../../../../components/ui/GlobalStyles";
import CustomTable from "../../../sharedComponents/CustomTable/CustomTable";
import PageContainer from "../../../sharedComponents/PageContainer";
import { columns } from "./activeUserData";
import { ActiveUserTypes } from "../../ReportsUtils";
import { ActiveUserGetService } from "../../services/AppService";
import { TableHeader } from "../../../sharedComponents/CustomTable/CustomTableStyles";
import TableShimmerEffect from "../../../../components/ui/shimmers/TableShimmerComp";
import dayjs from "dayjs";

const ActiveUsers = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [rows, setRows] = useState<ActiveUserTypes[]>([]);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const response = await ActiveUserGetService({ duration: "7" });
        if (response?.activeUsers) {
          const mappedRows = response.activeUsers.map(
            (strategy: ActiveUserTypes, index: number) => {
              const lastActivetimeStamp = parseFloat(strategy.lastActive);
              return {
                id: index + 1,
                userId: strategy.userId,
                lastActive: !isNaN(lastActivetimeStamp)
                  ? dayjs(lastActivetimeStamp * 1000).format(
                      "DD-MM-YYYY HH:mm:ss"
                    )
                  : "N/A",
                sessionCount: strategy.sessionCount,
              };
            }
          );
          setRows(mappedRows);
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
          <TableHeader>Active Users</TableHeader>
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

export default ActiveUsers;
