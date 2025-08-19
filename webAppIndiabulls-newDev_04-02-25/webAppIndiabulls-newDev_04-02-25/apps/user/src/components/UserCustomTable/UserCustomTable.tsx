import React, { useState } from "react";
import {
  CustomTableContainer,
  CustomTableControls,
  CustomTableLabelContainer,
  StyledDataGrid,
  CustomSelect,
  CustomSearchInput,
  ShowTextStyling,
  CustomTableActions,
  LeftSideControls,
  ButtonsDiv,
  StyledNoCodeButton,
  StyledDownloadButton,
  CustomDatePicker,
} from "./UserCustomTableStyles";
import CustomHeader from "./sections/tableheader/UserCustomTableHeader";
import CustomPagination from "../../../../../packages/ui/src/sharedcomponents/Pagination/CustomPagination";
import { CustomTableProps, SortModel, RowData } from "./UserCustomTableUtils";
import SearchIcon from "../../assets/svgs/EmojiSearch.svg";
import { InputAdornment, MenuItem } from "@mui/material";
import { exportToCSV } from "./sections/downloadtabledata/UserCsvExport";
import { exportToExcel } from "./sections/downloadtabledata/UserExcelExport";
import { MenuItemSelect } from "./UserCustomTableStyles";
import {
  CustomDateWraperContainer,
  DateContainer,
  DateText,
} from "../../modules/performancereports/sections/reporttable/ReportTablePageStyles";
import { ShimmerCard } from "../../modules/deployedstrategies/sections/deployedshimmercard/ShimmerCard";
import NoSearchStrategy from "../../../../../packages/ui/src/sharedcomponents/nosearch/NoSearchCard";

