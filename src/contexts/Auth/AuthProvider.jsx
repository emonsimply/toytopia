import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { auth } from "../../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

const GoogleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);



  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const singInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const singInWithGoogle = () => {
    return signInWithPopup(auth, GoogleProvider);
  };

  const SignOut = () => {
    return signOut(auth);
  };

  

  // get current user info
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);


  const updateUserProfile = (name, photoURL) => {
  return updateProfile(auth.currentUser, {
    displayName: name,
    photoURL: photoURL,
  });
};

  const authInfo = {
    createUser,
    singInUser,
    singInWithGoogle,
    SignOut,
    user,
    updateUserProfile,
    loading,
  };

  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
