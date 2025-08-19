import React, { useEffect, useState } from "react";
import { HeadingWrapper, PageHeading } from "../../components/ui/GlobalStyles"; // Reusing global heading styles
import PageContainer from "../sharedComponents/PageContainer";
import CustomTable from "../sharedComponents/CustomTable/CustomTable";
import { useColumns } from "./ErrorTrackerData"; // Importing useColumns
import { ErrorGetService } from "./services/AppServices";
import { ErrorTrakerRows } from "./ErrorTrackerUtils";
import TableShimmerEffect from "../../components/ui/shimmers/TableShimmerComp";
import { TableHeader } from "../sharedComponents/CustomTable/CustomTableStyles";
import dayjs from "dayjs";

const ErrorTrakerPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [rows, setRows] = useState([]);

  const columns = useColumns();

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const response = await ErrorGetService();
        if (response) {
          const mappedRows = response?.data.map(
            (item: ErrorTrakerRows, index: number) => {
              const deploymentDatestamp = parseFloat(item.deploymentDate)
              return{
              id: index + 1, // Generate a unique id for each row
              strategyId: item.strategyId,
              strategyName: item.strategyName,
              userId: item.userId,
             
              deploymentDate: !isNaN(deploymentDatestamp)
                ? dayjs(deploymentDatestamp * 1000).format(
                    "DD-MM-YYYY HH:mm:ss"
                  )
                : "N/A",
              description: item.description,
              status: item.status,
              errorCode: item.errorCode,
               } }
          );

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
  }, []);

  return (
    <>
      <HeadingWrapper>
        <PageHeading>
          <TableHeader>Error Tracker</TableHeader>
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

export default ErrorTrakerPage;
