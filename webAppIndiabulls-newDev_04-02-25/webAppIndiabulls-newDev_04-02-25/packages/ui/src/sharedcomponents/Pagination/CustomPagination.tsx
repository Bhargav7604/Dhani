import React from "react";
import { CustomPaginationProps } from "./CustomPaginationUtils.js";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import {
  PaginationContainer,
  CustomPaginationItem,
} from "./CustomPaginationStyles.js";
import PageNext from "./PageNext.js";
import PagePrevious from "./PagePrevious.js";
import useMediaQuery from "@mui/material/useMediaQuery";

const CustomPagination: React.FC<CustomPaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handlePageChange = (_: React.ChangeEvent<unknown>, page: number) => {
    onPageChange(page - 1); // Adjusting for 0-based index if needed
  };

  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <>
      <PaginationContainer>
        <Stack spacing={2} alignItems="center" direction="row">
          <Pagination
            variant="outlined"
            shape="rounded"
            count={totalPages}
            page={currentPage + 1}
            boundaryCount={1}
            siblingCount={1}
            onChange={handlePageChange}
            color="primary"
            size={isMobile ? "small" : "medium"}
            renderItem={(item: any) => (
              <CustomPaginationItem
                {...item}
                slots={{
                  previous: PagePrevious,
                  next: PageNext,
                }}
              />
            )}
          />
        </Stack>
      </PaginationContainer>
    </>
  );
};

export default CustomPagination;
