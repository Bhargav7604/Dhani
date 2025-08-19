import { Navigate, Route, Routes } from "react-router-dom";
import { Fragment, ReactElement } from "react";
import {
  PRIVATE_ROUTES_ARR,
  RouteInterface,
  ROUTES_CONSTANTS,
} from "./PrivateAppRouteUtils";
import { PUBLIC_ROUTES_ARR } from "./PublicAppRouteUtils";
import Layout from "../modules/layout/Layout";
import PrivateRoute from "./PrivateRoute";

const AppRoutes = (): ReactElement => {
  return (
    <Fragment>
      <Routes>
        {/* Public Routes */}
        {PUBLIC_ROUTES_ARR.map(({ id, route, Component }: RouteInterface) => (
          <Route key={id} path={route} element={<Component />} />
        ))}

        {/* Protected Routes with Layout */}
        <Route path="/" element={<Layout />}>
          {/* Default redirect to /strategies */}
          <Route
            index
            element={<Navigate to={`/${ROUTES_CONSTANTS.STRATEGIES}/active`} />}
          />

          {/* Private Routes */}
          {PRIVATE_ROUTES_ARR.map(
            ({ id, route, Component, children}: RouteInterface) => (
              <Route
                key={id}
                path={route}
                
                element={<PrivateRoute element={<Component />} />}
              >
                {children?.map((child, index) => (
                  <Route
                    key={index}
                    
                    {...(child.path === ""
                      ? { index: true }
                      : { path: child.path })}
                    element={<PrivateRoute element={<child.Component />} />}
                  />
                ))}
              </Route>
            )
          )}
        </Route>

        {/* Fallback */}
        <Route
          path="*"
          element={<Navigate to={`/${ROUTES_CONSTANTS.STRATEGIES}/manage`} />}
        />
      </Routes>
    </Fragment>
  );
};

export default AppRoutes;
