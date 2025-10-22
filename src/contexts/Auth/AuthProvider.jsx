import React from "react";
import { AuthContext } from "./AuthContext";
import { auth } from "../../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const GoogleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const singInWithGoogle = () => {
    return signInWithPopup(auth, GoogleProvider);
  };

  const authInfo = {
    createUser,
    singInWithGoogle,
  };

  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
