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
import { DailySummaryProps } from "../../StrategyStatisticsTypes";
import NoSearchStrategy from "../../../../../../../../../packages/ui/src/sharedcomponents/nosearch/NoSearchCard";

const DailySummaryTable: React.FC<DailySummaryProps> = (props) => {
  const { weekStatsSummary} = props;

  return (
    <>
      <TableHeadWraper>
        <StyledSecondaryHeadlineText>
          Daily Summary{" "}
        </StyledSecondaryHeadlineText>
      </TableHeadWraper>

      {weekStatsSummary.length > 0 ? (
        <TableContainer
          component={Paper}
          sx={{ maxWidth: 600, borderRadius: 1 }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCellData $fontweight $background="#f7f7f7">
                  Day
                </TableCellData>
                <TableCellData $fontweight>Returns(%)</TableCellData>
                <TableCellData $fontweight>Max Profit</TableCellData>

                <TableCellData $fontweight>Max Loss</TableCellData>
              </TableRow>
            </TableHead>
            <TableBody>
              {weekStatsSummary?.map((row, index) => (
                <TableRow key={index}>
                  <TableCellData $color="blue" $background="#f7f7f7">
                    {row.day}
                  </TableCellData>
                  <TableCellData sx={{ py: 1 }}>{row.returns}</TableCellData>
                  <TableCellData sx={{ py: 1 }}>{row.maxProfit}</TableCellData>
                  <TableCellData sx={{ py: 1 }}>{row.maxLoss}</TableCellData>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <NoSearchStrategy
          isDetailView={true}
          text="No daily summary data available"
        />
      )}
    </>
  );
};

export default DailySummaryTable;