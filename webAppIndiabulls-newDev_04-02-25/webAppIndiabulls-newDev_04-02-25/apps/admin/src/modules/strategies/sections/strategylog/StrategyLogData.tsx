import { GridColDef } from "@mui/x-data-grid";

export const useColumns = (): GridColDef[] => {
  return [
    { field: "strategyId", headerName: "SID", flex: 1, minWidth: 60 },
    {
      field: "strategyName",
      headerName: "Strategy Name",
      flex: 1,
      minWidth: 180,
    },
    { field: "userId", headerName: "User ID", flex: 1, minWidth: 80 },
    { field: "userName", headerName: "User Name", flex: 1, minWidth: 80 },

    {
      field: "deploymentDate",
      headerName: "Deployment Date",
      flex: 1,
      minWidth: 180,
    },
    {
      field: "description",
      headerName: "Description",
      flex: 1,
      minWidth: 300,
    },
     {
      field: "status",
      headerName: "Status",
      flex: 1,
      minWidth: 120,
    }, {
      field: "errorCode",
      headerName: "Error Code ",
      flex: 1,
      minWidth: 180,
    },
  ];
};
