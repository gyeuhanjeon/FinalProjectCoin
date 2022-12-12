import React, { useEffect, useId, useState } from "react";
// import Img from "../../";
import { onSnapshot, doc } from "firebase/firestore";
import { db } from "../firebase";
import Cookies from 'universal-cookie';
import TeamAPI from "../0. API/TeamAPI";
import "./Chat.css";
import { useLocation } from "react-router-dom";

const User = ({  user, selectUser, chat }) => {
  const cookies = new Cookies();
  const user2 = user?.uid;
  const [data, setData] = useState("");
  const [image, setImage] = useState(null);
  const localId = cookies.get('rememberId');
  const [url, setUrl] = useState(null);
  const [chatMemberNickname, setChatMemberNickname] = useState([]);
  const [myId, setMyId] = useState('');
  const [friendlist, setfriendlist] = useState([]);
  const [nickName, setNickName] = useState('');

  
  const findMember = window.sessionStorage.getItem("chatMemberId");
  console.log("친구아이디2222 : ", findMember);

  useEffect(() => {
    const friendData = async() => {
      try{
        console.log("통신가니?? ");
        console.log("나 : ", localId);
        console.log("너너너너너너 : ", findMember);

        const response = await TeamAPI.chatFindMember(localId, findMember);

        console.log("결과 : ", response.data);
        if(response.status === 200){
          setfriendlist(response.data);
          setChatMemberNickname(response.data.chatMemberNickname);

          for(let i= 0; i <response.data.length(); i++) {
            setChatMemberNickname(response.data[i].chatMemberNickname);
          }

          const user1 = friendlist.myId;
          const chatMemberId = friendlist.chatMemberId;

          if(chatMemberId == null){
            user1 = null; 
            user2 = null; 
            console.log("여기1")
          }else{
            console.log("여기2")
            console.log("다왔다!! : ", chatMemberId)
          // const id = user1 > user2 ? `${user1 + user2}` : `${user2 + user1}`;
          const id = chatMemberId
          let unsub = onSnapshot(doc(db, "lastMsg", id), (doc) => {
            setData(doc.data());
          });
          return () => unsub();
          }
          window.sessionStorage.removeItem("chatMemberId");  
        } else {
          console.log("통신 실패("+ response.status + ")");
        }
      } catch {

      }
    };
    friendData();
    
  }, []);





  // console.log(data);

  return (
    <>
    .
    
      <div 
        className={`user_wrapper ${chat.name === friendlist && "selected_user"}`}
        onClick={() => selectUser(friendlist)}
      >
        <div className="user_info">
          <div className="user_detail">
            <img src={user.avatar || `https://firebasestorage.googleapis.com/v0/b/isour-c9756.appspot.com/o/${user.id}?alt=media&token=` } alt="avatar" className="avatar" />
            <h4>{user.nickname}</h4>
            {data?.from !== localId && data?.unread && (
              <small className="unread">New</small>
            )}
          </div>
          <div 
            className={`user_status ${user.isOnline ? "online" : "offline"}`}
          ></div>
        </div>
        {data && (
          <p className="truncate">
            <strong>{data.from === localId ? "Me:" : null}</strong>
            {data.text}
          </p>
        )}
      </div>

    </>
  );
};

export default User;