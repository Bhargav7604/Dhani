import styled from "styled-components";
import {
  ColumnFlexDivProps,
  ColumnItemsProps,
  CornerItemsDivProps,
  DynamicWrapperProps,
  FlexRowProps,
  NoSearchtextProps,
  NoStrategyProps,
  PageHeadingProps,
  StyledButtonProps,
  StyledDataBigTextProps,
  StyledDiySelectProps,
  StyledSecondaryHeadlineTextProps,
} from "./GlobalStylesUtils";
import { Button, Popover } from "@mui/material";
import { StyledTertiaryProps } from "../../../../user/src/components/ui/GlobalStylesUtils";
export const PageHeading = styled.h2<PageHeadingProps>`
  display: flex;
  align-items: start;
  width: ${(props) => props.width || ""};
  justify-content: space-between;
  width: 100%;
  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    flex-direction: column;
    gap: 18px;
  }
`;
export const StyledSecondaryHeadlineText = styled.p<StyledSecondaryHeadlineTextProps>`
  font-size: 18px;
  font-weight: ${(props) => props.theme.app.weights.lukeBold};
  max-width: 180px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  $color: ${(props) =>
    props.color
      ? props.theme.app.colors.text.primary
      : props.theme.app.colors.text.secondheader};
  font-weight: ${(props) => props.theme.app.weights.lukeBold};
  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    max-width: 120px;
    font-size: 1rem;
  }
  @media (min-width: ${(props) =>
      props.theme.app.resolutions.mobileMax}) and (max-width: ${(props) =>
      props.theme.app.resolutions.desktopMidPointMax}) {
    max-width: 240px;
  }
`;
export const FlexProfileDiv = styled.div<{ $flexDirection?:boolean}>`
  margin: 6px 0px;
  display: flex;
  flex-direction: ${({ $flexDirection }) => ($flexDirection ? "column" : "row")};
  gap: 16px;
  justify-content: center;
  align-items: flex-start;
  width: 100%;

  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    flex-direction: column;
  }
`;
export const ProfileDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 18px;
  width: 40%;
  background-color: white;
  border-radius: 6px;
  min-width: 250px;
  /* border: 1px solid red; */
  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    width: 100%;
  }
`;
export const StyledSubTitle = styled.p`
  font-size: 18px;
  font-weight: 600;
`;
export const AdminStyledForm = styled.form`
  font-family: Plus Jakarta Sans;
  display: flex;
  flex-direction: column;
  width: 100%; 
  }
`;

export const PageHeadingSpan = styled("span")`
  font-size: 16px;
  font-weight: 500;
  margin-left: 4px;
  margin-top: 5px;
`;
export const AdminInputTextHeader = styled.p`
  font-size: 13px;
  font-weight: 500;
  color: black;
  margin-top: 10px;
  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    font-size: 14px;
  }
`;
export const AdminFormError = styled.p<{ adminselect: boolean }>`
  color: red;
  font-size: 11px;
  position: absolute;
  bottom: ${(props) => (props.adminselect ? "-14px" : "-10px")};
  left: 0;
`;
export const SelectContainer = styled.div`
  border: 2px solid #898384;
  display: flex;
  padding: 0 !important;
  align-items: center;
  border-radius: 6px;
  max-height: 40px !important;
`;
export const UnitSelect = styled.select`
  font-size: 16px;
  min-width: 70px;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
  border-radius: none !important;
  height: 100%;
  border: none;
  outline: none;
  background-color: ${(props) => props.theme.app.colors.border.main};
`;
export const styledOption = styled.option`
  background-color: none;
`;
export const ValueText = styled.input`
  margin: none;
  border: none;
  outline: none;
  overflow: hidden;
`;
export const AdminInput = styled.input<{ padding?: string }>`
  font-family: Plus Jakarta Sans;
  color: ${(props) => props.theme.app.colors.text.secondary};
  border: 1px solid ${(props) => props.theme.app.colors.border.main};
  padding: ${(props) => props.padding || "8px 8px"}; /* Add this line */
  border-radius: 4px;
  width: 100%;
  background-color: ${(props) => props.theme.app.colors.bright};
  padding: 10px !important;
  margin-bottom: 4px;
  background-color: ${(props) =>
    props.disabled ? props.theme.app.colors.backgroundimgcolor : ""};
  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.app.colors.border.primary};
    box-shadow: 0 0 0 2px rgba(25, 118, 210, 0.2);
  }
  &::placeholder {
    font-size: 13px;
    font-weight: 500;
    color: ${(props) => props.theme.app.colors.text.secondary};
  }
  position: relative;
