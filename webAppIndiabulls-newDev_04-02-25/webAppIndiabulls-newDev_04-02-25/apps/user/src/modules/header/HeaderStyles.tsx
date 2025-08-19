import { Button } from "@mui/material";
import { styled } from "styled-components";
import { NavLink } from "react-router-dom";
import {
  CancelButtonProps,
  HeadingExitProps,
  StyledDivProps,
} from "./HeaderUtils";
import {
  FlexRowProps,
  MenuCardProps,
} from "../../components/ui/GlobalStylesUtils";

export const MainText = styled.p`
  font-size: 24px;
  font-weight: 700;

  @media (min-width: ${(props) =>
      props.theme.app.resolutions.tabMin}) and (max-width: ${(props) =>
      props.theme.app.resolutions.tabMax}) {
    font-size: 20px;
  }

  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    font-size: 18px;
  }
`;

export const SubText = styled.p`
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  width: 100%;
  color: ${(props) => props.theme.app.colors.text.secondaryexit};

  @media (min-width: ${(props) =>
      props.theme.app.resolutions.tabMin}) and (max-width: ${(props) =>
      props.theme.app.resolutions.tabMax}) {
    font-size: 14px;
  }

  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    font-size: 12px;
  }
`;

export const ExitButton = styled(Button)`
  &.MuiButton-contained {
    width: 30%;
    background-color: ${(props) =>
      props.theme.app.colors.buttons.secondaryexit};
    border-radius: 8px !important;
    padding: 8px 24px;
    border: none;

    @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
      width: 35%;
    }
  }

  &.MuiButton-outlined {
    border: 1px solid #59bc08 !important;
    color: #59bc08;
    border-radius: ${(props) =>
      props.theme.app.measures.borderRadius} !important;
  }
`;

export const CancelButton = styled(Button)<CancelButtonProps>`
  &.MuiButton-contained {
    color: ${(props) => props.theme.app.colors.text.contrast};
    width: ${(props) => props.width || "30%"};
    border-radius: 8px;
    padding: 4px 24px;
    text-align: center !important;
    background-color: ${(props) =>
      props.theme.app.colors.buttons.secondaryexit};
    &:hover {
      background-color: ${(props) =>
        props.theme.app.colors.buttons.secondaryexit + "96"};
    }
  }
  &.MuiButton-outlined {
    color: ${(props) => props.theme.app.colors.text.secondaryexit};
    width: ${(props) => props.width || "30%"};
    border-radius: 8px;
    padding: ${(props) => props.$padding || "4px 24px"};

    border: 1px solid ${(props) => props.theme.app.colors.text.secondaryexit};

    &:hover {
      background-color: ${(props) =>
        props.theme.app.colors.buttons.secondaryexit + "10"};
    }
  }

  @media (min-width: ${(props) =>
      props.theme.app.resolutions.tabMin}) and (max-width: ${(props) =>
      props.theme.app.resolutions.desktopMidPointMax}) {
    width: 30% !important;
  }

  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    width: ${(props) => props.$mobilewidth || "100%"} !important;
    font-size: 12px !important;
    padding: 8px;
    text-align: center !important;
  }
`;
export const ConfirmButton = styled(Button)<CancelButtonProps>`
  &.MuiButton-contained {
    color: ${(props) => props.theme.app.colors.text.secondaryexit};
    width: ${(props) => props.width || "30%"};
    border-radius: 8px;
    padding: 8px 24px;
    background-color: ${(props) =>
      props.theme.app.colors.buttons.primary} !important;
  }
  &.MuiButton-outlined {
    color: ${(props) => props.theme.app.colors.buttons.primary};
    width: ${(props) => props.width || "30%"};
    border-radius: 8px;
    padding: 8px 24px;

    border: 1px solid ${(props) => props.theme.app.colors.buttons.primary};

    &:hover {
      background-color: ${(props) =>
        props.theme.app.colors.buttons.primary + "10"};
    }
  }
`;

export const MenuMobileDivRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  padding: 0px 0px;
  position: relative;
`;

export const ExitModalWrapper = styled.div`
  position: fixed;
  background-color: white;
  padding: 12px 24px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  justify-content: center;
  align-items: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 25%;
  border-radius: 16px;

  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    width: 80%;
  }

  @media (min-width: ${(props) =>
      props.theme.app.resolutions.tabMin}) and (max-width: ${(props) =>
      props.theme.app.resolutions.desktopMidPointMax}) {
    width: 40%;
  }
`;

export const ImgDiv = styled.div<StyledDivProps>`
  background-color: ${(props) =>
    props.exit
      ? "rgba(251, 0, 0, 0.19)" // Color for `exit`
      : props.load
      ? "#EAF3FF" // Color for `load`
      : props.theme.app.colors.backgroundimgcolor};

  padding: 12px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const StyledImgLogo = styled.img`
  max-width: 117px;
`;

export const StyledLogoutImg = styled.img`
  width: ${(props) => (props.width ? props.width : "18px")};
`;

export const IconsRowWraper = styled.div`
  display: flex;
  gap: 4px;
  justify-content: center;
  align-items: center;
`;

export const ImageWraperCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  background-color: ${(props) => props.theme.app.colors.buttons.exit};
  border-radius: 50%;
`;

export const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const HeadingExitDiv = styled.div<HeadingExitProps>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    width: 100%;
  }
`;

export const CirlcleProfileWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;

