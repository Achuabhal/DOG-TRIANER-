import React, { useState } from "react";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../helper/firebaseConfig";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const Login: React.FC = () => {
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider(); // Initialize Google Auth provider
  const db = getFirestore(); // Initialize Firestore

  const handleGoogleLogin = async () => {
    setError(null); // Reset error message before attempting login

    try {
      // Attempt Google sign-in
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      
      if (user.email) {
        // Check if the email is registered as an admin in Firestore
        const adminDoc = await getDoc(doc(db, "admins", user.email));

        if (adminDoc.exists()) {
          console.log("Admin signed in:", user);
          // Redirect to the admin page after successful admin login
          navigate("/adminpage"); // Adjust the route as needed
        } else {
          // If not an admin, sign out and show an error
          await signOut(auth);
          setError("Access denied.");
        }
      } else {
        setError("Access denied");
      }
    } catch (error: any) {
      setError(error.message);
      console.error("Login error:", error.code, error.message);
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", padding: "2rem" }}>
      <h2>Login</h2>
      <button
        onClick={handleGoogleLogin}
        style={{
          padding: "0.75rem",
          width: "100%",
          marginTop: "1rem",
          backgroundColor: "#4285F4",
          color: "#fff",
          border: "none",
          cursor: "pointer",
        }}
      >
        Sign in with Google
      </button>
      {error && <p style={{ color: "red", marginTop: "1rem" }}>{error}</p>}
    </div>
  );
};

export default Login;
