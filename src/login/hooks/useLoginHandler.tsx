import useAuthStore from "../../store/authStore";
import { User } from "../../shared/interfaces/userType";

export const useLoginHandler = () => {
  const { setAuthData } = useAuthStore();

  const handleLoginSuccess = (resp: User) => {
    setAuthData(resp);
    console.log(resp);
  };

  return {
    handleLoginSuccess,
  };
};
