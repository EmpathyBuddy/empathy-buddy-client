import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const API_URL = "http://localhost:5005";

function AddRequest(props) {
  const [feeling, setFeeling] = useState("");
  const [date, setDate] = useState("");
  const [phone, setPhone] = useState("");
  const [language, setLanguage] = useState("");
    
  const {requestId} = useParams()

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = { feeling, date, phone, language };

      axios
        .post(`${API_URL}/api/requests`, requestBody)

        .then((response) => {
          // Reset the state
          setFeeling("");
          setDate("");
          setPhone("");
          setLanguage("");
          props.refreshRequests();
        })
        .catch((error) => console.log(error));
    }    




    return (
      <div className="AddRequest">
        <h3>Add Request</h3>

        <form onSubmit= {handleSubmit}>
         
          <label>Im feeling:</label>
          <input
            type="text"
            name="feeling"
            value={feeling}
            onChange={(e) => setFeeling(e.target.value)}
          />
          <label>My preferred date:</label>
          <input type="datetime-local"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
         
          <label>My phone:</label>
          <textarea
            type="text"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <label>Language:</label>
          <textarea
            type="text"
            name="language"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          />
          <button type="submit">Request Empathy</button>
        </form>
      </div>
    );
  };


export default AddRequest;