&:hover{
  scale: 1.07;
  box-shadow: 2px 2px 4px rgba(0,0,0,0.2);
  border-radius: 50%;
}
`;
export const MenuGridWrapper = styled.div`
  width: 100%;
`;

export const MenuPopUp = styled.div<{ $isClosing: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  min-height: 100vh;
  background-color: #fff;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000 !important;
  overflow-y: auto;
  padding: 12px;
  box-sizing: border-box;
  animation: ${(props) =>
    props.$isClosing ? "slideOut 0.5s forwards" : "slideIn 0.5s forwards"};
  transform: translateZ(0);

  @media (min-width: ${(props) =>
      props.theme.app.resolutions.tabMin}) and (max-width: ${(props) =>
      props.theme.app.resolutions.tabMax}) {
    width: 300px;
  }

  /* Slide-in animation */
  @keyframes slideIn {
    from {
      left: -300px; /* Start hidden off-screen */
    }
    to {
      left: 0; /* Slide into view */
    }
  }

  @keyframes slideOut {
    from {
      left: 0; /* Start in view */
    }
    to {
      left: -300px; /* Slide out of view */
    }
  }
`;
export const PopUpCancelButton = styled.button`
  position: absolute;
  top: 0px;
  right: 2px;
  background: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;
export const ProfileContainer = styled.div`
  background-color: #3cbd67;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 16px;
`;

export const Profile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
export const MenuMobileDisplay = styled.div<FlexRowProps>`
  padding: 20px 0px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 12px 0px 0px 0px;
  border-radius: 6px;
  align-items: center;
  height: 100%;
`;

export const AvatarWarper = styled.div`
  display: "flex";
  justify-content: "center";
  align-items: "center";
`;

export const ImageWraper = styled.div`
  display: flex;
  align-items: start;
  border: 1px solid red;
  gap: 6px;
`;

export const MenuCardDisplay = styled(NavLink)<MenuCardProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-decoration: none;
  transition: background-color 0.3s ease, border ease;

  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    width: 100%;
    flex-direction: column;
    white-space: nowrap;
    gap: 10px;
    align-items: start;
    justify-content: space-evenly;
  }

  @media (min-width: ${(props) =>
      props.theme.app.resolutions.tabMin}) and (max-width: ${(props) =>
      props.theme.app.resolutions.tabMax}) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
    gap: 12px;
    align-items: start;
  }
`;
export const ProfilePopUp = styled.div<{ isClosing: boolean }>`
  position: absolute;
  top: 0;
  right: 10px;
  max-width: 400px;

  z-index: 1000;
  overflow-y: auto;
  padding: 28px 0px;
  box-sizing: border-box;
  animation: ${(props) =>
    props.isClosing ? "profileOut 0.5s forwards" : "profileIn 0.5s forwards"};
  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    right: 0;
  }
  @media (min-width: ${(props) =>
      props.theme.app.resolutions.tabMin}) and (max-width: ${(props) =>
      props.theme.app.resolutions.tabMax}) {
    width: 300px;
  }

  /* Slide-in animation */
  @keyframes profileIn {
    from {
      top: -400px; /* Start hidden off-screen */
    }
    to {
      top: 0; /* Slide into view */
    }
  }

  @keyframes profileOut {
    from {
      top: 0; /* Start in view */
    }
    to {
      top: -400px; /* Slide out of view */
    }
  }
`;

export const ProfileCardWrapper = styled.div`
  margin: 20px 6px;

  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Arial", sans-serif;
`;

export const DetailList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  list-style: none;
  padding: 0;
  margin: 1px 0;
  width: 100%;
`;

export const DetailItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: 12px;
  padding: 4px 8px;
`;
export const ProfileRowDiv = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-top: 20px;
`;

export const DetailLabel = styled.span`
  color: #333;
  margin: 2px 0px;
  font-size: 16px;
`;

export const DetailValue = styled.span<{
  textAlign?: boolean;
}>`
  border: 1px solid #e1ecfa;
  padding: 12px;
  color: #555;
  border-radius: 6px;
  min-height: 40px;
  text-align: ${(props) => (props.textAlign ? "center" : "")};
`;

export const AbsoluteCancelIcon = styled.div`
  position: absolute;
  top: 8px;
  right: 12px;
`;

export const FlexRowSpaceEven = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid gray;
`;

export const ScrollWrapper = styled.div`
  width: 100%;
  max-height: 42px;
  overflow-x: auto;
  margin: 0 auto;
`;

export const ScrollContent = styled.div`
  width: fit-content;
  white-space: nowrap;
  background-color: ${(props) => props.theme.app.colors.buttons.exit};
  text-align: center;
  margin: 0 auto;
  padding: 10px 8px;
  border-radius: ${(props) => props.theme.app.measures.borderRadius};
`;

export const DeclineText = styled.p`
  color: white;
  font-weight: 600;
  font-size: 16px;
  width: fit-content;
  white-space: nowrap;
  display: inline-block;

  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    display: inline-flex;
    animation: scrollText 20s linear infinite;
  }

  & > span {
    display: inline-block;
    padding-right: 30px; /* spacing between repeated texts */
    /* padding-left: 15px; */
  }

  @keyframes scrollText {
    0% {
      transform: translateX(0%);
    }
    5% {
      transform: translateX(0%); /* Pause for 2s (20% of 10s) */
    }
    100% {
      transform: translateX(-75%);
    }
  }
`;
