import React, { useEffect, useState } from "react";

import { useColumns } from "./UserListData.tsx";
import { useDispatch } from "react-redux";
import { UserListGetService } from "../../services/AppServices.ts";
import { setAdminList } from "../../state-slice/UserListSlice.tsx";
import {
  HeadingWrapper,
  PageHeading,
} from "../../../../components/ui/GlobalStyles.ts";
import { TableHeader } from "../../../sharedComponents/CustomTable/CustomTableStyles.ts";
import TableShimmerEffect from "../../../../components/ui/shimmers/TableShimmerComp.tsx";
import PageContainer from "../../../sharedComponents/PageContainer.tsx";
import CustomTable from "../../../sharedComponents/CustomTable/CustomTable.tsx";
import UserDetailsModal from "../userfulldetials/UserDetailsModel.tsx";
import { userListRows } from "../../services/AppServiceUtils.ts";
import dayjs from "dayjs";
const UserListComp: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [openPopup, setOpenPopup] = useState(false);
  const [selectedId, setSelectedId] = useState<number | string | null>(null);
  const [rows, setRows] = useState<userListRows[]>([]);
  const dispatch = useDispatch();

  const handleViewClick = (id: number | string) => {
    setSelectedId(id);
    setOpenPopup(true);
  };

  const handleCloseModal = () => {
    setOpenPopup(false);
    setSelectedId(null);
  };

  const columns = useColumns(handleViewClick);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);

      try {
        const response = await UserListGetService();
        const users = response?.data;

        if (Array.isArray(users)) {
          const mappedRows = users.map((item) => {
            const createdDateTimeTimestamp = parseFloat(item.createdDateTime);
            return {
              id: item.id,
              clientId: item.clientId,
              name: item.name,
              email: item.email,
              // role: item.role,
              phoneNumber: item.phoneNumber,
              createdDateTime: !isNaN(createdDateTimeTimestamp)
                ? dayjs(createdDateTimeTimestamp * 1000).format(
                    "DD-MM-YYYY HH:mm:ss"
                  )
                : "N/A",

              status: item.status,
            };
          });

          dispatch(setAdminList(mappedRows));
          setRows(mappedRows);
        } else {
          console.error("No User data found");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [dispatch]);

  return (
    <>
      <HeadingWrapper>
        <PageHeading>
          <TableHeader>Users List</TableHeader>
          {/* <AdminButton onClick={() => setAdminModalOpen(true)}>
            <StyledImgae src={AddBrokerAdmin} /> Broker Admin
          </AdminButton> */}
        </PageHeading>
      </HeadingWrapper>
      {isLoading ? (
        <TableShimmerEffect rowsCount={7} />
      ) : (
        <PageContainer>
          <CustomTable
            rows={rows}
            columns={columns}
            enableExport={true}
            // enableAdminSelectButtons={true}
          />
        </PageContainer>
      )}

      <UserDetailsModal
        open={openPopup}
        onClose={handleCloseModal}
        selectedId={selectedId}
      />
    </>
  );
};

export default UserListComp;
