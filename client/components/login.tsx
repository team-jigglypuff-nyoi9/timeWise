import React, {useState} from "react"; 
import { UseDispatch, useDispatch } from "react-redux";
import { loginRequest } from "../redux/loginSlice";
//will use 'useState' to manage the state of the username and the password inputs 
//uses 'useDispatch' hook to send off actions to the redux store. 

//user will click login button and send a login request wit user and pass
const Login: React.FC =( ) => {
const [username , setUsername] = useState('');
const [password, setPassword] = useState('');
const dispatch = useDispatch();

const handleLogin = ()=> {
    dispatch (loginRequest({ username, password }))
}

return (
    <div>
        <input
        type ="text"
        value = {username}
        onChange = {(e) => setUsername (e.target.value)}
        placeholder = 'Username'
        />
        <input
        type = "password"
        value = {password}
        onChange = {(e)=> setPassword(e.target.value)}
        placeholder = "Password"
        />
        <button onClick = {handleLogin}>Login</button>
    </div>
);
};

export default Login; 

