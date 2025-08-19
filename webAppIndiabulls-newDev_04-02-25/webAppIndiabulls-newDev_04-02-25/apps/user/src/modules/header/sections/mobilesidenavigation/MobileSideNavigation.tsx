import React, { useEffect, useRef, useState } from "react";
import LOGO from "../../../../assets/svgs/indiabulls-logo.png";
import { MobileNormalText } from "../../../../components/ui/GlobalStyles";
import { useLocation, useNavigate } from "react-router-dom";

import {
  MenuPopUp,
  MenuMobileDisplay,
  MenuCardDisplay,
  StyledImgLogo,
  FlexRowSpaceEven,
} from "../../HeaderStyles";
import CloseIcon from "@mui/icons-material/Close";
import LogoutButton from "../backtomainterminal/BackToMainTerminal";
import SwitchToLive from "../swithtolive/SwitchToLive";
import { useAppSelector } from "../../../../store/Store";

interface MobileSideNavigationProps {
  isOpen: boolean;
  data: any[];
  onClose: () => void;
  onActiveButtonClick: (id: number) => void;
}

const MobileSideNavigation: React.FC<MobileSideNavigationProps> = ({
  isOpen,
  data,
  onClose,
  onActiveButtonClick,
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const menuRef = useRef<HTMLDivElement | null>(null);
  const [isClosing, setIsClosing] = useState(false);
  const { isLive } = useAppSelector((appState) => appState.welcomePopup);

  useEffect(() => {
    if (!isOpen) return;

    const handleOutsideClick = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeWithAnimation();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);
  const handleNavigation = () => {
    navigate("/deployedstrategies");
  };

  const closeWithAnimation = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 500);
  };

  if (!isOpen && !isClosing) return null;

  return (
    <MenuPopUp ref={menuRef} $isClosing={isClosing}>
      <FlexRowSpaceEven>
        <div style={{ cursor: "pointer" }} onClick={handleNavigation}>
          <StyledImgLogo src={LOGO} alt="IndiaBulls" />
        </div>
        <CloseIcon
          fontSize="medium"
          onClick={closeWithAnimation}
          style={{ cursor: "pointer" }}
        />
      </FlexRowSpaceEven>

      <MenuMobileDisplay>
        {data.map((item, id) => {
          const isActive = location.pathname === item.path;
          return (
            <MenuCardDisplay
              to={item.path}
              key={id}
              onClick={() => onActiveButtonClick(id)}
              $active={isActive}
            >
              <MobileNormalText $isactive={isActive}>
                {item.AlgoTitle}
              </MobileNormalText>
            </MenuCardDisplay>
          );
        })}
        {isLive === false && <SwitchToLive />}

        <LogoutButton />
      </MenuMobileDisplay>
    </MenuPopUp>
  );
};

export default MobileSideNavigation;
