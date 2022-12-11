import React, { useState } from 'react';
import '../Navber/Navbar.css';
import logo from '../images/logo.png'
import Logout from '../other/Logout';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showMbtiList, setShowMbtiList] = useState(false); 
  const [showAccount, setShowAccount] = useState(false); 

  // 반응형 - 메뉴 눌렀을 때
  const onClickMenu = () => {
    setIsMenuOpen(isMenuOpen => !isMenuOpen);

    let navbar = document.querySelector('.navbar');
    navbar.classList.toggle('open');
  }

  // MBTI 눌렀을 때
  const onClickMBTI = () => {
    setShowMbtiList(showMbtiList => !showMbtiList);
  }

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
          <li><a href="/home" className="active">About Us</a></li>
          <li>
            <a onClick={onClickMBTI}>MBTI
              {!showMbtiList 
              ? <span class="material-symbols-outlined">expand_more</span>
              : <span class="material-symbols-outlined">expand_less</span> }
            </a>
            {showMbtiList ?
            <ul className='MBTI-sub-menu'>
              <li><a href="/mbti">검사하기</a></li>
              <li><a href="/MBTITypes">설명보기</a></li>
            </ul>
            : null}
          </li>
          <li><a href="/matching">MATCHING</a></li>
          <li><a href="/chathome">채팅</a></li>
        </ul>

      {/* Main 영역 */}        
        <div className="Main">
          <span className="LoginUser" onClick={onClickAccount}>
            <span class="material-symbols-outlined">account_circle</span>
          </span>
          {showAccount ?
          <ul className='Main-sub-menu'>
            <li><a href="/mypage">마이페이지</a></li>
            <li><a href="/postbox">쪽지함</a></li>
            <li><a href="/chathome">1:1채팅</a></li>
            <li><Logout /></li>
          </ul>
          : null}
          <span className="material-symbols-outlined" 
            id="menu-icon" onClick={onClickMenu}>
            {isMenuOpen ? "menu" : "close"}
          </span>
        </div>

      </header>
    </div>
  )
}

export default Navbar