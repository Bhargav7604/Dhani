import React from "react";
import PageContainer from "../sharedComponents/PageContainer";
import { Outlet } from "react-router-dom";


const StrategiesPage: React.FC = () => {
  return (
    <>
      <PageContainer>
        <Outlet />
      </PageContainer>
    </>
  );
};

export default StrategiesPage;
