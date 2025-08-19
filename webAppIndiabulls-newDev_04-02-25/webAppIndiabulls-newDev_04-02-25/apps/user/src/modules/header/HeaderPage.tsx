import { MenuGridDiv, WrapperDiv } from "../../components/ui/GlobalStyles";
import { ButtonDiv } from "../readytodeploy/ReadyToDeployStyles";
import {
  ExitButton,
  ColumnItemsDiv,
  CornerItemsDiv,
  MenuCardDiv,
  NormalText,
} from "../../components/ui/GlobalStyles";
import { useState, useRef } from "react";
import { HeaderNavigationData } from "./HeaderNavigationData";
import ExitPopup from "./sections/exitpopup/ExitPopup";
import { useLocation, useNavigate } from "react-router-dom";
import {
  CirlcleProfileWrapper,
  DeclineText,
  HeadingExitDiv,
  IconsRowWraper,
  ImageWraperCenter,
  MenuMobileDivRow,
  ScrollContent,
  ScrollWrapper,
  StyledImgLogo,
  StyledLogoutImg,
} from "./HeaderStyles";
import LOGO from "../../assets/svgs/indiabulls-logo.png";
import LogoutImg from "../../assets/svgs/log-out-Regular.svg";
import MenuIcon from "@mui/icons-material/Menu";
import { useMediaQuery } from "@mui/material";
import MobileSideNavigation from "./sections/mobilesidenavigation/MobileSideNavigation";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {
  navigationToPage,
  openMySavedStrategy,
} from "../nocodestrategy/state-slice/NoCodeStrategySlice";
import { useAppDispatch, useAppSelector } from "../../store/Store";
import SwitchToLive from "./sections/swithtolive/SwitchToLive";
import PNLValuesComp from "../../components/pnlboard/PNLValueComp";
import ForWardTextComp from "../layout/section/ExecutionTypeToggle/ExecutionTypeToggleComp";
interface AlgoState {
  activeCardIndex: number;
  toggleExit: boolean;
}

const initialStateValues: AlgoState = {
  activeCardIndex: 0,
  toggleExit: false,
};

