import React, { useState } from "react";
import "./App.css";
import WheelComponent from "react-wheel-of-prizes";

export default function App() {
  const segments = [
    "Ibrahim",
    "Jashim",
    "Jisan",
    "Teebro",
    "Hasibul",
    "Rifat"
  ];
  const segColors = ["#EE4040", "#F0CF50", "#815CD1", "#3DA5E0", "#34A24F"];

  // Initialize the winnerName state
  const [winnerName, setWinnerName] = useState(null);

  const onFinished = (winner) => {
    // Set the winner's name when the spin is finished
    setWinnerName(winner);
  };

  return (
    <div className="App">
      <h1>Spin Wheel(WPXPO)</h1>
      <div>
        <WheelComponent
          segments={segments}
          segColors={segColors}
          onFinished={(winner) => onFinished(winner)}
          primaryColor="black"
          contrastColor="white"
          buttonText="Spin It"
          isOnlyOnce={false}
          size={190}
          upDuration={500}
          downDuration={600}
          fontFamily="Arial"
        />
      </div>
      <h2  className="winner">Winner is : {winnerName}</h2> {/* Display the winner's name */}
    </div>
  );
}
