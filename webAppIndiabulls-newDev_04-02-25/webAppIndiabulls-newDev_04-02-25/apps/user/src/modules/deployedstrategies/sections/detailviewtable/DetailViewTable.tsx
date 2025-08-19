import { TableBody, TableRow, TableContainer } from "@mui/material";
import { useAppSelector } from "../../../../store/Store";
import GreekValues from "../greekvalues/GreekValues";
import {
  StyledDetailViewOrders,
  StyledSpan,
  StyledTable,
  StyledTableBody,
  StyledTableCell,
  StyledTableHead,
  StyledTableHeadCell,
  StyledTableRow,
  StyledTableWrapper,
} from "../../DeployedStrategiesStyles";
import { StrategyMapColumnData } from "../../DeployedStrategiesData";
import NoSearchStrategy from "../../../../../../../packages/ui/src/sharedcomponents/nosearch/NoSearchCard";
import { useEffect, useState } from "react";
import {
  DetailViewDataProps,
  DetailViewTableProps,
} from "../../DeployedStrategiesUtils";
import {
  FlexRowDiv,
  StyledTableFlexRowDiv,
} from "../../../../components/ui/GlobalStyles";
import Close from "../../../../assets/svgs/close-img.svg";
import Download from "../../../../assets/svgs/download.svg";
import { StyledImage } from "../../../readytodeploy/sections/strategiescard/StrategiesCardStyles";
import exportLegsToCSV from "../../../../components/UserCustomTable/sections/downloadtabledata/DetailViewExport";
import { ActiveStrategiesResponseTypes } from "../../services/DeployedStrategiesServiceTypes";
import { ColumnFlexDiv } from "../../../welcomemodal/WelcomeModalStyles";
import { DownloadDetailViewService } from "../../services/DeployedStrategiesServices";
import {
  StrategyData,
  StrategyLegProps,
} from "../../../../components/websocet/WebSocketUtils";
import HoverToFullValues from "../../../../components/hoverfullvalues/HoverToFullValues";

