import { useState } from "react";

function login(){
    const [username, setUsername] = useState("Hello User");
    const [password, setPassword] = useState("Hello passwrods");

    return(
        <div className="login">
            <h1>Login</h1>
            <h2>Login to your account</h2>
            <form>
                <label for="username">Username:</label><br/>
                <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} /><br/>
                <label for="password">Password:</label><br/>
                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} /><br/><br/>
                <input type="submit" value="Login" />
            </form>
        </div>
    )
}
export default login;