import React, { useState } from 'react';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import PhotoCameraOutlinedIcon from '@material-ui/icons/PhotoCameraOutlined';
import GifIcon from '@material-ui/icons/Gif';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import db from './util/firebase';

function MessagePractice() {
  const [input, setInput] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();

    db.collection().add({
      message: input,
    });

    setInput("");
  }

  return (
    <div className="chat">

      <div className="chat__input">
        <AddCircleIcon fontSize="large" />
        <form onSubmit="return false;">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)} />
          <button
            className="chat__inputButton"
            type="submit"
            onClick={sendMessage}>
            Send Message
          </button>
        </form>

        <div className="chat__inputIcons">
          <PhotoCameraOutlinedIcon fontSize="large" />
          <GifIcon fontSize="large" />
          <EmojiEmotionsIcon fontSize="large" />
        </div>

        <div className="chat__sendIcon">
          <SendRoundedIcon style={{ display: "none" }} onClick={sendMessage} />
        </div>
      </div>
    </div>
  )
}

export default MessagePractice;
