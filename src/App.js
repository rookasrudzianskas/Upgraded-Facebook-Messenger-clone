import './App.css';
import React, {useEffect, useState} from 'react';
import {Button, FormControl, Input, InputLabel} from "@material-ui/core";
import Message from "./Message";
import db from "./firebase";
import firebase from 'firebase';

function App() {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);
    const [username, setUsername] = useState('');

    useEffect(() => {
        // run once when the app component loads
        db.collection('messages').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => doc.data()));
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
     <h1>Hello World 🚀</h1>
        <h2>Welcome, {username} 🥰</h2>

        <form action="">
            <FormControl>
                <InputLabel>Enter a message...</InputLabel>
                <Input type="text" value={input} onChange={event => setInput(event.target.value)} />
                <Button disabled={!input} variant="contained" color="primary" type={"submit"} onClick={sendMessage}>Send Message</Button>
            </FormControl>

        </form>
        {
            messages.map(message => (
                <Message username={username} message={message}/>
            ))
        }
    </div>
  );
}

export default App;
