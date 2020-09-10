import React, { useState, useEffect } from 'react';
import { FormControl, Input, IconButton } from '@material-ui/core';
import './App.css';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');
  

  // Prompt to get the Username !!
  useEffect(() => {
    const name = prompt('Enter Your Name !!');
    setUsername(name);
  }, [])
  // END END END Prompt to get the Username !!


  // To get the data from db and to store them in State
  useEffect(() => {
    db.collection('messages').orderBy('timestamp','desc').onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({id: doc.id, message:doc.data()})))
    });
  }, [])
  // END To get the data from db and to store them in State


  // Get the message from user input and to store it in db.
  const sendMessage = (event) => {
    // Logic to send the message.
    event.preventDefault();
    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');
  };
  // END Get the message from user input and to store it in db.

  return (
    <div className="app">
      <img src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100" alt="messenger"/>
      <h1>WTF CHAT BOX !!</h1>
      <h2>Welcome {username}</h2>

      <form className="app__form">
        <FormControl className="app__formControl">
          <Input className="app__input" placeholder="Enter A Message.." value={input} onChange={event => setInput(event.target.value)}/>
          <IconButton className="app__iconButton" variant="contained" type="submit" disabled={!input} color="primary" onClick={sendMessage}>
            <SendIcon/>
          </IconButton>

        </FormControl>
      </form>

      <FlipMove>
      {
        messages.map(({id, message}) => (
          <Message key={id} message={message} name={username} />
        ))
      }
      </FlipMove>

    </div>
  )
}

export default App;
