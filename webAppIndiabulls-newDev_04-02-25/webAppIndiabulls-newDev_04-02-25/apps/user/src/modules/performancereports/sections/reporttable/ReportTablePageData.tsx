import { useMediaQuery } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import { DetailsButton } from "../../PerformanceReportsStyles";
import { useNavigate } from "react-router-dom";
export const useColumns = (fromDate: string, toDate: string) => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const navigate = useNavigate();
  return [
    {
      field: "id",
      headerName: "Strategy ID",
      flex: 1,
      minWidth: 150,
    },
    {
      field: "strategyName",
      headerName: "Strategy",
      flex: 1,
      minWidth: 250,
    },
    {
      field: "pnl",
      headerName: "P&L",
      flex: 1,
      minWidth: isMobile ? 250 : 260,
      maxWidth: isMobile ? 270 : 300,
      renderCell: (params) => <span>₹ {params.value.toFixed(2)}</span>,
    },

    {
      field: "details",
      headerName: "Details",
      flex: 1,
      cellClassName: "no-border",
      minWidth: 100,
      renderCell: (params) => (
        <DetailsButton
          onClick={() => {
            const strategyId = params.row.id;
          navigate(`/reportdetails/${strategyId}?from=${fromDate}&to=${toDate}`);
          }}
        >
          Details
        </DetailsButton>
      ),
    },
  ] as GridColDef[];
};
