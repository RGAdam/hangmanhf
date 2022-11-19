import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Hangman from "../../components/Hangman/Hangman";
import Header from "../../components/Header/Header";
import Keyboard from "../../components/Keyboard/Keyboard";
import { GameContext } from "../../context/GameContext";

import "./GamePage.css";

const GamePage = () => {
  const {
    tries,
    difficulty,
    easyWords,
    mediumWords,
    hardWords,
    word,
    setWord,
    underscores,
    setUnderscores,
    softResetGame,
    hardResetGame,
  } = useContext(GameContext);

  let navigate = useNavigate();

  const getRandomWord = (array) => {
    const randomWord = array[Math.floor(Math.random() * array.length)];
    setWord(randomWord);
  };

  useEffect(() => {
    switch (difficulty) {
      case "Easy":
        getRandomWord(easyWords);
        break;
      case "Medium":
        getRandomWord(mediumWords);
        break;
      case "Hard":
        getRandomWord(hardWords);
        break;
      default:
        break;
    }
  }, []);

  const wordToUnderScores = () => {
    setUnderscores("_".repeat(word.length));
  };

  useEffect(() => {
    wordToUnderScores();
  }, [word]);

  useEffect(() => {
    if (tries === 10) {
      alert(`You lost! The word was ${word}.`);
      // TODO: not hard reset if game lost
      hardResetGame();
      navigate("/");
    }
  }, [tries]);

  useEffect(() => {
    if (underscores === word) {
      alert(`You won the game with ${tries} errors.`);
      // TODO: not hard reset if game lost
      hardResetGame();
      navigate("/");
    }
  }, [underscores]);

  return (
    <div className="outer-wrapper">
      <div className="inner-wrapper">
        <Header />
        <p>{underscores}</p>
        <div className="game">
          <p>{tries}/10</p>
          <Hangman source={`hangman-${tries + 1}`} />
        </div>
        <Keyboard />
      </div>
    </div>
  );
};

export default GamePage;
