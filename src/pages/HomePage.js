// src/pages/HomePage.js
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
// import 'bootstrap/dist/css/bootstrap.css';

function HomePage() {
  const { user } = useContext(AuthContext)
  return (
    <div className ="HomePage">
      <h1>EmpathyBuddy</h1>
      <h3>A platform where you can give and receive empathy.
</h3>
      {user ?
        <Link to="/requests">
          <button >Create an Empathy Request</button>
        </Link> :
        <Link to="/login">
          <button type="button" className="btn btn-secondary">Create an Empathy Request</button>
        </Link>
      }
    </div>
  );
}

export default HomePage;
