import React from 'react';
import "./TweetBox.css";
import { Avatar, Button } from "@mui/material";
function TweetBox() {
  return <div className = "tweetBox">
    <form>
        <div className = "tweetBox__input">
            <Avatar src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeUoQObY1S-fcwokgS3PcQo_KWnYqJow8U53YbDWH7pw&s"></Avatar>
            <input placeholder="What's happening?" type = "text" />
        </div>
        <input
            className = "tweetBox__imageInput"
            placeholder = "Enter__imageInput"
            type = "text"
        />

        <Button className="tweetBox__tweetButton">Tweet</Button>
    </form>
    </div>;
}

export default TweetBox;