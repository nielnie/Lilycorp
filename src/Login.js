import './App.css';
import React from 'react';
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth";
import {auth} from './firebase-config'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Container} from 'react-bootstrap';
import {Card, Form, Button} from "react-bootstrap"
import { Redirect } from 'react-router-dom';
import { SettingsInputAntennaSharp } from '@material-ui/icons';

function Login({setIsAuth}) {
  
  let navigate = useNavigate();
  

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loading, setLoading] =useState (true);
  
  const [user, setUser] = useState({});

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      setUser(currentuser);
      setLoading(false);
    })

    return unsubscribe
  }, [])



  const register = async () => {
    try {
    const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/home");

    console.log(user);
    
    }catch (error) {
      console.log(error.message);
    }

  };
  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      navigate("/home");
      localStorage.setItem("isAuth", true);
      setIsAuth(true);

      console.log(user);

      }catch (error) {
        console.log(error.message);
      }
    
  }
  const logout = async () => {
    
    await signOut(auth);
    localStorage.clear();
    setIsAuth(false);
    window.location.pathname = "/login";
    
    
  }


  
  return (
  


    <div className="Login">

      {/* <div id="topbar">
      <span class="material-icons"> LilyCrop</span>
      </div> */}

      {/* <div style={{ borderTop: "2px solid #fff ", marginLeft: 20, marginRight: 20 }}></div> */}
      

      <div id="account">

        

        <div id="login">
          <a>Login</a>
          <input class="form-control" placeholder="Email" onChange={(event) => {
            setLoginEmail(event.target.value)
            }}/>
          <input class="form-control" type="password" placeholder="Password" onChange={(event) => {
            setLoginPassword(event.target.value)
            }}/>
          <button class="btn btn-outline-secondary" onClick={login}>Login</button>
        </div>
       

        <div id="register">
         <a>Register</a>
          <input class="form-control" placeholder="Email" onChange={(event) => {
            setRegisterEmail(event.target.value)
            }}/>
          <input class="form-control" type="password"placeholder="Password" onChange={(event) => {
            setRegisterPassword(event.target.value)
            }}/>
          <button class="btn btn-outline-secondary" onClick={register}>Create Account</button>
        </div>
      </div>

      <div id="signin">
      <button  class="btn btn-outline-secondary" onClick={logout}>Sign Out</button>
      </div>

      <h4> User logged In:</h4>
      {!loading && user?.email}
       
    

      

    </div>
    


    
  );
}

export default Login; 
