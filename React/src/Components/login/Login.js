import { useState, useEffect } from "react";
import "./login.css"
import Signin from "./Signin"
import SignUp from "./SignUp"

export default function Login() {
    const [option, setOption] = useState(0);

    return (
        <div className="loginContainer">
            <div className="loginWrapper">
                <div className="loginButtonType">
                    <span className={option===0?"loginButtonTypeSignin clicked":"loginButtonTypeSignin"} onClick={()=>setOption(0)} >Sign Up</span>
                    <span className={option===1?"loginButtonTypeSignup clicked":"loginButtonTypeSignup"} onClick={()=>setOption(1)} >Sign In</span>
                </div>
                <div className="loginForm">
                    {option === 0 ? <SignUp /> : <Signin />}
                </div>
            </div>
        </div>
    )
}
