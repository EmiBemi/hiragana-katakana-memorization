import React, { createContext, useContext } from "react";
import { useLocalStorage } from "../utils/useLocalStorage";

type Character = { value: string; label: string };

interface CharacterContextProps {
  disableDiagraphs: boolean;
  setDisableDiagraphs: (value: boolean) => void;
  characterSet: Character[];
  setCharacterSet: (value: Character[]) => void;
}

const CharacterContext = createContext<CharacterContextProps | null>(null);

export const CharacterProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [disableDiagraphs, setDisableDiagraphs] = useLocalStorage(
    "disableDiagraphs",
    false
  );
  const [characterSet, setCharacterSet] = React.useState<Character[]>([]);
  return (
    <CharacterContext.Provider
      value={{
        disableDiagraphs,
        setDisableDiagraphs,
        characterSet,
        setCharacterSet,
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
};

export const useCharacter = () => {
  const context = useContext(CharacterContext);

  if (context === null) {
    throw new Error("useCharacter must be used within a CharacterProvider");
  }

  return context;
};
