export interface CustomHeaderProps {
    columnTitle: string;
    sortDirection?: 'asc' | 'desc' | null;
    onSort: () => void;
    disableCustomSort?: boolean;
}