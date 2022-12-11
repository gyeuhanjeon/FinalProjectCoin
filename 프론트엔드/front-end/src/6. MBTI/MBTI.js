import styled from 'styled-components';
import { useEffect, useState } from "react";
import TeamAPI from '../0. API/TeamAPI';
import 논리술사 from '../images/논리술사.png';
import 통솔자 from '../images/통솔자.png';
import 변론가 from '../images/변론가.png';
import 옹호자 from '../images/옹호자.png';
import 중재자 from '../images/중재자.png';
import 선도자 from '../images/선도자.png';
import 활동가 from '../images/활동가.png';
import 현실주의자 from '../images/현실주의자.png';
import 수호자 from '../images/수호자.png';
import 경영자 from '../images/경영자.png';
import 집정관 from '../images/집정관.png';
import 장인 from '../images/장인.png';
import 모험가 from '../images/모험가.png';
import 사업가 from '../images/사업가.png';
import 연예인 from '../images/연예인.png';
import Cookies from 'universal-cookie';
import { VscArrowRight } from "react-icons/vsc";
import { IoPeople, IoPersonAdd } from "react-icons/io5";
import { MdPsychology, MdQuiz } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import '../0. API/defultMain.css';

//스타일 컴포넌트

const Startbtn = styled.button`
  background: black;
  color: white;
  padding: 0.3rem;
  width: 400px;
  border-radius: 100px;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 25px;
  background-color: orangered;
  border: 0px none;
  transition: all .2s ea  se-in-out;
  font-weight: 900;  
  position: relative;
  bottom:10px;

  &:hover{
  background-color: firebrick;
  border-color: firebrick;
  cursor: pointer;
  opacity: 0.95;
  transition-duration: .5s;
  text-shadow: 10px 10px 10px rgba(0, 0, 0, 5);
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 5); ;
  .arrow{
    transform: translateX(10px);
    transition-duration: .5s;
  }
  }
  &:active{
    transition-duration: .5s;
    transform: translateY(5px);
  }

  .arrow{
    position: relative;
    bottom: 4px;
  }
  
`

const ObuttonContainer = styled.div`
  width:600px;
  position: relative;
  align-items: center;
  display: flex;
  justify-content:center;
  bottom:350px;
  border-bottom: 1px none;
  left :100px;
  box-shadow: 0 4px 4px -4px gray;
  `

const Word1 = styled.span`
  position: relative;
  font-size: 25px;
  width:100px;
  height: 20px;
  color:skyblue;
  right: 500px;
  bottom: 250px;
`;
const Word2 = styled.span`
  position: relative;
  font-size: 25px;
  width:100px;
  height: 20px;
  color:orangered;
  bottom: 250px;
  right:100px;

`;
const NumContainer = styled.div`
  font-size: 35px;
  font-weight: bold;
  text-align: center;
  position: relative;
  top:170px;
`;
const Num = styled.span`
  color : white;
  position: relative;
  font-size: 0.8em;
  border-radius: 30px;
  background: #003366;
  border: 0;
  display: inline-block;
  width: 200px;
  height: 50px;
  align-items: center;
  display: flex;
  justify-content:center;
  margin: 0 auto;
`;
const OXcontainer = styled.div`
    align-items: center;
    display: flex;
    justify-content:center;
    margin : 0 auto;    
    width: 1180px;
    height: 900px;
    position: relative;
    left: 0;
    z-index: 1;
`;
const QuizContainer = styled.div`
   align-items: center;
  display: flex;
  justify-content:center;
  position: relative;
  
  p{
    position: relative;
    top:350px;
    font-size: 30px;
  }
`


const O3 = styled.div`
    
    width: 110px;
    height: 110px;
    border: 2px solid black;
    border-radius: 70%;
    border-color: skyblue;

    :hover{
      border-color: skyblue;
      border: 55px groove blue;
      transition: 1s;
    }
    :active{
      border: 55px solid blueviolet;
    }
  
`;
const X3 = styled.div`
    
    width: 110px;
    height: 110px;
    border: 2px solid black;
    border-radius: 70%;
    border-color: orangered;

    :hover{
      border-color: orangered;
      border: 55px groove orangered;
      transition: 1s;
    }
    :active{
      border: 55px solid blueviolet;
    }
  
`;
const O2 = styled.div`
    
    width: 75px;
    height: 75px;
    border: 2px solid black;
    border-radius: 70%;
    border-color: skyblue;
    margin: 0 30px;
    position: relative;
    top:19px;
    :hover{
      border-color: skyblue;
      border: 37.5px groove blue;
      transition: 1s;
    }
    :active{
      border: 37.5px solid blueviolet;
    }
  
`;
const X2 = styled.div`
     
     width: 75px;
    height: 75px;
    border: 2px solid black;
    border-radius: 70%;
    border-color: orangered;
    margin : 0 30px;
    position: relative;
    top:19px;
    :hover{
      border-color: orangered;
      border: 37.5px groove orangered;
      transition: 1s;
    }
    :active{
      border: 37.5px solid blueviolet;
    }
  
`;
const O1 = styled.div`
    
    width: 40px;
    height: 40px;
    border: 2px solid black;
    border-radius: 70%;
    border-color: skyblue;
    margin : 0 10px;
    position: relative;
    top:36px;

    :hover{
      border-color: skyblue;
      border: 20px groove blue;
      transition: 1s;
    }
    :active{
      border: 20px solid blueviolet;
    }
  
`;
const X1 = styled.div`
     
    width: 40px;
    height: 40px;
    border: 2px solid black;
    border-radius: 70%;
    border-color: orangered;
    margin: 0 10px;
    position: relative;
    top:36px;

    :hover{
      border-color: orangered;
      border: 20px groove orangered;
      transition: 1s;
    }
    :active{
      border: 20px solid blueviolet;
    }
  
`;
const Recommend = styled.div`
  display: flex;
  width :800px;
  margin: 40px auto 0;
`;
const RecommendByOne = styled.div`
  &>a>img{
    width: 100px;
    height: 100px;
    border-radius: 70%;
    overflow: hidden;
    object-fit: cover;
    margin: 15px auto;
    position: relative;
    left: px;
  }
  &>p{
    color:#00FFFF;
    font-size: 30px;
    text-align: center;
    position: relative;
    bottom:10px;
    font-weight: 900;
  }
  height: 250px;
	width: 170px;
	border-radius: 15px;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	overflow: hidden;
  margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-row: 2/3;
    background-color: #6633FF;
    position: relative;
    
`;
const ResultContainer = styled.div`
  width :1180px;
  margin : 0 auto;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0,0,0, .04);
  /* border-right: 2px solid black;
  border-left: 2px solid black; */
  
`;

const MyMbti = styled.div`
  height: 300px;
	width: 200px;
    margin-bottom: 100px;
	border-radius: 15px;
    box-shadow: 0 4px 8px 0 rgba(177, 177, 177, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    grid-column-start: 1;
    grid-column-end: 5;
    grid-row: 1/2;
    background-color: #6699FF;
    margin: 0 auto;

  img{
    width: 120px;
    height: 120px;
    border-radius: 70%;
    overflow: hidden;
    object-fit: cover;
    margin: 15px auto;
  }
  p{
    color:#66FF33;
    font-size: 40px;
    position: relative;
    bottom: 10px;
    font-weight: 900;
  }

`
const StyledButton = styled.button`
    background: black;
  color: white;
  padding: 0.5rem;
  width: 500px;
  border-radius: 40px;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 25px;
  background-color: skyblue;
  border-color: skyblue;
  transition: all .2s ea  se-in-out;
  font-weight: 900;  
  position: relative;
  margin : 20px auto 0;
  left : 145px;

  &:hover{
  background-color: firebrick;
  border-color: firebrick;
  cursor: pointer;
  opacity: 0.95;
  transition-duration: .5s;
  
  .arrow{
    transform: translateX(10px);
    transition-duration: .5s;
  }
  }
  &:active{
    transition-duration: .5s;
    transform: translateY(5px);
  }
  
  .arrow{
    position: relative;
    bottom: 4px;
  }
  
  
`
const RecommendWord = styled.div`
  color: orangered;
  font-weight: 900;
  font-size: 40px;
  position: relative;
  text-align:center;
`

