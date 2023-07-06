import axios from "axios";
import { useEffect, useState } from "react";
import AddPost from "../components/AddPost";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";


const API_URL = "http://localhost:5005";

function Posts(){

    const[ postsList, setPostsList ] = useState([]);
    const { user } = useContext(AuthContext)


    const getAllPosts = () => {
        axios
          .get(`${process.env.REACT_APP_API_URL}/api/posts`,{headers:{"content-type":"application/json"}})
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
        <div className="Posts">
            
                <AddPost refreshPosts={getAllPosts} />
            
           

            <h2>Posts</h2>
            

            {/* <div class="row row-example"> */}
            <div className="grid" class="col-sm-12 col-md-12 col-lg-12 col-xl-12">
        

            {postsList.map((post) => {
                console.log(post);
                return(

                    <div key={post._id} className="post card" >
                        {/* class="col-sm-12 col-md-6 col-lg-6 col-xl-6" */}
                        <div class="col-example">
                        <h4>{post.title}</h4>
                        {/* <p>{post.description}</p> */}
                        <Link to={`/posts/${post._id}`}>
              <button type="button" className="btn btn-secondary">Read Post</button>
            </Link>
                    </div>
                    </div>
                )
            })}
            </div>
        </div>

      
    )
}
export default Posts;