import React from "react";
import { DialogContent, DialogActions } from "@mui/material";
import { StyledDialog } from "./CustomModalSkeletonStyles";
import { CustomModalSkeletonProps } from "./CustomModalSkeletonUtils";

const CustomModalSkeleton: React.FC<CustomModalSkeletonProps> = ({
  open,
  handleClose,
  children,
  footer,
}) => (
  <StyledDialog open={open} onClose={handleClose}>
    <DialogContent>{children}</DialogContent>
    {footer && <DialogActions>{footer}</DialogActions>}
  </StyledDialog>
);

export default CustomModalSkeleton;
