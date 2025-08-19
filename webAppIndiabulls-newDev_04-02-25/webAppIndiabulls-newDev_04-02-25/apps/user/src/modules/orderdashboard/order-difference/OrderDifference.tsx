import React, { useState, useEffect } from "react";
import PageContainer from "../../../../../admin/src/modules/sharedComponents/PageContainer";
import UserCustomTable from "../../../components/UserCustomTable/UserCustomTable";
import { columns } from "./OrderDifferenceData";
import { OrderBookPostService } from "./services/OrderServices";
import { OrderBookTypes } from "./services/OrderServicesTypes";
import { OrderDifferenceStateTypes } from "./OrderDifferenceUtils";

const getTodayDate = () => new Date().toISOString().split("T")[0];

const initialState: OrderDifferenceStateTypes = {
  apiStatusFail: false,
  isLoading: true,
}

const OrderDifferencePage: React.FC = () => {
  const [state, setState] = useState<OrderDifferenceStateTypes>(initialState);
  const { apiStatusFail, isLoading } = state;
  const [selectedDate, setSelectedDate] = useState(getTodayDate());
  const [tableRows, setTableRows] = useState<OrderBookTypes[]>([]);

  const fetchOrderData = async (date: string) => {
    try {
      const customDate = new Date(date).toISOString();

      const config = {
        payload: {
          customDate,
        },
      };
      const response = await OrderBookPostService(config);
      if (response?.data) {
        const mappedRows = response.data.map(
          (strategy: OrderBookTypes, index: number) => ({
            id: strategy.orderId,
            snumber: strategy.sno || index + 1,
            strategyname: strategy.sname,
            datetime: strategy.dateTime || date,
            symbol: strategy.symbol,
            quantity: strategy.quantity,
            price: strategy.price,
            status: strategy.status
              ? strategy.status.charAt(0).toUpperCase() +
                strategy.status.slice(1).toLowerCase()
              : "",
          })
        );
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
    fetchOrderData(selectedDate);
  }, [selectedDate]);

  return (
    <PageContainer>
      <UserCustomTable
        rows={tableRows}
        columns={columns}
        enableExport={true}
        isOrderBook
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        isLoading={isLoading}
        apiStatusFail={apiStatusFail}
      />
    </PageContainer>
  );
};

export default OrderDifferencePage;
