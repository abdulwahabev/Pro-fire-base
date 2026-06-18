import { createContext, useContext, useEffect, useState } from "react";

const Auth = createContext();

const initialState = { isAuth: false, user: {} };

const AuthContext = ({ children }) => {

  const [state, setState] = useState(initialState);
  const [isAppLoading, setIsAppLoading] = useState(true);

  const readProfile = () => {

    const storedUser = JSON.parse(localStorage.getItem("currentUser"));
    
    if (storedUser) {
      setState({ isAuth: true, user: storedUser });
    }
    
    setTimeout(() => {
      setIsAppLoading(false);
    }, 2000);
  };

  useEffect(() => {
    readProfile();
  }, []);

const handleLogout = () => {
    localStorage.removeItem("currentUser");
    setState(initialState);
    
    if (typeof window.toastify === "function") {
      window.toastify("Logged out successfully", "success");
    }
  };

  return (
    <Auth.Provider value={{ ...state, isAppLoading, handleLogout, dispatch: setState }}>
      {children}
    </Auth.Provider>
  );
};

export default AuthContext;

export const useAuth = () => useContext(Auth);