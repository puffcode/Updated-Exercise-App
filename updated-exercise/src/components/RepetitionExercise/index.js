import React, { useState } from "react";

const RepetitionExercise = ({ exercise }) => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  const getUnit = (exercise) => {
    switch (exercise) {
      case "Push-ups":
        return "reps";
      case "Running":
        return "laps";
      case "Plank":
        return "reps";
      case "Squat":
        return "reps";
      default:
        return "units";
    }
  };

  return (
    <div className="repetition-exercise">
      <h2>{exercise}</h2>
      <p>
        {count} {getUnit(exercise)}
      </p>
      <button onClick={handleIncrement}>Increase</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default RepetitionExercise;
