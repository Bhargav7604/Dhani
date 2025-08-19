// HOVER EFFECT ONLY WORKS ON THE WEB
import { useState } from "react";
import { Popover } from "@mui/material";
import { PopoverContent } from "../../modules/nocodestrategy/NoCodeStrategyStyles";
import { ValuePortfolioText } from "../../modules/readytodeploy/ReadyToDeployStyles";
import { StyledDataBigText } from "../ui/GlobalStyles";

const HoverToFullValues = ({
  value,
  $ispnl,
  $isrupee,
  $istable,
  $istextsmall,
  $isformat,
}: any) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "info-popover" : undefined;

  const formatNumber = (num: number): any => {
    const absNum = Math.abs(num);
    if (absNum >= 1e7) return `${(num / 1e7)?.toFixed(2)} Cr`;
    if (absNum >= 1e5) return `${(num / 1e5)?.toFixed(2)} L`;
    if (absNum >= 1e3) return `${(num / 1e3)?.toFixed(2)} K`;
    return num.toLocaleString("en-IN")
  };

  const isNegative = value < 0;

  return (
    <div onMouseEnter={handlePopoverOpen} onMouseLeave={handlePopoverClose}>
      {$ispnl ? (
        <ValuePortfolioText
          $isnegative={isNegative}
          $ispnl
          $isformat={$isformat}
          $istextsmall={$istextsmall}
        >
          {$isrupee ? "\u20B9" : ""}
          {$isformat
            ? formatNumber(value)
            : value?.toLocaleString("en-IN")}
        </ValuePortfolioText>
      ) : (
        <StyledDataBigText $isformat={$isformat} $istable={$istable}>
          {$isrupee ? "\u20B9" : ""}
          {$isformat
            ? formatNumber(value)
            : value?.toLocaleString("en-IN")}
        </StyledDataBigText>
      )}

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handlePopoverClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        sx={{ pointerEvents: "none" }}
        disableRestoreFocus
      >
        <PopoverContent $isamount>
          {value?.toLocaleString("en-IN") ?? "N/A"}
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default HoverToFullValues;
