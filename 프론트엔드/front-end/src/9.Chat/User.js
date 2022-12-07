import React, { useEffect, useId, useState } from "react";
// import Img from "../../";
import { onSnapshot, doc } from "firebase/firestore";
import { db } from "../firebase";
import Cookies from 'universal-cookie';
import TeamAPI from "../0. API/TeamAPI";
import "./Chat.css";

const User = ({ user1 , user, selectUser, chat }) => {
  const cookies = new Cookies();
  const user2 = user?.uid;
  const [data, setData] = useState("");
  const [image, setImage] = useState(null);
  const localId = cookies.get('rememberId');
  const [url, setUrl] = useState(null);
  

  useEffect(() => {
    const id = user1 > user2 ? `${user1 + user2}` : `${user2 + user1}`;
    let unsub = onSnapshot(doc(db, "lastMsg", id), (doc) => {
      setData(doc.data());
    });
    return () => unsub();
  }, []);



  // console.log(data);

  return (
    <>
      <div
        className={`user_wrapper ${chat.name === user.nickname && "selected_user"}`}
        onClick={() => selectUser(user)}
      >
        <div className="user_info">
          <div className="user_detail">
            <img src={user.avatar || `https://firebasestorage.googleapis.com/v0/b/isour-c9756.appspot.com/o/${user.id}?alt=media&token=` } alt="avatar" className="avatar" />
            <h4>{user.nickname}</h4>
            {data?.from !== user1 && data?.unread && (
              <small className="unread">New</small>
            )}
          </div>
          <div 
            className={`user_status ${user.isOnline ? "online" : "offline"}`}
          ></div>
        </div>
        {data && (
          <p className="truncate">
            <strong>{data.from === user1 ? "Me:" : null}</strong>
            {data.text}
          </p>
        )}
      </div>
      
    </>
  );
};

export default User;