import React from 'react';
import "./Post.css";
import { Avatar } from "@mui/material";
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';

function Post({ displayName, username, verified, text, image, avatar}) {
  return (
  <div className="post">
    <div className="post__avatar">
        <Avatar src={avatar}></Avatar>
    </div>
    <div className="post__body">
        <div className="post__header">
            <div className = "post__headerText">
                <h3>
                    {displayName} {" "}
                    <span className = "post__headerSpecial">
                        {verified && <VerifiedIcon className="post__badge" />} @{username}
                    </span>
                </h3>
            </div>
            <div className="post__headerDescription">
                <p>{text}</p>
            </div>
        </div>
        <img src="https://media3.giphy.com/media/l0EwYGlvQ7STj3wyc/giphy.gif?cid=ecf05e47vd2iep9sl63646p77fc03aoguow3d36bxbims8mj&rid=giphy.gif&ct=g" alt ="gif" />
        <div className="post__footer">
            <ChatBubbleOutlineIcon fontSize="small" />
                <RepeatIcon fontSize="small" />
                <FavoriteBorderIcon fontSize="small" />
                <PublishIcon fontSize="small" />
        </div>
    </div>
  </div>
  );
}

export default Post;