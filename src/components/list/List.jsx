import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from "@material-ui/icons";
import "./list.scss";
import { useRef, useState } from "react";
import ListItem from "../listItem/ListItem";

const List = () => {
    const listRef = useRef(null);
    const [slideNumber, setSlideNumber] = useState(0);

    const handleClick = (direction) => {
        let distance;
        if (listRef.current) 
        {
            distance = listRef.current.getBoundingClientRect().x - 50;
            if (direction === "left" && slideNumber > 0) 
            {
                listRef.current.style.transform = `translateX(${ distance + 230}px)`;
                setSlideNumber(slideNumber - 1);

            }
            if (direction === "right" && slideNumber < 4)
            {
                listRef.current.style.transform = `translateX(${ distance - 230}px)`;
                setSlideNumber(slideNumber + 1);
            }
        }
    } 

    return (
        <div className="list">
            <span className="listTitle">
                Continue to Watch
            </span>
            <div className="wrapper">
                <ArrowBackIosOutlined 
                className="sliderArrow left" 
                onClick={() => handleClick("left")} 
                style={{display: slideNumber<=0 && "none"}}
                />
                <div className="container" ref={listRef}>
                    <ListItem index={0}/>
                    <ListItem index={1}/>
                    <ListItem index={2}/>
                    <ListItem index={3}/>
                    <ListItem index={4}/>
                    <ListItem index={5}/>
                    <ListItem index={6}/>
                    <ListItem index={7}/>
                    <ListItem index={8}/>
                    <ListItem index={9}/>
                </div>
                <ArrowForwardIosOutlined 
                className="sliderArrow right" 
                onClick={() => handleClick("right")} 
                style={{display: slideNumber >=4 && "none"}}
                />
            </div>
        </div>
    )
}

export default List