const CustomTable: React.FC<CustomTableProps> = ({
  rows,
  columns,
  defaultPageSize = 5,
  enableExport = false,
  enableDefaultSelect = false,
  isUser,
  isOrderBook,
  selectedDate,
  setSelectedDate,
  performanceReport,
  fromDate,
  toDate,
  handleFromDate,
  handleToDate,
  isLoading,
  apiStatusFail,
}) => {
  const [searchText, setSearchText] = useState<string>("");
  const [pageSize, setPageSize] = useState<number>(defaultPageSize);

  const [page, setPage] = useState<number>(0);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [sortModel, setSortModel] = useState<SortModel>({
    field: "",
    sort: null,
  });

  const handleDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = event.target.value;
    setSelectedDate(newDate);
  };
  const sortedRows = [...rows].sort((a, b) => {
    if (!sortModel.field || sortModel.sort === null) return 0;
    const aValue = a[sortModel.field as keyof RowData] ?? "";
    const bValue = b[sortModel.field as keyof RowData] ?? "";
    if (aValue < bValue) return sortModel.sort === "asc" ? -1 : 1;
    if (aValue > bValue) return sortModel.sort === "asc" ? 1 : -1;
    return 0;
  });

  // Filter all rows, not just paginated ones
  const filteredRows = sortedRows.filter((row) =>
    Object.values(row).some((value) =>
      value
        ?.toString()
        .toLowerCase()
        .replace(/\s/g, "")
        .includes(searchText.toLowerCase().replace(/\s/g, ""))
    )
  );

  const startIndex = page * pageSize;
  const endIndex = startIndex + pageSize;
  const currentRows = filteredRows.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filteredRows.length / pageSize);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const handleSort = (field: string) => {
    let newSort: "asc" | "desc" | null = "asc";
    if (sortModel.field === field && sortModel.sort === "asc") {
      newSort = "desc";
    } else if (sortModel.field === field && sortModel.sort === "desc") {
      newSort = null;
    }
    setSortModel({ field, sort: newSort });
  };

  const modifiedColumns = columns.map((col) => ({
    ...col,
    renderHeader: () => (
      <CustomHeader
        columnTitle={col.headerName || ""}
        sortDirection={sortModel.field === col.field ? sortModel.sort : null}
        onSort={() => handleSort(col.field)}
      />
    ),
    sortable: false,
  }));
  const options = ["Daily", "Weekly", "Monthly"];

  return (
    <CustomTableContainer>
      <CustomTableControls>
        <LeftSideControls>
          <CustomTableLabelContainer>
            <ShowTextStyling>Show</ShowTextStyling>
            <CustomSelect variant="outlined" size="small">
              <MenuItemSelect
                value={pageSize.toString()}
                onChange={(e) => {
                  setPageSize(Number((e.target as any).value));
                  setPage(0);
                }}
              >
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={15}>15</MenuItem>
                <MenuItem value={20}>20</MenuItem>
                <MenuItem value={25}>25</MenuItem>

              </MenuItemSelect>
            </CustomSelect>
          </CustomTableLabelContainer>

          <CustomTableLabelContainer>
            <CustomSearchInput
              size="small"
              variant="outlined"
              placeholder="Search..."
              value={searchText}
              onChange={(e) => setSearchText((e.target as any).value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <img src={SearchIcon} alt="Search Icon" />
                  </InputAdornment>
                ),
              }}
            />
          </CustomTableLabelContainer>
          {isOrderBook && (
            <CustomTableLabelContainer>
              <CustomDatePicker
                type="date"
                value={selectedDate}
                onChange={handleDate}
              />
            </CustomTableLabelContainer>
          )}
          {performanceReport && (
            <CustomDateWraperContainer>
              <DateContainer>
                <DateText>From Date:</DateText>
                <CustomDatePicker
                  type="date"
                  value={fromDate}
                  onChange={handleFromDate}
                  max={new Date().toISOString().split("T")[0]}
                />
              </DateContainer>

              <DateContainer>
                <DateText>To Date:</DateText>
                <CustomDatePicker
                  type="date"
                  value={toDate}
                  min={fromDate}
                  onChange={handleToDate}
                  max={new Date().toISOString().split("T")[0]} // Allows today and future dates
                />
              </DateContainer>
            </CustomDateWraperContainer>
          )}

          {isUser && enableDefaultSelect && (
            <ButtonsDiv>
              {options.map((option, index) => (
                <StyledNoCodeButton
                  key={option}
                  onClick={() => setActiveIndex(index)}
                  active={activeIndex === index}
                >
                  {option}
                </StyledNoCodeButton>
              ))}
            </ButtonsDiv>
          )}
        </LeftSideControls>
        {enableExport && (
          <CustomTableActions>
            <StyledDownloadButton
              variant="contained"
              onClick={() => exportToCSV(rows as RowData[], "data_export")}
            >
              Export as CSV
            </StyledDownloadButton>
            <StyledDownloadButton
              variant="contained"
              onClick={() => exportToExcel(rows as RowData[], "data_export")}
              style={{ marginLeft: "8px" }}
            >
              Export as Excel
            </StyledDownloadButton>
          </CustomTableActions>
        )}
      </CustomTableControls>

      {/* <StyledDataGrid
        rows={currentRows}
        columns={modifiedColumns}
        pageSizeOptions={[5, 10, 20]}
        disableRowSelectionOnClick
        hideFooterPagination
        autoHeight
        className="custom-data-grid no-footer"
      /> */}
      <StyledDataGrid
        rows={currentRows} // Always pass real rows (even when loading)
        columns={modifiedColumns}
        pageSizeOptions={[5, 10, 20]}
        disableRowSelectionOnClick
        hideFooterPagination
        loading={isLoading} // Use built-in loading state
        // autoHeight
        className="custom-data-grid no-footer"
        slots={{
          loadingOverlay: () => (
            <div style={{ padding: "16px" }}>
              {Array.from({ length: 8 }).map((_, index) => (
                <ShimmerCard
                  $height="50px"
                  $mobileheight="50px"
                  $minidesktopheight="50px"
                  $tabheight="50px"
                  key={index}
                  style={{ marginBottom: "8px" }}
                />
              ))}
            </div>
          ),
          noRowsOverlay: () => <NoSearchStrategy text={apiStatusFail ? "Failed to fetch data." : "No data Available"} />,
        }}
      />

      {currentRows.length > 0 && (
        <CustomPagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          isUser={true}
        />
      )}
    </CustomTableContainer>
  );
};

export default CustomTable;
