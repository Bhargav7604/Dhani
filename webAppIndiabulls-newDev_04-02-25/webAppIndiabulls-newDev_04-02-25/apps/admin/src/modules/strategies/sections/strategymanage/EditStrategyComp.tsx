import { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { StrategyFormFields } from "./EditStrategySpecs";
import { useDispatch } from "react-redux";
import { setStrategies } from "../../state-slice/StrategiesSlice";
import AdminInputComp from "../../../../components/admininput/AdminInputComp";
import AdminTextAreaComp from "../../../../components/admintextarea/AdminTextArea";
import { Backdrop, Fade, Modal } from "@mui/material";
import { TableContainer } from "../../../user-list/UsersStyles";
import { ActiveStrategyManageProps, StrategyType } from "../../StrategiesUtils";
import { ButtonWraper, CustomButton } from "../../../../styles/FormStyles";
import {
  FlexProfileDiv,
  AdminStyledForm,
  StyledSubTitle,
} from "../../../../components/ui/GlobalStyles";
import { RootState, useAppSelector } from "../../../../store/Store";
import { EditStrategyPostService } from "../../services/AppServices";
import { EditStrategyPostTypes } from "../../services/AppServiceTypes";
import CustomTimePicker from "../../../../components/timepicker/CustomTimePicker";
import AdminSelectComp from "../../../../components/adminselect/AdminSelectComp";

const strategySchema = z.object({
  id: z.number(),
  name: z.string(),
  capital: z.string(),
  entryTime: z.string(),
  exitTime: z.string(),
  description: z.string(),
  category: z.any(),
});

type StrategySchemaZod = z.infer<typeof strategySchema>;

const EditStrategyComp: React.FC<ActiveStrategyManageProps> = ({
  open,
  onClose,
  id,
}) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm<StrategySchemaZod>({
    resolver: zodResolver(strategySchema),
  });

  const dispatch = useDispatch();

  const strategiesList = useAppSelector(
    (appState: RootState) => appState.strategiesdata.strategiesData
  ) as StrategyType[];
  const { categories } = useAppSelector((appState) => appState.strategiesdata);

  // function formatTimeOnly(dateTimeString: string): string {
  //   if (!dateTimeString) return "";
  //   const timePart = dateTimeString.split("T")[1]; // "12:30:25"
  //   return timePart ? timePart.slice(0, 5) : ""; // "12:30"
  // }

  useEffect(() => {
    if (strategiesList && id !== undefined) {
      const strategy = strategiesList.find((s) => s.id === id);

      
      const padZero = (num: number): string => num.toString().padStart(2, "0");

      // Construct time strings
      

      if (strategy) {
        const entryTime = `${padZero(strategy.entryHours)}:${padZero(strategy.entryMinutes)}`;
    const exitTime = `${padZero(strategy.exitHours)}:${padZero(strategy.exitMinutes)}`;
        setValue("id", strategy.id);
        setValue("name", strategy.name);
        setValue("capital", String(strategy.capital));
        setValue("entryTime",entryTime );
        setValue("exitTime", exitTime);
        setValue("description", strategy.description);
        setValue("category", strategy.scId);
      }
    }
  }, [strategiesList, id, setValue]);

  const onSubmit: SubmitHandler<StrategySchemaZod> = async (data) => {
    try {
      const entryTime = data.entryTime.split(":");
      const exitTime = data.exitTime.split(":");
      const payload: EditStrategyPostTypes = {
        payload: {
          strategyId: data.id,
          strategyName: data.name,
          description: data.description,
          minCapital: Number(data.capital),
          entryHours: Number(entryTime[0]),
          entryMinutes: Number(entryTime[1]),
          exitHours: Number(exitTime[0]),
          exitMinutes: Number(exitTime[1]),
          strategyCategoryID: Number(data.category),
        },
      };
      const response = await EditStrategyPostService(payload);

      if (response.status === "success") {
        dispatch(
          setStrategies({ strategiesData: response.data.allAdminStrategies })
        );

        onClose();
      } else {
        console.error("Edit Strategy update failed:", response);
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
            <StyledSubTitle>Edit Strategy Details</StyledSubTitle>

            <AdminStyledForm onSubmit={handleSubmit(onSubmit)}>
              {StrategyFormFields.map((field, index) => {
                if (field.type === "select" && field.options) {
                  return (
                    <AdminSelectComp
                      key={field.name}
                      name={field.name}
                      control={control}
                      options={categories}
                      heading={field.heading}
                      placeholder={field.placeholder}
                      error={undefined}
                    />
                  );
                }
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
                } else if (field.type === "time") {
                  return (
                    <CustomTimePicker
                      key={index}
                      name={field.name}
                      control={control}
                      heading={field.heading}
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
                  Update
                </CustomButton>
              </ButtonWraper>
            </AdminStyledForm>
          </FlexProfileDiv>
        </TableContainer>
      </Fade>
    </Modal>
  );
};

export default EditStrategyComp;
