import React from "react";
import { Modal, Backdrop, Fade } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// import axios from "axios";

import { TableContainer } from "../../../user-list/UsersStyles";
import { ActiveStrategyManageProps } from "../../StrategiesUtils";
import { AdminStyledForm } from "../../../../components/ui/GlobalStyles";
import { NFFFormFields } from "./Nff-id-InputSpecs";
import AdminInputComp from "../../../../components/admininput/AdminInputComp";
import { z } from "zod";
import { CustomButton } from "../../../../styles/FormStyles";
import { ApproveStrategyPostService } from "../../services/AppServices";

const nffSchema = z.object({
  nffid: z.string(),
});
type NFFSchemaZod = z.infer<typeof nffSchema>;

const NffIdManage: React.FC<ActiveStrategyManageProps> = ({
  open,
  id,
  onClose,
}) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NFFSchemaZod>({
    resolver: zodResolver(nffSchema),
  });

  const onSubmit: SubmitHandler<NFFSchemaZod> = async (data) => {

    if (!id) {
    console.error("Strategy ID is missing");
    return;
  }
    const payload = {
      strategyId: id,
      nffid: data.nffid,
    };
    try {
      const response = await ApproveStrategyPostService({ payload });

      if (response.status === "success") {
        reset({
          nffid: "",
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
      open={open}
      onClose={onClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{ backdrop: { timeout: 500 } }}
    >
      <Fade in={open}>
        <TableContainer>
          <AdminStyledForm onSubmit={handleSubmit(onSubmit)}>
            {NFFFormFields.map((field) => (
              <AdminInputComp
                key={field.name}
                name={field.name}
                control={control}
                heading={field.heading}
                type={field.type}
                placeholder={field.placeholder}
                error={errors[field.name as keyof NFFSchemaZod]?.message}
              />
            ))}

            {/* Submit button */}
            <CustomButton type="submit" $profile variant="contained">
              Update
            </CustomButton>
          </AdminStyledForm>
        </TableContainer>
      </Fade>
    </Modal>
  );
};

export default NffIdManage;
