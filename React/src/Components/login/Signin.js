import "./signup.css"
import { useRef } from "react";
import axios from "axios";

export default function Signin() {
    const username = useRef("");
    const password = useRef("");

    const loginhandler = (e) => {
        e.preventdefault();
        const usernameValue = username.current.value;
        const passwordValue = password.current.value;
        const login = async () => {
            try {
                const res = await axios.post("", {});
                //set context
            } catch (err) {
                console.log(err);
            }
        }
        if (usernameValue === "" || passwordValue === "") {
            alert("please fill both fields properly");
        } else {
            login();
        }
    }

    return (
        <div className="signupContainer">
            <form className="signupForm">
                <label for="name">User name :
                    <input type="text" className="name" name="name" ref={username}></input>
                </label>
                <label for="password">Password :
                    <input type="password" className="password" name="password" ref={password}></input>
                </label>
                <input type="submit" onClick={loginhandler} value="log in to this account"></input>
            </form>
        </div>
    )
}
