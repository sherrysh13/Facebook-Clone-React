import React, { useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [emailError, setEmailError] = useState("")
  const [passwordError, setPasswordError] = useState("")

  let navigate = useNavigate();

  const loginHandler = () => {

    let valid = true;

    setEmailError("")
    setPasswordError("")

    if(email==="" && password===""){
      alert("Please Enter Data")
    }

    if(email === ""){
      setEmailError("Please enter valid Email");
      valid = false;
    }else if(!email.includes("@") || !email.includes(".") || !email.endsWith("@gmail.com")){
      setEmailError("Email must contain '@gmail.com'");
      valid = false;
    }

    if(password.length < 8){
      setPasswordError("Password should be of 8 characters");
      valid = false;
    }

    if(valid){
      navigate('/home');
    }
  }

  return (
    <>
        <div className="loginContainer">
            <div className="leftSide">
                    <h1>facebook</h1>
                    {/* <br /> */}
                    <p>Facebook helps you connect and share with the people in your life.</p>
            </div>
            <div className="rightSide">
                <div className="loginBox">
                    <input type="email" placeholder='Email address or phone number' value={email} onChange={(e) => setEmail(e.target.value)}/>
                    {emailError && <p className="error">{emailError}</p>}
                    <input type="password" placeholder='Password'value={password} onChange={(e) => setPassword(e.target.value)}/>
                    {passwordError && <p className="error">{passwordError}</p>}
                    <button className="loginBtn" onClick={loginHandler}>Log in</button>
                    <a href="daraz.pk" className="forgetPassword">Forgetten password?</a>
                    <hr />
                    <div className="createBtn">
                    <button className="createNewAccBtn">Create new account</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Login

// input py focus krny sy uska border color blue ni ho rha 