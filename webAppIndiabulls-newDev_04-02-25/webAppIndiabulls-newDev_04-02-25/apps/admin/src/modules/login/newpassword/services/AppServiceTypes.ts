export interface SetNewPasswordProps {
    payload: {
      email: string | null;
      password: string;
      confirmPassword: string;
    };
  }