import React from 'react'
import '../styles/dashboard.css'
import { FaHome } from "react-icons/fa";
import { GrSchedules } from "react-icons/gr";
import { TbReport } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";
import { LuLogOut } from "react-icons/lu";
import { RiUserSmileLine } from "react-icons/ri";

function dashboard() {
  return (
    <div>
        <div class="sidebar">
        <div class="logo-dashboard">
            <img src="" alt="" />
            <h1>BloodLink</h1>
        </div>
        <figure class="menu">
            <figcaption>OVERVIEW</figcaption>
            <ul>
                <li class="active">
                <FaHome color='red'/>
                    Dashboard
                </li>
                <li>
                    <GrSchedules color='red'/>
                    Schedule
                </li>
                <li>
                    <TbReport color='red'/>
                    Reports
                </li>
            </ul>
        </figure>
        <figure class="settings">
            <figcaption>SETUP</figcaption>
            <ul>
                <li>
                <IoSettingsOutline color='red'/>
                    Settings
                </li>
                <li>
                <VscAccount color='red'/>
                    Account
                </li>
                <li>
                <LuLogOut color='red' />
                    Log out
                </li>
            </ul>
        </figure>
    </div>
    <header>
        <div class="message">Welcome back!</div>
       
        <div class="profile">
            <div class="username">Admin</div>
            <RiUserSmileLine />
        </div>
    </header>
    <main>
        <div class="project container-dashboard" id="project-1">
            <p class="title"></p>
            <div class="tasks">
                <p></p>

            </div>
            <div class="issues">
                <p></p>
                <p></p>
            </div>
            <div class="progress">
                <p></p>
                <div class="progress-bar">
                    <div class="bar"></div>
                </div>
            </div>
        </div>
        <div class="project container-dashboard" id="project-2">
            <p class="title"></p>
            <div class="tasks">
                <p></p>
                <p></p>
            </div>
            <div class="issues">
                <p></p>
                <p></p>
            </div>
            <div class="progress">
                <p></p>
                <div class="progress-bar">
                    <div class="bar"></div>
                </div>
            </div>
        </div>
        <div class="project container-dashboard" id="project-3">
            <p class="title"></p>
            <div class="tasks">
                <p></p>
                <p></p>
            </div>
            <div class="issues">
                <p></p>
                <p></p>
            </div>
            <div class="progress">
                <p></p>
                <div class="progress-bar">
                    <div class="bar"></div>
                </div>
            </div>
        </div>
        <div class="calendar-box container-dashboard">
            <p class="title">This week</p>
            <p id="year">January, 2024</p>
            <div class="calendar">
                <div class="weekday">Mo</div>
                <div class="weekday">Tu</div>
                <div class="weekday active">We</div>
                <div class="weekday">Th</div>
                <div class="weekday">Fr</div>
                <div class="weekday">Sa</div>
                <div class="weekday">Su</div>
                <div class="day">
                    01
                    <div class="schedule">
                        <p class="card"></p>
                        <p class="card"></p>
                    </div>
                </div>
                <div class="day">
                    02
                    <div class="schedule">
                        <p class="card"></p>
                        <p class="card"></p>
                        <p class="card"></p>
                        <p class="card"></p>
                    </div>
                </div>
                <div class="day active">
                    03
                    <div class="schedule">
                        <p class="card"></p>
                        <p class="card"></p>
                        <p class="card"></p>
                    </div>
                </div>
                <div class="day">
                    04
                    <div class="schedule">
                        <p class="card"></p>
                        <p class="card"></p>
                        <p class="card"></p>
                        <p class="card"></p>
                    </div>
                </div>
                <div class="day">
                    05
                    <div class="schedule">
                        <p class="card"></p>
                        <p class="card"></p>
                        <p class="card"></p>
                        <p class="card"></p>
                    </div>
                </div>
                <div class="day">06</div>
                <div class="day">07</div>
            </div>
        </div>
    </main>

    </div>
  )
}

export default dashboard