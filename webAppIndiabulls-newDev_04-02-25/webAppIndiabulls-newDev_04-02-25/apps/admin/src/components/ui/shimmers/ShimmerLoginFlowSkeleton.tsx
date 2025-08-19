import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { AdminStyledForm } from "../GlobalStyles";

interface ShimmerSkeletonProps {
  count: number;
  height?: number;
}

const ShimmerSkeleton: React.FC<ShimmerSkeletonProps> = ({ count, height }) => {
  return (
    <AdminStyledForm>
      <Skeleton height={height} count={count} style={{ marginTop: "20px" }} />
    </AdminStyledForm>
  );
};

export default ShimmerSkeleton;
