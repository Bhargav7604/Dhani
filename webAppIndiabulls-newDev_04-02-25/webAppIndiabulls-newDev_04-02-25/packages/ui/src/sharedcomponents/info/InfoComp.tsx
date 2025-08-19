import { useState } from "react";
import {
  InfoWrapper,
  PopoverContent,
} from "../../../../../apps/user/src/modules/nocodestrategy/NoCodeStrategyStyles.js";
import InfoIcon from "../../assets/images/info.png";
import { StyledPopover } from "../../sharedstyles/SharedStyledComps.js";
// import { InfoProps } from "../../modules/nocodestrategy/NoCodeStrategyUtils";
import { InfoProps } from "../../../../../apps/user/src/modules/nocodestrategy/NoCodeStrategyUtils.js";

const InfoComp = (props: InfoProps) => {
  const { info } = props;

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "info-popover" : undefined;

  return (
    <div>
      <InfoWrapper onClick={handleClick} src={InfoIcon} alt="Info" />

      <StyledPopover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "center",
          horizontal: "right",
        }}
      >
        <PopoverContent>{info}</PopoverContent>
      </StyledPopover>
    </div>
  );
};

export default InfoComp;

// HOVER EFFECT ONLY WORKS ON THE WEB
// import { useState } from "react";
// import {
//   InfoText,
//   InfoWrapper,
//   PopoverContent,
// } from "../../modules/nocodestrategy/NoCodeStrategyStyles";
// import { Popover } from "@mui/material";

// const InfoComp = () => {
//   const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

//   const handlePopoverOpen = (event: React.MouseEvent<HTMLDivElement>) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handlePopoverClose = () => {
//     setAnchorEl(null);
//   };

//   const open = Boolean(anchorEl);
//   const id = open ? "info-popover" : undefined;

//   return (
//     <div>
//       <InfoWrapper
//         onMouseEnter={handlePopoverOpen}
//         onMouseLeave={handlePopoverClose}
//       >
//         <InfoText>i</InfoText>
//       </InfoWrapper>

//       <Popover
//         id={id}
//         open={open}
//         anchorEl={anchorEl}
//         onClose={handlePopoverClose}
//         anchorOrigin={{
//           vertical: "bottom",
//           horizontal: "left",
//         }}
//         transformOrigin={{
//           vertical: "bottom",
//           horizontal: "right",
//         }}
//         sx={{ pointerEvents: "none" }} // Ensures popover disappears on hover out
//         disableRestoreFocus
//       >
//         <PopoverContent>This is the info text.</PopoverContent>
//       </Popover>
//     </div>
//   );
// };

// export default InfoComp;
