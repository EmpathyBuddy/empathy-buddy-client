import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const API_URL = "http://localhost:5005";

function EditRequest(){
    const [ feeling, setFeeling] = useState('');
    const [ date, setDate ] = useState('');
    const [ time, setTime ] = useState('');
    const [ phone, setPhone] = useState('');
    const [ language, setLanguage] = useState('');

    const {requestId} = useParams();
    const navigate = useNavigate();

    //Get the data from the api
    const getRequest = () => {
        axios
        .get(`${API_URL}/api/requests/${requestId}`)
        .then((response)=> {
        //   console.log(response);
            const oneRequest = response.data;
            setFeeling(oneRequest.feeling);
            setDate(oneRequest.date);
            setTime(oneRequest.time);
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
        
        const requestBody = {feeling, date, time, phone, language}

        axios
          .put(`${API_URL}/api/requests/${requestId}`, requestBody)
          .then((response) => {
            navigate(`/requests/${requestId}`)
          })
          .catch(e => console.log(e))
    }

    // Delete Request
    const deleteRequest = () => {
        axios
          .delete(`${API_URL}/api/requests/${requestId}`)
          .then(()=>{
            navigate('/requests');
          })
          .catch(e=>console.log(e))
    }

    return(
        <div>
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
                    type="text"
                    name="date"
                    value={date}
                    onChange={(e)=>setDate(e.target.value)}/>
                    <br></br>
                
                <label>Time:</label>
                <input
                    type="text"
                    name="time"
                    value={time}
                    onChange={(e)=>setTime(e.target.value)} />
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
                
                <button type="submit">
                    Update Request
                </button>
                <br></br>
            </form>
            <button onClick={deleteRequest}>Delete Request</button>
        </div>
    )
}

export default EditRequest;