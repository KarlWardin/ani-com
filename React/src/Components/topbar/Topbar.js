import "./topbar.css"
import SearchIcon from '@material-ui/icons/Search';
import { Link } from "react-router-dom"
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";

export default function Topbar() {
    const { user } = useContext(AuthContext);
    return (
        <div className="topbarContainer">
            <div className="leftTopbar">
                <Link to="/" style={{ "textDecoration": "none", "color": "yellow" }}>
                    <span className="appNmae">Ani-Com</span>
                </Link>
            </div>
            <div className="middleTopbar">
                <div className="searchBar">
                    <SearchIcon className="searchIcon" />
                    <input placeholder="search by anime name" className="searchInput"></input>
                </div>
            </div>
            <div className="rightTopbar">
                {user ?
                    <Link to="/profile" style={{ "textDecoration": "none", "color": "yellow" }}>{user.username}</Link>
                    : <Link to="/login" style={{ "textDecoration": "none", "color": "yellow" }}>Log In</Link>
                }
            </div>
        </div>
    )
}
