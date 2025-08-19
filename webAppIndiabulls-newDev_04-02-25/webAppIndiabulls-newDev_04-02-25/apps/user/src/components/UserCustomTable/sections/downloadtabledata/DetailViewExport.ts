import { unparse } from "papaparse";

const exportLegsToCSV = (data: any[], filename: string) => {
  if (!data || data.length === 0) return;

  // Flatten symbolcelldata fields and other nested objects
  const formattedData = data.map((row) => {
    const flattenedRow: Record<string, any> = {};

    for (const [key, value] of Object.entries(row)) {
      if (
        key === "symbolcelldata" &&
        typeof value === "object" &&
        value !== null
      ) {
        const symbolData = value as {
          "Entry_Iv"?: number;
          "Exit_Iv"?: number;
          "Entry_Delta"?: number;
          "Exit_Delta"?: number;
          "Index@Entry"?: number;
          "Index@Exit"?: number;
        };

        // Extract specific fields from symbolcelldata
        flattenedRow["Entry_Iv"] = symbolData["Entry_Iv"] ?? "";
        flattenedRow["Exit_Iv"] = symbolData["Exit_Iv"] ?? "";
        flattenedRow["Entry_Delta"] = symbolData["Entry_Delta"] ?? "";
        flattenedRow["Exit_Delta"] = symbolData["Exit_Delta"] ?? "";
        flattenedRow["Index@Entry"] = symbolData["Index@Entry"] ?? "";
        flattenedRow["Index@Exit"] = symbolData["Index@Exit"] ?? "";
      } else {
        // Convert other complex objects to JSON string
        flattenedRow[key] =
          typeof value === "object" && value !== null
            ? JSON.stringify(value)
            : typeof value === "string" &&
              (key.toLowerCase().includes("time") ||
                key.toLowerCase().includes("date"))
            ? `\t${value}` // Prevent Excel from auto-formatting
            : value;
      }
    }

    return flattenedRow;
  });

  // Convert JSON data to CSV format
  const csvContent = unparse(formattedData);

  // Create a CSV file and trigger download
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.setAttribute("download", `${filename}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export default exportLegsToCSV;
