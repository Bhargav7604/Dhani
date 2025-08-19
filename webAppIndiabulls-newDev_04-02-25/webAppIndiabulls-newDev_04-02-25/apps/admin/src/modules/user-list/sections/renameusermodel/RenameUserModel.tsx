import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { DialogActions } from "@mui/material";
import { CustomButton, FormWrapper } from "../../../../styles/FormStyles";
import {
  AdminModalTitle,
  FlexColumnDiv,
  FlexRowDivModal,
} from "./RenameUserModelStyles";
import CustomModalSkeleton from "../../../sharedComponents/CustomModal/CustomModalSkeleton";
import { EditStrategyFormFields } from "./RenameUserModelSpece";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import AdminInputComp from "../../../../components/admininput/AdminInputComp";
import { EditStrategyModalProps } from "../../UsersDataUtils";

const EditFormSchema = z.object({
  firstname: z.string().min(1, "First name is required"),
  middlename: z.string().optional(),
  lastname: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email format"),
});

type EditStrategySchemaZod = z.infer<typeof EditFormSchema>;

const RenameUserModel: React.FC<EditStrategyModalProps> = ({
  open,
  handleClose,
}) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EditStrategySchemaZod>({
    resolver: zodResolver(EditFormSchema),
  });

  // Reset the form whenever the modal is reopened
  useEffect(() => {
    if (open) {
      reset();
    }
  }, [open, reset]);

  const handleCancel = () => {
    reset();
    handleClose();
  };

  const onSubmit: SubmitHandler<EditStrategySchemaZod> = (data) => {
    console.log("Form submitted:", data);
  };
  return (
    <CustomModalSkeleton open={open} handleClose={handleClose}>
      <AdminModalTitle> Edit User’s Name & Email </AdminModalTitle>
      <FormWrapper>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FlexColumnDiv>
            {EditStrategyFormFields.map((field) => (
              <div key={field.name} style={{ width: "100%" }}>
                <AdminInputComp
                  name={field.name}
                  control={control}
                  heading={field.heading}
                  type={field.type}
                  placeholder={field.placeholder}
                  error={
                    errors[field.name as keyof z.infer<typeof EditFormSchema>]
                      ?.message
                  }
                />
              </div>
            ))}
          </FlexColumnDiv>

          <FlexRowDivModal>
            <DialogActions>
              <CustomButton variant="contained" onClick={handleCancel}>
                Cancel
              </CustomButton>
            </DialogActions>
            <DialogActions>
              <CustomButton variant="contained" type="submit" $profile>
                Create
              </CustomButton>
            </DialogActions>
          </FlexRowDivModal>
        </form>
      </FormWrapper>
    </CustomModalSkeleton>
  );
};

export default RenameUserModel;
