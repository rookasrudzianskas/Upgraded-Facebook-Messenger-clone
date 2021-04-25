import './App.css';
import React, {useEffect, useState} from 'react';
import {Button, FormControl, Input, InputLabel} from "@material-ui/core";
import Message from "./Message";
import db from "./firebase";
import firebase from 'firebase';
import FlipMove from "react-flip-move";
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';
import {Send} from "@material-ui/icons";
function App() {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);
    const [username, setUsername] = useState('');

    useEffect(() => {
        // run once when the app component loads
        db.collection('messages').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()})));
        });

    }, [])

    useEffect(() => {
        // run the code here
        // if it is blank inside [], then the app loads

        // const name = prompt("Please enter your name");
        setUsername(prompt("Please enter your name"));
        // console.log(username);


    }, []) //condition

    const sendMessage = (event) => {
        // all the logic to send message goes here
        event.preventDefault();

        db.collection('messages').add({
            message: input,
            username: username,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });

        setInput('');
    }


  return (
    <div className="App">
        <img src="https://en.facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100" alt=""/>
     <h1>Hello World 🚀</h1>
        <h2>Welcome, {username} 🥰</h2>

        <form action="" className="app__form">
            <FormControl className="app__formControl">
                <Input className="app__input" placeholder="Enter the message..." type="text" value={input} onChange={event => setInput(event.target.value)} />

                <IconButton className="app__iconButton" disabled={!input} variant="contained" color="primary" type={"submit"} onClick={sendMessage}>
                    <SendIcon />
                </IconButton>
            </FormControl>

        </form>
        <FlipMove>
            {
                messages.map(({id, message}) => (
                    <Message key={id} username={username} message={message}/>
                ))
            }
        </FlipMove>

    </div>
  );
}

export default App;
