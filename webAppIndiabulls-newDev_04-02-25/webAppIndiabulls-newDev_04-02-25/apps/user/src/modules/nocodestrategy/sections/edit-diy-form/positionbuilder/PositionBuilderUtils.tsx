import { z } from "zod";

export const PositionBuilderSchema = z.object({
  position: z.string().optional(),
  segment: z.string().optional(),
  optionType: z.string().optional(),
  lots: z.string().optional(),
  expiry: z.string().optional(),
  strikeSelection: z.string().optional(),
  strikeType: z.string().optional(),
  strikeSelectionValue: z.string().optional(),
});

export type PositionFormDataTypes = z.infer<typeof PositionBuilderSchema>

export interface PositionRefProps {
  resetBuilderform: () => void;
}
