import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@mui/material";
import db from './firebase';

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const sendTweet = (e) => {
        e.preventDefault();

        db.collection("posts").add({
            displayName: "Jimmy McGill",
            username: "itsSaulGoodman",
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: "https://www.kindpng.com/picc/m/81-817784_better-call-saul-saul-goodman-hd-png-download.png"
        });

        setTweetMessage("");
        setTweetImage("");
    };

  return (
    <div className = "tweetBox">
        <form>
            <div className = "tweetBox__input">
                <Avatar src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeUoQObY1S-fcwokgS3PcQo_KWnYqJow8U53YbDWH7pw&s"></Avatar>
                <input
                    onChange={(e) => setTweetMessage(e.target.value)}
                    value={tweetMessage}
                    placeholder="What's happening?" 
                    type = "text"
                />
            </div>
            <input
                value={tweetImage}
                onChange={(e) => setTweetImage(e.target.value)}
                className = "tweetBox__imageInput"
                placeholder = "Optional: Enter image URL"
                type = "text"
            />

            <Button onClick = {sendTweet} type = "submit" className="tweetBox__tweetButton">Tweet</Button>
        </form>
    </div>
  );
}

export default TweetBox;