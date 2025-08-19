type UserData = {
  userName: string | number;
  userId: number;
};

// Role data type
export type RoleData = {
  roleName: string;
  roleId: number;
  userData: UserData[];
};
export type RoleUserRow = {
  id: string | number;
  roleId: number;
  roleName: string;
  userId?: number ; 
  userName: string;
};


export type RollManagementPostTypes = {
  payload: {
    clientId: string;
    roleId: number;
    roleName: string;
  };
};
