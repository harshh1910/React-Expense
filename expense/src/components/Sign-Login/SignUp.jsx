import React, { useState } from "react";
import styles from "./SignUp.module.css";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../../../firebase";
import { toast, ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
const auth = getAuth(app);

function SignUp() {
   const googgleProvider = new GoogleAuthProvider();
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();

  function EmailSignUp() {

    
    createUserWithEmailAndPassword(auth, email, pass)
      .then((val) => {
        setEmail("");
        setPass("");
        toast.success("Registration Successful  ");
        setEmail("");
        setPass("");
      })
      .catch((err) => {
        toast.error("error occured");
        setEmail("");
        setPass("");
      });
  }

  const signupwithgoogle=()=>{
    signInWithPopup(auth,googgleProvider).then((val)=>console.log("sign in sucessful")).catch((err)=>console.log(err))
} 
  return (
    <div className={styles["container"]}>
      <ToastContainer />
      <div className={styles["Signup"]}>
        <div className={styles["image-section"]}>
          <img
            style={{ width: "300px" }}
            src="🦆 illustration _Report presentation_.png"
            alt="Group Illustration"
          />
        </div>

        <div className={styles["form-section"]}>
          <h2 className={styles["form-section-h2"]}>Sign Up</h2>
          <div className={styles["social-icons"]}>
            <img
            onClick={signupwithgoogle}
              className={styles["social-icons-img"]}
              src="🦆 icon _google_.png"
              alt="Google"
            />
            <img
              className={styles["social-icons-img"]}
              src="🦆 icon _social linkedin_.png"
              alt="LinkedIn"
            />
          </div>

          <p className={styles["form-section-p"]}>or use your email password</p>

          <input
            className={styles["form-section-input"]}
            type="email"
            placeholder="Email"
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className={styles["form-section-input"]}
            type="password"
            placeholder="Password"
            value={pass} 
            onChange={(e) => setPass(e.target.value)}
            required
          />
          
          <button
            className={styles["form-section-button"]}
            onClick={EmailSignUp}
          >
            Sign In
          </button>
          <div className="ACC" style={{display:"flex", fontSize:"12px", textAlign:"center",justifyContent:"center",marginTop:"6px"}}>
            <p>Already have an account?  <Link to="/SignIn">Login</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
