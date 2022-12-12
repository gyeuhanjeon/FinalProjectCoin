import React, { useEffect, useState } from "react";
import Img from "../images/기본 프로필.png";
import { onSnapshot, doc } from "firebase/firestore";
import { db } from "../firebase";
import Cookies from 'universal-cookie';
import "./Chat.css";

const User = ({ user1 , user, selectUser, chat }) => {
  console.log("\n>> User 방문");
  console.log("==== Home 에서 받아오는 props ===");
  console.log("user1(나) : " + user1);
  console.log("user(상대방) : ", user); // [object Object] : users를 map 으로 돌면서 하나씩
  // console.log("selectUser : ", selectUser); // 함수 그 자체
  console.log("chat : ", chat); // 없음
  
  
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
            <img src={user.avatar || Img } alt="avatar" className="avatar" />
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
      <div
        onClick={() => selectUser(user)}
        className={`sm_container ${chat.name === user.name && "selected_user"}`}
      >
        <img
          src={user.avatar || Img}
          alt="avatar"
          className="avatar sm_screen"
        />
      </div>
    </>
  );
};

export default User;