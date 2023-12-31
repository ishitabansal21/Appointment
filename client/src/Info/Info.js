import React from "react";
import "./Info.css"
import { useNavigate } from "react-router-dom";

function Info(){
    const navigate=useNavigate();
    return (
        <div className="for_center_info">

        <header className="header_info">
        <div className="doc_div_info">
            <img className="docimage_info" src="https://remedoapp.com/rweb/assets/default/images/doctor_female.svg" alt=""/>
        </div>
        <div className="info_div_info">
            <div>                    
                <h3 className="doc_name_info">Dr. Manik Dalvi</h3>
            <div className="doc_type_info">Obstetrics & Gynecology</div>
            <button className="viewprofile_info">View Profile</button>   
            </div>

        </div>
    </header>
    <div>
        <h3 className="summary">Appointment Summary</h3>
        <div className="for_flex space">
            <div className="for_flex">
                <img src="https://remedoapp.com/rweb/assets/default/images/Inlinic_01.svg" className="house" alt=""/>
                <div className="clinic-info">
                    <h4>In-Clinic Consultation</h4>
                    <h5 className="fees">Fees approx ₹ 500</h5>
                    <h5 className="pay">(pay at clinic)</h5>
                </div>
            </div>
            <div className="timedate">
                <div className="for_flex time">

                <img src="https://remedoapp.com/rweb/assets/default/images/clock.svg" alt="" />
                <h4>11:00 AM</h4>
                </div>
                <div className="for_flex date">

                <img src="	https://remedoapp.com/rweb/assets/default/images/calender-tick.svg" alt="" />
                <h4>01-01-2024</h4>
                </div>
            </div>
            <div className="changedate" onClick={()=>{navigate('/home')}}>
                <h4>Change Date & Time</h4>
            </div>
        </div>
    </div>
        </div>
    )
}

export default Info;