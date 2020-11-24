import React from "react";
import Moment from "react-moment";
import {Link} from "react-router-dom";
import DefaultProfileImg from "../images/default-profile-image.jpg";

const MessageItem = props => {
    const {date,username,profileImgUrl,text} = props;
    return(
        <div>
            <img src={profileImgUrl || DefaultProfileImg} 
                alt={username} width="100" height="100" className="timeline-image"/>
            <div className="message-area">
                <Link to="/">@{username} &nbsp;</Link>
                <span className="text-muted">
                    <Moment className="text-muted" format="Do MMM YYYY">
                        {date}
                    </Moment>
                </span>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default MessageItem;