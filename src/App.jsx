
import React, { useState, useEffect, useRef } from "react";

export default function App() {
  const OTP_LENGTH = 5;

  const [otp, setOtp] = useState(new Array(OTP_LENGTH).fill(""));

  const inputRefs = useRef([]);

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const handleChange = (element, index) => {
    const value = element.value;

    if (isNaN(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);

    if (value) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      const newOtp = [...otp];

      //if current box has value
      if (otp[index]) {
        newOtp[index] = ""; //clear current

        //if current idx is empty then move to previous and clear it
      } else if (index > 0) {
        inputRefs.current[index - 1]?.focus();
        newOtp[index - 1] = ""; //clear previous
      }

      setOtp(newOtp);
    }

    // Arrow navigation
    if (e.key === "ArrowRight" && index < OTP_LENGTH - 1) {
      inputRefs.current[index + 1]?.focus();
    }

    if (e.key === "ArrowLeft" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

 const handlePaste = (e) => {
  e.preventDefault();
  const pasteData = e.clipboardData.getData("text").slice(0, otp.length);

  const newOtp = pasteData.split("");
  setOtp(newOtp);
};



  //  Resend OTP
  const handleResend = () => {
    setOtp(new Array(OTP_LENGTH).fill(""));
    inputRefs.current[0]?.focus();
  };

  return (
    <div
      style={{ textAlign: "center", marginTop: "50px" }}
      onPaste={handlePaste}
    >
      <h2>Enter OTP</h2>

      <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        {otp.map((digit, index) => (
          <input
            key={index}
            type="text"
            value={digit}
            maxLength={1}
            ref={(el) => (inputRefs.current[index] = el)}
            onChange={(e) => handleChange(e.target, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            onFocus={(e) => e.target.select()}

            style={{
              width: "40px",
              height: "40px",
              textAlign: "center",
              fontSize: "18px",
            }}
          />
        ))}
      </div>

      <button style={{ marginTop: "20px" }} onClick={handleResend}>
        Resend OTP
      </button>
    </div>
  );
}