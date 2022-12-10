import Cookies from 'universal-cookie';
import { db } from "../firebase";
import { updateDoc, doc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';

function Logout() {
  const cookies = new Cookies();
  const navigate = useNavigate();

  const onClickLogout = async () => {
    console.log("id : ", cookies.get('rememberId'));
    await updateDoc(doc(db, "users", cookies.get('rememberId')), {
      isOnline: false,
    });

    cookies.remove('rememberId');
    cookies.remove('rememberEmail');
    
    window.sessionStorage.setItem("id", '');
    window.sessionStorage.setItem("kakaoId_num", '');
    window.sessionStorage.setItem("nickname", '');
    window.sessionStorage.setItem("kakaoNickname", '');
    window.sessionStorage.setItem("kakaoEmail",'');

    alert("메인으로 보내기 전에 확인용");
    navigate("/");
  }

  return (
    <span className="material-symbols-outlined" onClick={onClickLogout}>logout
      로그아웃
    </span>
  );
}

export default Logout;