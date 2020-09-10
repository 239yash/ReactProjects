import React, {useState, useEffect} from 'react'
import './Post.css';
import Avatar from '@material-ui/core/Avatar';
import {db} from './firebase';
import firebase from 'firebase';

function Post({username, caption, imageurl, postID, user}) {
    const [comments, setcomments] = useState([]);
    const [comment, setComment] = useState('');

    useEffect(() => {
        let unsubscribe;
        if(postID) {
            unsubscribe = db
            .collection('posts')
            .doc(postID)
            .collection('comments')
            .orderBy('timestamp', 'desc')
            .onSnapshot((snapshot) => {
                setcomments(snapshot.docs.map((doc) => doc.data()));
            });
        }
        return () => {
            unsubscribe();
        };
    }, [postID]);

    const postComment = (event) => {
        event.preventDefault();
        db.collection('posts').doc(postID).collection('comments').add({
            comment : comment,
            username : user.displayName,
            timestamp : firebase.firestore.FieldValue.serverTimestamp()
        });
        setComment('');
    }

    return (
        <div className = "post">
            <div className="post__header">
                <Avatar
                className="post__avatar"
                alt= "Yash"
                src={imageurl}/>
                <h3>{username}</h3>  
            </div>
            <img className="post__image" alt = "IMG" src = {imageurl}/>
            <h4 className = "post__text"><strong>{username} </strong>{caption}</h4>
            <div className="post__comments">
                {
                    comments.map((comment) => (
                        <p>
                            <strong>{comment.username}</strong> {comment.comment}
                        </p>
                    ))
                }
            </div>
            {user && (
                <form className="post__commentBox">
                <input
                    className="post__input"
                    type="text"
                    placeholder="Enter A Comment..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                />
                <button
                disabled={!comment}
                className="post__button"
                type="submit"
                onClick={postComment}>Post</button>
            </form>
            )}
        </div>
    );
}

export default Post;