function StrategyTableComp({ id, sname }: DetailViewTableProps) {
  const [isTableOpen, setIsTableOpen] = useState(true);
  const [mappedData, setMappedData] = useState<DetailViewDataProps[]>([]);
  // const [detailViewData, setDetailViewData] = useState<DetailViewRow[]>([]);
  const todayString = new Date().toISOString().split("T")[0];

  const { deployedStrategyRes } = useAppSelector(
    (appState) => appState.deployedstrategiesdata
  );
  const { socketData }: any = useAppSelector((appState) => appState.socket);
  const fetchDetailViewData = async () => {
    try {
      const response = await DownloadDetailViewService(id);
      if (response) {
        const mappedDetailViewData =
          response.data.activeStrategiesResponse[0].strategyLegTableDTO.data.map(
            (row: StrategyLegProps) => ({
              Leg_Id: row?.legId,
              Traded_Instrument: row?.name,
              LTP: row.legLTP?.toFixed(2),
              Traded_Lots: row?.legQuantity,
              Entry_Price: row.executedPrice?.toFixed(2),
              Exit_Price: row.exitPrice,
              Entry_Time: row?.deployedTimeStamp,
              Exit_Time: row.exitTime,
              symbolcelldata: {
                name: row.name,
                Exit_Delta: row.constantDelta,
                Entry_Delta: row.currentDelta,
                Exit_Iv: row.constantIV,
                Entry_Iv: row.currentIV,
                "Index@Entry": row?.indexBasePrice,
                "Index@Exit": row?.indexCurrentPrice,
                legid: row.legId,
              },
              "P&L": row.pandL?.toFixed(2),
            })
          );
        // setDetailViewData(mappedDetailViewData);
        return mappedDetailViewData; // So you can pass it to export
      }
    } catch {
      console.error("Error fetching data");
    }
  };
  useEffect(() => {
    if (!deployedStrategyRes?.activeStrategiesResponse) return;
    const websocketLegMap = socketData.strategyLegs?.find(
      (strategy: StrategyData) => strategy.strategyId === id
    )?.data;

    const mergedData = deployedStrategyRes.activeStrategiesResponse
      ?.filter((strategy: ActiveStrategiesResponseTypes) => strategy.sid === id)
      ?.flatMap((strategy: any) => {
        const closedOrders = strategy.strategyLegTableDTO.closedOrders;
        const openOrders = strategy.strategyLegTableDTO.openOrders;
        const totalOrders = strategy.strategyLegTableDTO.totalOrders;
        return strategy.strategyLegTableDTO?.data?.map(
          (row: StrategyLegProps) => {
            const wsRow = websocketLegMap?.find(
              (wsLeg: StrategyLegProps) => wsLeg.legId === row.legId
            );
            return {
              legid: row.legId ?? wsRow.legId,
              name: wsRow?.name ?? row.name,
              ltp: wsRow?.legLTP?.toFixed(2) ?? row.legLTP?.toFixed(2),
              quantity: wsRow?.legQuantity ?? row.legQuantity,
              entryprice:
                wsRow?.executedPrice?.toFixed(2) ??
                row.executedPrice?.toFixed(2),
              entrytime: wsRow?.deployedTimeStamp ?? row?.deployedTimeStamp,
              exitprice: wsRow?.exitPrice ?? row.exitPrice,
              exittime: wsRow?.exitTime ?? row.exitTime,
              pandl: wsRow?.pandL?.toFixed(2) ?? row.pandL?.toFixed(2),
              totalOrders: totalOrders,
              openOrders: openOrders,
              closedOrders: closedOrders,
              symbolcelldata: {
                name: wsRow?.name ?? row.name,
                iswsname: !!wsRow,
                constantdelta: wsRow?.constantDelta ?? row.constantDelta,
                constantiv: wsRow?.constantIV ?? row.constantIV,
                currentdelta: wsRow?.currentDelta ?? row.currentDelta,
                currentiv: wsRow?.currentIV ?? row.currentIV,
                indexbaseprice: wsRow?.indexBasePrice ?? row?.indexBasePrice,
                indexcurrentprice:
                  wsRow?.indexCurrentPrice ?? row?.indexCurrentPrice,
                legid: row.legId ?? wsRow.legId,
              },
            };
          }
        );
      });

    setMappedData(mergedData);
  }, [id, socketData, deployedStrategyRes]);
  
  const totalPNL = mappedData?.reduce((acc, row) => {
    const value = parseFloat(row?.pandl);
    return isNaN(value) ? acc : acc + value;
  }, 0);

  function handleClose() {
    setIsTableOpen(false);
  }

  if (!isTableOpen) return null;

  return (
    <StyledTableWrapper sx={{ width: "100%", overflow: "hidden" }}>
      <StyledTableFlexRowDiv $gap="12px">
        {mappedData.length > 0 && (
          <StyledSpan
            onClick={async () => {
              const fetchedData = await fetchDetailViewData();
              if (fetchedData) {
                exportLegsToCSV(fetchedData, `${sname} ${todayString}`);
              }
            }}
          >
            <p>Download</p>
            <StyledImage
              src={Download}
              alt="info"
              $width="18px"
              $height="18px"
            />
          </StyledSpan>
        )}
        <StyledSpan onClick={handleClose}>
          <p>Close</p>
          <StyledImage src={Close} alt="close" $width="18px" $height="18px" />
        </StyledSpan>
      </StyledTableFlexRowDiv>

      <TableContainer
        sx={{ maxHeight: 140 }}
        style={{
          padding: "4px",
          border: "none",
          position: "relative",
          maxHeight: "310px",
          overflowY: "auto",
        }}
      >
        {mappedData.length === 0 ? (
          <NoSearchStrategy
            isDetailView={true}
            text={"No Detail View Data Available"}
          />
        ) : (
          <StyledTable stickyHeader aria-label="sticky table">
            <StyledTableHead>
              <TableRow>
                {StrategyMapColumnData[0].tableData.columns.map(
                  (column, index) => (
                    <StyledTableHeadCell key={index}>
                      {column.lable}
                    </StyledTableHeadCell>
                  )
                )}
              </TableRow>
            </StyledTableHead>

            <StyledTableBody>
              {mappedData.map((row: any, rowIndex) => (
                <StyledTableRow key={rowIndex}>
                  {StrategyMapColumnData[0].tableData.columns.map(
                    (column, colIndex) => {
                      const cellValue =
                        row?.[column.id as keyof typeof row] ?? "--";
                      return (
                        <StyledTableCell key={colIndex}>
                          <span>
                            {colIndex === 0 ? (
                              <GreekValues data={row?.symbolcelldata ?? "--"} />
                            ) : column.id === "pandl" ? (
                              <HoverToFullValues
                                $ispnl
                                $istextsmall
                                value={cellValue}
                              ></HoverToFullValues>
                            ) : column.id === "legid" ? (
                              cellValue
                            ) : column.id === "entrytime" ||
                              column.id === "exittime" ? (
                              <ColumnFlexDiv>
                                {cellValue.includes(" ")
                                  ? (() => {
                                      const [date, time] = cellValue.split(" ");
                                      return (
                                        <>
                                          <span>{time}</span>
                                          <span>{date}</span>
                                        </>
                                      );
                                    })()
                                  : cellValue}
                              </ColumnFlexDiv>
                            ) : (
                              cellValue
                            )}
                          </span>
                        </StyledTableCell>
                      );
                    }
                  )}
                </StyledTableRow>
              ))}
            </StyledTableBody>

            <TableBody>
              <StyledTableRow>
                {StrategyMapColumnData[0].tableData.columns.map(
                  (column, colIndex) => {
                    let cellValue = "";

                    if (column.id === "pandl") {
                      cellValue = totalPNL.toFixed(2);
                    } else if (colIndex === 0) {
                      const total = mappedData[0]?.totalOrders ?? "--";
                      const open = mappedData[0]?.openOrders ?? "--";
                      const closed = mappedData[0]?.closedOrders ?? "--";

                      return (
                        <StyledTableCell key={colIndex} align="left">
                          <FlexRowDiv
                            $gap="7px"
                            $justifycontent="start"
                            $rowdirection
                          >
                            <StyledDetailViewOrders $iscolor="#1667D9">
                              Total_Orders: {total}
                            </StyledDetailViewOrders>
                            {" || "}
                            <StyledDetailViewOrders $iscolor="#009900">
                              Open_Orders: {open}
                            </StyledDetailViewOrders>
                            {" || "}
                            <StyledDetailViewOrders $iscolor="#f44336">
                              Closed_Orders: {closed}
                            </StyledDetailViewOrders>
                          </FlexRowDiv>
                        </StyledTableCell>
                      );
                    }

                    return (
                      <StyledTableCell
                        key={colIndex}
                        align={colIndex === 0 ? "left" : "right"}
                      >
                        <HoverToFullValues
                          $ispnl
                          $istextsmall
                          value={cellValue}
                        />
                      </StyledTableCell>
                    );
                  }
                )}
              </StyledTableRow>
            </TableBody>
          </StyledTable>
        )}
      </TableContainer>
    </StyledTableWrapper>
  );
}

export default StrategyTableComp;
