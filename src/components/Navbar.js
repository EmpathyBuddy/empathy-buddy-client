import { Link } from "react-router-dom";

function Navbar() {
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

      {/*LOGIN/SIGNUP /LOGOUT */}
    </nav>
  );
}

export default Navbar;
