import React from "react";
import "../styles/Memberships.css";

const Memberships = () => {
  const membershipPlans = [
    {
      title: "Basic",
      price: "₹2,500/month",
      features: ["Access to Gym", "Group Classes", "Locker Room"],
    },
    {
      title: "Pro",
      price: "₹5,000/month",
      features: ["All Basic Features", "Personal Trainer", "Diet Consultation"],
    },
    {
      title: "Elite",
      price: "₹8,500/month",
      features: ["All Pro Features", "Spa & Sauna", "VIP Lounge"],
    },
  ];

  return (
    <div className="membership-container">
      <h1 className="membership-heading">Membership Plans</h1>
      <p className="membership-subheading">Choose the plan that suits you</p>

      <div className="membership-cards">
        {membershipPlans.map((plan, index) => (
          <div key={index} className="membership-card">
            <h2>{plan.title}</h2>
            <p className="membership-price">{plan.price}</p>
            <ul>
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <button className="membership-btn">Join Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Memberships;
