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
  GridContainer,
  MenuItemSelect,
  CustomDatePicker,
  CustomDateWraperContainer,
  DateContainer,
  DateText,
  PageNationCountText,
} from "./CustomTableStyles";
import CustomHeader from "./Header/CustomTableHeader";
import { CustomTableProps, SortModel, RowData } from "./CustomTableUtils";
import { InputAdornment, MenuItem } from "@mui/material";
import { exportToCSV } from "./utils/CsvExport";
import { exportToExcel } from "./utils/ExcelExport";

import SearchIcon from "../../../assets/svg/EmojiSearch.svg";
import CustomPagination from "./Pagination/CustomPagination";
import ToasterComp from "../toasterdialog/ToasterComp";

const CustomTable: React.FC<CustomTableProps> = ({
  rows,
  columns,
  defaultPageSize = 10,
  enableExport = false,
  enableDefaultSelect = false,
  isSingleDate,
  selectedDate,
  setSelectedDate,
  FromAndToDate,
  fromDate,
  toDate,
  handleFromDate,
  handleToDate,
}) => {
  const [searchText, setSearchText] = useState<string>("");
  const [pageSize, setPageSize] = useState<number>(defaultPageSize);
  const [page, setPage] = useState<number>(0);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const [sortModel, setSortModel] = useState<SortModel>({
    field: "",
    sort: null,
  });

  const [toaster, setToaster] = useState<{
    status: boolean | null;
    message: string;
  }>({ status: null, message: "" });

  // Sort rows based on sort model
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

  const handleDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = event.target.value;
    setSelectedDate(newDate);
  };

  const options = ["Open Broker", "Open QuantLab", "Order difference"];

 

  return (
    <CustomTableContainer>
      {toaster.status !== null && (
        <ToasterComp
          status={toaster.status}
          message={toaster.message}
          duration={3000}
          onClose={() => setToaster({ status: null, message: "" })}
        />
      )}
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
                {/* <MenuItem value={5}>5</MenuItem> */}
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={15}>15</MenuItem>
              </MenuItemSelect>
            </CustomSelect>
          </CustomTableLabelContainer>

          {/* <CustomTableLabelContainer>
            <CustomSearchInput
              size="small"
              variant="outlined"
              placeholder="Search..."
              value={searchText}
              onChange={(e) => setSearchText((e.target as any).value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <img src={SearchIcon} />
                  </InputAdornment>
                ),
              }}
            />
          </CustomTableLabelContainer> */}

          <CustomTableLabelContainer>
            <CustomSearchInput
              size="small"
              variant="outlined"
              placeholder="Search..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <img src={SearchIcon} alt="Search Icon" />
                  </InputAdornment>
                ),
              }}
            />
          </CustomTableLabelContainer>
          {isSingleDate && (
            <CustomTableLabelContainer>
              <CustomDatePicker
                type="date"
                value={selectedDate}
                onChange={handleDate}
              />
            </CustomTableLabelContainer>
          )}
          {FromAndToDate && (
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
          {enableDefaultSelect && (
            <>
              {options.length > 0 && (
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
            </>
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

      <GridContainer>
        <StyledDataGrid
          rowHeight={45}
          rows={currentRows}
          columns={modifiedColumns}
          pageSizeOptions={[10, 20]}
          disableRowSelectionOnClick
          hideFooterPagination
          autoHeight
          className="custom-data-grid no-footer"
        />
      </GridContainer>
      {currentRows.length === 0 ? (
        ""
      ) : (
        <CustomPagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
      <PageNationCountText>
        Showing {startIndex + 1}–{Math.min(endIndex, filteredRows.length)} of{" "}
        {filteredRows.length} results
      </PageNationCountText>
    </CustomTableContainer>
  );
};

export default CustomTable;