const Character = styled.div`
  color: #FFFFCC;
  font-weight: 900;
  font-size: 15px;
  position: relative;
  text-align:center;
  bottom: 15px;
`
const StartContainer = styled.div`

  text-align: center;
  max-width:600px;
  height: 700px;
  margin:0px auto;
  top : 100px;

  
  border: 0px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  position: relative;
  
  &>.mbti-person1{
    position: relative;
    bottom: 50px;
  }
  &>.mbti-person2{
    position: relative;
    bottom: 50px;
  }
  &>.mbti-quiz{
    position: relative;
    bottom: 20px;
  }
  &>.mbti-brain{
    position: relative;
    bottom: 20px;
  }

`
const Container = styled.div`
    box-sizing: border-box;
    width: 1180px;
    margin: 0 auto;
    padding: 0;
    background-color: rgba(0,0,0, .04);
    height: 100vh;
`

const Sentence1 = styled.div`
  font-size: 39px;
  span:nth-of-type(1){
    color:red;
  }
  span:nth-of-type(2){
    color:orange;
  }
  span:nth-of-type(3){
    color:yellowgreen;
  }
  span:nth-of-type(4){
    color:#CC33FF;
  }
  span:nth-of-type(5){
    color:#0000FF;
  }
`
const Sentence2 = styled.div`
  font-size: 25px;
  margin-bottom: 40px;
  span{
    color: red;
  }
`

const Mbtiword = styled.p`
  font-size: 30px;
  position: relative;
  right:50px;
  top:10px;

  span:nth-of-type(1){
    color:red;
  }
  span:nth-of-type(2){
    color:orange;
  }
  span:nth-of-type(3){
    color:yellowgreen;
  }
  span:nth-of-type(4){
    color:#CC33FF;
  }
`
const DetailWord = styled.p`
    text-align: center;
`


