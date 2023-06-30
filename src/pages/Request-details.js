import axios from "axios"
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const API_URL = "http://localhost:5005";        // <== ADD


function RequestDetails (props){
    const [request, setRequest] = useState(null);

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

     console.log(request) 


return(
<div>
    <h2>{request.feeling}</h2>
    <p>{request.date}</p>
    <p>{request.time}</p>
    <p>{request.phone}</p>
    <p>{request.language}</p>
   



</div>
)
}

export default RequestDetails