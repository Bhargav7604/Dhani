import React from "react";
import PageContainer from "../sharedComponents/PageContainer";
import { Outlet } from "react-router-dom";


const UsersPage: React.FC = () => {
  return (
    <>
      <PageContainer>
        <Outlet />
      </PageContainer>
    </>
  );
};

export default UsersPage;
