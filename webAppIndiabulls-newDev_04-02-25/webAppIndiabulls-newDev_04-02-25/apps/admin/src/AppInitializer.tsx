import { Fragment, ReactElement, ReactNode, Suspense } from "react";
import AppRoutes from "./routes/AppRoutes";
// import TableShimmerComp from "./components/ui/shimmers/TableShimmerComp";
// import ProfileShimmer from "./components/ui/shimmers/ProfileShimmerComp";
// import LoginShimmer from "./components/ui/shimmers/LoginShimmer";
// import { useLocation } from "react-router-dom";
// import ForgotPasswordShimmer from "./components/ui/shimmers/ForgotPasswordShimmer";
// import OtpShimmer from "./components/ui/shimmers/OtpShimmer";

const AppInitializer = (): ReactElement => {
  //const location = useLocation();

  // const getShimmerFallback = () => {
  //   switch (location.pathname) {
  //     case "/profile":
  //       return <ProfileShimmer />;
  //     // case "/login":
  //     //   return <LoginShimmer />;
  //     case "/forgot-password":
  //       return <ForgotPasswordShimmer />;
  //     case "/otp":
  //       return <OtpShimmer />;
  //     case "/set-new-password":
  //       return <LoginShimmer />;
  //     case "/strategies":
  //       return <TableShimmerComp rowsCount={7} />;
  //     case "/todays-order":
  //       return <TableShimmerComp rowsCount={7} />;
  //     case "/open-positions":
  //       return <TableShimmerComp rowsCount={7} />;
  //     case "/order-difference":
  //       return <TableShimmerComp rowsCount={7} />;
  //     default:
  //       return;
  //   }
  // };

  const renderRoutes = (): ReactNode => {
    return (
      <Suspense>
        <AppRoutes />
      </Suspense>
    );
  };

  return <Fragment>{renderRoutes()}</Fragment>;
};

export default AppInitializer;
