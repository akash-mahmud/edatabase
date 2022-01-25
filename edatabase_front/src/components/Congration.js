import React from "react";
import { useNavigate } from "react-router-dom";

function Congration() {
  const navigate = useNavigate();

  const nextPage = () => {
    navigate("/");
  };

  // const backPage = () => {
  //   navigate("/project-details")
  // }
  return (
    <div>
      <div class="final">
        <h2>
          Congratulations
          <br />
          Your account is ready.
        </h2>
        <div class="buttons">
          <input
            type="submit"
            class="send-otp next goHome"
            value="GO HOME"
            onClick={nextPage}
          />
        </div>
      </div>
    </div>
  );
}

export default Congration;
