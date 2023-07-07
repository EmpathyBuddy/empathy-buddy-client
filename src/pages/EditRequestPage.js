import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const API_URL = "http://localhost:5005";

function EditRequest(){
    const [ feeling, setFeeling] = useState('');
    const [ date, setDate ] = useState('');
    const [ phone, setPhone] = useState('');
    const [ language, setLanguage] = useState('');

    const storedToken = localStorage.getItem('authToken')

    const {requestId} = useParams();
    const navigate = useNavigate();

    //Get the data from the api
    const getRequest = () => {
        axios
        .get(`${process.env.REACT_APP_API_URL}/api/requests/${requestId}`)
        .then((response)=> {
        //   console.log(response);
            const oneRequest = response.data;
            setFeeling(oneRequest.feeling);
            setDate(oneRequest.date);
            setPhone(oneRequest.phone);
            setLanguage(oneRequest.language);
        })
        .catch((error) => console.log(error))
    }
    useEffect(()=>{
        getRequest();
    }, [])

    // Submit the data after the update changes
    const handleFormSubmit = (e) => {
        e.preventDefault();
        
        const requestBody = {feeling, date, phone, language}
        axios
          .put(`${process.env.REACT_APP_API_URL}/api/requests/${requestId}`, requestBody, {headers: {Authorization: `Bearer ${storedToken}`}})
          .then((response) => {
            navigate(`/requests/${requestId}`)
          })
          .catch(e => console.log(e))
    }

    // Delete Request
    const deleteRequest = () => {
        axios
          .delete(`${process.env.REACT_APP_API_URL}/api/requests/${requestId}`, {headers: {Authorization: `Bearer ${storedToken}`}})
          .then(()=>{
            navigate('/requests');
          })
          .catch(e=>console.log(e))
    }

    return(
        <div className="formContainer">

        <div className="Login article">
            <h2>Edit the Request</h2>

            <form onSubmit={handleFormSubmit}>
                <label>Feelings:</label>
                <input
                    type="text"
                    name="feeling"
                    value={feeling}
                    onChange={(e)=>setFeeling(e.target.value)}/>
                <br></br>
                
                <label>Date:</label>
                <input
                    type="datetime-local"
                    name="date"
                    value={date}
                    onChange={(e)=>setDate(e.target.value)}/>
                    <br></br>
            
                
                <label>Phone:</label>
                <input
                    type="text"
                    name="phone"
                    value={phone}
                    onChange={(e)=>setPhone(e.target.value)}/>
                <br></br>
                
                <label>Language:</label>
                <input
                    type="text"
                    name="language"
                    value={language}
                    onChange={(e)=>setLanguage(e.target.value)}/>
                <br></br>
                
                <div className="editbuttons">
                    <button  type="submit">
                        Update Request
                    </button>
                </div>
            </form>
                    <button className="editbuttons" onClick={deleteRequest}>Delete Request</button>
        </div>
        </div>
    )
}

export default EditRequest;