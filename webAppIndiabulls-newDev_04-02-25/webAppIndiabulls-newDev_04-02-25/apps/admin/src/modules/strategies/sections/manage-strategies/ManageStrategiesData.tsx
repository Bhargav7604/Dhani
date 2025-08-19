import { GridColDef } from "@mui/x-data-grid";
import { TableColumnButton } from "../../../../components/ui/GlobalStyles";
import {
  AllStrategiestableGetService,
  StrategyShowHidePostService,
  StrategypausePostService,
} from "../../services/AppServices";
import { setStrategies } from "../../state-slice/StrategiesSlice"; // Redux slice
import { useAppDispatch } from "../../../../store/Store";
export const useColumns = (
  handleOpenEditModal: (id: number) => void,
  handleOpenApprovedModal: (id: number) => void,
  handleOpenRejectModal: (id: number,name: string) => void
): GridColDef[] => {
  const dispatch = useAppDispatch();
  const columns: GridColDef[] = [
    { field: "id", headerName: "SID", flex: 1, minWidth: 100 },
    { field: "name", headerName: "Name", flex: 2, minWidth: 180 },
    { field: "description", headerName: "Description", flex: 1, minWidth: 600 },
    { field: "status", headerName: "Status", flex: 0.5, minWidth: 150 },

    {
      field: "pause",
      headerName: "Pause / Resume",
      flex: 0.5,
      minWidth: 140,
      renderCell: (params) => {
        const status = params.row.status;
        const isActive = status === "available";
        const strategyId = params.row.id;

        const handleClick = async () => {
          try {
            await StrategypausePostService(strategyId);
            const response = await AllStrategiestableGetService("all");

            dispatch(
              setStrategies({
                strategiesData: response.data?.allAdminStrategies,
              })
            );
          } catch (error) {
            console.error("Error changing strategy status:", error);
          }
        };
        return (
          <TableColumnButton
            onClick={handleClick}
            $background={isActive ? "#FBBF24" : "#10B981"}
          >
            {isActive ? "Pause" : "Resume"}
          </TableColumnButton>
        );
      },
    },
    {
      field: "edit",
      headerName: "Edit",
      flex: 0.5,
      minWidth: 100,
      renderCell: (params) => {
        const strategyId = params.row.id;

        return (
          <TableColumnButton
            $background="#1667D9"
            onClick={() => handleOpenEditModal(strategyId)}
          >
            {params.value}Edit
          </TableColumnButton>
        );
      },
    },
    {
      field: "hide",
      headerName: "Hide / Show",
      flex: 0.5,
      minWidth: 120,
      renderCell: (params) => {
        const strategyId = params.row.id;
        const isHidden = params.row.isHidden;

        const handleClick = async () => {
          try {
            await StrategyShowHidePostService(strategyId);
            const response = await AllStrategiestableGetService("all");

            dispatch(
              setStrategies({
                strategiesData: response.data?.allAdminStrategies,
              })
            );
          } catch (error) {
            throw error;
          }
        };
        return (
          <TableColumnButton
            $background={isHidden ? "#4CAF50" : "#808080"}
            onClick={handleClick}
          >
            {isHidden ? "Show" : "Hide"}
          </TableColumnButton>
        );
      },
    },
    {
      field: "approve",
      headerName: "Approve",
      flex: 0.5,
      minWidth: 110,
      renderCell: (params) => {
        const strategyId = params.row.id;

        return (
          <TableColumnButton
            $background="gray"
            onClick={() => handleOpenApprovedModal(strategyId)}
          >
            {params.value}Approve
          </TableColumnButton>
        );
      },
    },
    {
      field: "reject",
      headerName: "Reject",
      flex: 0.5,
      minWidth: 110,
      renderCell: (params) => {
        const strategyId = params.row.id;
        const strategyName = params.row.name; // Get the name from the row

        return (
          <TableColumnButton
            $background="#EF4444"
            onClick={() => handleOpenRejectModal(strategyId,strategyName)}
          >
            {params.value}Reject
          </TableColumnButton>
        );
      },
    },
  ];

  return columns;
};
