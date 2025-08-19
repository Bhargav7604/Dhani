import { Fragment, ReactElement, ReactNode } from "react";
import AppRoutes from "./routes/AppRoutes";

const AppInitializer = (): ReactElement => {
  const renderRoutes = (): ReactNode => {
    return <AppRoutes />;
  };

  return (
    <Fragment>
      {renderRoutes()}
    </Fragment>
  );
};

export default AppInitializer;
