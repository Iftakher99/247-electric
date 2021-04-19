import React, { useContext } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { UserContext } from "../../../App";
import { useHistory, useLocation } from "react-router-dom";
import google from "../../../images/logo.png";
import "./Login.css";
import Navbar from "../../Shared/Navbar/Navbar";
import firebaseConfig from "./firebase.config";
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const Login = () => {
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };

  // use Context
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const GoogleProvider = new firebase.auth.GoogleAuthProvider();

  // Authentication with Google popup
  const authenticateWithGoogle = () => {
    firebase
      .auth()
      .signInWithPopup(GoogleProvider)
      .then((result) => {
        const credential = result.credential;
        const token = credential.accessToken;

        const user = result.user;
        setLoggedInUser(user);
        history.replace(from);
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setLoggedInUser(error);
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <div>
      <Navbar />
      {setLoggedInUser && (
        <h1 className='text-center py-4 '>
          Welcome{" "}
          <span className='text-warning'>{loggedInUser.displayName}</span>
        </h1>
      )}
      <h3 className='text-center '>Login With</h3>
      <div className='text-center'>
        <button onClick={authenticateWithGoogle} className=' ' id='auth-btn'>
          <img style={{ width: "25px" }} src={google} alt='google' />
          Continue With Google
        </button>
      </div>
      <div className='text-center'>
        <small>
          Don't have an account?{" "}
          <span className='text-warning'>Create an account</span>
        </small>
      </div>
    </div>
  );
};

export default Login;