//퀴즈 컴포넌트
const Quiz = (props) => {
  const navigate = useNavigate();

  const OnclickGetFreind = () => {
    navigate('/matching');
  }


  const cookies = new Cookies();

  const localId = cookies.get('rememberId');
  if (localId === undefined) navigate("/");


  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(1);
  const [EnI, setEnI] = useState(0);
  const [SnN, setSnN] = useState(0);
  const [TnF, setTnF] = useState(0);
  const [JnP, setJnP] = useState(0);



  const [testMBTI, setTestMBTI] = useState("");
  useEffect(() => {
    console.log(EnI);
    console.log(SnN);
    console.log(TnF);
    console.log(JnP);
  }, [EnI, SnN, TnF, JnP]);

  const answerNoList = {
    answer: ["I", "N", "F", "P"]
  };
  const answerYesList = {
    answer: ["E", "S", "T", "J"]
  };

  const RecommendWord2 = "내 유형과 잘맞는 단짝 유형"

  // 결과 페이지
  if (count === props.questionList.length) {
    if (testMBTI === "ISTJ") {
      return (
        <ResultContainer>
          <div>
            <MyMbti>
              <a href="https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-istj" target='_blank'>
                <img src={현실주의자}></img>
              </a>
              <p>{"ISTJ"}</p>
              <Character>{"#진실한 삶"}</Character>
              <Character>{"#책임감 추구"}</Character>
            </MyMbti>
            <RecommendWord>
              {RecommendWord2}
            </RecommendWord>
            <Recommend>
              <RecommendByOne>
                <a href="https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-esfp" target='_blank'>
                  <img src={연예인}></img>
                </a>
                <p>{'ESFP'}</p>
                <Character>{"#열정적"}</Character>
                <Character>{"#즐거움 추구"}</Character>
              </RecommendByOne>
            </Recommend>
            <StyledButton onClick={OnclickGetFreind}>
              단짝 친구 찾으러 가기
              <VscArrowRight className="arrow" size={35} />
            </StyledButton>
          </div>
        </ResultContainer>
      );
    } else if (testMBTI === "ESTJ") {
      return (
        <ResultContainer>
          <div>
            <MyMbti>
              <a href="https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-estj" target='_blank'>
                <img src={경영자}></img>
              </a>
              <p>{"ESTJ"}</p>
              <Character>{"#높은 책임감"}</Character>
              <Character>{"#지도력"}</Character>
            </MyMbti>
            <RecommendWord>
              {RecommendWord2}
            </RecommendWord>
            <Recommend>
              <RecommendByOne>
                <a href="https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-intp" target='_blank'>
                  <img src={논리술사}></img>
                </a>
                <p>{'INTP'}</p>
                <Character>{"#아이디어 뿜뿜"}</Character>
                <Character>{"#생각많음"}</Character>
              </RecommendByOne>
              <RecommendByOne>
                <a href="https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-isfp" target='_blank'>
                  <img src={모험가}></img>
                </a>
                <p>{'ISFP'}</p>
                <Character>{"#개방적"}</Character>
                <Character>{"#조화로운 삶"}</Character>
              </RecommendByOne>
              <RecommendByOne>
                <a href="https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-istp">
                  <img src={장인}></img>
                </a>
                <p>{'ISTP'}</p>
                <Character>{"#장인"}</Character>
                <Character>{"#색다름 추구"}</Character>
              </RecommendByOne>
            </Recommend>
            <StyledButton onClick={OnclickGetFreind}>
              단짝 친구 찾으러 가기
              <VscArrowRight className="arrow" size={35} />
            </StyledButton>
          </div>
        </ResultContainer>
      );
    } else if (testMBTI === "ESFJ") {
      return (
        <ResultContainer>
          <div>
            <MyMbti>
              <a href="https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-esfj" target='_blank'>
                <img src={집정관}></img>
              </a>
              <p>{"ESFJ"}</p>
              <Character>{"#오랜관계 추구"}</Character>
              <Character>{"#책임감"}</Character>
            </MyMbti>
            <RecommendWord>
              {RecommendWord2}
            </RecommendWord>
            <Recommend>
              <RecommendByOne>
                <a href="https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-isfp" target='_blank'>
                  <img src={모험가}></img>
                </a>
                <p>{'ISFP'}</p>
                <Character>{"#조화로운 삶"}</Character>
                <Character>{"#개방적"}</Character>
              </RecommendByOne>
              <RecommendByOne>
                <a href="https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-istp">
                  <img src={장인}></img>
                </a>
                <p>{'ISTP'}</p>
                <Character>{"#색다름 추구"}</Character>
                <Character>{"#장인"}</Character>
              </RecommendByOne>
            </Recommend>
            <StyledButton onClick={OnclickGetFreind}>
              단짝 친구 찾으러 가기
              <VscArrowRight className="arrow" size={35} />
            </StyledButton>
          </div>
        </ResultContainer>
      );
    } else if (testMBTI === "ISFJ") {
      return (
        <ResultContainer>
          <div>
            <MyMbti>
              <a href="https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-isfj" target='_blank'>
                <img src={수호자}></img>
              </a>
              <p>{"ISFJ"}</p>
              <Character>{"#소통 추구"}</Character>
              <Character>{"#충실한 성격"}</Character>
            </MyMbti>
            <RecommendWord>
              {RecommendWord2}
            </RecommendWord>
            <Recommend>
              <RecommendByOne>
                <a href="https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-esfp" target='_blank'>
                  <img src={연예인}></img>
                </a>
                <p>{'ESFP'}</p>
                <Character>{"#즐거움 추구"}</Character>
                <Character>{"#열정적"}</Character>
              </RecommendByOne>
              <RecommendByOne>
                <a href="https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-estp" target='_blank'>
                  <img src={사업가}></img>
                </a>
                <p>{'ESTP'}</p>
                <Character>{"#실천 추구"}</Character>
                <Character>{"#높은 관찰력"}</Character>
              </RecommendByOne>
            </Recommend>
            <StyledButton onClick={OnclickGetFreind}>
              단짝 친구 찾으러 가기
              <VscArrowRight className="arrow" size={35} />
            </StyledButton>
          </div>
        </ResultContainer>
      );
    } else if (testMBTI === "ESTP") {
      return (
        <ResultContainer>
          <div>
            <MyMbti>
              <a href="https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-estp" target='_blank'>
                <img src={사업가}></img>
              </a>
              <p>{"ESTP"}</p>
              <Character>{"#높은 관찰력"}</Character>
              <Character>{"#실천 추구"}</Character>
            </MyMbti>
            <RecommendWord>
              {RecommendWord2}
            </RecommendWord>
            <Recommend>
              <RecommendByOne>
                <a href="https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-isfj" target='_blank'>
                  <img src={수호자}></img>
                </a>
                <p>{'ISFJ'}</p>
                <Character>{"#소통 추구"}</Character>
                <Character>{"#충실한 성격"}</Character>
              </RecommendByOne>
            </Recommend>
            <StyledButton onClick={OnclickGetFreind}>
              단짝 친구 찾으러 가기
              <VscArrowRight className="arrow" size={35} />
            </StyledButton>
          </div>
        </ResultContainer>
      );
    } else if (testMBTI === "ISTP") {
      return (
        <ResultContainer>
          <div>
            <MyMbti>
              <a href="https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-istp">
                <img src={장인}></img>
              </a>
              <p>{"ISTP"}</p>
              <Character>{"#장인"}</Character>
              <Character>{"#색다름 추구"}</Character>
            </MyMbti>
            <RecommendWord>
              {RecommendWord2}
            </RecommendWord>
            <Recommend>
              <RecommendByOne>
                <a href="https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-esfj" target='_blank'>
                  <img src={집정관}></img>
                </a>
                <p>{'ESFJ'}</p>
                <Character>{"#오랜관계 추구"}</Character>
                <Character>{"#책임감"}</Character>
              </RecommendByOne>
              <RecommendByOne>
                <a href="https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-estj" target='_blank'>
                  <img src={경영자}></img>
                </a>
                <p>{'ESTJ'}</p>
                <Character>{"#지도력"}</Character>
                <Character>{"#높은 책임감"}</Character>
              </RecommendByOne>
            </Recommend>
            <StyledButton onClick={OnclickGetFreind}>
              단짝 친구 찾으러 가기
              <VscArrowRight className="arrow" size={35} />
            </StyledButton>
          </div>
        </ResultContainer>
      );
    } else if (testMBTI === "ESFP") {
      return (
        <ResultContainer>
          <div>
            <MyMbti>
              <a href="https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-esfp" target='_blank'>
                <img src={연예인}></img>
              </a>
              <p>{"ESFP"}</p>
              <Character>{"#열정적"}</Character>
              <Character>{"#즐거움 추구"}</Character>
            </MyMbti>
            <RecommendWord>
              {RecommendWord2}
            </RecommendWord>
            <Recommend>
              <RecommendByOne>
                <a href="https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-isfj" target='_blank'>
                  <img src={수호자}></img>
                </a>
                <p>{'ISFJ'}</p>
                <Character>{"#소통 추구"}</Character>
                <Character>{"#충실한 성격"}</Character>
              </RecommendByOne>
              <RecommendByOne>
                <a href="https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-istj" target='_blank'>
                  <img src={현실주의자}></img>
                </a>
                <p>{'ISTJ'}</p>
                <Character>{"#책임감 추구"}</Character>
                <Character>{"#진실한 삶"}</Character>
              </RecommendByOne>
            </Recommend>
            <StyledButton onClick={OnclickGetFreind}>
              단짝 친구 찾으러 가기
              <VscArrowRight className="arrow" size={35} />
            </StyledButton>
          </div>
        </ResultContainer>
      );
    } else if (testMBTI === "ISFP") {
      return (
        <ResultContainer>
          <div>
            <MyMbti>
              <a href="https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-isfp" target='_blank'>
                <img src={모험가}></img>
              </a>|
              <p>{"ISFP"}</p>
              <Character>{"#개방적"}</Character>
              <Character>{"#조화로운 삶"}</Character>
            </MyMbti>
            <RecommendWord>
              {RecommendWord2}
            </RecommendWord>
            <Recommend>
              <RecommendByOne>
                <a href="https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-esfj" target='_blank'>
                  <img src={집정관}></img>
                </a>
                <p>{'ESFJ'}</p>
                <Character>{"#책임감"}</Character>
                <Character>{"#오랜관계 추구"}</Character>
              </RecommendByOne>
              <RecommendByOne>
                <a href="https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-estj" target='_blank'>
                  <img src={경영자}></img>
                </a>
                <p>{'ESTJ'}</p>
                <Character>{"#지도력"}</Character>
                <Character>{"#높은 책임감"}</Character>
              </RecommendByOne>
            </Recommend>
            <StyledButton onClick={OnclickGetFreind}>
              단짝 친구 찾으러 가기
              <VscArrowRight className="arrow" size={35} />
            </StyledButton>
          </div>
        </ResultContainer>
      );
    } else if (testMBTI === "ENTP") {
      return (
        <ResultContainer>
          <div>
            <MyMbti>
              <a href="https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-entp" target='_blank'>
                <img src={변론가}></img>
              </a>
              <p>{"ENTP"}</p>
              <Character>{"#규칙파괴자"}</Character>
              <Character>{"#풍부한 지식"}</Character>
            </MyMbti>
            <RecommendWord>
              {RecommendWord2}
            </RecommendWord>
            <Recommend>
              <RecommendByOne>
                <a href="https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-infj" target='_blank'>
                  <img src={옹호자}></img>
                </a>
                <p>{'INFJ'}</p>
                <Character>{"#소통 추구"}</Character>
                <Character>{"#목적 중시"}</Character>
              </RecommendByOne>
              <RecommendByOne>
                <a href="https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-intj" target='_blank'>
                  <img src={논리술사}></img>
                </a>|
                <p>{'INTJ'}</p>
                <Character>{"#지적갈망"}</Character>
                <Character>{"#개척자정신"}</Character>
              </RecommendByOne>
            </Recommend>
            <StyledButton onClick={OnclickGetFreind}>
              단짝 친구 찾으러 가기
              <VscArrowRight className="arrow" size={35} />
            </StyledButton>
          </div>
        </ResultContainer>
      );
    } else if (testMBTI === "INTP") {
      return (
        <ResultContainer>
          <div>
            <MyMbti>
              <a href="https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-intp" target='_blank'>
                <img src={논리술사}></img>
              </a>
              <p>{"INTP"}</p>
              <Character>{"#아이디어 뿜뿜"}</Character>
              <Character>{"#생각많음"}</Character>
            </MyMbti>
            <RecommendWord>
              {RecommendWord2}
            </RecommendWord>
            <Recommend>
              <RecommendByOne>
                <a href="https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-entj" target='_blank'>
                  <img src={통솔자}></img>
                </a>
                <p>{'ENTJ'}</p>
                <Character>{"#현실적"}</Character>
                <Character>{"#목표 갈망"}</Character>
              </RecommendByOne>
            </Recommend>
            <StyledButton onClick={OnclickGetFreind}>
              단짝 친구 찾으러 가기
              <VscArrowRight className="arrow" size={35} />
            </StyledButton>
          </div>
        </ResultContainer>
      );
    } else if (testMBTI === "ENTJ") {
      return (
        <ResultContainer>
          <div>
            <MyMbti>
              <a href="https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-entj" target='_blank'>
                <img src={통솔자}></img>
              </a>
              <p>{"ENTJ"}</p>
              <Character>{"#목표 갈망"}</Character>
              <Character>{"#현실적"}</Character>
            </MyMbti>
            <RecommendWord>
              {RecommendWord2}
            </RecommendWord>
            <Recommend>
              <RecommendByOne>
                <a href="https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-infj" target='_blank'>
                  <img src={옹호자}></img>
                </a>
                <p>{'INFJ'}</p>
                <Character>{"#소통 추구"}</Character>
                <Character>{"#목적 중시"}</Character>
              </RecommendByOne>
              <RecommendByOne>
                <a href="https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-intp" target='_blank'>
                  <img src={논리술사}></img>
                </a>
                <p>{'INTP'}</p>
                <Character>{"#아이디어 뿜뿜"}</Character>
                <Character>{"#생각많음"}</Character>
              </RecommendByOne>
            </Recommend>
            <StyledButton onClick={OnclickGetFreind}>
              단짝 친구 찾으러 가기
              <VscArrowRight className="arrow" size={35} />
            </StyledButton>
          </div>
        </ResultContainer>
      );
    } else if (testMBTI === "INTJ") {
      return (
        <ResultContainer>
          <div>
            <MyMbti>
              <a href="https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-intj" target='_blank'>
                <img src={논리술사}></img>
              </a>|
              <p>{"INTJ"}</p>
              <Character>{"#개척자정신"}</Character>
              <Character>{"#지적갈망"}</Character>
            </MyMbti>
            <RecommendWord>
              {RecommendWord2}
            </RecommendWord>
            <Recommend>
              <RecommendByOne>
                <a href="https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-enfp" target='_blank'>
                  <img src={활동가}></img>
                </a>
                <p>{'ENFP'}</p>
                <Character>{"#즐거움 추구"}</Character>
                <Character>{"#사교적"}</Character>
              </RecommendByOne>
              <RecommendByOne>
                <a href="https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-entp" target='_blank'>
                  <img src={변론가}></img>
                </a>
                <p>{'ENTP'}</p>
                <Character>{"#규칙파괴자"}</Character>
                <Character>{"#풍부한 지식"}</Character>
              </RecommendByOne>
            </Recommend>
            <StyledButton onClick={OnclickGetFreind}>
              단짝 친구 찾으러 가기
              <VscArrowRight className="arrow" size={35} />
            </StyledButton>
          </div>
        </ResultContainer>
      );
    } else if (testMBTI === "ENFJ") {
      return (
        <ResultContainer>
          <div>
            <MyMbti>
              <a href="https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-enfj" target='_blank'>
                <img src={선도자}></img>
              </a>
              <p>{"ENFJ"}</p>
              <Character>{"#깊은 배려"}</Character>
              <Character>{"#신념 추구"}</Character>
            </MyMbti>
            <RecommendWord>
              {RecommendWord2}
            </RecommendWord>
            <Recommend>
              <RecommendByOne>
                <a href="https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-infp" target='_blank'>
                  <img src={중재자} />
                </a>
                <p>{'INFP'}</p>
                <Character>{"#솔직함 추구"}</Character>
                <Character>{"#공감능력"}</Character>
              </RecommendByOne>
              <RecommendByOne>
                <a href="https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-isfp" target='_blank'>
                  <img src={모험가}></img>
                </a>|
                <p>{'ISFP'}</p>
                <Character>{"#조화로운 삶"}</Character>
                <Character>{"#개방적"}</Character>
              </RecommendByOne>
            </Recommend>
            <StyledButton onClick={OnclickGetFreind}>
              단짝 친구 찾으러 가기
              <VscArrowRight className="arrow" size={35} />
            </StyledButton>
          </div>
        </ResultContainer>
      );
    } else if (testMBTI === "INFJ") {
      return (
        <ResultContainer>
          <div>
            <MyMbti>
              <a href="https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-infj" target='_blank'>
                <img src={옹호자}></img>
              </a>
              <p>{"INFJ"}</p>
              <Character>{"#목적 중시"}</Character>
              <Character>{"#소통 추구"}</Character>
            </MyMbti>
            <RecommendWord>
              {RecommendWord2}
            </RecommendWord>
            <Recommend>
              <RecommendByOne>
                <a href="https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-enfp" target='_blank'>
                  <img src={활동가}></img>
                </a>
                <p>{'ENFP'}</p>
                <Character>{"#사교적"}</Character>
                <Character>{"#즐거움 추구"}</Character>
              </RecommendByOne>
              <RecommendByOne>
                <a href="https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-entp" target='_blank'>
                  <img src={변론가}></img>
                </a>
                <p>{'ENTP'}</p>
                <Character>{"#풍부한 지식"}</Character>
                <Character>{"#규칙파괴자"}</Character>
              </RecommendByOne>
            </Recommend>
            <StyledButton onClick={OnclickGetFreind}>
              단짝 친구 찾으러 가기
              <VscArrowRight className="arrow" size={35} />
            </StyledButton>
          </div>
        </ResultContainer>
      );
    } else if (testMBTI === "ENFP") {
      return (
        <ResultContainer>
          <div>
            <MyMbti>
              <a href="https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-enfp" target='_blank'>
                <img src={활동가}></img>
              </a>
              <p>{"ENFP"}</p>
              <Character>{"#사교적"}</Character>
              <Character>{"#즐거움 추구"}</Character>
            </MyMbti>
            <RecommendWord>
              {RecommendWord2}
            </RecommendWord>
            <Recommend>
              <RecommendByOne>
                <a href="https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-infj" target='_blank'>
                  <img src={옹호자}></img>
                </a>
                <p>{'INFJ'}</p>
                <Character>{"#목적 중시"}</Character>
                <Character>{"#소통 추구"}</Character>
              </RecommendByOne>
              <RecommendByOne>
                <a href="https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-intj" target='_blank'>
                  <img src={논리술사}></img>
                </a>|
                <p>{'INTJ'}</p>
                <Character>{"#개척자정신"}</Character>
                <Character>{"#지적갈망"}</Character>
              </RecommendByOne>
            </Recommend>
            <StyledButton onClick={OnclickGetFreind}>
              단짝 친구 찾으러 가기
              <VscArrowRight className="arrow" size={35} />
            </StyledButton>
          </div>
        </ResultContainer>
      );
    } else if (testMBTI === "INFP") {
      return (
        <ResultContainer>
          <div>
            <MyMbti>
              <a href="https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-infp" target='_blank'>
                <img src={중재자} />
              </a>
              <p>{"INFP"}</p>
              <Character>{"#공감능력"}</Character>
              <Character>{"#솔직함 추구"}</Character>
            </MyMbti>
            <RecommendWord>
              {RecommendWord2}
            </RecommendWord>
            <Recommend>
              <RecommendByOne>
                <a href="https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-enfj" target='_blank'>
                  <img src={선도자}></img>
                </a>
                <p>{'ENFJ'}</p>
                <Character>{"#신념 추구"}</Character>
                <Character>{"#깊은 배려"}</Character>
              </RecommendByOne>
              <RecommendByOne>
                <a href="https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-entj" target='_blank'>
                  <img src={통솔자}></img>
                </a>
                <p>{'ENTJ'}</p>
                <Character>{"#현실적"}</Character>
                <Character>{"#목표 갈망"}</Character>
              </RecommendByOne>
            </Recommend>
            <StyledButton onClick={OnclickGetFreind}>
              단짝 친구 찾으러 가기
              <VscArrowRight className="arrow" size={35} />
            </StyledButton>
            <DetailWord>해당 mbti에 대한 더 자세한 정보는 이미지를 클릭해주세요.</DetailWord>
          </div>
        </ResultContainer>
      );
    }
  }


  //선택지
  function onClick3Yes1() {
    let index = count2 / 5 - 1;

    setCount(count + 1);
    setCount2(count2 + 1);

    console.log(index + ' ' + EnI)
    setEnI(EnI => EnI + 3.1);
    let current = EnI + 3.1;
    if (current < 0 && (count2 / 5) === 1) {
      setTestMBTI(testMBTI + answerNoList.answer[index]);
      console.log('작동1-1');
    } else if (current > 0 && (count2 / 5) === 1) {
      setTestMBTI(testMBTI + answerYesList.answer[index]);
      console.log('작동1-2');
    }
  }
  function onClick2Yes1() {
    let index = count2 / 5 - 1;

    setCount(count + 1);
    setCount2(count2 + 1);

    console.log(index + ' ' + EnI)
    setEnI(EnI => EnI + 2.1);
    let current = EnI + 2.1;
    if (current < 0 && (count2 / 5) === 1) {
      setTestMBTI(testMBTI + answerNoList.answer[index]);
      console.log('작동1-1');
    } else if (current > 0 && (count2 / 5) === 1) {
      setTestMBTI(testMBTI + answerYesList.answer[index]);
      console.log('작동1-2');
    }
  }
  function onClick1Yes1() {
    let index = count2 / 5 - 1;

    setCount(count + 1);
    setCount2(count2 + 1);

    console.log(index + ' ' + EnI)
    setEnI(EnI => EnI + 1.1);
    let current = EnI + 1.1;
    if (current < 0 && (count2 / 5) === 1) {
      setTestMBTI(testMBTI + answerNoList.answer[index]);
      console.log('작동1-1');
    } else if (current > 0 && (count2 / 5) === 1) {
      setTestMBTI(testMBTI + answerYesList.answer[index]);
      console.log('작동1-2');
    }
  }

  function onClick1No1() {

    let index = count2 / 5 - 1;
    let index2 = count / EnI


    setCount(count + 1);
    setCount2(count2 + 1);
    setEnI(EnI - 1.1);
    let current = EnI - 1.1;


    console.log(index + ' ' + EnI + ' ' + index2)

    if (current < 0 && (count2 / 5) === 1) {
      setTestMBTI(testMBTI + answerNoList.answer[index]);
      console.log('작동2-1');
    } else if (current > 0 && (count2 / 5) === 1) {
      setTestMBTI(testMBTI + answerYesList.answer[index]);
      console.log('작동2-2');
    }
  }
  function onClick2No1() {

    let index = count2 / 5 - 1;
    let index2 = count / EnI


    setCount(count + 1);
    setCount2(count2 + 1);
    setEnI(EnI - 2.1);
    let current = EnI - 2.1;


    console.log(index + ' ' + EnI + ' ' + index2)

    if (current < 0 && (count2 / 5) === 1) {
      setTestMBTI(testMBTI + answerNoList.answer[index]);
      console.log('작동2-1');
    } else if (current > 0 && (count2 / 5) === 1) {
      setTestMBTI(testMBTI + answerYesList.answer[index]);
      console.log('작동2-2');
    }
  }
  function onClick3No1() {

    let index = count2 / 5 - 1;
    let index2 = count / EnI


    setCount(count + 1);
    setCount2(count2 + 1);
    setEnI(EnI - 3.1);
    let current = EnI - 3.1;


    console.log(index + ' ' + EnI + ' ' + index2)

    if (current < 0 && (count2 / 5) === 1) {
      setTestMBTI(testMBTI + answerNoList.answer[index]);
      console.log('작동2-1');
    } else if (current > 0 && (count2 / 5) === 1) {
      setTestMBTI(testMBTI + answerYesList.answer[index]);
      console.log('작동2-2');
    }
  }

  function onClick3Yes2() {

    let index = count2 / 5 - 1;

    setCount(count + 1);
    setCount2(count2 + 1);
    setSnN((SnN) => SnN + 3.1);
    let current = SnN + 3.1;



    console.log(index + ' ' + SnN)

    if (current < 0 && (count2 / 5) === 2) {
      setTestMBTI(testMBTI + answerNoList.answer[index]);
      console.log('작동3-1');
    } else if (current > 0 && (count2 / 5) === 2) {
      setTestMBTI(testMBTI + answerYesList.answer[index]);
      console.log('작동3-2');
    }
  }
  function onClick2Yes2() {

    let index = count2 / 5 - 1;

    setCount(count + 1);
    setCount2(count2 + 1);
    setSnN((SnN) => SnN + 2.1);
    let current = SnN + 2.1;



    console.log(index + ' ' + SnN)

    if (current < 0 && (count2 / 5) === 2) {
      setTestMBTI(testMBTI + answerNoList.answer[index]);
      console.log('작동3-1');
    } else if (current > 0 && (count2 / 5) === 2) {
      setTestMBTI(testMBTI + answerYesList.answer[index]);
      console.log('작동3-2');
    }
  }
  function onClick1Yes2() {

    let index = count2 / 5 - 1;

    setCount(count + 1);
    setCount2(count2 + 1);
    setSnN((SnN) => SnN + 1.1);
    let current = SnN + 1.1;



    console.log(index + ' ' + SnN)

    if (current < 0 && (count2 / 5) === 2) {
      setTestMBTI(testMBTI + answerNoList.answer[index]);
      console.log('작동3-1');
    } else if (current > 0 && (count2 / 5) === 2) {
      setTestMBTI(testMBTI + answerYesList.answer[index]);
      console.log('작동3-2');
    }
  }

  function onClick1No2() {
    let index = count2 / 5 - 1;

    setCount(count + 1);
    setCount2(count2 + 1);
    setSnN((SnN) => SnN - 1.1);
    let current = SnN - 1.1;


    console.log(index + ' ' + SnN)

    if (current < 0 && (count2 / 5) === 2) {
      setTestMBTI(testMBTI + answerNoList.answer[index]);
      console.log('작동4-1');
    } else if (current > 0 && (count2 / 5) === 2) {
      setTestMBTI(testMBTI + answerYesList.answer[index]);
      console.log('작동4-2');
    }
  }
  function onClick2No2() {
    let index = count2 / 5 - 1;

    setCount(count + 1);
    setCount2(count2 + 1);
    setSnN((SnN) => SnN - 2.1);
    let current = SnN - 2.1;


    console.log(index + ' ' + SnN)

    if (current < 0 && (count2 / 5) === 2) {
      setTestMBTI(testMBTI + answerNoList.answer[index]);
      console.log('작동4-1');
    } else if (current > 0 && (count2 / 5) === 2) {
      setTestMBTI(testMBTI + answerYesList.answer[index]);
      console.log('작동4-2');
    }
  }
  function onClick3No2() {
    let index = count2 / 5 - 1;

    setCount(count + 1);
    setCount2(count2 + 1);
    setSnN((SnN) => SnN - 3.1);
    let current = SnN - 3.1;


    console.log(index + ' ' + SnN)

    if (current < 0 && (count2 / 5) === 2) {
      setTestMBTI(testMBTI + answerNoList.answer[index]);
      console.log('작동4-1');
    } else if (current > 0 && (count2 / 5) === 2) {
      setTestMBTI(testMBTI + answerYesList.answer[index]);
      console.log('작동4-2');
    }
  }
  function onClick3Yes3() {
    let index = count2 / 5 - 1;

    setCount(count + 1);
    setCount2(count2 + 1);
    setTnF((TnF) => TnF + 3.1);
    let current = TnF + 3.1;

    console.log(index + ' ' + TnF)

    if (current < 0 && (count2 / 5) === 3) {
      setTestMBTI(testMBTI + answerNoList.answer[index]);
      console.log('작동5-1');
    } else if (current > 0 && (count2 / 5) === 3) {
      setTestMBTI(testMBTI + answerYesList.answer[index]);
      console.log('작동5-2');
    }
  }
  function onClick2Yes3() {
    let index = count2 / 5 - 1;

    setCount(count + 1);
    setCount2(count2 + 1);
    setTnF((TnF) => TnF + 2.1);
    let current = TnF + 2.1;

    console.log(index + ' ' + TnF)

    if (current < 0 && (count2 / 5) === 3) {
      setTestMBTI(testMBTI + answerNoList.answer[index]);
      console.log('작동5-1');
    } else if (current > 0 && (count2 / 5) === 3) {
      setTestMBTI(testMBTI + answerYesList.answer[index]);
      console.log('작동5-2');
    }
  }
  function onClick1Yes3() {
    let index = count2 / 5 - 1;

    setCount(count + 1);
    setCount2(count2 + 1);
    setTnF((TnF) => TnF + 1.1);
    let current = TnF + 1.1;

    console.log(index + ' ' + TnF)

    if (current < 0 && (count2 / 5) === 3) {
      setTestMBTI(testMBTI + answerNoList.answer[index]);
      console.log('작동5-1');
    } else if (current > 0 && (count2 / 5) === 3) {
      setTestMBTI(testMBTI + answerYesList.answer[index]);
      console.log('작동5-2');
    }
  }

  function onClick1No3() {
    let index = count2 / 5 - 1;

    setCount(count + 1);
    setCount2(count2 + 1);
    setTnF((TnF) => TnF - 1.1);
    let current = TnF - 1.1;

    console.log(index + ' ' + TnF)

    if (current < 0 && (count2 / 5) === 3) {
      setTestMBTI(testMBTI + answerNoList.answer[index]);
      console.log('작동6-1');
    } else if (current > 0 && (count2 / 5) === 3) {
      setTestMBTI(testMBTI + answerYesList.answer[index]);
      console.log('작동6-2');
    }

  }
  function onClick2No3() {
    let index = count2 / 5 - 1;

    setCount(count + 1);
    setCount2(count2 + 1);
    setTnF((TnF) => TnF - 2.1);
    let current = TnF - 2.1;

    console.log(index + ' ' + TnF)

    if (current < 0 && (count2 / 5) === 3) {
      setTestMBTI(testMBTI + answerNoList.answer[index]);
      console.log('작동6-1');
    } else if (current > 0 && (count2 / 5) === 3) {
      setTestMBTI(testMBTI + answerYesList.answer[index]);
      console.log('작동6-2');
    }

  }
  function onClick3No3() {
    let index = count2 / 5 - 1;

    setCount(count + 1);
    setCount2(count2 + 1);
    setTnF((TnF) => TnF - 3.1);
    let current = TnF - 3.1;

    console.log(index + ' ' + TnF)

    if (current < 0 && (count2 / 5) === 3) {
      setTestMBTI(testMBTI + answerNoList.answer[index]);
      console.log('작동6-1');
    } else if (current > 0 && (count2 / 5) === 3) {
      setTestMBTI(testMBTI + answerYesList.answer[index]);
      console.log('작동6-2');
    }

  }
  const onClick3Yes4 = async (e) => {
    let index = count2 / 5 - 1;


    setCount(count + 1);
    setCount2(count2 + 1);
    setJnP((JnP) => JnP + 3.1);
    let current = JnP + 3.1;


    console.log(index + ' ' + JnP)

    if (current < 0 && (count2 / 5) === 4) {
      setTestMBTI(testMBTI + answerNoList.answer[index]);
      let MBTI = testMBTI + answerNoList.answer[index];
      console.log('작동8-1');
      console.log(testMBTI);
      try {
        const res = await TeamAPI.mbtiReg(MBTI, localId);
        console.log("res.data : " + res.data);
        if (res.data === true) {
          alert("저장이 잘 되었는지 확인해봐요.")
        } else {
          alert("아이디 또는 비밀번호를 확인하세요!");
        }
      } catch (e) {
        alert("오류 발생!! 아이디(" + localId + ")랑 비밀번호는 일단 넘어와요.");
        console.log("로그인 에러!! 왜 또 안 될까..?");
      }


    } else if (current > 0 && (count2 / 5) === 4) {
      setTestMBTI(testMBTI + answerYesList.answer[index]);
      let MBTI = testMBTI + answerYesList.answer[index];
      console.log('작동8-2');
      console.log(testMBTI);
      try {
        const res = await TeamAPI.mbtiReg(MBTI, localId);
        console.log("res.data : " + res.data);
        if (res.data === true) {
          alert("저장이 잘 되었는지 확인해봐요.")
        } else {
          alert("아이디 또는 비밀번호를 확인하세요!");
        }
      } catch (e) {
        alert("오류 발생!! 아이디(" + localId + ")랑 비밀번호는 일단 넘어와요.");
        console.log("로그인 에러!! 왜 또 안 될까..?");
      }
    }
  }
  const onClick2Yes4 = async (e) => {
    let index = count2 / 5 - 1;


    setCount(count + 1);
    setCount2(count2 + 1);
    setJnP((JnP) => JnP + 2.1);
    let current = JnP + 2.1;


    console.log(index + ' ' + JnP)

    if (current < 0 && (count2 / 5) === 4) {
      setTestMBTI(testMBTI + answerNoList.answer[index]);
      let MBTI = testMBTI + answerNoList.answer[index];
      console.log('작동8-1');
      console.log(testMBTI);
      try {
        const res = await TeamAPI.mbtiReg(MBTI, localId);
        console.log("res.data : " + res.data);
        if (res.data === true) {
          alert("저장이 잘 되었는지 확인해봐요.")
        } else {
          alert("아이디 또는 비밀번호를 확인하세요!");
        }
      } catch (e) {
        alert("오류 발생!! 아이디(" + localId + ")랑 비밀번호는 일단 넘어와요.");
        console.log("로그인 에러!! 왜 또 안 될까..?");
      }


    } else if (current > 0 && (count2 / 5) === 4) {
      setTestMBTI(testMBTI + answerYesList.answer[index]);
      let MBTI = testMBTI + answerYesList.answer[index];
      console.log('작동8-2');
      console.log(testMBTI);
      try {
        const res = await TeamAPI.mbtiReg(MBTI, localId);
        console.log("res.data : " + res.data);
        if (res.data === true) {
          alert("저장이 잘 되었는지 확인해봐요.")
        } else {
          alert("아이디 또는 비밀번호를 확인하세요!");
        }
      } catch (e) {
        alert("오류 발생!! 아이디(" + localId + ")랑 비밀번호는 일단 넘어와요.");
        console.log("로그인 에러!! 왜 또 안 될까..?");
      }
    }
  }
  const onClick1Yes4 = async (e) => {
    let index = count2 / 5 - 1;


    setCount(count + 1);
    setCount2(count2 + 1);
    setJnP((JnP) => JnP + 1.1);
    let current = JnP + 1.1;


    console.log(index + ' ' + JnP)

    if (current < 0 && (count2 / 5) === 4) {
      setTestMBTI(testMBTI + answerNoList.answer[index]);
      let MBTI = testMBTI + answerNoList.answer[index];
      console.log('작동8-1');
      console.log(testMBTI);
      try {
        const res = await TeamAPI.mbtiReg(MBTI, localId);
        console.log("res.data : " + res.data);
        if (res.data === true) {
          alert("저장이 잘 되었는지 확인해봐요.")
        } else {
          alert("아이디 또는 비밀번호를 확인하세요!");
        }
      } catch (e) {
        alert("오류 발생!! 아이디(" + localId + ")랑 비밀번호는 일단 넘어와요.");
        console.log("로그인 에러!! 왜 또 안 될까..?");
      }


    } else if (current > 0 && (count2 / 5) === 4) {
      setTestMBTI(testMBTI + answerYesList.answer[index]);
      let MBTI = testMBTI + answerYesList.answer[index];
      console.log('작동8-2');
      console.log(testMBTI);
      try {
        const res = await TeamAPI.mbtiReg(MBTI, localId);
        console.log("res.data : " + res.data);
        if (res.data === true) {
          alert("저장이 잘 되었는지 확인해봐요.")
        } else {
          alert("아이디 또는 비밀번호를 확인하세요!");
        }
      } catch (e) {
        alert("오류 발생!! 아이디(" + localId + ")랑 비밀번호는 일단 넘어와요.");
        console.log("로그인 에러!! 왜 또 안 될까..?");
      }
    }
  }

  const onClick1No4 = async (e) => {
    let index = count2 / 5 - 1;

    setCount(count + 1);
    setCount2(count2 + 1);
    setJnP((JnP) => JnP - 1.1);
    let current = JnP - 1.1;


    console.log(index + ' ' + JnP)

    if (current < 0 && (count2 / 5) === 4) {
      setTestMBTI(testMBTI + answerNoList.answer[index]);
      let MBTI = testMBTI + answerNoList.answer[index];
      console.log('작동8-1');
      console.log(testMBTI);
      try {
        const res = await TeamAPI.mbtiReg(MBTI, localId);
        console.log("res.data : " + res.data);
        if (res.data === true) {
          alert("저장이 잘 되었는지 확인해봐요.")
        } else {
          alert("아이디 또는 비밀번호를 확인하세요!");
        }
      } catch (e) {
        alert("오류 발생!! 아이디(" + localId + ")랑 비밀번호는 일단 넘어와요.");
        console.log("로그인 에러!! 왜 또 안 될까..?");
      }


    } else if (current > 0 && (count2 / 5) === 4) {
      setTestMBTI(testMBTI + answerYesList.answer[index]);
      let MBTI = testMBTI + answerYesList.answer[index];
      console.log('작동8-2');
      console.log(testMBTI);
      try {
        const res = await TeamAPI.mbtiReg(MBTI, localId);
        console.log("res.data : " + res.data);
        if (res.data === true) {
          alert("저장이 잘 되었는지 확인해봐요.")
        } else {
          alert("아이디 또는 비밀번호를 확인하세요!");
        }
      } catch (e) {
        alert("오류 발생!! 아이디(" + localId + ")랑 비밀번호는 일단 넘어와요.");
        console.log("로그인 에러!! 왜 또 안 될까..?");
      }
    }
  }
  const onClick2No4 = async (e) => {
    let index = count2 / 5 - 1;

    setCount(count + 1);
    setCount2(count2 + 1);
    setJnP((JnP) => JnP - 2.1);
    let current = JnP - 2.1;


    console.log(index + ' ' + JnP)

    if (current < 0 && (count2 / 5) === 4) {
      setTestMBTI(testMBTI + answerNoList.answer[index]);
      let MBTI = testMBTI + answerNoList.answer[index];
      console.log('작동8-1');
      console.log(testMBTI);
      try {
        const res = await TeamAPI.mbtiReg(MBTI, localId);
        console.log("res.data : " + res.data);
        if (res.data === true) {
          alert("저장이 잘 되었는지 확인해봐요.")
        } else {
          alert("아이디 또는 비밀번호를 확인하세요!");
        }
      } catch (e) {
        alert("오류 발생!! 아이디(" + localId + ")랑 비밀번호는 일단 넘어와요.");
        console.log("로그인 에러!! 왜 또 안 될까..?");
      }


    } else if (current > 0 && (count2 / 5) === 4) {
      setTestMBTI(testMBTI + answerYesList.answer[index]);
      let MBTI = testMBTI + answerYesList.answer[index];
      console.log('작동8-2');
      console.log(testMBTI);
      try {
        const res = await TeamAPI.mbtiReg(MBTI, localId);
        console.log("res.data : " + res.data);
        if (res.data === true) {
          alert("저장이 잘 되었는지 확인해봐요.")
        } else {
          alert("아이디 또는 비밀번호를 확인하세요!");
        }
      } catch (e) {
        alert("오류 발생!! 아이디(" + localId + ")랑 비밀번호는 일단 넘어와요.");
        console.log("로그인 에러!! 왜 또 안 될까..?");
      }
    }
  }
  const onClick3No4 = async (e) => {
    let index = count2 / 5 - 1;

    setCount(count + 1);
    setCount2(count2 + 1);
    setJnP((JnP) => JnP - 3.1);
    let current = JnP - 3.1;


    console.log(index + ' ' + JnP)

    if (current < 0 && (count2 / 5) === 4) {
      setTestMBTI(testMBTI + answerNoList.answer[index]);
      let MBTI = testMBTI + answerNoList.answer[index];
      console.log('작동8-1');
      console.log(testMBTI);
      try {
        const res = await TeamAPI.mbtiReg(MBTI, localId);
        console.log("res.data : " + res.data);
        if (res.data === true) {
          alert("저장이 잘 되었는지 확인해봐요.")
        } else {
          alert("아이디 또는 비밀번호를 확인하세요!");
        }
      } catch (e) {
        alert("오류 발생!! 아이디(" + localId + ")랑 비밀번호는 일단 넘어와요.");
        console.log("로그인 에러!! 왜 또 안 될까..?");
      }


    } else if (current > 0 && (count2 / 5) === 4) {
      setTestMBTI(testMBTI + answerYesList.answer[index]);
      let MBTI = testMBTI + answerYesList.answer[index];
      console.log('작동8-2');
      console.log(testMBTI);
      try {
        const res = await TeamAPI.mbtiReg(MBTI, localId);
        console.log("res.data : " + res.data);
        if (res.data === true) {
          alert("저장이 잘 되었는지 확인해봐요.")
        } else {
          alert("아이디 또는 비밀번호를 확인하세요!");
        }
      } catch (e) {
        alert("오류 발생!! 아이디(" + localId + ")랑 비밀번호는 일단 넘어와요.");
        console.log("로그인 에러!! 왜 또 안 될까..?");
      }
    }
  }




  //문제 및 선택지 출력
  return (
    <QuizContainer>
      {props.questionList.map((e, idx) => {
        if (count === idx && idx < 5) {
          return (
            <>
              <NumContainer key={idx}>
                <Num>{count + 1}번 문제</Num>
                <p>{e.question}</p>
                <OXcontainer>
                  <ObuttonContainer>
                    <O3 onClick={onClick3Yes1}></O3>
                    <O2 onClick={onClick2Yes1}></O2>
                    <O1 onClick={onClick1Yes1}></O1>
                    <X1 onClick={onClick1No1}></X1>
                    <X2 onClick={onClick2No1}></X2>
                    <X3 onClick={onClick3No1}></X3>
                  </ObuttonContainer>
                  <Word1>동의</Word1>
                  <Word2>비동의</Word2>
                </OXcontainer>
              </NumContainer>
            </>
          );
        } else if (count === idx && idx < 10) {
          return (
            <>
              <NumContainer key={idx}>
                <Num>{count + 1}번 문제</Num>
                <p>{e.question}</p>
                <OXcontainer>
                  <ObuttonContainer>
                    <O3 onClick={onClick3Yes2}></O3>
                    <O2 onClick={onClick2Yes2}></O2>
                    <O1 onClick={onClick1Yes2}></O1>
                    <X1 onClick={onClick1No2}></X1>
                    <X2 onClick={onClick2No2}></X2>
                    <X3 onClick={onClick3No2}></X3>
                  </ObuttonContainer>
                  <Word1>동의</Word1>
                  <Word2>비동의</Word2>
                </OXcontainer>
              </NumContainer>
            </>
          );
        } else if (count === idx && idx < 15) {
          return (
            <>
              <NumContainer key={idx}>
                <Num>{count + 1}번 문제</Num>
                <p>{e.question}</p>
                <OXcontainer>
                  <ObuttonContainer>

                    <O3 onClick={onClick3Yes3}></O3>
                    <O2 onClick={onClick2Yes3}></O2>
                    <O1 onClick={onClick1Yes3}></O1>
                    <X1 onClick={onClick1No3}></X1>
                    <X2 onClick={onClick2No3}></X2>
                    <X3 onClick={onClick3No3}></X3>
                  </ObuttonContainer>
                  <Word1>동의</Word1>
                  <Word2>비동의</Word2>

                </OXcontainer>
              </NumContainer>
            </>
          );
        } else if (count === idx && idx < 20) {
          return (
            <>
              <NumContainer key={idx}>
                <Num>{count + 1}번 문제</Num>
                <p>{e.question}</p>
                <OXcontainer>
                  <ObuttonContainer>
                    <O3 onClick={onClick3Yes4}></O3>
                    <O2 onClick={onClick2Yes4}></O2>
                    <O1 onClick={onClick1Yes4}></O1>
                    <X1 onClick={onClick1No4}></X1>
                    <X2 onClick={onClick2No4}></X2>
                    <X3 onClick={onClick3No4}></X3>
                  </ObuttonContainer>
                  <Word1>동의</Word1>
                  <Word2>비동의</Word2>
                </OXcontainer>
              </NumContainer>
            </>
          );
        }
      })}

    </QuizContainer>
  );
}



