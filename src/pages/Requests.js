import '../styles/Requests.css'

import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AddRequest from "../components/AddRequest";
import { AuthContext } from "../context/auth.context";
const API_URL = "http://localhost:5005";

function Requests() {

    const [requestsList, setRequestsList] = useState([]);
    const { user } = useContext(AuthContext)

    const getAllRequests = () => {
        axios
            .get(`${process.env.REACT_APP_API_URL}/api/requests`,{headers:{"content-type":"application/json"}})
            .then((response) => {
                // console.log(response);
                return setRequestsList(response.data)
            })
            .catch((error) => console.log(error))
    }

    useEffect(() => {
        getAllRequests();
    }, []);

    // console.log(requestsList);


    return (
        <div className="Requests">
            {user &&
                <AddRequest refreshRequests={getAllRequests} />
            }

            <h1>Pending empahty requests</h1>
            <div className='requestList row'>

                {requestsList.map((request) => {
                    // console.log(request);
                    return (
                        <div key={request._id} className='request card col-example'>
                            <h3>{request.feeling}</h3> <br />
                            <p>{request.date.toLocaleString()}</p> <br />
                            {/* We could try use .toLocaleString() for a better visual date */}
                            <Link to={`/requests/${request._id}`}>
                                <button>Details</button>
                            </Link>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}
export default Requests;
//