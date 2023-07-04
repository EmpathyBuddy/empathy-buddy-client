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
            .get(`${API_URL}/api/requests`)
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
        <div>
            {user &&
                <AddRequest refreshRequests={getAllRequests} />
            }
            <hr></hr>

            <h1>Pending requests:</h1>
            <hr></hr>
            {requestsList.map((request) => {
                // console.log(request);
                return (
                    <div key={request._id}>
                        <h3>{request.feeling}</h3> <br />
                        <p>{request.date}</p> <br />
                        {/* We could try use .toLocaleString() for a better visual date */}
                        <Link to={`/requests/${request._id}`}>
                            <button>Details</button>
                        </Link>

                        <hr></hr>
                    </div>
                )
            })}
        </div>
    )
}
export default Requests;
//