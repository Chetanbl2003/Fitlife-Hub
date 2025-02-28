import React from "react";
import "../styles/Home.css";
import fitnessImage from "../assets/FitlifeImage.webp"; 

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        
        <div className="home-text">
          <h1>Transform Your Life with Fitness</h1>
          <p>
            Your fitness journey begins here! Join our community and take a step towards a healthier and stronger you.
            Discover customized workout plans, expert nutrition guides, and a vibrant fitness community to support your goals.
          </p>
          <button className="cta-button">Join Now</button>
        </div>

        
        <div className="home-image">
          <img src={fitnessImage} alt="Fitness Workout" />
        </div>
      </div>
    </div>
  );
};

export default Home;
