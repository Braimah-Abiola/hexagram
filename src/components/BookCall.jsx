import styles from "../style"
import { arrowUp } from "../assets"
import React, {useEffect, useRef, useState} from "react";

function BookCall() {
  const buttonRef = useRef(null);

    useEffect(() => {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.type = "text/javascript";
      script.async = true;
      document.body.appendChild(script);
      
      buttonRef.current.addEventListener("click", function() {
        Calendly.showPopupWidget('https://calendly.com/hexagramsocial?hide_gdpr_banner=1&background_color=000000&text_color=ffffff&primary_color=5454d4');
      });

    }, []);
  
  return (
    <>
     <link
        href="https://assets.calendly.com/assets/external/widget.css"
        rel="stylesheet"
      />

      <button ref={buttonRef} type="button" className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-white outline-none rounded-[10px] ${styles}`}>
          Book Call
          <img src={arrowUp} className=" w-[13px] h-[13px] object-contain inline-flex ml-5"/>    
      </button>
    </>
  );
}

export default BookCall;