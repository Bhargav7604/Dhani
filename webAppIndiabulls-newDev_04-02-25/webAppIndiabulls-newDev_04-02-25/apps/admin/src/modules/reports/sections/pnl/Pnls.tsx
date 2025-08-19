import { useEffect, useState } from "react";
import {
  HeadingWrapper,
  PageHeading,
} from "../../../../components/ui/GlobalStyles";
import CustomTable from "../../../sharedComponents/CustomTable/CustomTable";
import PageContainer from "../../../sharedComponents/PageContainer";
import { columns } from "./PnlData";

import { PnlReportsByDate } from "../../services/AppService";
import { TableHeader } from "../../../sharedComponents/CustomTable/CustomTableStyles";
import TableShimmerEffect from "../../../../components/ui/shimmers/TableShimmerComp";
import { TableRowsProps } from "../../ReportsUtils";


const PNL = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [rows, setRows] = useState([]);
  
 useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
 
      try {
        const response = await PnlReportsByDate();
 
        if (response) {
          const mappedRows = response?.data.map(
            (item: TableRowsProps, index: number) => ({
              id: index + 1,
              userId: item.userId,
              clientId: item.clientId,
              userName: item.userName,
              userAllPNL: item.overAllPNL,
            })
          );
          setRows(mappedRows);
        } else {
          console.error("No data found", response);
        }
      } catch (error) {
        throw error;
      } finally {
        setIsLoading(false);
      }
    };
 
    fetchData();
  }, []);

  return (
    <>
      <HeadingWrapper>
        <PageHeading>
          <TableHeader>PNL Report</TableHeader>
        </PageHeading>
      </HeadingWrapper>
      {isLoading ? (
        <TableShimmerEffect rowsCount={7} />
      ) : (
        <PageContainer>
          <CustomTable
            rows={rows}
            columns={columns}
            // FromAndToDate
            // fromDate={fromDate}
            // toDate={toDate}
            // handleFromDate={handleFromDate}
            // handleToDate={handleToDate}
          />
        </PageContainer>
      )}
    </>
  );
};

export default PNL;
