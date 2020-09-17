import React, {useState} from 'react';
import './TweetBox.css';
import {Button, Avatar} from '@material-ui/core';
import db from './firebase';

function TweetBox() {
    const [tweet, setTweet] = useState('');
    const [img, setImg] = useState('');

    const send = (e) => {
        e.preventDefault();
        db.collection('posts').add({
            displayName: 'Yash Gupta',
            username: '239yash',
            text: tweet,
            avatar:"",
            verified:"true",
            img:img,
        });

        setImg('');
        setTweet('');
    };

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">

                    <Avatar src="" alt="avt"/>

                        <input placeholder="What's Happening?" value={tweet} onChange={(e) => (setTweet(e.target.value))} type="text"
                        />

                        <input placeholder="Optional: Enter Image URL" value={img} onChange={(e) => (setImg(e.target.value))} className="tweetBox__imageInput"
                        type="text"/>

                </div>
                <Button onClick={send} className="tweetBox__Button">Tweet</Button>
            </form>
        </div>
    );
}

export default TweetBox;
