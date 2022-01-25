import React from "react";

function Footer() {
  return (
    <div>
      <div className="footer">
        <h5>Download app and stay connected:</h5>
        <div className="footer-btn">
          <button>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png"
              alt="A"
            />
          </button>
          <button>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png"
              alt="B"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
