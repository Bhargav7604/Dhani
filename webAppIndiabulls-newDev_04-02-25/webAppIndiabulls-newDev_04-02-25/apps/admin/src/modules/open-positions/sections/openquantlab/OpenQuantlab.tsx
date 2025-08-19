import React, { useState, useEffect } from "react";

 import { OpenPositionPostService } from "../../services/AppService";
 import { useDispatch } from "react-redux";
import { OpenPositionsRow } from "../../OpenPositionsUtils";
import { setOpenPosition } from "../../state-slice/OpenPositionsSlice";
import { HeadingWrapper, PageHeading } from "../../../../components/ui/GlobalStyles";
import { TableHeader } from "../../../sharedComponents/CustomTable/CustomTableStyles";
import PageContainer from "../../../sharedComponents/PageContainer";
import CustomTable from "../../../sharedComponents/CustomTable/CustomTable";
import { columns } from "./OpenQuantLabData";
 import TableShimmerEffect from "../../../../components/ui/shimmers/TableShimmerComp";

const OpenBrokerPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [rows, setRows] = useState([]);
  const dispatch = useDispatch();
  

 
   useEffect(() => {
      async function fetchData() {
        setIsLoading(true);
        try {
          const response = await OpenPositionPostService();
  
          if (response?.data?.content) {
            const mappedRows = response.data.content.map(
              (item: OpenPositionsRow, index: number) => ({
                id: index + 1, // Generate a unique id for each row
                userId: item.userId,
                userName: item.userName || "N/A",
                clientId: item.clientId || "N/A",
                instrumentId: item.instrumentId || "N/A",
                instrumentName: item.instrumentName || "N/A",
                strategyId: item.strategyId || "N/A",
                strategyName: item.strategyName || "N/A",
                symbol: item.symbol || "N/A",
                buyQuantity: item.buyQuantity || "N/A",
                buyAveragePrice: item.buyAveragePrice || "N/A", // correct field name
                sellQuantity: item.sellQuantity || "N/A",
                averageSellPrice: item.averageSellPrice || "N/A", // correct field name
                totalOpenQuantity: item.totalOpenQuantity || "N/A",
                totalMtm: item.totalMtm || "N/A",
              })
            );
            dispatch(setOpenPosition(mappedRows));
            setRows(mappedRows);
            setIsLoading(false);
          } else {
            console.error("No content data found");
          }
        } catch (error) {
          console.error("Error fetching data: ", error);
        } finally {
          setIsLoading(false);
        }
      }
  
      fetchData();
    }, [dispatch]);

  return (
    <>
      <HeadingWrapper>
        <PageHeading>
          <TableHeader>Open QuantLab</TableHeader>
        </PageHeading>
      </HeadingWrapper>
      {isLoading ? <TableShimmerEffect rowsCount={7}/> : 
      <PageContainer>
        <CustomTable
          rows={rows}
          columns={columns}
          enableExport={true}
        //   enableDefaultSelect={true}
        />
      </PageContainer>
}
      
    </>
  );
};

export default OpenBrokerPage;
