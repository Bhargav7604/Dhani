import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { TableColumnButton } from "../../components/ui/GlobalStyles";
import { RollManagementPostService } from "./services/AppServices";
import { TextField } from "@mui/material";

export const columns: GridColDef[] = [
  { field: "roleId", headerName: "Role ID", minWidth: 180 },
  { field: "roleName", headerName: "Role Name", minWidth: 180 },
  {
    field: "userId",
    headerName: "Client ID",
         minWidth: 180,

    renderCell: (params) => (
      <TextField
        fullWidth
        value={params.value ?? ""}
        onChange={(event) => {
          params.api.updateRows([
            { id: params.id, [params.field]: event.target.value },
          ]);
        }}
        placeholder="Client ID"
        size="small"
        sx={{
          backgroundColor: "#fff",
          borderRadius: "8px",
          "& .MuiOutlinedInput-root": {
            padding: "0px",
          },
          "& input": {
            padding: "6px 8px",
          },
        }}
      />
    ),
  },

  { field: "userName", headerName: "client Name",       minWidth: 180,
 },
  {
    field: "action",
    headerName: "Action",
      minWidth: 180,
    renderCell: (params: GridRenderCellParams) => {
      const handleAssign = async () => {
        const payload = {
          payload: {
            clientId: String(params.row.userId),
            roleId: Number(params.row.roleId),
            roleName: params.row.roleName,
          },
        };

        try {
          const response = await RollManagementPostService(payload);
          return response;
        } catch (error) {
          throw error;
        }
      };

      return (
        <TableColumnButton $background="#3B82F6" onClick={handleAssign}>
          Assign
        </TableColumnButton>
      );
    },
  },
];
