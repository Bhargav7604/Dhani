export interface AuthContextType {
  isAuthenticated: boolean;
  login: (newToken:string) => void;
  logout: () => void;
  // token: string | null;
}
