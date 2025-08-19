import { GridColDef } from "@mui/x-data-grid";

export const useColumns = (): GridColDef[] => {
  return [
    { field: "strategyId", headerName: "SID", flex: 1, minWidth: 120 },
    {
      field: "strategyName",
      headerName: "Strategy Name",
      flex: 1,
      minWidth: 180,
    },
    { field: "userId", headerName: "User ID", flex: 1, minWidth: 160 },
   
    { field: "deploymentDate", headerName: "Deployment Date", flex: 1, minWidth: 180 },
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
    // {
    //   field: "action",
    //   headerName: "Action",
    //   flex: 1,
    //   minWidth: 200,
    //   renderCell: () => (
       
          
    //       <TableColumnButton $background="#3B82F6">
    //         Edit 
    //       </TableColumnButton>
       
    //   ),
    // },
  ];
  
};



