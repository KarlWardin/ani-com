import "./homepage.css"
import Chat from "../../Components/chat/Chat.js"
import Feed from "../../Components/feed/Feed.js"
import News from "../../Components/news/News.js"
import Login from "../../Components/login/Login"
import Profile from "../../Components/profile/Profile"
import { Route,  Switch } from "react-router-dom"

export default function homepage() {
    return (
        <div className="homeContainer">
            
                <div className="leftHomeContainer">
                    <Switch>
                        <Route exact path="/"><Feed/></Route>
                        <Route path="/login"><Login /></Route>
                        <Route path="/profile"><Profile/></Route>
                        <Route path="/chat"><Chat/></Route>
                    </Switch>
                </div>
                <div className="rightHomeContainer">
                    <News />
                </div>
        
        </div>
    )
}
