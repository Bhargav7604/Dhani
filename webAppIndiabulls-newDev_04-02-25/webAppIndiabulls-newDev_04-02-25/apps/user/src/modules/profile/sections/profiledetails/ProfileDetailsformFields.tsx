export const ProfileDetailsInfoFields = {
    CLIENTID: "clientid",
    CLIENTNAME: "clientname",
    ADDRESS: "address",
    MOBILENUMBER: "mobilenumber",
    EMAILID: "emailid",
    PLATFORM: "platform",
}

export const ProfileDetailsMapping = {
  [ProfileDetailsInfoFields.CLIENTID]: {
    heading: "Client ID",
    name: "clientID",
    type: "text",
    disable: true,
  },
  [ProfileDetailsInfoFields.CLIENTNAME]: {
    heading: "Client Name",
    name: "clientName",
    type: "text",
    disable: true,
  },
  [ProfileDetailsInfoFields.ADDRESS]: {
    heading: "Address",
    name: "address",
    type: "text",
    disable: true,
  },
  [ProfileDetailsInfoFields.MOBILENUMBER]: {
    heading: "Mobile Number",
    name: "mobileNumber",
    type: "text",
    disable: true,
  },
  [ProfileDetailsInfoFields.EMAILID]: {
    heading: "Email ID",
    name: "emailId",
    type: "text",
    disable: true,
  },
  [ProfileDetailsInfoFields.PLATFORM]: {
    heading: "platform",
    name: "platform",
    type: "text",
    disable: true,
  },
};

export const ProfileDetailsInfoMapping = [
    ProfileDetailsMapping[ProfileDetailsInfoFields.CLIENTID],
    ProfileDetailsMapping[ProfileDetailsInfoFields.CLIENTNAME],
    ProfileDetailsMapping[ProfileDetailsInfoFields.ADDRESS],
    ProfileDetailsMapping[ProfileDetailsInfoFields.MOBILENUMBER],
    ProfileDetailsMapping[ProfileDetailsInfoFields.EMAILID],
    ProfileDetailsMapping[ProfileDetailsInfoFields.PLATFORM],
]