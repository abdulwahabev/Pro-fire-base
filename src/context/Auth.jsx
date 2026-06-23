import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../config/firebase"; 

const Auth = createContext();

const initialState = { isAuth: false, user: {} };

const AuthContext = ({ children }) => {
  const [state, setState] = useState(initialState);
  const [isAppLoading, setIsAppLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setState({ isAuth: true, user: user });
      } else {
        setState(initialState);
      }
      setIsAppLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        if (typeof window.toastify === "function") {
          window.toastify("Logged out successfully", "success");
        }
      })
      .catch((error) => {
        console.error("Logout Error: ", error);
        if (typeof window.toastify === "function") {
          window.toastify("Something went wrong during logout", "error");
        }
      });
  };

  return (
    <Auth.Provider value={{ ...state, isAppLoading, handleLogout, dispatch: setState }}>
      {children}
    </Auth.Provider>
  );
};

export default AuthContext;

export const useAuth = () => useContext(Auth);