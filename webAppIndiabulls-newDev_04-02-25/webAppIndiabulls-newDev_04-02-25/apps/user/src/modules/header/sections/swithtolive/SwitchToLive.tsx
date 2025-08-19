import { useNavigate } from "react-router-dom";
import { ExitButton } from "../../HeaderStyles";
export default function SwitchToLive() {
  const navigate = useNavigate();
  function handleSwithToLive() {
    navigate("/welcome");
  }
  return (
    <ExitButton onClick={handleSwithToLive} variant="outlined">
      Switch to live
    </ExitButton>
  );
}
