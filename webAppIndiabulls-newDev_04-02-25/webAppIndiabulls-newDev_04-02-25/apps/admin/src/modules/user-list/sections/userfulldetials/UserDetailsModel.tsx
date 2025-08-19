import { Backdrop, Fade, Modal } from "@mui/material";
import { PerticularUserTableGetService } from "../../services/AppServices"; // update path as needed
import { useEffect, useState } from "react";
import {
  CancelWraper,
  DetailsTable,
  TableCellLabel,
  TableCellValue,
  TableContainer,
  TableRow,
  TableTitle,
} from "../../UsersStyles";
import Cancel from "../../../../assets/svg/cancel-svgrepo-com.svg";
import { userDetailsType } from "../../UsersDataUtils";
import dayjs from "dayjs";
type UserDetailsModalProps = {
  open: boolean;
  onClose: () => void;
  selectedId: string | number | null;
};

export default function UserDetailsModal({
  open,
  onClose,
  selectedId,
}: UserDetailsModalProps) {
  const [userDetails, setUserDetails] = useState<userDetailsType>();

  useEffect(() => {
    if (open && selectedId) {
      PerticularUserTableGetService(selectedId.toString()).then((res) => {
        if (res?.data) {
          setUserDetails(res.data);
        }
      });
    }
  }, [open, selectedId]);
  return (
    <Modal
      open={open}
      onClose={onClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{ backdrop: { timeout: 500 } }}
      sx={{ outline: "none", border: "none" }}
    >
      <Fade in={open}>
        <TableContainer>
          <CancelWraper onClick={onClose}>
            <img src={Cancel} alt="Close Modal" style={{ cursor: "pointer" }} />
          </CancelWraper>
          {userDetails && (
            <>
              <TableTitle>User Details</TableTitle>
              <DetailsTable>
                <tbody>
                  <TableRow>
                    <TableCellLabel>User ID</TableCellLabel>
                    <TableCellValue>{userDetails.id}</TableCellValue>
                  </TableRow>
                  <TableRow>
                    <TableCellLabel>Name</TableCellLabel>
                    <TableCellValue>{userDetails.userName}</TableCellValue>
                  </TableRow>
                  <TableRow>
                    <TableCellLabel>Email</TableCellLabel>
                    <TableCellValue>{userDetails.email}</TableCellValue>
                  </TableRow>
                  <TableRow>
                    <TableCellLabel>Phone</TableCellLabel>
                    <TableCellValue>{userDetails.phoneNumber}</TableCellValue>
                  </TableRow>
                  <TableRow>
                    <TableCellLabel>Role</TableCellLabel>
                    <TableCellValue>{userDetails.roleName}</TableCellValue>
                  </TableRow>
                  <TableRow>
                    <TableCellLabel>Status</TableCellLabel>
                    <TableCellValue>{userDetails.status}</TableCellValue>
                  </TableRow>
                  <TableRow>
                    <TableCellLabel>Admin</TableCellLabel>
                    <TableCellValue>{userDetails.adminName}</TableCellValue>
                  </TableRow>
                  <TableRow>
                    <TableCellLabel>Address</TableCellLabel>
                    <TableCellValue>{userDetails.address}</TableCellValue>
                  </TableRow>
                  <TableRow>
                    <TableCellLabel>Created By</TableCellLabel>
                    <TableCellValue>{userDetails.createdBy}</TableCellValue>
                  </TableRow>
                  <TableRow>
                    <TableCellLabel>Created At</TableCellLabel>
                    <TableCellValue>
                      {userDetails.createdDateTime
                        ? dayjs(userDetails.createdDateTime).format(
                            "DD-MM-YYYY HH:mm:ss"
                          )
                        : "N/A"}
                    </TableCellValue>
                  </TableRow>
                </tbody>
              </DetailsTable>
            </>
          )}
        </TableContainer>
      </Fade>
    </Modal>
  );
}
