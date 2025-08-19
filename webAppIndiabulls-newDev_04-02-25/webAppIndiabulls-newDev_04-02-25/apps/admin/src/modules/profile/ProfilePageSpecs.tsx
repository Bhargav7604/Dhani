export const ProfileAccountFields = {
  TEXT_FULL_NAME: "textFullName",
  TEXT_ROLE: "textRole",
  EMAIL: "email",
  NUMBER: "number",
};
export const ProfileAccountFieldMapping = {
  [ProfileAccountFields.  TEXT_FULL_NAME]: {
    name: "fullName",
    type: "text",
    placeholder: " Enter FullName",
    heading: "Full Name",
  },
  [ProfileAccountFields.TEXT_ROLE]: {
    name: "role",
    type: "text",
    placeholder: "Role",
    heading: "Role",
  },
  [ProfileAccountFields.EMAIL]: {
    name: "email",
    type: "email",
    placeholder: "abc@gmail.com",
    heading: "Email",
  },
  [ProfileAccountFields.NUMBER]: {
    name: "mobileNumber",
    type: "number",
    placeholder: "1234567890",
    heading: "Mobile Number",
  },
 
};
export const ProfileAccFormFields = [
    ProfileAccountFieldMapping[ProfileAccountFields.TEXT_FULL_NAME],
    ProfileAccountFieldMapping[ProfileAccountFields.TEXT_ROLE],
    ProfileAccountFieldMapping[ProfileAccountFields.EMAIL],
    ProfileAccountFieldMapping[ProfileAccountFields.NUMBER],
  ];