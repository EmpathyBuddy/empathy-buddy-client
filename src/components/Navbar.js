import { useContext } from "react";
import { NAvLink, NavLink } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

function Navbar() {

  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <nav>
 

 


 <NavLink to="/">Home</NavLink>
 <NavLink to="/requests">Empathy requests</NavLink>
 <NavLink to="/guidelines">Guidelines</NavLink>
 <NavLink to="/feelings-card">Feelings and Needs</NavLink>
 <NavLink to="/posts">Posts</NavLink>

      {/* LOGIN PART */}
      {isLoggedIn && (
        <div>
          <button onClick={logOutUser}>Logout</button>
          <span>{user && user.name}</span>
        </div>
      )}
      {!isLoggedIn && (
        <>
          <NavLink to="/signup"> Sign Up </NavLink>
          <NavLink to="/login">Login </NavLink>
        </>
      )}
      
    </nav>
  );
}

export default Navbar;
