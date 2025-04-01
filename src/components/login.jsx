import { useState } from "react";

function login(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return(
        <div className="login">
            <h1>Login</h1>
            <h2>Login to your account</h2>
            <form>
                <label for="username" style={{ marginRight: "10px" }}>Username:</label>
                <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} /><br/>
                <label for="password" style={{ marginRight: "10px" }}>Password:</label>
                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} /><br/><br/>
                <input type="submit" value="Login" />
            </form>



            
        </div>
    )
}
export default login;