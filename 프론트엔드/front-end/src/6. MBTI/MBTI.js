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

//스타일 컴포넌트

const Startbtn = styled.button`
  background: black;
  color: white;
  padding: 1rem;
  width: 500px;
  border-radius: 100px;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 25px;
  background-color: orangered;
  border-color: red;
  transition: all .2s ea  se-in-out;
  font-weight: 900;  

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

const Word1 = styled.div`
  position: relative;
  font-size: 25px;
  width:800px;
  height: 20px;
  top:400px;
  left:160px;
  color:skyblue;

`;
const Word2 = styled.div`
  position: relative;
  font-size: 25px;
  width:800px;
  height: 20px;
  top:400px;
  right:162px;
  color:orangered;

`;
const NumContainer = styled.div`
  font-size: 35px;
  font-weight: bold;
  text-align: center;
`;
const Num = styled.span`
  position: relative;
  top:200px;
  font-size: 0.8em;
  border-radius: 30px;
  background: #fef5d4;
  border: 0;
  display: inline-block;
  width: 200px;
  height: 50px;
  margin-bottom: 500px;
`;
const OXcontainer = styled.div`
    display: flex;
    margin : 0 auto;    
    width: 1180px;
    position: relative;
    left: 0;
    z-index: 1;
    bottom:500px;
`;
const QuizContainer = styled.div`
   display: flex;
`


const O3 = styled.div`
    display: flex;  
    color: skyblue;
    width: 50%;
    height: 500px;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 200px;
    cursor: pointer;
    :hover {
      transition-duration: .5s;
      text-shadow: 10px 10px 10px rgba(0, 0, 0, 5);
    }
    &:active{
    transition-duration: .5s;
    transform: translateY(5px);
  }
`;
const X3 = styled.div`
    display: flex;  
    color: orangered;
    width: 50%;
    height: 500px;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 200px;
    cursor: pointer;
    :hover {
      transition-duration: .5s;
      text-shadow: 10px 10px 10px rgba(0, 0, 0, 5);
    }
    &:active{
    transition-duration: .5s;
    transform: translateY(5px);
  }
`;
const O2 = styled.div`
    display: flex;  
    color: skyblue;
    width: 50%;
    height: 500px;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 130px;
    position: relative;
    left:17px;
    cursor: pointer;
    :hover {
      transition-duration: .5s;
      text-shadow: 10px 10px 10px rgba(0, 0, 0, 5);
    }
    &:active{
    transition-duration: .5s;
    transform: translateY(5px);
  }
`;
const X2 = styled.div`
    display: flex;  
    color: orangered;
    width: 50%;
    height: 500px;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 130px;
    position: relative;
    right:17px;
    cursor: pointer;
    :hover {
      transition-duration: .5s;
      text-shadow: 10px 10px 10px rgba(0, 0, 0, 5);
    }
    &:active{
    transition-duration: .5s;
    transform: translateY(5px);
  }
`;
const O1 = styled.div`
    display: flex;  
    color: skyblue;
    width: 50%;
    height: 500px;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 80px;
    position: relative;
    left:10px;
    cursor: pointer;
    :hover {
      transition-duration: .5s;
      text-shadow: 10px 10px 10px rgba(0, 0, 0, 5);
    }
    &:active{
    transition-duration: .5s;
    transform: translateY(5px);
  }
`;
const X1 = styled.div`
    display: flex;  
    color: orangered;
    width: 50%;
    height: 500px;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 80px;
    position: relative;
    right:10px;
    cursor: pointer;
    :hover {
      transition-duration: .5s;
      text-shadow: 10px 10px 10px rgba(0, 0, 0, 5);
    }
    &:active{
    transition-duration: .5s;
    transform: translateY(5px);
  }
`;
const Recommend = styled.div`
  display: flex;
  width :800px;
  margin: 0 auto;
`;
const RecommendByOne = styled.div`
  &>a>img{
    width:200px;
  }
  &>p{
    font-size: 20px;
    text-align: center;
  }
  margin: 0 auto;