const MBTI = () => {
  const navigate = useNavigate();

  const cookies = new Cookies();
  const localId = cookies.get('rememberId');
  if (localId === undefined) navigate("/login");

  const currentId = window.localStorage.getItem("userId");
  const currentPw = window.localStorage.getItem("userPw");

  console.log("\n\n현재 localStorage 에 저장된 ID : " + currentId);
  console.log("\n\n현재 localStorage 에 저장된 PASSWORD : " + currentPw);

  const [states, setStates] = useState({
    mode: 'start',
    questionList: [
      { question: "나는 사교적이며 활동적이다.", check_O: "O", check_X: "X" },
      { question: "나는 사람들과 함께 있을때 에너지를 얻는다.", check_O: "O", check_X: "X" },
      { question: "대인관계를 넓고 다양하게 유지하는 편이다.", check_O: "O", check_X: "X" },
      { question: "글보다는 말로 표현하는 것이 좋다.", check_O: "O", check_X: "X" },
      { question: "생각보다 행동이 앞선다.", check_O: "O", check_X: "X" },
      { question: "나는 오감에 의존한다.", check_O: "O", check_X: "X" },
      { question: "근거없는 예감을 믿지 않는다.", check_O: "O", check_X: "X" },
      { question: "미래에 대한 생각보다는 현재에 집중한다.", check_O: "O", check_X: "X" },
      { question: "간접 경험보다는 직접 행동으로 경험하는 것을 선호한다.", check_O: "O", check_X: "X" },
      { question: "본인이 명확함, 사실, 실용적 등의 단어와 어울린다.", check_O: "O", check_X: "X" },
      { question: "나는 분석적이고 논리적이다.", check_O: "O", check_X: "X" },
      { question: "나는 감정적인 호소 보다는 논리적인 호소에 설득이 잘된다.", check_O: "O", check_X: "X" },
      { question: "비교적 협력보다 경쟁을 통해 성장할 수 있다고 생각한다.", check_O: "O", check_X: "X" },
      { question: "나는 어떠한 일에 동정심을 느끼기 보다는 해결책을 제시한다.", check_O: "O", check_X: "X" },
      { question: "나의 논리적인 부분이 감정적인 부분을 컨트롤 할 수 있다.", check_O: "O", check_X: "X" },
      { question: "나는 철처하고 계획적이다", check_O: "O", check_X: "X" },
      { question: "나는 데이트를 할때 모든 계획을 세워두고 만나는 편이다.", check_O: "O", check_X: "X" },
      { question: "나는 선택의 여지를 주는것을 좋아하지 않는다.", check_O: "O", check_X: "X" },
      { question: "나는 머릿속에 늘 체크리스트를 가지고 다닌다.", check_O: "O", check_X: "X" },
      { question: "나는 당장의 흥미보다는 미래의 안정이 더 중요하다.", check_O: "O", check_X: "X" }
    ]
  });

  function changeMode(mode) {
    setStates({ ...states, ['mode']: mode })
  }

  return (
    <div className='Container'>
      <Container>
        {/* mode 가 main 일 때 */}
        {states.mode === 'start'
          ?
          <StartContainer>
            <Sentence1>당신은 이 검사가 끝나고
              <span>m</span>
              <span>b</span>
              <span>t</span>
              <span>i</span>
              <br /><span>ISOUR</span> 의 검사가 너무 정확해<br /> "조금 소름이 돋을 정도예요"<br /> 라고 말할것입니다.</Sentence1>
            <p />
            <Sentence2>여러분의 특성을 파악하고 그 특성을 통한<br /> <span>인생 최고의 친구</span>를 찾으세요!</Sentence2>

            <Startbtn onClick={() => { changeMode('quiz') }}>검 사 시 작 <VscArrowRight className="arrow" size={35} /></Startbtn>
            <Mbtiword>
              <span>m</span>
              <span>b</span>
              <span>t</span>
              <span>i</span>
            </Mbtiword>
            <MdQuiz size={80} className='mbti-quiz' /><MdPsychology size={80} className='mbti-brain' />
            <p></p>
            <IoPeople className='mbti-person1' size={180} /><IoPersonAdd className='mbti-person2' size={120} />

          </StartContainer>

          : null
        }
        {/* mode 가 quiz 일 때 */}
        {states.mode === 'quiz'
          ? <Quiz questionList={states.questionList} />
          : null
        }
      </Container>
    </div>
  )
}

export default MBTI;