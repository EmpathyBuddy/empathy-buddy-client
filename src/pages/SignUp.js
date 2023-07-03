import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


const API_URL = "http://localhost:5005";


function SignUp (props){
const [email, setEmail] = useState ("");
const [password, setPassword] = useState ("");
const [name, setName] = useState("");
const [errorMessage, setErrorMessage] = useState(undefined);

const navigate = useNavigate();

const handleEmail = (e) => setEmail(e.target.value);
const handlePassword = (e) => setPassword(e.target.value);
const handleName = (e) => setName(e.target.value);

const handleSignUpSubmit = (e)=> {
    e.preventDefault();
     // Create an object representing the request body
     const requestBody = { email, password, name };

 // Make an axios request to the API
    // If the POST request is a successful redirect to the login page
    // If the request resolves with an error, set the error message in the state
    
    axios
    .post(`${API_URL}/auth/signup`, requestBody)
    .then((response)=>{
        navigate('/login');
    })
    .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      })

};


    return (
        <div className="SignUp">
            <h1> Sign Up to find empathy!</h1>

            
      <form onSubmit={handleSignUpSubmit}>
        <label>Email:</label>
        <input 
          type="email"
          name="email"
          value={email}
          onChange={handleEmail}
        />
<br />
        <label>Password:</label>
        <input 
          type="password"
          name="password"
          value={password}
          onChange={handlePassword}
        />
<br />
        <label>Name:</label>
        <input 
          type="text"
          name="name"
          value={name}
          onChange={handleName}
        />
<br />
        <button type="submit">Sign Up</button>
      </form>

      { errorMessage && <p className="error-message">{errorMessage}</p> }

      <p>Already have account?</p>
      <Link to={"/login"}> Login</Link>
        </div>
    )
    
}
export default SignUp