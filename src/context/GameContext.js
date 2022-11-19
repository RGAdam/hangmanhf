import { createContext, useState } from "react";

export const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [tries, setTries] = useState(0);
  const [difficulty, setDifficulty] = useState("");
  const [word, setWord] = useState("");
  const [underscores, setUnderscores] = useState("");

  const checkIfLetterInWord = (letter) => {
    const lowerLetter = letter.toLowerCase();
    const indexesOfMatches = [];

    if (word.indexOf(lowerLetter) !== -1) {
      for (let i = 0; i < word.length; i++) {
        if (word.charAt(i) === lowerLetter) {
          indexesOfMatches.push(i);
        }
      }

      return indexesOfMatches;
    } else {
      return false;
    }
  };

  const hardResetGame = () => {
    setTries(0);
    setDifficulty("");
    setWord("");
    setUnderscores("_");
  };

  const softResetGame = () => {
    setTries(0);
  };

  const easyWords = [
    "react",
    "team",
    "proof",
    "agency",
    "design",
    "grow",
    "work",
  ];

  const mediumWords = [
    "project",
    "website",
    "support",
    "quality",
    "splendex",
    "angular",
  ];

  const hardWords = [
    "proofagency",
    "awesomeness",
    "wordpress",
    "woocommerce",
    "javascript",
    "development",
    "transparency",
    "partnership",
  ];

  return (
    <GameContext.Provider
      value={{
        tries,
        setTries,
        difficulty,
        setDifficulty,
        word,
        setWord,
        underscores,
        setUnderscores,
        easyWords,
        mediumWords,
        hardWords,
        checkIfLetterInWord,
        hardResetGame,
        softResetGame,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameProvider;
