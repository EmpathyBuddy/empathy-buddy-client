// src/pages/HomePage.js
import { Link } from "react-router-dom";


function HomePage() {
    return (
      <div>
        <h1>Home Page</h1>
        <Link to="/requests">
        <button>Create an Empathy Request</button>
      </Link>
      </div>
    );
  }
  
  export default HomePage;
  