import "./signup.css"

export default function SignUp() {
    return (
        <div className="signupContainer">
            <form className="signupForm">
                <label for="name">User name :
                    <input type="text" className="name" name="name"></input>
                </label>
                <label for="password">Password :
                    <input type="password" className="password" name="password"></input>
                </label>
                <label for="cnfpassword">Confirm Password :
                    <input type="password" className="cnfpassword" name="cnfpassword"></input>
                </label>
                <label for="status">Status :
                    <input type="text" className="status" name="status"></input>
                </label>
                <input type="submit" value="Craete account"></input>
            </form>
        </div>
     );
}
