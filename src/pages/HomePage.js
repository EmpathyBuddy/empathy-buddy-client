// src/pages/HomePage.js
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
// import 'bootstrap/dist/css/bootstrap.css';

function HomePage() {
  const { user } = useContext(AuthContext)
  return (
    <div>
      <h1>Home Page</h1>
      <button type="button" className="btn btn-secondary">Probando</button>
      {user ?
        <Link to="/requests">
          <button >Create an Empathy Request</button>
        </Link> :
        <Link to="/login">
          <button type="button" className="btn btn-primary">Create an Empathy Request</button>
        </Link>
      }
    </div>
  );
}

export default HomePage;
