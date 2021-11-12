import { Add, PlayArrow, ThumbDownOutlined, ThumbUpOutlined } from "@material-ui/icons";
import { useState } from "react";
import "./listItem.scss";
import { NavLink } from "react-router-dom";

const ListItem = (index) => {
    const [isHovered, setIsHovered] = useState(false);
    const trailer =
        "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
    // console.log(index);
    return (
        <div
            className="listItem"
            style={{ left: isHovered && index.index * 225 - 50 + index.index * 2.5 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img width="100%" src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" style={{ display: isHovered && "none" }} />

            {isHovered && (
                <>
                    <video src={trailer} autoPlay={true} loop></video>
                    <div className="itemInfo">
                        <div className="icons">
                            <NavLink exact to="/watch" style={{ textDecoration: "none", color: "white" }}>
                                <PlayArrow className="icon" />
                            </NavLink>
                            <Add className="icon" />
                            <ThumbUpOutlined className="icon" />
                            <ThumbDownOutlined className="icon" />
                        </div>
                        <div className="itemInfoTop">
                            <span>1 hour 14 mins</span>
                            <span className="limit">+16</span>
                            <span>1999</span>
                        </div>
                        <div className="desc">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, vel. Qui, magni. Possimus beatae cupiditate reprehenderit blanditiis nesciunt numquam incidunt.
                        </div>
                        <div className="genre">
                            Action
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default ListItem
