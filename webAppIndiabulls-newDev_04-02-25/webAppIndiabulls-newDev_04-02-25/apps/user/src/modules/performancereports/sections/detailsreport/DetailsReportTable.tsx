import React, { useState, useEffect } from "react";
import CustomTable from "../../../../components/UserCustomTable/UserCustomTable";
import { columns } from "./DetailsReportTableData"; // Only import columns, not rows
import {
  DynamicWrapperDiv,
  StyledDataBigText,
  StyledSecondaryHeadlineText,
  StyledTertiaryText,
} from "../../../../components/ui/GlobalStyles";
import { fetchReportByStrategyId } from "../../services/PerformanceReportServices";
import {
  TextCenter,
  TotalOrdersText,
} from "../reporttable/ReportTablePageStyles";
import { RowData } from "../../services/PerformanceReportTypes";
import { useAppSelector } from "../../../../store/Store";
import {
  ColumnFlexDiv,
  FlexDiv,
  Imagesdiv,
  SecondDiv,
} from "../../../readytodeploy/sections/strategiescard/StrategiesCardStyles";
import { StyledPara } from "../../../../../../../packages/ui/src/sharedstyles/SharedStyledComps";
import {
  ReportTableStateTypes,
  StrategyDetailsProps,
} from "../reporttable/ReportTableUtils";
import { useParams, useSearchParams } from "react-router-dom";

const InitialState: StrategyDetailsProps = {
  name: "",
  id: null,
  totalOrders: null,
  totalPNL: null,
};

const stateInitial: ReportTableStateTypes = {
  isLoading: true,
  apiStatusFail: false,
};

const DetailsReportTable: React.FC = () => {
  const { strategyId } = useParams();
  const [searchParams] = useSearchParams();

  // Extract dates from URL query parameters
  const fromDate = searchParams.get("from") || "";
  const toDate = searchParams.get("to") || "";
  const { strategyReportsData } = useAppSelector(
    (appState) => appState.performancereports
  );
  const [state, setState] = useState<ReportTableStateTypes>(stateInitial);
  const { apiStatusFail, isLoading } = state;
  const [rows, setRows] = useState<RowData[]>([]);
  const [strategyDetails, setStrategyDetails] =
    useState<StrategyDetailsProps>(InitialState);

  const payload = {
    fromDate,
    toDate,
    strategyId: Number(strategyId),
  };

  useEffect(() => {
    const config = { payload };
    fetchReportByStrategyId(config)
      .then((response) => {
        const data = response?.data;
        const reportsSignalDtos = data?.reportsSignalDTOs;

        setStrategyDetails({
          name: data?.strategyName,
          id: data?.strategyID,
          totalOrders: data?.totalOrders,
          totalPNL: data?.totalPNL,
        });

        if (reportsSignalDtos) {
          let uniqueId = 1;
          const flattenedRows = reportsSignalDtos.map((report) => ({
            id: uniqueId++,
            pnl: report.pnl,
            date: report.date,
            // exchange: report.exchange || "N/A",
            // underlying: report.underlying || "N/A",
            orderCount: report.orderCount,
            sequentialPNL: report.sequentialPNL,
            signalId: report.signalId,
            pnlChange: report.pnlChange,
          }));

          setRows(flattenedRows);
        } else {
          setRows([]);
        }
      })
      .catch((error) => {
        setState((prevState) => ({
          ...prevState,
          apiStatusFail: true,
        }));
        console.error("Failed to fetch report:", error);
      })
      .finally(() =>
        setState((prevState) => ({
          ...prevState,
          isLoading: false,
        }))
      );
  }, [strategyReportsData]);

  const itemNameDp = strategyDetails.name
    ? strategyDetails.name
        .split(" ")
        .filter((_, index) => index === 0)
        .map((word) => word.slice(0, 2).toUpperCase())
        .join("")
    : "--";

  if (!strategyReportsData)
    return <TextCenter>No strategy selected.</TextCenter>;

  return (
    <DynamicWrapperDiv>
      <SecondDiv>
        <ColumnFlexDiv $flexdirection="row">
          <Imagesdiv>
            <StyledDataBigText $bold={true} $color={true}>
              {itemNameDp}
            </StyledDataBigText>
          </Imagesdiv>
          <StyledSecondaryHeadlineText $color={true}>
            {strategyDetails.name || ""}
          </StyledSecondaryHeadlineText>
          <StyledTertiaryText>({strategyDetails.id ?? ""})</StyledTertiaryText>
        </ColumnFlexDiv>

        <ColumnFlexDiv $gap="6px">
          <FlexDiv>
            <StyledPara>Total Orders: </StyledPara>
            <TotalOrdersText>{strategyDetails.totalOrders}</TotalOrdersText>
          </FlexDiv>
          <FlexDiv>
            <StyledPara>Total P&L: </StyledPara>
            <TotalOrdersText>{strategyDetails.totalPNL}</TotalOrdersText>
          </FlexDiv>
        </ColumnFlexDiv>
      </SecondDiv>

      <CustomTable
        rows={rows}
        columns={columns}
        enableExport={true}
        detailsButton={false}
        isLoading={isLoading}
        apiStatusFail={apiStatusFail}
      />
    </DynamicWrapperDiv>
  );
};

export default DetailsReportTable;
