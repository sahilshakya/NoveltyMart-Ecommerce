// import React, { createContext, useState, useEffect } from "react";

// // Define the type for the context value
// interface AuthContextType {
//   user: null;
//   isAuthenticated: boolean;
//   login: (email: string, password: string) => Promise<void>;
//   logout: () => void;
// }

// // Create the context with a default value
// const AuthContext = createContext<AuthContextType>({
//   user: User | null,
//   isAuthenticated: false,
//   login: () => Promise.resolve(),
//   logout: () => {},
// });

// // Create the provider component
// const AuthProvider: React.FC = ({ children }) => {
//   const [user, setUser] = useState();
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   // Implement login and logout logic here (e.g., using an auth library)
//   const login = async (email: string, password: string) => {
//     try {
//       // Perform authentication logic
//       const response = await fetch("/api/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//       });

//       if (response.ok) {
//         const userData = await response.json();
//         setUser(userData);
//         setIsAuthenticated(true);
//       } else {
//         // Handle authentication error
//       }
//     } catch (error) {
//       // Handle network or other errors
//     }
//   };

//   const logout = () => {
//     // Perform logout logic (e.g., clear tokens, set user to null)
//     setUser(null);
//     setIsAuthenticated(false);
//   };

//   useEffect(() => {
//     // Check for existing authentication on component mount
//     try {
//       const storedUser = localStorage.getItem("user");
//       if (storedUser) {
//         setUser(JSON.parse(storedUser));
//         setIsAuthenticated(true);
//       }
//     } catch (error) {
//       // Handle errors reading stored user data
//     }
//   }, []);

//   const value = { user, isAuthenticated, login, logout };

//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// };

// // Export the context and provider
// export { AuthContext, AuthProvider };
