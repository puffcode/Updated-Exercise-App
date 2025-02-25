import React from "react";
import RunningExercise from "./components/RunningExercise";

const Running = ({ name, onBackClick }) => {
  return (
    <div className="running-screen">
      <RunningExercise exercise={name} />
      <button className="back-button" onClick={onBackClick}>
        Back
      </button>
    </div>
  );
};

export default Running;
