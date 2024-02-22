import { useCallback, useEffect } from "react";
import useAuthStore from "../../store/authStore";
import { getDecodedUserFromToken } from "../utils/jwtDecode";
import { fetchUserData } from "../service/userService";

const useGetAuthData = () => {
  const decodedData = getDecodedUserFromToken();
  const id = decodedData?.id;
  const { setAuthData } = useAuthStore();

  const getUserDetail = useCallback(
    async (id: number) => {
      try {
        const resp = await fetchUserData(id);
        if (resp) {
          setAuthData(resp.data);
        }
      } catch (err) {
        console.log("error fetching data", err);
      }
    },
    [setAuthData]
  );

  useEffect(() => {
    id && getUserDetail(id);
  }, [id, getUserDetail]);
};

export default useGetAuthData;
