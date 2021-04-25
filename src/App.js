import './App.css';
import React, {useState} from 'react';

function App() {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState(['hello', 'what is up']);

    console.log('🔫' + input);
    console.log(messages);

    const sendMessage = (event) => {
        // all the logic to send message goes here
        setMessages([...messages, input]);
        setInput('');

    }


  return (
    <div className="App">
     <h1>Hello World 🚀</h1>


        <input type="text" value={input} onChange={event => setInput(event.target.value)}/>
        <button onClick={sendMessage}>Send Message</button>
    {/*    input    */}


    {/*    button    */}
    {/*    messages themselves    */}
    </div>
  );
}

export default App;
