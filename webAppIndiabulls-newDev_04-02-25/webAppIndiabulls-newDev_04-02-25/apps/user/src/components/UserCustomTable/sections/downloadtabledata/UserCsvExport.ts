interface RowData {
  [key: string]: string | number | boolean | null | undefined | object;
}

// Function to flatten object values into strings
const flattenObject = (obj: object): string => {
  return Object.entries(obj)
    .map(([key, value]) => `${key}: ${String(value)}`)
    .join("; ");
};

export const exportToCSV = (rows: RowData[], fileName: string) => {
  if (!rows || rows.length === 0) {
    console.warn("No data to export.");
    return;
  }

  // Extract headers dynamically from all rows to avoid missing keys
  const headers = Array.from(new Set(rows.flatMap((row) => Object.keys(row))));

  // Create CSV content
  const csvContent = [
    headers.join(","), // Headers row
    ...rows.map((row) =>
      headers
        .map((header) => {
          let value = row[header];

          // Convert objects to strings for CSV compatibility
          if (typeof value === "object" && value !== null) {
            value = flattenObject(value);
          }

          // Ensure proper CSV formatting
          if (
            typeof value === "string" &&
            (value.includes(",") || value.includes("\n") || value.includes('"'))
          ) {
            value = `"${value.replace(/"/g, '""')}"`; // Escape double quotes
          }

          return value !== undefined && value !== null ? value : ""; // Replace undefined/null with empty string
        })
        .join(",")
    ),
  ].join("\n");

  // Create a Blob and trigger the download
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", `${fileName}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export default exportToCSV;
