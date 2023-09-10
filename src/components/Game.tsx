import React from "react";
import "./Game.css";

/**
 * TODO:
 * - Speedrun mode
 * - End screen
 * - Score should not count incorrect characters
 * */

interface GameProps {
  characters: { label: string; value: string }[];
}

export const Game = ({ characters }: GameProps) => {
  const [input, setInput] = React.useState("");
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [error, setError] = React.useState(false);
  const [score, setScore] = React.useState(0);

  const isDone = characters.length === currentIndex;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (input !== characters[currentIndex].value) {
          setError(true);
          setInput("");
          setTimeout(() => {
            setError(false);
          }, 500);
          return;
        }
        setCurrentIndex((c) => c + 1);
        setInput("");
        setError(false);
        setScore((c) => c + 1);
      }}
    >
      <div className="character__container">
        {error && (
          <span className="character__answer">
            {characters[currentIndex]?.value}
          </span>
        )}

        <div
          className={`character__label${
            error ? " character__label--error" : ""
          }${isDone ? " character__label--done" : ""}`}
        >
          {!isDone ? characters[currentIndex]?.label : "🏅"}
        </div>

        <div className="character__score">
          Progress: {`${score}/${characters.length}`}
        </div>

        <div className="character__actions">
          <input
            className="character__input"
            autoFocus
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder=""
          />
          <button type="submit">Enter</button>
        </div>
      </div>
    </form>
  );
};
