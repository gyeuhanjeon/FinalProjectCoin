import { useEffect, useState } from "react";
import TeamAPI from "../0. API/TeamAPI";
import Cookies from 'universal-cookie';
import { useNavigate  } from "react-router-dom";
import './GuestBook.css';
import Moment from "react-moment";
import { storage } from '../firebase'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { render } from "@testing-library/react";


const GuestBook = () => {
    const [nickname, setNickname] = useState('');
    const [content, setContent] = useState('');
    const [chatInfo,setChatinfo] = useState([]);
    const [isText, setIsText] = useState('');
    const [id, setId] = useState('');
    const cookies = new Cookies();
    const navigate = useNavigate();
    const [face, setFace] = useState(null);

    const chatContent = /^\w{1,40}$/;
    const kakaoId_num = window.sessionStorage.getItem("kakaoId_num");
    const localId = cookies.get('rememberId');
    const name = cookies.get('nickname');

  
    useEffect(() => {
        // if (localId === undefined) navigate("/login");
    const memberData = async () => {

        try {
          const response = await TeamAPI.memberInfo(localId); // 원래는 전체 회원 조회용
          setNickname(response.data.nickname)
          setFace(response.data.face);
    
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
                
                const res = await TeamAPI.memberChat(content,nickname);
                if(res.data === true) {
                    
                    setContent('');
                    setNickname(name);
                    window.location.reload()
                    // setId(localId);
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
        // if (localId === undefined) navigate("/login");
        //로그인 안될시 로그인 화면으로 이동.
        
        const chatData = async (e) => {

          let sentence = content;
          try {
            const response = await TeamAPI.chatInfo(sentence); // 원래는 전체 회원 조회용
            setChatinfo(response.data);
            
            
          } catch (e) {
          }
        };
        chatData();
       
        }, [content]);
    
    
    return (
        <div className="chat-Container">
            <div className="chat-box1">
            <input className="gsend"  type="text"  value={content} onChange={onChangeText}/>
            <button className ="gbtn"  onClick={onClickBTN}>보내기</button>
                <div className="minibox">
                {chatInfo.reverse().map((chat) => (
                    <div className="gchat" key={chat.id}>
                            <div className="gchatNum">
                            <img src={face} alt="" style={{ marginTop: "1px",marginLeft:"auto",marginRight:"auto",width: "30px", height: "30px", border:"1px solid" ,borderRadius: "70%", overflow: "hidden", objectFit: "cover"}}/>
                            {chat.nickname}
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