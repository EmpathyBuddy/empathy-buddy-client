import axios from "axios"
import { Link, useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/auth.context";


const API_URL = "http://localhost:5005";        // <== ADD


function PostDetails() {

    const[post, setPost] = useState ([]);
    const { user } = useContext(AuthContext)
    const { postId } = useParams()

    const getPost = () => {
        axios
          .get(
            `${process.env.REACT_APP_API_URL}/api/posts/${postId}`
            // { headers: { Authorization: `Bearer ${storedToken}` } }
          )
    
          .then((response) => {
            const onePost = response.data;
            setPost(onePost);
          })
          .catch((error) => console.log(error));
      };
    
    
      useEffect(() => {                   // <== ADD AN EFFECT
        getPost();
      }, []);
    
    
    console.log(user)
      return (
        <div className="PostDetails" >
            
          <h3>{post.title}</h3>
          <p>{post.description}</p>
          {/* <p>published by: {post.user}</p> */}
          
    
    
    
          <Link to="/posts">
            <button>Back to Posts</button>
          </Link>
    
          
            {/* <Link to={`/posts/edit/${postId}`}>
              <button>Edit Post</button>
            </Link> */}
          
    
    
        </div>
      )
    }
    
    export default PostDetails