import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getVerified } from "../api/register.api";
import { ToastContainer, toast } from 'react-toastify';

function VerifyOTP() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [otpD, setOtpD] = useState([]);
  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;
    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    //Focus next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const onSubmit = () => {
    console.log("OTP", otp[5]);
    if (otp[5]) {
      let payload = {
        phone: localStorage.getItem("phoneNumber"),
        code: otp.join(""),
      };
     
      getVerified("/users/verifyAccount", payload)
        .then((data) => {
          console.log("Success", data);
          localStorage.setItem("userId", data.data.data.id);
          localStorage.removeItem("phoneNumber", data.data.data.id);
          toast.success("verified")
          navigate("/category");
        })
        .catch((err) => {
          console.log(err);
          toast.error(err.message)
        });
    } else {
      navigate("/verify");
    }
  };

  // const backPage = () => {
  //   navigate("/");
  // };

  return (
    <div>
      <div class="otp-verify">
        <h2>
          OTP has been sent successfully to +91-99******88 <br />
          Please enter the same OTP below.
        </h2>

        <div className="input-container">
          {otp.map((data, index) => {
            return (
              <input
                type="text"
                className="otp-field"
                name="otp"
                maxlength="1"
                placeholder="*"
                key={index}
                value={data}
                required={true}
                onChange={(e) => handleChange(e.target, index)}
                onFocus={(e) => e.target.select}
              />
            );
          })}
        </div>

        <input
          type="submit"
          class="send-otp2"
          value="VERIFY OTP"
          onClick={onSubmit}
        />

        <input
          type="submit"
          className="send-otp resend-otp"
          value="Resend OTP in 00:40"
        />
      </div>
      <ToastContainer/>
    </div>
  );
}

export default VerifyOTP;
