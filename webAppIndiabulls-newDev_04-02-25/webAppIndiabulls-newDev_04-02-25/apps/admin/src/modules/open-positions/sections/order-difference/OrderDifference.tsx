import React, { useEffect, useState } from "react";
import { columns } from "./OrderDifferenceData";
import { OrderDiffranceGetService } from "../../services/AppService";
import { OrderDifferenceRows } from "../../OpenPositionsUtils";
import TableShimmerEffect from "../../../../components/ui/shimmers/TableShimmerComp";
import { TableHeader } from "../../../sharedComponents/CustomTable/CustomTableStyles";
import {
  HeadingWrapper,
  PageHeading,
} from "../../../../components/ui/GlobalStyles";
import PageContainer from "../../../sharedComponents/PageContainer";
import CustomTable from "../../../sharedComponents/CustomTable/CustomTable";

const OrderDifferencePage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [rows, setRows] = useState([]);

  useEffect(() => {
  async function fetchData() {
    setIsLoading(true);
    try {
      const response = await OrderDiffranceGetService();

      // Correct structure: response.data.data.content
      if (response?.data?.data?.content) {
        const mappedRows = response.data.data.content.map(
          (item: OrderDifferenceRows, index: number) => ({
            id: index + 1,
            orderUniqueIdentifier: item.orderUniqueIdentifier || "N/A",
            strategyId: item.strategyId ?? "N/A",
            strategyName: item.strategyName || "N/A",
            algoQuantity: item.algoQuantity ?? "N/A",
            brokerQuantity: item.brokerQuantity ?? "N/A",
            quantityDifference: item.quantityDifference ?? "N/A",
            algoPrice: item.algoPrice ?? "N/A",
            brokerPrice: item.brokerPrice ?? "N/A",
            priceDifference: item.priceDifference ?? "N/A",
            deployedOn: item.deployedOn
              ? new Date(item.deployedOn).toLocaleString()
              : "N/A",
            lastUpdated: item.lastUpdated
              ? new Date(item.lastUpdated).toLocaleString()
              : "N/A",
            discrepancyType: item.discrepancyType || "N/A",
          })
        );
        setRows(mappedRows);
      } else {
        console.error("No content data found");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  }

  fetchData();
}, []);

  return (
    <>
      <HeadingWrapper>
        <PageHeading>
          <TableHeader>Order Difference</TableHeader>
        </PageHeading>
      </HeadingWrapper>
      {isLoading ? (
        <TableShimmerEffect rowsCount={7} />
      ) : (
        <PageContainer>
          <CustomTable rows={rows} columns={columns} enableExport={true} />
        </PageContainer>
      )}
    </>
  );
};

export default OrderDifferencePage;
