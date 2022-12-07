import React, { useEffect, useId, useState } from "react";
// import Img from "../../";
import { onSnapshot, doc } from "firebase/firestore";
import { db } from "../firebase";
import { storage } from "../firebase";
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import Cookies from 'universal-cookie';
import TeamAPI from "../0. API/TeamAPI";

const User = ({ user1, user, selectUser, chat }) => {
  const cookies = new Cookies();
  const user2 = user?.uid;
  const [data, setData] = useState("");
  const [image, setImage] = useState(null);
  const localId = cookies.get('rememberId');
  const [url, setUrl] = useState(null);
  

  const onSaveFace = async() => {
    const imageRef = ref(storage, localId);

    uploadBytes(imageRef, image).then(() => {
      getDownloadURL(imageRef).then(async(url) => {
        console.log("\nURL : " + url);
        setUrl(url);

      /* ----- (시작) 통신 ----- */
        try {
          const response = await TeamAPI.changeFace(url, localId);
          console.log(response.data.result);
          if(response.status == 200) {
            console.log("통신 성공(200)");
            alert("프사 저장 성공");
          } else {
            console.log("\n>> 통신 실패 : " + response.status);
            alert("통신 실패 : " + response.status);
          }
        } catch (e) {
          console.log(e);
          console.log("캐치 !! 이미지 url 저장 실패..");
        } // try-catch 문의 끝
      /* ----- (끝) 통신 ----- */

      }).catch((error) => {
        console.log(error.message, "error getting the image url");
      });
      setImage(null);
    }).catch((error) => {
      console.log(error.message);
    });

    console.log("순서가 이상한 URL : " + url);
  };


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
            {/* <img src={user.nickName} alt="nickName" className="nickName" /> */}
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
        className={`sm_container ${chat.nickname === user.nickname && "selected_user"}`}
      >
        <img
        
          src={`https://firebasestorage.googleapis.com/v0/b/isour-c9756.appspot.com/o/${user.id}?alt=media&token=` }
          alt="avatar"
          className="avatar sm_screen"
        />
      </div>
    </>
  );
};

export default User;