// function AlgoPage() {
// const AlgoPage = forwardRef<HTMLDivElement>((_, ref) => {
const AlgoPage = () => {
  const Location = useLocation();
  const [state, setState] = useState<AlgoState>(initialStateValues);
  const isExitButtonTrue = useMediaQuery("(min-width:992px)");
  const matches = useMediaQuery("(max-width:993px)");
  // const { isLive } = useAppSelector((appState) => appState.welcomePopup);
  const { declineDescription } = useAppSelector(
    (appState) => appState.welcomePopup
  );
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isLiveState = useAppSelector(
    (appState) => appState.welcomePopup.isLive
  );
  const isPNLRender =
    Location.pathname === "/deployedstrategies" ||
    Location.pathname === "/readytodeploy";
  const handleNavigation = () => {
    navigate("userprofile");
  };

  const { toggleExit } = state;

  function activeButtonHandler(id: number) {
    setState((prevState) => ({
      ...prevState,
      activeCardIndex: id,
    }));
  }

  function togglePopupModal() {
    setState((prevState) => ({
      ...prevState,
      toggleExit: true,
    }));
  }

  function closePopupModal() {
    setState((prevState) => ({
      ...prevState,
      toggleExit: false,
    }));
  }

  const TitlePart = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [, setActiveCardIndex] = useState(0);

    const toggleMenu = () => {
      setIsMenuOpen((prev) => !prev);
    };

    const closeMenu = () => {
      setIsMenuOpen(false);
    };

    const activeButtonHandler = (id: number) => {
      setActiveCardIndex(id);
      closeMenu();
      dispatch(navigationToPage({ currentPage: "easystrategy" }));
      dispatch(openMySavedStrategy({ showMySaved: false }));
    };

    return (
      <CornerItemsDiv>
        {matches ? (
          <MenuMobileDivRow>
            <MenuIcon onClick={toggleMenu} style={{ cursor: "pointer" }} />
            {isPNLRender && <ForWardTextComp />}
            <IconsRowWraper>
              <ImageWraperCenter
                onClick={togglePopupModal}
                style={{ cursor: "pointer" }}
              >
                <StyledLogoutImg src={LogoutImg} alt="logout" width="14px" />
              </ImageWraperCenter>
              {toggleExit && (
                <ExitPopup open={toggleExit} onClose={closePopupModal} />
              )}
              <AccountCircleIcon
                color="primary"
                fontSize="large"
                style={{ cursor: "pointer" }}
                onClick={handleNavigation}
              />
            </IconsRowWraper>
            <MobileSideNavigation
              isOpen={isMenuOpen}
              data={HeaderNavigationData}
              onClose={closeMenu}
              onActiveButtonClick={activeButtonHandler}
            />
          </MenuMobileDivRow>
        ) : (
          <HeadingExitDiv>
            <div style={{ cursor: "pointer", width: "33%" }} onClick={() => {}}>
              <StyledImgLogo src={LOGO} alt="IndiaBulls" />
            </div>
            <div
              style={{
                width: "33%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              {isPNLRender && <ForWardTextComp />}
            </div>
            <ButtonDiv>
              {isLiveState === false && <SwitchToLive />}
              {/* <BackToMainTerminal /> */}
              {isExitButtonTrue && (
                <>
                  <ExitButton onClick={togglePopupModal} variant="contained">
                    Exit All Strategies
                    <StyledLogoutImg src={LogoutImg} alt="logout" />
                  </ExitButton>
                  {toggleExit && (
                    <ExitPopup open={toggleExit} onClose={closePopupModal} />
                  )}
                </>
              )}
              <CirlcleProfileWrapper>
                <AccountCircleIcon
                  color="primary"
                  fontSize="large"
                  style={{ cursor: "pointer" }}
                  onClick={handleNavigation}
                />
              </CirlcleProfileWrapper>
            </ButtonDiv>
          </HeadingExitDiv>
        )}
      </CornerItemsDiv>
    );
  };
  const MenuGridPart = () => {
    const itemRefs = useRef<HTMLAnchorElement[]>([]);

    const scrollToActiveItem = (index: number) => {
      const activeElement = itemRefs.current[index];
      if (activeElement) {
        const parent = activeElement.parentElement;

        if (parent) {
          const parentRect = parent.getBoundingClientRect();
          const elementRect = activeElement.getBoundingClientRect();

          const offset = elementRect.left - parentRect.left;

          parent.scrollBy({
            left: offset,
            behavior: "smooth",
          });
        }
      }
    };

    return (
      isExitButtonTrue && (
        <MenuGridDiv $width="100%" $ismobile="true">
          {HeaderNavigationData.map((item, id) => {
            const isActive = Location.pathname === item.path;

            return (
              <MenuCardDiv
                ref={(el) => (itemRefs.current[id] = el!)}
                to={item.path}
                key={id}
                onClick={() => {
                  activeButtonHandler(id);
                  scrollToActiveItem(id);
                  dispatch(navigationToPage({ currentPage: "easystrategy" }));
                  dispatch(openMySavedStrategy({ showMySaved: false }));
                }}
                $active={isActive}
              >
                <NormalText $isactive={isActive}>{item.AlgoTitle}</NormalText>
              </MenuCardDiv>
            );
          })}
          {!isExitButtonTrue && (
            <>
              <ExitButton
                onClick={togglePopupModal}
                variant="contained"
                $isnavitem
              >
                Exit All Strategies
                <StyledLogoutImg src={LogoutImg} alt="logout" />
              </ExitButton>

              {toggleExit && (
                <ExitPopup open={toggleExit} onClose={closePopupModal} />
              )}
            </>
          )}
        </MenuGridDiv>
      )
    );
  };

  return (
    <WrapperDiv
    // ref={ref}
    >
      <ColumnItemsDiv $backgroundcolor="#fff" $padding="4px 34px" $ismobile={true}>
        {TitlePart()}
      </ColumnItemsDiv>
      {declineDescription && (
        <ScrollWrapper>
          <ScrollContent>
            <DeclineText>{declineDescription}</DeclineText>
          </ScrollContent>
        </ScrollWrapper>
      )}
      <ColumnItemsDiv $ismobile={true} $padding="4px 0px">
        {MenuGridPart()}
      </ColumnItemsDiv>
      {isPNLRender && <PNLValuesComp />}
    </WrapperDiv>
  );
};

export default AlgoPage;
