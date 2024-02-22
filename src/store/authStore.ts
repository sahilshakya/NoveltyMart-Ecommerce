import { create } from "zustand";
import { User } from "../shared/interfaces/userType";
import { devtools } from "zustand/middleware";

interface AuthStore {
  user: User | null;
  setAuthData: (data: User | null) => void;
}

const useAuthStore = create<AuthStore>()(
  devtools((set) => ({
    user: null,
    setAuthData: (data) => {
      set((state) => ({
        ...state,
        user: data,
      }));
    },
  }))
);

export default useAuthStore;
