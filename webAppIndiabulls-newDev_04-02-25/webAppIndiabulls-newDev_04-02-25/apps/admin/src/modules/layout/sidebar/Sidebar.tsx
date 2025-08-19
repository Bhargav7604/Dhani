import { useLocation, useNavigate } from "react-router-dom";

import {
  SidebarContainer,
  NavItem,
  IconWrapper,
  BottomIconsContainer,
  LogoutButtonsDiv,
  SubmenuContainer,
  SubmenuItem,
  ArrowIcon,
  LogoWraper,
} from "./SidebarStyles";

import logoutIcon from "../../../../public/svg/logout-navbar-svg.svg";
import IndiaBulls from "../../../../public/image/indiabulls-logo.png";

import ReusableModal from "../../sharedComponents/CustomDialog/CustomDialog";
import { openModel, closeModel } from "./state-slice/LogOutSlice";
import {
  RootState,
  useAppDispatch,
  useAppSelector,
} from "../../../store/Store";
import { SidebarProps } from "../LayoutUtils";

const Sidebar: React.FC<SidebarProps> = ({
  sidebarItems,
  openSubmenu,
  handleSubmenuToggle,
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const isModalOpen = useAppSelector((state: RootState) => state.logOut.isOpen);

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(closeModel());
    navigate("/login");
  };

  return (
    <>
      <SidebarContainer>
        {/* Top section: Logo and Navigation Items */}
        <BottomIconsContainer>
          <LogoWraper onClick={() => navigate("/strategies/manage")}>
            <img
              src={IndiaBulls}
              alt="IndiaBulls Logo"
              style={{ width: "120px" }}
            />
          </LogoWraper>

          {sidebarItems.map((item, index) => {
            const isActive = location.pathname.startsWith(item.path);
            const hasSubmenu = (item.subItems?.length ?? 0) > 0;
            const isSubmenuOpen = openSubmenu === item.path;

            return (
              <div key={index}>
                <NavItem
                  $isActive={isActive}
                  to={item.path}
                  onClick={() => {
                    if (hasSubmenu) {
                      const isOpening = openSubmenu !== item.path;
                      handleSubmenuToggle(item.path);

                      if (
                        isOpening &&
                        item.subItems &&
                        item.subItems.length > 0
                      ) {
                        // Delay navigation slightly to allow submenu to appear first
                        setTimeout(() => {
                          navigate(item.subItems![0].path);
                        }, 0);
                      }
                    } else {
                      navigate(item.path);
                    }
                  }}
                >
                  <IconWrapper $isActive={isActive}>{item.icon}</IconWrapper>
                  <>
                    {item.label}
                    {hasSubmenu && (
                      <ArrowIcon >{isSubmenuOpen ? "▼" : "▶"}</ArrowIcon>
                    )}
                  </>
                </NavItem>

                {hasSubmenu && isSubmenuOpen && (
                  <SubmenuContainer>
                    {item.subItems?.map((subItem, subIndex) => (
                      <SubmenuItem
                        key={subIndex}
                        to={subItem.path}
                        className={
                          location.pathname === subItem.path ? "active" : ""
                        }
                      >
                        {subItem.label}
                      </SubmenuItem>
                    ))}
                  </SubmenuContainer>
                )}
              </div>
            );
          })}
        </BottomIconsContainer>

        {/* Bottom section: Logout Button */}
        <BottomIconsContainer>
          <LogoutButtonsDiv onClick={() => dispatch(openModel())}>
            <img src={logoutIcon} alt="Logout Icon" /> Logout
          </LogoutButtonsDiv>
        </BottomIconsContainer>
      </SidebarContainer>

      {/* Logout Confirmation Modal */}
      <ReusableModal
        open={isModalOpen}
        handleClose={() => dispatch(closeModel())}
        handleConfirm={handleLogout}
        title="Logout"
        description="Are you sure you want to logout?"
        confirmButtonText="Confirm"
        cancelButtonText="Cancel"
        confirmButtonColor="red"
        cancelButtonColor="gray"
        showConfirmButton={true}
      />
    </>
  );
};

export default Sidebar;
