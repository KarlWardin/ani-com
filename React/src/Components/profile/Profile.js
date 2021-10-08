import "./profile.css"
import {useContext} from "react"
import {AuthContext} from "../../Context/AuthContext"

export default function Profile() {
    const {user} = useContext(AuthContext);
    return (
        <div>
            profile
        </div>
    )
}
