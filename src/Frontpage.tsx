import { useNavigate } from "react-router-dom";
import "./Frontpage.css";

export const Frontpage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="game-container">
        <div className="game-logo">え</div>
      </div>
      <div>
        <h1 className="game-title">
          <span className="hiragana-english">
            <span className="hiragana-japanese">ひらがな</span>Hiragana
          </span>{" "}
          &{" "}
          <span className="katakana-english">
            <span className="katakana-japanese">カタカナ</span>Katakana
          </span>
          <br />
          memorization game
        </h1>
      </div>
      <div className="play-buttons">
        <button onClick={() => navigate("/hiragana")}>Hiragana</button>
        <button onClick={() => navigate("/katakana")}>Katakana</button>
      </div>
      <p className="helper-text">
        Click on one of the buttons to start playing!
      </p>
      <footer>
        By{" "}
        <a href="https://github.com/EmiBemi" target="_blank">
          emibemi
        </a>
      </footer>
    </>
  );
};
