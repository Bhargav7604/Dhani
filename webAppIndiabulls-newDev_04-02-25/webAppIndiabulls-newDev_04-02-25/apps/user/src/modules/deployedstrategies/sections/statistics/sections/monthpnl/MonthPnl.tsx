import React from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableContainer,
  Paper,
} from "@mui/material";
import {
  TableCellData,
  TableHeadWraper,
} from "../../../statistics/StrategyStatisticsStyles";
import { StyledSecondaryHeadlineText } from "../../../../../../components/ui/GlobalStyles";
import { MonthlyPNLTypes } from "../../StrategyStatisticsTypes";
import NoSearchStrategy from "../../../../../../../../../packages/ui/src/sharedcomponents/nosearch/NoSearchCard";

const MonthPnlTable: React.FC<MonthlyPNLTypes> = (props) => {
  const {monthlyStatistics } = props;

  return (
    <>
      <TableHeadWraper>
        <StyledSecondaryHeadlineText>
          Month Wise P&L{" "}
        </StyledSecondaryHeadlineText>
      </TableHeadWraper>

      {monthlyStatistics.length > 0 ? (
        <TableContainer
          component={Paper}
          sx={{ maxWidth: 600, borderRadius: 1 }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCellData $fontweight $background="#f7f7f7">
                  Month
                </TableCellData>
                <TableCellData $fontweight>Total Trades</TableCellData>
                <TableCellData $fontweight>PNL(Rs)</TableCellData>
                <TableCellData $fontweight>PNL(%)</TableCellData>
              </TableRow>
            </TableHead>
            <TableBody>
              {monthlyStatistics?.map((row, index) => (
                <TableRow key={index}>
                  <TableCellData $color="blue" $background="#f7f7f7">
                    {row.month}
                  </TableCellData>
                  <TableCellData>{row.totalTrades}</TableCellData>
                  <TableCellData>{row.pnlRs}</TableCellData>
                  <TableCellData>{row.pnlPercent}</TableCellData>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <NoSearchStrategy
          isDetailView={true}
          text="No month wise P&L data available"
        />
      )}
    </>
  );
};

export default MonthPnlTable;
