import React, { useState, useEffect } from "react";
import { useColumns } from "./TemplateData";
import TableShimmerEffect from "../../../../components/ui/shimmers/TableShimmerComp";
import dayjs from "dayjs";

import utc from "dayjs/plugin/utc";
import { TamplatePnl } from "../../ReportsUtils";
import CustomTable from "../../../sharedComponents/CustomTable/CustomTable";
import {  fetchTemplatePNLByDate } from "../../services/AppService";
dayjs.extend(utc);

const TemplatePNLTable: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [tableData, setTableData] = useState<TamplatePnl[]>([]);
  const [fromDate, setFromDate] = useState<string>("");
  const [toDate, setToDate] = useState<string>("");
  // const handleFromDate = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setFromDate(event.target.value);
  // };

  // const handleToDate = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setToDate(event.target.value);
  // };

 
  const columns = useColumns();

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

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetchTemplatePNLByDate(
          formattedFromDate,
          formattedToDate,
         
        );
        setLoading(false);
        setTableData(response.data.reports || []);
      } catch (err) {
        console.error("Error fetching reports:", err);
      } finally {
        setLoading(false);
      }
    };

    const timer = setTimeout(fetchData);
    return () => clearTimeout(timer);
  }, [dateChange]);

  return (
    <>
      {loading ? (
        <TableShimmerEffect rowsCount={7} />
      ) : (
        <CustomTable
          rows={tableData}
          columns={columns}
          enableExport={true}
          fromDate={fromDate}
          toDate={toDate}
          handleFromDate={handleFromDate}
          handleToDate={handleToDate}
          FromAndToDate
        />
      )}
    </>
  );
};

export default TemplatePNLTable;
