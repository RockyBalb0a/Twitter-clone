import React from 'react';
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from '@mui/icons-material/Search';

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type = "text" />
      </div>
      
      <div className="widgets__widgetContainer">
        <h2>What's happening</h2> 
        
        <TwitterTweetEmbed tweetId={"1567757475062988801"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="itsSaulGoodman"
          options={{height: 400}}
        />

        <TwitterShareButton
          url={"amzn.to/3cPdhuJ"}
          options={{ text: "I'm that guy, that knows a guy, that knows another guy.", via: "itsSaulGoodman"}}
        />
      </div>
    </div>
  );
}

export default Widgets;