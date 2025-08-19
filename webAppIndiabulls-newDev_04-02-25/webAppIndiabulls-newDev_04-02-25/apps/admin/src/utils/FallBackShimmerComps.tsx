import { useLocation } from "react-router-dom";
import ProfileShimmer from "../components/ui/shimmers/ProfileShimmerComp";
import TableShimmerComp from "../components/ui/shimmers/TableShimmerComp";

const location = useLocation();

export const FallBackShimmerComps = () => {
  switch (location.pathname) {
    case "/profile":
      return <ProfileShimmer />;
    case "/strategies":
      return <TableShimmerComp rowsCount={7} />;
    default:
      return <TableShimmerComp rowsCount={7} />;
  }
};
