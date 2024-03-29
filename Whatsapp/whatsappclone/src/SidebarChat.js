import React, {useEffect, useState} from 'react';
import './SidebarChat.css';
import {Avatar} from '@material-ui/core';
import db from './firebase';
import { Link } from 'react-router-dom';

function SidebarChat(props) {
    const [seed, setSeed] = useState('');
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, [])

    useEffect(() => {
        if(props.id) 
        {
            db.collection('rooms').doc(props.id).collection('messages')
            .orderBy('timestamp', 'desc').onSnapshot((snapshot) => (
                setMessages(snapshot.docs.map((doc) => doc.data()))
            ));
        }
    }, [props.id])


    const createChat = () => {
        const roomName = prompt("Kindly, enter the name for chat !!");

        if(roomName) 
        {
            db.collection('rooms').add({name: roomName,});
        }
    };

    return !props.addNewChat ? (
        <Link to={`/rooms/${props.id}`}>
        <div className="sidebarchat">
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
            <div className="sidebarchat__info">
                <h2>{props.name}</h2>
                <p>{messages[0]?.message}</p>
            </div>
        </div>
        </Link>
    ) : 
    (
        <div className="sidebarchat addchat" onClick={createChat}>
            <h2>Add New Chat !!</h2>
        </div>
    )
}

export default SidebarChat
