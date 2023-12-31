import React,{useState} from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./myswiper.css";
import { useNavigate } from "react-router-dom";

function SwiperDates() {
    const navigate=useNavigate();
   
    const [setslot, SetSelectedSlot] = useState(false);
    const [selectedButtonIndex, setSelectedButtonIndex] = useState(null);
  
    const handleClick = (index) => {
      SetSelectedSlot(true);
      setSelectedButtonIndex(index);
    };

    const [screen,setScreen]=useState("empty");
    const timings=["10:00 AM","10:15 AM","10:30 AM","10:45 AM","11:00 AM","11:15 AM","11:30 AM","11:45 AM"]
  const current = new Date();
  current.setDate(current.getDate() + 2);

  const dateArray = Array.from({ length: 30 }, (_, index) => {
    const date = new Date(current);
    date.setDate(current.getDate() + index);
    return date.toDateString().substring(0, 10);
  });

  const noslots=()=>{
    setScreen("empty");
  }

  const slots=()=>{
    setScreen("available");
  }

  return (
    <div className="swiper_head">
<div className="line">

    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
            <SwiperSlide>
             <div className="dates noslot" onClick={noslots}>
                 <h4 className="swipe1">Today</h4>
                 <h5 className="swipe2">No slot available</h5>
             </div>
             
           </SwiperSlide>
           <SwiperSlide> 
            <div className="dates noslot" onClick={noslots}>
                 <h4 className="swipe1">Tomorrow</h4>
                 <h5 className="swipe2">No slot available</h5>
            </div>
            </SwiperSlide>
      {dateArray.map((date, index) => (
        <SwiperSlide key={index}>
          <div className="dates slots" onClick={slots}>
            <h4 className="swipe1">{date}</h4>
            <h5 className="swipe2 green">8 slots available</h5>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
</div>

    {screen==="empty" &&
    <div >
        <h4 className="noslot-heading">No Slots Available</h4>
        <button className="continue_no_swipe">CONTINUE</button>
    </div>
    }
     {screen==="available" &&
    <div className="time_slots">
       
          {timings.map((time, index) => (
            <button
              key={index}
              className={index === selectedButtonIndex ? "timee_click" : "timee"}
              onClick={() => handleClick(index)}
            >
              {time}
            </button>
          ))}


       
        <button onClick={() => navigate("/personal")} className={setslot ? 'continue_yes_swipe' : 'continue_no_swipe'}>CONTINUE</button>
            
        
    </div>
    
    }
    </div>
  );
}

export default SwiperDates;
