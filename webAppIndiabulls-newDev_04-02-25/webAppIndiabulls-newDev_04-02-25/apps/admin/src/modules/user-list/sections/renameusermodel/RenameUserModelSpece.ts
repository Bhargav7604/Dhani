import { z } from "zod";

// Define Zod schema for validation
export const schema = z.object({
  firstname: z.string().min(1, "First name is required"),
  middlename: z.string().optional(),
  lastname: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email format"),
});

// Enum for field names
export const StrategyFields = {
  FIRSTNAME: "firstname",
  MIDDLENAME: "middlename",
  LASTNAME: "lastname",
  EMAIL: "email",
};

// Weekdays for the activeDays field
// export const WEEK_DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri"];

// Form Mapping Object for EditStrategy
export const EditStrategyFormMapping = {
  [StrategyFields.FIRSTNAME]: {
    name: "firstname",
    type: "text",
    placeholder: "Enter First Name",
    heading: "First Name",
    component: "AdminInput",
  },
  [StrategyFields.MIDDLENAME]: {
    name: "middlename",
    type: "text",
    placeholder: "Enter Middle Name",
    heading: "Middle Name",
    component: "AdminInput",
  },
  [StrategyFields.LASTNAME]: {
    name: "lastname",
    type: "text",
    placeholder: "Enter Last Name",
    heading: "Last Name",
    component: "AdminInput",
  },
  [StrategyFields.EMAIL]: {
    name: "email",
    type: "email",
    placeholder: "Enter Email",
    heading: "Email Address",
    component: "AdminInput",
  },
};

// Export array to be used in the form component
export const EditStrategyFormFields = [
  EditStrategyFormMapping[StrategyFields.FIRSTNAME],
  EditStrategyFormMapping[StrategyFields.MIDDLENAME],
  EditStrategyFormMapping[StrategyFields.LASTNAME],
  EditStrategyFormMapping[StrategyFields.EMAIL],
];
