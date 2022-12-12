import { useEffect, useState } from "react";
import TeamAPI from "../0. API/TeamAPI";
import Cookies from 'universal-cookie';
import { useNavigate  } from "react-router-dom";
import './GuestBook.css';
import Moment from "react-moment";
import { storage } from '../firebase'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'

const GuestBook = () => {
    const [nickname, setNickname] = useState('');
    const [content, setContent] = useState('');
    const [chatInfo,setChatinfo] = useState([]);
    const [isText, setIsText] = useState('');
    const [nickName, setNickName] = useState('');
    const cookies = new Cookies();
    const navigate = useNavigate();
    const [url, setUrl] = useState(null);

    const chatContent = /^\w{1,40}$/;
    const kakaoId_num = window.sessionStorage.getItem("kakaoId_num");
    const localId = cookies.get('rememberId');

    useEffect(() => {
        if (localId === undefined) navigate("/login");
    const memberData = async () => {
        // console.log("\n\n현재 sessionStorage 에 저장된 ID : " + id);
        console.log("\n\n현재 cookies 에 저장된 ID : " + localId);
        console.log("\n\n현재 sessionStorage 에 저장된 카카오 Id_num : " + kakaoId_num);
  
        console.log(typeof (kakaoId_num));
        try {
          const response = await TeamAPI.memberInfo(localId); // 원래는 전체 회원 조회용
          setNickName(response.data.nickname)
          setUrl(response.data.face);
          const localId_num = response.data.idNum;

          cookies.set('rememberId_num', localId_num, {
            path: '/',
            expires: 0
          })
        } catch (e) {
        }
      };
      memberData();
    }, []);

    const onChangeText = e => {
        let textShow = e.target.value;

        if(textShow === '') {
            setIsText(false);
        } else {
            setContent(textShow);
            setIsText(true);
        }
    }

    const onClickBTN = async (data) => {
        data.preventDefault();
        console.log("텍스트 : " + content);
        console.log("isText" + isText);
        try {
            if( isText === true ) {
                
                const res = await TeamAPI.memberChat(content);
                if(res.data === true) {
                    setContent('')
                }else{
                    alert("실패")
                }
               
            } else {
                alert('텍스트를 입력해주세요');
                           
            
        } }catch(e) {
            alert("오류")
        }
    }
    const chatText = [
        {
        content: ""
        }
    ]
    useEffect(() => {
        if (localId === undefined) navigate("/login");
        //로그인 안될시 로그인 화면으로 이동.

        const chatData = async () => {
          let id = content;
          try {
            const response = await TeamAPI.chatInfo(id); // 원래는 전체 회원 조회용
            setChatinfo(response.data);
          } catch (e) {
          }
        };
        chatData();
        }, [onClickBTN]);
    
    
    return (
        <div className="chat-Container">
            <div className="chat-box1">
            <input className="gsend" type="text" placeholder="입력" value={content} onChange={onChangeText}/>
            <button className ="gbtn" onClick={onClickBTN}>보내기</button>
                <div className="minibox">
                {chatInfo.reverse().map((chat) => (
                    <div className="gchat" key={chat.id}>
                            <div className="gchatNum">
                            <img src={url} alt="프로필 이미지" style={{ marginTop: "1px",marginLeft:"auto",marginRight:"auto",width: "30px", height: "30px", border:"1px solid" ,borderRadius: "70%", overflow: "hidden", objectFit: "cover"}}/>
                            {nickName}
                            </div>
                            <div className="gcontent">{chat.content}
                            <Moment format=" YYYY.MM.DD HH:mm" className="gchattime">{chat.chatTime}</Moment>
                            </div>
                          
    
                    </div>
                ))}
                </div>
            </div>
            </div>
    )
}
export default GuestBook;