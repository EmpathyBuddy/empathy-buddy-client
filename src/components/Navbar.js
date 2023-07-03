import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

function Navbar() {

  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <nav>
      <Link to="/">
        <button>Home</button>
      </Link>

      <Link to="/requests">
        <button>Empathy requests</button>
      </Link>
      <Link to="/guidelines">
        <button>Guidelines</button>
      </Link>
      <Link to="/feelings-card">
        <button>Feelings and needs card</button>
      </Link>
      <Link to="/posts">
        <button>Posts</button>
      </Link>

      {/* LOGIN PART */}
      {isLoggedIn && (
        <div>
          <button onClick={logOutUser}>Logout</button>
          <span>{user && user.name}</span>
        </div>
      )}
      {!isLoggedIn && (
        <>
          <Link to="/signup"> <button>Sign Up</button> </Link>
          <Link to="/login"> <button>Login</button> </Link>
        </>
      )}
      
    </nav>
  );
}

export default Navbar;
