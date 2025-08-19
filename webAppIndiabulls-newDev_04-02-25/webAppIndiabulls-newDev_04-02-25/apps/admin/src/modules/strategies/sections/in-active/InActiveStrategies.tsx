import React, { useEffect, useState } from "react";
import { InActiveStrategiestableGetService } from "../../services/AppServices";
import { HeadingWrapper, PageHeading } from "../../../../components/ui/GlobalStyles";
import PageContainer from "../../../sharedComponents/PageContainer";
import CustomTable from "../../../sharedComponents/CustomTable/CustomTable";

 import { useColumns } from "./InActiveStrategiesData";
import { StrategyRows } from "../../StrategiesUtils";
import TableShimmerEffect from "../../../../components/ui/shimmers/TableShimmerComp";
import { TableHeader } from "../../../sharedComponents/CustomTable/CustomTableStyles";

const NonActiveStrategies: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [rows, setRows] = useState<StrategyRows[]>([]);
const columns = useColumns()
  useEffect(() => {
    async function fetchData() {
      setIsLoading(true)
      try {
        const response = await InActiveStrategiestableGetService();

        if (response?.data?.allAdminStrategies) {
          const mappedRows = response.data.allAdminStrategies.map(
            (strategy: StrategyRows) => {
              return {
                id: strategy.id,
                userId: strategy.userId,
                description:strategy.description,
                name: strategy.name,
                instrument: strategy.instrument || "N/A",
                status: strategy.status || "N/A",

              };
            }
          );

          setRows(mappedRows);
          setIsLoading(false)

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

  return (
    <>
      <HeadingWrapper>
        <PageHeading>
          <TableHeader> IN - Active Strategies </TableHeader>
        </PageHeading>
      </HeadingWrapper>
{isLoading ? <TableShimmerEffect  rowsCount={7}/> :
      <PageContainer>
        <CustomTable
          rows={rows}
          columns={columns}
          // enableStrategyButtons={true}
        />
      </PageContainer>
}
    </>
  );
};

export default NonActiveStrategies;



