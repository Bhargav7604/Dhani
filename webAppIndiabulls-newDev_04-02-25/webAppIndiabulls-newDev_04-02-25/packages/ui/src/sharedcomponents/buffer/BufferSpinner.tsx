import { LoadingOverlay, Spinner } from "./BufferSpinnerStyles.js";

export default function BufferSpinner() {
  return (
    <LoadingOverlay>
      <Spinner />
    </LoadingOverlay>
  );
}
