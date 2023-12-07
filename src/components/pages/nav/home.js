import React from "react";
import BannerBackground from "../../../img/Banner Background.png";
import BannerImage from "../../../img/phone.png";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';



const Home = () => {
    return (
      
        <div className="home-banner-container" id="home">
          <div className="home-bannerImage-container">
            <img src={BannerBackground} alt="" />
          </div>
          <div className="home-text-section">
            <h1 className="primary-heading">
            Unlock Your Potential, Master Your Day with FocusFlow
            </h1>
            <p className="primary-text">
            Organization, tracking, and completion of tasks and projects by individuals and teams with efficiency and effectiveness.
            </p>
            <a href="../../Login">
            <button className="secondary-button">
              Start Now   <ArrowForwardIcon  />
            </button>
            </a>
          </div>
          <div className="home-image-section">
            <img src={BannerImage} alt="" height="630" />
          </div>
        </div>
    
    );
  };
  
  export default Home;