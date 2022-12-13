import React, { useState,useEffect } from 'react';
import '../Navber/Navbar.css';
import logo from '../images/logo.png'
import Logout from '../other/Logout';
import { CiCoinInsert } from "react-icons/ci";
import Cookies from 'universal-cookie';
import TeamAPI from '../0. API/TeamAPI';
import { useNavigate } from "react-router-dom";
import { UserContext } from '../98. Context/UserStore';
import { useContext } from 'react';

function Navbar() {
  const cookies = new Cookies();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showMbtiList, setShowMbtiList] = useState(false); 
  const [showAccount, setShowAccount] = useState(false); 
  
  const [coin,setCoin]= useState('');
  const [reactCoin,setReactCoin] =useState('');
  
  const context = useContext(UserContext);

  
  

  const localId = cookies.get('rememberId');

  const navigate= useNavigate();

  useEffect(() => {
    
    const memberData = async (e) => {


      try {
        const response = await TeamAPI.memberInfo(localId); // 원래는 전체 회원 조회용
        setCoin(response.data.coin);
        console.log(response.data.coin)

      } catch (e) {
        console.log(e);
      }
    };
    memberData();
  }, [context.coin]);







  // 반응형 - 메뉴 눌렀을 때
  const onClickMenu = () => {
    setIsMenuOpen(isMenuOpen => !isMenuOpen);

    let navbar = document.querySelector('.navbar');
    navbar.classList.toggle('open');
  }

  // MBTI 눌렀을 때
  // const onClickMBTI = () => {
  //   setShowMbtiList(showMbtiList => !showMbtiList);
  // }

  // User 아이콘 눌렀을 때
  const onClickAccount = () => {
    setShowAccount(showAccount => !showAccount);
  }

  return (
    <div className='Navbar-Container'>
      <header>

      {/* logo 영역 */}
        <a href='/home' className="logo">
          <img src={logo} alt="logo" />
          <span>MBTISOUR</span>
        </a>

      {/* Navbar 영역 */}
        <ul className= {isMenuOpen ? "Navbar" : "Navbar open"}>
          <li><a href="/aboutus" className="active">About Us</a></li>
          {/* <li>
            <a onClick={onClickMBTI}>MBTI
              {!showMbtiList 
              ? <div class="material-symbols-outlined">expand_more</div>
              : <div class="material-symbols-outlined">expand_less</div> }
            </a>
          </li> */}
          <li><a href="/mbti">MBTI 검사</a></li>
          <li><a href="/MBTITypes">MBTI 유형</a></li>
          <li><a href="/guestbook">방명록</a></li>
          <li><a href="/matching">MATCHING</a></li>
        </ul>

      {/* Main 영역 */}        
        <div className="Main-Icon">
          {"??" + context.coin}
          <CiCoinInsert className='Nav-Coin' size={50}/>
          <span className='HowManyCoin'>{": "}{context.coin}</span>
          <a className="User">
            <span className="material-symbols-outlined" onClick={onClickAccount}>account_circle</span>
          </a>
          {showAccount ?
          <ul className="User-submenu">
            <li><a href="/mypage">마이페이지</a></li>
            <li><a href="/postbox">쪽지함</a></li>
            <li><a href="/chathome">1:1채팅</a></li>
            <li><Logout /></li>
          </ul>
         : null}
          <div className="material-symbols-outlined" 
            id="menu-icon" onClick={onClickMenu}>
            {isMenuOpen ? "menu" : "close"}
          </div>
        </div>

      </header>
    </div>
  )
}

export default Navbar