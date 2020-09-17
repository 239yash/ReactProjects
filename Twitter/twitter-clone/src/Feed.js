import React, {useState, useEffect} from 'react';
import './Feed.css';
import TweetBox from './TweetBox';
import Post from './Post';
import db from './firebase';
import FlipMove from 'react-flip-move';

function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts').onSnapshot(snapshot => 
        (setPosts(snapshot.docs.map(doc => doc.data()))
        ))
    }, []);

    return (
        <div className="feed">
            <div className="feed__header">
                <h1>Home</h1>
            </div>
            <TweetBox/>

            <FlipMove>
                { posts.map(post => (
                    <Post
                    key={post.text}
                    displayName={post.displayName} 
                    username={post.username}
                    verfied={post.verified}
                    text={post.text}
                    avatar={post.avatar}
                    img={post.img}
                    /> 
                ))
                }
            </FlipMove>
        </div>
    );
}

export default Feed;
