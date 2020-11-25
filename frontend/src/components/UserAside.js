import React from "react";
import DefaultProfileImg from "../images/default-profile-image.jpg";

const UserAside = props => {
    return(
        <aside className="col-sm-2">
            <div className="panel panel-default">
                <div panel-body>
                    <img 
                        src={props.profileImgUrl || DefaultProfileImg} 
                        alt={props.username}
                        className="img-thumbnail"
                        width="200"
                        height="200"
                    />
                </div>

            </div>
        </aside>
    ) 
}
export default UserAside;