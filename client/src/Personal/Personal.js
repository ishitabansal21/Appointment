import React from "react";
import Info from "../Info/Info";
import "./Personal.css"
import { useNavigate } from "react-router-dom";

function Personal(){
    const navigate=useNavigate();
    return(
        <div>
            <Info/>
            <div className="for_center">

            <h3 className="summary">Fill Personal Details</h3>
            <form className="for_flex forms">
                <div>

                <div className="Name">

                        <label className="fullname">Full Name *</label><br></br>
                        <input type="text" name="name" />
                        <h6>Payment invoice will be generated in the name of the patient.</h6>
                </div>
                <div>

                            <label className="birthday">Date Of Birth *</label><br></br>
                            <input className="dateinput" type="date" name="date" />
                </div>
                </div>



            <div className="gender_div">

            <label className="gender">Gender *</label><br></br>
            <label className="options"><input type="radio" value="Male"/> Male</label>
            <label className="options"><input type="radio" value="Female"/>Female</label>
            <label className="options"><input type="radio" value="Other"/> Other</label>        
            </div>
        
            <button className="continue_yes" onClick={()=>{navigate("/thankyou")}}>CONTINUE</button>
            </form>
            </div>
        </div>
    )
}

export default Personal;