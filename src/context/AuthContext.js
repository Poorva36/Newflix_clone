import { createContext, useContext, useEffect, useState } from "react";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import { auth, db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
// import Login from "../components/pages/Login";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  //user state for login,logout
  const [user, setUser] = useState({});

  //For Sign Up
  function signup(email, password) {
    createUserWithEmailAndPassword(auth, email, password);
    setDoc(doc(db, "users", email), { wishlist: [] });
  }

  //For LogIn
  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  //For LogOut
  function logout() {
    return signOut(auth);
  }

  //State change whenever unsubscribe
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  });

  return (
    // <AuthContext.Provider
    //   value={{ signup: signup, login: login, logout: logout, user: user }}
    // >
    <AuthContext.Provider value={{ signup, login, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function UserAuth() {
  return useContext(AuthContext);
}
