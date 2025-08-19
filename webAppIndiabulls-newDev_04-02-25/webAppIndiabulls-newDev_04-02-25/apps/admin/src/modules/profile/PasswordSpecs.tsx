export const ProfilePasswordFields = {
  LAST_PASSWORD: "oldPassword",
  NEW_PASSWORD: "newPassword",
  REENTER_PASSWORD: "reenterPassword",
};
export const ProfilePasswordFieldMapping = {
  [ProfilePasswordFields.LAST_PASSWORD]: {
    name: "oldPassword",
    type: "password",
    placeholder: "Enter Old Password",
    heading: "Current Password",
  },
  [ProfilePasswordFields.NEW_PASSWORD]: {
    name: "newPassword",
    type: "password",
    placeholder: "Enter New Password",
    heading: "New Password",
  },
  [ProfilePasswordFields.REENTER_PASSWORD]: {
    name: "reenterPassword",
    type: "password",
    placeholder: "ReEnter New Password",
    heading: "Re-type New Password",
  },
};
export const ProfilePasswordFormFields = [
  ProfilePasswordFieldMapping[ProfilePasswordFields.LAST_PASSWORD],
  ProfilePasswordFieldMapping[ProfilePasswordFields.NEW_PASSWORD],
  ProfilePasswordFieldMapping[ProfilePasswordFields.REENTER_PASSWORD],
];
