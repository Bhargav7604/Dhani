interface RowData {
  [key: string]: string | number | boolean | null | undefined;
}

export const exportToExcel = (rows: RowData[], fileName: string) => {
  if (!rows || rows.length === 0) {
    console.warn("No data to export.");
    return;
  }

  // Extract headers
  const headers = Object.keys(rows[0]);

  // Start creating the XML content
  let xmlContent = `<?xml version="1.0"?>
    <Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet"
    xmlns:o="urn:schemas-microsoft-com:office:office"
    xmlns:x="urn:schemas-microsoft-com:office:excel"
    xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet"
    xmlns:html="http://www.w3.org/TR/REC-html40">
    <Worksheet ss:Name="Sheet1"><Table>`;

  // Add headers to the XML
  xmlContent += `<Row>${headers
    .map((header) => `<Cell><Data ss:Type="String">${header}</Data></Cell>`)
    .join("")}</Row>`;

  // Add data rows
  rows.forEach((row) => {
    xmlContent += `<Row>${headers
      .map(
        (header) => `<Cell><Data ss:Type="String">${row[header]}</Data></Cell>`
      )
      .join("")}</Row>`;
  });

  // Close XML tags
  xmlContent += `</Table></Worksheet></Workbook>`;

  // Create a Blob and trigger the download
  const blob = new Blob([xmlContent], {
    type: "application/vnd.ms-excel;charset=utf-8;",
  });
  const link = document.createElement("a");
  const url = URL.createObjectURL(blob);
  link.href = url;
  link.setAttribute("download", `${fileName}.xls`); // .xls extension for basic Excel file
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
export default exportToExcel;
