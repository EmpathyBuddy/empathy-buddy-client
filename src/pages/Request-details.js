import '../styles/Details.css'
import axios from "axios"
import { Link, useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/auth.context";


const API_URL = "http://localhost:5005";


function RequestDetails() {
  const [request, setRequest] = useState([]);
  const { user } = useContext(AuthContext)
  const { requestId } = useParams()
  // console.log(requestId)

  const getRequest = () => {
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/api/requests/${requestId}`
        // { headers: { Authorization: `Bearer ${storedToken}` } }
      )

      .then((response) => {
        const oneRequest = response.data;
        setRequest(oneRequest);
      })
      .catch((error) => console.log(error));
  };


  useEffect(() => {                   // <== ADD AN EFFECT
    getRequest();
  }, []);

  //  console.log(request) 


  return (
    <div className='detailContainer'>

    <div className="RequestDetails card" >

      <h3>{request.feeling}</h3>
      <p>Would love to talk on :{request.date}</p>
      <p>We can call on this number {request.phone}</p>
      <p>I speak {request.language}</p>

      {user && user._id === request.owner &&
        <Link to={`/requests/edit/${requestId}`}>
          <button>Edit Request</button>
        </Link>
      }

      <Link to="/requests">
        <button>Back to Requests</button>
      </Link>

    </div>
    </div>
  )
}

export default RequestDetails