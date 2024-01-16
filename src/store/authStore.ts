import { create } from "zustand";

interface User {
  id: number;
  email: string;
  password: string;
}
interface AuthStore {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
  setIsAuthenticated: (authenticated: boolean) => void;
  // token: string;
  // setToken: (newToken: string) => void;

  // logout: () => void;
}

const useAuthStore = create<AuthStore>()((set) => ({
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null,
  setIsAuthenticated: (authenticated) =>
    set({ isAuthenticated: authenticated }),
  // token: "",
  // setToken: (newToken) => set({ token: newToken }),

  // logout: () => {
  //   localStorage.removeItem("authToken");
  //   set((state) => ({
  //     ...state,
  //     user: null,
  //     isAuthenticated: false,
  //   }));
  // },
}));

export default useAuthStore;
