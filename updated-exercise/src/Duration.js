import React from "react";
import DurationExercise from "./components/DurationExercise";

const Duration = ({ name, onBackClick }) => {
  return (
    <div className="duration-screen">
      <DurationExercise exercise={name} />
      <button className="back-button" onClick={onBackClick}>
        Back
      </button>
    </div>
  );
};

export default Duration;
