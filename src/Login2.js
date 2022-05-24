import React from 'react'
import './App.css';
import {Card, Form, Button} from "react-bootstrap"
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth";
import {auth} from './firebase-config'
import { useEffect, useState } from 'react';
import {Container} from 'react-bootstrap';

export function Login2 (){

    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [loading, setLoading] = useState (true);

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
        console.log(user);
        }catch (error) {
        console.log(error.message);
        }

    };
    const login = async () => {
        try {
        const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
        console.log(user);
        }catch (error) {
            console.log(error.message);
        }
        
    }
    const logout = async () => {
        
        await signOut(auth);
        
        
    }


    return(
        <div className="App">

            <div id="topbar">
            <span class="material-icons"> LilyCrop</span>
            </div>

            <div style={{ borderTop: "2px solid #fff ", marginLeft: 20, marginRight: 20 }}></div>
            
            <form id="form" class="container center_div">
            <h2 className="text-center mb-4">Sign Up</h2>
                <div class ="form-group">
                <label >Email address</label>
                <input onChange={(event) => {
                        setRegisterEmail(event.target.value)
                        }}
                        class="form-control"  placeholder="Enter email"
                    />
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>

                <div class="form-group">
                <label >Password</label>
                <input type="password" class="form-control" placeholder="Password"
                    onChange={(event) => {
                       setRegisterPassword(event.target.value)
                       }}/>
                </div>

                <button  onClick={register} class="btn btn-primary">
                    Submit</button>

            </form>

            <h4> User logged In:</h4>
           {user?.email}



        </div>



    )



}