`;

export const TableColumnButton = styled.button<{ $background?: string }>`
  text-align: center !important;
  font-family: Plus Jakarta Sans;
  padding: 6px 12px;
  min-width: 80px;
  max-width: 120px;
  border: none;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  background-color: ${(props) => props.$background};
  margin: 0px 4px;
`;
export const ColumnItemsDivision = styled.div<ColumnItemsProps>`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.$justifycontent || "center"};
  align-items: ${(props) => props.$aligncontent || "center"};
  gap: 4px;
  /* overflow: auto; */
  padding: ${(props) => props.$padding || "0px"};
  border: ${(props) =>
    props.$border ? `1px solid ${props.theme.app.colors.border.main}` : ""};
  background-color: ${(props) =>
    props.$backgroundcolor || props.theme.app.colors.mainWebBackground};
  width: ${(props) => props.$width || ""};
  border-radius: ${(props) =>
    props.$borderradius ? props.theme.app.measures.borderRadius : ""};
  @media (min-width: ${(props) =>
      props.theme.app.resolutions.tabMin}) and (max-width: ${(props) =>
      props.theme.app.resolutions.tabMax}) {
    width: 100%;
    padding: 10px 6px;
  }
  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    width: 100%;
    padding: ${(props) => (props.$ismobile ? "2px" : "6px 16px")};
  }
  @media (min-width: ${(props) =>
      props.theme.app.resolutions.desktopMin}) and (max-width: ${(props) =>
      props.theme.app.resolutions.desktopMidPointMax}) {
    width: 100%;
  }
`;
export const StyledTertiaryText = styled.p<StyledTertiaryProps>`
  font-size: ${(props) => (props.$firstchild ? props.$firstchild : "14px")};
  position: ${(props) => (props.$absolute ? props.$absolute : "")};
  bottom: 0px;
  right: 0px;
  color: ${(props) =>
    props.$colordark
      ? props.theme.app.colors.text.primary
      : props.$colorblue
      ? props.theme.app.colors.text.secondary
      : props.theme.app.colors.text.tertiaryheader};
  font-weight: ${(props) => props.theme.app.weights.lukeBold};

  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    color: ${(props) =>
      props.$firstchild
        ? props.theme.app.colors.text.secondary
        : ""} !important;
    font-size: 0.8rem;
  }
`;

export const TodayOrderCell = styled.div<{ status: string }>`
  background-color: ${({ status }) =>
    status === "Completed"
      ? "#E6F9ED"
      : status === "Pending"
      ? "#FFF6E5"
      : status === "Executed"
      ? "#FDE8E8"
      : "transparent"};
  color: ${({ status }) =>
    status === "Completed"
      ? "#238636"
      : status === "Pending"
      ? "#B46900"
      : status === "Executed"
      ? "#D32F2F"
      : "#000"};
  padding: 8px 8px;
  border-radius: 4px;
  text-align: center;
  letter-spacing: 0.7px;
  min-width: 100px;
  font-weight: 500;
`;
export const HeadingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px;
  background-color: white;
  width: 100%;
  transition: width 0.8s ease, background-color 0.8s ease;
`;
export const SquareOffButton = styled.button`
  background-color: ${({ theme }) => theme.app.colors?.primary};
  color: white;
  padding: 8px 16px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-family: ${({ theme }) => theme.app.typography.fontFamily.primary};
  font-weight: ${({ theme }) => theme?.app.weights?.medium};
  font-size: 14px;

  &:hover {
    background-color: ${({ theme }) => theme.app.colors?.primary};
  }
`;
export const CornerItemsDiv = styled.div<CornerItemsDivProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: ${(props) => props.$width || "100%"};
  gap: 8px;
  background-color: white;
  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    width: 100%;
  }
`;
export const StyledButton = styled(Button)<StyledButtonProps>`
  &.MuiButton-contained {
    background-color: ${(props) =>
      props.theme.app.colors.buttons.primary} !important;
    color: white;
    width: ${(props) => props.$width || ""};
    font-size: 14px;
    gap: 8px !important;
    padding: 8px 0px !important;

    @media (min-width: ${(props) =>
        props.theme.app.resolutions.tabMin}) and (max-width: ${(props) =>
        props.theme.app.resolutions.desktopMidPointMax}) {
      width: 30% !important;
    }

    @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
      width: ${(props) => props.$mobilewidth || "100%"};
      font-size: 12px;
      padding: 8px;
    }
  }
`;
export const ColumnFlexDiv = styled.div<ColumnFlexDivProps>`
  position: relative;
  width: ${(props) => props.width || "100%"};
  display: flex;
  flex-direction: column;
  gap: 2px;
  justify-content: start;
  align-items: ${(props) => (props.$flexstart ? "start" : "center")};
  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    width: 100%;
    align-items: start;
  }

  @media (min-width: ${(props) =>
      props.theme.app.resolutions.tabMin}) and (max-width: ${(props) =>
      props.theme.app.resolutions.tabMax}) {
    width: ${(props) => props.tabwidth || ""};
    align-items: start;
  }
