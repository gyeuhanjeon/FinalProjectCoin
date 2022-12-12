import React from "react";
import { useState } from "react";

import 전략가 from '../images/전략가.png';
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
import styled from 'styled-components';
import { style } from "@mui/system";



const MbtiInfoBox1 = styled.span`

    position: relative;

    & div{
      position:relative;
      color:white;
      text-align: center;
      margin-bottom: 5px;

    }

    & a{
      text-decoration: none;
    }

    
`
const MbtiInfoBox2 = styled.div`
  
  
  img{
    width: 150px;
    height: 150px;
    position: relative;
    
  }
  display  : flex;
  align-items: center;
  justify-content: center;

  & h2{
    text-align: center;
    color:whitesmoke;
  }


  background-color: rgba(0, 0, 0, 0.04);
  height: 100%;

  list-style: none;

  & li{
    position:relative;
    top:60px;
  }

  & li:nth-of-type(1){
    background-color: rgba(149,98,123,0.7);
  }
  & li:nth-of-type(2){
    background-color: rgba(153,194,108,0.7);
  }
  & li:nth-of-type(3){
    background-color: rgba(113,202,204,0.7);
  }
  & li:nth-of-type(4){
    background-color: rgba(228,199,40,0.7);
  }



`
const MbtiTypeBox = styled.div`
  margin: 0 10px;



`

const MbtiInfoHead = styled.div`
  
  position: absolute;
  bottom:830px;
  font-size: 35px;
  text-align: center;

  & span:nth-of-type(1){
    color: rgba(149,98,123);
  }
  & span:nth-of-type(2){
    color: rgba(153,194,108);
  }
  & span:nth-of-type(3){
    color: rgba(113,202,204);
  }
  & span:nth-of-type(4){
    color: rgba(228,199,40);
  }


  & div{
    position: relative;
    font-size: 16px ;
    top: 10px;
  }


`





function MbtiTypes() {

  return (
    <div>
      <div className="Container">
        <MbtiInfoBox2>
          <MbtiInfoHead>
            <span>m</span>
            <span>b</span>
            <span>t</span>
            <span>i </span>
            유형 상세설명
            <div>이미지를 클릭하시면 해당 유형의 설명페이지로 이동합니다.</div>
          </MbtiInfoHead>
          <li>

            <MbtiTypeBox>
              <h2 className="title-box1" >분석가형</h2>
              <MbtiInfoBox1>
                <a href="https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-intj" >
                  <img src={전략가} />
                  <div>INTJ 전략가 </div>
                </a>
              </MbtiInfoBox1>
              <MbtiInfoBox1>
                <a href="https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-intp" >
                  <img src={논리술사} />
                  <div>INTP 논리술사 </div>
                </a>
              </MbtiInfoBox1>
              <MbtiInfoBox1>
                <a href="https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-entj" >
                  <img src={통솔자} />
                  <div>ENTJ 통솔자 </div>
                </a>
              </MbtiInfoBox1>
              <MbtiInfoBox1>
                <a href="https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-entp" >
                  <img src={변론가} />
                  <div>ENTP 변론가 </div>
                </a>
              </MbtiInfoBox1>
            </MbtiTypeBox>
          </li>

          <br></br>
          <li>

            <MbtiTypeBox>
              <h2 className="title-box1" >외교관형</h2>
              <MbtiInfoBox1>
                <a href="https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-infj">
                  <img src={옹호자} />
                  <div>INFJ 옹호자 </div>
                </a>
              </MbtiInfoBox1>
              <MbtiInfoBox1>
                <a href="https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-infp">
                  <img src={중재자} />
                  <div>INFP 중재자 </div>
                </a>
              </MbtiInfoBox1>
              <MbtiInfoBox1>
                <a href="https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-enfj">
                  <img src={선도자} />
                  <div>ENFJ 선도자 </div>
                </a>
              </MbtiInfoBox1>
              <MbtiInfoBox1>
                <a href="https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-enfp">
                  <img src={활동가} />
                  <div>ENFP 활동가</div>
                </a>
              </MbtiInfoBox1>
            </MbtiTypeBox>
          </li>
          <br></br>
          <li>

            <MbtiTypeBox>
              <h2 className="title-box1" >관리자형</h2>
              <MbtiInfoBox1>
                <a href="https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-istj">
                  <img src={현실주의자} />
                  <div>ISTJ 현실주의자</div>
                </a>
              </MbtiInfoBox1>
              <MbtiInfoBox1>
                <a href="https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-isfj">
                  <img src={수호자} />
                  <div>ISFJ 수호자</div>
                </a>
              </MbtiInfoBox1>
              <MbtiInfoBox1>
                <a href="https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-estj">
                  <img src={경영자} />
                  <div>ESTJ 경영자</div>
                </a>
              </MbtiInfoBox1>
              <MbtiInfoBox1>
                <a href="https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-esfj">
                  <img src={집정관} />
                  <div>ESFJ 집정관</div>
                </a>
              </MbtiInfoBox1>
            </MbtiTypeBox>
          </li>
          <br></br>
          <li>

            <MbtiTypeBox>
              <h2 className="title-box1" >탐험가형</h2>
              <MbtiInfoBox1>
                <a href="https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-istp">
                  <img src={장인} />
                  <div>ISTP 장인</div>
                </a>
              </MbtiInfoBox1>
              <MbtiInfoBox1>
                <a href="https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-isfp">
                  <img src={모험가} />
                  <div>ISFP 모험가</div>
                </a>
              </MbtiInfoBox1>
              <MbtiInfoBox1>
                <a href="https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-estp">
                  <img src={사업가} />
                  <div>ESTP 사업가</div>
                </a>
              </MbtiInfoBox1>
              <MbtiInfoBox1>
                <a href="https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-esfp">
                  <img src={연예인} />
                  <div>ESFP 연예인</div>
                </a>
              </MbtiInfoBox1>
            </MbtiTypeBox>
          </li>
          <br></br>


        </MbtiInfoBox2>
      </div >
    </div >
  );
}
export default MbtiTypes;