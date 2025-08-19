import React from "react";
import { FlexProfileDiv, HeadingWrapper, PageHeading } from "../../components/ui/GlobalStyles";
import AccountInfo from "./AccountInfo";
import PasswordInfo from "./PasswordInfo";
import { TableHeader } from "../sharedComponents/CustomTable/CustomTableStyles";

const ProfilePage: React.FC = () => {
  return (
    <>
      <HeadingWrapper>
        <PageHeading>
         <TableHeader>Profile</TableHeader>
          </PageHeading>
      </HeadingWrapper>
      <FlexProfileDiv >
        <AccountInfo />
        <PasswordInfo />
      </FlexProfileDiv>
    </>
  );
};

export default ProfilePage;
