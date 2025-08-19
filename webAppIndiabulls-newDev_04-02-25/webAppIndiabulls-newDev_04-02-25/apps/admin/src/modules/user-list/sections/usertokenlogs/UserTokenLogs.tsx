import React, { useEffect, useState } from "react";
import { columns } from "../userlistpage/UserListData.tsx";
import { UserTokenLogsTableService } from "../../services/AppServices.ts";
import {
  HeadingWrapper,
  PageHeading,
} from "../../../../components/ui/GlobalStyles.ts";
import { TableHeader } from "../../../sharedComponents/CustomTable/CustomTableStyles.ts";
import TableShimmerEffect from "../../../../components/ui/shimmers/TableShimmerComp.tsx";
import PageContainer from "../../../sharedComponents/PageContainer.tsx";
import CustomTable from "../../../sharedComponents/CustomTable/CustomTable.tsx";
import { useParams } from "react-router-dom";
import dayjs from "dayjs";
import { userTokenRows } from "../../services/AppServiceUtils.ts";
import {
  UserdetailsWraper,
  UserInfoRow,
  UserInfoText,
  UserNameText,
  UserTextWraper,
} from "../../UsersStyles.ts";

const UserTokenLogs: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();
  const queryParams = new URLSearchParams(location.search);
  const userName = queryParams.get("userName");
  const clientID = queryParams.get("clientId");

  const [isLoading, setIsLoading] = useState(true);
  const [rows, setRows] = useState<userTokenRows[]>([]);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);

      try {
        if (!userId) return;

        const response = await UserTokenLogsTableService(userId);
        if (response?.data) {
          const mappedRows = response.data.map(
            (item: userTokenRows, index: number) => {
              const loginTimestamp = parseFloat(item.tokenGeneratedTime);
              const welcomeTimestamp = parseFloat(item.welcomeAcknowledgedTime);

              return {
                id: index + 1,
                token: item.token || "N/A",
                tokenType: item.tokenType || "N/A",
                isWelcomeAccepted: item.isWelcomeAccepted,

                welcomeAcknowledgedTime: !isNaN(welcomeTimestamp)
                  ? dayjs(welcomeTimestamp * 1000).format("DD-MM-YYYY HH:mm:ss")
                  : "N/A",
                tokenGeneratedTime: !isNaN(loginTimestamp)
                  ? dayjs(loginTimestamp * 1000).format("DD-MM-YYYY HH:mm:ss")
                  : "N/A",
                machineId: item.machineId,
                remarks: item.remarks,
              };
            }
          );
          setRows(mappedRows);
        } else {
          console.error("No Tokens data found");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false); // always stop loading
      }
    }
    fetchData();
  }, [userId]);

  return (
    <>
      <HeadingWrapper>
        <PageHeading>
          <TableHeader>User Token Logs</TableHeader>
          <UserdetailsWraper>
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
        </PageHeading>
      </HeadingWrapper>
      {isLoading ? (
        <TableShimmerEffect rowsCount={7} />
      ) : (
        <PageContainer>
          <CustomTable rows={rows} columns={columns} enableExport={true} />
        </PageContainer>
      )}
    </>
  );
};

export default UserTokenLogs;
