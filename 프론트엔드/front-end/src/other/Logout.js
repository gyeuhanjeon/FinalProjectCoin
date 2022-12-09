import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router-dom';

function Logout() {
  const cookies = new Cookies();
  const location = useNavigate();

  const onClickLogout = () => {
    cookies.remove('rememberId');
    cookies.remove('rememberEmail');
    
    window.sessionStorage.setItem("kakaoId_num", '');
    window.sessionStorage.setItem("id", '');
    window.sessionStorage.setItem("nickname", '');
    window.sessionStorage.setItem("kakaoNickname", '');
    window.sessionStorage.setItem("kakaoEmail",'');

    alert("메인으로 보내기 전에 확인용");
    location("/");
  }

  return (
    <div onClick={onClickLogout}>
      <span class="material-symbols-outlined">logout<a href="/">로그아웃</a></span>
    </div>
  );
}

export default Logout;