import { useState, useEffect } from "react";
import TeamAPI from '../0. API/TeamAPI';
import Cookies from 'universal-cookie';
import { db } from "../firebase";
import {
  collection,
  query,
  where,
  onSnapshot,
  addDoc,
  Timestamp,
  orderBy,
  setDoc,
  doc,
  getDoc,
  updateDoc
} from "firebase/firestore";
import moment from 'moment';
import './Home.css';
import { useNavigate } from "react-router-dom";


const Home = () => {

  const cookies = new Cookies();

  const localId = cookies.get('rememberId');
  // const id = window.sessionStorage.getItem("id");
  const localId_num = window.sessionStorage.getItem("id_num");
  const kakaoId_num = window.sessionStorage.getItem("kakaoId_num");
  const kakaoNickname = window.sessionStorage.getItem("kakaoNickname");
  const kakaoId = window.sessionStorage.getItem("kakaoId");
  const kakaoEmail = window.sessionStorage.getItem("kakaoEmail");
  const [friend, setFriend] = useState("");
  const [registrationDate, setRegistrationDate] = useState('');
  const [nickName, setNickName] = useState('');
  const navigate = useNavigate();

  const chatTest = async (name) => {
    console.log(name);
    try {
      const res = await TeamAPI.chatRoomOpen("테스트 채팅방");
      console.log(res.data);
      window.localStorage.setItem("chatRoomId", res.data);
      navigate("/Socket");
    } catch {
      console.log("error");
    }
  }
  useEffect(() => {
    if (localId === undefined) navigate("/login");
    // ▲ 로그인 안 되어 있으면 로그인 페이지로 

    const memberData = async () => {
      // console.log("\n\n현재 sessionStorage 에 저장된 ID : " + id);
      console.log("\n\n현재 cookies 에 저장된 ID : " + localId);
      console.log("\n\n현재 sessionStorage 에 저장된 카카오 Id_num : " + kakaoId_num);

      console.log(typeof (kakaoId_num));
      try {
        const response = await TeamAPI.memberInfo(localId); // 원래는 전체 회원 조회용
        setNickName(response.data.nickname)
        setRegistrationDate(response.data.registrationDate);
        const localId_num = response.data.idNum;

        // setCookie('rememberEmail', email);
        cookies.set('rememberId_num', localId_num, {
          path: '/',
          expires: 0
        })
        console.log(response.data)

      } catch (e) {
        console.log(e);
      }
    };
    memberData();
  }, []);

  const date = moment().format("YYYY.MM.DD HH:mm:ss");
  const Dday = moment(date).diff(registrationDate, 'day');

  return (
    <div className="Container">
      <div className="Home-Container">
        <div className="WelcomeMessage">
          <h2><span style={{ color: "navy", fontWeight: "bold" }}>{nickName}</span> 님과 MBTISOUR는 오늘, <span style={{ color: 'red', fontWeight: 'bold' }}>{Dday + 1}일</span></h2>
          <h3>새로운 쪽지가 있습니다!</h3>
        </div>

        {/* <a href="https://dinorunner.com/ko/" > 
          <img src={test} />
        </a> */}
        <div className="Dino">
          <iframe className="DinoAddr" src="https://chromedino.com/" type="text/css" frameborder="0" scrolling="no" width="100%" height="100%" loading="lazy"></iframe>
        </div>
        <div className="DinoStartMessage">
          <p>게임을 시작하려면 spacebar를 누르세요</p>
        </div>


      </div>
    </div>
  );
}

export default Home;