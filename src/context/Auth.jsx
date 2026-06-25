import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../config/firebase"; 

const Auth = createContext();

const initialState = { isAuth: false, user: null };

const AuthContext = ({ children }) => {
  const [state, setState] = useState(initialState);
  const [isAppLoading, setIsAppLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setState({ isAuth: true, user: firebaseUser });
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
      {!isAppLoading ? (
        children
      ) : (
        <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
          <div className="spinner-border text-success" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
    </Auth.Provider>
  );
};

export default AuthContext;
export const useAuth = () => useContext(Auth);