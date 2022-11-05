import { createContext, useContext, useEffect,useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
  TwitterAuthProvider,
  sendPasswordResetEmail
} from "firebase/auth";
import { auth } from "../firebase";

export const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  return context;
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)

  const signUp = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  const signIn = async (email, password) =>signInWithEmailAndPassword(auth, email, password);

  const logout = async () => signOut(auth);

  const loginWithGoogle = () => {
    const GoogleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth,GoogleProvider)
  }

  const loginWithFacebook = () => {
    const FacebookProvider = new FacebookAuthProvider();
    return signInWithPopup(auth,FacebookProvider)
  }

  const loginWithTwitter = () => {
    const TwitterProvider = new TwitterAuthProvider();
    return signInWithPopup(auth,TwitterProvider)
  }

  const resetPassword = (email)=> sendPasswordResetEmail(auth, email)

    useEffect(() => {
      onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser);
        setLoading(false)
      })
    }, [])
  return (
    <authContext.Provider value={{ signUp, signIn, user, logout, loading, loginWithGoogle, loginWithFacebook, loginWithTwitter, resetPassword }}>
      {children}
    </authContext.Provider>
  );
}
