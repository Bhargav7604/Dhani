import React, { useEffect, useState } from "react";
import CustomTable from "../../../components/UserCustomTable/UserCustomTable";
import PageContainer from "../../../../../admin/src/modules/sharedComponents/PageContainer";
import { columns } from "./OpenPositionsData";
import { OpenPositionService } from "./services/OpenPositionsServices";
import { OpenPositionsRow } from "./OpenPositionsTypes";
import { OpenPositionTypes } from "./services/OpenPositionsTypes";
import { OrderDifferenceStateTypes } from "../order-difference/OrderDifferenceUtils";

const initialState: OrderDifferenceStateTypes = {
  apiStatusFail: false,
  isLoading: true,
};

const OpenPositionsPage: React.FC = () => {
  const [state, setState] = useState<OrderDifferenceStateTypes>(initialState);
  const { apiStatusFail, isLoading } = state;
  const [tableRows, setTableRows] = useState<OpenPositionsRow[]>([]);
  const today = new Date();
  const date = today.getDate();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const formattedDate = `${date}-${month}-${year}`;

  const fetchOrderData = async () => {
    try {
      const response = await OpenPositionService();
      if (response?.data) {
        const mappedRows = response.data.map((strategy: OpenPositionTypes) => {
          return {
            id: strategy.orderId,
            symbol: strategy.symbol,
            strike: strategy.strike,
            quantity: strategy.quantity,
            mtm: strategy.mtm ?? "No Data",
            expiry: strategy.expiry,
            datetime: strategy.dateTime || formattedDate,
          };
        });
        setTableRows(mappedRows);
      }
    } catch (error) {
      setState((prevState) => ({
        ...prevState,
        apiStatusFail: true,
      }));
      throw error;
    } finally {
      setState((prevState) => ({
        ...prevState,
        isLoading: false,
      }));
    }
  };

  useEffect(() => {
    fetchOrderData();
  }, []);

  return (
    <PageContainer>
      <CustomTable
        rows={tableRows}
        columns={columns}
        enableExport={true}
        enableDefaultSelect={false}
        isLoading={isLoading}
        apiStatusFail={apiStatusFail}
      />
    </PageContainer>
  );
};

export default OpenPositionsPage;