`;
const ResultContainer = styled.div`
  width :1180px;
  margin : 100 auto 0;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  
`;
const MyMbti = styled.div`
  width:320px;
  margin:0 380px;
  font-size: 30px;
  text-align: center;

`
const StyledButton = styled.button`
    background: black;
  color: white;
  padding: 1rem;
  width: 500px;
  border-radius: 100px;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 25px;
  background-color: skyblue;
  border-color: skyblue;
  transition: all .2s ea  se-in-out;
  font-weight: 900;  
  position: relative;
  left :300px;

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
const RecommendWord = styled.div`
  color: orangered;
  font-weight: 900;
  font-size: 40px;
  position: relative;
  text-align:center;
`

const Character = styled.p`
  color: red;
  font-weight: 900;
  font-size: 25px;
  position: relative;
  text-align:center;
`
const StartContainer = styled.div`
  text-align: center;
  max-width:600px;
  
  min-height: 800px;
  max-height:800px;
  border: 2px greenyellow solid;
  position: relative;
  top:100px;
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
    font-family: "Jalnan";
    justify-content: center;
    display: flex;
    align-items: center;
`

const Sentence1 = styled.div`
  font-size: 35px;
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
  font-size: 40px;
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
  const cookies = new Cookies();

  const localId = cookies.get('rememberId');
  if (localId === undefined) window.location.replace("/");


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
              <Character>{"#진실한 삶 #책임감 추구"}</Character>
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
                <Character>{"#열정적 #즐거움 추구"}</Character>
              </RecommendByOne>
            </Recommend>
            <StyledButton>
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
              <Character>{"#높은 책임감 #지도력"}</Character>
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
                <Character>{"#생각많음 #아이디어 뿜뿜"}</Character>
              </RecommendByOne>
              <RecommendByOne>
                <a href="https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-isfp" target='_blank'>
                  <img src={모험가}></img>
                </a>|
                <p>{'ISFP'}</p>
                <Character>{"#개방적 #조화로운 삶"}</Character>
              </RecommendByOne>
              <RecommendByOne>
                <a href="https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-istp">
                  <img src={장인}></img>
                </a>
                <p>{'ISTP'}</p>
                <Character>{"#장인 #색다름 추구"}</Character>
              </RecommendByOne>
            </Recommend>
            <StyledButton>
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
              <Character>{"#책임감 #오랜관계 추구"}</Character>
            </MyMbti>
            <RecommendWord>
              {RecommendWord2}
            </RecommendWord>
            <Recommend>
              <RecommendByOne>
                <a href="https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-isfp" target='_blank'>
                  <img src={모험가}></img>
                </a>|
                <p>{'ISFP'}</p>
                <Character>{"#개방적 #조화로운 삶"}</Character>
              </RecommendByOne>
              <RecommendByOne>
                <a href="https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-istp">
                  <img src={장인}></img>
                </a>
                <p>{'ISTP'}</p>
                <Character>{"#장인 #색다름 추구"}</Character>
              </RecommendByOne>
            </Recommend>
            <StyledButton>
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
              <Character>{"#충실한 성격 #소통 추구"}</Character>
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
                <Character>{"#열정적 #즐거움 추구"}</Character>
              </RecommendByOne>
              <RecommendByOne>
                <a href="https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-estp" target='_blank'>
                  <img src={사업가}></img>
                </a>
                <p>{'ESTP'}</p>
                <Character>{"#높은 관찰력 #실천 추구"}</Character>
              </RecommendByOne>
            </Recommend>
            <StyledButton>
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
              <Character>{"#높은 관찰력 #실천 추구"}</Character>
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
                <Character>{"#충실한 성격 #소통 추구"}</Character>
              </RecommendByOne>
            </Recommend>
            <StyledButton>
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
              <Character>{"#장인 #색다름 추구"}</Character>
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
                <Character>{"#책임감 #오랜관계 추구"}</Character>
              </RecommendByOne>
              <RecommendByOne>
                <a href="https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-estj" target='_blank'>
                  <img src={경영자}></img>
                </a>
                <p>{'ESTJ'}</p>
                <Character>{"#높은 책임감 #지도력"}</Character>
              </RecommendByOne>
            </Recommend>
            <StyledButton>
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
              <Character>{"#열정적 #즐거움 추구"}</Character>
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
                <Character>{"#충실한 성격 #소통 추구"}</Character>
              </RecommendByOne>
              <RecommendByOne>
                <a href="https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-istj" target='_blank'>
                  <img src={현실주의자}></img>
                </a>
                <p>{'ISTJ'}</p>
                <Character>{"#진실한 삶 #책임감 추구"}</Character>
              </RecommendByOne>
            </Recommend>
            <StyledButton>
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
              <Character>{"#개방적 #조화로운 삶"}</Character>
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
                <Character>{"#책임감 #오랜관계 추구"}</Character>
              </RecommendByOne>
              <RecommendByOne>
                <a href="https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-estj" target='_blank'>
                  <img src={경영자}></img>
                </a>
                <p>{'ESTJ'}</p>
                <Character>{"#높은 책임감 #지도력"}</Character>
              </RecommendByOne>
            </Recommend>
            <StyledButton>
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
              <Character>{"#규칙파괴자 #풍부한 지식"}</Character>
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
                <Character>{"#목적 중시 #소통 추구"}</Character>
              </RecommendByOne>
              <RecommendByOne>
                <a href="https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-intj" target='_blank'>
                  <img src={논리술사}></img>
                </a>|
                <p>{'INTJ'}</p>
                <Character>{"#개척자정신 #지적갈망"}</Character>
              </RecommendByOne>
            </Recommend>
            <StyledButton>
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
              <Character>{"#생각많음 #아이디어 뿜뿜"}</Character>
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
                <Character>{"#목표 갈망 #감정 부족"}</Character>
              </RecommendByOne>
            </Recommend>
            <StyledButton>
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
              <Character>{"#목표 갈망 #감정 부족"}</Character>
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
                <Character>{"#목적 중시 #소통 추구"}</Character>
              </RecommendByOne>
              <RecommendByOne>
                <a href="https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-intp" target='_blank'>
                  <img src={논리술사}></img>
                </a>
                <p>{'INTP'}</p>
                <Character>{"#생각많음 #아이디어 뿜뿜"}</Character>
              </RecommendByOne>
            </Recommend>
            <StyledButton>
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
              <Character>{"#개척자정신 #지적갈망"}</Character>
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
                <Character>{"#사교적 #즐거움 추구"}</Character>
              </RecommendByOne>
              <RecommendByOne>
                <a href="https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-entp" target='_blank'>
                  <img src={변론가}></img>
                </a>
                <p>{'ENTP'}</p>
                <Character>{"#규칙파괴자 #풍부한 지식"}</Character>
              </RecommendByOne>
            </Recommend>
            <StyledButton>
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
              <Character>{"#깊은 배려 #신념 추구"}</Character>
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
                <Character>{"#공감능력 #솔직함 추구"}</Character>

              </RecommendByOne>
              <RecommendByOne>
                <a href="https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-isfp" target='_blank'>
                  <img src={모험가}></img>
                </a>|
                <p>{'ISFP'}</p>
                <Character>{"#개방적 #조화로운 삶"}</Character>
              </RecommendByOne>
            </Recommend>
            <StyledButton>
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
              <Character>{"#목적 중시 #소통 추구"}</Character>
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
                <Character>{"#사교적 #즐거움 추구"}</Character>
              </RecommendByOne>
              <RecommendByOne>
                <a href="https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-entp" target='_blank'>
                  <img src={변론가}></img>
                </a>
                <p>{'ENTP'}</p>
                <Character>{"#규칙파괴자 #풍부한 지식"}</Character>
              </RecommendByOne>
            </Recommend>
            <StyledButton>
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
              <Character>{"#사교적 #즐거움 추구"}</Character>
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
                <Character>{"#목적 중시 #소통 추구"}</Character>
              </RecommendByOne>
              <RecommendByOne>
                <a href="https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-intj" target='_blank'>
                  <img src={논리술사}></img>
                </a>|
                <p>{'INTJ'}</p>
                <Character>{"#개척자정신 #지적갈망"}</Character>
              </RecommendByOne>
            </Recommend>
            <StyledButton>
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
              <Character>{"#공감능력 #솔직함 추구"}</Character>
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
                <Character>{"#깊은 배려 #신념 추구"}</Character>
              </RecommendByOne>
              <RecommendByOne>
                <a href="https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-entj" target='_blank'>
                  <img src={통솔자}></img>
                </a>
                <p>{'ENTJ'}</p>
                <Character>{"#목표 갈망 #감정 부족"}</Character>
              </RecommendByOne>
            </Recommend>
            <StyledButton>
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
                  <Word1>동의</Word1>
                  <O3><div onClick={onClick3Yes1}>{e.check_O}</div></O3>
                  <O2><div onClick={onClick2Yes1}>{e.check_O}</div></O2>
                  <O1><div onClick={onClick1Yes1}>{e.check_O}</div></O1>
                  <X1><div onClick={onClick1No1}>{e.check_O}</div></X1>
                  <X2><div onClick={onClick2No1}>{e.check_O}</div></X2>
                  <X3><div onClick={onClick3No1}>{e.check_O}</div></X3>
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
                  <Word1>동의</Word1>
                  <O3><div onClick={onClick3Yes2}>{e.check_O}</div></O3>
                  <O2><div onClick={onClick2Yes2}>{e.check_O}</div></O2>
                  <O1><div onClick={onClick1Yes2}>{e.check_O}</div></O1>
                  <X1><div onClick={onClick1No2}>{e.check_O}</div></X1>
                  <X2><div onClick={onClick2No2}>{e.check_O}</div></X2>
                  <X3><div onClick={onClick3No2}>{e.check_O}</div></X3>
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
                  <Word1>동의</Word1>
                  <O3><div onClick={onClick3Yes3}>{e.check_O}</div></O3>
                  <O2><div onClick={onClick2Yes3}>{e.check_O}</div></O2>
                  <O1><div onClick={onClick1Yes3}>{e.check_O}</div></O1>
                  <X1><div onClick={onClick1No3}>{e.check_O}</div></X1>
                  <X2><div onClick={onClick2No3}>{e.check_O}</div></X2>
                  <X3><div onClick={onClick3No3}>{e.check_O}</div></X3>
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
                  <Word1>동의</Word1>
                  <O3><div onClick={onClick3Yes4}>{e.check_O}</div></O3>
                  <O2><div onClick={onClick2Yes4}>{e.check_O}</div></O2>
                  <O1><div onClick={onClick1Yes4}>{e.check_O}</div></O1>
                  <X1><div onClick={onClick1No4}>{e.check_O}</div></X1>
                  <X2><div onClick={onClick2No4}>{e.check_O}</div></X2>
                  <X3><div onClick={onClick3No4}>{e.check_O}</div></X3>
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

  const cookies = new Cookies();
  const localId = cookies.get('rememberId');
  if (localId === undefined) window.location.replace("/login");

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
    <Container>

      {/* mode 가 main 일 때 */}
      {states.mode === 'start'
        ?
        <StartContainer>
          <Sentence1>당신은 이 검사가 끝나고
            <span> m</span>
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
          <MdQuiz size={100} className='mbti-quiz' /><MdPsychology size={100} className='mbti-brain' />
          <p></p>
          <IoPeople className='mbti-person1' size={250} /><IoPersonAdd className='mbti-person2' size={170} />

        </StartContainer>

        : null
      }

      {/* mode 가 quiz 일 때 */}
      {states.mode === 'quiz'
        ? <Quiz questionList={states.questionList} />
        : null
      }

    </Container>
  )
}

export default MBTI;