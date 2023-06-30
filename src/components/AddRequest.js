import { useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:5005";

function AddRequest(props) {
  const [feeling, setFeeling] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [phone, setPhone] = useState("");
  const [language, setLanguage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = { feeling, date, time, phone, language };

    const getRequest = () => {
      axios
        .post(`${API_URL}/api/requests/${requestId}`)

        .then((response) => {
          // Reset the state
          setFeeling("");
          setDate("");
          setTime("");
          setPhone("");
          setLanguage("");
          props.refreshRequests();
        })
        .catch((error) => console.log(error));
    };

    return (
      <div className="AddRequest">
        <h3>Add Request</h3>

        <form onSubmit={handleSubmit}>
         
          <label>Im feeling:</label>
          <input
            type="text"
            name="feeling"
            value={feeling}
            onChange={(e) => setFeeling(e.target.value)}
          />
          <label>My preferred date:</label>
          <textarea
            type="text"
            name="date"
            value={date}
            onChange={(e) => setDescription(e.target.value)}
          />
          <label>My preferred time:</label>
          <textarea
            type="text"
            name="time"
            value={time}
            onChange={(e) => setDescription(e.target.value)}
          />
          <label>My phone:</label>
          <textarea
            type="text"
            name="phone"
            value={phone}
            onChange={(e) => setDescription(e.target.value)}
          />
          <label>Language:</label>
          <textarea
            type="text"
            name="language"
            value={language}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button type="submit">Request Empathy</button>
        </form>
      </div>
    );
  };

}
export default AddRequest;

