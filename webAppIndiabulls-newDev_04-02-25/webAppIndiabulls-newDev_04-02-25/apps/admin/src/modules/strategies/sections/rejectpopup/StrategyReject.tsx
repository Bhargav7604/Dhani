import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { StrategyFormFields } from "./StrategyRejectSpecs";
import { useDispatch } from "react-redux";
import { setStrategies } from "../../state-slice/StrategiesSlice";
import AdminInputComp from "../../../../components/admininput/AdminInputComp";
import AdminTextAreaComp from "../../../../components/admintextarea/AdminTextArea";
import { Backdrop, Fade, Modal } from "@mui/material";
import { TableContainer } from "../../../user-list/UsersStyles";
import { ActiveStrategyManageProps } from "../../StrategiesUtils";
import { ButtonWraper, CustomButton } from "../../../../styles/FormStyles";
import {
  FlexProfileDiv,
  AdminStyledForm,
  StyledSubTitle,
} from "../../../../components/ui/GlobalStyles";
import { RejectStrategyPostService } from "../../services/AppServices";
import { RejectStrategyPostTypes } from "../../services/AppServiceTypes";
// import { EditStrategyPostService } from "../../services/AppServices";

const strategySchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
});

type StrategySchemaZod = z.infer<typeof strategySchema>;

const StrategyRejectComp: React.FC<ActiveStrategyManageProps> = ({
  open,
  onClose,
  id,
  strategyName,
}) => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
    setValue,
  } = useForm<StrategySchemaZod>({
    resolver: zodResolver(strategySchema),
  });

  const dispatch = useDispatch();

  const populateForm = () => {
    if (id && strategyName) {
      setValue("id", id);
      setValue("name", strategyName);
    }
  };

  useEffect(() => {
    populateForm();
  }, [id, strategyName]);

  const onSubmit: SubmitHandler<StrategySchemaZod> = async (data) => {

    if (data.id == null) {
      console.error("Strategy ID is missing.");
      return;
    }

    const payload: RejectStrategyPostTypes = {
      payload: {
        strategyId: data.id,
        description: data.description,
      },
    };

    try {
      const response = await RejectStrategyPostService(payload);

      if (response.status === "success") {
        dispatch(
          setStrategies({ strategiesData: response.data.allAdminStrategies })
        );
        reset({
          description: "",
        });
        onClose();
      } else {
        console.error("Failed to reject strategy:", response);
      }
    } catch (error) {
      throw error;
    }
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={onClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{ backdrop: { timeout: 500 } }}
    >
      <Fade in={open} style={{ outline: "none", backgroundColor: "white" }}>
        <TableContainer>
          <FlexProfileDiv $flexDirection>
            <StyledSubTitle>Reject Strategy</StyledSubTitle>

            <AdminStyledForm onSubmit={handleSubmit(onSubmit)}>
              {StrategyFormFields.map((field, index) => {
                if (field.type === "textarea") {
                  return (
                    <AdminTextAreaComp
                      key={index}
                      name={field.name}
                      control={control}
                      heading={field.heading}
                      placeholder={field.placeholder}
                      error={
                        errors[
                          field.name as keyof z.infer<typeof strategySchema>
                        ]?.message
                      }
                    />
                  );
                } else {
                  return (
                    <AdminInputComp
                      key={index}
                      name={field.name}
                      control={control}
                      heading={field.heading}
                      type={field.type}
                      placeholder={field.placeholder}
                      error={
                        errors[
                          field.name as keyof z.infer<typeof strategySchema>
                        ]?.message
                      }
                    />
                  );
                }
              })}

              <ButtonWraper>
                <CustomButton onClick={onClose}>Cancel</CustomButton>
                <CustomButton variant="contained" type="submit" $profile>
                  Submit
                </CustomButton>
              </ButtonWraper>
            </AdminStyledForm>
          </FlexProfileDiv>
        </TableContainer>
      </Fade>
    </Modal>
  );
};

export default StrategyRejectComp;
