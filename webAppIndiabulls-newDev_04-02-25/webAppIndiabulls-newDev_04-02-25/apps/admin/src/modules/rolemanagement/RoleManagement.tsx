import { HeadingWrapper, PageHeading } from "../../components/ui/GlobalStyles"; // Reusing global heading styles
import PageContainer from "../sharedComponents/PageContainer";
import CustomTable from "../sharedComponents/CustomTable/CustomTable";

import TableShimmerEffect from "../../components/ui/shimmers/TableShimmerComp";
import { TableHeader } from "../sharedComponents/CustomTable/CustomTableStyles";
import { columns } from "./RoleManagementData";
import { RollManagementGetService } from "./services/AppServices";
import { useEffect, useState } from "react";
import { RoleUserRow } from "./services/AppServicesTypes";

const RollManagementPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [rows, setRows] = useState<RoleUserRow[]>([]);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const response = await RollManagementGetService();

        if (response?.data) {
          const mappedRows: RoleUserRow[] = response.data.flatMap(
            (item, index) => {
              // If userData is not empty, map each user
              if (item.userData && item.userData.length > 0) {
                return item.userData.map((user, userIndex) => ({
                  id: `${index + 1}-${userIndex + 1}`,
                  roleId: item.roleId,
                  roleName: item.roleName,
                  userId: user.userId,
                  userName: String(user.userName),
                }));
              } else {
                // If userData is empty, return a single row with only role info
                return [
                  {
                    id: `${index + 1}-0`,
                    roleId: item.roleId,
                    roleName: item.roleName,
                    //userId: 0, 
                    userName: "", 
                  },
                ];
              }
            }
          );

          setRows(mappedRows);
          setIsLoading(false);
        } else {
          console.error("No rolemanagement data found");
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
          <TableHeader>Role Management</TableHeader>
        </PageHeading>
      </HeadingWrapper>
      {isLoading ? (
        <TableShimmerEffect rowsCount={6} />
      ) : (
        <PageContainer>
          <CustomTable rows={rows} columns={columns} />
        </PageContainer>
      )}
    </>
  );
};

export default RollManagementPage;
