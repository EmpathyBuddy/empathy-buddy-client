import axios from "axios";
import { useEffect, useState } from "react";

const API_URL = "http://localhost:5005";

function Posts(){

    const[ postsList, setPostsList ] = useState([]);

    const getAllPosts = () => {
        axios
          .get(`${API_URL}/api/posts`)
          .then((response)=>{
            // console.log(response.data);
            return setPostsList(response.data)
          })
          .catch(e => console.log(e))
    }

    useEffect(()=>{
        getAllPosts()
    }, [])

    // console.log(postsList);

    return(
        <div>
            <h3>Posts:</h3>
            <hr></hr>
            {postsList.map((post) => {
                console.log(post);
                return(
                    <div key={post._id}>
                        <h3>{post.title}</h3>
                        <p>{post.description}</p>
                        <hr></hr>
                    </div>
                )
            })}
        </div>
    )
}
export default Posts;