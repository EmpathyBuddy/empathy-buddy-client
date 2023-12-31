import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const API_URL = "http://localhost:5005";

function AddPost (props) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState ("");


    const handleSubmit =(e) => {
        e.preventDefault();
        const postBody = { title, description };
        const storedToken = localStorage.getItem('authToken')
    
        axios
        .post(`${process.env.REACT_APP_API_URL}/api/posts`, postBody, {headers: {Authorization: `Bearer ${storedToken}`}})
        .then((response) =>{
            setTitle("");
            setDescription("");
            props.refreshPosts();
        })
        .catch((error) => console.log(error));
    }

    return(
        <div className="AddPost card">
            <h3>Add a post</h3>
            <form onSubmit={handleSubmit}>

            <label>Title</label>
          <textarea
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label>Your Post</label>
          <textarea
            type="text"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button type="submit">Publish</button>
            </form>

        </div>

    )



}
export default AddPost;
