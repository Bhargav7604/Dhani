// import Bell from "../../../public/svg/bell-svgrepo-com.svg";
import FullScreen from "../../../public/svg/ArrowsFullscreen.svg";

// import Search  from "../../../public/svg/search-svgrepo-com.svg"
import profileIcon from "../../../public/svg/profile-sidenav-svg.svg";
// import { NavLink } from "react-router-dom";
import {
  // Badge,
  IconWrapper,
  LeftSection,
  Nav,
  // NotificationIcon,
  Profile,
  RightSection,
  Username,
} from "../layout/LayoutStyles";
import { LogoutButtonsDiv } from "../layout/sidebar/SidebarStyles";
import logoutIcon from "../../../public/svg/exitall.svg";
import ReusableModal from "../sharedComponents/CustomDialog/CustomDialog";
import { RootState, useAppDispatch, useAppSelector } from "../../store/Store";
import { openModel, closeModel } from "./state-slice/ExitAllSlice";
import { ExitAllPostService } from "./services/AppService";

const Dashboard = () => {
  // const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const isModalOpen = useAppSelector(
    (state: RootState) => state.exitall.isOpen
  );

  // const handleExitAll = () => {
  //   dispatch(closeModel());
  // };

  const handleExitAll = async () => {
  try {
    await ExitAllPostService(); 
    dispatch(closeModel()); // close the modal after success
  } catch (error) {
    // No need to handle error toast here; it's globally handled
  }
};


  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  };

  return (
    <>
      <Nav>
        <LeftSection>
          {/* <SearchBox>
        <img src={Search} />
          <input type="text" placeholder="Search..." />
        </SearchBox> */}
        </LeftSection>

        <RightSection>
          <IconWrapper onClick={toggleFullscreen}>
            <img src={FullScreen} />
          </IconWrapper>
          {/* <NotificationIcon>
          <img src={Bell} />
          <Badge>9</Badge>
        </NotificationIcon> */}
          {/* <NavLink
             to="/profile"
            style={{ textDecoration: "none", color: "inherit" }}
          > */}
            <Profile>
              <img src={profileIcon} alt="user" />
              <Username>Rajesh Sriwastava </Username>
            </Profile>
          {/* </NavLink> */}
          <LogoutButtonsDiv onClick={() => dispatch(openModel())}>
            Exit All <img src={logoutIcon} alt="Logout Icon" />
          </LogoutButtonsDiv>
        </RightSection>
      </Nav>
      <ReusableModal
        open={isModalOpen}
        handleClose={() => dispatch(closeModel())}
        handleConfirm={handleExitAll}
        title="Exit All"
        description="Are you Sure  to Exit the All Live Strategies"
        confirmButtonText="Confirm"
        cancelButtonText="Cancel"
        confirmButtonColor="red"
        cancelButtonColor="gray"
        showConfirmButton={true}
      />
    </>
  );
};

export default Dashboard;
