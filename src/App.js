import './App.css';
import React, {useState} from 'react';
import {Button} from "@material-ui/core";

function App() {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState(['hello', 'what is up']);

    console.log('🔫' + input);
    console.log(messages);

    const sendMessage = (event) => {
        // all the logic to send message goes here
        event.preventDefault();
        setMessages([...messages, input]);
        setInput('');

    }


  return (
    <div className="App">
     <h1>Hello World 🚀</h1>

        <form action="">
            <input type="text" value={input} onChange={event => setInput(event.target.value)}/>
            <Button disabled={!input} variant="contained" color="primary" type={"submit"} onClick={sendMessage}>Send Message</Button>
        </form>
        {
            messages.map(message => (
                <p>{message}</p>
            ))
        }
    {/*    messages themselves    */}
    </div>
  );
}

export default App;