`;
export const DiyTextHeader = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: ${(props) => props.theme.app.colors.dhanigraythird};

  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    font-size: 10px;
  }
`;
export const MandatoryMark = styled.span`
  color: red;
  font-size: 14px;
  font-weight: 600;
`;
export const StyledDiySelect = styled.select<StyledDiySelectProps>`
  border: 1px solid ${(props) => props.theme.app.colors.border.secondary};
  border-radius: ${(props) => props.theme.app.measures.borderRadius};
  padding: ${(props) => (props.$deployedselect ? "6px" : "9px 8px")};
  display: flex;
  gap: 12px;
  font-family: "Plus Jakarta Sans", sans-serif;

  align-items: center;
  justify-content: center;
  width: 100%;
  min-width: 80px;
  background-color: ${(props) =>
    props.$deployedselect
      ? props.theme.app.colors.headerbackground
      : props.disabled
      ? props.theme.app.colors.backgroundimgcolor
      : ""};
  outline: none;
  transition: border 0.2s ease-in-out;
  color: ${(props) => props.theme.app.colors.text.tertiary};

  &:hover {
    border: 1px solid ${(props) => props.theme.app.colors.border.main};
  }

  &:active {
    border: 1px solid ${(props) => props.theme.app.colors.border.main};
    color: black;
  }

  &:focus {
    border: 1px solid ${(props) => props.theme.app.colors.border.main};
    color: black;
  }

  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;

  /* Custom arrow styles */
  background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDE2IDgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEuNSAybDUgNSA1LTUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSJub25lIi8+PC9zdmc+"); /* Replace with your custom SVG */
  background-repeat: no-repeat;
  background-position: calc(100% - 12px) center;
  background-size: 14px;
  option {
    max-height: 200px;
  }
  @media not all and (min-resolution: 0.001dpcm) {
    @supports (-webkit-appearance: none) {
      -webkit-appearance: none !important;
      appearance: none !important;
    }
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
    background-color: ${(props) => props.theme.app.colors.buttons.activetoggle};
  }

  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    width: 100%;
    max-width: 380px;
  }
`;
export const StyledDataBigText = styled.p<StyledDataBigTextProps>`
  font-weight: ${(props) =>
    props.firstChild
      ? props.theme.app.weights.semiBold
      : props.theme.app.weights.lukeBold};

  font-size: ${(props) =>
    props.$fontsize ? props.$fontsize : props.$istable ? "14px" : "16px"};
  text-overflow: ellipsis;
  white-space: ${(props) => (props.$errmsg ? "normal" : "nowrap")};
  max-width: ${(props) => (props.$errmsg ? "fit-content" : "180px")};
  overflow: hidden;
  display: block;
  color: ${(props) =>
    props.$color
      ? props.theme.app.colors.algomenubackground
      : (props) =>
          props.$errmsg
            ? props.theme.app.colors.text.secondaryexit
            : props.theme.app.colors.text.dark};
  /* font-weight: ${(props) =>
    props.$bold
      ? props.theme.app.weights.lukeBold
      : props.theme.app.weights.lukeBold}; */

  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    font-size: 0.8rem;
    font-weight: ${(props) => props.theme.app.weights.semiBold};
    paddig: 4px;
    max-width: ${(props) => (props.$errmsg ? "fit-content" : "150px")};
  }
`;
export const FlexRowDiv = styled.div<FlexRowProps>`
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => props.$justifycontent || "space-evenly"};
  align-items: ${(props) => props.$alignitems || "center"};
  width: ${(props) => props.$width || "100%"};
  max-width: ${(props) => props.$maxwidth || ""};
  height: 100%;
  background-color: ${(props) => props.$background || ""};
  border-radius: ${(props) => props.theme.app.measures.borderRadius};
  gap: ${(props) => props.$gap || ""};

  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    flex-direction: ${(props) => (props.$rowdirection ? "row" : "column")};
    gap: 10px;
    width: 100%;
    box-shadow: ${(props) =>
      props.$shadow ? "4px 4px 4px 4px rgba(0,0,0,0.2);" : ""};
  }

  @media (min-width: ${(props) =>
      props.theme.app.resolutions.tabMin}) and (max-width: ${(props) =>
      props.theme.app.resolutions.tabMax}) {
    width: 100%;
    flex-direction: ${(props) => (props.$diy ? "column" : "row")};
  }

  @media (min-width: ${(props) =>
      props.theme.app.resolutions.desktopMin}) and (max-width: ${(props) =>
      props.theme.app.resolutions.desktopMidPointMax}) {
    width: 100%;
  }
`;
export const MainStyledButton = styled(Button)<StyledButtonProps>`
  &.MuiButton-contained {
    background: ${(props) =>
      props.disabled
        ? props.theme.app.colors.buttons.exit
        : props.theme.app.colors.buttons.maingradient} !important;
    color: white;
    width: ${(props) => props.$width || ""};
    font-size: 12px !important;
    padding: ${(props) => props.$padding || "4px 8px"} !important;
    white-space: nowrap;
    box-shadow: none !important;
    display: flex;
    justify-content: space-around;
    gap: 8px;
    border-radius: ${(props) =>
      props.theme.app.measures.borderRadius} !important;

    &:disabled {
      pointer-events: none;
      color: white !important;
      cursor: not-allowed;
    }

    @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
      width: ${(props) => props.$mobilewidth || ""};
      font-size: 10px !important;
      padding: 7px !important;
      justify-content: center;
      align-items: center;
      gap: 8px;
    }
    @media (min-width: ${(props) =>
        props.theme.app.resolutions.tabMin}) and (max-width: ${(props) =>
        props.theme.app.resolutions.tabMax}) {
      min-width: 200px;
    }
  }
`;

