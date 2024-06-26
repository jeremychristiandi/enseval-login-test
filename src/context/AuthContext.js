import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  // const [userId, setUserId] = useState(null);
  const [user, setUser] = useState("");

  const values = {
    isAuth,
    setIsAuth,
    setUser,
    user,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
