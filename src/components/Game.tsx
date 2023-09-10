import React from "react";
import "./Game.css";

/**
 * TODO:
 * - Back navigation
 * - Speedrun mode
 * - End screen
 * - What to do when the user is stuck?
 * */

interface GameProps {
  characters: { label: string; value: string }[];
}

export const Game = ({ characters }: GameProps) => {
  const [input, setInput] = React.useState("");
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [error, setError] = React.useState(false);

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
      }}
    >
      <div className="character__container">
        <div
          className={
            !error
              ? "character__label"
              : `character__label character__label--error`
          }
        >
          {characters[currentIndex].label}
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
