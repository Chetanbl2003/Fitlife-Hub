import React from "react";
import "../styles/NutritionGuide.css";
import healthyFoodImg from "../assets/healthy-food.webp"; 

const NutritionGuide = () => {
  const nutritionPlans = [
    {
      title: "Weight Loss",
      description: "A calorie-deficit diet with high-protein, fiber-rich foods.",
      benefits: ["Boosts metabolism", "Reduces body fat", "Improves digestion"],
    },
    {
      title: "Muscle Gain",
      description: "High-protein meals with essential nutrients for muscle growth.",
      benefits: ["Increases strength", "Enhances recovery", "Boosts endurance"],
    },
    {
      title: "Balanced Diet",
      description: "A well-balanced intake of proteins, carbs, and healthy fats.",
      benefits: ["Maintains overall health", "Boosts immunity", "Improves energy levels"],
    },
  ];

  return (
    <div className="nutrition-container">
      <h1 className="nutrition-heading">Nutrition Guide</h1>
      <p className="nutrition-subheading">Healthy eating tailored to your fitness goals</p>
      
      <div className="nutrition-content">
        <div className="nutrition-image">
          <img src={healthyFoodImg} alt="Healthy Food" />
        </div>

        <div className="nutrition-plans">
          {nutritionPlans.map((plan, index) => (
            <div key={index} className="nutrition-card">
              <h2>{plan.title}</h2>
              <p>{plan.description}</p>
              <ul>
                {plan.benefits.map((benefit, i) => (
                  <li key={i}>{benefit}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NutritionGuide;
