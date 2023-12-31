import React,{ useState} from "react"
import {useNavigate} from "react-router-dom"
import "./login.css"
import Doc from "./doctorbg.png"


function Login() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [showOTPBox, setShowOTPBox] = useState(false);
    const [otp, setOTPInput] = useState("");
    const navigate = useNavigate();
  
    const sendOTP = async (event) => {
      event.preventDefault();
  
      try {
        const response = await fetch("http://localhost:8000/api/v1/user/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
          }),
        });
  
        const data = await response.json();
  
        console.log(data);
  
      
        if (response.ok) {
      
        console.log("verfired")
        setShowOTPBox(true);
        } else {
         
          console.error("Error sending OTP:", data.message);
          alert("Enter All Information with Valid Email");
        }
      } catch (error) {
        console.error("Error sending OTP:", error.message);
        alert("Enter All Information with Valid Email");
      }
    };

    const handleOTPSubmit = async(event) => {
        event.preventDefault();
  
        try {
          const response = await fetch("http://localhost:8000/api/v1/user/verifyOTP", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email,
              otp,
            }),
          });
    
          const data = await response.json();
    
          console.log(data);
    
       
          if (response.ok) {
         
          console.log(" otp verfired");
          navigate("/home");
         
         
          } else {
            
            console.error("Error sending OTP:", data.message);
            alert("Enter Correct OTP");
          }
        } catch (error) {
          console.error("Error sending OTP:", error.message);
          alert("Enter Correct OTP");
        }
      };
    //   const openOTPModal = () => {
    //     setShowOTPBox(true);
    //   };
      const closeOTPModal = () => {
        setShowOTPBox(false);
      };

  
    return (
      <div className="container">
        <h4 className="main-head">BOOK YOUR APPOINTMENT</h4>
        <div className="login-bg">
            <img src={Doc} alt=""/> 
        </div>
        <form onSubmit={sendOTP} className="input-form">
          <input
            type="text"
            placeholder="Enter Full Name *"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Enter Email *"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit">Send OTP</button>
        </form>
        {showOTPBox && (
  <div className="modal">
    <div className="otp-box" onClick={(e) => e.stopPropagation()}>
      <h3>Enter OTP</h3>
      <input
        type="text"
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => setOTPInput(e.target.value)}
      />
      <button onClick={handleOTPSubmit} className="mysubmit">Submit OTP</button>
      <button onClick={closeOTPModal}>Close</button>
    </div>
  </div>
)}


      </div>
    );
  }



export default Login;