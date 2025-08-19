export interface ReusableModalProps {
    open: boolean;
    handleClose: () => void;
    handleConfirm: () => void;
    title: string;
    description: string;
    confirmButtonText?: string;
    cancelButtonText?: string;
    confirmButtonColor?: string;
    cancelButtonColor?: string;
    showConfirmButton?: boolean;
}
export interface CancelButtonProps{
    cancelation?: boolean;
}
export interface SaveButtonProps{
    confirm?: boolean;
}