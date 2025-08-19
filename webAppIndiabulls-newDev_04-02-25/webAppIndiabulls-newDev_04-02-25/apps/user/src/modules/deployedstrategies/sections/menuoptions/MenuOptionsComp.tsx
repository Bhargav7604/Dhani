import * as React from "react";

import {
  StyledDivider,
  StyledMenu,
  StyledOptionMenuItem,
} from "../../DeployedStrategiesStyles";
import { OptionType, ReusableMenuProps } from "../../DeployedStrategiesUtils";

const ReusableMenu: React.FC<ReusableMenuProps> = ({
  options,
  selectedOption,
  onSelect,
  anchorEl,
  open,
  onClose,
  withDivider = false,
  diySavedStrategies = false,
  menuListSx,
}) => {
  const handleSelect = (option: string, onClick?: () => void) => {
    if (onSelect) onSelect(option);
    if (onClick) onClick();
    handleClose();
  };

  const handleClose = () => {
    if (onClose) onClose();
  };

  const processedOptions = options as OptionType[];

  return (
    <StyledMenu
      $diySavedStrategies={diySavedStrategies}
      anchorEl={anchorEl}
      open={open ?? false}
      onClose={handleClose}
      sx={{
        backgroundColor: "transparent",
      }}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      MenuListProps={{
        autoFocusItem: false,
        sx: menuListSx,
      }}
    >
      {processedOptions.flatMap((option, index) => {
        const label = typeof option === "string" ? option : option.label;
        const clickHandler =
          typeof option === "string" ? undefined : option.onClick;

        const items = [
          <StyledOptionMenuItem
            key={`menu-item-${label}`}
            selected={label === selectedOption}
            onClick={() => handleSelect(label, clickHandler)}
            $color={typeof option !== "string" ? option.color : "undefined"}
          >
            {label}
          </StyledOptionMenuItem>,
        ];

        if (withDivider && index < processedOptions.length - 1) {
          items.push(<StyledDivider key={`divider-${label}`} />);
        }

        return items;
      })}
    </StyledMenu>
  );
};

export default ReusableMenu;
