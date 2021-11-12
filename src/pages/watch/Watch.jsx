import { ArrowBackOutlined } from "@material-ui/icons";
import "./watch.scss";

import { NavLink } from 'react-router-dom';

const Watch = () => {
    return (
        <div className="watch">
            <div className="back">
                <NavLink exact to="/" style={{ textDecoration: "none", color: "white" }}>
                    <ArrowBackOutlined className="icon" />
                </NavLink>
                Home
            </div>
            <video
                className="video"
                autoPlay
                progress
                controls
                src="/videos/money-heist.mp4"
            />
        </div>
    )
}

export default Watch
