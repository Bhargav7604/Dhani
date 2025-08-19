import { useState, useEffect } from "react";
import {
  HeadingWrapper,
  PageHeading,
} from "../../../../components/ui/GlobalStyles";
import CustomTable from "../../../sharedComponents/CustomTable/CustomTable";
import PageContainer from "../../../sharedComponents/PageContainer";
import { useColumns } from "./ActiveStarategyData";
import { ActiveStrategiestableGetService } from "../../services/AppServices";
import { StrategyRows } from "../../StrategiesUtils";
import TableShimmerEffect from "../../../../components/ui/shimmers/TableShimmerComp";
import { TableHeader } from "../../../sharedComponents/CustomTable/CustomTableStyles";


const ActiveStrategies: React.FC = () => {
 
  
  const [isLoading, setIsLoading] = useState(true);
  const [rows, setRows] = useState<StrategyRows[]>([]);


  useEffect(() => {
    async function fetchData() {
      setIsLoading(true)
      try {
        const response = await ActiveStrategiestableGetService("active");

        if (response?.data?.allAdminStrategies) {
          const mappedRows = response.data.allAdminStrategies.map(
            (strategy: StrategyRows) => {
              return {
                id: strategy.id,
                userId: strategy.userId,
                description: strategy.description,
                name: strategy.name,
                instrument: strategy.instrument || "N/A",
                status: strategy.status || "N/A",
              };
            }
          );

          setRows(mappedRows);
          setIsLoading(false);
        } else {
          console.error("No strategies data found");
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      }finally {
        setIsLoading(false); // always stop loading
      }
    }

      fetchData();
  }, []);

  const columns = useColumns();
  return (
    <>
      <HeadingWrapper>
        <PageHeading>
          <TableHeader>Active strategies </TableHeader>
        </PageHeading>
      </HeadingWrapper>
      {isLoading ? (
        <TableShimmerEffect rowsCount={7} />
      ) : (
        <PageContainer>
          <CustomTable rows={rows} columns={columns} />
        </PageContainer>
      )}
    </>
  );
};

export default ActiveStrategies;
