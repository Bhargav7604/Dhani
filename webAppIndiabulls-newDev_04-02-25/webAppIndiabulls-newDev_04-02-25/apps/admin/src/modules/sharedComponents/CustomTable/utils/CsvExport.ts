interface RowData {
  [key: string]: string | number | boolean | null | undefined;
}

export const exportToCSV = (rows: RowData[], fileName: string) => {
  if (!rows || rows.length === 0) {
    console.warn("No data to export.");
    return;
  }

  // Extract headers
  const headers = Object.keys(rows[0]);

  // Create CSV content
  const csvContent = [
    headers.join(","), // Headers row
    ...rows.map((row) => headers.map((header) => row[header]).join(",")), // Data rows
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
