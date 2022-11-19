import { useContext } from "react";
import { GameContext } from "../../context/GameContext";
import "./Keyboard.css";

const Keyboard = () => {
  const { tries, setTries, checkIfLetterInWord, underscores, setUnderscores } =
    useContext(GameContext);

  const keys = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  const setCharAt = (string, index, char) => {
    if (index > string.length - 1) return string;
    return string.substring(0, index) + char + string.substring(index + 1);
  };

  const clickHandler = (event) => {
    event.target.disabled = true;
    let indexesOfMatches = checkIfLetterInWord(event.target.value);
    if (indexesOfMatches) {
      let newUnderscores = underscores;

      indexesOfMatches.forEach((index) => {
        newUnderscores = setCharAt(
          newUnderscores,
          index,
          event.target.value.toLowerCase()
        );
      });

      setUnderscores(newUnderscores);
    } else {
      setTries(tries + 1);
    }
  };

  return (
    <div className="keyboard-wrapper">
      {keys.map((key, i) => {
        return (
          <button
            className="key"
            onClick={(event) => clickHandler(event)}
            key={i}
            value={key}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
};

export default Keyboard;
