import React from "react";
import { useNavigate } from "react-router-dom";
import "./TopBar.css";
import { useCharacter } from "../pages/CharacterProvider";

export const TopBar = ({ children }: { children: React.ReactNode }) => {
  const { disableDiagraphs, setDisableDiagraphs } = useCharacter();

  const navigate = useNavigate();

  return (
    <div>
      <button className="back-navigation" onClick={() => navigate("/")}>
        Home
      </button>
      <div className="checkbox-inputs">
        <input
          type="checkbox"
          id="disableDiagraphs"
          checked={disableDiagraphs}
          onChange={(e) => setDisableDiagraphs(e.target.checked)}
        />
        <label htmlFor="disableDiagraphs">Disable diagraphs</label>
      </div>
      {children}
    </div>
  );
};
