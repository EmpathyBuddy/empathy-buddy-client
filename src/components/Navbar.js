import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

function Navbar() {

  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <nav className="navbar">

      <NavLink to="/">EmpathyBuddy</NavLink>
      <NavLink to="/requests">Empathy requests</NavLink>
      <NavLink to="/guidelines">Guidelines</NavLink>
      <NavLink to="/feelings-card">Feelings and Needs</NavLink>
      <NavLink to="/posts">Posts</NavLink>

      {/* LOGIN PART */}
      {isLoggedIn && (
        <div>
          <button onClick={logOutUser}>Log Out</button>
          <span>Hello {user && user.name}!</span>
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
