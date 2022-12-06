import React, { useEffect, useState } from "react";
// import Img from "../image1.jpg";
import { onSnapshot, doc } from "firebase/firestore";
import { db } from "../firebase";

const User = ({ user1, user, selectUser, chat }) => {
  const user2 = user?.uid;
  const [data, setData] = useState("");

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
        className={`user_wrapper ${chat.name === user.name && "selected_user"}`}
        onClick={() => selectUser(user)}
      >
        <div className="user_info">
          <div className="user_detail">
            {/* <img src={user.nickName} alt="nickName" className="nickName" /> */}
            <h4>{user.nickName}</h4>
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
      
      <div
        onClick={() => selectUser(user)}
        className={`sm_container ${chat.nickName === user.nickName && "selected_user"}`}
      >
        {/* <img
          src={user.avatar}
          alt="avatar"
          className="avatar sm_screen"
        /> */}
      </div>
    </>
  );
};

export default User;