import axios from "axios";
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
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const useAuthStore = create<AuthStore>()((set) => ({
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null,
  login: async (email: string, password: string) => {
    set((state) => ({ ...state, loading: true, error: null }));

    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/users/login",
        {
          email,
          password,
        }
      );

      if (!response.data.success) {
        throw new Error("Invalid response from server");
      } else {
        const token = response.data.data.token;
        localStorage.setItem("authToken", token);
      }

      set((state) => ({
        ...state,
        user: response.data.data,
        isAuthenticated: true,
        loading: false,
      }));
    } catch (error) {
      set((state) => ({ ...state, loading: false }));
      console.error(error); // Log the error for debugging
    }
  },
  logout: () => {
    localStorage.removeItem("authToken");
    set((state) => ({
      ...state,
      user: null,
      isAuthenticated: false,
    }));
  },
}));

export default useAuthStore;
