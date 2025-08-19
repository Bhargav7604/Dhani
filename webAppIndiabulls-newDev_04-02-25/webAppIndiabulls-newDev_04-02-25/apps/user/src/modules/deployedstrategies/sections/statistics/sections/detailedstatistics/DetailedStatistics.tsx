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
import { DetailedStatisticsProps} from "../../StrategyStatisticsTypes";
import NoSearchStrategy from "../../../../../../../../../packages/ui/src/sharedcomponents/nosearch/NoSearchCard";

const DetailedStatisticsTable: React.FC<DetailedStatisticsProps> = (props) => {
  const { statistics } = props;
  return (
    <>
      <TableHeadWraper>
        <StyledSecondaryHeadlineText>
          Detailed Statistics
        </StyledSecondaryHeadlineText>
      </TableHeadWraper>

    { statistics?.length > 0 ? (
        <TableContainer
          component={Paper}
          sx={{ maxWidth: 800, borderRadius: 1 }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCellData $fontweight $background="#f7f7f7">
                  No
                </TableCellData>
                <TableCellData $fontweight>Name</TableCellData>
                <TableCellData $fontweight>Value</TableCellData>
              </TableRow>
            </TableHead>
            <TableBody>
              {statistics.map((row, index) => (
                <TableRow key={index}>
                  <TableCellData $color="blue" $background="#f7f7f7">
                    {index + 1}
                  </TableCellData>
                  <TableCellData>{row.name}</TableCellData>
                  <TableCellData>{row.value ?? "--"}</TableCellData>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <NoSearchStrategy
          isDetailView={true}
          text="No statistics data available"
        />
      )}
    </>
  );
};

export default DetailedStatisticsTable;
