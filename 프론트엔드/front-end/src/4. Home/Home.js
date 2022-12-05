import { useState, useEffect } from "react";
import TeamAPI from '../0. API/TeamAPI';
import Cookies from 'universal-cookie';

const Home = () => {
    // if(localId === undefined) window.location.replace("/login");
    // ▲ 로그인 안 되어 있으면 로그인 페이지로 
  const cookies = new Cookies();

  const localId = cookies.get('rememberId');
  const id = window.sessionStorage.getItem("id");
  const kakaoId_num = window.sessionStorage.getItem("kakaoId_num");
  const kakaoNickname = window.sessionStorage.getItem("kakaoNickname");
  const kakaoId = window.sessionStorage.getItem("kakaoId");
  const kakaoEmail = window.sessionStorage.getItem("kakaoEmail");

  const [nickName, setNickName] = useState('');

  const chatTest = async(name) => {
    console.log(name);
    try {
        const res = await TeamAPI.chatRoomOpen("테스트 채팅방");
        console.log(res.data);
        window.localStorage.setItem("chatRoomId", res.data);
        window.location.replace("/Socket");
    } catch {
        console.log("error");
    }
    
}
useEffect(() => {
        
  const memberData = async () => {
    console.log("\n\n현재 localStorage 에 저장된 ID : " + id);
    console.log("\n\n현재 localStorage 에 저장된 카카오 Id_num : " + kakaoId_num);

    console.log(typeof(kakaoId_num));
    try {

      if (kakaoId !== null) {
        const res = await TeamAPI.kakaomember(kakaoId_num);
        window.sessionStorage.setItem("id", res.data.id);
        window.sessionStorage.setItem("id_num", res.data.id_num);
        window.sessionStorage.setItem("nickname", res.data.nickname);
        setNickName(res.data.nickname)
      } else {
        const response = await TeamAPI.memberInfo(id); // 원래는 전체 회원 조회용
        setNickName(response.data.nickname)
        window.sessionStorage.setItem("id",response.data.id);
        window.sessionStorage.setItem("id_num",response.data.id_num);
        window.sessionStorage.setItem("nickname",response.data.nickname);
        console.log(response.data)
      }
    } catch (e) {
      console.log(e);
    }
  };
  memberData();
  }, []);
   
  return(
    <>
        <button onClick={chatTest}>임시 채팅 테스트</button>
      <h1>안녕하세요~ <span style={{color: "red" , fontWeight: "bold" }}>{nickName}</span> 님</h1>
      <h1>반갑습니다^^*</h1>
    </>
  );
}

export default Home;