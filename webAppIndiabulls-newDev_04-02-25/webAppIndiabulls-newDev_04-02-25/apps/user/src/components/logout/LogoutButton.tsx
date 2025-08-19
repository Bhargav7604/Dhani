
import { MainStyledButton } from "../ui/GlobalStyles";
import { DASHBOARD_URL_API } from "../../services/AppEndpoints";

function LogoutButton() {
  const callNativeAppToLogout = () => {
    try {
      window.parent.postMessage("GO_TO_DASHBOARD", DASHBOARD_URL_API);
    } catch (err) {
      throw err;
    }
  };

  return (
    <MainStyledButton
      $padding="4px 12px"
      onClick={callNativeAppToLogout}
      variant="contained"
    >
      Back to Main Terminal
    </MainStyledButton>
  );
}

export default LogoutButton;
