import { useContext } from "react";
import { GameContext } from "../../context/GameContext";
import "./DifficultySelector.css";

const DifficultySelector = () => {
  const { setDifficulty } = useContext(GameContext);

  const onChangeHandler = (event) => {
    setDifficulty(event.target.value);
  };

  return (
    <select onChange={onChangeHandler}>
      <option value="">Select difficulty</option>
      <option value="Easy">Easy</option>
      <option value="Medium">Medium</option>
      <option value="Hard">Hard</option>
    </select>
  );
};

export default DifficultySelector;
