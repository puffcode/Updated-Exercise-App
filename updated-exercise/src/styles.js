import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@200;600&display=swap');

  .App {
    text-align: center;
    background-color: #FFFFFF;
  }

  .App-header {
    background-color: #FFFFFF;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: black;
  }

  .exercise-buttons {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .exercise-button {
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: #61dafb;
    color: #282c34;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .exercise-button:hover {
    background-color: #21a1f1;
  }

  .duration-screen, .repetition-screen {
    text-align: center;
    padding: 20px;
  }

  .duration-exercise, .repetition-exercise {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .duration-exercise .timer {
    font-size: 2em;
    margin: 20px 0;
  }

  .duration-exercise button, .repetition-exercise button, .back-button {
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: #61dafb;
    color: #282c34;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin: 5px;
  }

  .duration-exercise button:hover, .repetition-exercise button:hover, .back-button:hover {
    background-color: #21a1f1;
  }

  .home-header {
    color: black; 
    text-shadow: -2px 2px rgba(0, 0, 0, 0.5); 
    font-family: 'Roboto', sans-serif;
    font-weight: 600; 
  }

  .exercise-header {
    color: black; 
    text-shadow: -2px 2px rgba(0, 0, 0, 0.5); 
    font-family: 'Roboto', sans-serif;
    font-weight: 200; 
  }

  .exercise-title {
    color: black; 
    text-shadow: -2px 2px rgba(0, 0, 0, 0.5); 
    font-family: 'Roboto', sans-serif;
    font-weight: 600; 
  }
`;

export default GlobalStyle;
