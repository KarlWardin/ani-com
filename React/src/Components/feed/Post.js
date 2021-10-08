import "./post.css";
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import Comment from "./Comment";
import SendIcon from '@material-ui/icons/Send';
import { useState, useEffect } from "react";
import { format } from "timeago.js";
import axios from "axios";


export default function Post({ post }) {
    //like functionality usung useeffect hook
    const [like, setLike] = useState(post.likes.length);
    const [isLiked, setIsLiked] = useState(false);
    const [user, setUser] = useState({});

    const likeHandler = () => {
        setLike(isLiked ? like - 1 : like + 1);
        setIsLiked(!isLiked);
    }

    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`/users/${post.userId}`);
            setUser(res.data);
        };
        fetchUser();
    }, [post.userId]);

    return (
        <div className="postContainer">
            <div className="postWrapper">
                <div className="postLeft">
                    <div className="postPoster">
                        <span className="postUsername">{user.username}</span>
                        <span className="postDate">{format(post.createdAt)}</span>
                        <button className="followButton">follow</button>
                    </div>
                    <div className="postDescription">
                        <p>{post.description}</p>
                    </div>
                    <img className="postImage" src={post.image} alt=""></img>
                    <div className="postLikes">
                        <ThumbUpAltIcon className="likeButton" onClick={likeHandler} />
                        <span className="likeCount">{like} likes</span>
                    </div>
                </div>
                <div className="postRight">
                    <div className="comments">
                        <Comment />
                        <Comment />
                        <Comment />
                        <Comment />
                        <Comment />
                    </div>
                    <div className="newComment">
                        <input className="commentInput"></input>
                        <SendIcon className="commentButton" />
                    </div>
                </div>
            </div>
        </div>
    )
}
