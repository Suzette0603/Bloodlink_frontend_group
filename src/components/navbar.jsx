import React from "react";
import '../components/navbar.css'
import { MdOutlinePhone } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { MdBloodtype } from "react-icons/md";
import { MdOutlineCopyright } from "react-icons/md";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { TiSocialTwitter } from "react-icons/ti";
import { AiFillInstagram } from "react-icons/ai";




function Parts(icon1,blood){
    return(
        <div className="container">
            <nav>

                <div className="partone">
                    <img src="#" alt="Logo" />

                </div>

                <div className="parttwo">
                    <div className="listtabs">
                        <ul>
                            <li><a href="#"></a>Home</li>
                            <li><a href="#"></a>About Us</li>
                            <li><a href="#"></a>Services</li>
                            <li><a href="#"></a>Documentation</li>
                        </ul>
                    </div>

                    <div className="tabsbutton">
                        <button><a href="Login"></a>Login/Register</button>
                    </div>

                </div>
            </nav>


               
            <div className="second_container">
                <div className="firstly">
                    <div className="review">

                        <div className="first_part_description">
                            <div className="kid2">
                                <MdBloodtype className="blood" />
                            </div>

                            <div className="kid3">
                                <h1>Welcome to Blood Link.</h1>
                            </div>

                        </div>

                        <div className="second_part_description">

                            <h2>Filling The Gap ...</h2>
                            <h3>Net Blood Safe Lives</h3>

                        </div>

                        <div className="third_part_description">
                            <p>Our mission is to fill the gap between blood donors and recipients,</p>
                            <p>providing a seamless and efficient encounter for both parties. </p>
                            <p>A reliable source, providing you the best experience....</p>

                        </div>
                    </div>
                    <div className="fourth_part_description">

                        <button><a href="#"></a>Find a Donor</button>
                    </div>

                </div>

                <div className="secondly">
    
                    <img src={blood} alt="iconi" />
                    <img src={icon1} alt="iconii" />
                    
                </div>
            </div>
            
            <footer className="First">
                <div className="first_footer">

                    <div className="kid4">
                        <p>Our mission is to close the gap in the healthcare system by </p>
                        <p>facilitating the relationship between blood donors and receivers.</p>
                    </div>

                    <div className="kid5">
                        <h4>Company</h4>
                        <ul>
                            <li><a href="#"></a>Home</li>
                            <li><a href="#"></a>About Us</li>
                            <li><a href="#"></a>Services</li>
                            <li><a href="#"></a>Documentation</li>
                            
                        </ul>

                    </div>

                    <div className="kid6">

                        <h4>Contacts</h4>

                        <div className="kid8">
                            <MdOutlinePhone className="mobile"/>
                            <p>+250788409189</p>
                        </div>
                        <div className="kid9">
                            <IoMdMail className="mail"/>
                            <p>bloodlink@gmail.com</p>
                        </div>
                    </div>


                </div>

                <div className="second_footer">

                    <div className="kid7">
                        <MdOutlineCopyright className="copyright"/>
                        <p>All rights reserved by Blood Link</p>
                    </div>

                    <div className="kid11">
                        <p>Find us on :</p>
                        <div className="kid10">

                            <BiLogoFacebookCircle className="facebook" />
                            <TiSocialTwitter className="twitter"  />
                            <AiFillInstagram className="instagram"  />

                        </div>
                    </div>

                </div>
            </footer>
            
        </div>
    )
}
export default Parts