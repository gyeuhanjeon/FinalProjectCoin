import React, { useState, useEffect } from 'react';
import TeamAPI from '../0. API/TeamAPI';
import { MatchingPostModal } from '../99. Modal/MatchingPostModal';
import SmsIcon from '@mui/icons-material/Sms';
import { IconButton } from '@mui/material';
import { db } from "../firebase";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import FavoriteIcon from '@mui/icons-material/Favorite';
import EmailIcon from '@mui/icons-material/Email';
import face from '../images/기본 프로필.png'
import Cookies from 'universal-cookie';
import '../0. API/defultMain.css'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import NavigateNextIcon from '@mui/icons-material/ArrowBackIosNew';
import './Matching.css';
import { useNavigate } from 'react-router-dom';


const Matching = () => {
  const cookies = new Cookies();
  // ▼ 로그인 안 되어 있으면 로그인 페이지로
  const localId = cookies.get('rememberId');
  const localId_num = cookies.get('rememberId_num');
  const navigate = useNavigate();

  const [url, setUrl] = useState(null);
  const [myId, setMyId] = useState('');
  const [id_num, setId_num] = useState('');
  const [myFace, setMyFace] = useState('');
  const [myNickname, setMyNickname] = useState('');
  const [myMbti, setMyMbti] = useState('');
  const [myIntroduce, setMyIntroduce] = useState('');
  const [myInfo, setMyInfo] = useState('');

  const [mat_memberInfo, setMat_MemberInfo] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [rnum, setRnum] = useState();



  // 페이지 이동
  const onChangeNext = () => {
    setPageNum(pageNum + 1);
    console.log("pageNum : " + pageNum);
  }

  const onChangePrev = () => {
    setPageNum(pageNum - 1);
    console.log("pageNum : " + pageNum);
  }



  // 내 정보 조회 
  useEffect(() => {
    const userData = async () => {
      console.log("\n>> 내정보 조회(useEffect)");
      console.log("\n\n현재 cookies 에 저장된 ID : " + localId);

      try {
        const response = await TeamAPI.memberInfo(localId); 
        console.log(response.data);
        setMyInfo(response.data);
        setId_num(response.data.idNum);
        setMyId(response.data.id);
        setMyFace(response.data.face);
        setMyNickname(response.data.nickname);
        setMyMbti(response.data.mbti);
        setMyIntroduce(response.data.introduce);

      } catch (e) {
        console.log(e);
      }
    };
    userData();
  }, []);


  // 매칭 회원 정보 조회
  const nav = useNavigate();
  useEffect(() => {
    if(localId === undefined) navigate("/login");
    // ▲ 로그인 안 되어 있으면 로그인 페이지로

    const memberData = async () => {
      console.log("\n>> 매칭 결과 조회(useEffect)");
      // const id = localId;
      console.log(">>>>>>>>>>>>>>");
      console.log(typeof(localId));
      console.log(localId);
      console.log(localId_num);
      console.log(pageNum);

      try {
        const Mat = await TeamAPI.MatchingMember2(localId, localId_num, pageNum);
        console.log("****************");
        console.log(Mat.data);
        console.log(Mat.data[0].mat_id);
        console.log("****************");
        setMat_MemberInfo(Mat.data);
        // 마지막 페이지 찾기
        const Rnum = Number(Mat.data[0].r_NUM);
        console.log(typeof(Rnum));
        // console.log(Rnum);
        // console.log(Math.ceil(Rnum / 2));
        setRnum(Math.ceil(Rnum / 2));
        console.log("1", Mat.data);
        console.log("matIdNum : ", Mat.data[0].mat_id_num);
        console.log("matFace : ", Mat.data[0].mat_face);
        console.log("matNick : ", Mat.data[0].mat_nick);
        console.log("r_NUM : ", Rnum);
      } catch (e) {
        console.log(e);
      }
    };
  memberData();
  }, [pageNum]);
  
 // 채팅하기 onClick
 const user1 = localId;
 console.log("user1 :",user1)

 const onClickChat = async (matfriend) => {
  console.log(matfriend);
   console.log("친구 아이디", matfriend);
   console.log("내 아이디", myId);

   const user2 = matfriend;

  const sodaRef = doc(db, "users", user1);
  try {
    await updateDoc(sodaRef, {
      friends: arrayUnion(user2)
    });
  } catch (e) {
    console.log(e);
  }
  

  nav("/chathome")



  };

  /* 쪽지 기능 구현 */
  const [receiverId, setReceiverId] = useState("");
  const [receiverNickname, setReceiverNickname] = useState("");
  const [inputContent, setInputContent] = useState('');

  const [modalOn, setModalOn] = useState(false);

  const getInputContent = (content) => { setInputContent(content); }
  const openModal = () => { setModalOn(true); };
  const closeModal = () => { setModalOn(false); };

  const onClickPostIcon = (receiverId, receiverNickname) => {
    alert("쪽지보내실?");
    console.log("\n>> 쪽지 아이콘 눌렀어요.");

    setReceiverId(receiverId);
    console.log("받는 사람 ID(receiverId) : " + receiverId);
    setReceiverNickname(receiverNickname);
    console.log("받는 사람 닉네임(receiverNickname) : " + receiverNickname);

    setModalOn(true);
  };

  /* 보내기 버튼 클릭 */
  const onSendPost = async(e) => {
    // e.preventDefault();
    try {
      const response = await TeamAPI.sendPost(myId, receiverId, inputContent);
      console.log("\n보내는 사람(id) : " + myId);
      console.log("받는 사람(receiverId) : " + receiverId);
      console.log("쪽지 내용(inputContent) : " + inputContent);

      if(response.status == 200) {
        console.log("통신 성공(200)");
        console.log("\n>> 쪽지 보내기 성공!!");
        alert("쪽지 보내기 성공!!");
        closeModal();
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className='Container'>
      <div className='middle-Container'>
        <div className='Matching-Container' >
          <MatchingPostModal open={modalOn} close={closeModal} receiver={receiverNickname} getInputContent={getInputContent} onSendPost={onSendPost}/>
          
          <div className='User-Box'>
            <div className='User-profile'>
              {myFace != null 
              ? <img src={myFace} alt="프로필 이미지"/>
              : <img src={face} alt="프로필 이미지"/> }
            </div>
            <div className="User-item">
              <input type="text" value={myNickname} />
              <input type="text" value={myMbti} />
            </div>
            <div className="User-item">
                <input className='User-Introduce' type="text" value={myIntroduce} />
            </div>
          </div>

          { mat_memberInfo.map((mat) => (
          <div>
            <div className='Mat-Box' key={mat.id}>
              <div className='Mat-profile'>
                {mat.mat_face != null 
                ? <img src={mat.mat_face} alt="프로필 이미지" />
                : <img src={face} alt="프로필 이미지"/> }
              </div>
              <div className="Mat-item">
                <input type="text" value={mat.mat_nick} />
                <input type="text" value={mat.mat_mbti} />
                <input className='Mat-Introduce' type="text" value={mat.mat_introduce} />
              </div>
            {/* { like_num === 0 ?
                <img src={Click} onClick={Click_like} value={mat.mat_id_num} style={{width: 30}}/>
                : <img src={unClick} onClick={UnClick_like} value={mat.mat_id_num} style={{width: 25}} />   
            } */}
            </div> 
            <div className='Mat-icon'>
              {/* <ButtonGroup  style={{float:'left', backgroundColor: 'unset'}}> */}
                <IconButton>
                  <FavoriteIcon className='Like-icon' style = {{fontSize: 'xx-large', backgroundColor: 'unset'}} />
                </IconButton>
                <IconButton>
                  <SmsIcon className='Chat-icon' style = {{fontSize: 'xx-large'}} onClick={()=>onClickChat(mat.mat_id)}/>
                </IconButton>
                <IconButton>
                  <EmailIcon className='Post-icon' style = {{fontSize: 'xx-large'}} onClick={()=>onClickPostIcon(mat.mat_id, mat.mat_nick)}/>
                </IconButton>
              {/* </ButtonGroup> */}
            </div>
          </div>
            ))}

          <IconButton className='prevbtn' style={{backgroundColor: 'unset'}} onClick={onChangePrev} disabled={(pageNum === 1) ? true : false }>
            <ArrowBackIosNewIcon  style = {{fontSize: 'xx-large'}} />   
          </IconButton>
          <IconButton className='nextbtn' style={{backgroundColor: 'unset'}} onClick={onChangeNext} disabled={(pageNum === rnum) ? true : false }>
            <NavigateNextIcon style = {{transform: 'rotate(180deg)',  fontSize: 'xx-large'}} />
          </IconButton>           
        </div>
      </div>
    </div>
  )
}

export default Matching;
// const [like_user_num, setLike_user_num] = useState('');
// const [like_num, setLike_num] = useState(0);
// const [mat_id_num, setMat_id_num] = useState('');

// 좋아요 버튼
// const Click_like = () => {
//     setLike_num(1);
//     console.log("Click_like : " + like_num);
// }

// const UnClick_like = (e) => {
//     const like_user_num = e.target.value
//     setLike_user_num(like_user_num);
//     setLike_num(0);
//     console.log("UnClick_like : " + like_user_num);
// }