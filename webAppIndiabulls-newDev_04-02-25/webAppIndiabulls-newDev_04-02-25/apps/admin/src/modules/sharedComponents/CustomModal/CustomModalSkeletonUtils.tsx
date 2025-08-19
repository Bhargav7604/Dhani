export interface CustomModalSkeletonProps {
    open: boolean;
    handleClose: () => void;
    children: React.ReactNode;
    footer?: React.ReactNode;
}