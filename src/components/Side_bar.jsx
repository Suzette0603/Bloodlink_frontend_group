import React from 'react'
import '../styles/Side_bar.css'
import logo from '../assets/Group 2410logo.svg'


const Side_bar = () => {
  return (
    <>
      <div>
      <nav>
        <img src={logo}alt="logo" />
          <ul>
            <li>
              <div class="home-icon">
                <div class="roof">
                  <div class="roof-edge"></div>
                </div>
                <div class="front"></div>
              </div>
            </li>
            <li>
              <div class="about-icon">
                <div class="head">
                  <div class="eyes"></div>
                  <div class="beard"></div>
                </div>
              </div>
            </li>
            <li>
              <div class="work-icon">
                <div class="paper"></div>
                <div class="lines"></div>
                <div class="lines"></div>
                <div class="lines"></div>
              </div>
            </li>
            <li>
              <div class="mail-icon">
                <div class="mail-base">
                  <div class="mail-top"></div>
                </div>
              </div>
            </li>
          </ul>
        </nav> 
       
      </div>
    </>
  );
}

export default Side_bar