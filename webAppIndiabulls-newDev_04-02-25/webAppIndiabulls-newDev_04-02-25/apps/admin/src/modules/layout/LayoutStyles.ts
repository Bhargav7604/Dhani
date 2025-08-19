import styled from "styled-components";
import {
  FlexRowProps,
  MenuCardProps,
} from "../../components/ui/GlobalStylesUtils";
import { NavLink } from "react-router-dom";

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
  overflow: hidden;
  background-color: ${(props) => props.theme.app.colors.bright};
`;

export const ContentContainer = styled.main`
font-family: Plus Jakarta Sans;
  flex-grow: 1; 
  padding: 4px 16px;
  overflow-x: hidden;
  margin-left: 215px;
  background-color:#fff;
  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    margin-left: 0px;
    padding: 4px 4px;
  }
`;

// menu bar

export const NavbarContainer = styled.div`
  display: none;
  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
  }
`;

export const MenuPopUp = styled.div<{ $isClosing: boolean; $isOpen: boolean }>`
  position: fixed;
  margin-top: 48px;
  top: 0;
  left: 0;
  width: 250px;
  min-height: 100vh;
  background-color: #eaeaea;
  z-index: 50;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 2000;
  overflow-y: auto;
  padding: 12px 0px;
  box-sizing: border-box;
  display: ${({ $isOpen }: { $isOpen: boolean }) =>
    $isOpen ? "block" : "none"};
  opacity: ${({ $isOpen }: { $isOpen: boolean }) => ($isOpen ? 1 : 0)};
  animation: ${(props) =>
    props.$isClosing ? "slideOut 0.5s forwards" : "slideIn 0.5s forwards"};

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

export const MenuMobileDisplay = styled.div<FlexRowProps>`
  padding: 20px 0px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 6px;
  border-radius: 6px;
  // align-items: center;
  height: 100%;
`;
export const MenuCardDisplay = styled(NavLink)<MenuCardProps>`
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  padding: 12px;
  gap: 20px;
  width: 100%;
  text-decoration: none;
  font-weight: ${(props) => (props.$active ? "bold" : "normal")};
  color: ${(props) =>
    props.$active ? props.theme.app.colors.text.active : "#000"};

  transition: background-color 0.3s ease, border ease;

  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    width: 100%;
    flex-direction: column;
    white-space: nowrap;
    // min-height: 35px;
    gap: 10px;
    align-items: start;
    justify-content: space-evenly;
    padding: 6px;
    /* height: 20px; */
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

export const ImageWraper = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;
export const StyledImgLogo = styled.img`
  max-width: 117px;
`;

export const FlexRowSpaceEven = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-bottom: 1px solid gray;
  padding-bottom: 16px;
`;

export const LogoutButtons = styled.div`
  padding: 1px;
  border-radius: 4px;
  color: red;
  cursor: pointer;
`;

export const LogoutButtonWraper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;
export const Nav = styled.nav`

  margin-bottom: 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px ;
  background: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  overflow-x: auto;
`;

export const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background: #f7f9fc;
  padding: 8px 12px;
  border-radius: 8px;

  input {
    border: none;
    background: transparent;
    outline: none;
    font-size: 14px;
    width: 150px;
  }
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const IconWrapper = styled.div`
  font-size: 18px;
  cursor: pointer;
  color: #10356a;
`;

export const NotificationIcon = styled.div`
  position: relative;
  font-size: 20px;
  cursor: pointer;
  color: #10356a;
`;

export const Badge = styled.span`
  position: absolute;
  top: -5px;
  right: -5px;
  background: #ff4d4f;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  padding: 2px 6px;
  border-radius: 50%;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
`;

export const Username = styled.span`
  font-size: 14px;
  color: #10356a;
  font-weight: 600;
`;
