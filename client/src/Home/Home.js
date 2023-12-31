import React from "react";

import "./Home.css";
import SwiperDates from "../Swiper/swiper";

function Home(){
    return(
        <div className="home_page">
            <div className="for_center_home">

            <header className="header">
                <div className="doc_div">
                    <img className="docimage" src="https://remedoapp.com/rweb/assets/default/images/doctor_female.svg" alt=""/>
                </div>
                <div className="info_div">
                    <div>                    
                        <h3 className="doc_name">Dr. Manik Dalvi</h3>
                    <div className="doc_type">Obstetrics & Gynecology</div>
                    <button className="viewprofile">View Profile</button>   
                    </div>

                </div>
            </header>
            <div className="book_appointment">
                <div>

                    <h2 className="heading1">Book Appointment</h2>
                    <h3 className="heading2">Select Your Consultation Type</h3>
                    <h4 className="heading3">Fees approx ₹ 500</h4>
                    <h4 className="heading4">(pay at clinic)</h4>
                </div>
                <div className="cards_div">
                    <div className="cards_box">

            
                    <img src="https://remedoapp.com/rweb/assets/default/images/svg-img/new-img/In-Clinic.png" alt=""/>
                    <img src="https://remedoapp.com/rweb/assets/default/images/svg-img/new-img/Audio_b.png" alt=""/>
                    <img src="https://remedoapp.com/rweb/assets/default/images/svg-img/new-img/video_b.png" alt=""/>
                    </div>
                    
                </div>

            </div>
            <div className="clinic">
                Clinic Name
            </div>
            <div className="text-circle">
                <div>

                <span className="circle">
                    <span className="white-circle"></span>
                </span>
                </div>
                <div className="content">
                Manik Dalvi's Clinic, Kalyan Naka, Rk Business Centre, Opp. Bopal Nagar, Maharashtra, 421302
                </div>
            </div>
            <div className="swiper_class">
                <SwiperDates/>
            </div>
            </div>
        </div>
    )
}

export default Home;