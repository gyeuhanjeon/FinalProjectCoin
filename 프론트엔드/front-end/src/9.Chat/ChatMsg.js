import React, { useRef, useEffect } from "react";
import Moment from "react-moment";
import "./Chat.css";
import { formatRelative } from 'date-fns';

const formatDate = date => {
  let formattedDate = '';
  if (date) {
    // Convert the date in words relative to the current date
    formattedDate = formatRelative(date, new Date());
    // Uppercase the first letter
    formattedDate =
      formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
  }
  return formattedDate;
};



const ChatMsg = ({ msg, user1,  createdAt=null }) => {
  const scrollRef = useRef();

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [msg]);

  return (
    <div 
      className={`message_wrapper ${msg.from === user1 ? "own" : ""}`}
      ref={scrollRef}
    >
      <p className={msg.from === user1 ? "me" : "friend"}>
        {msg.media ? <img src={msg.media} alt={msg.text} /> : null}
        {msg.text}
        <br />
        <small>
        {createdAt?.seconds ? (
          <div>
              {formatDate(new Date(createdAt.seconds * 1000))}
              </div>
          ) : null}
        </small>
      </p>
    </div>
  );
};

export default ChatMsg;