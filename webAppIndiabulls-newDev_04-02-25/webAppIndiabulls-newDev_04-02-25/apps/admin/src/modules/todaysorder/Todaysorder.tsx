import React, { useEffect, useState } from "react";
import { HeadingWrapper, PageHeading } from "../../components/ui/GlobalStyles";
import PageContainer from "../sharedComponents/PageContainer";
import { columns } from "./TodaysOrderData";
import { TodayOrdersPostService } from "./services/AppServices";
import CustomTable from "../sharedComponents/CustomTable/CustomTable";
import { useDispatch } from "react-redux";
import { setTodayOrder } from "./state-slice/TodaysOrderSlice";
import TableShimmerEffect from "../../components/ui/shimmers/TableShimmerComp";
import { TableHeader } from "../sharedComponents/CustomTable/CustomTableStyles";
import { TodayOrderTypes } from "./TodaysOrderUtils";
import dayjs from "dayjs";
const TodaysOrderPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [rows, setRows] = useState<TodayOrderTypes[]>([]);
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const response = await TodayOrdersPostService();

        if (response?.data?.content) {
          const mappedRows = response.data.content.map(
            (item: TodayOrderTypes, index: string) => {
              const dateTimeStamp = parseFloat(item.dateTime);
              return {
                id: index + 1,
                orderUniqueIdentifier: item.orderUniqueIdentifier,
                userId: item.userId,
                userName: item.userName,
                strategyId: item.strategyId,
                strategyName: item.strategyName,
                symbol: item.symbol,
                dateTime: !isNaN(dateTimeStamp)
                  ? dayjs(dateTimeStamp * 1000).format("DD-MM-YYYY HH:mm:ss")
                  : "N/A",
                quantity: item.quantity || "0",
                price: item.price,
                status: item.status,
              };
            }
          );

          dispatch(setTodayOrder(mappedRows));
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
          <TableHeader>Today's Order list</TableHeader>
        </PageHeading>
      </HeadingWrapper>
      {isLoading ? (
        <TableShimmerEffect rowsCount={7} />
      ) : (
        <PageContainer>
          <CustomTable
            rows={rows}
            columns={columns}
            enableExport={true}
            enableDefaultFilter={true}
          />
        </PageContainer>
      )}
    </>
  );
};

export default TodaysOrderPage;
