import { useState } from "react";
import { CustomDatePicker } from "../../UserCustomTableStyles";

const CustomDatePickerComponent = () => {
  const [toDate, setToDate] = useState("");
  const [error, setError] = useState("");

  const handleToDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    // Check if the input matches the YYYY-MM-DD format
    if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) {
      setError("Invalid format! Use YYYY-MM-DD.");
      return;
    }

    const inputDate = new Date(value);
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Reset time to midnight for comparison

    // Ensure the date is valid (not NaN)
    if (isNaN(inputDate.getTime())) {
      setError("Invalid date! Please enter a valid date.");
      return;
    }

   

    // Clear error and update state if valid
    setError("");
    setToDate(value);
  };

  return (
    <div>
      <CustomDatePicker
        type="date"
        value={toDate}
        onChange={handleToDate}
        max={new Date().toISOString().split("T")[0]} // Restricts future dates
      />
      {error && <p style={{color:"red", fontSize:"8px"}}>{error}</p>}
    </div>
  );
};

export default CustomDatePickerComponent;
