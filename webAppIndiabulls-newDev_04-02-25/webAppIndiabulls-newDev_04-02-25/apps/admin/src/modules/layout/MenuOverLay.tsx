import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  MenuPopUp,
  MenuMobileDisplay,
  MenuCardDisplay,
  ImageWraper,
} from "./LayoutStyles";
import {
  ArrowIcon,
  SubmenuContainer,
  SubmenuItem,
} from "./sidebar/SidebarStyles";
import { MenuOverlayProps } from "./LayoutUtils";

const MenuOverlay: React.FC<MenuOverlayProps> = ({
  isOpen,
  data,
  onActiveButtonClick,
  isClosing,
  handleSubmenuToggle,
  openSubmenu,
  menuRef
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  if (!isOpen) return null;

  return (
    <MenuPopUp $isOpen={isOpen} $isClosing={isClosing} ref={menuRef}>
      <MenuMobileDisplay>
        {data.map((item, id) => {
          const isActive = location.pathname.startsWith(item.path);
          const hasSubmenu = (item.subItems?.length ?? 0) > 0;
          const isSubmenuOpen = openSubmenu === item.path;

          return (
            <div key={id}>
              <MenuCardDisplay
                $active={isActive}
                to={item.path}
                onClick={() => {
                  onActiveButtonClick(id);
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
                <ImageWraper>
                  {item.icon}
                  <p>{item.label}</p>
                </ImageWraper>
                <>
                  {hasSubmenu &&
                    (isSubmenuOpen ? (
                      <ArrowIcon>{"▼"}</ArrowIcon>
                    ) : (
                      <ArrowIcon>{"▶"}</ArrowIcon>
                    ))}
                </>
              </MenuCardDisplay>

              {hasSubmenu && isSubmenuOpen && (
                <SubmenuContainer>
                  {item.subItems?.map((subItem, subIndex) => (
                    <SubmenuItem
                      key={subIndex}
                      to={subItem.path}
                      className={
                        location.pathname === subItem.path ? "active" : ""
                      }
                      onClick={() => {
                        onActiveButtonClick(id);
                        if (hasSubmenu) {
                          handleSubmenuToggle(item.path); // Just toggle submenu
                        } else {
                          navigate(item.path);
                        }
                      }}
                    >
                      {subItem.label}
                    </SubmenuItem>
                  ))}
                </SubmenuContainer>
              )}
            </div>
          );
        })}
      </MenuMobileDisplay>
    </MenuPopUp>
  );
};

export default MenuOverlay;
