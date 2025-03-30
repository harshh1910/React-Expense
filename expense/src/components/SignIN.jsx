import React, { useState } from "react";
import styles from "./SignIn.module.css"
import { Link, useNavigate } from "react-router-dom";
import { getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { app } from "../../firebase";
import { toast, ToastContainer } from "react-toastify";

const auth = getAuth(app)
function SignIN() {
  const googgleProvider = new GoogleAuthProvider();
  const navigate = useNavigate()
   const [email, setEmail] = useState();
    const [pass, setPass] = useState();
  
    function EmailSignUp() {
      signInWithEmailAndPassword(auth, email, pass)
        .then((val) => {
          navigate("/Home")
          setEmail("");
          setPass("");
         
        })
        .catch((err) => {
          toast.error("Invalid Credentials")
          setEmail("");
          setPass("");
        });
    }


    const signupwithgoogle=()=>{
      signInWithPopup(auth,googgleProvider).then((val)=>{
        navigate("/Home")
      })
  }
  return (
    <div className={styles['SignIn']}>
      <ToastContainer/>
      <div className={styles['SignIn-container']}>
        {/* <!-- Form Section --> */}
        <div className={styles['form-section']}>
          <h2 className={styles['form-section-H2']}>Login</h2>

          <div className={styles['social-icons']}>
            <img onClick={signupwithgoogle} className={styles['social-icons-img']} src="🦆 icon _google_.png" alt="Google" />
       
            <img src="🦆 icon _social linkedin_.png" alt="LinkedIn" />
          </div>

          <p className={styles['form-section-p']}>or use your email password</p>

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

         
   
          <button className={styles['form-section-button']} onClick={EmailSignUp}>Sign In</button>

    <div className="ACC" style={{display:"flex", fontSize:"12px", textAlign:"center",justifyContent:"center",marginTop:"6px"}}>
                <p>Need an account?  <Link to="/SignUp">SignUp</Link></p>
              </div>
        </div>

        {/* <!-- Image Section --> */}
        <div className={styles['image-section']}>
          <img
          className={styles['image-section-img']}
            src="🦆 illustration _Report presentation_.png"
            alt="Group Illustration"
          />
        </div>
      </div>
    </div>
  );
}

export default SignIN;
