// src/pages/HomePage.js
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";


function HomePage() {
  const { user } = useContext(AuthContext)
  return (
    <div>
      <h1>Home Page</h1>
      {user ?
        <Link to="/requests">
          <button>Create an Empathy Request</button>
        </Link> :
        <Link to="/login">
          <button>Create an Empathy Request</button>
        </Link>
      }
    </div>
  );
}

export default HomePage;
