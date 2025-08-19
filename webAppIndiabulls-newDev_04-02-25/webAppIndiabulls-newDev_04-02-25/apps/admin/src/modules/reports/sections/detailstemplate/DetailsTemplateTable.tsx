import React, { useState, useEffect } from "react";
import { columns } from "./DetailsTemplateData"; // Only import columns, not rows
import {
  DynamicWrapperDiv,
  StyledDataBigText,
  StyledTertiaryText,
} from "../../../../components/ui/GlobalStyles";
import TableShimmerEffect from "../../../../components/ui/shimmers/TableShimmerComp";
// import { useLocation } from "react-router-dom";

import { useAppSelector } from "../../../../store/Store";

import { StyledPara } from "../../../../../../../packages/ui/src/sharedstyles/SharedStyledComps";
import { useParams } from "react-router-dom";
import CustomTable from "../../../sharedComponents/CustomTable/CustomTable";
import { RowData, StrategyDetailsProps } from "../../ReportsUtils";
import { SecondDiv,ColumnFlexDiv ,Imagesdiv,FlexDiv} from "../../../../../../user/src/modules/readytodeploy/sections/strategiescard/StrategiesCardStyles";
import { TextCenter, TotalOrdersText } from "../../ReportsStyles";
import { StyledSecondaryHeadlineText } from "../../../../../../user/src/components/ui/GlobalStyles";
import { fetchReportByStrategyId } from "../../services/AppService";

const InitialState: StrategyDetailsProps = {
  name: "",
  id: null,
  totalOrders: null,
  totalPNL: null,
};

const DetailsTemplateTable: React.FC = () => {
    const {strategyId} = useParams();
  
  const { strategyReportsData } = useAppSelector(
    (appState) => appState.templatereports
  );
  // console.log(strategyReportsData);
  const [loading, setLoading] = useState(true);
  const [rows, setRows] = useState<RowData[]>([]);
  const [strategyDetails, setStrategyDetails] =
    useState<StrategyDetailsProps>(InitialState);

  const payload = {
    fromDate: strategyReportsData.fromDate,
    toDate: strategyReportsData.toDate,
    strategyId: strategyId ,
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
          // console.log(rows);
        } else {
          setRows([]);
        }
      })
      .catch((error) => console.error("Failed to fetch report:", error))
      .finally(() => setLoading(false));
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
      {loading ? (
        <TableShimmerEffect rowsCount={7} />
      ) : (
        <>
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
              <StyledTertiaryText>
                ({strategyDetails.id ?? ""})
              </StyledTertiaryText>
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
          />
        </>
      )}
    </DynamicWrapperDiv>
  );
};

export default DetailsTemplateTable;
