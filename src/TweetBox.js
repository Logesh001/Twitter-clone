import React from 'react';
import { useState } from 'react';
import './TweetBox.css';
import {Avatar, Button} from '@mui/material';
import db from './firebase';


function TweetBox() {

    const[tweetMessage, setTweetMessage] = useState("");
    const[tweetImage, setTweetImage] = useState("");

     const sendTweet = e => {
        e.preventDefault();

        db.collection('posts').add({
            displayName:'logesh',
            username:'logesh353',
            verified:true,
            text:tweetMessage,
            image:"",
            avatar:"https://img.icons8.com/cotton/64/000000/charlie-chaplin--v2.png"
        });

        setTweetMessage("");
        setTweetImage("");
    }
  return (
    <div className='tweetBox'>
      <form>
        <div className='tweetBox_input'>
        <Avatar src="https://img.icons8.com/cotton/64/000000/charlie-chaplin--v2.png" />
        
        <input
        onChange={(e) => setTweetMessage(e.target.value)} 
        value={tweetMessage} 
        placeholder="what's happening ?" 
        type="text"/>
               
        </div>

        <input
        onChange={(e) => setTweetImage(e.target.value)}
        value={tweetImage}  
        className='tweetBox_imageInput' placeholder="Optional: Enter image URL" type="text"/>

        <Button  onClick={sendTweet} type="submit" className='tweetBox_tweetButton' >Tweet</Button>
      </form>
    </div>
  )
}

export default TweetBox