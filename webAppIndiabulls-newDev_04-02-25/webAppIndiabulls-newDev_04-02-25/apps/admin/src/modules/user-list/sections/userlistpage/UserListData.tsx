import { GridColDef } from "@mui/x-data-grid";
import { TableColumnButton } from "../../../../components/ui/GlobalStyles";

export const useColumns = (
  handleViewClick: (id: string | number) => void
): GridColDef[] => {
  return [
    {
      field: "id",
      headerName: "S No",
      flex: 1,
      minWidth: 100,
    },
    {
      field: "clientId",
      headerName: "Client ID",
      flex: 1,
      minWidth: 100,
    },
    {
      field: "name",
      headerName: "User Name",
      flex: 1,
      minWidth: 150,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      minWidth: 250,
    },
    // {
    //   field: "role",
    //   headerName: "Role",
    //   flex: 1,
    //   minWidth: 250,
    // },
    {
      field: "phoneNumber",
      headerName: "Mobile",
      flex: 1,
      minWidth: 150,
    },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
      minWidth: 150,
    },
    {
      field: "createdDateTime",
      headerName: "Joined Date",
      flex: 1,
      minWidth: 150,
    },

    {
      field: "Action",
      headerName: "User View & Strategies",
      renderCell: (params) => (
        <div style={{ display: "flex", gap: "8px" }}>
          <TableColumnButton
            $background="#1667D9"
            onClick={() => handleViewClick(params.row.id)}
          >
            View
          </TableColumnButton>
          <TableColumnButton
            $background="#145342"
            onClick={() => {
              const userId = params.row.id;
              const clientId = params.row.clientId;
              const userName = encodeURIComponent(params.row.name); // Encode if it has spaces/special chars
              window.location.href = `/userdeploystrategies/${userId}?clientId=${clientId}&userName=${userName}`;
            }}
          >
            Strategies
          </TableColumnButton>
        </div>
      ),
      flex: 1,
      minWidth: 220,
    },
    {
      field: "token&usage",
      headerName: "Token Logs &  User Usage",
      renderCell: (params) => (
        <div style={{ display: "flex", gap: "8px" }}>
          <TableColumnButton
            $background="#FF7043"
            onClick={() => {
              const userId = params.row.id;
              const clientId = params.row.clientId;

              const userName = encodeURIComponent(params.row.name); // Encode if it has spaces/special chars
              window.location.href = `/userslist/tokens/${userId}?clientId=${clientId}&userName=${userName}`;
            }}
          >
            Token Logs
          </TableColumnButton>
          <TableColumnButton
            $background="#308013"
            onClick={() => {
              const userId = params.row.id;
              window.location.href = `/userslist/userusage/${userId}`;
            }}
          >
            User Usage
          </TableColumnButton>
        </div>
      ),
      flex: 1,
      minWidth: 250,
    },
  ];
};

export const columns: GridColDef[] = [
  { field: "id", headerName: "S No", flex: 1, maxWidth: 80 },
  { field: "token", headerName: "Token", flex: 1, minWidth: 100 },
  { field: "tokenType", headerName: "Token Type", flex: 1, maxWidth: 100 },
  {
    field: "isWelcomeAccepted",
    headerName: "Is Accept Welcome",
    flex: 1,
    minWidth: 100,
  },
  {
    field: "welcomeAcknowledgedTime",
    headerName: "Welcome Time",
    flex: 1,
    minWidth: 100,
  },

  {
    field: "tokenGeneratedTime",
    headerName: "Token Generate Time",
    flex: 1,
    minWidth: 150,
  },
  { field: "machineId", headerName: "IP / Address", flex: 0.5, minWidth: 150 },
  { field: "remarks", headerName: "Remarks", flex: 2, minWidth: 150 },
];
