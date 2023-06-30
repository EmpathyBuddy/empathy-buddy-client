import axios from "axios"
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const API_URL = "http://localhost:5005";        // <== ADD


function RequestDetails (){
    const [request, setRequest] = useState(null);

    const {requestId} = useParams()
    // console.log(requestId)

    const getRequest = () => {
        axios
      .get(
        `${API_URL}/api/requests/${requestId}`,
        // { headers: { Authorization: `Bearer ${storedToken}` } }
      )

      .then((response) => {
        const oneRequest = response.data;
        setRequest(oneRequest);
      })
      .catch((error) => console.log(error));

    }


    useEffect(()=> {                   // <== ADD AN EFFECT
        getRequest();
      }, [] );

     console.log(request) 


return(
<div>
<p>Hello worldest</p>

</div>
)
}

export default RequestDetails