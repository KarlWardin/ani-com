import "./share.css";
import PhotoIcon from '@material-ui/icons/Photo';

export default function Share() {
    return (
        <div>
            <div className="shareContainer">
                <div className="shareWrapper">
                    <div className="shareTop">
                        <textarea className="shareInput" placeholder="what's on your mind?"></textarea>
                    </div>
                    <hr />
                    <div className="shareBottom">
                        <div className="photoIcon">
                            <PhotoIcon htmlColor="blue" />
                            <span>Add Photos</span>
                        </div>

                        <button className="shareButton">share</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
