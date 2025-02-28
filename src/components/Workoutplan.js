import React from "react";
import "../styles//Workoutplan.css";

const WorkoutPlans = () => {
  return (
    <div className="workout-container">
      <h1 className="workout-heading">Workout Plans</h1>
      <p className="workout-subheading">
        Choose a plan that fits your goals, whether you're just starting out or pushing your limits.
      </p>

      
      <div className="workout-categories">
        
        <div className="workout-category">
          <h2>Beginner Plan</h2>
          <p>Perfect for those starting their fitness journey.</p>
          <ul>
            <li>🏋️‍♂️ Basic Strength Training</li>
            <li>🏃‍♂️ Light Cardio (Walking, Jogging)</li>
            <li>🧘‍♂️ Basic Flexibility & Yoga</li>
            <li>📅 Monthly Plan: 3 Days/Week</li>
          </ul>
        </div>

        
        <div className="workout-category">
          <h2>Intermediate Plan</h2>
          <p>Take your fitness to the next level with structured workouts.</p>
          <ul>
            <li>💪 Progressive Strength Training</li>
            <li>🔥 High-Intensity Cardio</li>
            <li>🧘‍♂️ Mobility & Core Workouts</li>
            <li>📅 Monthly Plan: 5 Days/Week</li>
          </ul>
        </div>

        
        <div className="workout-category">
          <h2>Advanced Plan</h2>
          <p>Designed for athletes and those looking to maximize their performance.</p>
          <ul>
            <li>🏋️‍♂️ Heavy Weightlifting & Power Training</li>
            <li>🏃‍♂️ Sprint & Agility Training</li>
            <li>🍽️ Advanced Nutrition Guidance</li>
            <li>📅 Yearly Plan: 6 Days/Week</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WorkoutPlans;
