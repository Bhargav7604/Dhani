import React, { useState, useEffect } from "react";
import CustomTable from "../../../../components/UserCustomTable/UserCustomTable";
import { useColumns } from "./ReportTablePageData";
// import Positiontableshimmer from "../../../../components/shimmers/ordertableshimmer/positiontableshimmer";
import { fetchReportsByDate } from "../../services/PerformanceReportServices";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { ReportTableStateTypes, TableFieldsProps } from "./ReportTableUtils";
dayjs.extend(utc);

const initialState: ReportTableStateTypes = {
  isLoading: true,
  apiStatusFail: false,
};

const ReportTable: React.FC = () => {
  const [state, setState] = useState<ReportTableStateTypes>(initialState);
  const { apiStatusFail, isLoading } = state;
  const [tableData, setTableData] = useState<TableFieldsProps[]>([]);
  const [fromDate, setFromDate] = useState<string>("");
  const [toDate, setToDate] = useState<string>("");

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

    setFromDate(event.target.value);
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

    setToDate(event.target.value);
  };
  const instantFromDate = dayjs(fromDate).utc().valueOf() / 1000;
  const formattedFromDate = fromDate ? `${instantFromDate.toFixed(9)} ` : "";
  const instantToDate = dayjs(toDate).utc().valueOf() / 1000;
  const formattedToDate = toDate ? `${instantToDate.toFixed(9)}` : "";
  const dateChange = formattedFromDate && formattedToDate;
  const columns = useColumns(fromDate, toDate);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchReportsByDate(
          formattedFromDate,
          formattedToDate
        );
        if (response) {
          setTableData(response.data.reports || []);
        }
      } catch (err) {
        setState((prevState) => ({
          ...prevState,
          apiStatusFail: true,
        }));
        console.error("Error fetching reports:", err);
      } finally {
        setState((prevState) => ({
          ...prevState,
          isLoading: false,
        }));
      }
    };

    const timer = setTimeout(fetchData);
    return () => clearTimeout(timer);
  }, [dateChange]);

  return (
    <CustomTable
      rows={tableData}
      columns={columns}
      enableExport={true}
      fromDate={fromDate}
      toDate={toDate}
      handleFromDate={handleFromDate}
      handleToDate={handleToDate}
      performanceReport
      isLoading={isLoading}
      apiStatusFail={apiStatusFail}
    />
  );
};

export default ReportTable;
