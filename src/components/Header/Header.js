import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GameContext } from "../../context/GameContext";
import Button from "../Button/Button";
import "./Header.css";

const Header = () => {
  let navigate = useNavigate();

  const { difficulty, hardResetGame } = useContext(GameContext);

  const routeChangeHandler = () => {
    hardResetGame();
    navigate("/");
  };

  return (
    <div className="outer-header">
      <Button onClick={routeChangeHandler}>Home</Button>
      <p>Difficulty level: {difficulty}</p>
      <div className="inner-header">
        <Button type="">Reset</Button>
        <Button type="">Save results</Button>
      </div>
    </div>
  );
};

export default Header;
