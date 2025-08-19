export interface CustomPaginationProps {
    currentPage: number;
    totalPages: number;
    isUser?:boolean;
    onPageChange: (page: number) => void;
}