import React from "react";

import "./Thankyou.css"

function Thankyou(){
    
    return(
        <div className="for_center_thank text">
           <div>
            <img src="https://remedoapp.com/rweb/assets/default/images/svg-img/confirmation.svg" alt=""/>
            <h3>Thank you!</h3>
            <h4 className="title2">Your appointment booking with Dr. Manik Dalvi is waiting for approval</h4>
            <h5 className="title3">It may take upto 1 hour for your appointment to get confirmed</h5>
            <h5 className="title4">Please show the confirmation message at the clinic</h5>
           </div>
           <div className="footer">
            <div className="for_flex centering">

            <img src="https://remedoapp.com/rweb/assets/default/images/svg-img/time.svg" alt=""/>
            <h5>01 January, 2024 at 11:00 AM</h5>
            </div>
            <div className="for_flex centering2">

            <img src="https://remedoapp.com/rweb/assets/default/images/svg-img/loctn.svg" alt=""/>
            <h5>Manik Dalvi's Clinic, Kalyan Naka, Rk Business Centre, Opp. Bopal Nagar, Maharashtra, 421302</h5>
            </div>
           </div>
           <button className="btn" onClick={() => window.open("https://www.google.com/maps/place/Dr.+Manik+Dalvi/@19.2976449,73.0626656,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7bd3e981a6dc7:0xe160d1b4f91b76af!8m2!3d19.2976449!4d73.0626656!16s%2Fg%2F11pvp3qxbq?entry=ttu")}>GET DIRECTIONS</button>
        </div>
    )
}

export default Thankyou;