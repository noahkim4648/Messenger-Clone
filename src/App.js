import React, { useState, useEffect } from 'react';
import { FormControl, Input } from '@material-ui/core';
import './App.css';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';

function App() {
  //!important makes something important so it takes priority
  //this updates the individual words
  const [input, setInput] = useState('');
  // this stores the messages
  const [messages, setMessages] = useState([
    
  ]);
  // creates a username
  const [username, setUsername] = useState('');
  //useState = variable in REACT
  //useEffect = run code on a condition

  useEffect(() => {
    // runs once when app component loads
    //camera takes a picture of the database and snapshots it any changes in messages it will run
    // array of objects, the 2nd snapshots are all messages. snapshot.docs
    // real time listener it takes from the database and sends it
    db.collection('messages')
    .orderBy('timestamp', 'desc')
    .onSnapshot(snapshot => {
      //for every doc grab the doc.data docs is all docs, doc is individual ones
      setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()})))
    });
  }, [] )
 
  useEffect(() => {
    //run code here...
    // if its blank inside [], this code runs ONCE when the app component loads
    // if we have a variable like input, it runs everytime input changes
    setUsername(prompt('Please enter your name'));
  }, [] ) //condition
  
  const sendMessage = (event) => {
    //logic to send a message, submit type allows enter to submit
    event.preventDefault(); //prevents refreshing the page
    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
   
    /*setMessages([
      // ...messages, {username: username, text: input} //locally
    ]); */
    
    setInput('');
  }
  return (
    <div className="App">
      <img src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100" />
      <h1>Hello!</h1>
      <h2>Welcome {username}</h2>
      <form className = "app__form">
      
      <FormControl className='app__formControl'>
        <Input className="app__input" placeholder='Enter a message...' value={input} onChange={event => setInput(event.target.value)}/> 
        
        <IconButton className="app__iconButton" disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}>
          <SendIcon />
        </IconButton>
       </FormControl>
      </form>
      
      <FlipMove>
        {
        messages.map(({id, message}) => (
          <Message key={id} username={username} message={message} />
        ))
        }      
      </FlipMove>
    </div>
  );
}

export default App;
