import { useEffect, useState } from "react";
import {
  HeadingWrapper,
  PageHeading,
} from "../../../../components/ui/GlobalStyles";
import CustomTable from "../../../sharedComponents/CustomTable/CustomTable";
import PageContainer from "../../../sharedComponents/PageContainer";
import { columns } from "./UserUsageReportData";
import { TableHeader } from "../../../sharedComponents/CustomTable/CustomTableStyles";
import TableShimmerEffect from "../../../../components/ui/shimmers/TableShimmerComp";
import { useParams } from "react-router-dom";
import { UserUsageResponse, UserUsageTypes } from "../../services/AppServiceUtils";
import { UserUsageGetService } from "../../services/AppServices";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);

const UserUsageReport = () => {
  const { userId } = useParams<{ userId: string | undefined }>();

  const [isLoading, setIsLoading] = useState(false);
  const [rows, setRows] = useState<UserUsageTypes[]>([]);
  const [startDate, setstartDate] = useState<string>("");
  const [endDate, setendDate] = useState<string>("");
  const handleFromDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Check if the input matches the YYYY-MM-DD format
    if (!/^\d{4}-\d{2}-\d{2}$/.test(event.target.value)) {
      return;
    }

    const inputDate = new Date(event.target.value);
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Reset time to midnight for comparison

    // Ensure the date is valid (not NaN)
    if (isNaN(inputDate.getTime())) {
      return;
    }

    setstartDate(event.target.value);
  };

  const handleToDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Check if the input matches the YYYY-MM-DD format
    if (!/^\d{4}-\d{2}-\d{2}$/.test(event.target.value)) {
      return;
    }

    const inputDate = new Date(event.target.value);
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Reset time to midnight for comparison

    // Ensure the date is valid (not NaN)
    if (isNaN(inputDate.getTime())) {
      return;
    }

    setendDate(event.target.value);
  };
  const instantFromDate = dayjs(startDate).utc().valueOf() / 1000;
  const formattedFromDate = startDate ? `${instantFromDate.toFixed(9)} ` : "";
  const instantToDate = dayjs(endDate).utc().valueOf() / 1000;
  const formattedToDate = endDate ? `${instantToDate.toFixed(9)}` : "";
  const dateChange = formattedFromDate && formattedToDate;

useEffect(() => {
  const fetchOrderData = async () => {
    setIsLoading(true);

    try {
      const response: UserUsageResponse = await UserUsageGetService({
        userId,
        startDate: formattedFromDate,
        endDate: formattedToDate,
      });

      if (response?.data) {
        const strategy: UserUsageTypes = response.data;
        const mappedRow = {
          id: "1",
          userId: strategy.userId ?? "NA",
          pnl: strategy.pnl ?? "NA",
          trades: strategy.trades ?? "NA",
        };
        setRows([mappedRow]); // Wrapped in an array if `setRows` expects a list
      }
    } catch (error) {
      console.error("Error fetching user usage data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  fetchOrderData();
}, [dateChange, formattedFromDate, formattedToDate, userId]);

  return (
    <>
      <HeadingWrapper>
        <PageHeading>
          <TableHeader>User Usage Report</TableHeader>
        </PageHeading>
      </HeadingWrapper>
      {isLoading ? (
        <TableShimmerEffect rowsCount={3} />
      ) : (
        <PageContainer>
          <CustomTable
            rows={rows}
            columns={columns}
            enableExport={true}
            fromDate={startDate}
            toDate={endDate}
            handleFromDate={handleFromDate}
            handleToDate={handleToDate}
            FromAndToDate
          />
        </PageContainer>
      )}
    </>
  );
};

export default UserUsageReport;
