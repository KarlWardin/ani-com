import { useState,useEffect, useContext } from "react"
import {AuthContext} from "../../Context/AuthContext"
import axios from "axios";
import "./feed.css"
import Post from "./Post"
import Share from "./Share"

export default function Feed() {
    const [ posts,setPosts] = useState([]);
    const {user} = useContext(AuthContext);
    
    useEffect(() => {
        const fetchPosts = async()=>{
            try{
                const res = await axios.get(`/posts/timeline/${user._id}`);
                setPosts(res.data);
            }catch(err){
                console.log(err);
            }
        }
        fetchPosts();
    }, [user])
    return (
        <div className="feedContainer">
            <Share/>
            {posts.map((post)=>{return <Post key={post._id} post={post}/>})}
        </div>
    )
}
