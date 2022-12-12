import React from 'react'
import face from '../images/아이셔용.png'
import './AboutUs.css'

import CallIcon from '@mui/icons-material/Call';

function AboutUs() {
  return (
    <div className='Container'>
      <div className='Middle-Container'>
        <div className='AboutUs-Container'>
          <div className='AboutUs-header'>
            <h1>About Us</h1>
          </div>
          <div className='AboutUs-main'>
            <div className='OurInfo'>
              <img src={face} alt="face"/>
              <h4>내이름</h4>
              <h6>Backend / Frontend</h6>
              <CallIcon />
              <span class="material-symbols-outlined">mail</span>
            </div>
            <div className='OurInfo'>
              <img src={face} alt="face"/>
              <h4>내이름</h4>
              <h6>Backend / Frontend</h6>
              <CallIcon />
              <span class="material-symbols-outlined">mail</span>
            </div>
            <div className='OurInfo'>
              <img src={face} alt="face"/>
              <h4>내이름</h4>
              <h6>Backend / Frontend</h6>
              <CallIcon />
              <span class="material-symbols-outlined">mail</span>
            </div>
            <div className='OurInfo'>
              <img src={face} alt="face"/>
              <h4>내이름</h4>
              <h6>Backend / Frontend</h6>
              <CallIcon />
              <span class="material-symbols-outlined">mail</span>
            </div>
            <div className='OurInfo'>
              <img src={face} alt="face"/>
              <h4>내이름</h4>
              <h6>Backend / Frontend</h6>
              <CallIcon />
              <span class="material-symbols-outlined">mail</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default AboutUs