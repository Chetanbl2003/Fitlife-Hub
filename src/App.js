import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import WorkoutPlans from "./components/Workoutplan";
import NutritionGuide from "./components/NutritionGuide";
import Memberships from "./components/Memberships";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/workout-plans" element={<WorkoutPlans />} />
        <Route path="/nutrition-guide" element={<NutritionGuide />} />
        <Route path="/memberships" element={<Memberships />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
