import { Backdrop, Fade, Modal, Radio } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ColumnFlexDiv,
  MainHeader,
  StyledButton,
  StyledForm,
  StyledFormControlLabel,
  StyledListItem,
  StyledRadioGroup,
  StyledWelcomeModal,
} from "./WelcomeModalStyles";
import { WelcomeModalPostService } from "./services/WelcomeModalServices";
import { PopupButtonsDiv } from "../readytodeploy/sections/strategiescard/StrategiesCardStyles";
import { StyledPara } from "../../../../../packages/ui/src/sharedstyles/SharedStyledComps";
import { CancelButton } from "../header/HeaderStyles";
import { WelcomeModalFormTypes } from "./WelcomeModalUtils";
import { useAppDispatch } from "../../store/Store";
import {
  setDeclineDescription,
  setIsLive,
  setIsLoggedInToday,
  setIsNewUser,
} from "./state-slice/WelcomeSlice";
import { setExecutionType } from "../layout/state-slice/ExecutionTypeSlice";

export default function WelcomeModal() {
  const [open, setOpen] = useState(true);
  const { handleSubmit, control, watch } = useForm<WelcomeModalFormTypes>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const selectedDecision = watch("decision");

  const clientId = sessionStorage.getItem("clientId") || "";
  async function welcomeFormSubmitHandler(data: WelcomeModalFormTypes) {
    const payload = {
      clientId: clientId,
      termsConditions: data.decision === "accept" ? true : false,
    };

    try {
      const config = { payload };
      const response = await WelcomeModalPostService(config);
      if (
        response.data.newUser === false &&
        response.data.loggedInToday === false
      ) {
        setOpen(false);
        navigate("/deployedstrategies");
      } else {
        navigate("/deployedstrategies");
      }
      if (response.data) {
        dispatch(setIsLive({ isLive: response.data.isLive }));
        if (response.data.isLive) {
          dispatch(setExecutionType({ ExecutionType: "LiveTrading" }));
        } else {
          dispatch(setExecutionType({ ExecutionType: "PaperTrading" }));
        }
        dispatch(setIsNewUser({ isNewUser: response.data.newUser }));
        dispatch(
          setIsLoggedInToday({ isLoggedInToday: response.data.loggedInToday })
        );
        dispatch(
          setDeclineDescription({
            declineDescription: response.data.bannerContent,
          })
        );
      }
    } catch (error) {
      throw error;
    }
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={() => {}}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
        sx={{ outline: "none", border: "none" }}
      >
        <Fade
          in={open}
          style={{
            outline: "none",
            backgroundColor: "white",
          }}
        >
          <StyledWelcomeModal>
            <ColumnFlexDiv $alignitems="center">
              <MainHeader>Welcome to IB Algo</MainHeader>
              <StyledPara $textalign="center" $fontsize="13px">
                Token Generation Confirmation
              </StyledPara>
            </ColumnFlexDiv>
            <StyledForm onSubmit={handleSubmit(welcomeFormSubmitHandler)}>
              <ul
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "9px",
                }}
              >
                <StyledPara $fontsize="15px" $color $marginbottom="6px">
                  By selecting "Accept" you confirm and agree to the following:
                </StyledPara>

                <StyledListItem>
                  A trade token will be generated and linked to your account.
                </StyledListItem>

                <StyledListItem>
                  All strategies subscribed for live trading will be activated
                  and will begin executing real-money trades in your trading
                  account.
                </StyledListItem>

                <StyledListItem $marginbottom="4px">
                  Strategies subscribed for forward testing will continue
                  operating in forward test mode without executing real trades.
                </StyledListItem>

                <StyledPara $fontsize="15px" $color $marginbottom="6px">
                  If you select "Decline":
                </StyledPara>

                <StyledListItem>
                  No trade token will be generated, and live trading will not be
                  enabled.
                </StyledListItem>

                <StyledListItem>
                  All strategies set for forward testing will continue running
                  in forward test mode as usual.
                </StyledListItem>

                <StyledListItem>
                  No real money trades will be executed.
                </StyledListItem>
              </ul>

              <Controller
                name="decision"
                control={control}
                rules={{ required: "You must select an option" }}
                render={({ field }) => (
                  <StyledRadioGroup {...field} row>
                    <div style={{ display: "flex", width: "100%" }}>
                      <div
                        style={{
                          minWidth: "50%",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <StyledFormControlLabel
                          value="accept"
                          control={<Radio />}
                          label={
                            <StyledPara
                              $textalign="start"
                              $fontsize="14px"
                              $color
                              $mobilenowrap={false}
                            >
                              I agree,generate tokens.
                            </StyledPara>
                          }
                        />
                      </div>
                      <div
                        style={{
                          minWidth: "50%",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <StyledFormControlLabel
                          value="decline"
                          control={<Radio />}
                          label={
                            <StyledPara
                              $textalign="start"
                              $fontsize="14px"
                              $color
                              $mobilenowrap={false}
                            >
                              I disagree,Don't generate tokens.
                            </StyledPara>
                          }
                        />
                      </div>
                    </div>
                  </StyledRadioGroup>
                )}
              />

              <PopupButtonsDiv $nopadding="0px" $justifycontent="space-around">
                <StyledButton
                  type="submit"
                  variant="contained"
                  disabled={selectedDecision !== "accept"}
                >
                  Accept
                </StyledButton>
                <CancelButton
                  type="submit"
                  width="26%"
                  $mobilewidth="26%"
                  variant="contained"
                  disabled={selectedDecision !== "decline"}
                >
                  Decline
                </CancelButton>
              </PopupButtonsDiv>
            </StyledForm>
          </StyledWelcomeModal>
        </Fade>
      </Modal>
    </div>
  );
}