export const DynamicWrapperDiv = styled.div<DynamicWrapperProps>`
  display: flex;
  flex-direction: column;
  gap: ${(props) => (props.$gap ? props.$gap : "")};
  padding: ${(props) => (props.$nopadding ? "" : "8px 42px")};
  justify-content: center;
  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    gap: 1vh;
    padding: 6px;
  }

  @media (min-width: ${(props) =>
      props.theme.app.resolutions.tabMin}) and (max-width: ${(props) =>
      props.theme.app.resolutions.tabMax}) {
    gap: 1vh;
    padding: 8px;
  }
`;
export const NoSearchText = styled.p<NoSearchtextProps>`
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  color: ${(props) => props.theme.app.colors.text.secondary};
  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    font-size: 16px;
    color: ${(props) => (props.firstChild ? "#1667d9" : "")};
  }
`;
export const NoStrategyDiv = styled.div<NoStrategyProps>`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 36px;
  justify-content: center;
  align-items: center;
  height: ${(props) => (props.$detailView ? "15vh" : "40vh")};
  width: 100%;
  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    height: 100%;
    padding: 12px;
    text-align: center;
  }
`;
export const StyledPopover = styled(Popover)`
  /* .MuiPaper-root {
    background-color: white;
    box-shadow: 0px 4px 12px #ecf5ff;
    border: 1px solid ${(props) => props.theme.app.colors.border.secondary};
    margin-top: 3px;
    width: 220px;
    max-height: 50px;
    overflow-y: auto; /* Ensures scrolling works 

    scrollbar-width: none; 
    -ms-overflow-style: none; 
  } */

  /* Hide scrollbar for Webkit browsers (Chrome, Safari, Edge) */
  /* .MuiPaper-root::-webkit-scrollbar {
    display: none;
  } */

  .MuiPaper-root {
    background-color: white;
    box-shadow: 0px 4px 12px #ecf5ff;
    border: 1px solid ${(props) => props.theme.app.colors.border.secondary};
    margin-top: 3px;
    width: 220px;
    max-height: 50px;
    overflow-y: auto; /* Ensure scrolling works */

    /* Firefox Scrollbar */
    scrollbar-width: thin;
    scrollbar-color: #b0b0b0 transparent; /* Scrollbar thumb color and track color */

    @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
      width: 300px;
    }
  }

  /* Webkit browsers (Chrome, Safari, Edge) */
  .MuiPaper-root::-webkit-scrollbar {
    width: 1px !important; /* Thin scrollbar */
  }

  .MuiPaper-root::-webkit-scrollbar-thumb {
    background: #b0b0b0; /* Color of the scrollbar */
    border-radius: 4px; /* Rounded edges */
  }

  .MuiPaper-root::-webkit-scrollbar-track {
    background: transparent; /* Transparent track */
  }
`;

export const AdminTextArea = styled.textarea`
  width: 100%;
  padding: 10px 16px;
  font-family: "Plus Jakarta Sans", sans-serif;
  border-radius: 6px;
  resize: vertical;
  min-height: 100px;
  line-height: 1.5;
  border: 1px solid ${(props) => props.theme.app.colors.border.main};
  color: ${(props) => props.theme.app.colors.text.secondary};
  background-color: ${(props) => props.theme.app.colors.bright};

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.app.colors.border.primary};
    box-shadow: 0 0 0 2px rgba(25, 118, 210, 0.2);
  }

  &:disabled {
    background-color: #f5f5f5;
    color: #999;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 6px;
`;
