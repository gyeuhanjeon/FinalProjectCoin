import { Route, Routes } from 'react-router-dom';
import MBTI from './6. MBTI/MBTI';
import MbtiTypes from './6. MBTI/MbtiTypes';
import Home from './4. Home/Home';
import Postbox from './7. PostBOX/Postbox';
import FindInfo from './2. Login/FindInfo';
import GuestBook from './10. GuestBook/GuestBook';
import ChatHome from './9.Chat/ChatHome';
import Matching from './8.Matching/Matching';
import MyPage from './5. MyPage/MyPage';
// import Navber from './Navber/Nav';
import Navbar from './Navber/Navbar';
import '../src/App.css';
import KakaoToken from './2. Login/KakaoToken';
import AboutUs from './11. AboutUs/AboutUs';
function LoginUser() {
  return (
    <>
      {/* <Navber/> */}
      <Navbar/>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/mypage' element={<MyPage />} />
        <Route path='/MBTI' element={<MBTI />} />
        <Route path='/MbtiTypes' element={<MbtiTypes />} />
        <Route path='/Postbox' element={<Postbox />} />
        <Route path='/FindInfo' element={<FindInfo />} />
        <Route path='/GuestBook' element={<GuestBook/>}/>
        <Route path='/ChatHome' element={<ChatHome/>}/>
        <Route path='/Matching' element={<Matching/>}/>
        <Route path='/login/kakao' element={<KakaoToken />}/>
      </Routes>
    </>
  );
}

export default LoginUser;