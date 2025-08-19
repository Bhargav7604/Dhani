import React, { useState, useEffect, useRef } from "react";
import Sidebar from "./sidebar/Sidebar";
import { Outlet, useNavigate } from "react-router-dom";
import MenuImage from "../../assets/svg/menu.svg";
import CloseImage from "../../assets/svg/cancel-svgrepo-com.svg";
import ProfileImage from "../../assets/svg/profile-circle-svgrepo-com.svg";
import { sidebarItems } from "./sidebar/SidebarData";
import {
  LayoutContainer,
  ContentContainer,
  NavbarContainer,
  LogoutButtons,
  LogoutButtonWraper,
} from "./LayoutStyles";
import MenuOverlay from "./MenuOverLay";
import ReusableModal from "../sharedComponents/CustomDialog/CustomDialog";
import { useDispatch, useSelector } from "react-redux";
import { openModel, closeModel } from "./sidebar/state-slice/LogOutSlice";
import { RootState } from "../../store/Store";
import logoutIcon from "../../../public/svg/logout.svg";
import Dashboard from "../dashboard/Dashboard";

const Layout: React.FC = () => {
  const menuRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const [isClosing, setIsClosing] = useState(false);
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state: RootState) => state.logOut.isOpen);

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleOutsideClick = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeWithAnimation();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isMenuOpen]);

  const closeWithAnimation = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      closeMenu();
    }, 500); // Match animation duration
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const activeButtonHandler = () => {
    closeMenu();
  };
  const handleLogout = () => {
    localStorage.removeItem("token"); // Clear auth token
    dispatch(closeModel()); // Close modal
    navigate("/login"); // Redirect to login page
  };
  const handleSubmenuToggle = (path: string) => {
    setOpenSubmenu((prev) => (prev === path ? path : path));
  };

  return (
    <>
      <NavbarContainer>
        <div>
          {isMenuOpen ? (
            <img
              src={CloseImage}
              onClick={closeWithAnimation}
              style={{ cursor: "pointer" }}
            />
          ) : (
            <img
              src={MenuImage}
              onClick={toggleMenu}
              style={{ cursor: "pointer" }}
            />
          )}
        </div>
        <LogoutButtonWraper>
          <LogoutButtons onClick={() => dispatch(openModel())}>
            <img src={logoutIcon} alt="logout Icon" />{" "}
          </LogoutButtons>
          <div onClick={() => navigate("/profile")}>
            <img src={ProfileImage} style={{ cursor: "pointer" }} />
          </div>
        </LogoutButtonWraper>

        {isMenuOpen && (
          <MenuOverlay
            isOpen={isMenuOpen}
            data={sidebarItems}
            isClosing={isClosing}
            onActiveButtonClick={activeButtonHandler}
            handleSubmenuToggle={handleSubmenuToggle}
            openSubmenu={openSubmenu}
            menuRef={menuRef}
          />
        )}
      </NavbarContainer>
      <LayoutContainer>
        <Sidebar
          sidebarItems={sidebarItems}
          openSubmenu={openSubmenu}
          handleSubmenuToggle={handleSubmenuToggle}
        />

        <ContentContainer>
          <Dashboard />
          <Outlet />
        </ContentContainer>
      </LayoutContainer>
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

export default Layout;
