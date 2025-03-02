import React, { useState } from "react";
import GlobalStyle from "./styles";
import Duration from "./Duration";
import Repetition from "./Repetition";
import Running from "./Running";
import "./App.css";

function App() {
  const [selectedExercise, setSelectedExercise] = useState(null);

  const handleExerciseClick = (exercise) => {
    setSelectedExercise(exercise);
  };

  const handleBackClick = () => {
    setSelectedExercise(null);
  };

  const isDurationExercise = (exercise) => {
    return exercise === "Running";
  };

  const isRunningExercise = (exercise) => {
    return exercise === "Running2";
  };

  return (
    <>
      <GlobalStyle />
      <div className="App">
        <header className="App-header">
          {!selectedExercise && <h1 className="home-header">HOME</h1>}
          {selectedExercise ? (
            isDurationExercise(selectedExercise) ? (
              <Duration name={selectedExercise} onBackClick={handleBackClick} />
            ) : isRunningExercise(selectedExercise) ? (
              <Running name={selectedExercise} onBackClick={handleBackClick} />
            ) : (
              <Repetition
                name={selectedExercise}
                onBackClick={handleBackClick}
              />
            )
          ) : (
            <>
              <h1 className="exercise-header">Select an Exercise</h1>
              <div className="exercise-buttons">
                <button
                  className="exercise-button"
                  onClick={() => handleExerciseClick("Push-ups")}
                >
                  Push-ups
                </button>
                <button
                  className="exercise-button"
                  onClick={() => handleExerciseClick("Running")}
                >
                  Running (Duration)
                </button>
                <button
                  className="exercise-button"
                  onClick={() => handleExerciseClick("Running2")}
                >
                  Running (Laps)
                </button>
                <button
                  className="exercise-button"
                  onClick={() => handleExerciseClick("Plank")}
                >
                  Plank
                </button>
                <button
                  className="exercise-button"
                  onClick={() => handleExerciseClick("Squat")}
                >
                  Squat
                </button>
              </div>
            </>
          )}
        </header>
      </div>
    </>
  );
}

export default App;
