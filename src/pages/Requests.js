import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const API_URL = "http://localhost:5005";

function Requests(){

    const [ requestsList, setRequestsList] = useState([]);

    const getAllRequests = () => {
        axios
          .get(`${API_URL}/api/requests`)
          .then((response)=> {
            // console.log(response);
            return setRequestsList(response.data)})
          .catch((error) => console.log(error))
    }

    useEffect(()=>{
        getAllRequests();
    }, []);

    // console.log(requestsList);

    return(
        <div>
            <h1>Requests List:</h1>
            <hr></hr>
            {requestsList.map((request)=>{
                // console.log(request);
                return(
                    <div key={request._id}>
                        <h3>{request.feeling}</h3> <br />
                        <p>{request.date}</p> <br />
                        <p>{request.time}</p> <br />
                        <p>{request.phone}</p>
                        <p>{request.language}</p>
                        <Link to={`/requests/${request._id}`}>
                        <button>details</button>
                        </Link>

                        <hr></hr>
                    </div>
                )
            })}
        </div>
    )
}
export default Requests;