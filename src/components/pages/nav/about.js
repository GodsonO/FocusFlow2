import React from "react";
import AboutBackground from "../../../img/about-background.png";
import AboutBackgroundImage from "../../../img/banner-img-3.png";


const About = () => {
  return (
    <div className="about-section-container" id="about">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" height="500" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading" >About</p>
        <h1 className="primary-heading">
        Effortless Productivity: Simplifying Your Day, One Task at a Time
        </h1>
        <p className="primary-text">
        Focus Flow is a tool that helps users stay organized and manage their tasks efficiently. In the chaos of our daily lifes unfolded, we have all found ourselves drowning in tasks and deadlines, desperately searching for a tool that alignes with our unique workflow. 
        </p>
        <p className="primary-text">
        Being Frustrated by existing task management apps that fell short, we embarked on a journey to create our own solution. This endeavor was fueled by the desire to regain control over our schedule and provide others with a tailored platform to seamlessly organize their lives.The spark for this project ignited from the struggles we faced, evolving into a personal mission to empower individuals in their pursuit of productivity and balance.
        </p>
      
      </div>
    </div>
  );
};

export default About;