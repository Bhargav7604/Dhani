import { styled } from "styled-components";
import { NavLink } from "react-router-dom";

export const SidebarContainer = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  width: 225px;
  padding: 10px 8px;
  flex-shrink: 0;
  //background-color: ${({ theme }) => theme.app.colors?.sidebarBackground};
  background-color: #eaeaea;
  transition: width 0.8s ease, background-color 0.8s ease;
  white-space: nowrap;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  min-height: 100vh;
  max-height: 100vh;
  z-index: 10;
  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    display: none;
    width: 0px;
  }
`;

export const IconWrapper = styled.div<{ $isActive?: boolean }>`
  min-width: 35px;
  transition: width 0.8s ease, background-color 0.8s ease;
  min-height: 35px;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 4px;
  ${(props) =>
    props.$isActive &&
    `
       background-color: ${props.$isActive ? "#4A89C6" : ""};
      color: ${
        props.$isActive
          ? props.theme.app.colors?.bright
          : props.theme.app.colors?.text.secondary
      };
  `}
`;

export const BottomIconsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const LogoutButtonsDiv = styled.div`
  letter-spacing: 1px;
  font-family: Plus Jakarta Sans;
  font-size: 12px;
  text-transform: uppercase;
  display: flex;
  gap: 12px;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  border: 1px solid ${(props) => props.theme.app.colors.buttons.secondaryexit};
  padding: 4px;
  border-radius: 4px;
  max-width: 120px;
  background-color: ${(props) => props.theme.app.colors.buttons.secondaryexit};
  color: white;
  cursor: pointer;
`;

export const NavItem = styled(NavLink)<{ $isActive: boolean }>`
  font-family: Plus Jakarta Sans;
  font-size: 14px;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 2px 2px;
  cursor: pointer;
  transition: color 0.3s ease-in-out;
  color: ${(props) =>
    props.$isActive
      ? props.theme.app.colors.text.active
      : props.theme.app.colors.text.primary};
  font-weight: ${(props) =>
    props.$isActive
      ? props.theme.app.weights.semiBold
      : props.theme.app.weights.regular};

  &:hover {
    color: ${(props) => props.theme.app.colors.text.active};
  }
`;

export const SubmenuContainer = styled.div`
  display: block;
  padding-left: 30px;
  transition: all 0.3s ease-in-out;
`;

export const SubmenuItem = styled(NavLink)`
  font-family: Plus Jakarta Sans;
  display: block;
  text-decoration: none;
  color: ${(props) => props.theme.app.colors.text.primary};
  padding: 3px 0;
  font-size: 12px;
  margin-left: 24px;

  &:hover {
    color: ${(props) => props.theme.app.colors.text.active};
  }
  &.active {
    color: ${(props) => props.theme.app.colors.text.active};
    font-weight: ${(props) => props.theme.app.weights.semiBold};
  }
`;

export const ArrowIcon = styled.span`
  position: absolute;
  right: 30px;
  font-size: 12px;
`;

export const LogoWraper = styled.div`
  margin-bottom: 60px;
  cursor: pointer;
`;
