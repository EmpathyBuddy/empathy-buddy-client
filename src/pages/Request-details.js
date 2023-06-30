import axios from "axios"
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";


const API_URL = "http://localhost:5005";        // <== ADD


function RequestDetails (){
    const [request, setRequest] = useState([]);

    const {requestId} = useParams()
    // console.log(requestId)

    const getRequest = () => {
      axios
        .get(
          `${API_URL}/api/requests/${requestId}`
          // { headers: { Authorization: `Bearer ${storedToken}` } }
        )

        .then((response) => {
          const oneRequest = response.data;
          setRequest(oneRequest);
        })
        .catch((error) => console.log(error));
    };


    useEffect(()=> {                   // <== ADD AN EFFECT
        getRequest();
      }, [] );

    //  console.log(request) 


return(
<div className="RequestDetails" >
   
    <h3>{request.feeling}</h3>
    <p>Would love to talk on :{request.date}</p>
    <p> at {request.time} hours</p>
    <p>We can call on this number {request.phone}</p>
    <p>I speak {request.language}</p>
   


    <Link to="/requests">
        <button>Back to Requests</button>
      </Link>

     
       <Link to={`/requests/edit/${requestId}`}>
        <button>Edit Request</button>
      </Link>  


</div>
)
}

export default RequestDetails