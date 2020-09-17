import React from 'react';
import './Widgets.css';
import SearchIcon from '@material-ui/icons/Search';
import {TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed} from 'react-twitter-embed';

function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon"/>
                <input className="widgets__inputField" placeholder="Search Twitter" type="text"/>
            </div>

            <div className="widgets__widgetContainer">
                <h2>What's Happening !!</h2>
                <TwitterTweetEmbed tweetId={"1306272481540337664"}/>
                <TwitterTimelineEmbed
                sourceType="profile"
                screenName="KanganaTeam"
                options={{height:400}}/>

                <TwitterShareButton
                url={"https://www.instagram.com/yash._1999/"}
                options={{text: "Yash !!", via:"239yash"}}
                />
            </div>
        </div>
    );
}

export default Widgets;