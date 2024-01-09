const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
export const login = async (email, password) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/v1/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();

    if (data.data?.firstName) {
      dispatch({ type: "login", payload: data.data });
    } else {
      alert(data.message);
    }
  } catch (err) {
    alert(err.message);
  }
};
