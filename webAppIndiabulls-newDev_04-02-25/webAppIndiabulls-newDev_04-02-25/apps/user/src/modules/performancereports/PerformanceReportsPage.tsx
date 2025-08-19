// import ServerError from "../../components/errorcomponents/servererror/ErrorComponent";
import { DynamicWrapperDiv } from "../../components/ui/GlobalStyles";

import ReportTable from "./sections/reporttable/ReportTablePage";

function PerformanceReportsPage() {
  return (
    <DynamicWrapperDiv>
      <ReportTable />
    </DynamicWrapperDiv>
  );
}

export default PerformanceReportsPage;
